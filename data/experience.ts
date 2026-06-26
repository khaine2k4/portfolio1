export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Tech Company",
    period: "2024 — Hiện tại",
    description:
      "Phát triển và bảo trì các ứng dụng web với Next.js và Node.js. Tối ưu hiệu năng và trải nghiệm người dùng.",
  },
  {
    role: "Frontend Developer",
    company: "Startup ABC",
    period: "2022 — 2024",
    description:
      "Xây dựng giao diện responsive, tích hợp API và cộng tác chặt chẽ với team design.",
  },
  {
    role: "Junior Developer",
    company: "Agency XYZ",
    period: "2021 — 2022",
    description:
      "Bắt đầu hành trình lập trình, học hỏi và đóng góp vào nhiều dự án client.",
  },
];
