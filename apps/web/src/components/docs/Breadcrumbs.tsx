"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronRight,
  Home
} from "lucide-react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center gap-2 mb-8 text-[11px] font-bold uppercase tracking-widest text-subtext/40">
      <Link href="/" className="hover:text-accent transition-colors flex items-center gap-2">
        <Home className="w-3 h-3" />
      </Link>
      
      {paths.map((p, i) => {
        const href = `/${paths.slice(0, i + 1).join("/")}`;
        const isLast = i === paths.length - 1;
        const name = p.replace(/-/g, " ");

        return (
          <div key={p} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3" />
            <Link 
              href={href} 
              className={`hover:text-accent transition-colors ${isLast ? "text-subtext" : ""}`}
            >
              {name}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

