import React, { useState, useEffect, useRef, useCallback, TouchEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Upload,
  Image as ImageIcon
} from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/kursData';
import StudentPosterCard from './StudentPosterCard';

interface PhotoGallerySectionProps {
  onOpenRegisterModal: (service?: string) => void;
  onOpenGuestStudentModal?: () => void;
}

const STORAGE_KEY = 'karsiyaka_gallery_custom_photos';

export default function PhotoGallerySection({ onOpenRegisterModal, onOpenGuestStudentModal }: PhotoGallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [customImages, setCustomImages] = useState<Record<number, string>>({});
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const total = GALLERY_PHOTOS.length;
  const currentItem = GALLERY_PHOTOS[currentIndex];

  // Load saved custom photos from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed === 'object') {
          setCustomImages(parsed);
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Save to localStorage when customImages changes
  const saveCustomImages = (newImages: Record<number, string>) => {
    setCustomImages(newImages);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newImages));
    } catch {
      // Storage might exceed quota for big photos, keep in memory
    }
  };

  const minSwipeDistance = 45;

  const handlePrev = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, isFullscreen]);

  // Touch Swipe Handlers
  const onTouchStartHandler = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHandler = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Handle local user file upload (e.g. 1.jpg, 2.jpg or screenshots from computer)
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newCustoms: Record<number, string> = { ...customImages };
    const fileList = Array.from(files);

    fileList.forEach((file: File, index: number) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          // Detect student number by filename (e.g. 1.jpg, foto-2.png) or current selected
          const match = file.name.match(/(\d+)/);
          const targetId = match ? parseInt(match[1], 10) : (fileList.length > 1 ? index + 1 : currentItem.id);
          const validId = targetId >= 1 && targetId <= 8 ? targetId : currentItem.id;
          
          newCustoms[validId] = event.target.result as string;
          saveCustomImages({ ...newCustoms });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <section id="karne-galerisi" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Resmi Başarı Belgeleri & Karneler</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            Başarı Fotoğraf Galerisi:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 block sm:inline">
              Gerçek Net Artışları
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Sınıf dersi veya özel ders olmadan, sadece <strong className="text-amber-300 font-bold">birebir koçluk ve randevulu soru çözümüyle</strong> öğrencilerimizin Türkiye geneli denemelerde elde ettiği somut karne belgeleri.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Görselleri sağ/sol oklara tıklayarak veya kaydırarak inceleyebilirsiniz.</span>
            </span>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-300 font-semibold cursor-pointer transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Kendi Fotoğrafınızı Yükleyin</span>
            </button>
          </div>
        </div>

        {/* Central Interactive Gallery Stage */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Photo Card Container */}
          <div 
            onTouchStart={onTouchStartHandler}
            onTouchMove={onTouchMoveHandler}
            onTouchEnd={onTouchEndHandler}
            className="relative rounded-3xl bg-slate-900/90 border-2 border-amber-400/40 p-3 sm:p-5 md:p-6 shadow-2xl shadow-amber-400/10 overflow-hidden flex flex-col items-center select-none backdrop-blur-xl"
          >
            
            {/* Top Bar above image */}
            <div className="w-full flex items-center justify-between gap-3 mb-3 px-1 sm:px-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm">
                  Karne {currentIndex + 1} / {total}
                </span>
                <span className="hidden sm:inline-block text-xs font-bold text-slate-300">
                  {currentItem.title}
                </span>
              </div>

              {/* Action Buttons: Zoom & Upload */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors cursor-pointer border border-slate-700"
                  title="Bilgisayarınızdaki Orijinal Fotoğrafı Seçin"
                >
                  <Upload className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden md:inline">Fotoğraf Yükle</span>
                </button>

                <button
                  onClick={() => setIsFullscreen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer border border-slate-700"
                  title="Tam Ekran Büyüt"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Büyüt</span>
                </button>
              </div>
            </div>

            {/* The Image Stage with Left & Right Arrow Buttons */}
            <div className="relative w-full aspect-square max-w-[640px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex items-center justify-center group">
              
              {/* Animated Poster / Image Slide */}
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, x: direction === 'right' ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === 'right' ? -80 : 80 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full h-full p-1 sm:p-2 cursor-zoom-in"
                  onClick={() => setIsFullscreen(true)}
                >
                  <StudentPosterCard 
                    photo={currentItem} 
                    customImageSrc={customImages[currentItem.id]}
                  />
                </motion.div>
              </AnimatePresence>

              {/* FLOATING LEFT DIRECTION ARROW */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-950/90 hover:bg-amber-400 text-amber-400 hover:text-slate-950 border-2 border-amber-400/80 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-200 active:scale-90 hover:scale-110 z-30 cursor-pointer group/btn"
                aria-label="Önceki Fotoğraf"
                title="Önceki Görsel (Sol Yön Tuşu)"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:-translate-x-0.5 transition-transform" />
              </button>

              {/* FLOATING RIGHT DIRECTION ARROW */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-950/90 hover:bg-amber-400 text-amber-400 hover:text-slate-950 border-2 border-amber-400/80 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-200 active:scale-90 hover:scale-110 z-30 cursor-pointer group/btn"
                aria-label="Sonraki Fotoğraf"
                title="Sonraki Görsel (Sağ Yön Tuşu)"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Bottom Details for Current Photo */}
            <div className="w-full mt-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-black text-white font-['Outfit'] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{currentItem.title}</span>
                </h3>

                <div className="flex items-center gap-1.5">
                  {currentItem.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Slogan */}
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                💬 <strong>Yöntem:</strong> {currentItem.slogan}
              </p>

              {/* Quick Exam Score Breakdown Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-800/80 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">1. Deneme</span>
                  <span className="font-bold text-slate-200 block truncate">{currentItem.firstExam.name}</span>
                  <span className="text-amber-400 font-black">{currentItem.firstExam.net} Net</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Son Deneme</span>
                  <span className="font-bold text-slate-200 block truncate">{currentItem.lastExam.name}</span>
                  <span className="text-emerald-400 font-black">{currentItem.lastExam.net} Net</span>
                </div>

                <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 flex flex-col justify-center">
                  <span className="text-amber-400 text-[10px] uppercase font-bold block">Net Artışı</span>
                  <span className="text-white font-black text-sm">{currentItem.netGainText}</span>
                </div>
              </div>

              {/* Highlight Note */}
              {currentItem.highlightNote && (
                <div className="p-2 rounded-xl bg-amber-400/5 border border-amber-400/20 text-xs text-amber-300/90 font-medium text-center">
                  ✨ {currentItem.highlightNote}
                </div>
              )}
            </div>

            {/* CTAs under the card */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenRegisterModal(currentItem.title)}
                className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 cursor-pointer active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Bu Başarıyı Birlikte Yakalayalım</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenGuestStudentModal && (
                <button
                  onClick={onOpenGuestStudentModal}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs sm:text-sm border border-slate-700 cursor-pointer transition-colors"
                >
                  1 Gün Ücretsiz Misafir Ol
                </button>
              )}
            </div>
          </div>

          {/* Direction Indicators & Thumbnails Navigation */}
          <div className="mt-6 flex flex-col items-center gap-4">
            
            {/* Direct Prev / Next controls */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-amber-400 border border-slate-800 text-xs font-bold transition-all cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Önceki Karne</span>
              </button>

              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5 px-2">
                {GALLERY_PHOTOS.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 'right' : 'left');
                      setCurrentIndex(idx);
                    }}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex 
                        ? 'w-7 bg-amber-400' 
                        : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Fotoğraf ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-amber-400 border border-slate-800 text-xs font-bold transition-all cursor-pointer shadow-sm"
              >
                <span>Sonraki Karne</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Strip (8 mini cards that are ALWAYS visible!) */}
            <div className="w-full grid grid-cols-4 sm:grid-cols-8 gap-2 mt-2">
              {GALLERY_PHOTOS.map((item, idx) => {
                const isActive = idx === currentIndex;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 'right' : 'left');
                      setCurrentIndex(idx);
                    }}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all p-1 text-left flex flex-col items-center gap-1 cursor-pointer h-24 ${
                      isActive 
                        ? 'border-amber-400 bg-slate-900 ring-2 ring-amber-400/40 scale-105 shadow-lg' 
                        : 'border-slate-800 bg-slate-950/70 opacity-75 hover:opacity-100 hover:border-slate-700'
                    }`}
                  >
                    <StudentPosterCard 
                      photo={item} 
                      customImageSrc={customImages[item.id]} 
                      isThumbnail={true} 
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hidden input for local file replacement */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          multiple
          accept="image/*"
          className="hidden"
        />
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isFullscreen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/95 backdrop-blur-md">
            
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center cursor-pointer hover:bg-slate-800 transition-colors"
              title="Kapat (ESC)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Navigation in Lightbox */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-900/90 text-amber-400 hover:text-slate-950 hover:bg-amber-400 border border-amber-400/50 flex items-center justify-center cursor-pointer transition-all hover:scale-110"
              title="Önceki (Sol Ok)"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Right Navigation in Lightbox */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-900/90 text-amber-400 hover:text-slate-950 hover:bg-amber-400 border border-amber-400/50 flex items-center justify-center cursor-pointer transition-all hover:scale-110"
              title="Sonraki (Sağ Ok)"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Fullscreen Poster Presentation */}
            <div className="max-w-3xl max-h-[90vh] w-full flex flex-col items-center justify-center p-2">
              <div className="w-full aspect-square max-w-[620px]">
                <StudentPosterCard 
                  photo={currentItem} 
                  customImageSrc={customImages[currentItem.id]}
                />
              </div>

              <div className="mt-3 text-center space-y-1">
                <p className="text-base sm:text-lg font-black text-white font-['Outfit']">
                  {currentItem.title} — <span className="text-amber-400">{currentItem.netGainText}</span>
                </p>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                  {currentItem.slogan}
                </p>
                <span className="text-xs text-slate-400 block">
                  Karne {currentIndex + 1} / {total}
                </span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
