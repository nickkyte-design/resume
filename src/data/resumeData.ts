import type { ResumeData } from "@/types/resume";

/**
 * Central source of truth for resume content.
 * Update this file when your PDF resume details are finalized —
 * no need to touch React components.
 */
export const resumeData: ResumeData = {
  name: "Nicholas Kyte",
  title: "Network Engineer",
  greeting: "Hello, I'm",
  summary:
    "Network engineer with a passion for automation, reliability, and continuous learning. I design and maintain resilient infrastructure while building practical tools with Python to streamline operations. Currently expanding into full-stack development to bridge networking expertise with modern software practices.",
  cvDownloadPath: "/cv/nicholas-kyte-network-engineer.pdf",
  contact: {
    email: "nicholas.kyte@example.com",
    linkedin: "https://www.linkedin.com/in/nicholaskyte",
    github: "https://github.com/nicholaskyte",
    location: "Available upon request",
  },
  experience: [
    {
      id: "exp-1",
      title: "Network Engineer",
      company: "Your Current Employer",
      location: "City, State",
      startDate: "2022",
      endDate: "Present",
      highlights: [
        "Designed, deployed, and maintained enterprise LAN/WAN infrastructure supporting business-critical operations.",
        "Automated repetitive network tasks using Python scripts, reducing manual configuration time.",
        "Collaborated with cross-functional teams on network security policies, monitoring, and incident response.",
        "Documented network topologies, runbooks, and change procedures to improve team knowledge sharing.",
      ],
    },
    {
      id: "exp-2",
      title: "Junior Network Technician",
      company: "Previous Employer",
      location: "City, State",
      startDate: "2019",
      endDate: "2022",
      highlights: [
        "Supported day-to-day network operations including troubleshooting connectivity and performance issues.",
        "Assisted with switch, router, and firewall configuration under senior engineer guidance.",
        "Maintained accurate inventory of network hardware and cabling documentation.",
      ],
    },
  ],
  skills: [
    {
      id: "networking",
      name: "Networking",
      skills: [
        "TCP/IP",
        "Routing & Switching",
        "VLANs",
        "BGP/OSPF",
        "DNS/DHCP",
        "Firewalls",
        "VPN",
        "Wi-Fi",
      ],
    },
    {
      id: "automation",
      name: "Automation & Scripting",
      skills: ["Python", "Bash", "Ansible", "REST APIs", "Git", "Network Automation"],
    },
    {
      id: "tools",
      name: "Tools & Platforms",
      skills: [
        "Cisco IOS",
        "Linux",
        "Wireshark",
        "Monitoring (SNMP/NetFlow)",
        "Ticketing Systems",
        "Documentation",
      ],
    },
    {
      id: "learning",
      name: "Currently Learning",
      skills: ["TypeScript", "React", "Next.js", "Docker", "Cloud Networking"],
    },
  ],
};
