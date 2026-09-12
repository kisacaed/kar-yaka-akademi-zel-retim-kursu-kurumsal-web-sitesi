import { motion } from 'motion/react';
import { Check, ArrowRight, Sparkles, BookOpen, Star, Phone } from 'lucide-react';
import { KURS_PROGRAMLARI, INSTITUTION_INFO } from '../data/kursData';
import { KursProgram } from '../types';

interface ProgramsSectionProps {
  onOpenRegisterModal: (service?: string) => void;
}

export default function ProgramsSection({ onOpenRegisterModal }: ProgramsSectionProps) {
  return (
    <section id="programlar" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>2026 - 2027 Kurs & Deneme Paketleri</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit']">
            HEDEFİNE ÖZEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              VIP EĞİTİM PROGRAMLARI
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            İster 10 kişilik VIP sınıf derslerine katılın, ister Koçluk ve Etüt Paketi ile kütüphane ve soru çözüm desteği alın, ister sadece 60+ Deneme Kulübü ile Türkiye geneli sınavlara girin. Karşıyaka Akademi’de sana uygun bir plan mutlaka var.
          </p>
        </div>

        {/* 4 Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {KURS_PROGRAMLARI.map((prog, idx) => {
            const isFeatured = prog.id === 'kocluk-etut-paketi' || prog.id === 'vip-sayisal';

            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={`rounded-3xl p-6 text-left flex flex-col justify-between relative transition-all ${
                  isFeatured
                    ? 'bg-slate-950 border-2 border-amber-400 shadow-2xl shadow-amber-400/10'
                    : 'bg-slate-950/90 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {prog.badge && (
                  <div className="absolute -top-3.5 left-6 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {prog.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {prog.targetAudience}
                    </span>
                    <h3 className="text-xl font-black text-white font-['Outfit'] mt-1">
                      {prog.title}
                    </h3>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-amber-400 font-bold block">Sınıf Yapısı / Düzeni</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-200">{prog.classSize}</p>
                  </div>

                  <p className="text-xs text-amber-300/90 font-medium leading-relaxed">
                    🎯 {prog.recommendedFor}
                  </p>

                  <div className="pt-2 space-y-2.5">
                    {prog.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5">
                  <button
                    onClick={() => onOpenRegisterModal(prog.title)}
                    className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-md shadow-amber-400/20"
                  >
                    <span>Fiyat & Bilgi Al</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`tel:${INSTITUTION_INFO.phone1Raw}`}
                    className="block text-center text-[11px] text-slate-400 hover:text-white font-medium transition-colors"
                  >
                    Danış: {INSTITUTION_INFO.phone1}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
