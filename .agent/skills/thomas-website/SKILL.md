---
name: thomas-website
description: Comprehensive design, architecture, and copywriting standard for building high-converting, clean, Swiss-style portfolio websites for video editors, motion designers, and creative directors. Based on the production-proven architecture of thomasnguyen.online.
version: 1.0.0
---

# Thomas Website Skill: High-Retention Portfolio Blueprint

A complete blueprint and design system for building ultra-clean, high-converting portfolio websites for high-ticket video editors, creative directors, and retention strategists.

---

## 1. Core Philosophy & Design Identity

### 1.1 The "Retention Engine" Mindset
- **Sell outcomes, not tools:** High-ticket clients (founders, agencies, 7-figure creators) don't care about software names (Premiere, CapCut). They buy **Viewer Retention (85%+ 5-Second Retention Score)** and **Business Growth**.
- **Show, Don't Tell:** Eliminate Google Drive folders. Provide zero-friction, 1-click video playback in native 9:16 vertical ratio.
- **Zero AI Slop:** Strictly reject cheap templates, unnecessary kickers/eyebrows above headings, fake notification popups, gradient rainbow text, and low-contrast grey typography.

### 1.2 Color & Atmospheric System
| Role | Color Hex | Usage |
| :--- | :--- | :--- |
| **Canvas Background** | `#0b0c10` / `#050608` | Deep Onyx void, gives cinematic cinema room feel |
| **Surface Cards** | `#12141a` | Graphite card surfaces with `border: 1px solid rgba(255,255,255,0.08)` |
| **Accent Hue** | `#1591DC` | Electric Cyan Blue for primary CTAs, active pills, badges, and glows |
| **Primary Typography** | `#ffffff` / `#ededf3` | High-contrast crisp text (≥4.5:1 ratio) |
| **Muted Typography** | `#9496a1` | Secondary labels, descriptions, and metadata |
| **Atmospheric Glow** | `rgba(21,145,220,0.12)` | 120px blurred radial gradients on top and bottom edges |
| **Noise Overlay** | `.noise-overlay` | Subtle film grain texture overlay for tactile depth |

### 1.3 Swiss Typography Scale
- **Font Family:** Unified Swiss Grotesk (`Neue Haas Grotesk` or `Plus Jakarta Sans`, fallback `Inter`).
- **Tracking:** Tight letter-spacing (`-0.028em` to `-0.035em`) for modern editorial authority.
- **Hierarchy:**
  - Hero Display Headline: `font-weight: 700`, `font-size: 3.5rem` to `4.5rem`, `line-height: 1.08`.
  - Section Headings: `font-weight: 600` - `700`, `font-size: 2rem` to `2.5rem`.
  - Body Text: `font-weight: 400` - `500`, `font-size: 0.875rem` to `1rem`, `line-height: 1.6`.
  - Monospace Data Badges: `font-mono`, uppercase for metrics and steps (`01`, `800+ REELS`, `48H`).

---

## 2. Information Architecture (The 8 Essential Sections)

```
┌─────────────────────────────────────────────────────────────┐
│ 1. STICKY HEADER: Studio Portrait + Navigation + Calendly   │
├─────────────────────────────────────────────────────────────┤
│ 2. HERO SECTION: 3 Spots Badge + Core Retention Hook + Stats│
├─────────────────────────────────────────────────────────────┤
│ 3. ABOUT THE EDITOR: Studio Portrait + 4 Retention Strengths │
├─────────────────────────────────────────────────────────────┤
│ 4. WORK SHOWCASE: Horizontal Slidable 9:16 Reels Carousel   │
├─────────────────────────────────────────────────────────────┤
│ 5. WORKFLOW: 3-Step 48H Process (Intake -> Edit -> 4K)      │
├─────────────────────────────────────────────────────────────┤
│ 6. TESTIMONIALS: Dual-Direction Infinite Client Marquee     │
├─────────────────────────────────────────────────────────────┤
│ 7. SERVICES & PILLARS: 4 Core Retention Capabilities        │
├─────────────────────────────────────────────────────────────┤
│ 8. PROJECT INTAKE FORM: Budget Pills + Gmail & Calendly Sync│
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Section Blueprint & Implementation Details

### Section 1: Sticky Navigation Bar
- **Logo:** Circular studio portrait (`w-8 h-8 rounded-full`) with `#1591DC` ring and subtle glow `shadow-[0_0_12px_rgba(21,145,220,0.4)]`.
- **Nav Links:** `About`, `Work`, `Process`, `Services`, `Testimonial`, `Contact` in `text-[#9496a1] hover:text-white`.
- **Action CTA:** `Book a Call` pill button linking directly to Calendly (`https://calendly.com/...`).

