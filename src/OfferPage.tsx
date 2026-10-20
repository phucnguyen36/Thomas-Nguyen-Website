import BookingCalendar from './BookingCalendar';
import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Star,
  Gift,
  Sparkles,
  Instagram,
  Mail,
  Linkedin,
  Zap,
  ChevronDown,
  X,
  FileVideo,
  Layers,
  TrendingUp,
  Video
} from 'lucide-react';

export default function OfferPage() {
  const calendlyBookingUrl = "https://calendly.com/thomasvisualeditor/30min";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToCalendar = () => {
    const el = document.getElementById('offer-booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(calendlyBookingUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const valueStackItems = [
    {
      badge: "CORE PILLAR 01",
      isCore: true,
      title: "4x Master YouTube Long-Form Videos",
      subtitle: "10 to 20 minutes finished duration · 1 per week",
      description:
        "Story-driven pacing engineered to retain viewers past the critical 3-minute drop-off. Zero dead air, zero filler breaths, and zero generic presets.",
      bullets: [
        "1 master long-form episode delivered every week",
        "Narrative arc & visual metaphors that cement deep authority",
        "Custom After Effects motion graphics, lower thirds & Rec.709 studio color calibration",
        "Multitrack commercial audio mixing, dialogue leveling & sound design"
      ]
    },
    {
      badge: "FREE BONUS 01",
      isCore: false,
      title: "12x Viral Vertical Short-Form Cuts",
      subtitle: "3 clips per week for Instagram Reels, TikTok & Shorts",
      description:
        "We extract the highest-impact moments from your weekly long-form recording and turn them into native 9:16 vertical retention machines without you having to record extra footage.",
      bullets: [
        "3 high-retention vertical clips delivered every single week",
        "Kinetic animated typography, visual pattern interrupts & micro-sound effects",
        "Calibrated specifically for Instagram Reels, TikTok, and YouTube Shorts algorithms",
        "Keeps your brand omnipresent daily while you only record once a week"
      ]
    },
    {
      badge: "FREE BONUS 02",
      isCore: false,
      title: "4x High-CTR Mobile-Engineered Thumbnails",
      subtitle: "1 custom thumbnail per YouTube episode",
      description:
        "A masterclass video means nothing if viewers do not click. You receive bold, high-contrast packaging engineered specifically for mobile feed readability.",
      bullets: [
        "High-contrast color grading & clean focal points optimized for small mobile screens",
        "2 headline & thumbnail angle concepts per video for A/B click testing",
        "Designed in lockstep with your video hook for maximum click-to-watch continuity"
      ]
    },
    {
      badge: "FREE BONUS 03",
      isCore: false,
      title: "Pre-Shoot Hook & Retention Script Audit",
      subtitle: "Weekly feedback before you hit record",
      description:
        "Send your rough outline or script bullet points before filming. Thomas reviews and sharpens your first 30 seconds so viewers do not click away early.",
      bullets: [
        "Direct feedback on your opening 3-second visual and verbal hook",
        "Eliminates weak intros before post-production to maximize first 30-second retention",
        "Saves hours of re-shooting and editing revisions"
      ]
    },
    {
      badge: "FREE BONUS 04",
      isCore: false,
      title: "Dedicated Frame.io VIP Suite & Unlimited Revisions",
      subtitle: "Frame-accurate collaborative review environment",
      description:
        "No messy email threads or lost Google Drive links. Drop your raw footage into our shared cloud and leave frame-accurate timestamp notes directly on the video player.",
      bullets: [
        "Frame-accurate visual commenting directly on the video timeline",
        "Unlimited revisions until you are 100% satisfied with the final master",
        "Direct Slack or WhatsApp communication for rapid day-to-day coordination"
      ]
    }
  ];

  const comparisonRows = [
    {
      metric: "Weekly Time Commitment",
      traditional: "15 to 25 hours editing, cutting pauses, and hunting B-roll",
      engine: "45 minutes recording once a week. Zero editing software touched."
    },
    {
      metric: "Team & Management",
      traditional: "Juggling 3 separate freelancers (editor, thumbnail artist, script coach)",
      engine: "1 senior dedicated visual strategist handling the entire pipeline"
    },
    {
      metric: "Delivery Consistency",
      traditional: "Unpredictable delivery, missed upload days, and excuse loops",
      engine: "Strict 48-hour draft delivery guarantee on every single video"
    },
    {
      metric: "Editorial Quality",
      traditional: "Generic CapCut template presets and cheesy sound effects",
      engine: "Custom After Effects motion, cinematic sound design & Rec.709 color"
    },
    {
      metric: "Monthly Cost",
      traditional: "$4,500+ across multiple freelancers with zero accountability",
      engine: "$2,500/month all-in. No long-term lock-in, cancel anytime."
    }
  ];

  const faqs = [
    {
      q: "How much of my personal time is actually required?",
      a: "Just 45 minutes once a week. You sit in front of the camera, record your core thoughts using our pre-shoot hook notes, and drop the raw files into our shared drive. From that moment on, we take over full post-production, motion graphics, audio mix, thumbnail design, and vertical repurposing."
    },
    {
      q: "How does the 48-Hour On-Time Delivery Guarantee work?",
      a: "We agree on an upload schedule during onboarding. For every video scheduled, you receive your first review draft within 48 hours of footage handoff. If we deliver a draft late without prior notice, that video is 100% free (we refund the video's prorated value immediately). That is how confident we are in our operational rhythm."
    },
    {
      q: "Why do you strictly limit onboarding to 1 new client per month?",
      a: "Unlike volume video agencies that sign 20 clients and hand off your raw files to low-cost junior subcontractors overseas, Thomas personally edits and directs every single frame of your 4 YouTube videos and 12 Reels. To protect uncompromising craft, senior attention, and 48-hour turnarounds, we only accept 1 new retainer partner per month."
    },
    {
      q: "Is there any long-term contract or commitment?",
      a: "No. The 30-Day Content Engine is a month-to-month retainer partnership. You can pause or cancel at any time with a simple 14-day notice before your next billing cycle. We believe in earning your business every single month through measurable retention and inbound leads."
    },
    {
      q: "What if I need adjustments or revisions on a video?",
      a: "You get unlimited revisions inside your dedicated Frame.io workspace. You can click anywhere on the video timeline to leave frame-accurate notes, and we implement the tweaks rapidly until you are 100% satisfied with the final master."
    },
    {
      q: "How do we get started?",
      a: "Book a quick 15-minute intro call below. We will review your current channel, discuss your target audience, and determine whether the 30-Day Content Engine is the right fit for your business."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f1f2f6] relative selection:bg-[#1591DC]/30 selection:text-white">
      {/* Subtle Atmospheric Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[460px] bg-gradient-to-b from-[#1591DC]/12 via-[#1591DC]/4 to-transparent blur-[140px]" />
      </div>

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-[#07080b]/85 backdrop-blur-md border-b border-white/[0.06] px-4 sm:px-8 md:px-12 py-3.5 flex justify-between items-center max-w-[1200px] mx-auto gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8e909a] hover:text-white transition-colors pr-2 sm:pr-3 border-r border-white/10 shrink-0"
            title="Return to Main Portfolio"
          >
            <ArrowLeft size={13} />
            <span className="hidden sm:inline">Portfolio</span>
          </a>

          <a href="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
            <img
              src="/thomas_portrait.jpg"
              alt="Thomas Nguyen"
              className="w-7 h-7 rounded-full object-cover border border-white/20 group-hover:border-[#1591DC] transition-colors shrink-0"
            />
            <div className="flex flex-col text-left min-w-0">
              <span className="font-semibold text-xs sm:text-sm text-white leading-none whitespace-nowrap">
                Thomas Nguyen
              </span>
              <span className="text-[10px] text-[#8e909a] mt-0.5 whitespace-nowrap">
                Private Retainer Offer
              </span>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-2 text-xs text-[#8e909a] pr-2">
            <span className="w-2 h-2 rounded-full bg-[#60b6ee] animate-pulse" />
            <span>1 Retainer Slot Open</span>
          </div>

          <button
            onClick={scrollToCalendar}
            className="px-4 py-2 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 shadow-[0_2px_12px_rgba(21,145,220,0.35)] whitespace-nowrap cursor-pointer hover:-translate-y-0.5"
          >
            <span className="sm:hidden">Book Call</span>
            <span className="hidden sm:inline">Book 15 Min Call</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 space-y-24 md:space-y-32 pb-24 max-w-[1040px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION — THE M.A.G.I.C GRAND SLAM HOOK                           */}
        {/* ========================================================================= */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          
          {/* Scarcity & Target Audience Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12141a] border border-white/[0.1] text-xs text-[#d4d6e0]">
            <span className="w-2 h-2 rounded-full bg-[#60b6ee] animate-pulse" />
            <span>
              Engineered for <strong className="text-white font-medium">B2B Founders &amp; Executive Coaches</strong> (1 Spot Open This Month)
            </span>
          </div>

          {/* Master Display Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.14] max-w-3xl mx-auto">
            The 30-Day{" "}
            <span className="text-[#1591DC]">Content Engine.</span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#9da0af] leading-relaxed max-w-2xl mx-auto font-normal">
            You film once a week for 45 minutes. We engineer your raw footage into{" "}
            <strong className="text-white font-medium">4 master YouTube episodes</strong>,{" "}
            <strong className="text-white font-medium">12 viral vertical clips</strong>, and{" "}
            <strong className="text-white font-medium">4 clickable thumbnails</strong>, delivered like clockwork.
          </p>

          {/* 3-Column Glass Metric Summary Bar */}
          <div className="relative pt-4 max-w-3xl mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[620px] h-[110px] bg-[#1591DC]/14 blur-[65px] rounded-full pointer-events-none -z-10" />

            <div className="relative rounded-2xl bg-[#0b0d13]/85 border border-white/[0.1] backdrop-blur-md overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#60b6ee]/55 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] py-5 md:py-6 px-3 sm:px-4">
                <div className="py-2.5 md:py-0 px-2 sm:px-3 text-center flex flex-col items-center justify-center">
                  <div className="text-[10px] uppercase tracking-wider text-[#8e909a] font-semibold">
                    YOUR TIME INPUT
                  </div>
                  <div className="text-2xl lg:text-[26px] font-semibold text-white tracking-tight mt-1.5 whitespace-nowrap leading-none">
                    45 Mins <span className="text-sm lg:text-base font-medium text-[#60b6ee]">weekly</span>
                  </div>
                  <div className="text-[11px] text-[#9496a1] mt-1.5">
                    Just record &amp; drop files in Drive
                  </div>
                </div>

                <div className="py-2.5 md:py-0 px-2 sm:px-3 text-center flex flex-col items-center justify-center">
                  <div className="text-[10px] uppercase tracking-wider text-[#8e909a] font-semibold">
                    MONTHLY OUTPUT
                  </div>
                  <div className="text-2xl lg:text-[26px] font-semibold text-white tracking-tight mt-1.5 whitespace-nowrap leading-none">
                    16 Videos <span className="text-sm lg:text-base font-medium text-[#60b6ee]">+ 4 Thumbs</span>
                  </div>
                  <div className="text-[11px] text-[#9496a1] mt-1.5">
                    4 YouTube Long-Form + 12 Reels
                  </div>
                </div>

                <div className="py-2.5 md:py-0 px-2 sm:px-3 text-center flex flex-col items-center justify-center">
                  <div className="text-[10px] uppercase tracking-wider text-[#8e909a] font-semibold">
                    DRAFT TURNAROUND
                  </div>
                  <div className="text-2xl lg:text-[26px] font-semibold text-white tracking-tight mt-1.5 whitespace-nowrap leading-none">
                    48 Hours <span className="text-sm lg:text-base font-medium text-[#60b6ee]">Guaranteed</span>
                  </div>
                  <div className="text-[11px] text-[#9496a1] mt-1.5">
                    100% refund on any late delivery
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={scrollToCalendar}
              className="w-full sm:w-auto px-8 py-4 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-sm font-semibold rounded-full tracking-tight inline-flex items-center justify-center gap-2 shadow-[0_6px_28px_rgba(21,145,220,0.4)] hover:shadow-[0_8px_36px_rgba(21,145,220,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Claim This Month's Retainer Slot</span>
              <ArrowRight size={15} />
            </button>

            <a
              href="/#work"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs sm:text-sm font-medium text-[#d4d6e0] hover:text-white transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Watch Video Portfolio First</span>
              <ArrowUpRight size={14} className="text-[#60b6ee]" />
            </a>
          </div>

          {/* Social Proof Line */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#8e909a]">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={12} fill="currentColor" />
              ))}
            </div>
            <span>
              <strong className="text-white font-semibold">4.9 out of 5.0</strong> from 20+ Founders &amp; Creators
            </span>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 2. THE PROBLEM & SOLUTION COMPARISON (THE OLD WAY VS THE 30-DAY ENGINE)   */}
        {/* ========================================================================= */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-xs font-semibold uppercase tracking-wider text-[#60b6ee]">
              The Retention Paradox
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal sm:font-medium tracking-tight text-white">
              Why Most Founders Burn Out on <span className="text-[#1591DC]">Video Content.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              Hiring random freelance editors on marketplaces wastes your weekends in endless revision loops.
            </p>
          </div>

          {/* Side-by-Side Comparison Table */}
          <div className="rounded-2xl bg-[#0b0c10] border border-white/[0.08] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
              
              {/* THE OLD WAY */}
              <div className="p-6 sm:p-8 space-y-5 bg-[#090a0f]/60">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-semibold uppercase tracking-wider">
                    The Freelancer Rollercoaster
                  </span>
                  <X size={16} className="text-rose-400/80" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                    Disjointed Freelancers &amp; Inconsistent Edits
                  </h3>
                  <p className="text-xs text-[#8e909a] leading-relaxed">
                    You juggle three different people who don't understand your business tone, miss upload deadlines, and force you to rewrite scripts.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs text-[#9da0af]">
                  {comparisonRows.map((row, idx) => (
                    <div key={idx} className="border-t border-white/[0.04] pt-2.5">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-[#8e909a]/70">
                        {row.metric}
                      </div>
                      <div className="text-rose-300/80 mt-0.5 leading-snug">
                        {row.traditional}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* THE 30-DAY ENGINE */}
              <div className="p-6 sm:p-8 space-y-5 bg-[#090d15] relative ring-1 ring-[#1591DC]/30">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/40 text-[#60b6ee] text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={11} />
                    <span>The 30-Day Content Engine</span>
                  </span>
                  <CheckCircle2 size={16} className="text-[#60b6ee]" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                    One Unified Senior Retention Partner
                  </h3>
                  <p className="text-xs text-[#8e909a] leading-relaxed">
                    You film 45 minutes once a week. Thomas handles the narrative cuts, visual pacing, sound design, thumbnail CTR, and 48-hour delivery.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs text-[#d4d6e0]">
                  {comparisonRows.map((row, idx) => (
                    <div key={idx} className="border-t border-white/[0.06] pt-2.5">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-[#60b6ee]">
                        {row.metric}
                      </div>
                      <div className="text-white font-medium mt-0.5 leading-snug">
                        {row.engine}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. THE HORMOZI VALUE STACK ($4,500 REAL VALUE -> $2,500/MO)              */}
        {/* ========================================================================= */}
        <section className="space-y-8 max-w-4xl mx-auto">
          
          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-xs font-semibold uppercase tracking-wider text-[#60b6ee]">
              <Sparkles size={12} />
              <span>Complete Itemized Breakdown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal sm:font-medium tracking-tight text-white">
              Everything Included in Your <span className="text-[#1591DC]">30-Day Engine.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              A complete done-for-you production workflow with zero software to open and zero management overhead.
            </p>
          </div>

          {/* Main Value Stack Container */}
          <div className="rounded-3xl bg-[#0b0c10] border border-[#1591DC]/40 shadow-[0_0_50px_rgba(21,145,220,0.14)] overflow-hidden">
            
            {/* Header Banner inside Offer Card */}
            <div className="bg-gradient-to-r from-[#1591DC]/20 via-[#1591DC]/10 to-transparent border-b border-white/[0.08] px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1591DC] text-white text-[10px] font-semibold uppercase tracking-wider">
                  FLAGSHIP RETAINER
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">
                  30-Day Audience Retention &amp; Organic Growth System
                </span>
              </div>
              <span className="text-xs font-medium text-[#60b6ee]">
                16 Total Videos + 4 Thumbnails Monthly
              </span>
            </div>

            {/* Stacked Items List */}
            <div className="divide-y divide-white/[0.07] px-6 sm:px-8">
              {valueStackItems.map((item, idx) => (
                <div key={idx} className="py-6 sm:py-7 flex flex-col md:flex-row md:items-start justify-between gap-5">
                  <div className="space-y-2.5 max-w-2xl text-left flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                          item.isCore
                            ? 'bg-white/10 text-white border border-white/20'
                            : 'bg-[#1591DC]/15 text-[#60b6ee] border border-[#1591DC]/35 flex items-center gap-1'
                        }`}
                      >
                        {!item.isCore && <Gift size={10} />}
                        {item.badge}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                        {item.title}
                      </h3>
                      <div className="text-xs text-[#60b6ee] font-medium">
                        {item.subtitle}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#9496a1] leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-[#d4d6e0]">
                          <Check size={14} className="text-[#1591DC] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Included Status Pill (replacing standalone price column) */}
                  <div className="shrink-0 pt-1 md:pt-0">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium ${
                        item.isCore
                          ? 'bg-white/[0.04] border border-white/[0.1] text-white'
                          : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                      }`}
                    >
                      <Check size={12} className={item.isCore ? "text-[#1591DC] stroke-[2.5]" : "text-emerald-400 stroke-[2.5]"} />
                      <span>{item.isCore ? "Core Deliverable" : "Included Bonus"}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Value vs Monthly Investment Footer Box */}
            <div className="bg-[#080a0f] border-t border-white/[0.1] p-6 sm:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                <div className="space-y-2 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <span className="text-xs sm:text-sm text-[#8e909a]">
                      Total Standalone Market Value:
                    </span>
                    <span className="text-base sm:text-lg font-medium text-[#8e909a] line-through">
                      $4,500 / month
                    </span>
                  </div>

                  <div className="flex flex-wrap items-baseline justify-center md:justify-start gap-2.5">
                    <span className="text-xs uppercase tracking-wider text-[#60b6ee] font-semibold">
                      Your Monthly Investment:
                    </span>
                    <span className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
                      $2,500
                    </span>
                    <span className="text-sm text-[#8e909a]">/ month</span>
                  </div>

                  <p className="text-xs text-[#60b6ee] font-medium">
                    You save $2,000 every single month with our all-in-one YouTube &amp; Reels engine
                  </p>
                </div>

                <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-2.5 shrink-0">
                  <button
                    onClick={scrollToCalendar}
                    className="w-full md:w-auto px-8 py-4 rounded-full bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-sm font-semibold tracking-tight transition-all flex items-center justify-center gap-2 shadow-[0_6px_30px_rgba(21,145,220,0.45)] hover:shadow-[0_8px_40px_rgba(21,145,220,0.65)] hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Book a 15-Minute Intro Call</span>
                    <ArrowRight size={15} />
                  </button>
                  <span className="text-[11px] text-[#8e909a]">
                    Month-to-month retainer · Pause or cancel anytime
                  </span>
                </div>

              </div>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* 4. RISK REVERSAL & REAL SCARCITY (2 COLUMNS)                              */}
        {/* ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left max-w-4xl mx-auto">
          
          {/* Card 1: 100% On-Time Delivery Guarantee */}
          <div className="bg-[#0b0c10] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-6 sm:p-7 space-y-3.5 transition-all">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-[#60b6ee] text-[11px] font-semibold uppercase tracking-wider">
              <ShieldCheck size={13} />
              <span>Input Guarantee</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
              100% On-Time Delivery Guarantee
            </h3>

            <p className="text-xs sm:text-sm text-[#9496a1] leading-relaxed">
              The number one reason creators burn out with editors is missed deadlines that destroy algorithm consistency.
            </p>

            <p className="text-xs sm:text-sm text-[#d4d6e0] leading-relaxed">
              We commit to a strict <strong className="text-white">48-hour draft turnaround</strong> per video. If any video is delivered past our agreed deadline without prior notice,{" "}
              <span className="text-[#60b6ee] font-medium">
                you receive a 100% refund for that video
              </span>
              . Plus, you get unlimited revisions on Frame.io until you are completely satisfied.
            </p>
          </div>

          {/* Card 2: Honest Scarcity */}
          <div className="bg-[#0b0c10] border border-[#1591DC]/40 rounded-2xl p-6 sm:p-7 space-y-3.5 transition-all shadow-[0_0_30px_rgba(21,145,220,0.1)]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-[#60b6ee] text-[11px] font-semibold uppercase tracking-wider">
              <Clock size={13} />
              <span>1 Slot Open This Month</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
              Why Only 1 New Retainer Partner?
            </h3>

            <p className="text-xs sm:text-sm text-[#9496a1] leading-relaxed">
              Most volume agencies sign 20 clients and secretly outsource your raw footage to overseas junior contractors. Quality collapses by week three.
            </p>

            <p className="text-xs sm:text-sm text-[#d4d6e0] leading-relaxed">
              Thomas personally edits and directs every single frame of your 4 YouTube videos and 12 Reels. Because senior craft and 48-hour delivery require deep focus,{" "}
              <strong className="text-white">
                we hard-cap onboarding to 1 new client per month
              </strong>{" "}
              to preserve elite results for existing partners.
            </p>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 5. VERIFIED CREATOR RESULTS STRIP                                         */}
        {/* ========================================================================= */}
        <section className="bg-[#0b0c10] border border-white/[0.08] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center -space-x-2 shrink-0">
              <img
                src="/clients/via_masi.jpg"
                alt="Via Masi"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#07080b]"
              />
              <img
                src="/clients/vlady.jpg"
                alt="Vlady"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#07080b]"
              />
              <img
                src="/clients/eugene_fomin.jpg"
                alt="Eugene Fomin"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#07080b]"
              />
              <img
                src="/clients/raul_ocana.jpg"
                alt="Raul Ocana"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#07080b]"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} fill="currentColor" />
                ))}
                <span className="text-white font-semibold ml-1">4.9 out of 5.0</span>
                <span className="text-[#8e909a]">from 20+ Founders &amp; Creators</span>
              </div>
              <p className="text-xs text-[#9496a1]">
                800+ Reels &amp; long-form videos delivered for Via Masi (+210% Inbox), Vlady (3.2x Sales), Eugene Fomin (4.5x Views), and more.
              </p>
            </div>
          </div>

          <a
            href="/#work"
            className="w-full sm:w-auto shrink-0 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-xs font-semibold text-white transition-all inline-flex items-center justify-center gap-1.5"
          >
            <span>See Video Samples</span>
            <ArrowUpRight size={13} className="text-[#60b6ee]" />
          </a>
        </section>

        {/* ========================================================================= */}
        {/* 6. FAQ ACCORDION                                                          */}
        {/* ========================================================================= */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-normal sm:font-medium tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              Everything you need to know about partnering on the 30-Day Content Engine
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#0b0c10] border border-white/[0.08] rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-4 text-left text-xs sm:text-sm font-medium text-white hover:text-[#1591DC] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className="w-5 h-5 rounded-full bg-white/[0.04] text-[#8e909a] flex items-center justify-center shrink-0 ml-3">
                    <ChevronDown size={13} className={`transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[#1591DC]' : ''}`} />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-[#8e909a] leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. DIRECT CALENDLY BOOKING SECTION                                        */}
        {/* ========================================================================= */}
        <section id="offer-booking" className="space-y-6 pt-4 scroll-mt-20 max-w-4xl mx-auto">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-xs font-semibold uppercase tracking-wider text-[#60b6ee]">
              15-Minute Strategy Call
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal sm:font-medium tracking-tight text-white">
              Let's See If Your Channel <span className="text-[#1591DC]">Is a Fit.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              Pick a date and time below for a quick, zero-pressure 15-minute consultation to review your channel and discuss your monthly video engine.
            </p>
          </div>

          <BookingCalendar />
        </section>

      </main>

      {/* MINIMAL FOOTER */}
      <footer className="border-t border-white/[0.06] py-8 px-6 text-center text-xs text-[#8e909a]">
        <div className="max-w-[1040px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/thomas_portrait.jpg"
              alt="Thomas Nguyen"
              className="w-5 h-5 rounded-full object-cover border border-white/20"
            />
            <span className="text-white font-medium">Thomas Nguyen</span>
            <a href="/" className="hover:text-white transition-colors">
              thomasnguyen.online
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/thomasvisualeditor/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#8e909a] hover:text-[#1591DC] transition-colors flex items-center justify-center"
              title="Instagram"
            >
              <Instagram size={13} />
            </a>
            <a
              href="https://www.linkedin.com/in/phucxuannguyen/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#8e909a] hover:text-[#1591DC] transition-colors flex items-center justify-center"
              title="LinkedIn"
            >
              <Linkedin size={13} />
            </a>
            <a
              href="mailto:thomasnguyen.editor@gmail.com"
              className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#8e909a] hover:text-[#1591DC] transition-colors flex items-center justify-center"
              title="Email"
            >
              <Mail size={13} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
