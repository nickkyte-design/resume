import type { ResumeData } from "@/types/resume";

/**
 * Central source of truth for resume content.
 * Sourced from Nicholas Kyte's resume PDF — update here only.
 */
export const resumeData: ResumeData = {
  name: "Nicholas Kyte",
  title: "Senior Network Engineer",
  greeting: "Hello, I'm",
  summary:
    '"Bias for Action" Network Engineer with nearly two decades of infrastructure experience, specializing in automating and scaling large-scale IP networks and AI superclusters within hyper-scale data centers. Proven track record of implementing CI/CD and DevOps automations that eliminate hundreds of manual engineering hours. Automation is how we accelerate, but productive XFN team meetings are how we maintain velocity.',
  cvDownloadPath: "/cv/nicholas-kyte-network-engineer.pdf",
  contact: {
    email: "nicholaskyte@proton.me",
    phone: "(925) 708-2585",
    showPhoneOnSite: false,
    linkedin: "https://www.linkedin.com/in/nicholaskyte",
    github: "https://github.com/nickkyte-design",
    location: "Martinez, CA",
  },
  experience: [
    {
      id: "exp-meta-dc",
      title: "Network Engineer, DC Deployment",
      company: "Meta (Tenarai)",
      startDate: "08/2025",
      endDate: "Present",
      summary:
        "Driving the deployment, testing, and migration of the production networks that power Meta's global applications and massive GenAI superclusters. The execution arm of the Edge and Network Services Team.",
      highlights: [
        "Writing and executing training programs for the ENS-DC-DS team which halved onboarding time for new hires from 4 months to 2.",
        "Composed and managed a centralized network infrastructure knowledge base for a 24x7x365 deployment team, standardizing engineering workflows and drastically reducing project delivery errors.",
        "Designed and coded Python dashboards and operational workflows that expanded Zero Touch Provisioning (ZTP) automation for hyperscale AI network devices, significantly accelerating deployment dates and reducing communication delays.",
        "Manage a 14-member engineering team responsible for the end-to-end provisioning, rack turn-ups, and circuit audits of hyperscale AI NSF fabrics.",
      ],
    },
    {
      id: "exp-meta-peering",
      title: "Network Engineer, Peering — Circuit Provisioning",
      company: "Meta (Tenarai)",
      startDate: "10/2022",
      endDate: "07/2025",
      summary: "End-to-end turn-up of BGP peering links to service providers.",
      highlights: [
        "Pilot Provisioner on TPR optical devices for GenAI and Oracle Cloud Infrastructure, ensuring timely delivery of high-priority circuits/cross-connects with P0 service providers.",
        "Led capacity-add projects from start to finish at Meta's Edge POPs. Skills in colocation, BOMs, SOWs, and RFEs.",
        "CIP rollouts of automation workflows such as peering_activate_interface and peering_bgp_peer_removal, significantly reducing manual CLI work and saving 8–10 hours per week of engineer time on peering circuit provisioning.",
      ],
    },
    {
      id: "exp-cfm",
      title: "Inside Sales Engineer",
      company: "CFM-SF",
      startDate: "03/2018",
      endDate: "10/2022",
      summary: "Technical analysis and proposal of industrial automation systems.",
      highlights: [
        "Engineered, wrote, and presented multi-line industrial and municipal project bids for competitive instrumentation projects.",
        "Led client engagements to identify engineering solutions, resulting in a 20% increase in project bids within 12 months through increasingly technical presentations.",
      ],
    },
    {
      id: "exp-rki",
      title: "Field Service Engineer",
      company: "RKI Instruments",
      startDate: "08/2017",
      endDate: "03/2018",
      summary:
        "Troubleshot, repaired, tested, and calibrated analog and digital controls.",
      highlights: [
        "Interacted with clients' engineering, scientific, and technical personnel from laboratory organizations and industries to recommend equipment, regulatory, and upgrade opportunities ensuring systems meet compliance requirements.",
      ],
    },
    {
      id: "exp-att-premises",
      title: "Premises Technician",
      company: "AT&T",
      startDate: "05/2013",
      endDate: "08/2017",
      highlights: [
        "Hands-on infrastructure troubleshoot and implementation of Wi-Fi access points, routers, LANs, WANs, VoIP, firewalls, access lists, cabling, and XGS-GPON.",
      ],
    },
    {
      id: "exp-att-splicing",
      title: "Splicing Technician",
      company: "AT&T",
      startDate: "05/2013",
      endDate: "08/2017",
      highlights: [
        "Reviewed, analyzed, and updated complex metro regional fiber optic schematic drawings.",
        "Sized, placed, identified, spliced, and tested copper and fiber optic cables.",
      ],
    },
    {
      id: "exp-astound",
      title: "Broadband Technician IV",
      company: "Astound Broadband",
      startDate: "08/2004",
      endDate: "05/2013",
      highlights: [
        "Performed on-site analysis and repair of data, video, telephony, and security systems.",
        "Trained co-workers on RF digital signal meters and advanced troubleshooting techniques.",
      ],
    },
    {
      id: "exp-rcn-system",
      title: "System Technician",
      company: "RCN",
      startDate: "09/2000",
      endDate: "08/2004",
      highlights: [
        "Maintained and repaired RCN's 19-town outside-plant footprint 24x7; troubleshot signal delivery problems headend to plant.",
        "Read design and as-built blueprints of company infrastructure and submitted changes.",
      ],
    },
    {
      id: "exp-rcn-transport",
      title: "Data Transport Technician",
      company: "RCN",
      startDate: "09/2000",
      endDate: "08/2004",
      highlights: [
        "Installed, maintained, and repaired Cable Modem Termination Systems for RCN Metro-Boston.",
        "Coordinated with headend, outside plant techs, and end users to establish problem areas and methods to correct signal issues and bandwidth upgrades.",
      ],
    },
  ],
  skills: [
    {
      id: "infrastructure",
      name: "Infrastructure & Routing",
      skills: [
        "Arista",
        "BGP",
        "Cisco",
        "DHCP",
        "DNS",
        "EtherChannel",
        "FBOSS",
        "Firewalls",
        "IPv4/IPv6",
        "Juniper",
        "Layers 1/2/3",
        "OCP",
        "Routing",
        "STP",
        "Switching",
        "TCP/IP",
        "VMware Environments",
        "VPNs",
      ],
    },
    {
      id: "ai-networking",
      name: "AI & High-Performance Networking",
      skills: ["Fabric Architecture", "Gaudi", "RDMA", "RoCE"],
    },
    {
      id: "automation",
      name: "Automation & Systems",
      skills: ["Bash", "CI/CD", "DevOps", "Python", "Unix", "ZTP"],
    },
    {
      id: "procedures",
      name: "Procedures & Tools",
      skills: [
        "BOM",
        "PeeringDB",
        "Project Management",
        "SOW",
        "Technical Documentation",
      ],
    },
  ],
  certifications: [
    {
      id: "cert-ccna",
      name: "CCNA",
      issuer: "Cisco",
      date: "12/2025",
      expires: "12/2028",
      status: "active",
    },
  ],
  projects: [
    {
      id: "proj-ccnp-sp",
      name: "CCNP Service Provider",
      startDate: "01/2026",
      endDate: "Present",
      description: "In progress — advancing service provider networking expertise.",
    },
  ],
};
