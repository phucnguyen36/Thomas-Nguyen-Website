import React, { useState } from 'react';
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
  Twitter
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 10 Vimeo Short-Form Videos Showcase
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

  // 4 Pillars of Strategy
  const pillars = [
    { title: "Neuro-Pacing", description: "Editing techniques engineered to eliminate dead air and maintain continuous viewer attention.", icon: Zap },
    { title: "Bespoke Animation", description: "Hand-crafted After Effects keyframes that elevate brand authority above template noise.", icon: Layers },
    { title: "Visual Strategy", description: "Curated B-roll and visual assets replacing stock footage with high-converting imagery.", icon: Sparkles },
    { title: "Sound Architecture", description: "Multi-layered SFX design engineered to anchor subconscious engagement.", icon: Music }
  ];

  return (
    <div className="min-h-screen spatial-bg text-white font-haas relative overflow-x-hidden selection:bg-blue-600/30 selection:text-white">
      
      {/* Film Grain Noise & Ambient Edit Blur Elements */}
      <div className="noise-overlay"></div>
      <div className="fixed inset-0 bg-black/75 backdrop-blur-[2px] pointer-events-none z-0"></div>

      <div className="bg-edit-blur-1 top-10 left-1/3"></div>
      <div className="bg-edit-blur-2 top-1/2 -right-20"></div>
      <div className="bg-edit-blur-1 bottom-20 left-10"></div>

      {/* TOP APEX-STYLE NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-zinc-800 px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[6px] bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)] flex items-center justify-center font-extrabold text-white text-sm tracking-tighter">
            T
          </div>
          <span className="font-extrabold text-sm md:text-base tracking-tight text-white font-haas uppercase">
            THOMAS NGUYEN
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold text-zinc-300 uppercase tracking-wider font-sans">
          <a href="#hero" className="hover:text-blue-400 transition-colors">Intro</a>
          <a href="#mastery" className="hover:text-blue-400 transition-colors">Short-Form Work</a>
          <a href="#comparison" className="hover:text-blue-400 transition-colors">Comparison</a>
          <a href="#system" className="hover:text-blue-400 transition-colors">The System</a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="https://www.instagram.com/thomasvisualeditor/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden sm:flex px-3.5 py-1.5 rounded-[6px] bg-zinc-900 border border-zinc-700 text-xs text-zinc-200 hover:text-white items-center gap-2 transition-all"
          >
            <Instagram size={14} className="text-blue-400" />
            <span>@thomasvisualeditor</span>
          </a>

          <button 
            onClick={() => window.open('https://calendly.com/thomasvisualeditor/30min', '_blank')}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-[6px] transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
          >
            BOOK CALL
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 space-y-20 pb-20">
        
        {/* 1. HERO SECTION */}
        <section id="hero" className="pt-12 md:pt-20 px-6 md:px-12 max-w-5xl mx-auto space-y-10 text-center">
          
          {/* Main Title & Subtitle */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white uppercase leading-[1.08]">
              Retain Viewer Attention From <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">The Very First Frame</span>
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              High-impact short-form video editing and visual strategy for personal brands, founders, and content creators.
            </p>
          </div>

          {/* Official Creator Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-700 backdrop-blur-md shadow-lg">
            <img 
              src="/thomas_portrait.jpg" 
              alt="Thomas Nguyen" 
              className="w-8 h-8 rounded-full object-cover grayscale"
            />
            <div className="text-left text-xs font-mono">
              <span className="text-white font-bold block leading-tight">Thomas Nguyen</span>
              <a 
                href="https://thomasvisual.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline text-[11px] block leading-tight"
              >
                thomasvisual.vercel.app
              </a>
            </div>
          </div>

          {/* HIGH-IMPACT KEY METRICS STRIP */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-2">
            
            <div className="spatial-card p-5 text-center space-y-1 border border-blue-500/20 bg-blue-950/10">
              <div className="w-8 h-8 rounded-[4px] bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-2">
                <Video size={18} />
              </div>
              <h3 className="text-3xl font-extrabold text-white tracking-tighter">600+</h3>
              <p className="text-[11px] font-mono text-zinc-300 uppercase">Reels Delivered</p>
            </div>

            <div className="spatial-card p-5 text-center space-y-1 border border-blue-500/20 bg-blue-950/10">
              <div className="w-8 h-8 rounded-[4px] bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-2">
                <BarChart3 size={18} />
              </div>
              <h3 className="text-3xl font-extrabold text-white tracking-tighter">85%+</h3>
              <p className="text-[11px] font-mono text-zinc-300 uppercase">First 5S Retention</p>
            </div>

            <div className="spatial-card p-5 text-center space-y-1 border border-blue-500/20 bg-blue-950/10">
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
              onClick={() => window.open('https://calendly.com/thomasvisualeditor/30min', '_blank')}
              className="px-9 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-[6px] transition-all inline-flex items-center gap-3 shadow-[0_0_30px_rgba(37,99,235,0.4)] cursor-pointer"
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

        {/* 2. SHORT-FORM MASTERY SHOWCASE */}
        <section id="mastery" className="px-6 md:px-12 max-w-[1750px] mx-auto space-y-6 pt-6">
          
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

          {/* 5-Column Compact Video Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredVideos.map((video, idx) => (
              <div 
                key={video.id + idx}
                className="spatial-card aspect-[9/16] relative overflow-hidden group border border-zinc-800 p-1"
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

                  {/* Overlay */}
                  <div className="absolute inset-0 z-30 bg-black/20 backdrop-blur-[1px] group-hover:opacity-0 transition-all duration-300 pointer-events-none" />

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

        {/* 3. COMPARISON MODULE */}
        <section id="comparison" className="px-6 md:px-12 max-w-[1750px] mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800 pb-3">
            <div>
              <span className="text-[11px] text-zinc-400 font-mono uppercase tracking-widest block">
                EDITING DIFFERENCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-0.5">
                Standard Editing vs Professional Editing
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

            <div className="spatial-card p-6 border border-blue-500/30 space-y-4 bg-blue-950/10">
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

        {/* 4. THE SYSTEM */}
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

        {/* 5. RETENTION AUDIT SECTION */}
        <section id="audit" className="px-6 md:px-12 max-w-4xl mx-auto text-center space-y-5 py-6">
          <div className="spatial-card p-8 sm:p-10 border border-blue-500/30 space-y-5 bg-blue-950/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-blue-600/20 border border-blue-500/40 text-xs font-mono uppercase tracking-widest text-blue-300">
              <ShieldCheck size={15} />
              <span>RETENTION AUDIT</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              30-Second Retention Audit
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-lg mx-auto">
              Send over a raw video file or draft. I will deliver a complimentary 30-second re-edit demonstrating optimized pacing, visual hooks, and sound design.
            </p>

            <div>
              <button 
                onClick={() => window.open('https://www.instagram.com/thomasvisualeditor/', '_blank')}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-[6px] transition-all inline-flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(37,99,235,0.4)]"
              >
                <span>REQUEST 30S AUDIT</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* 6. FAQS SECTION */}
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
