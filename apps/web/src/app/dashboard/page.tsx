"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { Search, AlertCircle, RefreshCcw } from "lucide-react";

// Mock Data
const MOCK_PROJECTS = [
  {
    id: "astra-finance",
    name: "Astra Finance",
    score: 98,
    status: "verified",
    auditRecency: "2 days ago",
    lastSignal: "Safe intent detected",
  },
  {
    id: "nebula-loop",
    name: "Nebula Loop",
    score: 65,
    status: "watchlist",
    auditRecency: "1 month ago",
    lastSignal: "Unusual liquidity shift",
  },
  {
    id: "void-swap",
    name: "Void Swap",
    score: 12,
    status: "revoked",
    auditRecency: "5 months ago",
    lastSignal: "Malicious contract upgrade",
  },
  {
    id: "cosmos-bridge",
    name: "Cosmos Bridge",
    score: 92,
    status: "verified",
    auditRecency: "1 week ago",
    lastSignal: "Standard operation",
  },
  {
    id: "lunar-lend",
    name: "Lunar Lend",
    score: 88,
    status: "verified",
    auditRecency: "3 days ago",
    lastSignal: "High collateral health",
  },
  {
    id: "solar-dex",
    name: "Solar DEX",
    score: 45,
    status: "watchlist",
    auditRecency: "2 weeks ago",
    lastSignal: "Owner key rotation",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = React.useState<string>("");
  const [isSimulatingRevocation, setIsSimulatingRevocation] = React.useState(false);

  React.useEffect(() => {
    // Initial load simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
      setLastUpdated(new Date().toLocaleString());
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = MOCK_PROJECTS.map(p => {
    if (isSimulatingRevocation && p.id === "astra-finance") {
      return { 
        ...p, 
        score: 4, 
        status: "revoked", 
        isBlocked: true,
        lastSignal: "SECURITY BREACH DETECTED" 
      };
    }
    return p;
  }).filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleRefresh = () => {
    setIsLoading(true);
    setError(null);
    setTimeout(() => {
      setIsLoading(false);
      setLastUpdated(new Date().toLocaleString());
    }, 1000);
  };

  const triggerError = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError("Failed to fetch latest trust indices. Please check your connection.");
    }, 800);
  };

  if (error) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto py-20">
          <EmptyState
            icon={<AlertCircle className="w-12 h-12 text-accent" />}
            title="System Error"
            description={error}
            action={
              <Button onClick={handleRefresh}>
                Try Again
              </Button>
            }
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Omen Partner Trust Index"
          description="Real-time identity and risk enforcement for the Sui ecosystem."
          action={
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2 text-xs text-subtext uppercase tracking-widest font-bold">
                <RefreshCcw className={`w-3 h-3 ${isLoading ? "animate-spin" : ""}`} />
                Last updated: {lastUpdated || "Checking..."}
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={isSimulatingRevocation ? "primary" : "secondary"} 
                  size="sm" 
                  onClick={() => setIsSimulatingRevocation(!isSimulatingRevocation)}
                  className={isSimulatingRevocation ? "bg-accent text-white border-accent shadow-[0_0_20px_rgba(139,0,0,0.3)]" : "border-2"}
                >
                  {isSimulatingRevocation ? "Omen Shield Active" : "Simulate Revocation"}
                </Button>
                <Button variant="secondary" size="sm" onClick={triggerError} className="border-2 font-bold uppercase tracking-tighter text-[10px]">
                  Simulate Error
                </Button>
              </div>
            </div>
          }
        />


        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-subtext" />
            <Input
              className="pl-10"
              placeholder="Search project or contract..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="border border-border bg-background overflow-hidden relative min-h-[400px]"
        >
          {isLoading ? (
            <div className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Project</TableHead>
                    <TableHead>Trust Score</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Audit Recency</TableHead>
                    <TableHead>Last Signal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(5)].map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-12" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-20" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="py-20">
              <EmptyState
                title="No results found"
                description={`We couldn't find any projects matching "${search}"`}
                action={
                  <Button variant="secondary" onClick={() => setSearch("")}>
                    Clear Search
                  </Button>
                }
              />
            </div>
          ) : (
            <div className="max-h-[600px] overflow-auto">
              <Table className="relative">
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[250px]">Project</TableHead>
                    <TableHead>Trust Score</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Audit Recency</TableHead>
                    <TableHead>Last Signal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjects.map((project) => (
                    <TableRow
                      key={project.id}
                      className={`cursor-pointer group ${project.status === "revoked" ? "opacity-75 grayscale bg-accent/5 ring-1 ring-accent/30" : ""}`}
                      onClick={() => router.push(`/dashboard/${project.id}`)}
                    >
                      <TableCell className="font-bold py-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 flex items-center justify-center font-bold text-xs ${project.status === "revoked" ? "bg-accent text-white" : "bg-gray-100"}`}>
                            {project.name.substring(0, 2).toUpperCase()}
                          </div>
                          <div className="flex flex-col">
                            {project.name}
                            {project.status === "revoked" && (
                              <span className="text-[10px] text-accent font-black uppercase tracking-tighter mt-1">
                                Blocked by Omen Shield
                              </span>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono font-bold ${
                            project.score > 80 ? "text-green-600" : 
                            project.score > 50 ? "text-orange-600" : "text-accent"
                          }`}>
                            {project.score}
                          </span>
                          <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                project.score > 80 ? "bg-green-600" : 
                                project.score > 50 ? "bg-orange-600" : "bg-accent"
                              }`}
                              style={{ width: `${project.score}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={project.status as any}>
                          {project.status.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-subtext text-sm">
                        {project.auditRecency}
                      </TableCell>
                      <TableCell className="text-sm font-medium">
                        {project.lastSignal}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
