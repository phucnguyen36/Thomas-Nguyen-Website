# PROJECT HANDOFF & PROGRESS LOG
> **Thomas Nguyen | Visual Retention Strategist & High-Ticket Short-Form Editor**  
> **Official Website:** [thomasnguyen.online](https://www.thomasnguyen.online/)  
> **Repository:** `phucnguyen36/Thomas-Nguyen-Website` (Branch: `main`)  
> **Hosting & CI/CD:** Vercel (Auto-deploys from `main`)  
> **Last Updated:** 21/10/2026 — 23:45 (GMT+7)  
> **Latest Production Commit:** `71b8014`

---

## 📌 BẢNG MỤC LỤC (TABLE OF CONTENTS)
1. [Tổng quan dự án & Brand ADN](#1-tổng-quan-dự-án--brand-adn)
2. [Trạng thái Production hiện tại (Live Status)](#2-trạng-thái-production-hiện-tại-live-status)
3. [Kiến trúc hệ thống & Tech Stack](#3-kiến-trúc-hệ-thống--tech-stack)
4. [Cấu trúc thư mục mã nguồn](#4-cấu-trúc-thư-mục-mã-nguồn)
5. [Lịch sử cập nhật & Milestone đã hoàn thành](#5-lịch-sử-cập-nhật--milestone-đã-hoàn-thành)
6. [Danh mục dữ liệu & Khách hàng thực tế (Client Registry)](#6-danh-mục-dữ-liệu--khách-hàng-thực-tế-client-registry)
7. [Quy chuẩn thiết kế & Nguyên tắc "Zero AI Slop"](#7-quy-chuẩn-thiết-kế--nguyên-tắc-zero-ai-slop)
8. [Hướng dẫn vận hành, kiểm thử & Deploy](#8-hướng-dẫn-vận-hành-kiểm-thử--deploy)
9. [Backlog & Kế hoạch phát triển tiếp theo](#9-backlog--kế-hoạch-phát-triển-tiếp-theo)

---

## 1. TỔNG QUAN DỰ ÁN & BRAND ADN

### 1.1 Mục tiêu kinh doanh
Trang portfolio chuyển đổi cao (High-Ticket B2B Conversion Portfolio) dành cho nhà sáng lập, agency owners và 7-figure creators.
- **Giá trị cốt lõi:** Bán **Retention Rate (tỷ lệ giữ chân người xem 85%+ 5 giây đầu)** và **Tăng trưởng chuyển đổi (Inbound Pipeline / Inbound Calls)** thay vì bán kỹ năng công cụ đơn thuần.
- **Offer chủ lực:** The 30-Day Content Engine (Hormozi Grand Slam Offer) trị giá niêm yết \$4,500/tháng, giá đầu tư chốt \$2,500/tháng (12 Reels chất lượng cao + 4 custom thumbnails + full narrative post-production).

### 1.2 Nhận diện thương hiệu (Visual DNA)
- **Phong cách:** Swiss-Style Dark Minimalist (Đậm chất điện ảnh, siêu tinh gọn, sang trọng và thực dụng).
- **Màu sắc chủ đạo:**
  - `Canvas / Background:` `#050608` & `#07080b` (Deep Onyx Void)
  - `Surface Cards:` `#0d0f15` & `#12141a` (Hairline border: `rgba(255, 255, 255, 0.08)`)
  - `Accent / Glow:` `#1591DC` (Electric Cyan Blue — màu nhận diện độc quyền của Thomas Nguyen)
  - `Primary Text:` `#ffffff` / `#ededf3` (Độ tương phản cao ≥ 4.5:1)
  - `Muted Text:` `#8e909a` / `#9496a1` (Dành cho nhãn phụ, số đo metric)
- **Typography:** Độc nhất họ font **Inter** (Swiss Grotesk), tracking chặt chẽ (`-0.025em` đến `-0.035em`), nói KHÔNG với việc phối font lộn xộn.

---

## 2. TRẠNG THÁI PRODUCTION HIỆN TẠI (LIVE STATUS)

| Hạng mục | Trạng thái | Ghi chú kỹ thuật |
| :--- | :---: | :--- |
| **Domain chính** | 🟢 **LIVE** | `https://www.thomasnguyen.online/` |
| **Trang Offer Hormozi** | 🟢 **LIVE** | `https://www.thomasnguyen.online/offer` (Grand Slam Offer 12 Reels) |
| **Showcase Video Stream** | 🟢 **LIVE** | 2 hàng chạy mượt mà, hỗ trợ cả 9:16 (Shorts) & 16:9 (Landscape) |
| **Cinema Video Lightbox** | 🟢 **LIVE** | Thuần túy rạp chiếu, đã gỡ bỏ thanh thông tin sai lệch dưới chân modal |
| **Section Testimonials** | 🟢 **LIVE** | Swiss 3-Card Carousel, chuyển slide mượt, số thứ tự `01 / 08`, 100% tiếng Anh |
| **Avatar Via Masi** | 🟢 **LIVE** | Căn giữa tự nhiên, tỷ lệ đầu/cổ/vai chuẩn xác, loại bỏ zoom dị |
| **Avatar Eugene Fomin** | 🟢 **LIVE** | Cập nhật ảnh chính thức người dùng cung cấp (Cafe Amsterdam) |
| **Hệ thống đặt lịch** | 🟢 **LIVE** | Tích hợp trực tiếp Calendly (`thomasvisualeditor/30min`) + Form fallback |
| **Email Tracking API** | 🟢 **LIVE** | First-party tracking endpoints (`/api/track/open`, `/api/track/click`) |

---

## 3. KIẾN TRÚC HỆ THỐNG & TECH STACK

- **Frontend Core:** React 18.3+, TypeScript 5+, Vite 6+
- **Styling Engine:** Tailwind CSS 3.4+, PostCSS, Lucide React (iconography)
- **Motion / Interaction:** Framer Motion (Transitions, carousel state sync, lightbox entrance)
- **Video Player:** Vimeo Embed Player API (`player.vimeo.com`) với thiết lập UI tinh giản không logo thừa
- **Hosting & Edge Deployment:** Vercel (kết nối repo GitHub qua webhooks auto-build)
- **Package Manager:** `npm` (Windows: `npm.cmd`)

---

## 4. CẤU TRÚC THƯ MỤC MÃ NGUỒN

```
01.-Thomas-Nguyen-Portfolio/
├── .vercel/                  # Cấu hình cache Vercel
├── api/                      # Serverless API routes (Tracking, forms)
│   ├── track/
│   │   ├── click.ts          # Endpoint theo dõi lượt click email
│   │   └── open.ts           # Endpoint theo dõi lượt mở email (1x1 gif)
├── dist/                     # Production build artifacts sau khi chạy `npm run build`
├── public/                   # Static assets công khai
│   ├── clients/              # Avatar khách hàng thật đã tối ưu kích thước
│   │   ├── bryce_haddock.jpg # Bryce Haddock (@northboundmedia)
│   │   ├── via_masi.jpg      # James Masi (@via.masi - Bản crop chuẩn tự nhiên)
│   │   ├── kaleemix.jpg      # Kaleem Iqbal Hashmi (@kaleemix)
│   │   ├── yoni_smolyar.jpg  # Yoni Smolyar (@yoniman.mp4)
│   │   ├── raul_ocana.jpg    # Raul Ocana (@raulteentrena)
│   │   ├── chali_weerakkody.jpg # Chali Weerakkody (@editozclub)
│   │   ├── eugene_fomin.jpg  # Eugene Fomin (Booster.LLC - Ảnh chính thức)
│   │   └── vlady.jpg         # Vlady (Filmmaker)
│   ├── reels/                # Video showcase & poster thumbnails
│   ├── favicon.ico
│   └── og-image.png
├── src/                      # Source code chính
│   ├── components/           # Component dùng chung (Navbar, Footer, Modals)
│   ├── App.tsx               # Entry page chính của Portfolio
│   ├── OfferPage.tsx         # Trang The 30-Day Content Engine (Hormozi Offer)
│   ├── BookingCalendar.tsx   # Tích hợp lịch hẹn Calendly
│   ├── index.css             # Base styles, Tailwind directives, noise overlays
│   └── main.tsx              # React DOM render & Router
├── HANDOFF.md                # FILE BÀN GIAO & TIẾN ĐỘ DỰ ÁN (FILE NÀY)
├── package.json              # Danh sách thư viện & scripts
├── tsconfig.json             # Cấu hình TypeScript nghiêm ngặt
└── vite.config.ts            # Cấu hình Vite build & dev server
```

---

## 5. LỊCH SỬ CẬP NHẬT & MILESTONE ĐÃ HOÀN THÀNH

### [Milestone 07] Tinh chỉnh Cinema Lightbox & Deployment Final (`71b8014`)
- **Vấn đề:** Khi click mở to video để xem trong Lightbox modal, thanh thông tin bên dưới (caption/avatar/metric) hiển thị sai thông tin so với nội dung video đang chiếu.
- **Xử lý:** Gỡ bỏ toàn bộ thanh caption/thông tin thừa bên dưới video. Chế độ Lightbox chuyển sang chuẩn **Pure Cinema Mode**: tập trung 100% vào khung hình video, giữ lại nút `✕` đóng góc trên và mũi tên chuyển video trái/phải.
- **Deploy:** Push trực tiếp lên nhánh `main`, Vercel deploy thành công lên `thomasnguyen.online`.

### [Milestone 06] Tối ưu Avatar Via Masi & Eugene Fomin (`82f5065`, `f255d1c`)
- **Via Masi:** Khắc phục lỗi avatar bị zoom quá sát mặt ("dị"). Tái lập crop tỷ lệ chuẩn tự nhiên, giữ trọn đầu, cổ và vai cân đối, đặt James Masi làm **Card số 2 (chính giữa)** trong 3 card đầu tiên.
- **Eugene Fomin:** Thay thế ảnh stock bằng ảnh thực tế do người dùng cung cấp (quán cafe kênh đào Amsterdam với kính đen và đồng hồ), đặt tại Card số 7 với badge Verified.

### [Milestone 05] Nâng cấp Testimonials thành Swiss 3-Card Carousel (`5b04b08`, `3f149a0`)
- Tái cấu trúc hoàn toàn section `#results` theo phong cách tối giản Thụy Sĩ:
  - Khung 3 card cố định trên desktop, cuộn mượt (smooth horizontal scroll snap).
  - Bộ điều khiển điều hướng: 2 nút mũi tên tròn `<` và `>` bên góc phải tiêu đề.
  - Bộ đếm slide thời gian thực dạng `01 / 08` kèm hệ thống vạch chỉ số (dot pagination).
  - Copywriting chuẩn hóa 100% tiếng Anh tự nhiên, loại bỏ các cụm từ sáo rỗng hoặc dịch thô.

### [Milestone 04] Xây dựng trang Grand Slam Offer Hormozi (`/offer`) (`45d28ca`)
- Tạo trang ưu đãi độc lập theo phương pháp Alex Hormozi:
  - Gói 30-Day Content Engine: 12 Reels + 4 Thumbnails + Kịch bản Hook.
  - Neo giá: Tổng giá trị thực \$4,500/tháng -> Đầu tư hôm nay \$2,500/tháng.
  - Phân tích 3 giai đoạn triển khai (Intake -> Production -> Optimization).
  - Cam kết bảo hành kết quả rõ ràng, nút CTA chuyển đổi thẳng về lịch hẹn Calendly.

### [Milestone 03] Tối ưu hóa Gallery Video Showcase 2 Hàng (`d208d6f`)
- Hỗ trợ phát cả video dọc 9:16 và ngang 16:9 không bị lệch layout.
- Ưu tiên 3 video reel cốt lõi hiển thị đầu tiên trong luồng marquee tự động cuộn.
- Bổ sung phím tắt: phím `ESC` để thoát modal, phím `Mũi tên Trái / Phải` để chuyển clip tức thì.

---

## 6. DANH MỤC DỮ LIỆU & KHÁCH HÀNG THỰC TẾ (CLIENT REGISTRY)

Toàn bộ 8 đối tác / khách hàng trên trang đều là dữ liệu thực tế đã được chuẩn hóa:

| # | Khách hàng | Handle / Kênh | Vai trò / Công ty | Metric nổi bật | Đánh giá sao |
| :-: | :--- | :--- | :--- | :--- | :-: |
| **01** | **Bryce Haddock** | `@northboundmedia` | Founder, Northbound Media | `+340% Pipeline Calls` | 4.5 ★ |
| **02** | **James Masi** | `@via.masi` | Founder, Via Masi Productions | `+210% Inbound Inbox` | 5.0 ★ |
| **03** | **Kaleem Iqbal Hashmi**| `@kaleemix` | Founder, Kaleemix Media | `1.8M Monthly Views` | 5.0 ★ |
| **04** | **Yoni Smolyar** | `@yoniman.mp4` | Founder, The Brainrot App | `+1.2M Organic App Views` | 5.0 ★ |
| **05** | **Raul Ocana** | `@raulteentrena` | Fitness Coach & Creator | `1.4M Organic Reach` | 4.5 ★ |
| **06** | **Chali Weerakkody** | `@editozclub` | Founder, Editoz Club | `3.8x Engagement Lift` | 4.5 ★ |
| **07** | **Eugene Fomin** | `@eugenefomin` | Founder, Booster.LLC | `Zero Revision Pace` | 5.0 ★ |
| **08** | **Vlady** | `@vlady_creator` | Filmmaker & Content Creator | `Sold Out Cohort` | 4.5 ★ |

---

## 7. QUY CHUẨN THIẾT KẾ & NGUYÊN TẮC "ZERO AI SLOP"

Để duy trì chất lượng thẩm mỹ cao cấp của trang qua các lần update tiếp theo, bắt buộc tuân thủ:

1. **Tuyệt đối không dùng icon / emoji lòe loẹt:** Không chèn rocket 🚀, lửa 🔥, kim cương 💎 hay các ký hiệu rườm rà. Chỉ dùng icon đường nét mảnh từ `lucide-react` (stroke width `1.5` đến `2`).
2. **Loại bỏ các ký tự phân cách AI (AI Slop):** Không dùng `//`, `---`, `:::`, `[+]` làm trang trí tiêu đề.
3. **Giữ độ tương phản văn bản chuẩn WCAG:** Tiêu đề dùng màu trắng sáng `#ffffff`, text thứ cấp dùng `#8e909a` hoặc `#a0a2ac`. Không dùng màu xám quá tối gây khó đọc.
4. **Không làm vỡ tỷ lệ video:**
   - Video dọc: Luôn giữ tỉ lệ `aspect-[9/16]`.
   - Video ngang: Luôn giữ tỉ lệ `aspect-[16/9]`.
   - Thumbnail & Avatar: Luôn có `object-cover` và crop căn tâm tự nhiên.
5. **Đồng nhất nút bấm (CTA):**
   - Nút chính: Nền `#1591DC`, chữ trắng, bo góc `rounded-full`, hiệu ứng hover nhẹ nhàng sang `#0f7bbd`.
   - Nút phụ: Nền trong suốt hoặc `bg-white/[0.04]`, viền mảnh `border-white/10`, hover sáng viền.

---

## 8. HƯỚNG DẪN VẬN HÀNH, KIỂM THỬ & DEPLOY

### 8.1 Khởi động môi trường phát triển (Local Dev)
```bash
# Di chuyển vào thư mục dự án
cd "C:\Users\Admin\antigravity\01.-Thomas-Nguyen-Portfolio"

# Chạy dev server trên cổng 3000 (đã cấu hình sẵn)
npm.cmd run dev
```
Trang web sẽ chạy tại: `http://localhost:3000`

### 8.2 Kiểm tra chất lượng trước khi deploy (Quality Gates)
Trước khi commit hoặc push code lên production, bắt buộc chạy kiểm thử:
```bash
# 1. Kiểm tra lỗi kiểu dữ liệu TypeScript (Zero Error Tolerance)
npx.cmd tsc --noEmit

# 2. Kiểm tra đóng gói build bản Production
npm.cmd run build
```
Build phải hoàn thành sạch sẽ, output sinh ra trong thư mục `dist/` không có cảnh báo nghiêm trọng.

### 8.3 Quy trình Push & Deploy Production
Dự án được kết nối tự động với Vercel qua GitHub. Mỗi commit đẩy lên nhánh `main` sẽ tự động trigger một bản build production:
```bash
# Kiểm tra file đã chỉnh sửa
git status

# Thêm file vào staging
git add <các-file-thay-đổi>

# Commit với thông điệp chuẩn Conventional Commits
git commit -m "feat/fix(scope): mô tả ngắn gọn thay đổi"

# Đẩy lên production
git push origin main
```
Sau 30-45 giây, truy cập `https://www.thomasnguyen.online/` để kiểm tra kết quả live.

---

## 9. BACKLOG & KẾ HOẠCH PHÁT TRIỂN TIẾP THEO

- [ ] **Tối ưu SEO Metadata & OpenGraph:** Bổ sung schema `Person` và `CreativeWork` dạng JSON-LD để tăng thứ hạng tìm kiếm cho từ khóa "Thomas Nguyen Video Editor".
- [ ] **Tối ưu tốc độ tải ảnh (WebP / AVIF):** Chuyển đổi các ảnh tĩnh trong `public/clients/` sang định dạng WebP để giảm thêm 40% dung lượng tải lần đầu.
- [ ] **Thống kê phân tích (Analytics):** Kiểm tra lại trigger Meta Pixel Event trên nút "Book Call" và "View Offer" để đo lường tỷ lệ chuyển đổi thực tế.
- [ ] **Tùy biến bộ lọc video:** Bổ sung tính năng lọc video theo định dạng (Shorts, VSL, Long-form) ngay trên thanh tìm kiếm.

---

*Tài liệu này được duy trì và cập nhật liên tục bởi Antigravity & Thomas Nguyen sau mỗi phiên làm việc.*