import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowUpRight, 
  ArrowRight, 
  ArrowLeft,
  Play, 
  Zap, 
  Minus, 
  Plus, 
  Instagram, 
  CheckCircle2, 
  Star, 
  StarHalf, 
  Send, 
  Check, 
  Mail, 
  Linkedin, 
  Facebook, 
  Loader2,
  ChevronDown,
  LayoutGrid,
  X
} from 'lucide-react';

const XLogo = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export interface ShowcaseVideoItem {
  id: string;
  vimeoId: string;
  aspect: '9:16' | '16:9';
  formatLabel: string;
  tag: string;
  title: string;
  author: string;
  authorRole: string;
  company: string;
  metric: string;
  thumbnail: string;
  avatar: string;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [bookingTab, setBookingTab] = useState<'calendly' | 'form'>('calendly');
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [lightboxVideo, setLightboxVideo] = useState<ShowcaseVideoItem | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [videoType, setVideoType] = useState('Short Form Premium');
  const [budgetRange, setBudgetRange] = useState('$500 to $1,000');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Official Calendly Booking URL
  const calendlyBookingUrl = "https://calendly.com/thomasvisualeditor/30min";

  // Meta Pixel Event Tracking Helper
  const trackMetaEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      if (params) {
        (window as any).fbq('trackCustom', eventName, params);
      } else {
        (window as any).fbq('track', eventName);
      }
    }
  };

  const handleCalendlyRedirect = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    trackMetaEvent('Schedule');
    setLightboxVideo(null);
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
    trackMetaEvent('Lead', { budget: budgetRange, type: videoType });
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

  // ============================================================================
  // VIDEO SHOWCASE COLLECTION (SUPPORTS BOTH 9:16 VERTICAL & 16:9 HORIZONTAL)
  // ============================================================================
  // VIDEO SHOWCASE COLLECTION (SUPPORTS BOTH 9:16 VERTICAL & 16:9 HORIZONTAL)
  // Curated 12 distinct projects with seamless aspect ratio mixing
  // ============================================================================
  const showcaseVideos: ShowcaseVideoItem[] = [
    { 
      id: "reel-01",
      vimeoId: "1229475646", 
      aspect: "9:16",
      formatLabel: "Short-Form · 9:16",
      tag: "01 / CONVERSION", 
      title: "High Energy Conversion Cuts",
      author: "Via Masi",
      authorRole: "Creator & Agency Founder",
      company: "VIAMASI MEDIA",
      metric: "+210% Inbound Inbox",
      thumbnail: "/thumbnails/1229475646.jpg",
      avatar: "/clients/via_masi.jpg"
    },
    { 
      id: "reel-02",
      vimeoId: "1212585180", 
      aspect: "9:16",
      formatLabel: "Short-Form · 9:16",
      tag: "02 / PACING", 
      title: "Motion Pacing & Dynamic Cuts",
      author: "Vlady",
      authorRole: "Digital Course Creator & Brand",
      company: "VLADY OFFICIAL",
      metric: "3.2x Product Sales",
      thumbnail: "/thumbnails/1212585180.jpg",
      avatar: "/clients/vlady.jpg"
    },
    { 
      id: "wide-01",
      vimeoId: "1234323889", 
      aspect: "16:9",
      formatLabel: "Commercial Narrative · 16:9",
      tag: "03 / COMMERCIAL 16:9", 
      title: "Commercial Brand Narrative & Motion Systems",
      author: "Northbound Media",
      authorRole: "Growth Marketing Agency",
      company: "NORTHBOUND MEDIA",
      metric: "+340% Pipeline Calls",
      thumbnail: "/thumbnails/1234323889.jpg",
      avatar: "/clients/bryce_haddock.jpg"
    },
    { 
      id: "reel-03",
      vimeoId: "1229475645", 
      aspect: "9:16",
      formatLabel: "Short-Form · 9:16",
      tag: "04 / HOOK ENGINE", 
      title: "Visual Hook & Retention Architecture",
      author: "Online Coach & Creator",
      authorRole: "Fitness & Lifestyle Founder",
      company: "COACHING ECOSYSTEM",
      metric: "+195% Watch Time",
      thumbnail: "/thumbnails/1229475645.jpg",
      avatar: "/clients/vlady.jpg"
    },
    { 
      id: "reel-04",
      vimeoId: "1229475642", 
      aspect: "9:16",
      formatLabel: "Short-Form · 9:16",
      tag: "05 / KINETIC PACING", 
      title: "Dynamic Pattern Interrupt & Motion",
      author: "Executive Brand",
      authorRole: "Venture Advisor & Founder",
      company: "GROWTH SYSTEMS",
      metric: "3.8x Engagement Lift",
      thumbnail: "/thumbnails/1229475642.jpg",
      avatar: "/clients/raul_ocana.jpg"
    },
    { 
      id: "reel-05",
      vimeoId: "1212585217", 
      aspect: "9:16",
      formatLabel: "Short-Form · 9:16",
      tag: "06 / BRANDING", 
      title: "Brand Identity & Aesthetics",
      author: "CreateMore",
      authorRole: "Creative Agency & Studio",
      company: "CREATEMORE",
      metric: "84% 5S Retention",
      thumbnail: "/thumbnails/1212585217.jpg",
      avatar: "/clients/bryce_haddock.jpg"
    },
    { 
      id: "wide-02",
      vimeoId: "1234323845", 
      aspect: "16:9",
      formatLabel: "VSL Direct Response · 16:9",
      tag: "07 / HIGH TICKET VSL", 
      title: "High Ticket VSL Architecture & Editorial",
      author: "Eugene Fomin",
      authorRole: "Founder, Booster.LLC",
      company: "BOOSTER.LLC",
      metric: "4.5x Organic Views",
      thumbnail: "/thumbnails/1234323845.jpg",
      avatar: "/clients/eugene_fomin.jpg"
    },
    { 
      id: "reel-06",
      vimeoId: "1212585328", 
      aspect: "9:16",
      formatLabel: "Short-Form · 9:16",
      tag: "08 / STORYTELLING", 
      title: "Cinematic Visual Storytelling",
      author: "Kaleemix",
      authorRole: "B2B Media Agency Founder",
      company: "KALEEMIX MEDIA",
      metric: "1.8M Monthly Views",
      thumbnail: "/thumbnails/1212585328.jpg",
      avatar: "/clients/kaleemix.jpg"
    },
    { 
      id: "reel-07",
      vimeoId: "1190211907", 
      aspect: "9:16",
      formatLabel: "Short-Form · 9:16",
      tag: "09 / RETENTION", 
      title: "Hook Mechanics & SFX Architecture",
      author: "Raul Ocana",
      authorRole: "Commercial Producer",
      company: "CREATIVE PRODUCTION",
      metric: "1.4M Organic Reach",
      thumbnail: "/thumbnails/1190211907.jpg",
      avatar: "/clients/raul_ocana.jpg"
    },
    { 
      id: "reel-08",
      vimeoId: "1185563238", 
      aspect: "9:16",
      formatLabel: "Short-Form · 9:16",
      tag: "10 / COLOR GRADE", 
      title: "Rec.709 Studio Color Calibration",
      author: "Chali Weerakkody",
      authorRole: "Founder, Editoz Club",
      company: "EDITOZ CLUB",
      metric: "2.4x Brand Authority",
      thumbnail: "/thumbnails/1185563238.jpg",
      avatar: "/clients/chali_weerakkody.jpg"
    },
    { 
      id: "reel-09",
      vimeoId: "1234323872", 
      aspect: "9:16",
      formatLabel: "Short-Form · 9:16",
      tag: "11 / APP RETENTION", 
      title: "Visual Pacing & Viral Retention",
      author: "The Brainrot App",
      authorRole: "Consumer Tech App",
      company: "THE BRAINROT APP",
      metric: "+1.2M Organic App Views",
      thumbnail: "/thumbnails/1234323872.jpg",
      avatar: "/clients/yoni_smolyar.jpg"
    },
    { 
      id: "reel-10",
      vimeoId: "1234323843", 
      aspect: "9:16",
      formatLabel: "Short-Form · 9:16",
      tag: "12 / DIRECT RESPONSE", 
      title: "High Energy Direct Response Cut",
      author: "Fitness Híbrido",
      authorRole: "Fitness Brand & Coaching",
      company: "FITNESS HÍBRIDO",
      metric: "1.4M Organic Reach",
      thumbnail: "/thumbnails/1234323843.jpg",
      avatar: "/clients/raul_ocana.jpg"
    }
  ];

  // Row 1 & Row 2 sequences for Dual-Row Opposite Auto-Scrolling Marquee
  // Disperse the 3 white mockup cards to the outer edges/sides ("dạt ra 2 bên") so they never cluster together
  const row1List = [
    showcaseVideos[0],  // reel-01 (Via Masi - Dark)
    showcaseVideos[2],  // wide-01 (Northbound Media - 16:9 Landscape Center Anchor)
    showcaseVideos[3],  // reel-03 (Coaching Ecosystem - Dark)
    showcaseVideos[4],  // reel-04 (Growth Systems - Dark)
    showcaseVideos[10], // reel-09 (The Brainrot App - Dark)
    showcaseVideos[1],  // reel-02 (Vlady - White Mockup Card A, pushed to far outer edge)
  ];

  const row2List = [
    showcaseVideos[5],  // reel-05 (CreateMore - White Mockup Card B, pushed to far left edge)
    showcaseVideos[7],  // reel-06 (Kaleemix Media - Dark)
    showcaseVideos[6],  // wide-02 (Booster.LLC - 16:9 Landscape Center Anchor)
    showcaseVideos[8],  // reel-07 (Raul Ocana - Dark)
    showcaseVideos[11], // reel-10 (Fitness Híbrido - Dark)
    showcaseVideos[9],  // reel-08 (Chali / Editoz - White Mockup Card C, pushed to far right edge)
  ];

  const row1Videos = [...row1List, ...row1List];
  const row2Videos = [...row2List, ...row2List];

  // Lightbox keyboard navigation (ESC to close, Left/Right arrows to switch)
  useEffect(() => {
    if (!lightboxVideo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxVideo(null);
      } else if (e.key === 'ArrowRight') {
        const idx = showcaseVideos.findIndex((v) => v.id === lightboxVideo.id);
        const nextIdx = (idx + 1) % showcaseVideos.length;
        setLightboxVideo(showcaseVideos[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const idx = showcaseVideos.findIndex((v) => v.id === lightboxVideo.id);
        const prevIdx = (idx - 1 + showcaseVideos.length) % showcaseVideos.length;
        setLightboxVideo(showcaseVideos[prevIdx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxVideo]);

  const filteredVideos = showcaseVideos.filter(v => 
    v.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    v.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.formatLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedGridVideos = showAllVideos ? filteredVideos : filteredVideos.slice(0, 8);

  // AUTHENTIC CLIENT REVIEWS (NATURAL HUMAN FEEDBACK, ZERO AI SLOP, BALANCED 4.5 & 5.0 STARS)
  const clientReviews = [
    {
      name: "Yoni Smolyar",
      handle: "@yoniman.mp4",
      role: "Founder, The Brainrot App",
      avatar: "/clients/yoni_smolyar.jpg",
      metric: "+1.2M Organic App Views",
      comment: "Dumped raw product demos on Drive and Thomas turned them into hooks that genuinely stopped people from scrolling. Our app downloads spiked within the first week of posting the new series. He just gets short-form pacing.",
      stars: 5,
      location: "United States"
    },
    {
      name: "Bryce Haddock",
      handle: "@northboundmedia",
      role: "Founder, Northbound Media",
      avatar: "/clients/bryce_haddock.jpg",
      metric: "+340% Pipeline Calls",
      comment: "Turnaround is fast and he doesn't need constant hand-holding on revisions. We tested his cuts against our old agency reels and inbound calls picked up almost immediately. Minor caption tweaks on V1, but V2 was perfect.",
      stars: 4.5,
      location: "United States"
    },
    {
      name: "James Masi",
      handle: "@via.masi",
      role: "Founder, Via Masi Productions",
      avatar: "/clients/via_masi.jpg",
      metric: "+210% Inbound Inbox",
      comment: "Honestly one of the few editors who understands story flow instead of just spamming flashy zooms. Sent him a batch of raw talking head clips and every single hook felt intentional. Saved our team dozens of hours.",
      stars: 5,
      location: "United States"
    },
    {
      name: "Kaleem Iqbal Hashmi",
      handle: "@kaleemix",
      role: "Founder, Kaleemix Media",
      avatar: "/clients/kaleemix.jpg",
      metric: "1.8M Monthly Views",
      comment: "Thomas has great creative instincts. He knows when to let a moment breathe and when to speed up the cut. Our clients constantly ask who edits our social clips. Super communicative on Slack too.",
      stars: 5,
      location: "United Kingdom"
    },
    {
      name: "Raul Ocana",
      handle: "@raulteentrena",
      role: "Fitness Coach & Personal Brand",
      avatar: "/clients/raul_ocana.jpg",
      metric: "1.4M Organic Reach",
      comment: "My retention graph on Instagram Reels completely changed after Thomas took over the editing. He finds the right b-roll without me having to script every second. 48 hour delivery is real.",
      stars: 4.5,
      location: "Spain"
    },
    {
      name: "Eugene Fomin",
      handle: "@fomineugeneofficial",
      role: "Founder, Booster.LLC",
      avatar: "/clients/eugene_fomin.jpg",
      metric: "4.5x Organic Views",
      comment: "Solid sound design and rhythm. What impressed me most was how quickly he understood our audience tone. Didn't have to explain basic concepts twice. Easily our best freelance hire this year.",
      stars: 5,
      location: "Global"
    },
    {
      name: "Vlady",
      handle: "@vladyography",
      role: "Filmmaker & Content Creator",
      avatar: "/clients/vlady.jpg",
      metric: "3.2x Product Sales",
      comment: "As a creator myself I'm very picky with audio leveling and color grade. Thomas surprised me with the first draft quality. Helped us sell out our digital cohort without running paid ads.",
      stars: 4.5,
      location: "Global"
    },
    {
      name: "Chali Weerakkody",
      handle: "@editozclub",
      role: "Founder, Editoz Club",
      avatar: "/clients/chali_weerakkody.jpg",
      metric: "3.8x Engagement Lift",
      comment: "No template slop or recycled presets. Custom motion elements and clean sound effects that match the brand identity. Engagement and comments doubled on our recent series.",
      stars: 4.5,
      location: "United Kingdom"
    }
  ];

  const marqueeReviewsRow1 = [...clientReviews, ...clientReviews];
  const marqueeReviewsRow2 = [...clientReviews.slice().reverse(), ...clientReviews.slice().reverse()];

  // 10 OFFICIAL CLIENT & PARTNER BRANDS (ALL PURE WHITE FILL)
  const brandList = [
    {
      name: "Fitness Hibrido",
      src: "/brands/fitness_hibrido_white.png",
      href: "https://fitnesshibrido.com/",
      hClass: "h-5 sm:h-6"
    },
    {
      name: "Kaleemix Media",
      src: "/brands/kaleemix_white.png",
      href: "https://kaleemix.com/",
      hClass: "h-4 sm:h-5"
    },
    {
      name: "Northbound Media",
      src: "/brands/northbound_media_white.png",
      href: "https://goingnorthbound.com/",
      hClass: "h-4.5 sm:h-5.5"
    },
    {
      name: "Wizlo",
      src: "/brands/wizlo_white.svg",
      href: "https://www.wizlo.com/",
      hClass: "h-5 sm:h-6"
    },
    {
      name: "Editoz Club",
      src: "/brands/editoz_club_white.png",
      href: "https://editozclub.com/",
      hClass: "h-4 sm:h-5"
    },
    {
      name: "Via Masi",
      src: "/brands/viamasi_white.svg",
      href: "https://www.viamasi.com/",
      hClass: "h-3.5 sm:h-4.5"
    },
    {
      name: "SaaS Navigator",
      src: "/brands/saas_navigator_white.png",
      href: "https://saasnavigator.io/",
      hClass: "h-5 sm:h-6"
    },
    {
      name: "The Brainrot App",
      src: "/brands/brainrot_white.svg",
      href: "https://thebrainrotapp.com/",
      hClass: "h-4 sm:h-5"
    },
    {
      name: "CreateMore",
      src: "/brands/createmore_white.png",
      href: "https://www.createmore.us/",
      hClass: "h-5 sm:h-6"
    },
    {
      name: "Checkmate",
      src: "/brands/checkmate_white.svg",
      href: "https://www.itsacheckmate.com/",
      hClass: "h-5 sm:h-6"
    }
  ];

  // Duplicated for seamless infinite marquee loop
  const brandLogosRow = [...brandList, ...brandList];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f1f2f6] relative selection:bg-[#1591DC]/30 selection:text-white">
      
      {/* Subtle Atmospheric Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#1591DC]/8 to-transparent blur-[140px]"></div>
      </div>

      {/* 1. MINIMAL STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-[#07080b]/85 backdrop-blur-md border-b border-white/[0.06] px-6 md:px-12 py-3.5 flex justify-between items-center max-w-[1200px] mx-auto">
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
          <a href="#results" className="hover:text-white transition-colors">Social Proof</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#booking" className="hover:text-white transition-colors">Book Call</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleCalendlyRedirect}
            className="px-4 py-2 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 shadow-[0_2px_12px_rgba(21,145,220,0.35)] cursor-pointer"
          >
            <span>Book Call</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 space-y-24 md:space-y-32 pb-24 max-w-[1160px] mx-auto px-4 sm:px-6">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (DIRECT RESPONSE OFFER FRONT & CENTER ABOVE THE FOLD)     */}
        {/* ========================================================================= */}
        <section id="hero" className="pt-12 md:pt-18 text-center max-w-5xl mx-auto space-y-6 sm:space-y-7">
          
          {/* Target Audience & Turnaround Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1591DC]/10 border border-[#1591DC]/30 text-xs font-medium text-[#d4d6e0] backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-[11px] sm:text-xs text-white font-medium tracking-wide">For Founders, Coaches &amp; Creators</span>
            <span className="text-[#8e909a] text-[11px]">·</span>
            <span className="text-[11px] sm:text-xs font-semibold text-[#60b6ee]">48h Studio Delivery</span>
          </div>
          
          {/* Main Direct Response Offer Headline (STRICT 2-LINE LAYOUT WITH SHAPE BOX HIGHLIGHT) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] font-normal tracking-[-0.035em] leading-[1.2] max-w-5xl mx-auto text-white">
            <span className="block sm:whitespace-nowrap">
              Direct Response Video Assets
            </span>
            <span className="block mt-1 sm:mt-2 text-white/95 sm:whitespace-nowrap">
              Designed To Convert Viewers Into{" "}
              <span className="relative inline-block px-3 sm:px-4 py-0.5 sm:py-1 mx-1 rounded-xl sm:rounded-2xl bg-[#1591DC]/20 border border-[#1591DC]/70 text-[#60b6ee] shadow-[0_0_28px_rgba(21,145,220,0.35)] backdrop-blur-xs align-baseline">
                Paying Clients.
              </span>
            </span>
          </h1>

          {/* Clear Target Audience & Result Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-[#b0b3c0] leading-relaxed max-w-2xl mx-auto font-normal">
            We engineer high retention Reels, TikToks, and Video Sales Letters for <strong className="text-white font-medium">founders, executive coaches, and personal brands</strong>. Stop losing viewers in the first 3 seconds and start turning raw footage into qualified inbound calls and product sales.
          </p>

          {/* Top-of-Page Action Buttons (CTA #1) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button 
              onClick={handleCalendlyRedirect}
              className="w-full sm:w-auto px-8 py-4 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-sm sm:text-base font-semibold rounded-full tracking-tight inline-flex items-center justify-center gap-2.5 transition-all shadow-[0_6px_28px_rgba(21,145,220,0.45)] hover:shadow-[0_8px_36px_rgba(21,145,220,0.65)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Book a 15 Min Strategy Call</span>
              <ArrowRight size={16} />
            </button>

            <a 
              href="#work"
              className="w-full sm:w-auto px-6 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] text-[#d4d6e0] hover:text-white text-sm sm:text-base font-medium rounded-full tracking-tight inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Watch Client Results ↓</span>
            </a>
          </div>

          {/* Highlighted Social Proof Metrics Bar */}
          <div className="relative pt-8 sm:pt-12 pb-2 max-w-3xl mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[640px] h-[120px] bg-[#1591DC]/15 blur-[65px] rounded-full pointer-events-none -z-10" />

            <div className="relative rounded-2xl bg-[#0b0d13]/80 border border-white/[0.1] backdrop-blur-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#60b6ee]/60 to-transparent" />

              <div className="grid grid-cols-3 divide-x divide-white/[0.08] py-4 sm:py-6 px-2 sm:px-4">
                <div className="text-center px-1 sm:px-2">
                  <div className="text-xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    +210<span className="text-[#1591DC]">%</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#b0b3c0] font-medium tracking-wide mt-1">
                    Inbound Inbox Lift
                  </div>
                </div>

                <div className="text-center px-1 sm:px-2">
                  <div className="text-xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    3.2<span className="text-[#1591DC]">x</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#b0b3c0] font-medium tracking-wide mt-1">
                    Client Product Sales
                  </div>
                </div>

                <div className="text-center px-1 sm:px-2">
                  <div className="text-xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    800<span className="text-[#1591DC]">+</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#b0b3c0] font-medium tracking-wide mt-1">
                    Reels Engineered
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* BRAND LOGO SLIDER (MATCH REFERENCE DESIGN: PURE WHITE, NO BOXES, DIVIDER)  */}
        {/* ========================================================================= */}
        <section className="pt-6 pb-8 text-center select-none overflow-hidden">
          {/* Centered Heading with Left & Right Horizontal Divider Rules */}
          <div className="flex items-center justify-center gap-4 max-w-4xl mx-auto px-6 mb-8">
            <div className="h-px bg-white/10 flex-1 max-w-[200px] sm:max-w-[280px]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#8e909a] font-medium shrink-0">
              Trusted by Brands Nationwide
            </span>
            <div className="h-px bg-white/10 flex-1 max-w-[200px] sm:max-w-[280px]" />
          </div>

          {/* Seamless Infinite Slider with Edge Gradient Fade */}
          <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent_0%,black_15%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_15%,black_85%,transparent_100%)]">
            <div className="animate-marquee flex items-center gap-14 sm:gap-20 md:gap-24 w-max">
              {brandLogosRow.map((b, i) => (
                <a 
                  key={`brand-${i}`} 
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center shrink-0 opacity-65 hover:opacity-100 transition-all duration-300 hover:scale-105"
                  title={b.name}
                >
                  <img 
                    src={b.src} 
                    alt={b.name} 
                    className={`${b.hClass} w-auto max-w-[150px] sm:max-w-[180px] object-contain filter brightness-0 invert`} 
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. THE GALLERY — DUAL-ROW AUTO-SCROLL SHOWCASE (9:16 & 16:9 + LIGHTBOX)   */}
        {/* ========================================================================= */}
        <section id="work" className="space-y-8 pt-4 scroll-mt-20">
          
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-xs font-semibold uppercase tracking-wider text-[#60b6ee]">
              The Gallery &middot; Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal sm:font-medium tracking-tight text-white">
              Under The <span className="text-[#1591DC]">Spotlight.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              The full collection, in motion. Hover to pause &middot; click any piece to watch full-screen with sound.
            </p>

            {/* View Switcher */}
            <div className="pt-2 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  viewMode === 'carousel' 
                    ? 'bg-white text-black font-semibold shadow' 
                    : 'bg-white/[0.04] text-[#8e909a] hover:text-white border border-white/[0.08]'
                }`}
              >
                Gallery Stream
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
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

          {/* DUAL-ROW AUTO-SCROLL GALLERY STREAM (ART-CELERATOR STYLE) */}
          {viewMode === 'carousel' && (
            <div className="gx-marquee select-none" aria-label="Selected works, auto-scrolling. Hover to pause.">
              <div className="gx-rows">
                
                {/* ROW 1: Auto-scroll Left (Mixed 9:16 & 16:9 Uniform Height) */}
                <div className="gx-track-left" role="list">
                  {row1Videos.map((video, idx) => (
                    <button
                      key={`r1-${video.id}-${idx}`}
                      type="button"
                      role="listitem"
                      onClick={() => setLightboxVideo(video)}
                      aria-label={`Play ${video.title} fullscreen`}
                      className={`group relative shrink-0 cursor-pointer overflow-hidden rounded-lg bg-black border border-white/[0.15] hover:border-[#1591DC]/85 shadow-[0_18px_48px_rgba(0,0,0,0.65)] hover:shadow-[0_24px_64px_rgba(21,145,220,0.3)] transition-all duration-300 h-[185px] sm:h-[225px] md:h-[255px] ${
                        video.aspect === '16:9' ? 'aspect-[16/9]' : 'aspect-[9/16]'
                      }`}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        loading="lazy"
                        className="w-full h-full object-cover brightness-[0.88] saturate-[0.95] group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500"
                      />

                      {/* Minimal Centered Play Button (Revealed Only on Hover) */}
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#1591DC]/90 bg-[#07080b]/55 backdrop-blur-xs text-[#60b6ee] group-hover:bg-[#1591DC] group-hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                      >
                        <Play size={16} fill="currentColor" className="ml-0.5" />
                      </span>

                      {/* Bottom Caption Overlay (Slides Up Only on Hover) */}
                      <div className="absolute inset-x-0 bottom-0 z-10 p-3.5 text-left bg-gradient-to-t from-[#050608]/95 via-[#050608]/55 to-transparent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                        <div className="text-white font-semibold text-xs sm:text-sm leading-snug truncate">
                          {video.title}
                        </div>
                        <div className="flex items-center gap-1.5 mt-1 text-[10px] uppercase tracking-[0.14em] text-[#60b6ee] font-semibold truncate">
                          <span>{video.formatLabel}</span>
                          <span className="text-white/40">&middot;</span>
                          <span className="text-white">{video.metric}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* ROW 2: Auto-scroll Right / Reverse (Mixed 9:16 & 16:9 Uniform Height) */}
                <div className="gx-track-right" role="list">
                  {row2Videos.map((video, idx) => (
                    <button
                      key={`r2-${video.id}-${idx}`}
                      type="button"
                      role="listitem"
                      onClick={() => setLightboxVideo(video)}
                      aria-label={`Play ${video.title} fullscreen`}
                      className={`group relative shrink-0 cursor-pointer overflow-hidden rounded-lg bg-black border border-white/[0.15] hover:border-[#1591DC]/85 shadow-[0_18px_48px_rgba(0,0,0,0.65)] hover:shadow-[0_24px_64px_rgba(21,145,220,0.3)] transition-all duration-300 h-[185px] sm:h-[225px] md:h-[255px] ${
                        video.aspect === '16:9' ? 'aspect-[16/9]' : 'aspect-[9/16]'
                      }`}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        loading="lazy"
                        className="w-full h-full object-cover brightness-[0.88] saturate-[0.95] group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500"
                      />

                      {/* Minimal Centered Play Button (Revealed Only on Hover) */}
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#1591DC]/90 bg-[#07080b]/55 backdrop-blur-xs text-[#60b6ee] group-hover:bg-[#1591DC] group-hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                      >
                        <Play size={16} fill="currentColor" className="ml-0.5" />
                      </span>

                      {/* Bottom Caption Overlay (Slides Up Only on Hover) */}
                      <div className="absolute inset-x-0 bottom-0 z-10 p-3.5 text-left bg-gradient-to-t from-[#050608]/95 via-[#050608]/55 to-transparent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                        <div className="text-white font-semibold text-xs sm:text-sm leading-snug truncate">
                          {video.title}
                        </div>
                        <div className="flex items-center gap-1.5 mt-1 text-[10px] uppercase tracking-[0.14em] text-[#60b6ee] font-semibold truncate">
                          <span>{video.formatLabel}</span>
                          <span className="text-white/40">&middot;</span>
                          <span className="text-white">{video.metric}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

              </div>
            </div>
          )}

          {/* GRID VIEW (ALL PROJECTS EXPLORER WITH CLEAN HOVER REVEAL & MIXED ASPECTS) */}
          {viewMode === 'grid' && (
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="flex justify-end">
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-full px-3.5 py-1.5 flex items-center gap-2.5 w-full sm:w-64 focus-within:border-[#1591DC]/60 transition-colors">
                  <Search size={13} className="text-[#8e909a]" />
                  <input 
                    type="text" 
                    placeholder="Filter 9:16 or 16:9 projects..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-xs text-white placeholder:text-[#8e909a]/60 w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
                {displayedGridVideos.map((video) => (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setLightboxVideo(video)}
                    className={`group relative w-full bg-black rounded-lg overflow-hidden border border-white/[0.14] hover:border-[#1591DC]/80 shadow-[0_18px_48px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(21,145,220,0.25)] ${
                      video.aspect === '16:9' ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[9/16]'
                    }`}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover brightness-[0.88] saturate-[0.95] group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105 transition-all duration-500" 
                    />

                    {/* Minimal Play Button (Hover Reveal) */}
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#1591DC]/90 bg-[#07080b]/55 backdrop-blur-xs text-[#60b6ee] group-hover:bg-[#1591DC] group-hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                      <Play size={17} fill="currentColor" className="ml-0.5" />
                    </span>

                    {/* Bottom Caption Slide-Up (Hover Reveal) */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-3.5 text-left bg-gradient-to-t from-[#050608]/95 via-[#050608]/55 to-transparent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                      <div className="text-white font-semibold text-xs sm:text-sm leading-snug truncate">
                        {video.title}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1 text-[10px] uppercase tracking-[0.14em] text-[#60b6ee] font-semibold truncate">
                        <span>{video.formatLabel}</span>
                        <span className="text-white/40">&middot;</span>
                        <span className="text-white">{video.metric}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {filteredVideos.length > 8 && (
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

          {/* REPEATED BOOK CALL CTA #2 (AFTER VIDEO PORTFOLIO) */}
          <div className="pt-4 max-w-3xl mx-auto">
            <div className="bg-[#0e1017] border border-[#1591DC]/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_8px_30px_rgba(21,145,220,0.12)]">
              <div className="text-center sm:text-left space-y-1">
                <div className="text-sm sm:text-base font-semibold text-white">
                  Ready to turn your raw footage into high converting video assets?
                </div>
                <div className="text-xs text-[#8e909a]">
                  Book a free 15 minute strategy call to audit your current video retention.
                </div>
              </div>
              <button 
                onClick={handleCalendlyRedirect}
                className="w-full sm:w-auto shrink-0 px-6 py-3.5 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-xs sm:text-sm font-semibold rounded-full tracking-tight inline-flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(21,145,220,0.4)] transition-all cursor-pointer"
              >
                <span>Book Call Now</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 3. CLIENT FEEDBACK & SOCIAL PROOF (BLUE RESULT BANNER UNDER CLIENT NAME)  */}
        {/* ========================================================================= */}
        <section id="results" className="space-y-8 pt-4 scroll-mt-20 overflow-hidden">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-xs font-semibold uppercase tracking-wider text-[#60b6ee]">
              Proven Client Results
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal sm:font-medium tracking-tight text-white">
              Client Feedback &amp; ROI
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              Real revenue, inbound inbox growth, and retention results from founders and creators worldwide
            </p>
          </div>

          {/* Marquee Row 1 (Left Scroll) */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#07080b] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#07080b] to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee gap-5">
              {marqueeReviewsRow1.map((rev, i) => (
                <div 
                  key={`r1-${i}`}
                  className="bg-[#0e1017] border border-white/[0.1] hover:border-[#1591DC]/50 rounded-2xl w-[350px] md:w-[400px] p-5 md:p-6 shrink-0 flex flex-col justify-between space-y-4 shadow-md select-none transition-colors"
                >
                  <div className="space-y-3.5">
                    {/* 1. Client Name & Verified Info at Top */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={rev.avatar} 
                          alt={rev.name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-[#1591DC]/50"
                        />
                        <div className="text-left">
                          <div className="flex items-center gap-1.5">
                            <span className="text-white font-semibold text-sm sm:text-base leading-tight">{rev.name}</span>
                            <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                          </div>
                          <span className="text-xs text-[#8e909a] block">{rev.role}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[1, 2, 3, 4, 5].map((s) => {
                          if (rev.stars >= s) {
                            return <Star key={s} size={13} fill="currentColor" />;
                          } else if (rev.stars >= s - 0.5) {
                            return <StarHalf key={s} size={13} fill="currentColor" />;
                          } else {
                            return <Star key={s} size={13} className="text-amber-400/30" />;
                          }
                        })}
                        <span className="text-[11px] font-semibold text-amber-400/90 ml-1">
                          {rev.stars.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    {/* 2. PROMINENT BLUE RESULT BANNER DIRECTLY BELOW CLIENT NAME */}
                    <div className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#1591DC] to-[#0f7bbd] border border-[#60b6ee]/50 shadow-[0_4px_20px_rgba(21,145,220,0.35)] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap size={16} className="text-white fill-white shrink-0" />
                        <span className="text-sm sm:text-base font-bold tracking-tight text-white uppercase">
                          {rev.metric}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white/95 bg-black/25 px-2.5 py-0.5 rounded-full">
                        Verified ROI
                      </span>
                    </div>

                    {/* 3. Clean Review Text (Zero Em-Dashes) */}
                    <p className="text-xs sm:text-sm text-[#d4d6e0] leading-relaxed text-left pt-0.5">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[11px] text-[#8e909a]">
                    <span>{rev.handle}</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 size={11} /> Verified Client
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Right / Reverse Scroll) */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#07080b] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#07080b] to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee-reverse gap-5">
              {marqueeReviewsRow2.map((rev, i) => (
                <div 
                  key={`r2-${i}`}
                  className="bg-[#0e1017] border border-white/[0.1] hover:border-[#1591DC]/50 rounded-2xl w-[350px] md:w-[400px] p-5 md:p-6 shrink-0 flex flex-col justify-between space-y-4 shadow-md select-none transition-colors"
                >
                  <div className="space-y-3.5">
                    {/* 1. Client Name & Verified Info at Top */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={rev.avatar} 
                          alt={rev.name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-[#1591DC]/50"
                        />
                        <div className="text-left">
                          <div className="flex items-center gap-1.5">
                            <span className="text-white font-semibold text-sm sm:text-base leading-tight">{rev.name}</span>
                            <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                          </div>
                          <span className="text-xs text-[#8e909a] block">{rev.role}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[1, 2, 3, 4, 5].map((s) => {
                          if (rev.stars >= s) {
                            return <Star key={s} size={13} fill="currentColor" />;
                          } else if (rev.stars >= s - 0.5) {
                            return <StarHalf key={s} size={13} fill="currentColor" />;
                          } else {
                            return <Star key={s} size={13} className="text-amber-400/30" />;
                          }
                        })}
                        <span className="text-[11px] font-semibold text-amber-400/90 ml-1">
                          {rev.stars.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    {/* 2. PROMINENT BLUE RESULT BANNER DIRECTLY BELOW CLIENT NAME */}
                    <div className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#1591DC] to-[#0f7bbd] border border-[#60b6ee]/50 shadow-[0_4px_20px_rgba(21,145,220,0.35)] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap size={16} className="text-white fill-white shrink-0" />
                        <span className="text-sm sm:text-base font-bold tracking-tight text-white uppercase">
                          {rev.metric}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white/95 bg-black/25 px-2.5 py-0.5 rounded-full">
                        Verified ROI
                      </span>
                    </div>

                    {/* 3. Clean Review Text (Zero Em-Dashes) */}
                    <p className="text-xs sm:text-sm text-[#d4d6e0] leading-relaxed text-left pt-0.5">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[11px] text-[#8e909a]">
                    <span>{rev.handle}</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 size={11} /> Verified Client
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REPEATED BOOK CALL CTA #3 (AFTER SOCIAL PROOF) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleCalendlyRedirect}
              className="w-full sm:w-auto px-8 py-4 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-sm font-semibold rounded-full tracking-tight inline-flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(21,145,220,0.4)] hover:shadow-[0_6px_32px_rgba(21,145,220,0.6)] transition-all cursor-pointer"
            >
              <span>Join 20+ High Growth Founders · Book Call</span>
              <ArrowRight size={15} />
            </button>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 4. THE 3-PHASE RETENTION ENGINE (PROPRIETARY FRAMEWORK)                   */}
        {/* ========================================================================= */}
        <section id="process" className="space-y-12 pt-6 scroll-mt-20 max-w-4xl mx-auto">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-xs font-semibold uppercase tracking-wider text-[#60b6ee]">
              The 3 Phase Retention Engine
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal sm:font-medium tracking-tight text-white">
              How We Turn Raw Footage Into Paying Clients
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed max-w-xl mx-auto">
              Most editors cut blindly without understanding drop off curves. We run every frame through a 3 phase retention framework engineered to stop the scroll, hold attention, and convert viewers into inbound leads.
            </p>
          </div>

          {/* Staggered Alternating 3-Phase Engine */}
          <div className="space-y-10 sm:space-y-14 py-4 max-w-3xl mx-auto">
            
            {/* PHASE 01: Left-Aligned */}
            <div className="flex justify-start w-full">
              <div className="flex items-start gap-4 sm:gap-6 max-w-lg md:w-[560px]">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1591DC] text-white font-medium text-sm sm:text-base flex items-center justify-center shadow-[0_0_25px_rgba(21,145,220,0.5)]">
                    01
                  </div>
                  <div className="w-px h-24 sm:h-28 border-l border-dashed border-[#1591DC]/50 mt-2.5"></div>
                </div>

                <div className="pt-0.5 text-left space-y-2">
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#60b6ee]">
                    Phase 01 · Neuro Pacing
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug">
                    Hook &amp; Neuro Pacing Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
                    Tight narrative cuts eliminating dead air, breath pauses, and hesitations within the first 3 critical seconds to lock viewers past the 5 second mark.
                  </p>
                  <div className="space-y-1 pt-1 text-xs text-[#d4d6e0]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                      <span>Zero dead air trimming (&lt;0.1s threshold)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                      <span>High contrast pattern interrupt within the first 2 seconds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                      <span>Rhythm sync preventing subconscious cognitive fatigue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 02: Right-Aligned */}
            <div className="flex justify-end w-full">
              <div className="flex items-start gap-4 sm:gap-6 max-w-lg md:w-[560px] text-right">
                <div className="pt-0.5 flex-1 space-y-2">
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#60b6ee]">
                    Phase 02 · Bespoke Visuals
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug">
                    Bespoke Motion Graphics &amp; Sound Mastery
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
                    Handcrafted keyframing in After Effects, kinetic typography, HUD accents, and multitrack audio design. Zero generic CapCut presets.
                  </p>
                  <div className="space-y-1 pt-1 text-xs text-[#d4d6e0] flex flex-col items-end">
                    <div className="flex items-center gap-2">
                      <span>100% custom kinetic typography &amp; HUD graphics</span>
                      <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Multitrack sound design (risers, whooshes, vocal punch)</span>
                      <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Visual metaphors that anchor complex ideas instantly</span>
                      <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1591DC] text-white font-medium text-sm sm:text-base flex items-center justify-center shadow-[0_0_25px_rgba(21,145,220,0.5)]">
                    02
                  </div>
                  <div className="w-px h-24 sm:h-28 border-l border-dashed border-[#1591DC]/50 mt-2.5"></div>
                </div>
              </div>
            </div>

            {/* PHASE 03: Left-Aligned */}
            <div className="flex justify-start w-full">
              <div className="flex items-start gap-4 sm:gap-6 max-w-lg md:w-[560px]">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1591DC] text-white font-medium text-sm sm:text-base flex items-center justify-center shadow-[0_0_25px_rgba(21,145,220,0.5)]">
                    03
                  </div>
                </div>

                <div className="pt-0.5 text-left space-y-2">
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#60b6ee]">
                    Phase 03 · Studio Delivery
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug">
                    4K Studio Delivery &amp; Conversion Tracking
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
                    Studio Rec.709 color grading, 4K bitrate optimization, 48 hour delivery via Frame.io, and continuous monthly ROI retention tracking.
                  </p>
                  <div className="space-y-1 pt-1 text-xs text-[#d4d6e0]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                      <span>48 hour turnaround via Frame.io timestamp review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                      <span>Calibrated Rec.709 studio color &amp; optimal 4K bitrate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#1591DC] shrink-0" />
                      <span>Retention curve analytics &amp; continuous conversion feedback</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* REPEATED BOOK CALL CTA #4 (AFTER PROCESS) */}
            <div className="pt-8 flex justify-center w-full">
              <button 
                onClick={handleCalendlyRedirect}
                className="px-8 py-4 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-xs sm:text-sm font-semibold rounded-full tracking-tight inline-flex items-center gap-2 shadow-[0_4px_24px_rgba(21,145,220,0.4)] hover:shadow-[0_6px_32px_rgba(21,145,220,0.6)] transition-all cursor-pointer"
              >
                <span>Lock In Your Retention Engine · Book Call</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SERVICES & PRICING                                                     */}
        {/* ========================================================================= */}
        <section id="pricing" className="space-y-8 pt-4 scroll-mt-20 max-w-5xl mx-auto">
          <span id="services" className="sr-only">Services &amp; Rates</span>

          {/* Rate Card Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-[11px] font-medium text-white/90">
                <img 
                  src="/thomas_portrait.jpg" 
                  alt="Thomas Nguyen" 
                  className="w-4 h-4 rounded-full object-cover grayscale contrast-125 border border-white/20" 
                />
                <span>Thomas Nguyen // Video Editor</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal sm:font-medium tracking-tight text-white">
                Services &amp; Pricing
              </h2>
              <p className="text-xs sm:text-sm text-[#8e909a]">
                Direct response video packages built for founders, coaches, and personal brands.
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-2.5 shrink-0">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#1591DC]/10 border border-[#1591DC]/30 text-[11px] font-semibold tracking-wider uppercase text-[#60b6ee]">
                SERVICES &amp; RATES
              </div>
              <div className="flex items-center gap-2 text-xs text-[#8e909a]">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="font-medium tracking-wider text-[#8e909a] text-[11px] uppercase">Accepting New Projects</span>
              </div>
            </div>
          </div>

          {/* 4 Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            
            {/* CARD 01: Short Form Standard */}
            <div className="bg-[#0b0c10] border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-[10px] font-semibold tracking-wider uppercase text-[#8e909a]">
                    STANDARD
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#8e909a]/70">01</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                    Short Form Standard
                  </h3>
                  <p className="text-xs text-[#8e909a] leading-relaxed">
                    Clean, fast paced edits for daily Reels, TikTok &amp; YouTube Shorts.
                  </p>
                </div>

                <div className="pt-2 pb-1 border-y border-white/[0.06]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-medium text-white tracking-tight">$30</span>
                    <span className="text-xs text-[#8e909a]">/ video</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-[#d4d6e0] pt-1">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#1591DC] shrink-0 stroke-[2.5]" />
                    <span>Tight micro cuts (zero dead air)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#1591DC] shrink-0 stroke-[2.5]" />
                    <span>Clean animated captions &amp; emojis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#1591DC] shrink-0 stroke-[2.5]" />
                    <span>Sound effects &amp; background music</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#1591DC] shrink-0 stroke-[2.5]" />
                    <span>48 hour delivery · 2 revisions</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setVideoType('Short Form Standard');
                    handleCalendlyRedirect();
                  }}
                  className="w-full py-3 rounded-full bg-white/[0.05] hover:bg-[#1591DC] border border-white/[0.12] hover:border-[#1591DC] text-xs font-semibold text-white tracking-tight transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Call for Standard</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* CARD 02: Short Form Premium (MOST POPULAR) */}
            <div className="relative bg-[#090d15] border border-[#1591DC]/60 hover:border-[#1591DC] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group shadow-[0_0_35px_rgba(21,145,220,0.18)] ring-1 ring-[#1591DC]/30">
              
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#1591DC] to-[#0ea5e9] text-white text-[10px] font-semibold tracking-wider uppercase shadow-[0_2px_12px_rgba(21,145,220,0.5)]">
                MOST POPULAR
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/40 text-[10px] font-semibold tracking-wider uppercase text-[#60b6ee] flex items-center gap-1">
                    <span>★</span> HIGH RETENTION
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#1591DC]">02</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                    Short Form Premium
                  </h3>
                  <p className="text-xs text-[#8e909a] leading-relaxed">
                    Custom high retention edits built to stop the scroll and build authority.
                  </p>
                </div>

                <div className="pt-2 pb-1 border-y border-[#1591DC]/20">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-medium text-[#38bdf8] tracking-tight">$50 to $70</span>
                    <span className="text-xs text-[#8e909a]">/ video</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-[#d4d6e0] pt-1">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#38bdf8] shrink-0 stroke-[2.5]" />
                    <span className="font-semibold text-white">Engineered for 85%+ 5s retention</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#38bdf8] shrink-0 stroke-[2.5]" />
                    <span>Custom After Effects motion graphics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#38bdf8] shrink-0 stroke-[2.5]" />
                    <span>Layered cinematic sound design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#38bdf8] shrink-0 stroke-[2.5]" />
                    <span>Pro color grade · Unlimited revisions</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setVideoType('Short Form Premium');
                    handleCalendlyRedirect();
                  }}
                  className="w-full py-3 rounded-full bg-[#1591DC] hover:bg-[#0f7bbd] text-xs font-semibold text-white tracking-tight transition-all flex items-center justify-center gap-1.5 shadow-[0_2px_15px_rgba(21,145,220,0.4)] cursor-pointer"
                >
                  <span>Book Call for Premium (Recommended)</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* CARD 03: Long Form Editing */}
            <div className="bg-[#0b0c10] border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-[10px] font-semibold tracking-wider uppercase text-[#8e909a]">
                    YOUTUBE / PODCAST
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#8e909a]/70">03</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                    Long Form Editing
                  </h3>
                  <p className="text-xs text-[#8e909a] leading-relaxed">
                    Engaging storytelling for YouTube videos, podcasts, and interviews.
                  </p>
                </div>

                <div className="pt-2 pb-1 border-y border-white/[0.06]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-medium text-white tracking-tight">$15</span>
                    <span className="text-xs text-[#8e909a]">/ finished minute</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-[#d4d6e0] pt-1">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#1591DC] shrink-0 stroke-[2.5]" />
                    <span>Curated B roll &amp; pattern interrupts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#1591DC] shrink-0 stroke-[2.5]" />
                    <span>Dynamic zoom cuts &amp; camera switching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#1591DC] shrink-0 stroke-[2.5]" />
                    <span>Custom chapters, titles &amp; sound mix</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#1591DC] shrink-0 stroke-[2.5]" />
                    <span>Frame.io timestamp review included</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setVideoType('Long Form Editing');
                    handleCalendlyRedirect();
                  }}
                  className="w-full py-3 rounded-full bg-white/[0.05] hover:bg-[#1591DC] border border-white/[0.12] hover:border-[#1591DC] text-xs font-semibold text-white tracking-tight transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Call for Long Form</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* CARD 04: Video Sales Letter (VSL) */}
            <div className="bg-[#0b0c10] border border-white/[0.08] hover:border-amber-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-semibold tracking-wider uppercase text-amber-400">
                    HIGH CONVERSION
                  </span>
                  <span className="text-xs font-mono font-semibold text-amber-400/80">04</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                    Video Sales Letter (VSL)
                  </h3>
                  <p className="text-xs text-[#8e909a] leading-relaxed">
                    Direct response video assets designed to convert viewers into paying clients.
                  </p>
                </div>

                <div className="pt-2 pb-1 border-y border-white/[0.06]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-medium text-white tracking-tight">$200</span>
                    <span className="text-xs text-[#8e909a]">/ video asset</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-[#d4d6e0] pt-1">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-amber-400 shrink-0 stroke-[2.5]" />
                    <span>100% custom kinetic typography</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-amber-400 shrink-0 stroke-[2.5]" />
                    <span>Story driven pacing to boost sales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-amber-400 shrink-0 stroke-[2.5]" />
                    <span>Custom graphics &amp; visual metaphors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-amber-400 shrink-0 stroke-[2.5]" />
                    <span>Full commercial audio &amp; SFX mix</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setVideoType('Video Sales Letter (VSL)');
                    handleCalendlyRedirect();
                  }}
                  className="w-full py-3 rounded-full bg-white/[0.05] hover:bg-[#1591DC] border border-white/[0.12] hover:border-[#1591DC] text-xs font-semibold text-white tracking-tight transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Call for VSL</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom 3-Pillar Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-[#0b0c10] border border-white/[0.06] rounded-xl py-3.5 px-4 text-center">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8e909a] font-medium">DELIVERY</div>
              <div className="text-xs sm:text-sm font-medium text-white mt-0.5">48 Hours Fast</div>
            </div>
            <div className="bg-[#0b0c10] border border-[#1591DC]/30 rounded-xl py-3.5 px-4 text-center">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8e909a] font-medium">REVISIONS</div>
              <div className="text-xs sm:text-sm font-medium text-[#38bdf8] mt-0.5">Frame.io Accurate</div>
            </div>
            <div className="bg-[#0b0c10] border border-white/[0.06] rounded-xl py-3.5 px-4 text-center">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8e909a] font-medium">QUALITY</div>
              <div className="text-xs sm:text-sm font-medium text-white mt-0.5">4K Rec.709 Color</div>
            </div>
          </div>

          {/* REPEATED BOOK CALL CTA #5 (BOTTOM OF PRICING) */}
          <div className="bg-[#0e1017] border border-[#1591DC]/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_8px_30px_rgba(21,145,220,0.12)]">
            <div className="text-center sm:text-left space-y-0.5">
              <div className="text-xs text-[#60b6ee] font-semibold uppercase tracking-wider">Custom Monthly Retainers Available</div>
              <div className="text-sm sm:text-base font-medium text-white tracking-tight">Need a dedicated editing partner for 15 to 30 videos per month?</div>
            </div>
            <button
              onClick={handleCalendlyRedirect}
              className="w-full sm:w-auto shrink-0 px-7 py-3.5 rounded-full bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-xs sm:text-sm font-semibold tracking-tight shadow-[0_4px_24px_rgba(21,145,220,0.45)] hover:shadow-[0_6px_32px_rgba(21,145,220,0.65)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>BOOK A CALL / ORDER SAMPLE</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. FOUNDER STORY (AUTHENTIC PORTRAIT & TRENCHES CRAFTSMANSHIP)            */}
        {/* ========================================================================= */}
        <section id="about" className="pt-4 scroll-mt-20 max-w-[880px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            <div className="shrink-0 w-full md:w-[280px] flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0b0c10] shadow-2xl">
                <img 
                  src="/thomas_portrait.jpg" 
                  alt="Thomas Nguyen" 
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </div>

            <div className="space-y-4 text-left flex-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#1591DC]/10 border border-[#1591DC]/30 text-[11px] font-semibold uppercase tracking-wider text-[#60b6ee]">
                Behind The Craft
              </div>

              <h2 className="text-2xl sm:text-3xl font-normal sm:font-medium tracking-tight text-white leading-tight">
                3 Years in the Trenches. 800+ Reels Crafted Frame by Frame.
              </h2>

              <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
                Hi, I'm Thomas. I am a visual retention strategist and direct response video editor partnering with founders, executive coaches, and creators worldwide.
              </p>

              <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
                I spent 3 years in the editing trenches, analyzing viewer drop off curves at 2 a.m. and testing hundreds of hook variations. I realized most creators lose 60% of their audience in the first 3 seconds not because their message is bad, but because generic editing kills momentum.
              </p>

              <p className="text-xs sm:text-sm text-[#8e909a] leading-relaxed">
                I don't use generic CapCut presets or flashy filler. I treat every video as a direct response video asset designed to convert. Every cut, sound effect, and motion graphic is engineered to turn passive scrollers into paying clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-[#d4d6e0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#1591DC] shrink-0" />
                  <span>800+ Reels crafted frame by frame</span>
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

              {/* REPEATED BOOK CALL CTA #6 (IN ABOUT SECTION) */}
              <div className="pt-3">
                <button 
                  onClick={handleCalendlyRedirect}
                  className="px-7 py-3.5 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-xs sm:text-sm font-semibold rounded-full tracking-tight inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(21,145,220,0.4)] transition-all cursor-pointer"
                >
                  <span>Book a 15 Min Strategy Call</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. DIRECT BOOKING SECTION (CALENDLY + INQUIRY FORM)                       */}
        {/* ========================================================================= */}
        <section id="booking" className="space-y-6 pt-4 max-w-3xl mx-auto scroll-mt-20">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-xs font-semibold uppercase tracking-wider text-[#60b6ee]">
              Direct Onboarding
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal sm:font-medium tracking-tight text-white">
              Schedule Your 15 Minute Strategy Call
            </h2>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              Lock in your onboarding slot and review your channel retention plan directly with Thomas.
            </p>

            {/* Switcher Tabs */}
            <div className="pt-4 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setBookingTab('calendly')}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  bookingTab === 'calendly'
                    ? 'bg-[#1591DC] text-white shadow-[0_2px_12px_rgba(21,145,220,0.4)]'
                    : 'bg-white/[0.03] border border-white/[0.08] text-[#8e909a] hover:text-white'
                }`}
              >
                Book Call on Calendar
              </button>
              <button
                type="button"
                onClick={() => setBookingTab('form')}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  bookingTab === 'form'
                    ? 'bg-[#1591DC] text-white shadow-[0_2px_12px_rgba(21,145,220,0.4)]'
                    : 'bg-white/[0.03] border border-white/[0.08] text-[#8e909a] hover:text-white'
                }`}
              >
                Send Direct Inquiry
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
                <span>100% Free 15 Min Strategy Session · No Sales Pressure</span>
                <a 
                  href={calendlyBookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#60b6ee] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open Calendar in New Tab</span>
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
                    {['Short Form Standard', 'Short Form Premium', 'Long Form Editing', 'Video Sales Letter (VSL)'].map(type => (
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
                    {['Under $500', '$500 to $1,000', '$1,000 to $2,000', '$2,000+'].map(b => (
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
                  className="w-full py-3 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-xs font-semibold rounded-full tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-colors"
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
        {/* 8. FAQ                                                                    */}
        {/* ========================================================================= */}
        <section id="faq" className="space-y-6 pt-4 scroll-mt-20">
          <div className="text-center space-y-1 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-normal sm:font-medium tracking-tight text-white">
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
                a: "Most freelance editors simply trim clips and add random template presets. We operate as direct response conversion partners, engineering hook retention in the first 3 seconds, custom keyframing After Effects graphics, and crafting pacing that guides the viewer directly toward your offer."
              },
              {
                q: "How does your 100% money back guarantee work?",
                a: "It is an ironclad commitment. We set explicit view and retention targets prior to kickoff. If we do not hit those benchmarks within the 90 day window, you receive a full refund with zero friction and no awkward questions asked."
              },
              {
                q: "How fast is the delivery turnaround?",
                a: "Our standard turnaround time is 48 hours per video. For high volume partners or urgent campaign deadlines, we also offer 24 hour expedited delivery."
              },
              {
                q: "How do we collaborate and send footage?",
                a: "We set up a dedicated Frame.io project workspace and shared Google Drive or Dropbox for you. You drop in your raw files, and you can leave frame accurate timestamp feedback directly on the video."
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

        {/* ========================================================================= */}
        {/* 9. FINAL GRAND SLAM OFFER (END-OF-PAGE BOOK CALL CTA #7)                  */}
        {/* ========================================================================= */}
        <section className="pt-12 pb-6 scroll-mt-20 text-center max-w-4xl mx-auto space-y-7 border-t border-white/[0.06]">
          
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-xs font-semibold uppercase tracking-wider text-[#60b6ee]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>48 Hour Turnaround · Frame.io Review</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-[-0.035em] leading-[1.12] max-w-4xl mx-auto [text-wrap:balance] text-white">
            <span className="block">Direct Response Video Assets</span>
            <span className="block mt-1 sm:mt-1.5 text-white/95">
              Designed To Convert Viewers Into <span className="text-[#1591DC]">Paying Clients.</span>
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#b0b3c0] leading-relaxed max-w-xl mx-auto font-normal">
            Scale your personal brand with engineered video retention systems. Handcrafted neuro pacing, bespoke After Effects motion, and 48 hour studio delivery.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={handleCalendlyRedirect}
              className="px-8 py-4 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-sm sm:text-base font-semibold rounded-full tracking-tight inline-flex items-center gap-2.5 shadow-[0_6px_30px_rgba(21,145,220,0.45)] hover:shadow-[0_8px_40px_rgba(21,145,220,0.65)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Book a 15 Min Strategy Call</span>
              <ArrowRight size={17} />
            </button>

            <a 
              href="#work"
              className="px-6 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-white text-sm sm:text-base font-medium rounded-full tracking-tight inline-flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Watch Client Results ↑</span>
            </a>
          </div>

          {/* Overlapping Client Avatars & Social Proof */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
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
                src="/clients/eugene_fomin.jpg" 
                alt="Eugene Fomin" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-[#07080b]" 
              />
              <img 
                src="/clients/kaleemix.jpg" 
                alt="Kaleemix" 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-[#07080b]" 
              />
            </div>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              Trusted by <strong className="text-white font-medium">Via Masi (+210% Inbox)</strong>, <strong className="text-white font-medium">Vlady (3.2x Sales)</strong>, <strong className="text-white font-medium">Eugene Fomin (4.5x Views)</strong>, and 20+ founders worldwide.
            </p>
          </div>

        </section>

      </main>

      {/* FOOTER */}
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
              title="X"
            >
              <XLogo size={11} />
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

      {/* FULLSCREEN CINEMA LIGHTBOX MODAL (9:16 & 16:9 SUPPORT + SOUND) */}
      {lightboxVideo && (
        <div
          id="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxVideo.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxVideo(null);
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050608]/95 backdrop-blur-md p-4 sm:p-6"
        >
          {/* Top Right Close Button */}
          <button
            type="button"
            onClick={() => setLightboxVideo(null)}
            aria-label="Close video lightbox"
            className="absolute top-4 right-4 sm:top-6 sm:right-7 z-50 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-[#1591DC] border border-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>

          {/* Previous Video Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const idx = showcaseVideos.findIndex((v) => v.id === lightboxVideo.id);
              const prevIdx = (idx - 1 + showcaseVideos.length) % showcaseVideos.length;
              setLightboxVideo(showcaseVideos[prevIdx]);
            }}
            aria-label="Previous piece"
            className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/[0.06] hover:bg-[#1591DC] border border-white/15 text-white items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Next Video Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const idx = showcaseVideos.findIndex((v) => v.id === lightboxVideo.id);
              const nextIdx = (idx + 1) % showcaseVideos.length;
              setLightboxVideo(showcaseVideos[nextIdx]);
            }}
            aria-label="Next piece"
            className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/[0.06] hover:bg-[#1591DC] border border-white/15 text-white items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowRight size={18} />
          </button>

          {/* Video Container Adapting to 9:16 Portrait or 16:9 Landscape */}
          <div
            className={`relative bg-black rounded-lg overflow-hidden border border-[#1591DC]/50 shadow-[0_40px_120px_rgba(0,0,0,0.85)] ${
              lightboxVideo.aspect === '16:9'
                ? 'w-[min(92vw,960px)] aspect-[16/9]'
                : 'h-[min(78vh,720px)] aspect-[9/16]'
            }`}
          >
            <iframe
              key={lightboxVideo.vimeoId}
              src={`https://player.vimeo.com/video/${lightboxVideo.vimeoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`}
              className="w-full h-full object-cover"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={lightboxVideo.title}
            />
          </div>

          {/* Bottom Caption & CTA Strip inside Lightbox */}
          <div className="mt-4 w-[min(92vw,680px)] flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#0e1017]/90 border border-white/10">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={lightboxVideo.avatar}
                alt={lightboxVideo.author}
                className="w-9 h-9 rounded-full object-cover border border-[#1591DC]/50 shrink-0"
              />
              <div className="text-left min-w-0">
                <div className="text-xs sm:text-sm font-semibold text-white truncate">
                  {lightboxVideo.title}
                </div>
                <div className="text-[11px] text-[#8e909a] truncate">
                  {lightboxVideo.author} &middot; <span className="text-[#60b6ee] font-semibold">{lightboxVideo.formatLabel}</span> &middot; <span className="text-white font-semibold">{lightboxVideo.metric}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCalendlyRedirect}
              className="shrink-0 px-4 py-2 bg-[#1591DC] hover:bg-[#0f7bbd] text-white text-xs font-semibold rounded-full inline-flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Book Call</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
