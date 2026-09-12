import { Phone, MapPin, MessageCircle, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/kursData';
import BrandLogo from './BrandLogo';

interface ContactFooterProps {
  onOpenRegisterModal: () => void;
}

export default function ContactFooter({ onOpenRegisterModal }: ContactFooterProps) {
  return (
    <footer id="iletisim" className="bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
      
      {/* Top Banner with Direct Action */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-black uppercase tracking-widest bg-slate-950 text-amber-300 px-3 py-1 rounded-full">
              KAYITLARIMIZ DEVAM EDİYOR
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-['Outfit'] mt-2">
              Geleceğini Riske Atma, Karşıyaka Akademi ile Başla!
            </h3>
            <p className="text-slate-900 font-bold text-sm sm:text-base mt-1">
              10 kişilik VIP sınıflarımızda ve 60+ Deneme Kulübümüzde yerini hemen ayırt.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenRegisterModal}
              className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-300 font-black text-sm shadow-xl transition-transform active:scale-95 cursor-pointer"
            >
              Hemen Bilgi Al & Kayıt Ol
            </button>
            <a
              href={`https://wa.me/${INSTITUTION_INFO.whatsappNumber}?text=${encodeURIComponent('Merhaba, Karşıyaka Akademi için kayıt detaylarını öğrenmek istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp ile Yazın</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12 text-left">
          
          {/* Institution Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="py-1">
              <BrandLogo variant="horizontal" theme="dark" />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              &ldquo;Başarı Bir Tercih Değil, Bir Disiplindir!&rdquo; Kalabalıkta kaybolmadan, 10 kişilik VIP sınıflar, 60+ seçkin yayınla deneme kulübü ve birebir rehberlik ile hayalindeki üniversiteye adım at.
            </p>

            <div className="pt-2 text-xs text-amber-400 font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Milli Eğitim Bakanlığı Müfredatına Tam Uyum</span>
            </div>
          </div>

          {/* Quick Contact Numbers (From Afişler) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400">
              İletişim & Danışma
            </h4>

            <div className="space-y-3">
              <a
                href={`tel:${INSTITUTION_INFO.phone1Raw}`}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Kayıt & Bilgi Hattı 1</span>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {INSTITUTION_INFO.phone1}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${INSTITUTION_INFO.phone2Raw}`}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Danışma Hattı 2</span>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {INSTITUTION_INFO.phone2}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${INSTITUTION_INFO.whatsappNumber}?text=${encodeURIComponent('Merhaba, Karşıyaka Akademi için kayıt ve eğitim detaylarını öğrenmek istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-400/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">WhatsApp Canlı Destek</span>
                  <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {INSTITUTION_INFO.phone1} (WhatsApp)
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Çalışma Saatleri: Haftanın 7 Günü (08:30 - 21:00)</span>
              </div>
            </div>
          </div>

          {/* Real Address from all 4 posters & Map Guide */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Adres & Konum
            </h4>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white leading-snug">
                    {INSTITUTION_INFO.address}
                  </p>
                  <p className="text-amber-300 font-medium text-xs mt-1">
                    {INSTITUTION_INFO.addressDetail}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Merkez / BİNGÖL
                  </p>
                </div>
              </div>

              {/* Interactive Google Maps Preview */}
              <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                <iframe
                  src={INSTITUTION_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="130"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Karşıyaka Akademi Bingöl Konumu"
                  className="grayscale-30 contrast-125 hover:grayscale-0 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={INSTITUTION_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-2 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow hover:bg-amber-300 transition-colors"
                  title="Google Maps Resmi Sayfası"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Google Haritalar</span>
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Özel Bingöl Karşıyaka Akademi Özel Öğretim Kursu')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-amber-300 border border-amber-400/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  title="Navigasyon Yol Tarifi Başlat"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Yol Tarifi</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Karşıyaka Akademi Özel Öğretim Kursu. Tüm hakları saklıdır. Bingöl.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>
              designer by{' '}
              <a
                href="https://instagram.com/kisaca_ed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400/90 hover:text-amber-300 font-medium transition-colors"
              >
                @kisaca_ed
              </a>{' '}
              |{' '}
              <a
                href="tel:+905070914616"
                className="hover:text-slate-200 transition-colors font-medium"
              >
                +905070914616
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
