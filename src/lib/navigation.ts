export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Resume", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Project Involvement", href: "/project-involvement" },
  { label: "Projects", href: "/projects" },
  { label: "GitHub", href: "/github" },
  { label: "Blog", href: "/blog" },
];
