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
  Star,
  Send,
  Calendar,
  Check
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form State
  const [videoType, setVideoType] = useState('Short Form Videos');
  const [budgetRange, setBudgetRange] = useState('$500-$1000');
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    <div className="min-h-screen bg-[#0e0e11] text-[#ededf3] relative overflow-x-hidden selection:bg-[#5266eb]/30 selection:text-white">
      
      {/* Film Grain Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Atmospheric Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#5266eb]/12 via-[#5266eb]/5 to-transparent blur-[120px]"></div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#5266eb]/6 blur-[130px]"></div>
      </div>

      {/* LIVE FLOATING TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all">
          <div className="bg-[#15151a] border border-[#5266eb]/40 px-4 py-3 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#5266eb] animate-ping"></span>
            <p className="text-xs text-[#ededf3] font-medium">{toastMessage}</p>
            <button onClick={() => setShowToast(false)} className="text-[#9e9ea7] hover:text-white ml-2 cursor-pointer">
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* KULDEEP FLOATING HEADER */}
      <header className="sticky top-0 z-40 bg-[#0e0e11]/80 backdrop-blur-xl border-b border-white/[0.06] px-6 md:px-12 py-4 flex justify-between items-center max-w-[1300px] mx-auto">
        <a href="#hero" className="flex items-center gap-2 text-decoration-none">
          <div className="w-7 h-7 rounded-full bg-[#5266eb] flex items-center justify-center font-bold text-white text-xs shadow-[0_0_12px_rgba(82,102,235,0.4)]">
            TN
          </div>
          <span className="font-bold text-base tracking-tight text-white">
            Thomas<span className="font-serif-italic font-normal text-[#5266eb] ml-1">Nguyen</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#9e9ea7] tracking-wide">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#testimonial" className="hover:text-white transition-colors">Testimonial</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact us</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleCalendlyRedirect}
            className="px-5 py-2 btn-primary-kuldeep text-xs tracking-wide cursor-pointer flex items-center gap-1.5"
          >
            <span>Book a Call</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 space-y-32 pb-32 max-w-[1200px] mx-auto px-6">
        
        {/* 1. KULDEEP HERO SECTION */}
        <section id="hero" className="pt-16 md:pt-24 space-y-8 text-center">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15151a] border border-white/[0.08] text-xs text-[#ededf3] font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>3 Spots Available for this month</span>
          </div>
          
          {/* Main Title with Elegant Serif Italic Accent */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Every Great Story <br className="hidden sm:block" />
              <span className="font-serif-italic font-normal text-white">Deserves a</span> <span className="font-serif-italic font-normal text-[#5266eb]">Great Editor.</span>
            </h1>
            <p className="text-[#9e9ea7] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto font-normal">
              High-impact short-form video editing and visual retention strategy for personal brands, founders, and content creators. Double viewer retention in 48 hours.
            </p>
          </div>

          {/* Action Button Group */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <a 
              href="#work"
              className="px-8 py-3.5 btn-primary-kuldeep text-xs tracking-wide inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Work</span>
              <ArrowDownRight size={14} />
            </a>

            <a 
              href="#process"
              className="px-8 py-3.5 btn-secondary-kuldeep text-xs tracking-wide inline-flex items-center gap-2 cursor-pointer"
            >
              <span>How it works</span>
            </a>
          </div>

          {/* Happy Customers / Social Proof Strip */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#9e9ea7]">
            <div className="flex items-center -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#0e0e11] bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">HP</div>
              <div className="w-8 h-8 rounded-full border-2 border-[#0e0e11] bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-[10px] font-bold text-white">KX</div>
              <div className="w-8 h-8 rounded-full border-2 border-[#0e0e11] bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white">RO</div>
              <div className="w-8 h-8 rounded-full border-2 border-[#0e0e11] bg-gradient-to-tr from-amber-600 to-orange-600 flex items-center justify-center text-[10px] font-bold text-white">EC</div>
            </div>
            <div className="flex items-center gap-2 text-[#ededf3] font-medium">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <span>100+ Happy Creators &amp; 85%+ 5S Retention</span>
            </div>
          </div>

          {/* 3 Metric Cards Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6">
            <div className="kuldeep-card p-6 text-center space-y-1">
              <h3 className="text-3xl font-bold text-white tracking-tight">600+</h3>
              <p className="text-xs text-[#9e9ea7] uppercase tracking-wide">Reels Delivered</p>
            </div>

            <div className="kuldeep-card p-6 text-center space-y-1">
              <h3 className="text-3xl font-bold text-white tracking-tight">85%+</h3>
              <p className="text-xs text-[#9e9ea7] uppercase tracking-wide">First 5S Retention</p>
            </div>

            <div className="kuldeep-card p-6 text-center space-y-1">
              <h3 className="text-3xl font-bold text-white tracking-tight">100%</h3>
              <p className="text-xs text-[#9e9ea7] uppercase tracking-wide">Rec.709 Standard</p>
            </div>
          </div>

        </section>

        {/* 2. KULDEEP WORK / SHOWCASE SECTION */}
        <section id="work" className="space-y-6 pt-4 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-4">
            <div className="space-y-1">
              <span className="kuldeep-badge">Editing Work</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Explore our video editing <span className="font-serif-italic font-normal text-[#5266eb]">work and projects</span>
              </h2>
            </div>

            {/* Search Input */}
            <div className="bg-[#15151a] border border-white/[0.08] rounded-full px-4 py-2 flex items-center gap-3 w-full sm:w-72 focus-within:border-[#5266eb]/50 transition-all">
              <Search size={14} className="text-[#9e9ea7]" />
              <input 
                type="text" 
                placeholder="Search videos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs text-white placeholder:text-[#9e9ea7]/60 w-full"
              />
            </div>
          </div>

          {/* 5-Column 9:16 Video Showcase */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredVideos.map((video, idx) => (
              <div 
                key={video.id + idx}
                className="kuldeep-card aspect-[9/16] relative overflow-hidden group p-1"
              >
                <div className="w-full h-full relative bg-black rounded-[12px] overflow-hidden">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?autoplay=0&loop=0&background=0&title=0&byline=0&portrait=0&color=5266eb`}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title={video.title}
                  />

                  <div className="absolute inset-0 z-30 bg-black/15 group-hover:opacity-0 transition-all duration-300 pointer-events-none" />

                  <div className="absolute top-2.5 left-2.5 z-40">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/80 border border-white/[0.1] text-[9px] font-medium text-white uppercase tracking-wider">
                      {video.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. KULDEEP 3-STEP PROCESS SECTION */}
        <section id="process" className="space-y-8 pt-4 scroll-mt-24">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="kuldeep-badge">Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              How our video editing service <span className="font-serif-italic font-normal text-[#5266eb]">works for you</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 01 */}
            <div className="kuldeep-card p-8 space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#5266eb] font-mono">01</span>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-white/[0.04] text-[#9e9ea7] border border-white/[0.06]">
                    STEP 01
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#5266eb] transition-colors">
                    Submit Request
                  </h3>
                  <p className="text-xs text-[#9e9ea7] leading-relaxed">
                    Share your raw video needs and project details. Drop A-roll clips into Google Drive or Frame.io to get started.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-[#9e9ea7]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#5266eb] shrink-0" />
                  <span>Hook &amp; Script Notes Alignment</span>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="kuldeep-card p-8 space-y-5 border border-[#5266eb]/40 bg-[#15151a] flex flex-col justify-between group shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#5266eb] font-mono">02</span>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-[#5266eb]/20 text-[#ededf3] border border-[#5266eb]/40">
                    STEP 02 (48H)
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    Video Editing
                  </h3>
                  <p className="text-xs text-[#9e9ea7] leading-relaxed">
                    Our team edits, cuts dead air, builds bespoke After Effects motion graphics, color grades Rec.709 &amp; layers sound effects.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-[#ededf3]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#5266eb] shrink-0" />
                  <span>Neuro-Pacing &amp; Motion Keyframing</span>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="kuldeep-card p-8 space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#5266eb] font-mono">03</span>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-white/[0.04] text-[#9e9ea7] border border-white/[0.06]">
                    STEP 03
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#5266eb] transition-colors">
                    Final Delivery
                  </h3>
                  <p className="text-xs text-[#9e9ea7] leading-relaxed">
                    Receive the final 4K video with all necessary adjustments, ready for Instagram Reels, TikTok, and YouTube Shorts.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-[#9e9ea7]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#5266eb] shrink-0" />
                  <span>Unlimited Timestamp Revisions</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. KULDEEP TESTIMONIAL MARQUEE SECTION */}
        <section id="testimonial" className="space-y-6 pt-4 overflow-hidden scroll-mt-24">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="kuldeep-badge">Testimonial</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What our premium clients are <span className="font-serif-italic font-normal text-[#5266eb]">saying about us</span>
            </h2>
          </div>

          {/* Marquee Row 1 */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0e0e11] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0e0e11] to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee gap-5">
              {marqueeReviewsRow1.map((rev, i) => (
                <div 
                  key={`r1-${i}`}
                  className="kuldeep-card w-[340px] p-6 shrink-0 flex flex-col justify-between space-y-4 shadow-sm select-none"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={12} fill="currentColor" />
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#5266eb]/15 border border-[#5266eb]/30 text-[10px] font-semibold text-[#5266eb] uppercase">
                        {rev.metric}
                      </span>
                    </div>

                    <p className="text-xs text-[#ededf3] leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#5266eb]/20 text-[#5266eb] flex items-center justify-center text-xs font-bold">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-white font-medium block leading-none">{rev.name}</span>
                        <span className="text-[11px] text-[#9e9ea7]">{rev.handle}</span>
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
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0e0e11] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0e0e11] to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee-reverse gap-5">
              {marqueeReviewsRow2.map((rev, i) => (
                <div 
                  key={`r2-${i}`}
                  className="kuldeep-card w-[340px] p-6 shrink-0 flex flex-col justify-between space-y-4 shadow-sm select-none"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={12} fill="currentColor" />
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] font-medium text-[#9e9ea7] uppercase">
                        {rev.tag}
                      </span>
                    </div>

                    <p className="text-xs text-[#ededf3] leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-white font-medium block leading-none">{rev.name}</span>
                        <span className="text-[11px] text-[#9e9ea7]">{rev.handle}</span>
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

        {/* 5. EDITING SERVICES & SYSTEM PILLARS */}
        <section id="services" className="space-y-6 pt-4 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div className="space-y-1">
              <span className="kuldeep-badge">Services</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Core Editing <span className="font-serif-italic font-normal text-[#5266eb]">Capabilities</span>
              </h2>
            </div>
            <span className="text-xs text-[#9e9ea7] uppercase tracking-wide">04 CORE PILLARS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="kuldeep-card p-6 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-[#5266eb]/15 text-[#5266eb] flex items-center justify-center">
                    <pillar.icon size={15} />
                  </div>
                  <span className="text-xs text-[#9e9ea7] font-mono">0{idx + 1}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#9e9ea7] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. KULDEEP INTERACTIVE CONTACT INTAKE FORM */}
        <section id="contact" className="space-y-6 pt-4 max-w-2xl mx-auto scroll-mt-24">
          <div className="text-center space-y-2">
            <span className="kuldeep-badge">Contact</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Contact us for amazing <span className="font-serif-italic font-normal text-[#5266eb]">video editing projects</span>
            </h2>
          </div>

          <div className="kuldeep-card p-8 sm:p-10 space-y-6 border border-white/[0.08]">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
                setTimeout(() => setFormSubmitted(false), 6000);
              }} 
              className="space-y-5"
            >
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#ededf3] block">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your full name"
                  className="w-full bg-[#0e0e11] border border-white/[0.08] rounded-xl px-4 py-3 text-xs text-white placeholder:text-[#9e9ea7]/60 focus:outline-none focus:border-[#5266eb] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-[#ededf3] block">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-[#0e0e11] border border-white/[0.08] rounded-xl px-4 py-3 text-xs text-white placeholder:text-[#9e9ea7]/60 focus:outline-none focus:border-[#5266eb] transition-all"
                />
              </div>

              {/* Video Type Selection Pills */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#ededf3] block">What Kind of Video Do You Need?</label>
                <div className="flex flex-wrap gap-2">
                  {['Short Form Videos', 'Motion Graphics / VSL', 'Long Form Videos'].map(type => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setVideoType(type)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        videoType === type 
                          ? 'bg-[#5266eb] text-white shadow-[0_0_12px_rgba(82,102,235,0.4)]' 
                          : 'bg-[#0e0e11] border border-white/[0.08] text-[#9e9ea7] hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range Pills */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#ededf3] block">What’s Your Budget Range?</label>
                <div className="flex flex-wrap gap-2">
                  {['Under $500', '$500-$1000', '$1000-$2000', '$2000-$5000'].map(b => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudgetRange(b)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        budgetRange === b 
                          ? 'bg-[#5266eb] text-white shadow-[0_0_12px_rgba(82,102,235,0.4)]' 
                          : 'bg-[#0e0e11] border border-white/[0.08] text-[#9e9ea7] hover:text-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-[#ededf3] block">Share Your Vision</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your content, goals, reference links or vision..."
                  className="w-full bg-[#0e0e11] border border-white/[0.08] rounded-xl px-4 py-3 text-xs text-white placeholder:text-[#9e9ea7]/60 focus:outline-none focus:border-[#5266eb] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 btn-primary-kuldeep text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                {formSubmitted ? (
                  <>
                    <Check size={15} />
                    <span>Request Sent! We'll reply within 24 hours</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Submit Project Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* 7. KULDEEP FAQ SECTION */}
        <section id="faq" className="space-y-6 pt-4 scroll-mt-24">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="kuldeep-badge">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Frequently asked questions <span className="font-serif-italic font-normal text-[#5266eb]">about us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* Book an appointment side card */}
            <div className="kuldeep-card p-8 space-y-5 lg:col-span-1">
              <div className="w-10 h-10 rounded-full bg-[#5266eb]/15 text-[#5266eb] flex items-center justify-center">
                <Calendar size={18} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white leading-tight">
                  Have a question? <br />
                  <span className="font-serif-italic font-normal text-[#5266eb]">Let’s discuss it now!</span>
                </h3>
                <p className="text-xs text-[#9e9ea7] leading-relaxed">
                  Book a quick 15-minute alignment call directly on our calendar.
                </p>
              </div>
              <button 
                onClick={handleCalendlyRedirect}
                className="w-full py-3 btn-primary-kuldeep text-xs tracking-wide cursor-pointer"
              >
                Book an appointment
              </button>
            </div>

            {/* Accordion Questions */}
            <div className="space-y-3 lg:col-span-2">
              {[
                {
                  q: "What is the edit process?",
                  a: "Our editing process includes 4 phases: Intake & Discovery, Storyboarding, Precision Editing with Neuro-Pacing & Motion Graphics, and Final Delivery with unlimited revisions on Frame.io."
                },
                {
                  q: "How will I send you the footage?",
                  a: "You can upload your raw files to a shared Google Drive, Dropbox, or Frame.io project folder."
                },
                {
                  q: "What if I’m not satisfied?",
                  a: "We provide unlimited revisions until you are 100% satisfied with the final result."
                },
                {
                  q: "I need this video ASAP! Can you deliver in 24 hours?",
                  a: "Yes! We offer a 24-hour express turnaround option for urgent campaign deadlines."
                },
                {
                  q: "How do I get started?",
                  a: "Simply submit the project intake form above or book a quick strategy call on Calendly."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept PayPal, Wise, Stripe, and International Bank Wire Transfers."
                }
              ].map((item, i) => (
                <div key={i} className="kuldeep-card transition-all">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex justify-between items-center p-5 text-left text-xs sm:text-sm font-medium text-white hover:text-[#5266eb] transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <div className="w-6 h-6 rounded-full bg-white/[0.04] text-[#9e9ea7] flex items-center justify-center">
                      {activeFaq === i ? <Minus size={12} /> : <Plus size={12} />}
                    </div>
                  </button>
                  {activeFaq === i && (
                    <div className="p-5 pt-0 border-t border-white/[0.06] text-xs text-[#9e9ea7] leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* KULDEEP FOOTER */}
      <footer className="border-t border-white/[0.06] bg-[#0e0e11] py-12 px-6 md:px-12 relative z-20">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xs font-bold tracking-tight text-white">
              Thomas<span className="font-serif-italic font-normal text-[#5266eb] ml-1">Nguyen</span> // Video Editor Portfolio
            </h3>
            <p className="text-[11px] text-[#9e9ea7]">
              &copy; 2026 THOMAS NGUYEN. ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs">
            <a 
              href="https://x.com/thomaseditor_vn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-[#15151a] border border-white/[0.08] text-[#9e9ea7] hover:text-white hover:border-[#5266eb]/50 transition-all flex items-center gap-2"
            >
              <Twitter size={13} className="text-[#5266eb]" />
              <span>X</span>
            </a>

            <a 
              href="https://www.instagram.com/thomasvisualeditor/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-[#15151a] border border-white/[0.08] text-[#9e9ea7] hover:text-white hover:border-[#5266eb]/50 transition-all flex items-center gap-2"
            >
              <Instagram size={13} className="text-[#5266eb]" />
              <span>INSTAGRAM</span>
            </a>

            <a 
              href="https://www.facebook.com/profile.php?id=100063990921099" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-[#15151a] border border-white/[0.08] text-[#9e9ea7] hover:text-white hover:border-[#5266eb]/50 transition-all flex items-center gap-2"
            >
              <Facebook size={13} className="text-[#5266eb]" />
              <span>FACEBOOK</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/phucxuannguyen/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-[#15151a] border border-white/[0.08] text-[#9e9ea7] hover:text-white hover:border-[#5266eb]/50 transition-all flex items-center gap-2"
            >
              <Linkedin size={13} className="text-[#5266eb]" />
              <span>LINKEDIN</span>
            </a>

            <a 
              href="mailto:thomasnguyen.editor@gmail.com" 
              className="px-4 py-2 rounded-full bg-[#15151a] border border-white/[0.08] text-[#9e9ea7] hover:text-white hover:border-[#5266eb]/50 transition-all flex items-center gap-2"
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

function ArrowDownRight(props: { size?: number; className?: string }) {
  return (
    <svg 
      width={props.size || 16} 
      height={props.size || 16} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <line x1="7" y1="7" x2="17" y2="17"></line>
      <polyline points="17 7 17 17 7 17"></polyline>
    </svg>
  );
}
