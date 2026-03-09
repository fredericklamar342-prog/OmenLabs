import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { FileText, ShieldAlert, Cpu, Layers } from "lucide-react";

export default function BlogPage() {
  const categories = [
    { title: "Research", icon: FileText, desc: "Deep dives into protocol architecture and cryptography." },
    { title: "Security Insights", icon: ShieldAlert, desc: "Threat landscape analysis and vulnerability reports." },
    { title: "Ecosystem Updates", icon: Cpu, desc: "Integration news and ecosystem growth." },
    { title: "Product Announcements", icon: Layers, desc: "New features, releases, and updates to the Omen SDK." }
  ];

  return (
    <Layout>
      <div className="max-container pb-24 lg:pb-32 mt-12">
        <PageHeader 
          title="Omen Blog" 
          description="Technical insights, protocol updates, and security research from the Omen Labs team."
        />
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fade-up">
          {categories.map((cat, i) => (
            <div key={i} className="glass-card p-6 border border-[#2B5C92]/10 flex flex-col items-start gap-4 hover:border-[#2B5C92]/30 transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-[#EAF3FA] flex items-center justify-center border border-[#0E2F76]/10 group-hover:bg-[#0E2F76] transition-colors">
                <cat.icon className="w-5 h-5 text-[#2B5C92] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1220] mb-2">{cat.title}</h3>
                <p className="text-[13px] text-[#5B6B82] leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-24 text-center glass-panel border border-black/5 rounded-[24px]">
          <h2 className="text-2xl font-bold text-[#0B1220] mb-4">No Posts Yet</h2>
          <p className="text-[#4A5568] max-w-md">
            We are currently building the first iteration of the Omen Protocol. Check back soon for our introductory research papers and engineering updates.
          </p>
        </div>
      </div>
    </Layout>
  );
}
