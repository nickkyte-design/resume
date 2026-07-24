import type { ProjectInvolvementItem } from "@/types/projectInvolvement";

/**
 * Projects and initiatives with documented involvement.
 * Add new entries here as the page grows toward 4–6 items.
 */
export const projectInvolvementData: ProjectInvolvementItem[] = [
  {
    id: "prometheus-bag",
    title: "Building Prometheus: Gigawatt-Scale AI Clusters",
    organization: "Meta",
    year: "2026",
    url: "https://engineering.fb.com/2026/02/09/data-center-engineering/building-prometheus-how-backend-aggregation-enables-gigawatt-scale-ai-clusters/",
    description:
      "Prometheus is Meta's gigawatt-scale AI cluster, interconnecting tens of thousands of GPUs across multiple data center buildings in a single region. This engineering deep-dive covers Backend Aggregation (BAG)—the centralized Ethernet super-spine layer that connects regional spine fabrics, DSF, and NSF networks at petabit-scale bandwidth. BAG enables seamless GPU connectivity across data centers with resilient topologies, modular Jericho3 hardware, and eBGP routing with MACsec security.",
    tags: [
      "AI Infrastructure",
      "Data Center Networking",
      "Backend Aggregation",
      "Hyperscale",
    ],
  },
];
