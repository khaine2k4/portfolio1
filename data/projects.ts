// Language-independent metadata for projects (images, links & category).
// Text (title, description, tags) lives in data/translations.ts and is
// merged by index in components/Projects.tsx.
// 👉 Khi có link demo/repo thật, thêm `demo` và sửa `github` cho từng dự án.

export type ProjectCategory = "web" | "mobile" | "database" | "other";

export type ProjectMeta = {
  image: string;
  category: ProjectCategory;
  demo?: string;
  github?: string;
};

const PROFILE = "https://github.com/khaine2k4";

export const projectMeta: ProjectMeta[] = [
  {
    // Personal Portfolio Website
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    category: "web",
    demo: "https://khaidz.com",
    github: PROFILE,
  },
  {
    // PIMS — Project Management System
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "web",
    demo: "https://pims.khaidz.com/",
    github: PROFILE,
  },
  {
    // Photo Studio Booking Platform
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    category: "web",
    demo: "https://gophotostudio.uk/",
    github: PROFILE,
  },
  {
    // Flutter Todo List App
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
    category: "mobile",
    github: PROFILE,
  },
  {
    // Library Management Database
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    category: "database",
    github: PROFILE,
  },
  {
    // Green Hopes Project (team / media — no repo)
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    category: "other",
  },
];