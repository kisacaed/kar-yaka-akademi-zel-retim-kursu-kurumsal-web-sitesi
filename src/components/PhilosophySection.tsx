import { motion } from 'motion/react';
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldAlert, Sparkles, MapPin, Phone, MessageCircle } from 'lucide-react';
import { INSTITUTION_INFO, PHILOSOPHY_PILLARS } from '../data/kursData';

interface PhilosophySectionProps {
  onOpenRegisterModal: () => void;
}

export default function PhilosophySection({ onOpenRegisterModal }: PhilosophySectionProps) {
  return (
    <section id="felsefe" className="py-24 bg-slate-900 relative overflow-hidden text-white border-t border-b border-slate-800">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Callout Header matching Afiş 3 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider"
          >
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>Gerçek Teşhis & Bilimsel Yaklaşım</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white font-['Outfit'] leading-tight"
          >
            Sorun Çalışmamak Değil. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Sorun Takipsiz, Plansız ve Yönlendirmesiz Çalışma!
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Öğrenciler saatlerce masa başında kalmasına rağmen neden netlerini artıramaz? Çünkü rehbersiz çalışma rotasız gemiye benzer. Karşıyaka Akademi’de her dakikanız planlı, her netiniz takip altında.
          </motion.p>
        </div>

        {/* Comparison Layout: The Problem vs Karşıyaka Akademi */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Column 1: Classical crowded courses */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-2xl bg-slate-950 p-6 sm:p-8 border border-red-500/20 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-red-400">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="text-xl font-bold font-['Outfit']">Klasik Kalabalık Kurslar</h3>
              </div>

              <p className="text-sm text-slate-400">
                25-30 kişilik kalabalık sınıflarda kaybolan, kimsenin ödevini sormadığı ve hocaya soru sormak için kuyruk beklenilen sistem.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  '20-30 kişilik gürültülü sınıflar',
                  'Öğrencinin arka sıralarda fark edilmemesi',
                  'Standart, seviyeye uymayan zorunlu kitaplar',
                  'Ayda yılda bir yapılan formalite rehberlik',
                  'Soru çözdürmek için koridorda sıra kavgası',
                  'Netler düşerken nedeninin bilinmemesi'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-3 rounded-lg bg-red-950/30 border border-red-800/40 text-xs text-red-300 font-medium">
              Sonuç: Zaman kaybı, motivasyon çöküşü ve riske atılan bir gelecek.
            </div>
          </motion.div>

          {/* Column 2: Karşıyaka Akademi Solution (Afiş 3) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 border border-amber-400/40 shadow-xl shadow-amber-500/5 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-amber-400">
                  <Sparkles className="w-6 h-6" />
                  <h3 className="text-2xl font-black font-['Outfit']">KARŞIYAKA AKADEMİ’DE</h3>
                </div>
                <span className="text-xs font-bold bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Çözüm Odaklı Sistem
                </span>
              </div>

              <div className="space-y-4">
                {PHILOSOPHY_PILLARS.map((item, idx) => (
                  <div
                    key={item.number}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-black text-sm shrink-0 border border-amber-400/30">
                      {item.number}
                    </div>
                    <div className="text-left">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        {item.title}
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-left">
                <p className="text-amber-300 font-bold text-sm tracking-wide">
                  &ldquo;Planlı çalış, geleceğini riske atma!&rdquo;
                </p>
                <p className="text-xs text-slate-400">Karşıyaka Mah. Dağlar Cad. Elleri Yapı No: 16/H Bingöl</p>
              </div>

              <button
                onClick={onOpenRegisterModal}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer shrink-0"
              >
                <span>Birebir Görüşme Ayarla</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Kurum Cephesi & Hizmet Alanları (Afiş 3 ve 4'teki Bina Cam Yazıları) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 text-left">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>BİNGÖL MERKEZ YERLEŞKEMİZ</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                Modern ve Disiplinli Eğitim Binası
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Karşıyaka Akademi; geniş vitrini, modern çalışma istasyonları, randevulu etüt odaları ve ferah VIP sınıflarıyla Bingöl’de öğrencilerin en yüksek verimle sınavlara hazırlandığı adres.
              </p>

              {/* Kurumun Vitrinindeki Branşlar */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['YKS', 'TYT', 'AYT', 'YDT', 'BİREBİR ÖZEL DERS', 'GRUP DERSİ', 'ETÜT MERKEZİ', 'SORU ÇÖZÜMÜ', 'DENEME KULÜBÜ'].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 text-xs font-bold rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/30"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-xl border border-slate-700 text-left space-y-3">
              <p className="text-xs font-bold uppercase text-amber-400">Hemen Ulaşın & Bilgi Alın</p>
              <div className="space-y-2 text-sm">
                <a
                  href={`tel:${INSTITUTION_INFO.phone1Raw}`}
                  className="flex items-center gap-2 text-white hover:text-amber-400 font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>İletişim Hattı: {INSTITUTION_INFO.phone1}</span>
                </a>
                <a
                  href={`https://wa.me/${INSTITUTION_INFO.whatsappNumber}?text=${encodeURIComponent('Merhaba Karşıyaka Akademi, kurs programları hakkında bilgi almak istiyorum.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp ile Danışın</span>
                </a>
              </div>
              <a
                href={INSTITUTION_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-300 hover:text-amber-400 pt-1 border-t border-slate-700/80 flex items-start gap-1.5 transition-colors group"
                title="Google Haritalar'da Aç"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {INSTITUTION_INFO.fullAddress} • <span className="text-amber-400 underline font-bold group-hover:text-amber-300">Haritada Gör</span>
                </span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
