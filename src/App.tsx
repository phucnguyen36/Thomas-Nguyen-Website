import React, { useState, useEffect } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  Home, 
  Plus, 
  Heart, 
  User, 
  ArrowUpRight, 
  Zap, 
  Layers, 
  Sparkles, 
  Music, 
  ShieldCheck, 
  Minus, 
  ExternalLink,
  Instagram,
  CheckCircle2,
  XCircle,
  TrendingUp,
  ArrowRight,
  Video,
  Award,
  BarChart3,
  Mail,
  Linkedin,
  Facebook,
  Twitter,
  Play,
  Pause,
  Volume2,
  Check,
  X,
  MessageSquare,
  Clock,
  Sparkle,
  Sliders,
  Send,
  Flame,
  MousePointerClick,
  Star,
  Quote,
  Activity,
  Headphones,
  SlidersTrack
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Interactive ROI Calculator State
  const [monthlyViews, setMonthlyViews] = useState(100000);
  const [currentRetention, setCurrentRetention] = useState(40);

  // Simulated Pacing Tab
  const [pacingMode, setPacingMode] = useState<'standard' | 'pro'>('pro');

  // Interactive Sound Layer Equalizer State
  const [activeSoundLayer, setActiveSoundLayer] = useState<'all' | 'risers' | 'swishes' | 'clicks' | 'ambience'>('all');
  const [isPlayingSFX, setIsPlayingSFX] = useState(true);

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
      "🔥 Client doubled retention from 34% to 84% with Neuro-Pacing",
      "🎬 10 Reels batch exported in Rec.709 Standard for Kaleemix",
      "📈 New strategy call scheduled with Raul Ocana from Spain",
      "🚀 Editoz Club scaled organic reach by 3.8x this month"
    ];

    const timer = setTimeout(() => {
      setToastMessage(notifications[Math.floor(Math.random() * notifications.length)]);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Calculated ROI Metrics
  const projectedRetention = Math.min(88, currentRetention + 35);
  const extraViews = Math.round(monthlyViews * ((projectedRetention - currentRetention) / 100) * 1.8);
  const extraLeads = Math.round(extraViews * 0.004);

  // 10 Short-Form Videos Showcase
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

  // 100% ENGLISH VERIFIED CLIENT REVIEWS FOR MARQUEE
  const clientReviews = [
    {
      name: "Hoang Phuc",
      handle: "@hoangphuc_creator",
      metric: "84% 5S Retention",
      comment: "First 5-second viewer retention jumped from 34% to 84% within 2 weeks of applying Neuro-Pacing. Organic follower growth tripled!",
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

  // Duplicate lists for continuous infinite loop marquee stream
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
    <div className="min-h-screen bg-black text-white font-haas relative overflow-x-hidden selection:bg-blue-600/30 selection:text-white">
      
      {/* Film Grain Noise & Subtle Ambient Edit Blur Elements */}
      <div className="noise-overlay"></div>

      <div className="bg-edit-blur-1 top-10 left-1/3"></div>
      <div className="bg-edit-blur-2 top-1/2 -right-20"></div>

      {/* LIVE FLOATING TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all">
          <div className="bg-zinc-900/95 border border-blue-500/40 px-4 py-3 rounded-lg shadow-2xl backdrop-blur-md flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping"></span>
            <p className="text-xs font-mono text-zinc-200">{toastMessage}</p>
            <button onClick={() => setShowToast(false)} className="text-zinc-500 hover:text-white ml-2">
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* TOP APEX-STYLE NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-zinc-800 px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[6px] bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)] flex items-center justify-center font-extrabold text-white text-sm tracking-tighter">
            T
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm md:text-base tracking-tight text-white font-haas uppercase">
              THOMAS NGUYEN
            </span>
            <span className="text-[9px] font-mono text-blue-400 font-semibold uppercase tracking-widest hidden sm:block">
              VISUAL RETENTION STUDIO
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-zinc-300 uppercase tracking-wider font-sans">
          <a href="#hero" className="hover:text-blue-400 transition-colors">Intro</a>
          <a href="#calculator" className="hover:text-blue-400 transition-colors">ROI Calculator</a>
          <a href="#pacing-simulator" className="hover:text-blue-400 transition-colors">Pacing Graphic</a>
          <a href="#audio-graphics" className="hover:text-blue-400 transition-colors">SFX Equalizer</a>
          <a href="#mastery" className="hover:text-blue-400 transition-colors">Short-Form Work</a>
          <a href="#reviews" className="hover:text-blue-400 transition-colors">Client Reviews</a>
          <a href="#comparison" className="hover:text-blue-400 transition-colors">Comparison</a>
          <a href="#system" className="hover:text-blue-400 transition-colors">System</a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleCalendlyRedirect}
            className="hidden sm:flex px-3.5 py-1.5 rounded-[6px] bg-zinc-900 border border-zinc-700 text-xs text-zinc-300 hover:text-white items-center gap-2 transition-all cursor-pointer"
          >
            <Instagram size={14} className="text-blue-400" />
            <span>@thomasvisualeditor</span>
          </button>

          <button 
            onClick={handleCalendlyRedirect}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-[6px] transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer flex items-center gap-2"
          >
            <Sparkles size={13} />
            <span>BOOK STRATEGY CALL</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 space-y-24 pb-24">
        
        {/* 1. HERO SECTION */}
        <section id="hero" className="pt-12 md:pt-20 px-6 md:px-12 max-w-5xl mx-auto space-y-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/15 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Flame size={14} className="text-blue-400 animate-pulse" />
            <span>ATTENTION-ENGINEERED EDITING FOR CREATORS &amp; FOUNDERS</span>
          </div>
          
          {/* Main Title & Subtitle */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[1.08]">
              Retain Viewer Attention From <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">The Very First Frame</span>
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              High-impact short-form video editing and visual retention strategy for personal brands, founders, and content creators. Double viewer retention in 48 hours.
            </p>
          </div>

          {/* Official Creator Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-700 backdrop-blur-md shadow-lg">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-extrabold text-xs">
              TN
            </div>
            <div className="text-left text-xs font-mono">
              <span className="text-white font-bold block leading-tight">Thomas Nguyen</span>
              <a 
                href="https://thomasnguyen.online" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline text-[11px] block leading-tight"
              >
                thomasnguyen.online
              </a>
            </div>
          </div>

          {/* HIGH-IMPACT KEY METRICS STRIP */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-2">
            
            <div className="spatial-card p-5 text-center space-y-1 border border-blue-500/20 bg-blue-950/20">
              <div className="w-8 h-8 rounded-[4px] bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-2">
                <Video size={18} />
              </div>
              <h3 className="text-3xl font-extrabold text-white tracking-tighter">600+</h3>
              <p className="text-[11px] font-mono text-zinc-300 uppercase">Reels Delivered</p>
            </div>

            <div className="spatial-card p-5 text-center space-y-1 border border-blue-500/20 bg-blue-950/20">
              <div className="w-8 h-8 rounded-[4px] bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-2">
                <BarChart3 size={18} />
              </div>
              <h3 className="text-3xl font-extrabold text-white tracking-tighter">85%+</h3>
              <p className="text-[11px] font-mono text-zinc-300 uppercase">First 5S Retention</p>
            </div>

            <div className="spatial-card p-5 text-center space-y-1 border border-blue-500/20 bg-blue-950/20">
              <div className="w-8 h-8 rounded-[4px] bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-2">
                <Award size={18} />
              </div>
              <h3 className="text-3xl font-extrabold text-white tracking-tighter">100%</h3>
              <p className="text-[11px] font-mono text-zinc-300 uppercase">Rec.709 Standard</p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={handleCalendlyRedirect}
              className="px-9 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-[6px] transition-all inline-flex items-center gap-3 shadow-[0_0_30px_rgba(37,99,235,0.4)] cursor-pointer hover:scale-105"
            >
              <span>BOOK STRATEGY CALL</span>
              <ArrowRight size={15} />
            </button>

            <a 
              href="#mastery"
              className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-100 text-xs font-bold uppercase tracking-widest rounded-[6px] transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>EXPLORE SHORT-FORM WORK</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

        </section>

        {/* FEATURE #1: INTERACTIVE RETENTION & REVENUE CALCULATOR */}
        <section id="calculator" className="px-6 md:px-12 max-w-[1750px] mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800 pb-3">
            <div>
              <span className="text-[11px] text-blue-400 font-mono uppercase tracking-widest block">
                INTERACTIVE GRAPHICS &amp; SIMULATOR
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-0.5">
                Calculate Retention &amp; Growth Potential
              </h2>
            </div>
            <span className="text-xs text-zinc-400 font-mono uppercase">REAL-TIME VISUAL SIMULATOR</span>
          </div>

          <div className="spatial-card p-6 sm:p-8 border border-zinc-800 bg-zinc-950/90">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              {/* Sliders Area */}
              <div className="space-y-6 lg:col-span-2">
                
                {/* Slider 1: Monthly Views */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label className="text-zinc-300 uppercase font-bold flex items-center gap-2">
                      <TrendingUp size={14} className="text-blue-400" />
                      Monthly Organic Views:
                    </label>
                    <span className="text-white font-extrabold text-sm px-2.5 py-1 bg-zinc-900 rounded border border-zinc-800">
                      {monthlyViews.toLocaleString()} views/mo
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="1000000" 
                    step="10000"
                    value={monthlyViews}
                    onChange={(e) => setMonthlyViews(Number(e.target.value))}
                    className="w-full accent-blue-600 bg-zinc-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>10k Views</span>
                    <span>500k Views</span>
                    <span>1M+ Views</span>
                  </div>
                </div>

                {/* Slider 2: Current Retention */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label className="text-zinc-300 uppercase font-bold flex items-center gap-2">
                      <BarChart3 size={14} className="text-blue-400" />
                      Current 5-Second Viewer Retention Rate:
                    </label>
                    <span className="text-white font-extrabold text-sm px-2.5 py-1 bg-zinc-900 rounded border border-zinc-800">
                      {currentRetention}% Retention
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="65" 
                    step="1"
                    value={currentRetention}
                    onChange={(e) => setCurrentRetention(Number(e.target.value))}
                    className="w-full accent-blue-600 bg-zinc-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>15% (High Drop-off)</span>
                    <span>40% (Average)</span>
                    <span>65% (Good)</span>
                  </div>
                </div>

              </div>

              {/* Projected Output Display */}
              <div className="spatial-card p-6 border border-blue-500/40 bg-blue-950/30 space-y-4 text-center relative overflow-hidden">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest">
                    PROJECTED RETENTION GAIN
                  </span>
                  <h3 className="text-4xl font-extrabold text-white tracking-tight">
                    {projectedRetention}% <span className="text-xs font-mono text-emerald-400">({`+${projectedRetention - currentRetention}%`})</span>
                  </h3>
                </div>

                <div className="pt-2 border-t border-blue-500/20 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-zinc-300">
                    <span>Extra Monthly Organic Views:</span>
                    <span className="text-white font-bold">+{extraViews.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Estimated Extra Inbound Leads:</span>
                    <span className="text-emerald-400 font-bold">+{extraLeads} Leads/mo</span>
                  </div>
                </div>

                <button 
                  onClick={handleCalendlyRedirect}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-widest rounded transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer mt-2"
                >
                  UNLOCK THIS RETENTION RATE
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* FEATURE #2: INTERACTIVE PACING GRAPHICS & TIMELINE SIMULATOR */}
        <section id="pacing-simulator" className="px-6 md:px-12 max-w-[1750px] mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800 pb-3">
            <div>
              <span className="text-[11px] text-blue-400 font-mono uppercase tracking-widest block">
                INTERACTIVE GRAPHICS // PACING SIMULATOR
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-0.5">
                Why Viewers Scroll Away vs Stay Hooked
              </h2>
            </div>
            
            {/* Toggle Controls */}
            <div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-md border border-zinc-800">
              <button 
                onClick={() => setPacingMode('standard')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold uppercase transition-all cursor-pointer ${pacingMode === 'standard' ? 'bg-zinc-800 text-zinc-300 border border-zinc-700' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                CapCut Standard
              </button>
              <button 
                onClick={() => setPacingMode('pro')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold uppercase transition-all cursor-pointer ${pacingMode === 'pro' ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.5)]' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Pro Neuro-Pacing
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="spatial-card p-6 border border-zinc-800 space-y-4 md:col-span-1">
              <div className="space-y-2">
                <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider inline-block ${pacingMode === 'pro' ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40' : 'bg-red-950/40 text-red-400 border border-red-800/40'}`}>
                  {pacingMode === 'pro' ? 'PRO EDITING MECHANICS' : 'GENERIC CAPCUT EDIT'}
                </span>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  {pacingMode === 'pro' ? 'Continuous Attention Lock' : 'Micro-Pause Attention Leak'}
                </h3>
              </div>

              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                {pacingMode === 'pro' 
                  ? "Every frame has a visual purpose. Transitions land precisely on vocal stress points, supplemented with layered sound effects to keep the brain engaged."
                  : "Silent dead air between phrases allows the viewer's thumb to scroll away. Stock templates feel repetitive and amateurish after 4 seconds."
                }
              </p>

              <div className="space-y-2 pt-2 border-t border-zinc-800 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Dead Air Duration:</span>
                  <span className={pacingMode === 'pro' ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                    {pacingMode === 'pro' ? '0.00 Seconds' : '1.85 Seconds'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Sound Layers:</span>
                  <span className="text-white font-bold">{pacingMode === 'pro' ? '4 Audio Tracks' : '1 Basic Track'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Retention Score:</span>
                  <span className={pacingMode === 'pro' ? 'text-blue-400 font-bold' : 'text-zinc-500 font-bold'}>
                    {pacingMode === 'pro' ? '92 / 100' : '38 / 100'}
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline Simulator Graphic */}
            <div className="spatial-card p-6 border border-zinc-800 space-y-5 md:col-span-2 flex flex-col justify-between bg-zinc-950/90">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                  <Sliders size={14} className="text-blue-400" />
                  TIMELINE PACING WAVEFORM COMPARISON
                </span>
                <span className="text-[10px] font-mono text-zinc-500">SCALE: 0.0s - 15.0s</span>
              </div>

              {/* Waveform Bar Graphic */}
              <div className="space-y-3 py-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                    <span>Visual &amp; Sound Frequency</span>
                    <span className={pacingMode === 'pro' ? 'text-blue-400 font-bold' : 'text-zinc-500'}>
                      {pacingMode === 'pro' ? 'HIGH RETENTION PACING' : 'LOW ATTENTION DENSITY'}
                    </span>
                  </div>

                  <div className="h-24 bg-zinc-900 rounded border border-zinc-800 p-2 flex items-end justify-between gap-1 overflow-hidden relative">
                    {Array.from({ length: 48 }).map((_, i) => {
                      const isHigh = pacingMode === 'pro' 
                        ? (i % 3 === 0 || i % 5 === 0)
                        : (i % 7 === 0);
                      const heightPercent = pacingMode === 'pro'
                        ? (isHigh ? Math.floor(Math.random() * 60) + 40 : Math.floor(Math.random() * 35) + 25)
                        : (isHigh ? Math.floor(Math.random() * 40) + 20 : 10);

                      return (
                        <div 
                          key={i} 
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full rounded-t transition-all duration-300 ${
                            pacingMode === 'pro'
                              ? (isHigh ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-sky-700/60')
                              : (isHigh ? 'bg-zinc-600' : 'bg-zinc-800')
                          }`}
                        />
                      );
                    })}

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent pointer-events-none animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400 pt-2 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className={pacingMode === 'pro' ? 'text-blue-400' : 'text-zinc-600'} />
                  <span>{pacingMode === 'pro' ? 'Zero Dead-Air Micro Cuts' : 'Generic Transition Presets'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className={pacingMode === 'pro' ? 'text-blue-400' : 'text-zinc-600'} />
                  <span>{pacingMode === 'pro' ? 'Bespoke SFX Engineering' : 'Basic Background Music'}</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* FEATURE #3: INTERACTIVE SFX SOUND EQUALIZER GRAPHIC */}
        <section id="audio-graphics" className="px-6 md:px-12 max-w-[1750px] mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800 pb-3">
            <div>
              <span className="text-[11px] text-blue-400 font-mono uppercase tracking-widest block">
                INTERACTIVE GRAPHICS // SOUND ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-0.5">
                Multi-Track SFX Layering Visualizer
              </h2>
            </div>
            <span className="text-xs text-zinc-400 font-mono uppercase">INTERACTIVE AUDIO GRAPHIC</span>
          </div>

          <div className="spatial-card p-6 sm:p-8 border border-zinc-800 bg-zinc-950/90 space-y-6">
            
            {/* Audio Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsPlayingSFX(!isPlayingSFX)}
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-all cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                >
                  {isPlayingSFX ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                </button>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span>SFX FREQUENCY MATRIX</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  </h3>
                  <p className="text-[11px] font-mono text-zinc-400">Click layers below to isolate audio frequencies</p>
                </div>
              </div>

              {/* Sound Layer Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'All 4 Tracks' },
                  { id: 'risers', label: 'Sub-Bass Risers' },
                  { id: 'swishes', label: 'Mechanical Swishes' },
                  { id: 'clicks', label: 'Tactile Clicks' },
                  { id: 'ambience', label: 'Rec.709 Ambience' },
                ].map(layer => (
                  <button
                    key={layer.id}
                    onClick={() => setActiveSoundLayer(layer.id as any)}
                    className={`px-3 py-1.5 rounded text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                      activeSoundLayer === layer.id
                        ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                    }`}
                  >
                    {layer.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Audio Frequency Equalizer Display */}
            <div className="h-28 bg-black/80 rounded-xl border border-zinc-800 p-4 flex items-end justify-between gap-1 overflow-hidden relative">
              {Array.from({ length: 64 }).map((_, i) => {
                const height = isPlayingSFX
                  ? Math.floor(Math.sin(i * 0.3) * 35 + 50) + (i % 4 === 0 ? 15 : 0)
                  : 12;

                return (
                  <div
                    key={i}
                    style={{ height: `${height}%` }}
                    className={`w-full rounded-t transition-all duration-150 ${
                      activeSoundLayer === 'all'
                        ? (i % 2 === 0 ? 'bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]' : 'bg-cyan-400')
                        : activeSoundLayer === 'risers'
                        ? 'bg-purple-500'
                        : activeSoundLayer === 'swishes'
                        ? 'bg-sky-400'
                        : activeSoundLayer === 'clicks'
                        ? 'bg-emerald-400'
                        : 'bg-indigo-400'
                    }`}
                  />
                );
              })}

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </section>

        {/* 3. SHORT-FORM MASTERY SHOWCASE */}
        <section id="mastery" className="px-6 md:px-12 max-w-[1750px] mx-auto space-y-6 pt-2">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 block">PORTFOLIO Showcase</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                SHORT-FORM MASTERY
              </h2>
            </div>

            {/* SEARCH INPUT */}
            <div className="spatial-search-input p-2.5 px-4 flex items-center gap-3 w-full sm:w-80">
              <Search size={15} className="text-zinc-400" />
              <input 
                type="text" 
                placeholder="Search videos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs text-white placeholder:text-zinc-500 w-full"
              />
            </div>
          </div>

          {/* 5-Column Compact Video Grid (Live Full-Color Vimeo Embeds) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredVideos.map((video, idx) => (
              <div 
                key={video.id + idx}
                className="spatial-card aspect-[9/16] relative overflow-hidden group border border-zinc-800 p-1 bg-black"
              >
                <div className="w-full h-full relative bg-black rounded-[4px] overflow-hidden">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?autoplay=0&loop=0&background=0&title=0&byline=0&portrait=0&color=ffffff`}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title={video.title}
                  />

                  {/* Badge */}
                  <div className="absolute top-2 left-2 z-40">
                    <span className="px-2 py-0.5 rounded-[2px] bg-black/90 border border-blue-500/40 text-[9px] font-mono font-bold text-blue-300 uppercase tracking-widest">
                      {video.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 100% ENGLISH VERIFIED CLIENT REVIEWS INFINITE HORIZONTAL MARQUEE */}
        <section id="reviews" className="space-y-6 pt-4 overflow-hidden scroll-mt-24">
          <div className="px-6 md:px-12 max-w-[1750px] mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800 pb-3">
            <div>
              <span className="text-[11px] text-blue-400 font-mono uppercase tracking-widest block">
                VERIFIED CLIENT REVIEWS &amp; TESTIMONIALS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-0.5">
                Trusted By Industry Creators &amp; Agencies
              </h2>
            </div>
            <span className="text-xs text-zinc-400 font-mono uppercase">HOVER TO PAUSE STREAM</span>
          </div>

          {/* Marquee Row 1 (Right to Left Stream) */}
          <div className="relative w-full overflow-hidden py-1">
            
            {/* Fade Gradients at Left/Right Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee gap-5">
              {marqueeReviewsRow1.map((rev, i) => (
                <div 
                  key={`r1-${i}`}
                  className="spatial-card w-[340px] p-5 shrink-0 border border-zinc-800/90 hover:border-blue-500/40 bg-zinc-950/80 flex flex-col justify-between space-y-4 shadow-xl select-none"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={13} fill="currentColor" />
                        ))}
                      </div>
                      <span className="px-2 py-0.5 rounded-[2px] bg-blue-950/60 border border-blue-500/30 text-[9px] font-mono font-bold text-blue-400 uppercase">
                        {rev.metric}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800/70 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-[10px] font-extrabold text-blue-300">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-white font-bold block leading-none">{rev.name}</span>
                        <span className="text-[10px] text-zinc-500">{rev.handle}</span>
                      </div>
                    </div>

                    <span className="text-[9px] text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={11} /> VERIFIED
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Marquee Row 2 (Left to Right / Reverse Stream) */}
          <div className="relative w-full overflow-hidden py-1">
            
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee-reverse gap-5">
              {marqueeReviewsRow2.map((rev, i) => (
                <div 
                  key={`r2-${i}`}
                  className="spatial-card w-[340px] p-5 shrink-0 border border-zinc-800/90 hover:border-blue-500/40 bg-zinc-950/80 flex flex-col justify-between space-y-4 shadow-xl select-none"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={13} fill="currentColor" />
                        ))}
                      </div>
                      <span className="px-2 py-0.5 rounded-[2px] bg-emerald-950/60 border border-emerald-500/30 text-[9px] font-mono font-bold text-emerald-400 uppercase">
                        {rev.tag}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800/70 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-[10px] font-extrabold text-emerald-300">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-white font-bold block leading-none">{rev.name}</span>
                        <span className="text-[10px] text-zinc-500">{rev.handle}</span>
                      </div>
                    </div>

                    <span className="text-[9px] text-blue-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={11} /> CLIENT
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. COMPARISON MODULE */}
        <section id="comparison" className="px-6 md:px-12 max-w-[1750px] mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800 pb-3">
            <div>
              <span className="text-[11px] text-zinc-400 font-mono uppercase tracking-widest block">
                EDITING DIFFERENCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-0.5">
                Standard Assembly vs Performance Editing
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="spatial-card p-6 border border-zinc-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-900 text-zinc-400 rounded-[4px] border border-zinc-800">
                  <XCircle size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">STANDARD CAPCUT EDITOR</h3>
                  <p className="text-[11px] text-zinc-400 font-mono">Basic Assembly &amp; Template Packs</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
                <li className="flex items-start gap-2">
                  <XCircle size={14} className="text-zinc-500 shrink-0 mt-0.5" />
                  <span>Relies on generic template packs and repetitive popups that look amateur.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={14} className="text-zinc-500 shrink-0 mt-0.5" />
                  <span>Leaves dead air &amp; micro-pauses, causing viewers to scroll away in 3 seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={14} className="text-zinc-500 shrink-0 mt-0.5" />
                  <span>Zero visual strategy or hook mechanics — treats your content as basic labor.</span>
                </li>
              </ul>
            </div>

            <div className="spatial-card p-6 border border-blue-500/30 space-y-4 bg-blue-950/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/20 text-blue-400 rounded-[4px] border border-blue-500/30">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">THOMAS NGUYEN (VISUAL PARTNER)</h3>
                  <p className="text-[11px] text-blue-400 font-mono">Bespoke Motion &amp; Visual Strategy</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                  <span>Bespoke After Effects keyframing and custom motion graphics unique to your brand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                  <span>Neuro-Pacing eliminates dead air, guaranteeing 85%+ retention past the first 5 seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                  <span>Curated B-roll &amp; multi-layered sound design engineered to lock in focus.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. THE SYSTEM */}
        <section id="system" className="px-6 md:px-12 max-w-[1750px] mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800 pb-3">
            <div>
              <span className="text-[11px] text-blue-400 font-mono uppercase tracking-widest block">
                SYSTEM METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-0.5">
                THE SYSTEM
              </h2>
            </div>
            <span className="text-xs text-zinc-400 font-mono uppercase">04 CORE PILLARS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="spatial-card p-5 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-[4px] bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <pillar.icon size={16} />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 font-bold">0{idx + 1}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW SECTION */}
        <section id="workflow" className="px-6 md:px-12 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block">
              EFFORTLESS COLLABORATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              From Raw Video To Viral Polish In 3 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="spatial-card p-5 space-y-3 border border-zinc-800 relative overflow-hidden">
              <span className="text-2xl font-extrabold font-mono text-blue-400">01</span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Drop Raw Footage</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Upload raw A-roll clips to a shared Google Drive or Frame.io folder with your talking points or script notes.
              </p>
            </div>

            <div className="spatial-card p-5 space-y-3 border border-blue-500/30 bg-blue-950/20 relative overflow-hidden">
              <span className="text-2xl font-extrabold font-mono text-blue-400">02</span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Visual Magic (48h)</h3>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                We cut dead air, design custom motion graphics, color grade to Rec.709, and layer SFX for maximum retention.
              </p>
            </div>

            <div className="spatial-card p-5 space-y-3 border border-zinc-800 relative overflow-hidden">
              <span className="text-2xl font-extrabold font-mono text-blue-400">03</span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Review &amp; Scale</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Receive 4K exports optimized for Instagram, TikTok, &amp; YouTube Shorts with unlimited minor revisions.
              </p>
            </div>
          </div>
        </section>

        {/* 6. RETENTION AUDIT SECTION */}
        <section id="audit" className="px-6 md:px-12 max-w-4xl mx-auto text-center space-y-5 py-2">
          <div className="spatial-card p-8 sm:p-10 border border-blue-500/30 space-y-5 bg-blue-950/20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-blue-600/20 border border-blue-500/40 text-xs font-mono uppercase tracking-widest text-blue-300">
              <ShieldCheck size={15} />
              <span>ZERO RISK COMPLIMENTARY OFFER</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Test Our Skills: Free 30-Second Retention Audit
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-lg mx-auto">
              Send over one of your raw video clips or past Reels. We will edit the first 30 seconds for free, demonstrating custom pacing, visual hooks, and sound design.
            </p>

            <div>
              <button 
                onClick={handleCalendlyRedirect}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-[6px] transition-all inline-flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:scale-105"
              >
                <span>REQUEST FREE 30S AUDIT NOW</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* 7. FAQS SECTION */}
        <section id="faq" className="px-6 md:px-12 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block">
              FAQS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
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
              <div key={i} className="spatial-card border border-zinc-800 transition-all">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-4 text-left text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <div className="p-1 rounded-[4px] bg-zinc-900 border border-zinc-700 text-zinc-400">
                    {activeFaq === i ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </button>
                {activeFaq === i && (
                  <div className="p-4 pt-0 border-t border-zinc-800 text-xs text-zinc-300 leading-relaxed font-light">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-[#08080a] py-12 px-6 md:px-12 relative z-20">
        <div className="max-w-[1750px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-white">
              THOMAS NGUYEN // SHORT-FORM PORTFOLIO
            </h3>
            <p className="text-xs text-zinc-300 font-mono">
              &copy; 2026 THOMAS NGUYEN. ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono uppercase tracking-wider">
            <a 
              href="https://x.com/thomaseditor_vn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-2 rounded-[6px] bg-zinc-900/90 border border-zinc-700 text-zinc-200 hover:text-white hover:border-blue-500/50 hover:bg-zinc-800 transition-all flex items-center gap-2 font-bold shadow-sm"
            >
              <Twitter size={14} className="text-blue-400" />
              <span>X</span>
            </a>

            <a 
              href="https://www.instagram.com/thomasvisualeditor/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-2 rounded-[6px] bg-zinc-900/90 border border-zinc-700 text-zinc-200 hover:text-white hover:border-blue-500/50 hover:bg-zinc-800 transition-all flex items-center gap-2 font-bold shadow-sm"
            >
              <Instagram size={14} className="text-blue-400" />
              <span>INSTAGRAM</span>
            </a>

            <a 
              href="https://www.facebook.com/profile.php?id=100063990921099" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-2 rounded-[6px] bg-zinc-900/90 border border-zinc-700 text-zinc-200 hover:text-white hover:border-blue-500/50 hover:bg-zinc-800 transition-all flex items-center gap-2 font-bold shadow-sm"
            >
              <Facebook size={14} className="text-blue-400" />
              <span>FACEBOOK</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/phucxuannguyen/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-2 rounded-[6px] bg-zinc-900/90 border border-zinc-700 text-zinc-200 hover:text-white hover:border-blue-500/50 hover:bg-zinc-800 transition-all flex items-center gap-2 font-bold shadow-sm"
            >
              <Linkedin size={14} className="text-blue-400" />
              <span>LINKEDIN</span>
            </a>

            <a 
              href="mailto:thomasnguyen.editor@gmail.com" 
              className="px-3.5 py-2 rounded-[6px] bg-zinc-900/90 border border-zinc-700 text-zinc-200 hover:text-white hover:border-blue-500/50 hover:bg-zinc-800 transition-all flex items-center gap-2 font-bold shadow-sm"
            >
              <Mail size={14} className="text-blue-400" />
              <span>EMAIL</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
