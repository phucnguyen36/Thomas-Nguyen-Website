import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  ArrowUpRight, 
  CheckCircle2, 
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
      
      {/* 1. HOST & CALL DETAILS HEADER (100% SWISS MONOCHROME CLEAN) */}
      <div className="p-4 sm:p-5 border-b border-white/[0.08] bg-[#0c0d12] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="relative shrink-0">
            <img 
              src="/thomas_portrait.jpg" 
              alt="Thomas Nguyen" 
              className="w-12 h-12 rounded-full object-cover border border-white/10"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0c0d12]" title="Available for onboarding" />
          </div>
          <div className="space-y-0.5 text-left">
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-semibold text-white tracking-tight">Thomas Nguyen</span>
              <span className="text-xs text-[#8e909a]">· Visual Retention Strategist</span>
            </div>
            <p className="text-xs text-[#8e909a]">
              15-Minute Channel Strategy Call · 1-on-1 via Google Meet
            </p>
          </div>
        </div>

        {/* Quick meta indicators */}
        <div className="flex items-center gap-2 text-xs text-[#8e909a]">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-neutral-300">
            <Clock size={12} className="text-[#8e909a]" />
            <span>15 Mins</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-neutral-300">
            <Video size={12} className="text-[#8e909a]" />
            <span>Google Meet</span>
          </div>
          <button
            onClick={openCalendlyPopup}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-neutral-300 hover:text-white transition-colors cursor-pointer text-xs"
            title="Expand into full-screen modal"
          >
            <Maximize2 size={11} className="text-[#8e909a]" />
            <span>Popup</span>
          </button>
        </div>
      </div>

      {/* 2. REAL CALENDLY LIVE BOOKING SCHEDULER */}
      <div className="relative bg-white min-h-[660px] sm:min-h-[700px] w-full">
        {isLoading && (
          <div className="absolute inset-0 bg-[#0c0d12] z-10 flex flex-col items-center justify-center gap-3 text-white">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
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
      <div className="px-5 py-3 bg-[#0c0d12] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#8e909a]">
        <div className="flex items-center gap-2">
          <ShieldCheck size={13} className="text-[#8e909a] shrink-0" />
          <span>100% Free Consultation · Real-time Calendar Sync · Instant Google Meet invite</span>
        </div>
        <a
          href={directCalendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors font-medium shrink-0"
        >
          <span>Open in Calendly Tab</span>
          <ArrowUpRight size={12} className="text-[#8e909a]" />
        </a>
      </div>

    </div>
  );
}
