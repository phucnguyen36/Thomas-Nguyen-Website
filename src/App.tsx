import React, { useState, useEffect, useRef } from 'react';
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
  ChevronLeft, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Facebook, 
  Twitter, 
  X,
  Loader2,
  AlertCircle
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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

  // Live Toast Notification
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Horizontal Video Slider Ref
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Official Calendly Booking URL
  const calendlyBookingUrl = "https://calendly.com/thomasvisualeditor/30min";

  const handleCalendlyRedirect = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.open(calendlyBookingUrl, '_blank', 'noopener,noreferrer');
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

  // 10 LIVE SHORT-FORM VIDEO CLIPS
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

  // REAL SPECIFIED CLIENT REVIEWS
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
    <div className="min-h-screen bg-[#0b0c10] text-[#ededf3] relative overflow-x-hidden selection:bg-[#1591DC]/30 selection:text-white">
      
      {/* Film Grain Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Atmospheric Ambient Glow with #1591DC */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#1591DC]/15 via-[#1591DC]/5 to-transparent blur-[120px]"></div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#1591DC]/6 blur-[130px]"></div>
      </div>

      {/* LIVE FLOATING TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all">
          <div className="bg-[#12141a] border border-[#1591DC]/40 px-4 py-3 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#1591DC] animate-ping"></span>
            <p className="text-xs text-[#ededf3] font-medium tracking-tight">{toastMessage}</p>
            <button onClick={() => setShowToast(false)} className="text-[#9496a1] hover:text-white ml-2 cursor-pointer">
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* KULDEEP CLEAN FLOATING HEADER WITH PORTRAIT LOGO */}
      <header className="sticky top-0 z-40 bg-[#0b0c10]/85 backdrop-blur-xl border-b border-white/[0.06] px-6 md:px-12 py-3.5 flex justify-between items-center max-w-[1240px] mx-auto">
        <a href="#hero" className="flex items-center gap-3 text-decoration-none group">
          <img 
            src="/thomas_portrait.jpg" 
            alt="Thomas Nguyen Logo" 
            className="w-8 h-8 rounded-full object-cover border border-[#1591DC] shadow-[0_0_12px_rgba(21,145,220,0.5)] group-hover:scale-105 transition-transform"
          />
          <span className="font-semibold text-sm md:text-base tracking-tight text-white">
            Thomas Nguyen
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#9496a1] tracking-tight">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#testimonial" className="hover:text-white transition-colors">Testimonial</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact us</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleCalendlyRedirect}
            className="px-5 py-2 btn-primary-kuldeep text-xs font-semibold tracking-tight cursor-pointer flex items-center gap-1.5"
          >
            <span>Book a Call</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 space-y-24 md:space-y-32 pb-28 max-w-[1200px] mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <section id="hero" className="pt-14 md:pt-20 space-y-7 text-center">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12141a] border border-white/[0.08] text-xs text-[#ededf3] font-medium tracking-tight shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>3 Spots Available for this month</span>
          </div>
          
          {/* Main Title - Balanced Weight with Bold Italic Accent */}
          <div className="space-y-3.5 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.08]">
              Every Great Story <br className="hidden sm:block" />
              Deserves a <span className="font-serif-italic font-bold text-[#1591DC]">Great Editor.</span>
            </h1>
            <p className="text-[#9496a1] text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal tracking-tight">
              High-impact short-form video editing and visual retention strategy for personal brands, founders, and content creators. Double viewer retention in 48 hours.
            </p>
          </div>

          {/* Official Creator Badge With Portrait Avatar */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#12141a] border border-white/[0.08] backdrop-blur-md shadow-sm">
            <img 
              src="/thomas_portrait.jpg" 
              alt="Thomas Nguyen" 
              className="w-6 h-6 rounded-full object-cover border border-[#1591DC]"
            />
            <div className="text-left text-xs">
              <span className="text-[#ededf3] font-medium block leading-tight">Thomas Nguyen</span>
              <a 
                href="https://thomasnguyen.online" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#9496a1] hover:text-[#1591DC] text-[11px] block leading-tight transition-colors"
              >
                thomasnguyen.online
              </a>
            </div>
          </div>

          {/* Action Button Group */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
            <a 
              href="#work"
              className="px-7 py-3 btn-primary-kuldeep text-xs tracking-tight inline-flex items-center gap-2 cursor-pointer font-semibold"
            >
              <span>Explore Work</span>
              <ArrowDownRight size={14} />
            </a>

            <a 
              href="#process"
              className="px-7 py-3 btn-secondary-kuldeep text-xs tracking-tight inline-flex items-center gap-2 cursor-pointer font-medium"
            >
              <span>How it works</span>
            </a>
          </div>

          {/* Social Proof Strip */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 text-xs text-[#9496a1]">
            <div className="flex items-center -space-x-2">
              <img src="/thomas_portrait.jpg" alt="Thomas" className="w-7 h-7 rounded-full border-2 border-[#0b0c10] object-cover" />
              <div className="w-7 h-7 rounded-full border-2 border-[#0b0c10] bg-gradient-to-tr from-[#1591DC] to-blue-700 flex items-center justify-center text-[10px] font-bold text-white">HP</div>
              <div className="w-7 h-7 rounded-full border-2 border-[#0b0c10] bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">KX</div>
              <div className="w-7 h-7 rounded-full border-2 border-[#0b0c10] bg-gradient-to-tr from-cyan-600 to-[#1591DC] flex items-center justify-center text-[10px] font-bold text-white">RO</div>
              <div className="w-7 h-7 rounded-full border-2 border-[#0b0c10] bg-gradient-to-tr from-blue-700 to-teal-600 flex items-center justify-center text-[10px] font-bold text-white">EC</div>
            </div>
            <div className="flex items-center gap-2 text-[#ededf3] font-medium tracking-tight">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span>100+ Happy Creators &amp; 85%+ 5S Retention</span>
            </div>
          </div>

          {/* 3 Metric Cards Strip (800+ REELS DELIVERED) */}
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
              <h3 className="text-3xl font-semibold text-white tracking-tight">100%</h3>
              <p className="text-xs text-[#9496a1] uppercase font-medium tracking-tight">Rec.709 Standard</p>
            </div>
          </div>

        </section>

        {/* 2. ARTISTIC VERTICAL PORTRAIT SPOTLIGHT (COMPACT, CLOSE SPACING) */}
        <section id="about" className="pt-2 scroll-mt-20 max-w-[980px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-7 md:gap-10">
            
            {/* Studio Portrait Art Block */}
            <div className="shrink-0 w-full md:w-[290px] flex justify-center">
              <div className="relative w-full max-w-[290px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.85)] bg-[#0b0c10]">
                <img 
                  src="/thomas_portrait.jpg" 
                  alt="Thomas Nguyen - Short-Form Video Editor & Retention Strategist" 
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
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Bio & Philosophy Block */}
            <div className="space-y-4 text-left flex-1">
              <span className="kuldeep-badge">About The Editor</span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                Engineering Viewer Attention With <br />
                <span className="font-serif-italic font-bold text-[#1591DC]">Cinematic Precision.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#9496a1] leading-relaxed">
                I specialize in performance-driven short-form editing for founders, personal brands, and high-growth creators. By blending psychological pacing, bespoke After Effects motion design, and immersive sound engineering, I turn ordinary raw footage into magnetic video assets that command attention.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-start gap-2 text-xs text-[#ededf3]">
                  <CheckCircle2 size={15} className="text-[#1591DC] shrink-0 mt-0.5" />
                  <span>800+ Reels delivered for creators</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#ededf3]">
                  <CheckCircle2 size={15} className="text-[#1591DC] shrink-0 mt-0.5" />
                  <span>Neuro-Pacing to eliminate dead air</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#ededf3]">
                  <CheckCircle2 size={15} className="text-[#1591DC] shrink-0 mt-0.5" />
                  <span>Rec.709 studio color calibration</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#ededf3]">
                  <CheckCircle2 size={15} className="text-[#1591DC] shrink-0 mt-0.5" />
                  <span>Frame.io collaborative workflow</span>
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

        {/* 3. KULDEEP HORIZONTAL SLIDABLE SHOWCASE SECTION */}
        <section id="work" className="space-y-5 pt-2 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-4">
            <div className="space-y-1">
              <span className="kuldeep-badge">Editing Work</span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Explore our video editing work &amp; <span className="font-serif-italic font-bold text-[#1591DC]">projects</span>
              </h2>
            </div>

            {/* Slider Controls & Search */}
            <div className="flex items-center gap-3">
              <div className="bg-[#12141a] border border-white/[0.08] rounded-full px-3.5 py-1.5 flex items-center gap-2.5 w-48 sm:w-60 focus-within:border-[#1591DC]/50 transition-all">
                <Search size={13} className="text-[#9496a1]" />
                <input 
                  type="text" 
                  placeholder="Search videos..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs text-white placeholder:text-[#9496a1]/60 w-full"
                />
              </div>

              <div className="flex items-center gap-1.5">
                <button 
                  onClick={() => scrollSlider('left')}
                  className="w-8 h-8 rounded-full bg-[#12141a] border border-white/[0.08] hover:border-[#1591DC] text-[#ededf3] flex items-center justify-center transition-all cursor-pointer"
                  title="Scroll Left"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={() => scrollSlider('right')}
                  className="w-8 h-8 rounded-full bg-[#12141a] border border-white/[0.08] hover:border-[#1591DC] text-[#ededf3] flex items-center justify-center transition-all cursor-pointer"
                  title="Scroll Right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Slidable Horizontal Video Carousel */}
          <div 
            ref={sliderRef}
            className="video-slider-container no-scrollbar"
          >
            {filteredVideos.map((video, idx) => (
              <div 
                key={video.id + idx}
                className="video-slider-item kuldeep-card aspect-[9/16] relative overflow-hidden group p-1 shrink-0"
              >
                <div className="w-full h-full relative bg-black rounded-[12px] overflow-hidden">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?autoplay=0&loop=0&background=0&title=0&byline=0&portrait=0&color=1591DC`}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title={video.title}
                  />

                  <div className="absolute inset-0 z-30 bg-black/10 group-hover:opacity-0 transition-all duration-300 pointer-events-none" />

                  <div className="absolute top-2.5 left-2.5 z-40">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/80 border border-white/[0.1] text-[9px] font-medium text-white uppercase tracking-wider">
                      {video.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-[#9496a1] pt-1">
            <span>← Scroll horizontally to explore all 10 Reels</span>
            <span className="font-medium text-[#1591DC]">10 Projects Live</span>
          </div>
        </section>

        {/* 4. KULDEEP 3-STEP PROCESS SECTION */}
        <section id="process" className="space-y-6 pt-4 scroll-mt-20">
          <div className="text-center space-y-1.5 max-w-2xl mx-auto">
            <span className="kuldeep-badge">Process</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              How our video editing service <span className="font-serif-italic font-bold text-[#1591DC]">works for you</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
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
                    Submit Request
                  </h3>
                  <p className="text-xs text-[#9496a1] leading-relaxed">
                    Share your raw video needs and project details. Drop A-roll clips into Google Drive or Frame.io to get started.
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-white/[0.06] space-y-1.5 text-xs text-[#9496a1]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                  <span>Hook &amp; Script Notes Alignment</span>
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
                    Video Editing
                  </h3>
                  <p className="text-xs text-[#9496a1] leading-relaxed">
                    Our team edits, cuts dead air, builds bespoke After Effects motion graphics, color grades Rec.709 &amp; layers sound effects.
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-white/[0.06] space-y-1.5 text-xs text-[#ededf3]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                  <span>Neuro-Pacing &amp; Motion Keyframing</span>
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
                    Final Delivery
                  </h3>
                  <p className="text-xs text-[#9496a1] leading-relaxed">
                    Receive the final 4K video with all necessary adjustments, ready for Instagram Reels, TikTok, and YouTube Shorts.
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

        {/* 5. KULDEEP TESTIMONIAL MARQUEE SECTION */}
        <section id="testimonial" className="space-y-6 pt-4 overflow-hidden scroll-mt-20">
          <div className="text-center space-y-1.5 max-w-2xl mx-auto">
            <span className="kuldeep-badge">Testimonial</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              What our premium clients are <span className="font-serif-italic font-bold text-[#1591DC]">saying about us</span>
            </h2>
          </div>

          {/* Marquee Row 1 */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b0c10] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b0c10] to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee gap-4">
              {marqueeReviewsRow1.map((rev, i) => (
                <div 
                  key={`r1-${i}`}
                  className="kuldeep-card w-[340px] p-5 shrink-0 flex flex-col justify-between space-y-3.5 shadow-sm select-none"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={11} fill="currentColor" />
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-[10px] font-semibold text-[#1591DC] uppercase">
                        {rev.metric}
                      </span>
                    </div>

                    <p className="text-xs text-[#ededf3] leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#1591DC]/20 text-[#1591DC] flex items-center justify-center text-xs font-bold">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-white font-medium block leading-none">{rev.name}</span>
                        <span className="text-[11px] text-[#9496a1]">{rev.handle}</span>
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
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b0c10] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b0c10] to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee-reverse gap-4">
              {marqueeReviewsRow2.map((rev, i) => (
                <div 
                  key={`r2-${i}`}
                  className="kuldeep-card w-[340px] p-5 shrink-0 flex flex-col justify-between space-y-3.5 shadow-sm select-none"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={11} fill="currentColor" />
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] font-semibold text-[#9496a1] uppercase">
                        {rev.tag}
                      </span>
                    </div>

                    <p className="text-xs text-[#ededf3] leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-white font-medium block leading-none">{rev.name}</span>
                        <span className="text-[11px] text-[#9496a1]">{rev.handle}</span>
                      </div>
                    </div>

                    <span className="text-[10px] text-[#1591DC] font-medium flex items-center gap-1">
                      <CheckCircle2 size={11} /> CLIENT
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. EDITING SERVICES & SYSTEM PILLARS */}
        <section id="services" className="space-y-6 pt-4 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div className="space-y-1">
              <span className="kuldeep-badge">Services</span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Core Editing <span className="font-serif-italic font-bold text-[#1591DC]">Capabilities</span>
              </h2>
            </div>
            <span className="text-xs text-[#9496a1] uppercase font-medium">04 CORE PILLARS</span>
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

        {/* 7. KULDEEP DIRECT INTAKE FORM (SUBMITS DIRECTLY TO GMAIL) */}
        <section id="contact" className="space-y-6 pt-4 max-w-2xl mx-auto scroll-mt-20">
          <div className="text-center space-y-1.5">
            <span className="kuldeep-badge">Contact</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Contact us for amazing <span className="font-serif-italic font-bold text-[#1591DC]">video editing projects</span>
            </h2>
            <p className="text-xs text-[#9496a1]">
              Inquiries are delivered directly to <span className="text-[#1591DC] font-medium">thomasnguyen.editor@gmail.com</span>
            </p>
          </div>

          <div className="kuldeep-card p-7 sm:p-9 space-y-5 border border-white/[0.08]">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#ededf3] block">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0b0c10] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-[#9496a1]/60 focus:outline-none focus:border-[#1591DC] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#ededf3] block">Email</label>
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
                <label className="text-xs font-medium text-[#ededf3] block">What Kind of Video Do You Need?</label>
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
                <label className="text-xs font-medium text-[#ededf3] block">What’s Your Budget Range?</label>
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
                <label className="text-xs font-medium text-[#ededf3] block">Share Your Vision</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about your content, goals, reference links or vision..."
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
                    <span>Submit Project Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* 8. KULDEEP FAQ SECTION */}
        <section id="faq" className="space-y-6 pt-4 scroll-mt-20">
          <div className="text-center space-y-1.5 max-w-2xl mx-auto">
            <span className="kuldeep-badge">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Frequently asked questions <span className="font-serif-italic font-bold text-[#1591DC]">about us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
            
            {/* Book an appointment side card */}
            <div className="kuldeep-card p-7 space-y-4 lg:col-span-1">
              <div className="w-9 h-9 rounded-full bg-[#1591DC]/15 text-[#1591DC] flex items-center justify-center">
                <Calendar size={17} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold text-white leading-tight">
                  Have a question? <br />
                  <span className="font-serif-italic font-bold text-[#1591DC]">Let’s discuss it now!</span>
                </h3>
                <p className="text-xs text-[#9496a1] leading-relaxed">
                  Book a quick 15-minute alignment call directly on our calendar.
                </p>
              </div>
              <button 
                onClick={handleCalendlyRedirect}
                className="w-full py-2.5 btn-primary-kuldeep text-xs tracking-tight font-semibold cursor-pointer"
              >
                Book an appointment
              </button>
            </div>

            {/* Accordion Questions */}
            <div className="space-y-2.5 lg:col-span-2">
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

      {/* MINIMAL CLEAN FOOTER */}
      <footer className="border-t border-white/[0.06] bg-[#0b0c10] py-8 px-6 md:px-12 relative z-20">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9496a1]">
            &copy; 2026 Thomas Nguyen. All rights reserved.
          </p>

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
