import * as React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between py-16 border-b border-border mb-12 relative">
      <div className="absolute bottom-0 left-0 w-24 h-1 bg-accent" />
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground m-0 uppercase italic">
          {title}<span className="text-accent not-italic">.</span>
        </h1>
        {description && (
          <p className="text-lg text-subtext max-w-2xl font-medium leading-relaxed">{description}</p>
        )}
      </div>
      {action && <div className="flex items-center gap-4 pb-1">{action}</div>}
    </div>
  );
}
