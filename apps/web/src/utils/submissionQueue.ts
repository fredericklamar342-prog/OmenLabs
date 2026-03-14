"use client";

type QueuedSubmission = {
  id: string;
  email: string;
  source: string;
  timestamp: number;
  retryCount: number;
};

const STORAGE_KEY = "omen_waitlist_queue";
const MAX_RETRIES = 5;
const RETRY_DELAY = 5000; // 5 seconds initial

export class SubmissionQueue {
  private static getQueue(): QueuedSubmission[] {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to read submission queue:", e);
      return [];
    }
  }

  private static saveQueue(queue: QueuedSubmission[]) {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(queue));
    } catch (e) {
      console.error("Failed to save submission queue:", e);
    }
  }

  static enqueue(email: string, source: string) {
    const queue = this.getQueue();
    
    // Prevent duplicate entries for the same email in the queue
    if (queue.find(item => item.email === email)) return;

    const newItem: QueuedSubmission = {
      id: Math.random().toString(36).substring(7),
      email,
      source,
      timestamp: Date.now(),
      retryCount: 0,
    };

    queue.push(newItem);
    this.saveQueue(queue);
    
    // Register online listener
    if (typeof window !== "undefined") {
      window.addEventListener("online", () => this.processQueue(), { once: true });
    }
  }

  static async processQueue() {
    if (typeof window === "undefined" || !navigator.onLine) return;

    const queue = this.getQueue();
    if (queue.length === 0) return;

    console.log(`Processing ${queue.length} queued submissions...`);

    const remainingItems: QueuedSubmission[] = [];

    for (const item of queue) {
      try {
        const response = await fetch("/api/early-access", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: item.email, source: item.source }),
        });

        if (response.ok || response.status === 400 || response.status === 409) {
          // Success or permanent failure (invalid format/duplicate) - remove from queue
          continue;
        }

        // Transient failure
        throw new Error(`Server returned ${response.status}`);
      } catch (err) {
        console.error(`Failed to process queued email ${item.email}:`, err);
        
        if (item.retryCount < MAX_RETRIES) {
          remainingItems.push({
            ...item,
            retryCount: item.retryCount + 1,
            timestamp: Date.now(),
          });
        }
      }
    }

    this.saveQueue(remainingItems);

    if (remainingItems.length > 0) {
      // Schedule next retry with exponential backoff
      const nextDelay = RETRY_DELAY * Math.pow(2, remainingItems[0].retryCount - 1);
      setTimeout(() => this.processQueue(), nextDelay);
    }
  }
}

// Auto-process on load if online
if (typeof window !== "undefined" && navigator.onLine) {
  SubmissionQueue.processQueue();
}
