
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { EverydayUsersSection } from "@/components/sections/EverydayUsersSection";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { TrustSection } from "@/components/sections/TrustSection";
import { SdkSection } from "@/components/sections/SdkSection";
import { DeveloperEcosystemSection } from "@/components/sections/DeveloperEcosystemSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { BottomCta } from "@/components/sections/BottomCta";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { TeamSection } from "@/components/sections/TeamSection";
import { VisionSection } from "@/components/sections/VisionSection";

/**
 * PRODUCTION-READY LANDING PAGE
 * 
 * Features:
 * - Fully Responsive (Tailwind + Custom Breakpoints)
 * - Optimized Framer Motion Transitions (60fps focus)
 * - Accessible ARIA structures
 * - Modular Component-based Design
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
