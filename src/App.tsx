import React, { useState } from 'react';
import { 
  Search, 
  ArrowUpRight, 
  ArrowRight,
  ArrowLeft,
  Play,
  Zap, 
  Layers, 
  Sparkles, 
  Music, 
  Minus, 
  Plus, 
  Instagram, 
  CheckCircle2, 
  Star, 
  Send, 
  Check, 
  Mail, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Loader2,
  ChevronDown,
  LayoutGrid,
  X
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [bookingTab, setBookingTab] = useState<'calendly' | 'form'>('calendly');
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

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
          _subject: `New Project Inquiry from ${formData.name} (${budgetRange})`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
      }
      setFormSubmitted(true);
    } catch {
      window.location.href = `mailto:thomasnguyen.editor@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0AType: ${encodeURIComponent(videoType)}%0D%0ABudget: ${encodeURIComponent(budgetRange)}%0D%0ANotes: ${encodeURIComponent(formData.message)}`;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // LIVE SHORT-FORM VIDEO CLIPS FOR CAROUSEL & SHOWCASE
  const showcaseVideos = [
    { 
      id: "1212586126", 
      tag: "01 / HOOK ENGINE", 
      title: "Visual Hook & Retention Engine",
      author: "Via Masi",
      authorRole: "CREATOR & AGENCY FOUNDER",
      company: "VIAMASI MEDIA",
      metric: "+210% Inbound Leads",
      thumbnail: "/thumbnails/1212586126.jpg",
      avatar: "/clients/via_masi.jpg"
    },
    { 
      id: "1212585180", 
      tag: "02 / PACING", 
      title: "Motion Pacing & Dynamic Cuts",
      author: "Vlady",
      authorRole: "DIGITAL COURSE CREATOR & BRAND",
      company: "VLADY OFFICIAL",
      metric: "3.2x Product Sales",
      thumbnail: "/thumbnails/1212585180.jpg",
      avatar: "/clients/vlady.jpg"
    },
    { 
      id: "1212585217", 
      tag: "03 / BRANDING", 
      title: "Brand Identity & Aesthetics",
      author: "Hoang Phuc",
      authorRole: "TECH CREATOR & EDUCATOR",
      company: "TECH ECOSYSTEM",
      metric: "84% 5S Retention",
      thumbnail: "/thumbnails/1212585217.jpg",
      avatar: "/clients/hoang_phuc.jpg"
    },
    { 
      id: "1212585328", 
      tag: "04 / STORYTELLING", 
      title: "Cinematic Visual Storytelling",
      author: "Kaleemix",
      authorRole: "B2B MEDIA AGENCY FOUNDER",
      company: "KALEEMIX MEDIA",
      metric: "1.8M Monthly Views",
      thumbnail: "/thumbnails/1212585328.jpg",
      avatar: "/clients/kaleemix.jpg"
    },
    { 
      id: "1190211907", 
      tag: "05 / RETENTION", 
      title: "Hook Mechanics & SFX Architecture",
      author: "Raul Ocana",
      authorRole: "COMMERCIAL PRODUCER",
      company: "CREATIVE PRODUCTION",
      metric: "1.4M Organic Reach",
      thumbnail: "/thumbnails/1190211907.jpg",
      avatar: "/clients/hoang_phuc.jpg"
    },
    { 
      id: "1185562812", 
      tag: "06 / MOTION VFX", 
      title: "Bespoke After Effects Keyframing",
      author: "Editoz Club",
      authorRole: "MEDIA COMMUNITY FOUNDER",
      company: "EDITOZ GLOBAL",
      metric: "3.8x Engagement Lift",
      thumbnail: "/thumbnails/1185562812.jpg",
      avatar: "/clients/kaleemix.jpg"
    },
    { 
      id: "1185562961", 
      tag: "07 / CONVERSION", 
      title: "High-Energy Conversion Cuts",
      author: "Executive Founder",
      authorRole: "VENTURE ADVISOR",
      company: "HIGH-TICKET ACADEMY",
      metric: "+210% Leads",
      thumbnail: "/thumbnails/1185562961.jpg",
      avatar: "/clients/via_masi.jpg"
    },
    { 
      id: "1185562977", 
      tag: "08 / SOUND DESIGN", 
      title: "Multi-Layered Sound Architecture",
      author: "Personal Brand",
      authorRole: "HIGH-TICKET CREATOR",
      company: "COACHING ECOSYSTEM",
      metric: "1.1M Organic Views",
      thumbnail: "/thumbnails/1185562977.jpg",
      avatar: "/clients/vlady.jpg"
    },
    { 
      id: "1185563164", 
      tag: "09 / B-ROLL STRATEGY", 
      title: "Visual Proof & Narrative B-Roll",
      author: "Growth Agency",
      authorRole: "AGENCY PRINCIPAL",
      company: "SCALING SYSTEMS",
      metric: "4.5x Saves & Shares",
      thumbnail: "/thumbnails/1185563164.jpg",
      avatar: "/clients/hoang_phuc.jpg"
    },
    { 
      id: "1185563238", 
      tag: "10 / COLOR GRADE", 
      title: "Rec.709 Studio Color Calibration",
      author: "Media Production",
      authorRole: "DIRECTOR OF PHOTOGRAPHY",
      company: "STUDIO CINEMA",
      metric: "Studio Standard",
      thumbnail: "/thumbnails/1185563238.jpg",
      avatar: "/clients/kaleemix.jpg"
    },
  ];

  const handlePrevVideo = () => {
    setPlayingVideoId(null);
    setActiveVideoIndex((prev) => (prev === 0 ? showcaseVideos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setPlayingVideoId(null);
    setActiveVideoIndex((prev) => (prev === showcaseVideos.length - 1 ? 0 : prev + 1));
  };

  const filteredVideos = showcaseVideos.filter(v => 
    v.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    v.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedGridVideos = showAllVideos ? filteredVideos : filteredVideos.slice(0, 4);

  // AUTHENTIC CLIENT REVIEWS FOR THE DUAL-DIRECTION SLIDING MARQUEE
  const clientReviews = [
    {
      name: "Via Masi",
      handle: "@viamasi_media",
      role: "Creator & Agency Founder",
      avatar: "/clients/via_masi.jpg",
      metric: "+210% Inbound Leads",
      comment: "Thomas completely transformed our short-form pacing. We went from burning cash on views that went nowhere to generating qualified inbound calls every week. His 48-hour delivery timeline is unmatched.",
      stars: 5,
      location: "United States"
    },
    {
      name: "Vlady",
      handle: "@vlady_official",
      role: "Digital Course Creator & Brand",
      avatar: "/clients/vlady.jpg",
      metric: "3.2x Product Sales",
      comment: "The retention on our reels doubled within the first 10 days of working with Thomas. He understands buyer psychology, not just flashy cuts. He helped me sell out my digital product launch organically.",
      stars: 5,
      location: "Global"
    },
    {
      name: "Hoang Phuc",
      handle: "@hoangphuc_creator",
      role: "Tech Creator & Educator",
      avatar: "/clients/hoang_phuc.jpg",
      metric: "84% 5S Retention",
      comment: "First 5-second viewer retention jumped from 34% to 84% within 2 weeks of implementing his visual pacing framework. Organic follower growth tripled and Frame.io review was effortless.",
      stars: 5,
      location: "Vietnam"
    },
    {
      name: "Kaleemix",
      handle: "@kaleemix_official",
      role: "B2B Media Agency",
      avatar: "/clients/kaleemix.jpg",
      metric: "1.8M Monthly Views",
      comment: "Visual hooks and bespoke After Effects keyframing turned our content into an automated client acquisition engine. Zero template slop — everything is tailor-made for high conversion.",
      stars: 5,
      location: "United Kingdom"
    },
    {
      name: "Raul Ocana",
      handle: "@raulocana_video",
      role: "Commercial Producer",
      avatar: "/clients/hoang_phuc.jpg",
      metric: "1.4M Organic Reach",
      comment: "Flawless 48-hour turnaround with cinema-grade Rec.709 color grading and multi-layered sound design. The most reliable editor we have worked with.",
      stars: 5,
      location: "Spain"
    },
    {
      name: "Editoz Club",
      handle: "@editoz_club",
      role: "Media Community",
      avatar: "/clients/kaleemix.jpg",
      metric: "3.8x Engagement Lift",
      comment: "Bespoke motion graphics built from scratch — zero CapCut template packs used. Our brand authority doubled in 30 days.",
      stars: 5,
      location: "United Kingdom"
    }
  ];

  const marqueeReviewsRow1 = [...clientReviews, ...clientReviews];
  const marqueeReviewsRow2 = [...clientReviews.slice().reverse(), ...clientReviews.slice().reverse()];

  // Core Pillars
  const pillars = [
    { 
      title: "Neuro-Pacing", 
      description: "Eliminate dead air and micro-hesitations within the first 3 critical seconds, locking attention before the drop-off point.", 
      icon: Zap 
    },
    { 
      title: "Bespoke Motion VFX", 
      description: "Handcrafted After Effects graphics tailored to your visual identity, establishing immediate authority without cheap template packs.", 
      icon: Layers 
    },
    { 
      title: "Conversion B-Roll", 
      description: "Context-relevant visual proof replacing generic stock footage with intentional scenes that reinforce your core offer.", 
      icon: Sparkles 
    },
    { 
      title: "Sound Architecture", 
      description: "Multi-layered audio design with bespoke risers, drops, and impact SFX engineered to hold subconscious engagement.", 
      icon: Music 
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f1f2f6] relative selection:bg-[#1591DC]/30 selection:text-white">
      
      {/* Subtle Atmospheric Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#1591DC]/8 to-transparent blur-[140px]"></div>
      </div>

      {/* 1. MINIMAL STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-[#07080b]/80 backdrop-blur-md border-b border-white/[0.06] px-6 md:px-12 py-3.5 flex justify-between items-center max-w-[1200px] mx-auto">
        <a href="#hero" className="flex items-center gap-3 group">
          <img 
            src="/thomas_portrait.jpg" 
            alt="Thomas Nguyen" 
            className="w-8 h-8 rounded-full object-cover border border-white/20 group-hover:border-[#1591DC] transition-colors"
          />
          <div className="flex flex-col text-left">
            <span className="font-semibold text-sm tracking-tight text-white leading-none">
              Thomas Nguyen
            </span>
            <span className="text-[11px] text-[#8e909a] tracking-tight mt-0.5">
              Visual Retention Strategist
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#8e909a] tracking-tight">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#results" className="hover:text-white transition-colors">Proof</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#guarantee" className="hover:text-white transition-colors">Guarantee</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#booking" className="hover:text-white transition-colors">Book Call</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleCalendlyRedirect}
            className="px-4 py-2 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 shadow-[0_2px_12px_rgba(21,145,220,0.3)] cursor-pointer"
          >
            <span>Book Call</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 space-y-28 md:space-y-36 pb-24 max-w-[1160px] mx-auto px-4 sm:px-6">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (ALEX HORMOZI GRAND SLAM OFFER COPYWRITING)               */}
        {/* ========================================================================= */}
        <section id="hero" className="pt-16 md:pt-24 text-center max-w-3xl mx-auto space-y-7">
          
          {/* Availability Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-[#a0a3af] font-medium tracking-tight">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Accepting 2 Creator Partnerships This Month · 100% Guaranteed ROI</span>
          </div>
          
          {/* Main Headline (Hormozi Formula) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
            Turn Raw Footage Into Scalable Inbound Sales.<br className="hidden sm:block" />
            <span className="text-[#1591DC]">1M+ Views in 90 Days Or Your Money Back.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#8e909a] text-base md:text-lg leading-relaxed max-w-xl mx-auto font-normal">
            We engineer high-retention short-form video systems with neuro-pacing, bespoke VFX, and sound design. If we don't hit your retention and growth benchmarks, you get a 100% full refund. Zero risk. 48-hour delivery.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={handleCalendlyRedirect}
              className="px-7 py-3.5 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-sm font-semibold rounded-full tracking-tight inline-flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(21,145,220,0.35)] hover:shadow-[0_6px_28px_rgba(21,145,220,0.5)] cursor-pointer"
            >
              <span>Claim Your Offer &amp; Book a Call</span>
              <ArrowRight size={15} />
            </button>

            <a 
              href="#work"
              className="px-6 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-white text-sm font-medium rounded-full tracking-tight inline-flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Watch The Work ↓</span>
            </a>
          </div>

          {/* 3-Column Divided Achievement Metric Banner (Matching User Reference Image) */}
          <div className="pt-6 max-w-3xl mx-auto">
            <div className="bg-[#0e1017]/90 border border-white/[0.08] rounded-2xl py-6 sm:py-8 px-4 grid grid-cols-3 divide-x divide-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <div className="text-center px-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1591DC] tracking-tight">
                  20+
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#8e909a] uppercase tracking-wider mt-1.5">
                  Clients
                </div>
              </div>
              <div className="text-center px-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1591DC] tracking-tight">
                  800+
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#8e909a] uppercase tracking-wider mt-1.5">
                  Reels Edited
                </div>
              </div>
              <div className="text-center px-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1591DC] tracking-tight">
                  48H
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#8e909a] uppercase tracking-wider mt-1.5">
                  Turnaround
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 2. INTERACTIVE VIDEO TESTIMONIAL CAROUSEL (IN THEIR OWN WORDS)             */}
        {/* ========================================================================= */}
        <section id="work" className="space-y-8 pt-4 scroll-mt-20">
          
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-xs font-semibold uppercase tracking-wider text-[#60b6ee]">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              In Their Own Words
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              Watch real retention breakdowns and campaign results from creators and founders
            </p>

            {/* View Switcher */}
            <div className="pt-2 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  viewMode === 'carousel' 
                    ? 'bg-white text-black font-semibold shadow' 
                    : 'bg-white/[0.04] text-[#8e909a] hover:text-white border border-white/[0.08]'
                }`}
              >
                Carousel View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid' 
                    ? 'bg-white text-black font-semibold shadow' 
                    : 'bg-white/[0.04] text-[#8e909a] hover:text-white border border-white/[0.08]'
                }`}
              >
                <LayoutGrid size={12} />
                <span>All Projects ({showcaseVideos.length})</span>
              </button>
            </div>
          </div>

          {/* CAROUSEL VIEW (MATCHING IMAGE 1 IN THEIR OWN WORDS) */}
          {viewMode === 'carousel' && (
            <div className="relative w-full max-w-5xl mx-auto py-6 select-none">
              
              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrevVideo}
                aria-label="Previous video"
                className="absolute left-2 sm:left-6 md:left-12 top-[42%] -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black shadow-[0_6px_25px_rgba(0,0,0,0.6)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer border border-black/10"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={handleNextVideo}
                aria-label="Next video"
                className="absolute right-2 sm:right-6 md:right-12 top-[42%] -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black shadow-[0_6px_25px_rgba(0,0,0,0.6)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer border border-black/10"
              >
                <ArrowRight size={18} />
              </button>

              {/* Edge Blur Gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#07080b] to-transparent z-30 pointer-events-none hidden sm:block" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#07080b] to-transparent z-30 pointer-events-none hidden sm:block" />

              {/* 5-Card Layered Flex Container */}
              <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6 min-h-[540px] sm:min-h-[580px] overflow-hidden px-4">
                {showcaseVideos.map((video, idx) => {
                  const len = showcaseVideos.length;
                  let diff = (idx - activeVideoIndex) % len;
                  if (diff > len / 2) diff -= len;
                  if (diff < -len / 2) diff += len;

                  // Render only [-2, -1, 0, 1, 2]
                  if (Math.abs(diff) > 2) return null;

                  const isCenter = diff === 0;
                  const isNeighbor = Math.abs(diff) === 1;

                  return (
                    <div
                      key={video.id}
                      onClick={() => {
                        if (!isCenter) {
                          setPlayingVideoId(null);
                          setActiveVideoIndex(idx);
                        }
                      }}
                      className={`transition-all duration-500 ease-out flex flex-col items-center shrink-0 cursor-pointer ${
                        isCenter
                          ? 'z-30 scale-100 opacity-100 w-[270px] sm:w-[310px] md:w-[330px]'
                          : isNeighbor
                          ? 'z-20 scale-[0.88] opacity-75 hover:opacity-90 w-[220px] sm:w-[250px] md:w-[270px]'
                          : 'z-10 scale-[0.76] opacity-30 hover:opacity-50 w-[180px] sm:w-[210px] hidden md:flex'
                      }`}
                    >
                      {/* 9:16 Video Poster Card */}
                      <div className={`w-full aspect-[9/16] relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black transition-all duration-300 ${
                        isCenter 
                          ? 'border-2 border-white/40 shadow-[0_12px_45px_rgba(21,145,220,0.35)]' 
                          : 'border border-white/10 shadow-lg'
                      }`}>
                        
                        {/* If this video is currently playing */}
                        {playingVideoId === video.id ? (
                          <div className="absolute inset-0 w-full h-full bg-black z-30">
                            <iframe
                              src={`https://player.vimeo.com/video/${video.id}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`}
                              className="w-full h-full object-cover"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                              title={video.title}
                            />
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setPlayingVideoId(null);
                              }}
                              className="absolute top-3 right-3 z-40 px-2.5 py-1 rounded-full bg-black/80 hover:bg-black text-white text-[10px] font-semibold border border-white/20 flex items-center gap-1 cursor-pointer"
                            >
                              <X size={12} />
                              <span>Close</span>
                            </button>
                          </div>
                        ) : (
                          <>
                            {/* High-res Thumbnail Cover */}
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            
                            {/* Subtle dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                            {/* Centered Play Button (Matching Image 1) */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (!isCenter) {
                                    setActiveVideoIndex(idx);
                                    setPlayingVideoId(video.id);
                                  } else {
                                    setPlayingVideoId(video.id);
                                  }
                                }}
                                className={`rounded-full bg-white text-[#1591DC] flex items-center justify-center shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 transition-transform cursor-pointer ${
                                  isCenter ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-11 h-11'
                                }`}
                                title="Play Reel"
                              >
                                <Play size={isCenter ? 22 : 16} fill="currentColor" className="ml-1" />
                              </button>
                            </div>

                            {/* Top Tag & Metric Pill */}
                            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                              <span className="px-2.5 py-1 rounded-full bg-black/75 border border-white/10 text-[9px] sm:text-[10px] font-medium text-white/90 uppercase tracking-wider backdrop-blur-md">
                                {video.tag}
                              </span>
                              <span className="px-2.5 py-1 rounded-full bg-[#1591DC]/30 border border-[#1591DC]/50 text-[9px] sm:text-[10px] font-semibold text-[#7ed0ff] backdrop-blur-md">
                                {video.metric}
                              </span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Author & Info Below Card (Matching Image 1 Layout) */}
                      <div className="mt-3.5 text-center px-2 space-y-1">
                        <h3 className={`font-bold tracking-tight text-white leading-tight ${
                          isCenter ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'
                        }`}>
                          {video.author}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-[#8e909a]">
                          {video.authorRole}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Dots Indicator */}
              <div className="flex items-center justify-center gap-1.5 pt-6">
                {showcaseVideos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setPlayingVideoId(null);
                      setActiveVideoIndex(i);
                    }}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      activeVideoIndex === i 
                        ? 'w-6 h-1.5 bg-[#1591DC]' 
                        : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

            </div>
          )}

          {/* GRID VIEW (ALL PROJECTS EXPLORER) */}
          {viewMode === 'grid' && (
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="flex justify-end">
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-full px-3.5 py-1.5 flex items-center gap-2.5 w-full sm:w-64 focus-within:border-[#1591DC]/60 transition-colors">
                  <Search size={13} className="text-[#8e909a]" />
                  <input 
                    type="text" 
                    placeholder="Filter projects..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-xs text-white placeholder:text-[#8e909a]/60 w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {displayedGridVideos.map((video) => (
                  <div 
                    key={video.id}
                    className="bg-[#0e1017] border border-white/[0.08] rounded-2xl p-3 space-y-3 flex flex-col justify-between hover:border-white/[0.2] transition-colors"
                  >
                    <div className="w-full aspect-[9/16] relative bg-black rounded-xl overflow-hidden group">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => {
                            const idx = showcaseVideos.findIndex(v => v.id === video.id);
                            if (idx !== -1) {
                              setActiveVideoIndex(idx);
                              setPlayingVideoId(video.id);
                              setViewMode('carousel');
                            }
                          }}
                          className="w-12 h-12 rounded-full bg-white text-[#1591DC] flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Play size={18} fill="currentColor" className="ml-0.5" />
                        </button>
                      </div>
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/80 text-[10px] text-white border border-white/10">
                        {video.tag}
                      </span>
                    </div>

                    <div className="px-1">
                      <h4 className="text-sm font-semibold text-white">{video.author}</h4>
                      <p className="text-[11px] text-[#8e909a]">{video.authorRole}</p>
                      <span className="inline-block mt-1 text-[11px] text-[#60b6ee] font-medium">{video.metric}</span>
                    </div>
                  </div>
                ))}
              </div>

              {filteredVideos.length > 4 && (
                <div className="text-center pt-2">
                  <button
                    onClick={() => setShowAllVideos(!showAllVideos)}
                    className="px-6 py-2.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-white text-xs font-semibold rounded-full tracking-tight inline-flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>{showAllVideos ? 'Show Less' : `View All ${filteredVideos.length} Projects`}</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${showAllVideos ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              )}
            </div>
          )}

        </section>

        {/* ========================================================================= */}
        {/* 3. DUAL-DIRECTION CONTINUOUS SLIDING FEEDBACK MARQUEE                     */}
        {/* ========================================================================= */}
        <section id="results" className="space-y-6 pt-4 scroll-mt-20 overflow-hidden">
          <div className="text-center space-y-1 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Client Feedback
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              What creators and founders say about our visual pacing and 48-hour delivery
            </p>
          </div>

          {/* Marquee Row 1 (Left Scroll) */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-[#07080b] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-[#07080b] to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee gap-4">
              {marqueeReviewsRow1.map((rev, i) => (
                <div 
                  key={`r1-${i}`}
                  className="bg-[#0e1017] border border-white/[0.08] hover:border-white/[0.18] rounded-2xl w-[340px] md:w-[380px] p-5 md:p-6 shrink-0 flex flex-col justify-between space-y-4 shadow-sm select-none transition-colors"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: rev.stars }).map((_, s) => (
                          <Star key={s} size={13} fill="currentColor" />
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-[10px] font-semibold text-[#60b6ee]">
                        {rev.metric}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#d4d6e0] leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3.5 border-t border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={rev.avatar} 
                        alt={rev.name}
                        className="w-8 h-8 rounded-full object-cover border border-white/10"
                      />
                      <div>
                        <span className="text-white font-medium block leading-tight">{rev.name}</span>
                        <span className="text-[11px] text-[#8e909a]">{rev.handle}</span>
                      </div>
                    </div>

                    <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 size={11} /> Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Right / Reverse Scroll) */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-[#07080b] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-[#07080b] to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee-reverse gap-4">
              {marqueeReviewsRow2.map((rev, i) => (
                <div 
                  key={`r2-${i}`}
                  className="bg-[#0e1017] border border-white/[0.08] hover:border-white/[0.18] rounded-2xl w-[340px] md:w-[380px] p-5 md:p-6 shrink-0 flex flex-col justify-between space-y-4 shadow-sm select-none transition-colors"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: rev.stars }).map((_, s) => (
                          <Star key={s} size={13} fill="currentColor" />
                        ))}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-[10px] font-semibold text-[#60b6ee]">
                        {rev.metric}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#d4d6e0] leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3.5 border-t border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={rev.avatar} 
                        alt={rev.name}
                        className="w-8 h-8 rounded-full object-cover border border-white/10"
                      />
                      <div>
                        <span className="text-white font-medium block leading-tight">{rev.name}</span>
                        <span className="text-[11px] text-[#8e909a]">{rev.handle}</span>
                      </div>
                    </div>

                    <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 size={11} /> Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 4. WORKFLOW & 3-STEP PROCESS                                              */}
        {/* ========================================================================= */}
        <section id="process" className="space-y-6 pt-4 scroll-mt-20">
          <div className="text-center space-y-1 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              A streamlined 48-hour delivery system designed for busy founders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            
            <div className="bg-[#0e1017] border border-white/[0.08] rounded-2xl p-6 space-y-3">
              <span className="text-xs font-mono font-semibold text-[#1591DC]">01 / INTAKE</span>
              <h3 className="text-base font-semibold text-white">Submit Footage</h3>
              <p className="text-xs text-[#8e909a] leading-relaxed">
                Drop raw footage clips into a shared Google Drive, Dropbox, or Frame.io project folder with your key talking points.
              </p>
            </div>

            <div className="bg-[#0e1017] border border-[#1591DC]/40 rounded-2xl p-6 space-y-3">
              <span className="text-xs font-mono font-semibold text-[#1591DC]">02 / 48H EDIT</span>
              <h3 className="text-base font-semibold text-white">Precision Editing</h3>
              <p className="text-xs text-[#8e909a] leading-relaxed">
                We cut dead air, design custom motion graphics, color grade in Rec.709, and master layered sound effects.
              </p>
            </div>

            <div className="bg-[#0e1017] border border-white/[0.08] rounded-2xl p-6 space-y-3">
              <span className="text-xs font-mono font-semibold text-[#1591DC]">03 / DELIVERY</span>
              <h3 className="text-base font-semibold text-white">Review &amp; Scale</h3>
              <p className="text-xs text-[#8e909a] leading-relaxed">
                Receive final 4K masters ready for Reels, TikTok, and Shorts. Timestamp revisions handled smoothly on Frame.io.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CORE CAPABILITIES (4 PILLARS)                                          */}
        {/* ========================================================================= */}
        <section id="services" className="space-y-6 pt-4 scroll-mt-20">
          <div className="border-b border-white/[0.06] pb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Retention Pillars
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              The core principles behind our high-converting edits
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#0e1017] border border-white/[0.08] rounded-2xl p-6 space-y-3 flex flex-col justify-between">
                <div className="w-8 h-8 rounded-full bg-white/[0.04] text-[#1591DC] flex items-center justify-center">
                  <pillar.icon size={15} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#8e909a] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. FOUNDER STORY (AUTHENTIC PORTRAIT & PHILOSOPHY)                        */}
        {/* ========================================================================= */}
        <section id="about" className="pt-4 scroll-mt-20 max-w-[880px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Real Studio Portrait */}
            <div className="shrink-0 w-full md:w-[280px] flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0b0c10] shadow-2xl">
                <img 
                  src="/thomas_portrait.jpg" 
                  alt="Thomas Nguyen" 
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </div>

            {/* Bio & Craft */}
            <div className="space-y-4 text-left flex-1">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-tight">
                Craftsmanship Behind 800+ Reels.
              </h2>

              <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
                Hi, I'm Thomas — a video editor and visual retention strategist partnering with high-ticket creators and founders worldwide.
              </p>

              <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
                Most editors focus solely on adding random flashy transitions. I focus on viewer psychology: why someone stops scrolling, why they watch past the 5-second mark, and how visual pacing leads directly to client conversion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-[#d4d6e0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#1591DC] shrink-0" />
                  <span>800+ Reels edited for founders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#1591DC] shrink-0" />
                  <span>48H Turnaround guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#1591DC] shrink-0" />
                  <span>Rec.709 Studio color calibration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#1591DC] shrink-0" />
                  <span>Frame.io collaborative review</span>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={handleCalendlyRedirect}
                  className="px-6 py-2.5 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-xs font-semibold rounded-full tracking-tight inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Work With Thomas</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. HORMOZI GRAND SLAM OFFER & GUARANTEE SECTION (MATCHING IMAGE 2)        */}
        {/* ========================================================================= */}
        <section id="guarantee" className="pt-12 pb-6 scroll-mt-20 text-center max-w-3xl mx-auto space-y-7">
          
          {/* Top Pill Badge (Exact Image 2) */}
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-xs font-semibold uppercase tracking-wider text-[#60b6ee]">
              Guarantee
            </div>
          </div>

          {/* Big Bold Headline (Exact Image 2) */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            1M+ Views in 90 Days.<br />
            <span className="text-[#1591DC]">Or Your Money Back.</span>
          </h2>

          {/* Body Paragraph (Hormozi Copywriting From Image 2) */}
          <p className="text-[#8e909a] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-normal">
            Not a marketing line, a commitment. If we don't hit it, you get your money back. Tracked together every month, so you always know exactly where you stand.
          </p>

          {/* Action Button (Exact Image 2) */}
          <div className="pt-2 flex justify-center">
            <button 
              onClick={handleCalendlyRedirect}
              className="px-8 py-4 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-sm sm:text-base font-semibold rounded-full tracking-tight inline-flex items-center gap-2.5 shadow-[0_6px_30px_rgba(21,145,220,0.4)] hover:shadow-[0_8px_40px_rgba(21,145,220,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Book a Call</span>
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Overlapping Client Avatars & Proof Text (Exact Image 2) */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center -space-x-2.5">
              <img 
                src="/clients/via_masi.jpg" 
                alt="Via Masi" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-[#07080b]" 
              />
              <img 
                src="/clients/vlady.jpg" 
                alt="Vlady" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-[#07080b]" 
              />
              <img 
                src="/clients/hoang_phuc.jpg" 
                alt="Hoang Phuc" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-[#07080b]" 
              />
              <img 
                src="/clients/kaleemix.jpg" 
                alt="Kaleemix" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-[#07080b]" 
              />
            </div>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              Used by <strong className="text-white font-medium">Via Masi</strong>, <strong className="text-white font-medium">Vlady</strong>, <strong className="text-white font-medium">Hoang Phuc</strong>, and many others.
            </p>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 8. DIRECT BOOKING SECTION (CALENDLY + INQUIRY FORM)                       */}
        {/* ========================================================================= */}
        <section id="booking" className="space-y-6 pt-4 max-w-3xl mx-auto scroll-mt-20">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Schedule Your 15-Minute Strategy Call
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              Lock in your onboarding slot and review your channel retention plan directly with Thomas.
            </p>

            {/* Switcher Tabs */}
            <div className="pt-4 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setBookingTab('calendly')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  bookingTab === 'calendly'
                    ? 'bg-[#1591DC] text-white'
                    : 'bg-white/[0.03] border border-white/[0.08] text-[#8e909a] hover:text-white'
                }`}
              >
                Calendar
              </button>
              <button
                type="button"
                onClick={() => setBookingTab('form')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  bookingTab === 'form'
                    ? 'bg-[#1591DC] text-white'
                    : 'bg-white/[0.03] border border-white/[0.08] text-[#8e909a] hover:text-white'
                }`}
              >
                Direct Inquiry
              </button>
            </div>
          </div>

          {/* TAB 1: CALENDLY EMBED */}
          {bookingTab === 'calendly' && (
            <div className="bg-[#0e1017] border border-white/[0.08] rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="w-full min-h-[660px] rounded-xl overflow-hidden bg-[#07080b]">
                <iframe
                  src="https://calendly.com/thomasvisualeditor/30min?embed_domain=thomasnguyen.online&embed_type=Inline&background_color=07080b&text_color=ffffff&primary_color=1591dc"
                  width="100%"
                  height="660"
                  frameBorder="0"
                  title="Schedule a Strategy Call with Thomas Nguyen"
                  className="w-full min-h-[660px]"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8e909a] border-t border-white/[0.06]">
                <span>100% Free 15-Min Strategy Session · No Sales Pressure</span>
                <a 
                  href={calendlyBookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#60b6ee] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open in new tab</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: INQUIRY FORM */}
          {bookingTab === 'form' && (
            <div className="bg-[#0e1017] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-4 max-w-xl mx-auto">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#d4d6e0] block">Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#07080b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-[#8e909a]/50 focus:outline-none focus:border-[#1591DC] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#d4d6e0] block">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#07080b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-[#8e909a]/50 focus:outline-none focus:border-[#1591DC] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#d4d6e0] block">Video Format</label>
                  <div className="flex flex-wrap gap-2">
                    {['Short Form Videos', 'Motion Graphics', 'Long Form'].map(type => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setVideoType(type)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                          videoType === type 
                            ? 'bg-[#1591DC] text-white' 
                            : 'bg-[#07080b] border border-white/[0.08] text-[#8e909a] hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#d4d6e0] block">Monthly Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {['Under $500', '$500-$1000', '$1000-$2000', '$2000+'].map(b => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudgetRange(b)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                          budgetRange === b 
                            ? 'bg-[#1591DC] text-white' 
                            : 'bg-[#07080b] border border-white/[0.08] text-[#8e909a] hover:text-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#d4d6e0] block">Notes</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us about your channels, goals, or reference links..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#07080b] border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-[#8e909a]/50 focus:outline-none focus:border-[#1591DC] transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-xs font-semibold rounded-full tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : formSubmitted ? (
                    <>
                      <Check size={14} />
                      <span>Inquiry Sent! We will reply within 24 hours</span>
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      <span>Submit Project Brief</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* 9. FAQ                                                                    */}
        {/* ========================================================================= */}
        <section id="faq" className="space-y-6 pt-4 scroll-mt-20">
          <div className="text-center space-y-1 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              Everything you need to know before getting started
            </p>
          </div>

          <div className="space-y-2.5 max-w-2xl mx-auto">
            {[
              {
                q: "What makes your editing different from standard freelance editors?",
                a: "Most freelance editors simply trim clips and add random template presets. We operate as conversion partners — engineering hook retention in the first 3 seconds, custom keyframing After Effects graphics, and crafting pacing that guides the viewer directly toward your offer."
              },
              {
                q: "How does your 100% money-back guarantee work?",
                a: "It is an ironclad Hormozi-style commitment. We set explicit view and retention targets prior to kickoff. If we do not hit those benchmarks within the 90-day window, you receive a full refund — no friction, no awkward questions asked."
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
              <div key={i} className="bg-[#0e1017] border border-white/[0.08] rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-4 text-left text-xs sm:text-sm font-medium text-white hover:text-[#1591DC] transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <div className="w-5 h-5 rounded-full bg-white/[0.04] text-[#8e909a] flex items-center justify-center shrink-0">
                    {activeFaq === i ? <Minus size={11} /> : <Plus size={11} />}
                  </div>
                </button>
                {activeFaq === i && (
                  <div className="p-4 pt-0 text-xs text-[#8e909a] leading-relaxed border-t border-white/[0.04]">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER (MATCHING MINIMALIST SWISS AESTHETIC FROM IMAGE 2) */}
      <footer className="border-t border-white/[0.06] bg-[#07080b] py-8 px-6 md:px-12 relative z-20">
        <div className="max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/thomas_portrait.jpg" 
              alt="Thomas Nguyen" 
              className="w-6 h-6 rounded-full object-cover border border-white/20"
            />
            <p className="text-xs text-[#8e909a]">
              &copy; 2026 Thomas Nguyen Studio. All rights reserved. &middot; <span className="hover:text-white cursor-pointer">Privacy Policy</span> &middot; <span className="hover:text-white cursor-pointer">Terms &amp; Conditions</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href="https://x.com/thomaseditor_vn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#8e909a] hover:text-[#1591DC] transition-colors flex items-center justify-center"
              title="X / Twitter"
            >
              <Twitter size={13} />
            </a>

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
              href="https://www.facebook.com/profile.php?id=100063990921099" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#8e909a] hover:text-[#1591DC] transition-colors flex items-center justify-center"
              title="Facebook"
            >
              <Facebook size={13} />
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
