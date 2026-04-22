import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: '50vw', y: '50vh' });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: `${e.clientX}px`,
        y: `${e.clientY}px`
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // System Pillars Data
  const pillars = [
    {
      title: "Retention Pacing",
      description: "Neuro-editing techniques to eliminate dead air and force continuous attention.",
    },
    {
      title: "Premium Animation",
      description: "Bespoke After Effects motion graphics and custom transitions that elevate brand perceived value.",
    },
    {
      title: "AI Visual Assets",
      description: "Exclusive prompt-engineered B-roll using Midjourney and Sora to replace generic stock footage.",
    },
    {
      title: "Sound Architecture",
      description: "Multi-layered SFX design engineered to anchor subconscious engagement.",
    }
  ];

  // Shorts Category Tags
  // LƯU Ý GẮN VIDEO: 
  // Bạn có thể thêm đường link video (MP4) vào thuộc tính `videoUrl` trống bên dưới cho từng thẻ.
  const shortsData = [
    { id: 1, category: "Video 01", videoUrl: "1185562813" },
    { id: 2, category: "Video 02", videoUrl: "1185562812" },
    { id: 3, category: "Video 03", videoUrl: "1185562961" },
    { id: 4, category: "Video 04", videoUrl: "1185562977" },
    { id: 5, category: "Video 05", videoUrl: "1185563164" },
    { id: 6, category: "Video 06", videoUrl: "1185563238" },
    { id: 7, category: "Video 07", videoUrl: "1185563258" },
    { id: 8, category: "Video 08", videoUrl: "1185563389" },
  ];

  return (
    <div 
      className="min-h-screen text-primary selection:bg-white selection:text-black font-sans"
      style={{
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y
      } as React.CSSProperties}
    >
      <div className="glow-effect"></div>
      <div className="noise-overlay"></div>

      <main className="relative z-10 w-full overflow-hidden">
        
        {/* 1. HERO SECTION */}
        <section className="relative h-[100dvh] flex flex-col items-center justify-center text-center px-4 md:px-8">
          
          {/* ẢNH HẬU TRƯỜNG/CHÂN DUNG PHÍA SAU (Giữ nguyên ảnh gốc, thêm viền Vignette hòa trộn) */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img 
              src="https://www.image2url.com/r2/default/images/1776507258412-0e509822-f3f0-4816-bd81-eb19ce697c6f.jpeg" 
              alt="Thomas Nguyen"
              className="absolute w-full h-full object-cover object-[30%_0%] md:object-[20%_10%] opacity-95 scale-[1.02] transition-transform duration-700"
            />
            {/* Lớp Overlay đen mờ giúp chữ nổi bật rực rỡ lên */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Lớp Vignette làm tối 4 góc ảnh bằng gradient ánh xanh đen */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(6,17,37,0.5)_65%,rgba(5,5,5,1)_100%)]"></div>
            
            {/* Gradient đáy che mờ viền cắt, hòa trộn liền mạch với System Section (Màu Xanh Đen) */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[rgba(6,17,37,0.95)] to-transparent"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center w-full relative z-10"
          >
            {/* Bọc "Thomas Nguyen" và "Description" lại thành một nhóm, hất ngược lên trên để né đầu trong ảnh */}
            <div className="flex flex-col items-center w-full -translate-y-12 md:-translate-y-24">
              <h1 className="font-serif font-bold text-white mt-12 md:mt-0 leading-none tracking-[-0.01em] w-full text-5xl sm:text-7xl md:text-[110px]">
                THOMAS NGUYEN
              </h1>
              <div className="mt-8 flex flex-col items-center">
                <h2 className="font-sans font-semibold text-white tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
                  Video Editor
                </h2>
                <p className="font-sans text-[11px] sm:text-xs leading-[1.6] text-white opacity-95 max-w-2xl px-6 drop-shadow-md">
                  Professional Video Editor specialized in high-impact short-form content. 2+ years of experience, 500+ Reels delivered for global personal brands. Expert in DaVinci Resolve, Premiere Pro, and After Effects.
                </p>
              </div>
            </div>

            {/* Dòng Tagline vẫn giữ ở dưới cùng không bị hất lên */}
            <p className="-mt-4 md:-mt-8 text-xs sm:text-sm leading-[1.6] tracking-wide text-white opacity-95 drop-shadow-md uppercase whitespace-nowrap">
              I buy back your time & weaponize your retention.
            </p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://calendly.com/thomasvisualeditor/30min', '_blank')}
              className="mt-16 sm:mt-24 px-[32px] py-[12px] bg-transparent text-primary text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 hover:bg-white/5 border border-primary flex items-center justify-center gap-3 w-max mx-auto group"
            >
              Let's Chat 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </section>

        {/* 2. THE SYSTEM */}
        <section className="py-24 md:py-32 px-6 md:px-12 w-full max-w-[1600px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif font-bold text-4xl md:text-6xl text-white tracking-tight mb-16 md:mb-24">
              THE SYSTEM
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-divider">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex flex-col p-[30px] md:p-[40px_30px] border-b lg:border-b-0 lg:border-r border-divider last:border-b-0 lg:last:border-r-0">
                  <span className="font-serif italic text-secondary text-[12px] mb-[12px]">0{idx + 1}</span>
                  <h3 className="font-sans font-semibold text-[13px] tracking-[0.1em] uppercase text-white mb-[8px]">{pillar.title}</h3>
                  <p className="font-sans text-[11px] text-secondary leading-[1.5]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 3. SHORTS GRID */}
        <section className="py-32 md:py-48 px-6 md:px-12 border-t border-divider">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[1600px] mx-auto"
          >
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-white tracking-tight mb-16 md:mb-24">
              SHORT-FORM MASTERY
            </h2>
            
            {/* Horizontal scroll on mobile, Grid on desktop */}
            <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 hide-scrollbar pb-8 md:pb-0 -mx-6 md:mx-0 px-6 md:px-0 relative z-10">
              {shortsData.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-auto md:flex-shrink aspect-[9/16] relative group overflow-hidden bg-white/5 backdrop-blur-md border border-transparent hover:border-white/10 transition-colors duration-500 cursor-pointer"
                >
                  {item.videoUrl ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={`https://player.vimeo.com/video/${item.videoUrl}?autoplay=0&loop=0&background=0&title=0&byline=0&portrait=0&color=ffffff`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 group-hover:scale-100 filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        title={`Video ${item.id}`}
                      />
                      {/* Lớp Overlay che để dấu nút Play cho đến khi hover */}
                      <div className="absolute inset-0 z-20 group-hover:hidden bg-transparent"></div>
                    </div>
                  ) : (
                    <img 
                      src={`https://picsum.photos/seed/portrait${item.id}/720/1280`} 
                      referrerPolicy="no-referrer"
                      alt={`Short ${item.id}`}
                      className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 group-hover:scale-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="font-serif font-bold text-sm tracking-wider text-white py-1 px-3 border border-white/20 bg-black/50 backdrop-blur-md relative overflow-hidden">
                       {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 4. PHILOSOPHY VOID */}
        <section className="h-[80vh] min-h-[600px] flex items-center justify-center px-6 text-center border-t border-divider relative">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none"></div>
           <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
           >
            <div className="font-serif italic text-[16px] text-white opacity-40">
                "Your vision deserves to be seen. My job is to make sure your audience stays for the journey. <br/> <br/> Start a conversation."
              </div>
           </motion.div>
        </section>

        {/* 5. FINAL OUTREACH (FOOTER HYBRID) */}
        <section className="py-32 md:py-48 px-6 md:px-12 border-t border-divider">
          <div className="max-w-[1600px] mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-serif font-bold text-5xl md:text-8xl text-white tracking-tight mb-6">
              Ready to scale?
            </h2>
            <p className="font-sans text-secondary text-lg md:text-xl font-light max-w-xl mb-16">
              No friction. No gimmicks. Let's have a direct conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <button 
                onClick={() => window.open('https://calendly.com/thomasvisualeditor/30min', '_blank')}
                className="px-[32px] py-[12px] bg-transparent text-primary text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-3 group border border-primary text-center w-full sm:w-auto">
                Book Strategy Call
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => window.open('https://www.instagram.com/thomasvisualeditor/', '_blank')}
                className="px-[32px] py-[12px] bg-transparent text-secondary text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:text-white border border-transparent hover:border-divider flex items-center justify-center text-center w-full sm:w-auto">
                Send DM
              </button>
            </div>
            
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-32 pt-8 border-t border-divider text-xs tracking-[0.1em] text-secondary uppercase">
               <span>&copy; 2026 Thomas Nguyen. All rights reserved.</span>
               <div className="flex gap-8 mt-6 md:mt-0">
                  <a href="#" className="hover:text-white transition-colors duration-300">X</a>
                  <a href="https://www.instagram.com/thomasvisualeditor/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Instagram</a>
                  <a href="https://www.linkedin.com/in/phucxuannguyen/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">LinkedIn</a>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
