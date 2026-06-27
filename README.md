# Portfolio Website

Website portfolio cá nhân — Next.js 15 + TailwindCSS + Framer Motion. Thiết kế dark, minimal, gradient.

## Chạy dự án

```bash
npm install      # cài dependencies
npm run dev      # chạy dev tại http://localhost:3333
npm run build    # build production
npm start        # chạy bản build
```

## Tùy chỉnh nội dung

Toàn bộ nội dung nằm trong thư mục `data/` — sửa ở đây, không cần đụng code UI:

| File | Nội dung |
|------|----------|
| `data/site.ts` | Tên, role, giới thiệu, email, **link Spotify**, social links |
| `data/projects.ts` | Danh sách dự án (tên, mô tả, tags, ảnh, link demo/github) |
| `data/translations.ts` | Nội dung song ngữ EN/VI: roles, about, stats, kỹ năng, kinh nghiệm, blog |

### Đổi link Spotify
Mở Spotify → bài hát/playlist → **Share → Copy link** → sửa thành dạng embed:
`https://open.spotify.com/embed/playlist/<ID>?utm_source=generator&theme=0`
Dán vào `spotify` trong `data/site.ts`.

### Đổi ảnh đại diện
Trong `components/About.tsx`, thay khối chữ cái bằng `<Image src="/avatar.jpg" ... />` và bỏ ảnh vào thư mục `public/`.

### Đổi ảnh dự án
Sửa trường `image` trong `data/projects.ts` (URL ngoài hoặc đặt ảnh trong `public/` rồi dùng `/ten-anh.jpg`).

## Cấu trúc

```
app/          Trang (page chính, blog, layout, globals.css)
components/   UI sections (Hero, About, Projects, ...)
data/         Nội dung tách riêng — sửa ở đây
public/       Ảnh tĩnh
```

## Deploy
Push lên GitHub rồi import vào [Vercel](https://vercel.com) — deploy tự động, miễn phí.
