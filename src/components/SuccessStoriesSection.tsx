import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  X,
  Phone,
  MessageCircle,
  FileSpreadsheet
} from 'lucide-react';
import { SUCCESS_STORIES, INSTITUTION_INFO } from '../data/kursData';
import { SuccessStory } from '../types';

interface SuccessStoriesSectionProps {
  onOpenRegisterModal: (service?: string) => void;
}

export default function SuccessStoriesSection({ onOpenRegisterModal }: SuccessStoriesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tip-derece' | 'buyuk-sicrama' | 'temelden-yukselis'>('all');
  const [activeModalStory, setActiveModalStory] = useState<SuccessStory | null>(null);

  const filteredStories = selectedCategory === 'all'
    ? SUCCESS_STORIES
    : SUCCESS_STORIES.filter((s) => s.category === selectedCategory);

  return (
    <section id="basarilar" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative overflow-hidden border-b border-slate-850">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Gerçek Öğrenciler • Gerçek Karneler • Birebir Sonuçlar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            Sınıf Dersi Olmadan,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Birebir Koçluk
            </span>{' '}
            ile Gelen Net Artışları
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Afişlerimizde yer alan gerçek Türkiye Geneli deneme sınav karneleri. Fabrikasyon kalabalık sınıflar yerine;
            öğrenciye özel birebir koçluk, randevulu soru çözümü ve 60+ deneme kulübüyle ulaştığımız somut karne başarıları.
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-amber-400/20 backdrop-blur-sm text-center">
            <span className="text-2xl sm:text-4xl font-black text-amber-400 font-['Outfit']">+60 NET</span>
            <p className="text-xs sm:text-sm font-bold text-white mt-1">Rekor Net Artışı</p>
            <p className="text-[11px] text-slate-400 mt-0.5">58.75 Net’ten 120 Net Seviyesine</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-emerald-400/20 backdrop-blur-sm text-center">
            <span className="text-2xl sm:text-4xl font-black text-emerald-400 font-['Outfit']">%0,04</span>
            <p className="text-xs sm:text-sm font-bold text-white mt-1">Türkiye Derecesi</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Bingöl İlçe & İl 1.liği Başarısı</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-blue-400/20 backdrop-blur-sm text-center">
            <span className="text-2xl sm:text-4xl font-black text-blue-400 font-['Outfit']">+37 NET</span>
            <p className="text-xs sm:text-sm font-bold text-white mt-1">Ortalama Sıçrama</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Her Seviyede Kanıtlanmış Gelişim</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-amber-400/20 backdrop-blur-sm text-center">
            <span className="text-2xl sm:text-4xl font-black text-amber-300 font-['Outfit']">%100</span>
            <p className="text-xs sm:text-sm font-bold text-white mt-1">Birebir Takip</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Sıra Kavgası Yok, Randevulu Çözüm</p>
          </div>
        </div>

        {/* Filter Buttons & Gallery Shortcut */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#karne-galerisi"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black shadow-lg shadow-amber-400/20 transition-all cursor-pointer"
          >
            <span>📸 Foto Galeri: Görselleri Sağa/Sola Kaydırarak Görün</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { key: 'all', label: 'Tüm Karneler' },
              { key: 'tip-derece', label: 'Tıp & Derece' },
              { key: 'buyuk-sicrama', label: '+30 Net Sıçrama' },
              { key: 'temelden-yukselis', label: 'Temelden Zirveye' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedCategory(tab.key as any)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === tab.key
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-850 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Success Story Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStories.map((story) => {
              const maxScale = 120;
              const initialPercent = Math.min(100, Math.round((story.initialNet / maxScale) * 100));
              const finalPercent = Math.min(100, Math.round((story.finalNet / maxScale) * 100));

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={story.id}
                  className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-amber-400/50 p-6 flex flex-col justify-between space-y-5 transition-all shadow-xl hover:shadow-2xl hover:shadow-amber-400/5 group"
                >
                  {/* Card Header */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold text-amber-400 tracking-wide uppercase">
                          {story.studentTitle}
                        </span>
                        <h3 className="text-lg font-black text-white font-['Outfit'] mt-0.5">
                          {story.targetFaculty}
                        </h3>
                      </div>

                      {/* Net Increase Badge */}
                      <div className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-sm sm:text-base shadow-md shadow-amber-400/20 shrink-0 flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 stroke-[3]" />
                        <span>+{story.netIncrease} NET</span>
                      </div>
                    </div>

                    {/* Ranking or Special Badge */}
                    {story.ranking && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                        <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{story.ranking}</span>
                      </div>
                    )}
                  </div>

                  {/* Before vs After Exam Comparison Box */}
                  <div className="space-y-3 p-4 rounded-xl bg-slate-950 border border-slate-850">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      {/* Initial Exam */}
                      <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">
                          İlk Deneme
                        </span>
                        <p className="text-xl sm:text-2xl font-black text-slate-300 font-['Outfit'] mt-0.5">
                          {story.initialNet.toFixed(2)}
                          <span className="text-xs text-slate-400 ml-0.5">Net</span>
                        </p>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5" title={story.initialExamName}>
                          {story.initialExamName}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5 font-medium">
                          {story.initialScore.toFixed(0)} Puan
                        </p>
                      </div>

                      {/* Final Exam */}
                      <div className="p-2.5 rounded-lg bg-amber-400/10 border border-amber-400/30">
                        <span className="text-[10px] font-bold text-amber-300 uppercase block tracking-wider">
                          Son Deneme
                        </span>
                        <p className="text-xl sm:text-2xl font-black text-amber-400 font-['Outfit'] mt-0.5">
                          {story.finalNet.toFixed(2)}
                          <span className="text-xs text-amber-300 ml-0.5">Net</span>
                        </p>
                        <p className="text-[11px] text-amber-200 truncate mt-0.5" title={story.finalExamName}>
                          {story.finalExamName}
                        </p>
                        <p className="text-[10px] text-amber-300/80 mt-0.5 font-medium">
                          {story.finalScore.toFixed(0)} Puan
                        </p>
                      </div>
                    </div>

                    {/* Progress visual comparison bar */}
                    <div className="space-y-1 pt-1">
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Gelişim İlerlemesi:</span>
                        <span className="font-bold text-amber-400">
                          {story.initialNet.toFixed(1)} Net &rarr; {story.finalNet.toFixed(1)} Net
                        </span>
                      </div>
                      <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden flex border border-slate-800">
                        <div
                          style={{ width: `${initialPercent}%` }}
                          className="bg-slate-600 h-full"
                          title={`İlk: ${story.initialNet} Net`}
                        />
                        <div
                          style={{ width: `${Math.max(0, finalPercent - initialPercent)}%` }}
                          className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full"
                          title={`Artış: +${story.netIncrease} Net`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Study method quotation */}
                  <div className="space-y-2">
                    <p className="text-xs text-slate-300 italic leading-relaxed line-clamp-3">
                      &ldquo;{story.studyMethod}&rdquo;
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {story.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-2 border-t border-slate-850 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalStory(story)}
                      className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <FileSpreadsheet className="w-3.5 h-3.5" />
                      <span>Karne Detayını İncele</span>
                    </button>

                    <button
                      onClick={() => onOpenRegisterModal('Birebir Koçluk & Rehberlik')}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Koçluk Al</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Afiş 9 Banner: Üniversiteye Hazırlıkta Geleceğini Şansa Bırakma */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 p-8 sm:p-10 text-slate-950 shadow-2xl relative overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 text-amber-300 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{INSTITUTION_INFO.keyMetrics.earlyBirdDiscount} Fırsatı</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Outfit'] leading-tight">
                Üniversiteye Hazırlıkta Geleceğini Şansa Bırakma!
              </h3>

              <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Seni Gerçekten Birebir Takip Eden Koçluk ve Gerçek Rehberlik
              </p>

              <p className="text-xs sm:text-sm text-slate-800 max-w-2xl">
                Yukarıdaki tüm karne artışları şans değil; sıkı disiplin, haftalık ödev kontrolü ve öğrencinin ihtiyacına özel randevulu soru çözümü sayesindedir. Kontenjanlarımız dolmadan siz de yerinizi ayırtın.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenRegisterModal('Birebir Koçluk & Rehberlik')}
                className="w-full py-4 px-6 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>%25 Erken Kayıt Başvurusu</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href={`https://wa.me/${INSTITUTION_INFO.whatsappNumber}?text=${encodeURIComponent('Merhaba Karşıyaka Akademi, başarı karnelerinizdeki koçluk modeli ve %25 erken kayıt indirimi hakkında bilgi almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp’tan Hemen Soru Sor</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-900 pt-1">
                <a href={`tel:${INSTITUTION_INFO.phone1Raw}`} className="hover:underline flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Danışma & Bilgi: {INSTITUTION_INFO.phone1}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Report Card Detail Modal */}
      <AnimatePresence>
        {activeModalStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveModalStory(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Kapat"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-1 pr-8">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold border border-amber-400/30">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Resmi Deneme Karne Analizi</span>
                </div>
                <h3 className="text-2xl font-black text-white font-['Outfit']">
                  {activeModalStory.studentTitle}
                </h3>
                <p className="text-xs text-amber-400 font-bold">
                  {activeModalStory.targetFaculty} • {activeModalStory.duration}
                </p>
              </div>

              {/* Score summary comparison */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-[10px] uppercase font-bold text-slate-400">İlk Deneme Neti</p>
                  <p className="text-2xl font-black text-slate-300 mt-0.5">
                    {activeModalStory.initialNet.toFixed(2)} Net
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{activeModalStory.initialExamName}</p>
                  <p className="text-xs text-slate-400">{activeModalStory.initialScore.toFixed(0)} Puan</p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30">
                  <p className="text-[10px] uppercase font-bold text-amber-300">Son Deneme Neti</p>
                  <p className="text-2xl font-black text-amber-400 mt-0.5">
                    {activeModalStory.finalNet.toFixed(2)} Net
                  </p>
                  <p className="text-xs text-amber-200 mt-1">{activeModalStory.finalExamName}</p>
                  <p className="text-xs text-amber-300/80">{activeModalStory.finalScore.toFixed(0)} Puan</p>
                </div>
              </div>

              {/* Net Breakdown Table if available */}
              {activeModalStory.initialBreakdown && activeModalStory.finalBreakdown && (
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Ders Bazlı Net Değişimi
                  </p>
                  <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-xs">
                    <div className="grid grid-cols-4 p-2.5 bg-slate-900/80 font-bold text-slate-400 border-b border-slate-800">
                      <span>Ders</span>
                      <span className="text-center">İlk Net</span>
                      <span className="text-center">Son Net</span>
                      <span className="text-right text-amber-400">Fark</span>
                    </div>

                    {[
                      { name: 'Türkçe', init: activeModalStory.initialBreakdown.turkce, fin: activeModalStory.finalBreakdown.turkce },
                      { name: 'Matematik', init: activeModalStory.initialBreakdown.matematik, fin: activeModalStory.finalBreakdown.matematik },
                      { name: 'Sosyal Bil.', init: activeModalStory.initialBreakdown.sosyal, fin: activeModalStory.finalBreakdown.sosyal },
                      { name: 'Fen Bil.', init: activeModalStory.initialBreakdown.fen, fin: activeModalStory.finalBreakdown.fen }
                    ].map((row) => {
                      const diff = (row.fin ?? 0) - (row.init ?? 0);
                      return (
                        <div key={row.name} className="grid grid-cols-4 p-2.5 border-b border-slate-900 items-center">
                          <span className="font-bold text-white">{row.name}</span>
                          <span className="text-center text-slate-400">{(row.init ?? 0).toFixed(2)}</span>
                          <span className="text-center text-emerald-400 font-bold">{(row.fin ?? 0).toFixed(2)}</span>
                          <span className="text-right font-black text-amber-400">
                            {diff >= 0 ? `+${diff.toFixed(2)}` : diff.toFixed(2)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Method note */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-1">
                <p className="font-bold text-white">Koçluk & Çalışma Yöntemi:</p>
                <p>{activeModalStory.studyMethod}</p>
                {activeModalStory.ranking && (
                  <p className="text-amber-400 font-bold pt-1">{activeModalStory.ranking}</p>
                )}
              </div>

              {/* Action */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveModalStory(null);
                    onOpenRegisterModal('Birebir Koçluk & Rehberlik');
                  }}
                  className="flex-1 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg"
                >
                  <span>Benzer Başarı İçin Başvur</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
