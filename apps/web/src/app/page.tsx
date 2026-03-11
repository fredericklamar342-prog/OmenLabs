
import dynamic from "next/dynamic";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";

// Dynamically import sections below the fold to improve performance
const EverydayUsersSection = dynamic(() => import("@/components/sections/EverydayUsersSection").then(mod => mod.EverydayUsersSection), { ssr: true });
const BenefitsGrid = dynamic(() => import("@/components/sections/BenefitsGrid").then(mod => mod.BenefitsGrid), { ssr: true });
const TrustSection = dynamic(() => import("@/components/sections/TrustSection").then(mod => mod.TrustSection), { ssr: true });
const SdkSection = dynamic(() => import("@/components/sections/SdkSection").then(mod => mod.SdkSection), { ssr: true });
const DeveloperEcosystemSection = dynamic(() => import("@/components/sections/DeveloperEcosystemSection").then(mod => mod.DeveloperEcosystemSection), { ssr: true });
const ArchitectureSection = dynamic(() => import("@/components/sections/ArchitectureSection").then(mod => mod.ArchitectureSection), { ssr: true });
const BottomCta = dynamic(() => import("@/components/sections/BottomCta").then(mod => mod.BottomCta), { ssr: true });
const MetricsBar = dynamic(() => import("@/components/sections/MetricsBar").then(mod => mod.MetricsBar), { ssr: true });
const TeamSection = dynamic(() => import("@/components/sections/TeamSection").then(mod => mod.TeamSection), { ssr: true });
const VisionSection = dynamic(() => import("@/components/sections/VisionSection").then(mod => mod.VisionSection), { ssr: true });

/**
 * PRODUCTION-READY LANDING PAGE
 * 
 * Performance Optimized:
 * - Above-the-fold content (Hero) loaded normally
 * - Below-the-fold content loaded dynamically
 * - Optimized Framer Motion Transitions
 */
export default function Home() {
  return (
    <Layout>
      <main id="main-content">
        <HeroSection />
        <EverydayUsersSection />
        <BenefitsGrid />
        <TrustSection />
        <SdkSection />
        <DeveloperEcosystemSection />
        <ArchitectureSection />
        <BottomCta />
        <MetricsBar />
        <TeamSection />
        <VisionSection />
      </main>
    </Layout>
  );
}

