import { motion } from 'motion/react';
import { BookOpen, Wifi, HelpCircle, Shield, Clock, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/kursData';

interface StudyHallSectionProps {
  onOpenRegisterModal: (service?: string) => void;
  onOpenGuestStudentModal?: () => void;
}

export default function StudyHallSection({ onOpenRegisterModal, onOpenGuestStudentModal }: StudyHallSectionProps) {
  return (
    <section id="calisma-salonu" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Haftanın 6 Günü 08:00 - 22:00 Kesintisiz</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit']">
            BİNGÖL’ÜN EN İYİ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              SESSİZ KÜTÜPHANESİ & ÇALIŞMA SALONU
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Haftanın 6 günü sabah <strong className="text-white">08:00’den akşam 22:00’ye</strong> kadar kesintisiz açık, gözetmen denetiminde sessiz ve konforlu çalışma salonumuzla öğrencilere evdeki rehavetten uzak gerçek bir odaklanma mabedi sunuyoruz.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">08:00 - 22:00 Çalışma</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Haftanın 6 günü sabahın erken saatlerinden gece 22:00’ye kadar kesintisiz etüt ve çalışma imkânı.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Wifi className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Sınırsız Yüksek Hızlı Wi-Fi</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Online video dersler, soru çözümleri ve kaynak taramaları için kesintisiz ve yüksek bant genişlikli internet.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Randevulu Soru Çözüm Masası</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Çalışırken takıldığın soruları biriktir; belirlenen saatinde branş hocanla masaya oturup tek tek çöz.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Sıkı Disiplin & Sessizlik</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Gözetmen öğretmenler eşliğinde tavizsiz sessizlik kuralı; telefonlar kapalı veya dolapta tutulur.
            </p>
          </div>

        </div>

        {/* Big Contrast Card: Evde Çalışmak vs Karşıyaka Akademi'de Çalışmak */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-10 border border-slate-800 text-left">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                NEDEN ÇALIŞMA SALONUMUZ FARK YARATIYOR?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                Evdeki rehaveti bırakın, Karşıyaka Akademi’nin çalışma disiplinine katılın.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                YKS hazırlığında en büyük düşman konsantrasyon kaybıdır. Karşıyaka Akademi Kütüphanesi’nde etrafındaki herkesin aynı kararlılıkla çalıştığını görmek, motivasyonunu sürekli zirvede tutar.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Haftanın 6 Günü 08:00 - 22:00</strong> Kesintisiz açık</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Dinlenme molaları ve ferah kafeterya ortamı</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Gözetmen öğretmenlerin düzenli etüt ve sessizlik takibi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Merkezi konum (Hz. Osman Camii Karşısı, Nasa Reklam Yanı)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-slate-950 border border-amber-400/30 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Kütüphane Kapasitesi
              </span>
              <p className="text-2xl sm:text-3xl font-black text-amber-400 font-['Outfit']">
                08:00 - 22:00
              </p>
              <p className="text-xs text-slate-300">
                Maksimum verim ve sessizlik için çalışma salonu kapasitemiz sınırlı tutulmaktadır.
              </p>
              <button
                onClick={() => onOpenRegisterModal('Kütüphane / Çalışma Salonu')}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Çalışma Masanı Ayırt
              </button>

              {onOpenGuestStudentModal && (
                <button
                  onClick={onOpenGuestStudentModal}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-400/40 font-bold text-xs transition-colors cursor-pointer"
                >
                  1 Gün Ücretsiz Misafir Olun
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
