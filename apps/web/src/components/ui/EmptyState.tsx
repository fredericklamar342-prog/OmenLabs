import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

function EmptyState({
  title,
  description,
  icon,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-[450px] flex-col items-center justify-center p-16 text-center border-2 border-dashed border-white/5 bg-panel/30 backdrop-blur-3xl transition-all duration-500 relative overflow-hidden rounded-[48px] group",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-primary/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
      
      {icon && <div className="mb-10 text-primary/20 group-hover:text-primary/40 transition-colors duration-500 scale-150 transform">{icon}</div>}
      
      <h3 className="text-3xl font-black tracking-tighter text-foreground italic uppercase">
        {title}
      </h3>
      
      {description && (
        <p className="mt-6 text-lg text-body/40 max-w-sm mx-auto italic leading-relaxed">
          {description}
        </p>
      )}
      
      {action && <div className="mt-12 relative z-10">{action}</div>}
    </div>
  );
}

export { EmptyState };

