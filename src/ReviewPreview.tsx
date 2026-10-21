import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Star, 
  Zap, 
  ArrowRight,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  handle: string;
  role: string;
  avatar: string;
  metric: string;
  stars: number;
  comment: string;
  location: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'bryce',
    name: 'Bryce Haddock',
    handle: '@northboundmedia',
    role: 'Founder, Northbound Media',
    avatar: '/clients/bryce_haddock.jpg',
    metric: '+340% Pipeline Calls',
    stars: 5,
    comment: 'Turnaround is fast and he doesn’t need constant hand-holding on revisions. We tested his cuts against our old agency reels and inbound calls picked up almost immediately. Minor caption tweaks on V1, but V2 was perfect.',
    location: 'United States'
  },
  {
    id: 'kaleemix',
    name: 'Kaleemix',
    handle: '@kaleemix',
    role: 'Content Creator & Founder',
    avatar: '/clients/kaleemix.jpg',
    metric: '+40K Followers in 30 Days',
    stars: 5,
    comment: 'Added 40,000+ followers in 30 days after Thomas took over our pacing and hooks. The audience completion rate jumped from 52% to 87%. He knows when to let a moment breathe and when to speed up the cut.',
    location: 'United Kingdom'
  },
  {
    id: 'tuan',
    name: 'Tuấn Lê',
    handle: '@shortscut.agency',
    role: 'Founder & CEO, Shortscut Agency',
    avatar: '/clients/vlady.jpg',
    metric: 'Flagship Launch Direction',
    stars: 5,
    comment: 'Thomas is hands down one of the sharpest visual retention editors I’ve partnered with. His instincts for pacing, dead air trimming, and sound design immediately elevated our launch films.',
    location: 'Vietnam & Global'
  },
  {
    id: 'yoni',
    name: 'Yoni Smolyar',
    handle: '@yoniman.mp4',
    role: 'Founder, The Brainrot App',
    avatar: '/clients/yoni_smolyar.jpg',
    metric: '+1.2M Organic App Views',
    stars: 5,
    comment: 'Dumped raw product demos on Drive and Thomas turned them into hooks that genuinely stopped people from scrolling. Our app downloads spiked within the first week of posting the new series. He just gets short-form pacing.',
    location: 'United States'
  },
  {
    id: 'editoz',
    name: 'Editoz Club',
    handle: '@editozclub',
    role: 'Creative Director, Post-Production',
    avatar: '/clients/editoz.jpg',
    metric: '+42% Completion Rate',
    stars: 5,
    comment: 'Viewer completion rate jumped by 42% on average across our entire catalogue. Punctual, meticulous with audio leveling, custom motion elements, and zero template fluff.',
    location: 'United Kingdom'
  },
  {
    id: 'masi',
    name: 'James Masi',
    handle: '@via.masi',
    role: 'Founder, Via Masi Productions',
    avatar: '/clients/via_masi.jpg',
    metric: '+210% Inbound Inbox',
    stars: 5,
    comment: 'Honestly one of the few editors who understands story flow instead of just spamming flashy zooms. Sent him a batch of raw talking head clips and every single hook felt intentional. Saved our team dozens of hours.',
    location: 'United States'
  }
];

