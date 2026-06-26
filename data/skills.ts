export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST / GraphQL"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Vercel", "Figma", "CI/CD"],
  },
];
