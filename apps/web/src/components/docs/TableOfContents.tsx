"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Generate TOC items from h2 and h3 headers in current page
    const headings = Array.from(document.querySelectorAll("h2, h3"));
    const tocItems = headings.map((h) => ({
      id: h.id || h.textContent?.toLowerCase().replace(/\s+/g, "-") || "",
      text: h.textContent || "",
      level: parseInt(h.tagName[1]),
    }));

    headings.forEach((h, i) => {
      if (!h.id) h.id = tocItems[i].id;
    });

    setItems(tocItems);

    // Track active scroll position
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveId(visibleEntry.target.id);
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <aside className="w-full sticky top-40 pt-4 space-y-6">
      <div className="px-4 py-2 border-l border-border/50">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-subtext/40 mb-6">
          On This Page
        </h3>
        <nav className="space-y-4">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-[13px] font-medium leading-relaxed transition-all hover:text-accent ${
                activeId === item.id 
                  ? "text-accent translate-x-1" 
                  : "text-subtext"
              } ${item.level === 3 ? "pl-4 text-[12px]" : ""}`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>

      <div className="px-4 py-6 border-l border-border/50 group">
        <p className="text-[10px] text-subtext/40 font-bold uppercase tracking-[0.2em] mb-4">Support & Feedback</p>
        <div className="space-y-3">
          <a href="#" className="block text-xs font-medium text-subtext hover:text-accent transition-colors">Edit this page on GitHub</a>
          <a href="#" className="block text-xs font-medium text-subtext hover:text-accent transition-colors">Join our Discord</a>
        </div>
      </div>
    </aside>
  );
}