export default function ReviewPreview() {
  const [showAll, setShowAll] = useState(false);
  const [variant, setVariant] = useState<'minimal' | 'roi-hybrid'>('roi-hybrid');

  const displayedList = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#07080b] text-[#ededf3] selection:bg-[#1591DC]/30 selection:text-white font-sans antialiased relative">
      
      {/* Background Subtle Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#1591DC]/8 to-transparent blur-[140px]" />
      </div>

      {/* ===================================================================== */}
      {/* PREVIEW CONTROL TOOLBAR (TOP BAR)                                     */}
      {/* ===================================================================== */}
      <div className="sticky top-0 z-50 bg-[#0d0f15]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <a 
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-white border border-white/10 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Về trang chủ</span>
          </a>

          <div className="h-4 w-px bg-white/15" />

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-white tracking-tight">
              LOCAL PREVIEW MODE
            </span>
            <span className="hidden sm:inline-block text-[11px] text-[#8e909a] font-mono">
              (Không ghép vào code chính của App.tsx)
            </span>
          </div>
        </div>

        {/* Variant Controls */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#8e909a] font-medium hidden md:inline">Kiểu hiển thị:</span>
          
          <button
            onClick={() => setVariant('roi-hybrid')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              variant === 'roi-hybrid'
                ? 'bg-[#1591DC] text-white shadow-xs'
                : 'bg-white/[0.04] text-[#8e909a] hover:text-white border border-white/10'
            }`}
          >
            Structure Ảnh 2 + Chi tiết ROI Ảnh 1
          </button>

          <button
            onClick={() => setVariant('minimal')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              variant === 'minimal'
                ? 'bg-[#1591DC] text-white shadow-xs'
                : 'bg-white/[0.04] text-[#8e909a] hover:text-white border border-white/10'
            }`}
          >
            Structure Ảnh 2 Tối Giản
          </button>
        </div>

      </div>

      {/* ===================================================================== */}
      {/* MAIN PREVIEW SECTION                                                  */}
      {/* ===================================================================== */}
      <main className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        
        {/* Section Header: Matching Image 2 structure (Left title, Right subtext) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          
          <div>
            {/* Pill Tag (Image 1 blue tone + Image 2 placement) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-[11px] font-semibold uppercase tracking-wider text-[#60b6ee] mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1591DC]" />
              <span>TESTIMONIALS · PROVEN RESULTS</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.08]">
              Proven Across High–Growth Teams
            </h2>
          </div>

          {/* Subtext Paragraph */}
          <p className="text-sm sm:text-base text-[#8e909a] max-w-md font-normal leading-relaxed">
            Real revenue, inbound inbox growth, and retention results from founders and agency directors partnering with Thomas Nguyen for their video pipeline.
          </p>

        </div>

        {/* 3-Card Grid (Image 2 layout with Image 1 dark colors) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayedList.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/[0.08] bg-[#0d0f15]/85 hover:bg-[#11141e]/90 p-7 sm:p-8 flex flex-col justify-between hover:border-[#1591DC]/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-[#1591DC]/10 group relative"
            >
              <div>
                
                {/* Top Row: Blue Quote Mark + ROI / Stars Badge */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  
                  {/* Signature Blue Quote Mark */}
                  <span className="text-4xl font-serif text-[#1591DC] leading-none select-none block">
                    “
                  </span>

                  {/* Optional ROI / Star Badge (Keeps Image 1 client metric strength) */}
                  {variant === 'roi-hybrid' && (
                    <div className="flex flex-col items-end gap-1.5">
                      {/* Compact Blue ROI Badge */}
                      <div className="py-0.5 px-2.5 rounded bg-gradient-to-r from-[#1591DC]/20 to-[#0f7bbd]/20 border border-[#1591DC]/40 shadow-xs flex items-center gap-1.5">
                        <Zap size={10} className="text-[#60b6ee] fill-[#60b6ee]" />
                        <span className="text-[10px] font-mono font-bold tracking-tight text-[#60b6ee] uppercase">
                          {item.metric}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={9} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  )}

                  {variant === 'minimal' && (
                    <span className="text-[11px] font-mono text-[#60b6ee] font-semibold bg-[#1591DC]/10 px-2.5 py-1 rounded-full border border-[#1591DC]/20">
                      {item.metric}
                    </span>
                  )}

                </div>

                {/* Testimonial Quote Text: Large, spacious, readable */}
                <p className="text-sm sm:text-[14.5px] text-[#c6c8d4] font-normal leading-relaxed group-hover:text-white transition-colors">
                  "{item.comment}"
                </p>

              </div>

              {/* Bottom Author Row with Divider Line */}
              <div className="pt-6 mt-8 border-t border-white/[0.07] flex items-center justify-between">
                
                <div className="flex items-center gap-3.5 min-w-0">
                  <img 
                    src={item.avatar} 
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/15 group-hover:border-[#1591DC]/60 transition-colors shrink-0" 
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-semibold text-white tracking-tight leading-tight truncate">
                        {item.name}
                      </h4>
                      <CheckCircle2 size={12} className="text-[#1591DC] shrink-0" />
                    </div>
                    <p className="text-xs text-[#8e909a] font-normal leading-tight mt-0.5 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Verified Tag */}
                <span className="text-[10.5px] font-mono text-emerald-400 font-medium flex items-center gap-1 shrink-0 ml-2">
                  <CheckCircle2 size={10} />
                  <span>Verified</span>
                </span>

              </div>

            </div>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        <div className="pt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#1591DC]/50 text-xs font-semibold text-[#8e909a] hover:text-white transition-all cursor-pointer shadow-xs"
          >
            <span>{showAll ? 'Thu gọn (3 đánh giá)' : 'Xem thêm các đối tác khác (6 đánh giá)'}</span>
            <ChevronDown size={14} className={`transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* CTA Button below section */}
        <div className="pt-12 text-center">
          <a
            href="https://calendly.com/thomasvisualeditor/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-sm font-semibold rounded-full tracking-tight shadow-[0_4px_24px_rgba(21,145,220,0.4)] hover:shadow-[0_6px_32px_rgba(21,145,220,0.6)] transition-all"
          >
            <span>Book a Discovery Call</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </main>

    </div>
  );
}
