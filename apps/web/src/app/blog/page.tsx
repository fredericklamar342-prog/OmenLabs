import { Layout } from "@/components/layout/Layout";
import { BookOpen, Sparkles, MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <Layout>
      <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#060A0D] text-foreground">
        <div className="pointer-events-none absolute inset-0 omen-bg" />
        <div className="pointer-events-none absolute inset-0 omen-grid opacity-10" />

        <div className="max-container w-full flex flex-col items-center text-center px-4 relative z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 rounded-[32px] bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(67,182,213,0.2)] animate-float"
          >
            <BookOpen className="w-10 h-10 text-primary" />
          </motion.div>

          <span className="text-[11px] font-black tracking-[0.6em] text-primary uppercase mb-6 block opacity-80">
            Intelligence Engine
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-8 italic">
            Omen <span className="text-primary italic">Intelligence</span>
          </h1>

          <p className="text-body text-xl font-medium max-w-[700px] mb-16 leading-relaxed opacity-80">
            We are preparing deep-dive research into programmable security, proof of trust mechanics, and decentralized identity primitives. Stay anchored for our inaugural release.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
            <Button size="lg" className="w-full h-16 gap-3 text-lg font-black italic shadow-[0_0_30px_rgba(67,182,213,0.3)]" asChild>
              <Link href="/">
                Return Base <MoveRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="w-full h-16 gap-3 glass-panel text-lg font-black italic" asChild>
              <a href="https://x.com/OmenLabs" target="_blank" rel="noopener noreferrer">
                Transmit Signal
              </a>
            </Button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-24 flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl shadow-2xl"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-[12px] font-black uppercase tracking-[0.2em] text-primary">
              Protocol Beta Launching Soon
            </span>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

