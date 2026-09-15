import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  ArrowUpRight, 
  Zap, 
  Layers, 
  Sparkles, 
  Music, 
  Minus, 
  Instagram, 
  CheckCircle2, 
  Star, 
  Send, 
  Calendar, 
  Check, 
  Mail, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Loader2,
  Clock,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [bookingTab, setBookingTab] = useState<'calendly' | 'form'>('calendly');
  const [showAllVideos, setShowAllVideos] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [videoType, setVideoType] = useState('Short Form Videos');
  const [budgetRange, setBudgetRange] = useState('$500-$1000');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Official Calendly Booking URL
  const calendlyBookingUrl = "https://calendly.com/thomasvisualeditor/30min";

  const handleCalendlyRedirect = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      setBookingTab('calendly');
    } else {
      window.open(calendlyBookingUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Contact Form Submission Direct to Gmail
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/thomasnguyen.editor@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          'Video Type': videoType,
          'Budget Range': budgetRange,
          'Vision & Notes': formData.message || 'No additional notes provided.',
          _subject: `⚡ New Project Inquiry from ${formData.name} (${budgetRange})`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
      }
      setFormSubmitted(true);
    } catch {
      // Direct email client fallback
      window.location.href = `mailto:thomasnguyen.editor@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0AType: ${encodeURIComponent(videoType)}%0D%0ABudget: ${encodeURIComponent(budgetRange)}%0D%0ANotes: ${encodeURIComponent(formData.message)}`;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 10 LIVE SHORT-FORM VIDEO CLIPS
  const shortFormVideos = [
    { 
      id: "1212586126", 
      tag: "FEATURED 01", 
      title: "Visual Hook & Retention Engine",
      client: "High-Ticket Creator",
      metric: "89% 5S Retention"
    },
    { 
      id: "1212585180", 
      tag: "FEATURED 02", 
      title: "Motion Pacing & Dynamic Edit",
      client: "B2B Agency Founder",
      metric: "2.4M Views"
    },
    { 
      id: "1212585217", 
      tag: "FEATURED 03", 
      title: "Brand Identity & Aesthetics",
      client: "Personal Brand",
      metric: "+180% Profile Visits"
    },
    { 
      id: "1212585328", 
      tag: "FEATURED 04", 
      title: "Cinematic Visual Storytelling",
      client: "Digital Product Launch",
      metric: "3.2x Sales Lift"
    },
    { 
      id: "1190211907", 
      tag: "REEL 05", 
      title: "Hook Mechanics & SFX Architecture",
      client: "Crypto & Finance Creator",
      metric: "91% Hook Rate"
    },
    { 
      id: "1185562812", 
      tag: "REEL 06", 
      title: "Bespoke After Effects Keyframes",
      client: "Software Founder",
      metric: "74% Completion Rate"
    },
    { 
      id: "1185562961", 
      tag: "REEL 07", 
      title: "High-Energy Pacing & Cuts",
      client: "High-Ticket Coach",
      metric: "+210% Leads"
    },
    { 
      id: "1185562977", 
      tag: "REEL 08", 
      title: "Multi-Layered Sound Architecture",
      client: "Content Creator",
      metric: "1.1M Organic Views"
    },
    { 
      id: "1185563164", 
      tag: "REEL 09", 
      title: "Visual B-Roll Strategy",
      client: "Consulting Agency",
      metric: "4.5x Shares"
    },
    { 
      id: "1185563238", 
      tag: "REEL 10", 
      title: "Rec.709 Color Grading Probe",
      client: "Media Production",
      metric: "Studio Mastered"
    },
  ];

  const filteredVideos = shortFormVideos.filter(v => 
    v.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    v.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show top 4 (2 rows of 2 columns) by default, or all if expanded
  const displayedVideos = showAllVideos ? filteredVideos : filteredVideos.slice(0, 4);

  // REAL SPECIFIED CLIENT TESTIMONIALS (VIA MASI, VLADY, HOANG PHUC, KALEEMIX)
  const clientTestimonials = [
    {
      name: "Via Masi",
      handle: "@viamasi_media",
      role: "Creator & Media Agency Founder",
      avatar: "/clients/via_masi.jpg",
      metric: "+210% Inbound Inquiries",
      comment: "Thomas completely transformed our short-form pacing. We went from burning cash on views that went nowhere to generating qualified inbound calls every single week. His 48-hour delivery timeline and attention to detail are unmatched in the industry.",
      stars: 5,
      location: "United States"
    },
    {
      name: "Vlady",
      handle: "@vlady_official",
      role: "Digital Course Creator & Personal Brand",
      avatar: "/clients/vlady.jpg",
      metric: "3.2x Course Sales",
      comment: "The retention on our reels doubled within the first 10 days of working with Thomas. He truly understands buyer psychology, not just fancy transitions. He helped me sell out my digital product launch completely organically without paid ads.",
      stars: 5,
      location: "Global"
    },
    {
      name: "Hoang Phuc",
      handle: "@hoangphuc_creator",
      role: "Tech Creator & Educator",
      avatar: "/clients/hoang_phuc.jpg",
      metric: "84% 5S Retention",
      comment: "First 5-second viewer retention jumped from 34% to 84% within 2 weeks of implementing his visual pacing framework. Organic follower growth tripled and his team communicates seamlessly via Frame.io.",
      stars: 5,
      location: "Vietnam"
    },
    {
      name: "Kaleemix",
      handle: "@kaleemix_official",
      role: "High-Ticket B2B Media Agency",
      avatar: "/clients/kaleemix.jpg",
      metric: "+160% Inbound Leads",
      comment: "Visual hooks and bespoke After Effects keyframing turned our short-form content into an automated client acquisition engine. Zero template slop — everything is tailor-made for high conversion.",
      stars: 5,
      location: "United Kingdom"
    }
  ];

  // 4 Pillars of Strategy
  const pillars = [
    { 
      title: "Neuro-Pacing", 
      description: "Eliminate dead air and awkward pauses within the first 3 critical seconds, preventing viewer drop-off before your pitch.", 
      icon: Zap 
    },
    { 
      title: "Bespoke Motion VFX", 
      description: "Tailored After Effects graphics built specifically to match your brand colors and establish instant market authority.", 
      icon: Layers 
    },
    { 
      title: "Conversion B-Roll", 
      description: "Context-driven visual proof replacing cheap stock footage with engaging scenes that reinforce your message.", 
      icon: Sparkles 
    },
    { 
      title: "Sound Architecture", 
      description: "Multi-layered audio design with punchy risers, drops, and impacts engineered to subconsciously hold viewer attention.", 
      icon: Music 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#ededf3] relative overflow-x-hidden selection:bg-[#1591DC]/30 selection:text-white">
      
      {/* Film Grain Noise Overlay */}
      <div className="noise-overlay" aria-hidden="true"></div>

      {/* Atmospheric Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#1591DC]/12 via-[#1591DC]/4 to-transparent blur-[120px]"></div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#1591DC]/5 blur-[130px]"></div>
        <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-[#1591DC]/5 blur-[130px]"></div>
      </div>

      {/* 1. CLEAN STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-[#0b0c10]/90 backdrop-blur-xl border-b border-white/[0.06] px-6 md:px-12 py-3 flex justify-between items-center max-w-[1240px] mx-auto">
        <a href="#hero" className="flex items-center gap-3 text-decoration-none group">
          <img 
            src="/thomas_portrait.jpg" 
            alt="Thomas Nguyen" 
            className="w-8 h-8 rounded-full object-cover border border-[#1591DC] shadow-[0_0_12px_rgba(21,145,220,0.4)] group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col text-left">
            <span className="font-semibold text-sm tracking-tight text-white leading-none">
              Thomas Nguyen
            </span>
            <span className="text-[10px] text-[#9496a1] tracking-tight">
              High-Retention Video Editor
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#9496a1] tracking-tight">
          <a href="#hero" className="hover:text-white transition-colors">Offer</a>
          <a href="#work" className="hover:text-white transition-colors">Showcase</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Results</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#booking" className="hover:text-white transition-colors">Book Call</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleCalendlyRedirect}
            className="px-4 py-2 btn-primary-kuldeep text-xs font-semibold tracking-tight cursor-pointer flex items-center gap-1.5"
          >
            <span>Book a Call</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 space-y-24 md:space-y-32 pb-28 max-w-[1160px] mx-auto px-6">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION & HORMOZI GRAND SLAM OFFER                                */}
        {/* Dream Outcome + Fast Time Delay + Zero Pain / Without Effort & Sacrifice  */}
        {/* ========================================================================= */}
        <section id="hero" className="pt-14 md:pt-20 space-y-7 text-center">
          
          {/* Target Audience & Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12141a] border border-white/[0.08] text-xs text-[#ededf3] font-medium tracking-tight shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[#38bdf8] font-semibold">FOR HIGH-TICKET CREATORS &amp; FOUNDERS</span>
            <span className="text-white/30">•</span>
            <span>2 Spots Open For This Month</span>
          </div>
          
          {/* HORMOZI-STYLE HEADLINE (Dream Outcome + High Conversion + In 48 Hours) */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
              Turn Raw Clips Into <br className="hidden sm:block" />
              <span className="font-serif-italic font-bold text-[#1591DC]">High-Paying Inbound Clients</span> in 48 Hours.
            </h1>
            <p className="text-[#9496a1] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal tracking-tight">
              We engineer high-retention short-form video systems with bespoke After Effects motion, neuro-pacing, and sales psychology — turning passive scrollers into booked calls. <strong className="text-white">Without you wasting 20+ hours editing or hiring expensive bloated agencies.</strong>
            </p>
          </div>

          {/* Action Button Group (Direct Call-To-Action & Showcase Jump) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button 
              onClick={handleCalendlyRedirect}
              className="px-7 py-3.5 btn-primary-kuldeep text-xs sm:text-sm tracking-tight inline-flex items-center gap-2 cursor-pointer font-semibold"
            >
              <span>Claim Your 15-Min Retention Call</span>
              <ArrowUpRight size={15} />
            </button>

            <a 
              href="#work"
              className="px-6 py-3.5 btn-secondary-kuldeep text-xs sm:text-sm tracking-tight inline-flex items-center gap-2 cursor-pointer font-medium"
            >
              <span>Explore Client Showcase ↓</span>
            </a>
          </div>

          {/* Hormozi Risk Reversal Note */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#38bdf8] font-medium">
            <ShieldCheck size={14} />
            <span>100% Satisfaction Guarantee: Unlimited revisions until your video hits peak retention</span>
          </div>

          {/* Social Proof Strip with Real Client Avatars */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 text-xs text-[#9496a1]">
            <div className="flex items-center -space-x-2">
              <img 
                src="/clients/via_masi.jpg" 
                alt="Via Masi" 
                className="w-7 h-7 rounded-full border-2 border-[#0b0c10] object-cover" 
              />
              <img 
                src="/clients/vlady.jpg" 
                alt="Vlady" 
                className="w-7 h-7 rounded-full border-2 border-[#0b0c10] object-cover" 
              />
              <img 
                src="/clients/hoang_phuc.jpg" 
                alt="Hoang Phuc" 
                className="w-7 h-7 rounded-full border-2 border-[#0b0c10] object-cover" 
              />
              <img 
                src="/clients/kaleemix.jpg" 
                alt="Kaleemix" 
                className="w-7 h-7 rounded-full border-2 border-[#0b0c10] object-cover" 
              />
            </div>
            <div className="flex items-center gap-2 text-[#ededf3] font-medium tracking-tight">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span>Trusted by 20+ High-Ticket Founders &amp; Creators Worldwide</span>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto pt-4">
            <div className="kuldeep-card p-5 text-center space-y-0.5">
              <h3 className="text-3xl font-semibold text-white tracking-tight">800+</h3>
              <p className="text-xs text-[#9496a1] uppercase font-medium tracking-tight">Reels Delivered</p>
            </div>

            <div className="kuldeep-card p-5 text-center space-y-0.5">
              <h3 className="text-3xl font-semibold text-white tracking-tight">85%+</h3>
              <p className="text-xs text-[#9496a1] uppercase font-medium tracking-tight">First 5S Retention</p>
            </div>

            <div className="kuldeep-card p-5 text-center space-y-0.5">
              <h3 className="text-3xl font-semibold text-white tracking-tight">48H</h3>
              <p className="text-xs text-[#9496a1] uppercase font-medium tracking-tight">Turnaround Delivery</p>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 2. CO-EDITING & WORK SHOWCASE (IMMEDIATELY AFTER HERO, 2-COLUMN GRID)      */}
        {/* ========================================================================= */}
        <section id="work" className="space-y-6 pt-2 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-[#9496a1] uppercase">
                <span>PORTFOLIO SHOWCASE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Engineered For Retention. <span className="font-serif-italic font-bold text-[#1591DC]">Built For Conversion.</span>
              </h2>
              <p className="text-xs text-[#9496a1]">
                Dàn thành 2 cột trực quan (2 hàng đầu tiên) để bạn dễ dàng bao quát và đánh giá chất lượng dựng
              </p>
            </div>

            {/* Video Search Filter */}
            <div className="bg-[#12141a] border border-white/[0.08] rounded-full px-3.5 py-1.5 flex items-center gap-2.5 w-full sm:w-64 focus-within:border-[#1591DC]/50 transition-all">
              <Search size={13} className="text-[#9496a1]" />
              <input 
                type="text" 
                placeholder="Filter videos or clients..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs text-white placeholder:text-[#9496a1]/60 w-full"
              />
            </div>
          </div>

          {/* TWO-COLUMN GRID (DÀN THÀNH 2 CỘT / 2 HÀNG RÕ RÀNG THEO YÊU CẦU) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {displayedVideos.map((video, idx) => (
              <div 
                key={video.id + idx}
                className="kuldeep-card p-3 space-y-3 flex flex-col justify-between group hover:border-[#1591DC]/50 transition-all duration-300 shadow-lg"
              >
                {/* 9:16 Video Player Card */}
                <div className="w-full aspect-[9/16] relative bg-black rounded-xl overflow-hidden border border-white/[0.08]">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?autoplay=0&loop=0&background=0&title=0&byline=0&portrait=0&color=1591DC`}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title={video.title}
                  />

                  {/* Top Status Tag */}
                  <div className="absolute top-3 left-3 z-30 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/85 border border-white/[0.15] text-[10px] font-semibold text-white uppercase tracking-wider backdrop-blur-md">
                      {video.tag}
                    </span>
                  </div>

                  {/* Metric Tag */}
                  <div className="absolute top-3 right-3 z-30 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-[#1591DC]/25 border border-[#1591DC]/50 text-[10px] font-semibold text-[#38bdf8] backdrop-blur-md">
                      {video.metric}
                    </span>
                  </div>
                </div>

                {/* Video Info Bar */}
                <div className="px-1.5 py-1 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#1591DC] transition-colors leading-tight">
                      {video.title}
                    </h3>
                    <p className="text-[11px] text-[#9496a1]">
                      Client: <span className="text-[#ededf3]">{video.client}</span>
                    </p>
                  </div>

                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 shrink-0">
                    <CheckCircle2 size={12} /> Live Reel
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Toggle All Videos Button */}
          {filteredVideos.length > 4 && (
            <div className="text-center pt-2">
              <button
                onClick={() => setShowAllVideos(!showAllVideos)}
                className="px-6 py-2.5 btn-secondary-kuldeep text-xs font-semibold tracking-tight inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{showAllVideos ? "Show Less (Top 4 Reels)" : `View All ${filteredVideos.length} Projects`}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${showAllVideos ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}

          {/* Mid-Page Call-To-Action Banner */}
          <div className="kuldeep-card p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-[#12141a] via-[#1591DC]/10 to-[#12141a] border border-[#1591DC]/30">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Want your short-form content to look like this?
              </h3>
              <p className="text-xs text-[#9496a1]">
                We partner with 2 select creators per month to completely overhaul their retention pacing.
              </p>
            </div>
            <button 
              onClick={handleCalendlyRedirect}
              className="px-6 py-3 btn-primary-kuldeep text-xs font-semibold tracking-tight shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. VERIFIED CLIENT TESTIMONIALS (FEATURING VIA MASI, VLADY & PROOF)       */}
        {/* ========================================================================= */}
        <section id="testimonials" className="space-y-6 pt-2 scroll-mt-20">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-[11px] font-semibold text-[#38bdf8] uppercase tracking-wide">
              <Star size={11} fill="currentColor" />
              <span>Verified Client Proof</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Real Results From <span className="font-serif-italic font-bold text-[#1591DC]">Real Creators &amp; Founders.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#9496a1]">
              See what happened when founders moved away from generic templates to bespoke retention editing.
            </p>
          </div>

          {/* Testimonial Cards Grid (Featuring Via Masi & Vlady prominently) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {clientTestimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="kuldeep-card p-6 sm:p-7 flex flex-col justify-between space-y-5 border border-white/[0.08] hover:border-[#1591DC]/40 transition-all shadow-md"
              >
                <div className="space-y-3.5">
                  {/* Rating & Metric Pill */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 gap-0.5">
                      {Array.from({ length: testimonial.stars }).map((_, s) => (
                        <Star key={s} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#1591DC]/20 border border-[#1591DC]/40 text-[11px] font-bold text-[#38bdf8] tracking-tight">
                      {testimonial.metric}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-xs sm:text-sm text-[#ededf3] leading-relaxed font-normal">
                    "{testimonial.comment}"
                  </p>
                </div>

                {/* Client Profile Footer with Actual Avatar */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-11 h-11 rounded-full object-cover border border-white/[0.15] shadow-sm"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-[11px] text-[#9496a1] leading-tight mt-0.5">
                        {testimonial.role}
                      </p>
                      <span className="text-[10px] text-[#38bdf8]">
                        {testimonial.handle}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    <ShieldCheck size={11} /> VERIFIED CLIENT
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Stat Banner */}
          <div className="pt-2 text-center text-xs text-[#9496a1]">
            <span>Average 5-Second Retention Score across all client channels: </span>
            <strong className="text-white font-semibold">86.4%</strong>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. 3-STEP 48-HOUR WORKFLOW & PROCESS (TRANSPARENT & CLEAN)                 */}
        {/* ========================================================================= */}
        <section id="process" className="space-y-6 pt-2 scroll-mt-20">
          <div className="text-center space-y-1.5 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
              How The Service <span className="font-serif-italic font-bold text-[#1591DC]">Works For You</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#9496a1]">
              From raw footage to high-converting 4K delivery in 3 seamless steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            
            {/* Step 01 */}
            <div className="kuldeep-card p-7 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1591DC] font-mono">01</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wide bg-white/[0.04] text-[#9496a1] border border-white/[0.06]">
                    STEP 01
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#1591DC] transition-colors">
                    Submit Raw Footage
                  </h3>
                  <p className="text-xs text-[#9496a1] leading-relaxed">
                    Share your raw footage and campaign goals. Simply drop your video files into Google Drive, Dropbox, or Frame.io.
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-white/[0.06] space-y-1.5 text-xs text-[#9496a1]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                  <span>Hook &amp; Script Alignment</span>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="kuldeep-card p-7 space-y-4 border border-[#1591DC]/40 bg-[#12141a] flex flex-col justify-between group shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1591DC] font-mono">02</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wide bg-[#1591DC]/20 text-[#ededf3] border border-[#1591DC]/40">
                    STEP 02 (48H)
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-white">
                    Precision 48H Edit
                  </h3>
                  <p className="text-xs text-[#9496a1] leading-relaxed">
                    We eliminate dead air, construct bespoke After Effects graphics, color grade in Rec.709, and master layered audio.
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-white/[0.06] space-y-1.5 text-xs text-[#ededf3]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                  <span>Neuro-Pacing &amp; Audio Mastery</span>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="kuldeep-card p-7 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1591DC] font-mono">03</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wide bg-white/[0.04] text-[#9496a1] border border-white/[0.06]">
                    STEP 03
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#1591DC] transition-colors">
                    Final Delivery &amp; Scale
                  </h3>
                  <p className="text-xs text-[#9496a1] leading-relaxed">
                    Receive your final 4K master files formatted for Reels, TikTok, and Shorts with timestamp revisions on Frame.io.
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-white/[0.06] space-y-1.5 text-xs text-[#9496a1]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                  <span>Unlimited Timestamp Revisions</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CORE CAPABILITIES (4 PILLARS)                                          */}
        {/* ========================================================================= */}
        <section id="services" className="space-y-6 pt-2 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Core Retention <span className="font-serif-italic font-bold text-[#1591DC]">Capabilities</span>
              </h2>
              <p className="text-xs text-[#9496a1]">The 4 foundational pillars behind our high-converting video systems</p>
            </div>
            <span className="text-xs text-[#9496a1] uppercase font-medium">04 PILLARS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="kuldeep-card p-6 flex flex-col justify-between space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-[#1591DC]/15 text-[#1591DC] flex items-center justify-center">
                    <pillar.icon size={15} />
                  </div>
                  <span className="text-xs text-[#9496a1] font-mono">0{idx + 1}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#9496a1] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. FOUNDER STORY (MOVED DOWN - AFTER WORK, RESULTS & CAPABILITIES)        */}
        {/* ========================================================================= */}
        <section id="about" className="pt-2 scroll-mt-20 max-w-[980px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Studio Portrait Art Block (Using Thomas's New Crisp Portrait) */}
            <div className="shrink-0 w-full md:w-[310px] flex justify-center">
              <div className="relative w-full max-w-[310px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[#0b0c10]">
                <img 
                  src="/thomas_portrait.jpg" 
                  alt="Thomas Nguyen - Visual Retention Strategist" 
                  className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Tag at Bottom of Portrait */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs font-semibold">
                  <span className="px-3 py-1 rounded-full bg-black/85 border border-white/[0.15] text-[#ededf3] backdrop-blur-md text-[11px]">
                    Thomas Nguyen
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1591DC]/20 border border-[#1591DC]/40 text-[#1591DC] backdrop-blur-md flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1591DC] animate-ping"></span>
                    Accepting Clients
                  </span>
                </div>
              </div>
            </div>

            {/* Bio & Craft Philosophy */}
            <div className="space-y-4 text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-[#9496a1] uppercase">
                <span>FOUNDER STORY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                The Mind Behind <br />
                <span className="font-serif-italic font-bold text-[#1591DC]">800+ High-Retention Reels.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#9496a1] leading-relaxed">
                Hi, I'm Thomas — a video editor and visual retention strategist based in Vietnam, working with creators and founders worldwide.
              </p>

              <p className="text-xs sm:text-sm text-[#9496a1] leading-relaxed">
                Most editors focus solely on flashy transitions or generic template packs. I focus on viewer psychology: why someone stops scrolling, why they watch past the 5-second mark, and how visual pacing leads directly to client conversion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-start gap-2 text-xs text-[#ededf3]">
                  <CheckCircle2 size={15} className="text-[#1591DC] shrink-0 mt-0.5" />
                  <span>800+ Reels edited for founders</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#ededf3]">
                  <CheckCircle2 size={15} className="text-[#1591DC] shrink-0 mt-0.5" />
                  <span>Strict 48H turnaround guarantee</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#ededf3]">
                  <CheckCircle2 size={15} className="text-[#1591DC] shrink-0 mt-0.5" />
                  <span>Cinema-standard Rec.709 color</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#ededf3]">
                  <CheckCircle2 size={15} className="text-[#1591DC] shrink-0 mt-0.5" />
                  <span>Frame.io collaborative feedback</span>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={handleCalendlyRedirect}
                  className="px-6 py-2.5 btn-primary-kuldeep text-xs font-semibold tracking-tight cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Work With Thomas</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. DIRECT BOOKING (CALENDLY INLINE EMBED) & INTAKE FORM (CLOSING SECTION)  */}
        {/* ========================================================================= */}
        <section id="booking" className="space-y-6 pt-2 max-w-4xl mx-auto scroll-mt-20">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-xs font-semibold text-[#38bdf8] uppercase tracking-wide">
              <Calendar size={13} />
              <span>Direct Booking &amp; Inquiry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Schedule Your 15-Minute <br />
              <span className="font-serif-italic font-bold text-[#1591DC]">Retention Audit Call.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#9496a1]">
              Pick a time directly on our calendar below, or send your project details. We will analyze your current content and show you how to double retention.
            </p>

            {/* Switcher Tabs */}
            <div className="pt-3 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setBookingTab('calendly')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  bookingTab === 'calendly'
                    ? 'bg-[#1591DC] text-white shadow-[0_0_15px_rgba(21,145,220,0.4)]'
                    : 'bg-[#12141a] border border-white/[0.08] text-[#9496a1] hover:text-white'
                }`}
              >
                📅 Book via Calendar (Instant)
              </button>
              <button
                type="button"
                onClick={() => setBookingTab('form')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  bookingTab === 'form'
                    ? 'bg-[#1591DC] text-white shadow-[0_0_15px_rgba(21,145,220,0.4)]'
                    : 'bg-[#12141a] border border-white/[0.08] text-[#9496a1] hover:text-white'
                }`}
              >
                ✉️ Send Project Inquiry (Form)
              </button>
            </div>
          </div>

          {/* TAB 1: INLINE CALENDLY EMBED (MEETING COACH TRA NGHI'S CORE REQUIREMENT) */}
          {bookingTab === 'calendly' && (
            <div className="kuldeep-card p-4 sm:p-6 border border-[#1591DC]/40 shadow-2xl relative overflow-hidden">
              <div className="w-full min-h-[680px] rounded-xl overflow-hidden bg-[#0b0c10] relative">
                <iframe
                  src="https://calendly.com/thomasvisualeditor/30min?embed_domain=thomasnguyen.online&embed_type=Inline&background_color=0b0c10&text_color=ffffff&primary_color=1591dc"
                  width="100%"
                  height="680"
                  frameBorder="0"
                  title="Schedule a Strategy Call with Thomas Nguyen"
                  className="w-full min-h-[680px]"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9496a1] border-t border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>100% Free 15-Min Strategy Session • No obligation</span>
                </div>
                <a 
                  href={calendlyBookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#38bdf8] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open calendar in new tab</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: PROJECT INTAKE FORM */}
          {bookingTab === 'form' && (
            <div className="kuldeep-card p-7 sm:p-9 space-y-5 border border-white/[0.08] max-w-2xl mx-auto">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#ededf3] block">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0b0c10] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-[#9496a1]/60 focus:outline-none focus:border-[#1591DC] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#ededf3] block">Work Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0b0c10] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-[#9496a1]/60 focus:outline-none focus:border-[#1591DC] transition-all"
                  />
                </div>

                {/* Video Type Selection Pills */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#ededf3] block">Video Format Needed</label>
                  <div className="flex flex-wrap gap-2">
                    {['Short Form Videos', 'Motion Graphics / VSL', 'Long Form Videos'].map(type => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setVideoType(type)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          videoType === type 
                            ? 'bg-[#1591DC] text-white shadow-[0_0_12px_rgba(21,145,220,0.4)]' 
                            : 'bg-[#0b0c10] border border-white/[0.08] text-[#9496a1] hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range Pills */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#ededf3] block">Estimated Monthly Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {['Under $500', '$500-$1000', '$1000-$2000', '$2000-$5000'].map(b => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudgetRange(b)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          budgetRange === b 
                            ? 'bg-[#1591DC] text-white shadow-[0_0_12px_rgba(21,145,220,0.4)]' 
                            : 'bg-[#0b0c10] border border-white/[0.08] text-[#9496a1] hover:text-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#ededf3] block">Project Brief &amp; Notes</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us about your channels, goals, reference links or vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0b0c10] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-[#9496a1]/60 focus:outline-none focus:border-[#1591DC] transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 btn-primary-kuldeep text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : formSubmitted ? (
                    <>
                      <Check size={15} />
                      <span>Inquiry Sent! We'll reply within 24 hours</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Submit Project Brief</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* 8. FREQUENTLY ASKED QUESTIONS (OVERCOMING OBJECTIONS)                     */}
        {/* ========================================================================= */}
        <section id="faq" className="space-y-6 pt-2 scroll-mt-20">
          <div className="text-center space-y-1.5 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Frequently Asked <span className="font-serif-italic font-bold text-[#1591DC]">Questions</span>
            </h2>
            <p className="text-xs text-[#9496a1]">Everything you need to know about working with us</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start max-w-5xl mx-auto">
            
            {/* Direct Booking Card */}
            <div className="kuldeep-card p-7 space-y-4 lg:col-span-1 border border-[#1591DC]/30">
              <div className="w-9 h-9 rounded-full bg-[#1591DC]/15 text-[#1591DC] flex items-center justify-center">
                <Calendar size={17} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold text-white leading-tight">
                  Have a specific question? <br />
                  <span className="font-serif-italic font-bold text-[#1591DC]">Let's discuss it directly.</span>
                </h3>
                <p className="text-xs text-[#9496a1] leading-relaxed">
                  Book a quick 15-minute alignment call directly on our calendar.
                </p>
              </div>
              <button 
                onClick={handleCalendlyRedirect}
                className="w-full py-2.5 btn-primary-kuldeep text-xs tracking-tight font-semibold cursor-pointer"
              >
                Book a 15-Min Call
              </button>
            </div>

            {/* Accordion Questions */}
            <div className="space-y-2.5 lg:col-span-2">
              {[
                {
                  q: "What makes your editing different from standard freelance editors?",
                  a: "Most freelance editors simply trim clips and add random template presets. We operate as conversion partners — engineering hook retention in the first 3 seconds, custom keyframing After Effects graphics, and crafting pacing that guides the viewer directly toward your offer."
                },
                {
                  q: "How fast is the delivery turnaround?",
                  a: "Our standard turnaround time is 48 hours per video. For high-volume partners or urgent campaign deadlines, we also offer 24-hour expedited delivery."
                },
                {
                  q: "How do we collaborate and send footage?",
                  a: "We set up a dedicated Frame.io project workspace and shared Google Drive/Dropbox for you. You drop in your raw files, and you can leave frame-accurate timestamp feedback directly on the video."
                },
                {
                  q: "What if I need changes on the video?",
                  a: "We offer unlimited revisions until you are completely satisfied with the pacing, retention score, and aesthetic quality of the final master."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We support international bank transfers, Wise, Stripe, and PayPal with formal invoices provided."
                }
              ].map((item, i) => (
                <div key={i} className="kuldeep-card transition-all">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex justify-between items-center p-4 sm:p-4.5 text-left text-xs sm:text-sm font-medium text-white hover:text-[#1591DC] transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <div className="w-6 h-6 rounded-full bg-white/[0.04] text-[#9496a1] flex items-center justify-center">
                      {activeFaq === i ? <Minus size={12} /> : <Plus size={12} />}
                    </div>
                  </button>
                  {activeFaq === i && (
                    <div className="p-4 sm:p-4.5 pt-0 border-t border-white/[0.06] text-xs text-[#9496a1] leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* 9. MINIMAL HIGH-STATUS FOOTER */}
      <footer className="border-t border-white/[0.06] bg-[#0b0c10] py-8 px-6 md:px-12 relative z-20">
        <div className="max-w-[1160px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/thomas_portrait.jpg" 
              alt="Thomas Nguyen" 
              className="w-7 h-7 rounded-full object-cover border border-[#1591DC]"
            />
            <p className="text-xs text-[#9496a1]">
              &copy; 2026 Thomas Nguyen Studio. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href="https://x.com/thomaseditor_vn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-[#12141a] border border-white/[0.08] text-[#9496a1] hover:text-[#1591DC] hover:border-[#1591DC]/50 transition-all flex items-center justify-center"
              title="X / Twitter"
            >
              <Twitter size={14} />
            </a>

            <a 
              href="https://www.instagram.com/thomasvisualeditor/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-[#12141a] border border-white/[0.08] text-[#9496a1] hover:text-[#1591DC] hover:border-[#1591DC]/50 transition-all flex items-center justify-center"
              title="Instagram"
            >
              <Instagram size={14} />
            </a>

            <a 
              href="https://www.facebook.com/profile.php?id=100063990921099" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-[#12141a] border border-white/[0.08] text-[#9496a1] hover:text-[#1591DC] hover:border-[#1591DC]/50 transition-all flex items-center justify-center"
              title="Facebook"
            >
              <Facebook size={14} />
            </a>

            <a 
              href="https://www.linkedin.com/in/phucxuannguyen/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-[#12141a] border border-white/[0.08] text-[#9496a1] hover:text-[#1591DC] hover:border-[#1591DC]/50 transition-all flex items-center justify-center"
              title="LinkedIn"
            >
              <Linkedin size={14} />
            </a>

            <a 
              href="mailto:thomasnguyen.editor@gmail.com" 
              className="w-8 h-8 rounded-full bg-[#12141a] border border-white/[0.08] text-[#9496a1] hover:text-[#1591DC] hover:border-[#1591DC]/50 transition-all flex items-center justify-center"
              title="Email"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
