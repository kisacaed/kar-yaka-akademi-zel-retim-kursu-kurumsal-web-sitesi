import React from 'react';
import { GalleryPhoto } from '../types';
import { Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

interface StudentPosterCardProps {
  photo: GalleryPhoto;
  customImageSrc?: string;
  isThumbnail?: boolean;
}

export default function StudentPosterCard({
  photo,
  customImageSrc,
  isThumbnail = false,
}: StudentPosterCardProps) {
  // If user provided an uploaded real image file, render that image directly
  if (customImageSrc) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-slate-900 rounded-xl flex items-center justify-center">
        <img
          src={customImageSrc}
          alt={photo.title}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // If used as small thumbnail button
  if (isThumbnail) {
    return (
      <div className="w-full h-full relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-1 flex flex-col justify-between select-none shadow-md">
        {/* Mini Header */}
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-black text-slate-950 bg-white/90 px-1 py-0.2 rounded shadow-xs">
            #{photo.id}
          </span>
          <span className="text-[9px] font-black text-amber-950 bg-amber-200/90 px-1 py-0.2 rounded">
            {photo.firstExam.net}N
          </span>
        </div>

        {/* Center Net Gain */}
        <div className="my-auto text-center py-0.5">
          <div className="bg-slate-950 text-amber-400 font-black text-[11px] leading-tight px-1 py-0.5 rounded shadow-sm">
            {photo.netGainText}
          </div>
          <span className="text-[8px] font-black text-slate-950 block mt-0.5">
            {photo.lastExam.net} Net
          </span>
        </div>

        {/* Mini Footer */}
        <div className="text-[7.5px] font-bold text-slate-900 truncate text-center">
          {photo.lastExam.name.slice(0, 14)}
        </div>
      </div>
    );
  }

  // Full Poster Presentation (100% Vector React Layout matching the original yellow posters)
  return (
    <div 
      className="w-full h-full aspect-square relative rounded-2xl overflow-hidden shadow-2xl select-none flex flex-col justify-between p-3 sm:p-5 md:p-6 text-slate-900 font-sans"
      style={{
        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
      }}
    >
      {/* Decorative Geometric Curves in Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(0,0,0,0.15) 0%, transparent 45%)'
        }}
      />

      {/* Top Section */}
      <div className="relative z-10 grid grid-cols-12 gap-2 sm:gap-4 items-start">
        
        {/* Left Side: Exam 1 Result Card (White Sheet) */}
        <div className="col-span-6 sm:col-span-6 bg-white rounded-xl shadow-xl border border-slate-300/80 overflow-hidden flex flex-col">
          {/* Header Bar */}
          <div className="bg-sky-600 px-2 sm:px-3 py-1 sm:py-1.5 flex items-center justify-between text-white">
            <span className="font-black text-[10px] sm:text-xs tracking-wider">b2s</span>
            <span className="font-bold text-[9px] sm:text-[11px] truncate max-w-[130px] sm:max-w-[170px] text-right">
              {photo.firstExam.name}
            </span>
          </div>

          <div className="p-2 sm:p-3 space-y-1.5 sm:space-y-2">
            {/* Score & Net Pill */}
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-1.5 sm:p-2 flex items-center justify-between">
              <div>
                <span className="block text-[8px] sm:text-[9px] font-bold text-sky-700 uppercase">1. Deneme Puanı</span>
                <span className="font-black text-xs sm:text-sm md:text-base text-sky-950">
                  {photo.firstExam.score.toLocaleString('tr-TR')}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[8px] sm:text-[9px] font-bold text-sky-700 uppercase">İlk Net</span>
                <span className="font-black text-xs sm:text-sm md:text-base text-sky-700">
                  {photo.firstExam.net.toFixed(2)} Net
                </span>
              </div>
            </div>

            {/* Institution stamp */}
            <div className="border-t border-slate-200 pt-1 text-[8px] sm:text-[10px] text-slate-500 font-semibold flex items-center justify-between">
              <span>BİNGÖL KARŞIYAKA AKADEMİ</span>
              <span className="text-sky-600 font-bold">Kayıtlı Takip</span>
            </div>
          </div>
        </div>

        {/* Right Side: Headline & "İLK DENEME" badge */}
        <div className="col-span-6 sm:col-span-6 flex flex-col justify-start pl-1 sm:pl-2">
          <div className="inline-block self-start px-2.5 py-1 rounded-lg bg-amber-400 border border-amber-600/40 text-slate-950 font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-xs mb-1.5">
            İLK DENEME
          </div>

          <h4 className="font-black font-['Outfit'] text-xs sm:text-base md:text-lg text-slate-950 leading-tight uppercase drop-shadow-xs">
            SINIF DERSİ VEYA ÖZEL DERS OLMADAN
            <span className="block text-slate-900 text-opacity-90">BİRE BİR KOÇLUK İLE ÇALIŞTIK</span>
          </h4>
        </div>
      </div>

      {/* Center Hero: Angled Black Badge with Net Gain */}
      <div className="relative z-20 my-auto flex items-center justify-center py-1 sm:py-2">
        <div className="transform -rotate-6 sm:-rotate-8 transition-transform duration-300 hover:rotate-0">
          <div className="px-5 sm:px-8 py-2 sm:py-3.5 rounded-2xl bg-slate-950 text-amber-400 border-2 border-amber-300 shadow-2xl flex items-center gap-2 sm:gap-3 ring-4 ring-slate-950/20">
            <TrendingUp className="w-5 h-5 sm:w-8 sm:h-8 text-amber-400 stroke-[3]" />
            <span className="font-black font-['Outfit'] text-2xl sm:text-4xl md:text-5xl tracking-tight">
              {photo.netGainText}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 grid grid-cols-12 gap-2 sm:gap-4 items-end">
        
        {/* Left Side: "SON DENEME" badge & Footer Note */}
        <div className="col-span-5 sm:col-span-5 flex flex-col justify-end pr-1 sm:pr-2">
          <div className="inline-block self-start px-2.5 py-1 rounded-lg bg-slate-950 text-amber-400 font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-md mb-2">
            SON DENEME
          </div>

          {photo.highlightNote && (
            <div className="bg-slate-950/90 text-amber-300 border border-amber-400/40 rounded-xl p-1.5 sm:p-2.5 text-[9px] sm:text-xs font-bold leading-snug shadow-lg">
              ✨ {photo.highlightNote}
            </div>
          )}
        </div>

        {/* Right Side: Final Exam Result Card (White Sheet) */}
        <div className="col-span-7 sm:col-span-7 bg-white rounded-xl shadow-2xl border-2 border-emerald-500/30 overflow-hidden flex flex-col">
          {/* Header Bar */}
          <div className="bg-slate-950 px-2 sm:px-3 py-1 sm:py-1.5 flex items-center justify-between text-white">
            <span className="font-black text-[10px] sm:text-xs text-amber-400">SONUÇ BELGESİ</span>
            <span className="font-bold text-[9px] sm:text-[11px] truncate max-w-[140px] sm:max-w-[200px] text-right text-slate-200">
              {photo.lastExam.name}
            </span>
          </div>

          <div className="p-2 sm:p-3 space-y-1.5 sm:space-y-2">
            {/* Score & Net Pill */}
            <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-1.5 sm:p-2 flex items-center justify-between">
              <div>
                <span className="block text-[8px] sm:text-[9px] font-bold text-emerald-800 uppercase">Son Deneme Puanı</span>
                <span className="font-black text-xs sm:text-sm md:text-base text-slate-950">
                  {photo.lastExam.score.toLocaleString('tr-TR')}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[8px] sm:text-[9px] font-bold text-emerald-800 uppercase">Ulaşılan Net</span>
                <span className="font-black text-sm sm:text-base md:text-lg text-emerald-700">
                  {photo.lastExam.net.toFixed(2)} Net
                </span>
              </div>
            </div>

            {/* Verified Badge */}
            <div className="flex items-center justify-between text-[9px] sm:text-[11px] font-bold text-slate-700 pt-0.5">
              <span className="text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                <span>{photo.netGainText} Artış Onaylandı</span>
              </span>
              <span className="text-slate-500 text-[8px] sm:text-[10px]">Karşıyaka Akademi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Watermark Bar */}
      <div className="relative z-10 pt-2 border-t border-amber-600/30 flex items-center justify-between text-[8px] sm:text-[10px] font-black text-amber-950 tracking-wider uppercase">
        <span>KARŞIYAKA AKADEMİ BİNGÖL</span>
        <span>RESMİ BAŞARI ARŞİVİ</span>
        <span>0534 268 24 79</span>
      </div>
    </div>
  );
}