### Section 2: Hero & Retention Hook
- **Availability Pill:**
  ```html
  <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12141a] border border-white/[0.08] text-xs">
    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
    <span>3 Spots Available for this month</span>
  </div>
  ```
- **Headline Formula:** `Every Great Story Deserves a Great Editor.`
- **3 Metric Pillars:**
  1. **`800+`** Reels Delivered
  2. **`85%+`** First 5-Second Retention Score
  3. **`100%`** Rec.709 Studio Standard

### Section 3: About The Editor Spotlight
- **Visual:** Dedicated vertical studio portrait (`aspect-[3/4]`, `rounded-2xl`, grayscale contrast 125%) with floating availability tag.
- **Copy:** Editorial bio explaining *Neuro-Pacing*, bespoke After Effects keyframing, and Frame.io collaborative review.

### Section 4: Horizontal Slidable 9:16 Reels Carousel
- Smooth scrolling container with arrow buttons (`ChevronLeft` / `ChevronRight`) and search filter.
- **Card Ratio:** Vertical `aspect-[9/16]` iframe embeds (Vimeo / Cloudflare Stream / MP4).
- **Categorization Badges:** `FEATURED 01`, `Hook Engine`, `Motion VFX`, `Sound Architecture`.

### Section 5: 3-Step Transparent Process (48H Turnaround)
1. **01. Submit Request (Intake):** Drop raw footage into Google Drive / Dropbox / Frame.io with notes.
2. **02. Precision Editing (48H):** Cut dead-air, build bespoke AE motion graphics, Rec.709 grade, layered SFX.
3. **03. Final Delivery:** 4K master delivery with unlimited timestamp revisions on Frame.io.

### Section 6: Client Proof Marquee
- Dual-direction continuous CSS Marquee: Row 1 left-scroll, Row 2 reverse right-scroll.
- Cards feature 5-star rating, client metric badge (e.g. `+160% Inbound Leads`), testimonial text, and verified creator tag.

### Section 7: Project Intake Form & Direct Dispatch
- **Video Type Selector Pills:** `Short Form Videos`, `Motion Graphics / VSL`, `Long Form Videos`.
- **Budget Range Selector Pills:** `Under $500`, `$500-$1000`, `$1000-$2000`, `$2000-$5000`.
- **Backend Dispatch:** Direct API POST to FormSubmit (`https://formsubmit.co/ajax/your-email@gmail.com`) with JSON payload.
- **Fallback:** Auto-redirect to `mailto:` scheme if network request fails.
- **Direct Call Link:** Secondary booking button linking directly to Calendly 15-minute consultation.

---

## 4. Craft Floor & Anti-Slop Checklist (Impeccable Standard)

- [x] **No generic kickers/eyebrows:** Headings speak with their own typographic authority.
- [x] **No fake toast notifications:** Real interactions only.
- [x] **Single unified typography:** Consistent Swiss grotesque weight and letter-spacing across every section.
- [x] **Zero broken diacritics:** Unicode-safe font rendering for Vietnamese and international characters.
- [x] **Real assets:** Studio portrait with professional lighting, no cartoon avatars.
- [x] **Accessible contrast:** Body text ≥ 4.5:1, large display headings ≥ 3:1.
- [x] **Instant turnaround:** Vite production bundle with gzip < 80kB and fast First Contentful Paint (<0.8s).

---

## 5. Quick Start Template Code

```bash
# Clone & install dependencies
git clone https://github.com/phucnguyen36/Thomas-Nguyen-Website.git
cd Thomas-Nguyen-Website
npm install

# Run development server
npx vite --port=5173

# Production build
npx vite build
```
