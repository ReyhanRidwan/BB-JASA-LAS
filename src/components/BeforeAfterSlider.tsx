import React, { useState, useRef, useEffect } from 'react';
import { BEFORE_AFTER } from '../data';
import { ArrowLeftRight, HelpCircle, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = BEFORE_AFTER[activeIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach window event listeners during active drag for smooth operations outside container
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  };

  return (
    <section id="sebelum-sesudah" className="py-20 bg-industrial-gray border-y border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Hasil Nyata Transformasi</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Komparasi Sebelum & Sesudah Las
          </h2>
          <p className="font-sans text-gray-400">
            Geser pemisah slider untuk melihat perbedaan mencolok sebelum pemasangan struktur besi dibanding setelah dikerjakan secara profesional oleh tim pemasangan <strong className="text-white">BB JASA LAS</strong>.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-industrial-black p-1.5 rounded-lg border border-gray-800">
            {BEFORE_AFTER.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveIndex(index);
                  setSliderPosition(50); // reset slider to center on switch
                }}
                className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 rounded ${
                  activeIndex === index
                    ? 'bg-primary text-white shadow-md font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-industrial-charcoal/40'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Detailed Copy */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-display text-xl font-bold text-white mb-2">{currentItem.title}</h3>
              <p className="font-sans text-sm text-gray-400 leading-relaxed">{currentItem.description}</p>
            </div>
            
            <div className="space-y-3 bg-industrial-black p-5 rounded-lg border border-gray-800">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                <HelpCircle className="h-4 w-4 text-primary" />
                Saran Penggunaan
              </h4>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Tahan tombol lingkaran oranye di tengah gambar, lalu geser ke kanan atau kiri untuk memperbandingkan kerapian struktural hasil pekerjaan las premium.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-gray-400"><b>Sebelum:</b> {currentItem.beforeLabel}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-gray-400"><b>Sesudah:</b> {currentItem.afterLabel}</span>
              </div>
            </div>
          </div>

          {/* Interactive Slide Container */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={startDragging}
              onTouchStart={startDragging}
              className="slider-container relative w-full h-[320px] sm:h-[450px] overflow-hidden rounded-xl border border-gray-800 shadow-2xl cursor-ew-resize select-none group"
              id="before-after-interaction-box"
            >
              {/* BEFORE IMAGE (Bottom Layer) */}
              <img
                src={currentItem.beforeImage}
                alt="Sebelum pemasangan"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none text-gray-500 text-center"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-industrial-black/80 backdrop-blur border border-red-500/30 text-red-400 text-xs font-mono px-3 py-1.5 rounded z-15 font-bold shadow uppercase tracking-wider">
                {currentItem.beforeLabel}
              </span>

              {/* AFTER IMAGE OVERLAY (Top Layer with dynamic Clip Path) */}
              <div
                className="absolute inset-0 pointer-events-none select-none"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
              >
                <img
                  src={currentItem.afterImage}
                  alt="Setelah pemasangan"
                  className="absolute inset-0 w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* After tag label */}
              <span className="absolute top-4 right-4 bg-industrial-black/80 backdrop-blur border border-primary/40 text-primary text-xs font-mono px-3 py-1.5 rounded z-15 font-bold shadow uppercase tracking-wider">
                {currentItem.afterLabel}
              </span>

              {/* SLIDER CONTROLLER HANDLE BAR */}
              <div
                className="slider-handle"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="slider-button">
                  <ArrowLeftRight className="h-4 w-4 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
