"use client";

import { DocsSidebar } from "./DocsSidebar";
import { TableOfContents } from "./TableOfContents";
import { Breadcrumbs } from "./Breadcrumbs";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <Layout>
      <div className="flex w-full min-h-screen pt-28 max-container relative">
        {/* Decorative Grid Overlays for Docs */}
        <div className="pointer-events-none absolute inset-0 omen-grid opacity-10" />

        {/* Left Sidebar - Sticky */}
        <aside className="hidden lg:block w-80 shrink-0 sticky top-28 h-[calc(100vh-140px)] overflow-y-auto scrollbar-hide border-r border-white/5 pr-4">
          <DocsSidebar />
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 w-full flex flex-col items-center">
          <main className="w-full max-w-4xl px-8 md:px-12 lg:px-20 py-12 space-y-16 min-h-screen">
            <Breadcrumbs />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {children}
            </motion.div>

            {/* Pagination / Navigation Actions at the bottom */}
            <div className="pt-20 border-t border-white/5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-24">
                <a href="#" className="w-full sm:w-auto group flex flex-col gap-3 p-8 border border-white/10 rounded-3xl bg-panel/30 backdrop-blur-3xl hover:border-primary/40 hover:bg-primary/5 transition-all">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-body/40">Previous</span>
                  <span className="text-lg font-black text-foreground group-hover:text-primary transition-colors italic tracking-tight">Documentation Home</span>
                </a>
                <a href="#" className="w-full sm:w-auto group flex flex-col gap-3 p-8 border border-white/10 rounded-3xl bg-panel/30 backdrop-blur-3xl hover:border-primary/40 hover:bg-primary/5 transition-all text-right items-end">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-body/40">Next</span>
                  <span className="text-lg font-black text-foreground group-hover:text-primary transition-colors italic tracking-tight">SDK Installation</span>
                </a>
              </div>
            </div>
          </main>
        </div>

        {/* Right Sidebar - Sticky TOC */}
        <aside className="hidden xl:block w-80 shrink-0 sticky top-28 h-[calc(100vh-140px)] overflow-y-auto pl-8 border-l border-white/5">
          <TableOfContents />
        </aside>
      </div>
    </Layout>
  );
}

