import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { EverydayUsersSection } from "@/components/sections/EverydayUsersSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { SdkSection } from "@/components/sections/SdkSection";
import { AgentLineageSection } from "@/components/sections/AgentLineageSection";
import { WalrusStorageSection } from "@/components/sections/WalrusStorageSection";
import { ProtocolPrimitivesSection } from "@/components/sections/ProtocolPrimitivesSection";
import { BottomCta } from "@/components/sections/BottomCta";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <Layout>
      <main id="main-content" className="space-y-0 relative">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Product Preview */}
        <EverydayUsersSection />

        <SectionDivider label="Core Primitives" metadata={['Move-Native Reputation', 'Deterministic Trust Oracles']} />

        {/* 3. Core Primitives */}
        <ProtocolPrimitivesSection />

        <SectionDivider label="Institutional Benefits" metadata={['Firewall V3 Integration', 'Sub-Zero Latency Verifiers']} />

        {/* 4. Benefits */}
        <BenefitsSection />

        <SectionDivider label="Operational Flow" metadata={['Real-time Verification', 'O(1) Data Retrieval']} />

        {/* 4. How Omen Works */}
        <HowItWorksSection />

        <SectionDivider label="Infrastructure Stack" metadata={['Sui Protocol Integration', 'Walrus Storage Anchors']} />

        {/* 5. Built on the Sui Stack (Infrastructure) */}
        <InfrastructureSection />

        <SectionDivider label="Developer Hub" metadata={['Omen SDK', 'MCP Tooling']} />

        {/* 6. Developer Integration (SDK) */}
        <SdkSection />

        <SectionDivider label="Persistence & Identity" metadata={['Agent Lineage Graphs', 'Soulbound OmenBadges']} />

        {/* Additional Protocol Context */}
        <AgentLineageSection />
        <WalrusStorageSection />

        {/* 7. Final CTA */}
        <BottomCta />
      </main>
    </Layout>
  );
}
