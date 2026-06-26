export type Locale = "en" | "vi";

export const translations = {
  en: {
    name: "Nguyen Quang Khai",
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      music: "Music",
      contact: "Contact",
      blog: "Blog",
    },
    hero: {
      badge: "Open to internship & junior roles",
      greeting: "Hi, I'm",
      roles: [
        "Software Developer",
        "Full-Stack Developer",
        ".NET Developer",
        "React Developer",
        "Backend Developer",
        "Software Engineering Student",
      ],
      tagline:
        "I build real-world web products with a focus on user experience, reliable backends and solid system deployment.",
      cta1: "View Projects",
      cta2: "Get in touch",
    },
    stats: [
      { value: 5, suffix: "+", label: "Projects built" },
      { value: 3, suffix: "+", label: "Years coding" },
      { value: 10, suffix: "+", label: "Technologies used" },
      { value: 3, suffix: "+", label: "Dockerized systems" },
    ],
    about: {
      subtitle: "About me",
      title: "Introduction",
      body: "Hi, I'm Nguyen Quang Khai, a fourth-year Software Engineering student at FPT University. I'm into full-stack web development — backend with ASP.NET Core, frontend with React, database design and deploying systems with Docker. I love turning ideas into real, usable products: management systems, booking platforms, a personal portfolio and small mobile apps with Flutter. Right now I'm focused on sharpening my full-stack skills, UI/UX, basic DevOps and shipping complete products from frontend to deployment.",
      location: "Da Nang, Vietnam",
      bento: {
        learningLabel: "Currently learning",
        learningValue: "ASP.NET Core · React · Docker · DevOps",
        timeLabel: "Local time",
        locationLabel: "Based in",
        focusLabel: "Current focus",
        focusValue: "Shipping products end-to-end",
        statusLabel: "Status",
        statusValue: "Open to internship",
        mainStackLabel: "Main stack",
        mainStack: ["ASP.NET Core", "React", "SQL Server", "Docker", "Flutter"],
      },
    },
    projects: {
      subtitle: "Work",
      title: "Featured Projects",
      details: "View details",
      close: "Close",
      visitSite: "Visit site",
      sourceCode: "Source code",
      items: [
        {
          title: "Personal Portfolio Website",
          description:
            "My personal portfolio to showcase who I am, my skills, projects and learning journey. Built with Next.js, React and TypeScript, a modern dark UI, smooth animations and an interactive hero.",
          tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
        },
        {
          title: "PIMS — Project Management System",
          description:
            "A course & graduation project management system supporting multiple roles (Student, Mentor, Coordinator, Admin): group creation, member invites, topic registration, mentor invites, milestones, rubrics, submissions, grading and progress tracking.",
          tags: ["ASP.NET Core", "React", "SQL Server", "Docker", "REST API"],
        },
        {
          title: "Photo Studio Booking Platform",
          description:
            "A booking platform for photo studios: users reserve slots, studios manage schedules, payments are handled and booking status is tracked. Focused on a real booking flow with an escrow-style payment model.",
          tags: ["ASP.NET Core", "SQL Server", "React", "VNPay", "Docker"],
        },
        {
          title: "Flutter Todo List App",
          description:
            "A simple todo app to manage personal tasks. Add, delete, mark as done and filter tasks by All, Active and Completed, with local persistence.",
          tags: ["Flutter", "Dart", "setState", "Shared Preferences"],
        },
        {
          title: "Library Management Database",
          description:
            "A database project for managing a library: books, borrowers, borrow/return history, reservations and late-fee calculation, implemented with stored procedures, triggers and SQL queries.",
          tags: ["SQL Server", "Stored Procedure", "Trigger", "Database Design"],
        },
        {
          title: "Green Hopes Project",
          description:
            "A team project at FPT University for community work — teaching kids to grow plants in recycled plastic bottles. I was part of the media team: scriptwriting, filming and video editing.",
          tags: ["Teamwork", "Script Writing", "Video Editing", "Communication"],
        },
      ],
    },
    skills: {
      subtitle: "Technology",
      title: "Skills",
      groups: [
        {
          category: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Responsive Design", "Three.js", "Framer Motion"],
        },
        {
          category: "Backend",
          items: ["C#", "ASP.NET Core Web API", "Entity Framework Core", "RESTful API", "Auth", "Node.js"],
        },
        {
          category: "Database",
          items: ["SQL Server", "MySQL", "Database Design", "Stored Procedure", "Trigger", "SQL"],
        },
        {
          category: "Mobile",
          items: ["Flutter", "Dart", "setState", "Shared Preferences"],
        },
        {
          category: "Tools & DevOps",
          items: ["Git", "GitHub", "GitLab", "Docker", "Docker Compose", "WSL2", "Cloudflare Tunnel", "Tailscale", "Uptime Kuma", "Postman", "VS Code"],
        },
      ],
    },
    experience: {
      subtitle: "Journey",
      title: "Experience & Education",
      items: [
        {
          role: "Software Engineering Student (4th year)",
          company: "FPT University",
          period: "In progress",
          description:
            "Fourth-year Software Engineering student. Through coursework I've practiced web & mobile development, databases, APIs, OOP and building software projects with ASP.NET Core, SQL Server, Flutter, React and Docker.",
        },
        {
          role: "Full-Stack / Backend / DevOps Practice",
          company: "Self-learning & Personal Projects",
          period: "Present",
          description:
            "Self-learning and building complete web systems with frontend, backend, database and deployment. Worked with Docker, WSL2, Cloudflare Tunnel, Tailscale and monitoring services to understand how a product runs beyond localhost.",
        },
      ],
    },
    music: {
      subtitle: "Now playing",
      title: "Coding Playlist",
      note: "Lofi & focus tunes that keep me company while coding",
    },
    contact: {
      subtitle: "Connect",
      title: "Get in touch",
      body: "Have an interesting project, an internship opportunity, or just want to chat? Don't hesitate to drop me a message!",
      namePh: "Your name",
      emailPh: "Email",
      msgPh: "Message...",
      send: "Send message",
      mailSubject: (name: string) => `Message from ${name}`,
      mailBody: (msg: string, name: string, email: string) =>
        `${msg}\n\nFrom: ${name} (${email})`,
    },
    footer: {
      madeWith: "Made with ♥ & Next.js",
    },
    blog: {
      back: "Back to home",
      allPosts: "All posts",
      title: "Blog",
      intro: "Posts about programming, tech and my journey.",
      readMore: "Read more",
      posts: [
        {
          slug: "optimize-nextjs-performance",
          title: "Optimizing Next.js app performance",
          excerpt:
            "Techniques I use to speed up Next.js sites: image optimization, code splitting and caching.",
          date: "2026-05-12",
          readTime: "5 min read",
          content: [
            "Performance is a key factor that shapes user experience. In this post, I share practical techniques I've applied.",
            "First is image optimization with the next/image component — automatic lazy-loading and serving modern formats like WebP.",
            "Next is code splitting and dynamic imports to reduce the initial bundle size, making pages load faster.",
            "Finally, leverage caching and Server Components to offload work from the client. The result: a noticeably higher Lighthouse score.",
          ],
        },
        {
          slug: "developer-journey",
          title: "My journey to becoming a developer",
          excerpt:
            "The story of how I started coding, the struggles, and the lessons learned along the way.",
          date: "2026-03-08",
          readTime: "7 min read",
          content: [
            "Every journey has a starting point. For me, it was the first time I wrote a 'Hello World'.",
            "The self-taught path wasn't easy — there were times I got stuck on a bug for hours. But those moments taught me patience.",
            "Advice for beginners: build real projects, don't just study theory. Code every day, even a little.",
          ],
        },
      ],
    },
  },

  vi: {
    name: "Nguyễn Quang Khải",
    nav: {
      about: "Giới thiệu",
      projects: "Dự án",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      music: "Âm nhạc",
      contact: "Liên hệ",
      blog: "Blog",
    },
    hero: {
      badge: "Sẵn sàng thực tập & vị trí junior",
      greeting: "Xin chào, mình là",
      roles: [
        "Lập trình viên phần mềm",
        "Lập trình viên Full-Stack",
        ".NET Developer",
        "React Developer",
        "Backend Developer",
        "Sinh viên năm 4 ngành Kỹ thuật phần mềm",
      ],
      tagline:
        "Mình xây dựng các sản phẩm web thực tế, tập trung vào trải nghiệm người dùng, backend ổn định và khả năng triển khai hệ thống.",
      cta1: "Xem dự án",
      cta2: "Liên hệ",
    },
    stats: [
      { value: 5, suffix: "+", label: "Dự án đã làm" },
      { value: 3, suffix: "+", label: "Năm học lập trình" },
      { value: 10, suffix: "+", label: "Công nghệ đã dùng" },
      { value: 3, suffix: "+", label: "Hệ thống chạy Docker" },
    ],
    about: {
      subtitle: "Về mình",
      title: "Giới thiệu",
      body: "Xin chào, mình là Nguyễn Quang Khải, sinh viên năm 4 ngành Software Engineering tại FPT University. Mình quan tâm đến phát triển web full-stack, đặc biệt là backend với ASP.NET Core, frontend với React, quản lý database và triển khai hệ thống bằng Docker. Mình thích biến ý tưởng thành sản phẩm có thể sử dụng thật — từ các hệ thống quản lý, booking platform, portfolio cá nhân cho đến các ứng dụng mobile nhỏ bằng Flutter. Hiện tại mình đang tập trung cải thiện kỹ năng full-stack, UI/UX, DevOps cơ bản và cách xây dựng sản phẩm hoàn chỉnh từ frontend, backend đến deployment.",
      location: "Đà Nẵng, Việt Nam",
      bento: {
        learningLabel: "Đang học",
        learningValue: "ASP.NET Core · React · Docker · DevOps",
        timeLabel: "Giờ địa phương",
        locationLabel: "Đang ở",
        focusLabel: "Đang tập trung",
        focusValue: "Xây sản phẩm hoàn chỉnh",
        statusLabel: "Trạng thái",
        statusValue: "Sẵn sàng thực tập",
        mainStackLabel: "Công nghệ chính",
        mainStack: ["ASP.NET Core", "React", "SQL Server", "Docker", "Flutter"],
      },
    },
    projects: {
      subtitle: "Sản phẩm",
      title: "Dự án nổi bật",
      details: "Xem chi tiết",
      close: "Đóng",
      visitSite: "Xem demo",
      sourceCode: "Mã nguồn",
      items: [
        {
          title: "Website Portfolio cá nhân",
          description:
            "Portfolio cá nhân giới thiệu bản thân, kỹ năng, dự án và hành trình học tập. Xây bằng Next.js, React và TypeScript với giao diện dark hiện đại, hiệu ứng animation mượt và phần hero tương tác.",
          tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
        },
        {
          title: "PIMS — Hệ thống quản lý đồ án",
          description:
            "Hệ thống quản lý đồ án học phần / đồ án tốt nghiệp, hỗ trợ nhiều vai trò (Student, Mentor, Coordinator, Admin): tạo nhóm, mời thành viên, đăng ký đề tài, mời mentor, quản lý milestone, rubric, submission, đánh giá và theo dõi tiến độ.",
          tags: ["ASP.NET Core", "React", "SQL Server", "Docker", "REST API"],
        },
        {
          title: "Nền tảng đặt lịch Studio chụp ảnh",
          description:
            "Nền tảng đặt lịch chụp ảnh cho studio: người dùng đặt slot, studio quản lý lịch, xử lý thanh toán và theo dõi trạng thái booking. Tập trung vào quy trình booking thực tế và mô hình giữ tiền trước khi hoàn tất dịch vụ.",
          tags: ["ASP.NET Core", "SQL Server", "React", "VNPay", "Docker"],
        },
        {
          title: "Ứng dụng Todo List (Flutter)",
          description:
            "Ứng dụng Todo List đơn giản quản lý công việc cá nhân. Thêm, xoá, đánh dấu hoàn thành và lọc task theo All, Active, Completed, có lưu dữ liệu cục bộ.",
          tags: ["Flutter", "Dart", "setState", "Shared Preferences"],
        },
        {
          title: "Dự án CSDL Quản lý Thư viện",
          description:
            "Dự án cơ sở dữ liệu quản lý thư viện: quản lý sách, người mượn, lịch sử mượn trả, đặt trước sách và tính phí trễ hạn — dùng stored procedure, trigger và các truy vấn SQL để xử lý nghiệp vụ.",
          tags: ["SQL Server", "Stored Procedure", "Trigger", "Database Design"],
        },
        {
          title: "Dự án Green Hopes",
          description:
            "Dự án nhóm trong môn học tại FPT University, hướng đến hoạt động cộng đồng — dạy trẻ em trồng cây bằng chai nhựa tái chế. Mình tham gia media team: viết kịch bản, quay và chỉnh sửa video.",
          tags: ["Teamwork", "Viết kịch bản", "Dựng video", "Giao tiếp"],
        },
      ],
    },
    skills: {
      subtitle: "Công nghệ",
      title: "Kỹ năng",
      groups: [
        {
          category: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Responsive Design", "Three.js", "Framer Motion"],
        },
        {
          category: "Backend",
          items: ["C#", "ASP.NET Core Web API", "Entity Framework Core", "RESTful API", "Auth", "Node.js"],
        },
        {
          category: "Cơ sở dữ liệu",
          items: ["SQL Server", "MySQL", "Thiết kế Database", "Stored Procedure", "Trigger", "SQL"],
        },
        {
          category: "Mobile",
          items: ["Flutter", "Dart", "setState", "Shared Preferences"],
        },
        {
          category: "Công cụ & DevOps",
          items: ["Git", "GitHub", "GitLab", "Docker", "Docker Compose", "WSL2", "Cloudflare Tunnel", "Tailscale", "Uptime Kuma", "Postman", "VS Code"],
        },
      ],
    },
    experience: {
      subtitle: "Hành trình",
      title: "Kinh nghiệm & Học vấn",
      items: [
        {
          role: "Sinh viên năm 4 ngành Kỹ thuật phần mềm",
          company: "FPT University",
          period: "Đang học",
          description:
            "Hiện là sinh viên năm 4 ngành Software Engineering. Trong quá trình học, mình đã thực hành nhiều mảng: lập trình web, mobile, cơ sở dữ liệu, API, OOP và xây dựng dự án phần mềm với ASP.NET Core, SQL Server, Flutter, React và Docker.",
        },
        {
          role: "Thực hành Full-Stack / Backend / DevOps",
          company: "Tự học & Dự án cá nhân",
          period: "Hiện tại",
          description:
            "Tự học và xây dựng các hệ thống web có frontend, backend, database và môi trường triển khai. Mình đã làm việc với Docker, WSL2, Cloudflare Tunnel, Tailscale và các service monitoring để hiểu rõ cách một sản phẩm chạy ngoài môi trường local.",
        },
      ],
    },
    music: {
      subtitle: "Đang nghe",
      title: "Coding Playlist",
      note: "Nhạc lofi & focus đồng hành cùng mình khi code",
    },
    contact: {
      subtitle: "Kết nối",
      title: "Liên hệ với mình",
      body: "Có dự án thú vị, cơ hội thực tập, hay chỉ muốn trò chuyện? Đừng ngần ngại gửi tin nhắn cho mình nhé!",
      namePh: "Tên của bạn",
      emailPh: "Email",
      msgPh: "Lời nhắn...",
      send: "Gửi tin nhắn",
      mailSubject: (name: string) => `Liên hệ từ ${name}`,
      mailBody: (msg: string, name: string, email: string) =>
        `${msg}\n\nTừ: ${name} (${email})`,
    },
    footer: {
      madeWith: "Made with ♥ & Next.js",
    },
    blog: {
      back: "Về trang chủ",
      allPosts: "Tất cả bài viết",
      title: "Blog",
      intro: "Những bài viết về lập trình, công nghệ và hành trình của mình.",
      readMore: "Đọc tiếp",
      posts: [
        {
          slug: "optimize-nextjs-performance",
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
          slug: "developer-journey",
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
      ],
    },
  },
} as const;

export type Dict = (typeof translations)["en"];
