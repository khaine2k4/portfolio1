export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "toi-uu-hieu-nang-nextjs",
    title: "Tối ưu hiệu năng ứng dụng Next.js",
    excerpt:
      "Những kỹ thuật mình dùng để tăng tốc website Next.js: image optimization, code splitting và caching.",
    date: "2026-05-12",
    readTime: "5 phút đọc",
    content: [
      "Hiệu năng là yếu tố quan trọng quyết định trải nghiệm người dùng. Trong bài viết này, mình chia sẻ những kỹ thuật thực tế đã áp dụng.",
      "Đầu tiên là tối ưu hình ảnh với component next/image — tự động lazy-load và phục vụ định dạng hiện đại như WebP.",
      "Tiếp theo là code splitting và dynamic import để giảm kích thước bundle ban đầu, giúp trang tải nhanh hơn.",
      "Cuối cùng, tận dụng caching và Server Components để giảm tải cho client. Kết quả: điểm Lighthouse tăng đáng kể.",
    ],
  },
  {
    slug: "hanh-trinh-tro-thanh-developer",
    title: "Hành trình trở thành lập trình viên",
    excerpt:
      "Câu chuyện mình bắt đầu học code, những khó khăn và bài học rút ra trên con đường này.",
    date: "2026-03-08",
    readTime: "7 phút đọc",
    content: [
      "Mọi hành trình đều có điểm bắt đầu. Với mình, đó là khi lần đầu viết dòng code 'Hello World'.",
      "Con đường tự học không hề dễ dàng — có những lúc bế tắc với bug hàng giờ liền. Nhưng chính những lúc đó dạy mình kiên nhẫn.",
      "Lời khuyên cho người mới: hãy xây dự án thực tế, đừng chỉ học lý thuyết. Code mỗi ngày, dù chỉ một chút.",
    ],
  },
];
