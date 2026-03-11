"use client";

import { Clipboard, Check, Terminal, Code as CodeIcon } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = "bash", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-3xl overflow-hidden border border-white/5 bg-[#0D151C] shadow-2xl my-10 group">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5 backdrop-blur-3xl">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
          <span className="text-[11px] font-black tracking-[0.3em] uppercase text-body/40 font-mono italic">
            {filename || `${language}_shard`}
          </span>
        </div>
        <button 
          onClick={copy}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all text-body/40 hover:text-primary group/copy"
          title="Copy Shard"
        >
          <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">Copy</span>
          {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Clipboard className="w-3.5 h-3.5 group-hover/copy:scale-110 transition-transform" />}
        </button>
      </div>

      {/* Code */}
      <pre className="p-8 overflow-x-auto custom-scrollbar font-mono text-[15px] leading-relaxed text-primary/80 flex gap-5 bg-[#0D151C]/50">
        {language === "bash" && <span className="text-primary/20 select-none font-black italic">$</span>}
        <code className="block flex-1 text-foreground/90 font-medium selection:bg-primary/30">{code}</code>
      </pre>

      {/* Aesthetic radial glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl -z-10 pointer-events-none" />
    </div>
  );
}

