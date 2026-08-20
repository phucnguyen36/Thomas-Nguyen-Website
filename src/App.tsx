import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Plus, 
  ArrowUpRight, 
  Zap, 
  Layers, 
  Sparkles, 
  Music, 
  ShieldCheck, 
  Minus, 
  Instagram, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Video, 
  Award, 
  BarChart3, 
  Mail, 
  Linkedin, 
  Facebook, 
  Twitter, 
  X, 
  Flame, 
  Star 
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Live Toast Notification
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Official Calendly Booking URL
  const calendlyBookingUrl = "https://calendly.com/thomasvisualeditor/30min";

  const handleCalendlyRedirect = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.open(calendlyBookingUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const notifications = [
      "⚡ New 30-Second Retention Audit requested by Hoang Phuc",
      "🔥 Client doubled retention from 38% to 84% with Neuro-Pacing",
      "🎬 10 Reels batch exported in Rec.709 Standard for Kaleemix",
      "📈 New strategy call scheduled with Raul Ocana from Spain",
      "🚀 Editoz Club scaled organic reach by 3.8x this month"
    ];

    const timer = setTimeout(() => {
      setToastMessage(notifications[Math.floor(Math.random() * notifications.length)]);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 10 LIVE SHORT-FORM VIDEO CLIPS (RESTORED VIMEO EMBEDS)
  const shortFormVideos = [
    { id: "1212586126", tag: "FEATURED 01", title: "Visual Hook & Retention Engine" },
    { id: "1212585180", tag: "FEATURED 02", title: "Motion Pacing & Dynamic Edit" },
    { id: "1212585217", tag: "FEATURED 03", title: "Brand Identity & Aesthetics" },
    { id: "1212585328", tag: "FEATURED 04", title: "Cinematic Visual Storytelling" },
    { id: "1190211907", tag: "REEL 05", title: "Hook Mechanics & SFX Architecture" },
    { id: "1185562812", tag: "REEL 06", title: "Bespoke After Effects Keyframes" },
    { id: "1185562961", tag: "REEL 07", title: "High-Energy Pacing & Cuts" },
    { id: "1185562977", tag: "REEL 08", title: "Multi-Layered Sound Architecture" },
    { id: "1185563164", tag: "REEL 09", title: "Visual B-Roll Strategy" },
    { id: "1185563238", tag: "REEL 10", title: "Rec.709 Color Grading Probe" },
  ];

  const filteredVideos = shortFormVideos.filter(v => 
    v.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    v.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // REAL SPECIFIED CLIENT REVIEWS (100% ENGLISH COPYWRITING)
  const clientReviews = [
    {
      name: "Hoang Phuc",
      handle: "@hoangphuc_creator",
      metric: "84% 5S Retention",
      comment: "First 5-second viewer retention jumped from 34% to 84% within 2 weeks of implementing Neuro-Pacing. Organic follower growth tripled!",
      tag: "CREATOR BRAND",
      location: "Vietnam"
    },
    {
      name: "Kaleemix",
      handle: "@kaleemix_official",
      metric: "+160% Inbound Leads",
      comment: "Visual hooks and After Effects keyframing turned our short-form content into a high-converting B2B client acquisition machine.",
      tag: "AGENCY PARTNER",
      location: "Global"
    },
    {
      name: "Raul Ocana",
      handle: "@raulocana_video",
      metric: "1.4M Monthly Views",
      comment: "Flawless 48-hour delivery timeline with cinema-grade Rec.709 color grading and multi-layered sound design. Unmatched retention.",
      tag: "PRO PRODUCER",
      location: "Spain"
    },
    {
      name: "Editoz Club",
      handle: "@editoz_club",
      metric: "3.8x Organic Reach",
      comment: "Bespoke motion graphics built from scratch — zero CapCut template packs used. Our brand authority doubled in 30 days.",
      tag: "MEDIA CLUB",
      location: "United Kingdom"
    },
    {
      name: "Create More Production",
      handle: "@createmore_prod",
      metric: "89% Retention Score",
      comment: "Masterful visual strategy that cuts every 0.2s of dead air. Over 6 months together and not a single missed deadline.",
      tag: "PRODUCTION HOUSE",
      location: "United States"
    }
  ];

  const marqueeReviewsRow1 = [...clientReviews, ...clientReviews];
  const marqueeReviewsRow2 = [...clientReviews.slice().reverse(), ...clientReviews.slice().reverse()];

  // 4 Pillars of Strategy
  const pillars = [
    { title: "Neuro-Pacing", description: "Precision micro-cuts engineered to erase dead air, eliminating viewer drop-off points within the first 3 seconds.", icon: Zap },
    { title: "Bespoke Motion VFX", description: "Hand-crafted After Effects keyframes built to match your brand colors and authority level.", icon: Layers },
    { title: "Psychological B-Roll", description: "Context-relevant visual cues replacing low-effort stock clips with high-conversion visual storytelling.", icon: Sparkles },
    { title: "Sound Architecture", description: "Multi-track audio engineering with custom risers, drops, and impact SFX that sub-consciously anchor engagement.", icon: Music }
  ];

  return (
    <div className="min-h-screen bg-[#171721] text-[#ededf3] relative overflow-x-hidden selection:bg-[#5266eb]/30 selection:text-white">
      
      {/* Tactile Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Atmospheric Alpine Canvas Ambient Light */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#5266eb]/10 via-transparent to-transparent blur-[120px]"></div>
        <div className="absolute bottom-1/3 -right-20 w-[600px] h-[600px] bg-[#5266eb]/5 blur-[140px]"></div>
      </div>

      {/* LIVE FLOATING TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all">
          <div className="bg-[#1e1e2a] border border-[#5266eb]/40 px-4 py-3 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#5266eb] animate-ping"></span>
            <p className="text-xs text-[#ededf3] font-medium">{toastMessage}</p>
            <button onClick={() => setShowToast(false)} className="text-[#c3c3cc] hover:text-white ml-2 cursor-pointer">
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* TOP APEX-STYLE NAVIGATION BAR (MERCURY ALPINE PILL HEADER) */}
      <header className="sticky top-0 z-40 bg-[#171721]/80 backdrop-blur-xl border-b border-white/[0.06] px-6 md:px-12 py-3.5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#5266eb] shadow-[0_0_16px_rgba(82,102,235,0.4)] flex items-center justify-center font-bold text-white text-xs tracking-tight">
            TN
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm md:text-base tracking-tight text-[#ededf3] uppercase">
              THOMAS NGUYEN
            </span>
            <span className="text-[10px] text-[#c3c3cc] font-medium uppercase tracking-wider hidden sm:block">
              VISUAL RETENTION STUDIO
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-[#c3c3cc] uppercase tracking-wider">
          <a href="#hero" className="hover:text-[#ededf3] transition-colors">Intro</a>
          <a href="#mastery" className="hover:text-[#ededf3] transition-colors">Work</a>
          <a href="#process" className="hover:text-[#ededf3] transition-colors">Process</a>
          <a href="#reviews" className="hover:text-[#ededf3] transition-colors">Reviews</a>
          <a href="#comparison" className="hover:text-[#ededf3] transition-colors">Comparison</a>
          <a href="#system" className="hover:text-[#ededf3] transition-colors">System</a>
          <a href="#faq" className="hover:text-[#ededf3] transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleCalendlyRedirect}
            className="hidden sm:flex px-4 py-2 rounded-full bg-[#272735] border border-white/[0.08] text-xs text-[#ededf3] hover:border-[#5266eb]/50 hover:text-white items-center gap-2 transition-all cursor-pointer"
          >
            <Instagram size={13} className="text-[#5266eb]" />
            <span>@thomasvisualeditor</span>
          </button>

          <button 
            onClick={handleCalendlyRedirect}
            className="px-5 py-2 btn-cobalt text-xs font-semibold uppercase tracking-wider cursor-pointer flex items-center gap-2"
          >
            <Sparkles size={13} />
            <span>BOOK STRATEGY CALL</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 space-y-28 pb-28 max-w-[1200px] mx-auto px-6">
        
        {/* 1. HERO SECTION (MERCURY FULL-BLEED EDITORIAL HERO) */}
        <section id="hero" className="pt-16 md:pt-24 space-y-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#272735] border border-white/[0.08] text-[#c3c3cc] text-xs font-medium uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5266eb]"></span>
            <span>ATTENTION-ENGINEERED EDITING FOR CREATORS &amp; FOUNDERS</span>
          </div>
          
          {/* Main Title & Subtitle */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#ededf3] uppercase leading-[1.12]">
              Retain Viewer Attention From <span className="text-[#5266eb]">The Very First Frame</span>
            </h1>
            <p className="text-[#c3c3cc] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto font-normal">
              High-impact short-form video editing and visual retention strategy for personal brands, founders, and content creators. Double viewer retention in 48 hours.
            </p>
          </div>

          {/* Official Creator Badge With Portrait Avatar */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1e1e2a] border border-white/[0.08] backdrop-blur-md shadow-sm">
            <img 
              src="/thomas_portrait.jpg" 
              alt="Thomas Nguyen" 
              className="w-8 h-8 rounded-full object-cover grayscale border border-[#5266eb]/60"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
              }}
            />
            <div className="text-left text-xs">
              <span className="text-[#ededf3] font-semibold block leading-tight">Thomas Nguyen</span>
              <a 
                href="https://thomasnguyen.online" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#c3c3cc] hover:text-[#5266eb] text-[11px] block leading-tight transition-colors"
              >
                thomasnguyen.online
              </a>
            </div>
          </div>

          {/* HIGH-IMPACT KEY METRICS STRIP (GRAPHITE CARDS #1E1E2A) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2">
            
            <div className="mercury-card p-6 text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-[#272735] text-[#5266eb] flex items-center justify-center mx-auto mb-2">
                <Video size={16} />
              </div>
              <h3 className="text-3xl font-semibold text-[#ededf3] tracking-tight">600+</h3>
              <p className="text-xs text-[#c3c3cc] uppercase tracking-wide">Reels Delivered</p>
            </div>

            <div className="mercury-card p-6 text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-[#272735] text-[#5266eb] flex items-center justify-center mx-auto mb-2">
                <BarChart3 size={16} />
              </div>
              <h3 className="text-3xl font-semibold text-[#ededf3] tracking-tight">85%+</h3>
              <p className="text-xs text-[#c3c3cc] uppercase tracking-wide">First 5S Retention</p>
            </div>

            <div className="mercury-card p-6 text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-[#272735] text-[#5266eb] flex items-center justify-center mx-auto mb-2">
                <Award size={16} />
              </div>
              <h3 className="text-3xl font-semibold text-[#ededf3] tracking-tight">100%</h3>
              <p className="text-xs text-[#c3c3cc] uppercase tracking-wide">Rec.709 Standard</p>
            </div>

          </div>

          {/* Action Buttons (Cobalt Pill & Ghost Outline Pill) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={handleCalendlyRedirect}
              className="px-8 py-3.5 btn-cobalt text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2.5 cursor-pointer"
            >
              <span>BOOK STRATEGY CALL</span>
              <ArrowRight size={14} />
            </button>

            <a 
              href="#mastery"
              className="px-8 py-3.5 btn-ghost-mercury text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span>EXPLORE WORK</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

        </section>

        {/* 2. SHORT-FORM MASTERY SHOWCASE (KULDEEP VIDEO WALL ON GRAPHITE CARDS) */}
        <section id="mastery" className="space-y-6 pt-4 scroll-mt-20">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#5266eb] block font-semibold">PORTFOLIO SHOWCASE</span>
              <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-[#ededf3] mt-1">
                SHORT-FORM MASTERY
              </h2>
            </div>

            {/* SEARCH INPUT */}
            <div className="bg-[#1e1e2a] border border-white/[0.08] rounded-full px-4 py-2 flex items-center gap-3 w-full sm:w-72 focus-within:border-[#5266eb]/50 transition-all">
              <Search size={14} className="text-[#c3c3cc]" />
              <input 
                type="text" 
                placeholder="Search videos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs text-[#ededf3] placeholder:text-[#c3c3cc]/60 w-full"
              />
            </div>
          </div>

          {/* 5-Column Video Grid with 12px Rounded Graphite Borders */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredVideos.map((video, idx) => (
              <div 
                key={video.id + idx}
                className="mercury-card aspect-[9/16] relative overflow-hidden group p-1 bg-[#1e1e2a]"
              >
                <div className="w-full h-full relative bg-[#171721] rounded-[8px] overflow-hidden">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?autoplay=0&loop=0&background=0&title=0&byline=0&portrait=0&color=5266eb`}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title={video.title}
                  />

                  {/* Subtle Dark Vignette */}
                  <div className="absolute inset-0 z-30 bg-black/15 group-hover:opacity-0 transition-all duration-300 pointer-events-none" />

                  {/* Pill Badge */}
                  <div className="absolute top-2.5 left-2.5 z-40">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#171721]/90 border border-white/[0.1] text-[9px] font-medium text-[#ededf3] uppercase tracking-wider">
                      {video.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. STREAMLINED 3-STEP PROCESS (KULDEEP WORKFLOW IN MERCURY GRAPHITE CARDS) */}
        <section id="process" className="space-y-6 pt-4 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div>
              <span className="text-xs text-[#5266eb] uppercase tracking-widest block font-semibold">
                COLLABORATION METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-[#ededf3] mt-1">
                The 3-Step Process
              </h2>
            </div>
            <span className="text-xs text-[#c3c3cc] uppercase tracking-wide">FRICTIONLESS WORKFLOW</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 01 */}
            <div className="mercury-card p-8 space-y-4 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-full bg-[#272735] text-[#ededf3] flex items-center justify-center font-semibold text-xs border border-white/[0.06] group-hover:bg-[#5266eb] group-hover:text-white transition-all">
                    01
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-[#272735] text-[#c3c3cc] border border-white/[0.06]">
                    INTAKE
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#ededf3] uppercase tracking-tight group-hover:text-[#5266eb] transition-colors">
                    Upload &amp; Hook Alignment
                  </h3>
                  <p className="text-xs text-[#c3c3cc] leading-relaxed">
                    Drop raw A-roll footage into a shared Google Drive or Frame.io folder. We analyze your core message, identify vocal stress points, and craft a high-retention hook strategy.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-[#c3c3cc]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#5266eb] shrink-0" />
                  <span>Raw Footage &amp; Script Notes Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#5266eb] shrink-0" />
                  <span>First 3-Second Retention Plan</span>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="mercury-card p-8 space-y-4 border border-[#5266eb]/40 bg-[#1e1e2a] flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-full bg-[#5266eb] text-white flex items-center justify-center font-semibold text-xs shadow-[0_0_16px_rgba(82,102,235,0.4)]">
                    02
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-[#5266eb]/20 text-[#ededf3] border border-[#5266eb]/40">
                    PRODUCTION (48H)
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#ededf3] uppercase tracking-tight">
                    Neuro-Pacing &amp; Visual VFX
                  </h3>
                  <p className="text-xs text-[#c3c3cc] leading-relaxed">
                    We eliminate dead air micro-pauses, engineer custom After Effects motion graphics, color grade to Rec.709 standards, and layer multi-track sound effects.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-[#ededf3]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#5266eb] shrink-0" />
                  <span>Bespoke After Effects Keyframing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#5266eb] shrink-0" />
                  <span>Rec.709 Color &amp; Multi-Track SFX</span>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="mercury-card p-8 space-y-4 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-full bg-[#272735] text-[#ededf3] flex items-center justify-center font-semibold text-xs border border-white/[0.06] group-hover:bg-[#5266eb] group-hover:text-white transition-all">
                    03
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-[#272735] text-[#c3c3cc] border border-white/[0.06]">
                    DELIVERY
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#ededf3] uppercase tracking-tight group-hover:text-[#5266eb] transition-colors">
                    Frame.io Review &amp; 4K Export
                  </h3>
                  <p className="text-xs text-[#c3c3cc] leading-relaxed">
                    Review drafts directly on Frame.io with precise timestamped comments. Get pristine 4K exports optimized for Instagram Reels, TikTok, and YouTube Shorts.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-[#c3c3cc]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#5266eb] shrink-0" />
                  <span>Seamless Timestamp Revisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#5266eb] shrink-0" />
                  <span>4K Multi-Platform Export Package</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. VERIFIED CLIENT REVIEWS INFINITE HORIZONTAL MARQUEE */}
        <section id="reviews" className="space-y-6 pt-4 overflow-hidden scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div>
              <span className="text-xs text-[#5266eb] uppercase tracking-widest block font-semibold">
                VERIFIED CLIENT REVIEWS
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-[#ededf3] mt-1">
                Trusted By Industry Creators
              </h2>
            </div>
            <span className="text-xs text-[#c3c3cc] uppercase tracking-wide">HOVER TO PAUSE STREAM</span>
          </div>

          {/* Marquee Row 1 */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#171721] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#171721] to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee gap-5">
              {marqueeReviewsRow1.map((rev, i) => (
                <div 
                  key={`r1-${i}`}
                  className="mercury-card w-[340px] p-6 shrink-0 flex flex-col justify-between space-y-4 shadow-sm select-none"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={12} fill="currentColor" />
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#5266eb]/15 border border-[#5266eb]/30 text-[10px] font-medium text-[#ededf3] uppercase">
                        {rev.metric}
                      </span>
                    </div>

                    <p className="text-xs text-[#ededf3] leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#272735] text-[#5266eb] flex items-center justify-center text-xs font-semibold">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-[#ededf3] font-medium block leading-none">{rev.name}</span>
                        <span className="text-[11px] text-[#c3c3cc]">{rev.handle}</span>
                      </div>
                    </div>

                    <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 size={11} /> VERIFIED
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#171721] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#171721] to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee-reverse gap-5">
              {marqueeReviewsRow2.map((rev, i) => (
                <div 
                  key={`r2-${i}`}
                  className="mercury-card w-[340px] p-6 shrink-0 flex flex-col justify-between space-y-4 shadow-sm select-none"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={12} fill="currentColor" />
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#272735] border border-white/[0.08] text-[10px] font-medium text-[#c3c3cc] uppercase">
                        {rev.tag}
                      </span>
                    </div>

                    <p className="text-xs text-[#ededf3] leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#272735] text-[#5266eb] flex items-center justify-center text-xs font-semibold">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-[#ededf3] font-medium block leading-none">{rev.name}</span>
                        <span className="text-[11px] text-[#c3c3cc]">{rev.handle}</span>
                      </div>
                    </div>

                    <span className="text-[10px] text-[#5266eb] font-medium flex items-center gap-1">
                      <CheckCircle2 size={11} /> CLIENT
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COMPARISON MODULE */}
        <section id="comparison" className="space-y-6 pt-4 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div>
              <span className="text-xs text-[#c3c3cc] uppercase tracking-widest block font-semibold">
                EDITING DIFFERENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-[#ededf3] mt-1">
                Standard Assembly vs Performance Editing
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mercury-card p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#272735] text-[#c3c3cc] flex items-center justify-center">
                  <XCircle size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#ededf3] uppercase tracking-wider">STANDARD CAPCUT EDITOR</h3>
                  <p className="text-xs text-[#c3c3cc]">Basic Assembly &amp; Template Packs</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-[#c3c3cc]">
                <li className="flex items-start gap-2.5">
                  <XCircle size={14} className="text-[#70707d] shrink-0 mt-0.5" />
                  <span>Relies on generic template packs and repetitive popups that look amateur.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle size={14} className="text-[#70707d] shrink-0 mt-0.5" />
                  <span>Leaves dead air &amp; micro-pauses, causing viewers to scroll away in 3 seconds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle size={14} className="text-[#70707d] shrink-0 mt-0.5" />
                  <span>Zero visual strategy or hook mechanics — treats your content as basic labor.</span>
                </li>
              </ul>
            </div>

            <div className="mercury-card p-8 space-y-4 border border-[#5266eb]/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#5266eb]/20 text-[#5266eb] flex items-center justify-center">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#ededf3] uppercase tracking-wider">THOMAS NGUYEN (VISUAL PARTNER)</h3>
                  <p className="text-xs text-[#5266eb]">Bespoke Motion &amp; Visual Strategy</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-[#ededf3]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="text-[#5266eb] shrink-0 mt-0.5" />
                  <span>Bespoke After Effects keyframing and custom motion graphics unique to your brand.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="text-[#5266eb] shrink-0 mt-0.5" />
                  <span>Neuro-Pacing eliminates dead air, guaranteeing 85%+ retention past the first 5 seconds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="text-[#5266eb] shrink-0 mt-0.5" />
                  <span>Curated B-roll &amp; multi-layered sound design engineered to lock in focus.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. THE SYSTEM (04 PILLARS) */}
        <section id="system" className="space-y-6 pt-4 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div>
              <span className="text-xs text-[#5266eb] uppercase tracking-widest block font-semibold">
                SYSTEM METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-[#ededf3] mt-1">
                The System
              </h2>
            </div>
            <span className="text-xs text-[#c3c3cc] uppercase tracking-wide">04 CORE PILLARS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="mercury-card p-6 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-[#272735] text-[#5266eb] flex items-center justify-center">
                    <pillar.icon size={15} />
                  </div>
                  <span className="text-xs text-[#c3c3cc] font-medium">0{idx + 1}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xs font-semibold text-[#ededf3] uppercase tracking-wider">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#c3c3cc] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. COMPLIMENTARY RETENTION AUDIT SECTION */}
        <section id="audit" className="text-center space-y-5 pt-4">
          <div className="mercury-card p-8 sm:p-12 border border-[#5266eb]/30 space-y-6 bg-[#1e1e2a] max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#272735] border border-white/[0.08] text-xs uppercase tracking-wider text-[#ededf3]">
              <ShieldCheck size={14} className="text-[#5266eb]" />
              <span>ZERO RISK COMPLIMENTARY OFFER</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#ededf3] tracking-tight">
              Test Our Skills: Free 30-Second Retention Audit
            </h2>

            <p className="text-xs sm:text-sm text-[#c3c3cc] leading-relaxed max-w-lg mx-auto">
              Send over one of your raw video clips or past Reels. We will edit the first 30 seconds for free, demonstrating custom pacing, visual hooks, and sound design.
            </p>

            <div>
              <button 
                onClick={handleCalendlyRedirect}
                className="px-8 py-3.5 btn-cobalt text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
              >
                <span>REQUEST FREE 30S AUDIT NOW</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* 8. FAQS SECTION */}
        <section id="faq" className="space-y-6 pt-4 max-w-3xl mx-auto scroll-mt-20">
          <div className="text-center space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#c3c3cc] block font-semibold">
              FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-[#ededf3]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Do you use pre-made templates or CapCut packs?",
                a: "No. Every keyframe is hand-animated in After Effects. I construct custom visual assets tailored specifically to your brand."
              },
              {
                q: "Is the animation too distracting for my brand?",
                a: "Good animation guides the viewer's eye. I utilize subtle VFX to anchor your core points without introducing visual clutter."
              },
              {
                q: "Why is working with you an investment rather than an expense?",
                a: "A standard editor processes files; a visual strategist increases retention by up to 40%, directly doubling organic reach and lead flow."
              },
              {
                q: "How many clients do you accept simultaneously?",
                a: "I limit my studio roster to ensure each video receives the deep attention required for Rec.709 standards."
              },
              {
                q: "Do you provide visual strategy and hook optimization?",
                a: "Yes. I analyze raw footage, suggest hook improvements, and structure visual hierarchy to maximize viewer retention."
              },
              {
                q: "What is your typical turnaround time?",
                a: "A batch of premium short-form videos typically takes 48-72 hours from raw footage delivery to final export."
              }
            ].map((item, i) => (
              <div key={i} className="mercury-card transition-all">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-5 text-left text-xs sm:text-sm font-medium uppercase tracking-wide text-[#ededf3] hover:text-[#5266eb] transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <div className="w-6 h-6 rounded-full bg-[#272735] text-[#c3c3cc] flex items-center justify-center">
                    {activeFaq === i ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </button>
                {activeFaq === i && (
                  <div className="p-5 pt-0 border-t border-white/[0.06] text-xs text-[#c3c3cc] leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] bg-[#171721] py-12 px-6 md:px-12 relative z-20">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#ededf3]">
              THOMAS NGUYEN // SHORT-FORM PORTFOLIO
            </h3>
            <p className="text-[11px] text-[#c3c3cc]">
              &copy; 2026 THOMAS NGUYEN. ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs">
            <a 
              href="https://x.com/thomaseditor_vn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-[#1e1e2a] border border-white/[0.08] text-[#c3c3cc] hover:text-[#ededf3] hover:border-[#5266eb]/50 transition-all flex items-center gap-2"
            >
              <Twitter size={13} className="text-[#5266eb]" />
              <span>X</span>
            </a>

            <a 
              href="https://www.instagram.com/thomasvisualeditor/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-[#1e1e2a] border border-white/[0.08] text-[#c3c3cc] hover:text-[#ededf3] hover:border-[#5266eb]/50 transition-all flex items-center gap-2"
            >
              <Instagram size={13} className="text-[#5266eb]" />
              <span>INSTAGRAM</span>
            </a>

            <a 
              href="https://www.facebook.com/profile.php?id=100063990921099" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-[#1e1e2a] border border-white/[0.08] text-[#c3c3cc] hover:text-[#ededf3] hover:border-[#5266eb]/50 transition-all flex items-center gap-2"
            >
              <Facebook size={13} className="text-[#5266eb]" />
              <span>FACEBOOK</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/phucxuannguyen/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-[#1e1e2a] border border-white/[0.08] text-[#c3c3cc] hover:text-[#ededf3] hover:border-[#5266eb]/50 transition-all flex items-center gap-2"
            >
              <Linkedin size={13} className="text-[#5266eb]" />
              <span>LINKEDIN</span>
            </a>

            <a 
              href="mailto:thomasnguyen.editor@gmail.com" 
              className="px-4 py-2 rounded-full bg-[#1e1e2a] border border-white/[0.08] text-[#c3c3cc] hover:text-[#ededf3] hover:border-[#5266eb]/50 transition-all flex items-center gap-2"
            >
              <Mail size={13} className="text-[#5266eb]" />
              <span>EMAIL</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
