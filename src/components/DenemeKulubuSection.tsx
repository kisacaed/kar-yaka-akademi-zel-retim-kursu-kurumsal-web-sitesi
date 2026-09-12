import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle2, TrendingUp, Users, ArrowRight, ShieldCheck, Tag, Info } from 'lucide-react';
import { SELECTED_PUBLISHERS, INSTITUTION_INFO } from '../data/kursData';
import { DenemeYayin } from '../types';

interface DenemeKulubuSectionProps {
  onOpenRegisterModal: (service?: string) => void;
}

export default function DenemeKulubuSection({ onOpenRegisterModal }: DenemeKulubuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');
  const [selectedPublisher, setSelectedPublisher] = useState<DenemeYayin | null>(null);

  const categories = ['Tümü', 'Genel', 'Matematik', 'Fen', 'Edebiyat / Sosyal'];

  const filteredPublishers = activeCategory === 'Tümü'
    ? SELECTED_PUBLISHERS
    : SELECTED_PUBLISHERS.filter((p) => p.category === activeCategory);

  return (
    <section id="deneme-kulubu" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Golden %50 Campaign Banner directly inspired by Afiş 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 shadow-2xl shadow-amber-400/20 border-4 border-yellow-200 text-center relative overflow-hidden"
        >
          {/* Subtle light effect */}
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white/20 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-3 relative z-10">
            <span className="inline-block bg-slate-950 text-amber-300 text-xs sm:text-sm font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
              GELENEKSEL KAMPANYA • SINIRLI KONTENJAN
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-['Outfit'] leading-none">
              EYLÜL AYINA ÖZEL <span className="underline decoration-slate-950 underline-offset-8">%50 İNDİRİM</span>
            </h2>

            <p className="text-sm sm:text-base font-bold text-slate-900 max-w-2xl mx-auto">
              60+ Türkiye Geneli deneme sınavı, denemelerden hemen sonra <span className="underline font-black">hızlı optik okuma</span> ve anında bireysel sonuç paylaşımı! Vade farksız taksit, erken kayıt ve kardeş indirimi avantajlarıyla yerinizi ayırtın.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenRegisterModal('Deneme Kulübü (60+ Sınav)')}
                className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-300 font-black text-sm sm:text-base shadow-xl flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                <span>İndirimli Kayıt Formu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href={`tel:${INSTITUTION_INFO.phone1Raw}`}
                className="px-5 py-3 rounded-xl bg-amber-600/30 hover:bg-amber-600/40 text-slate-950 font-black text-sm sm:text-base border border-slate-950/30 transition-colors"
              >
                Hemen Ara: {INSTITUTION_INFO.phone1}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-amber-400 text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
            <Award className="w-4 h-4" /> 2024 - 2026 SEZONU DENEME PROGRAMI
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit']">
            DENEME KULÜBÜ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              60+ KALİTELİ DENEME
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Sınav başarısı denemede pişer. Karşıyaka Akademi’de ÖSYM ile birebir aynı optik kodlama, sınav salonu disiplini, hızlı optik okuma ve Türkiye sıralamanı gösteren bireysel sonuç sistemi seni bekliyor.
          </p>
        </div>

        {/* 3 Core Pillars from Afiş 1 */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/40 transition-all text-left space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Outfit']">Hızlı Optik Okuma & Bireysel Sonuç Paylaşımı</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Denemelerden sonra günlerce bekleme yok! Kurumumuzdaki yüksek hızlı optik okuma sistemiyle sınav biter bitmez sonuçlarınız işlenir; netleriniz, kazanım başlıklarınız ve Türkiye sıralamanız öğrenci ve veliye bireysel olarak paylaşılır.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/40 transition-all text-left space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Outfit']">Detaylı Analiz & Gelişim Takibi</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Haftalık net değişim eğrileri, soru çözme hızı ve zayıf kalınan konular tespit edilir. Rehberlik birimi bu analizle haftalık çalışma programını revize eder.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/40 transition-all text-left space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Outfit']">Gerçek Sınav Düzeninde Uygulama</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Resmi ÖSYM saatlerine tam uyum (10:15 başlangıç), optik form, sınav gözetmenleri ve sessiz salon disipliniyle sınav heyecanını aylar öncesinden yenersiniz.
            </p>
          </motion.div>

        </div>

        {/* 10 Selected Publishers Showcase */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="text-2xl font-black text-white font-['Outfit'] flex items-center gap-2">
                <span>SEÇKİN DENEME YAYINLARI</span>
                <span className="text-xs bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded-full">10 YAYIN</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Afişimizde yer alan Türkiye’nin en çok güvenilen yayınlarıyla tam kapsamlı deneme maratonu
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start sm:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Publisher Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {filteredPublishers.map((pub, idx) => (
              <motion.div
                key={pub.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
                onClick={() => setSelectedPublisher(pub)}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/60 transition-all text-left flex flex-col justify-between group cursor-pointer hover:shadow-lg hover:shadow-amber-400/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      {pub.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold">{pub.badge}</span>
                  </div>

                  <h4 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors font-['Outfit']">
                    {pub.name}
                  </h4>
                  <p className="text-xs text-amber-200/80 font-medium mt-0.5">
                    {pub.highlight}
                  </p>
                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                    {pub.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px] text-amber-400 font-semibold group-hover:underline">
                    Detayları gör
                  </span>
                  <Info className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publisher Detail Modal */}
        <AnimatePresence>
          {selectedPublisher && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-lg w-full bg-slate-900 border border-amber-400/40 rounded-2xl p-6 text-left shadow-2xl space-y-4 relative"
              >
                <button
                  onClick={() => setSelectedPublisher(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold p-1 cursor-pointer"
                  aria-label="Kapat"
                >
                  ✕
                </button>

                <div className="inline-block text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                  {selectedPublisher.category} • {selectedPublisher.badge}
                </div>

                <h3 className="text-2xl font-black text-white font-['Outfit']">
                  {selectedPublisher.name}
                </h3>
                <p className="text-sm font-semibold text-amber-300">
                  {selectedPublisher.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedPublisher.description}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Karşıyaka Akademi’de Uygulanışı:
                  </p>
                  <p>
                    • Optik form ile Türkiye geneli sıralama değerlendirmesi
                    <br />
                    • Sınavın hemen ardından video çözümler ve analiz karnesi
                    <br />
                    • Takıldığın sorular için randevulu soru çözüm sistemi
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      setSelectedPublisher(null);
                      onOpenRegisterModal(`Deneme Kulübü - ${selectedPublisher.name}`);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm text-center transition-colors cursor-pointer"
                  >
                    Bu Yayının Denemesine Kayıt Ol
                  </button>
                  <button
                    onClick={() => setSelectedPublisher(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs cursor-pointer"
                  >
                    Kapat
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
