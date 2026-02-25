import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Shield, Database, UserCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 md:py-40 flex flex-col items-center text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Trust is the new<br />Asset Class.
          </h1>
          <p className="text-xl md:text-2xl text-subtext max-w-2xl mx-auto mb-12 leading-relaxed">
            Omen Protocol provides the fundamental infrastructure for identity, risk, and intent enforcement on Sui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-14 px-10 text-lg rounded-none">
              <Link href="/alpha">Join Private Alpha</Link>
            </Button>
            <Button asChild variant="secondary" className="h-14 px-10 text-lg rounded-none">
              <Link href="/docs">SDK Documentation</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Database className="w-8 h-8 text-accent" />,
            title: "Registry — Source of Truth",
            description: "A decentralized repository of verified protocol metadata and security audits."
          },
          {
            icon: <UserCheck className="w-8 h-8 text-accent" />,
            title: "Badge — Programmable Identity",
            description: "Enforce granular permissions and trust levels across the entire Sui ecosystem."
          },
          {
            icon: <Shield className="w-8 h-8 text-accent" />,
            title: "SDK Shield — Enforced Security",
            description: "Simple integration to prevent malicious transactions before they reach the chain."
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="p-8 border border-border flex flex-col gap-4 bg-white/50 backdrop-blur"
          >
            {feature.icon}
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-subtext">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Code Section */}
      <section className="py-24 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Programmable Trust.
            </h2>
            <p className="text-lg text-subtext italic">
              “If trust drops, trades fail at the blockchain level.”
            </p>
            <div className="flex items-center gap-2 text-accent font-medium">
              <span>Explore the SDK</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="bg-foreground p-8 font-mono text-sm overflow-x-auto shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-border/20" />
              <div className="w-3 h-3 rounded-full bg-border/20" />
              <div className="w-3 h-3 rounded-full bg-border/20" />
            </div>
            <code className="text-background block whitespace-pre">
{`omen.injectSecurityAssertion(tx, {
  targetContract: POOL_ID,
  minScore: 85
});`}
            </code>
          </div>
        </div>
      </section>
    </Layout>
  );
}
