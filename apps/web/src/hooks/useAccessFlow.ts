import { useState, useTransition } from "react";

export type AccessFlowStatus = {
  type: "idle" | "loading" | "success" | "partial_success" | "already_exists" | "error";
  message: string;
};

interface UseAccessFlowProps {
  apiEndpoint: string;
  onSuccess?: () => void;
  successTimeout?: number;
}

export function useAccessFlow({ apiEndpoint, onSuccess, successTimeout = 2500 }: UseAccessFlowProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<AccessFlowStatus>({ type: "idle", message: "" });
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const submit = async (data: any) => {
    if (isPending) return;

    setErrors({});
    setStatus({ type: "loading", message: "" });

    startTransition(async () => {
      try {
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          const isPartial = result.emailStatus === 'failed';
          setStatus({ 
            type: isPartial ? "partial_success" : "success", 
            message: result.message 
          });
          
          if (onSuccess) {
            setTimeout(onSuccess, successTimeout);
          }
        } else if (result.type === "already_exists") {
          setStatus({ 
            type: "already_exists", 
            message: result.message 
          });
          
          if (onSuccess) {
            setTimeout(onSuccess, successTimeout);
          }
        } else if (response.status === 429) {
          setStatus({ 
            type: "error", 
            message: "Rate limit reached. Please wait a moment." 
          });
        } else {
          setStatus({ 
            type: "error", 
            message: result.error || "Sync error. Please try again." 
          });
          if (result.details) {
            setErrors(result.details);
          }
        }
      } catch (err) {
        setStatus({ 
          type: "error", 
          message: "Network exception. Check your link." 
        });
      }
    });
  };

  const reset = () => {
    setStatus({ type: "idle", message: "" });
    setErrors({});
  };

  return {
    submit,
    reset,
    status,
    isPending,
    errors,
  };
}
