import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Maximize2
} from 'lucide-react';

interface BookingCalendarProps {
  className?: string;
}

export default function BookingCalendar({ className = '' }: BookingCalendarProps) {
  const [isLoading, setIsLoading] = useState(true);
  const calendlyUrl = "https://calendly.com/thomasvisualeditor/30min?embed_domain=thomasnguyen.online&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1";
  const directCalendlyLink = "https://calendly.com/thomasvisualeditor/30min";

  useEffect(() => {
    // Listen for Calendly event scheduled
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.event && typeof e.data.event === 'string' && e.data.event.indexOf('calendly') !== -1) {
        setIsLoading(false);
      }
    };

    window.addEventListener('message', handleMessage);
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timer);
    };
  }, []);

  const openCalendlyPopup = () => {
    // If Calendly script loaded, open popup, else open new tab
    if (typeof (window as any).Calendly !== 'undefined') {
      (window as any).Calendly.initPopupWidget({ url: directCalendlyLink });
    } else {
      window.open(directCalendlyLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto bg-[#0c0d12] border border-white/[0.08] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${className}`}>
      
      {/* 1. HOST & CALL DETAILS HEADER (100% SWISS DARK THEME) */}
      <div className="p-5 sm:p-7 border-b border-white/[0.06] bg-[#090c14] flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <img 
              src="/thomas_portrait.jpg" 
              alt="Thomas Nguyen" 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/10 shadow-lg"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#090c14]" title="Available for onboarding" />
          </div>
          <div className="space-y-1 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-base sm:text-lg font-semibold text-white tracking-tight">Thomas Nguyen</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#1591DC]/15 border border-[#1591DC]/30 text-[10px] font-semibold uppercase tracking-wider text-[#60b6ee]">
                Visual Strategist
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-medium text-emerald-400">
                1 Retainer Slot Open
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8e909a]">
              15-Minute Channel Strategy Call · 1-on-1 via Google Meet
            </p>
          </div>
        </div>

        {/* Quick meta indicators */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#8e909a] pt-1 md:pt-0">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <Clock size={13} className="text-[#1591DC]" />
            <span className="text-white font-medium">15 Mins</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <Video size={13} className="text-emerald-400" />
            <span className="text-white font-medium">Google Meet</span>
          </div>
          <button
            onClick={openCalendlyPopup}
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1591DC]/10 hover:bg-[#1591DC]/20 border border-[#1591DC]/30 text-[#60b6ee] transition-all cursor-pointer font-medium"
            title="Expand into full-screen modal"
          >
            <Maximize2 size={12} />
            <span className="hidden sm:inline">Popup View</span>
          </button>
        </div>
      </div>

      {/* 2. REAL CALENDLY LIVE BOOKING SCHEDULER */}
      <div className="relative bg-white min-h-[660px] sm:min-h-[700px] w-full">
        {isLoading && (
          <div className="absolute inset-0 bg-[#0c0d12] z-10 flex flex-col items-center justify-center gap-3 text-white">
            <div className="w-8 h-8 border-2 border-[#1591DC] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs text-[#8e909a]">Connecting to live calendar availability...</span>
          </div>
        )}
        <iframe
          src={calendlyUrl}
          title="Direct Calendly Booking with Thomas Nguyen"
          className="w-full h-[660px] sm:h-[700px] border-0"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* 3. FOOTER TRUST & DIRECT LINK BAR */}
      <div className="px-5 py-3.5 sm:px-7 sm:py-4 bg-[#090c14] border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8e909a]">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
          <span>100% Free Consultation · Real-time Calendar Sync · Instant Google Meet invite</span>
        </div>
        <a
          href={directCalendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#60b6ee] hover:text-white transition-colors font-medium shrink-0"
        >
          <span>Open in Calendly Tab</span>
          <ArrowUpRight size={13} />
        </a>
      </div>

    </div>
  );
}
