import { motion } from 'motion/react';
import { Sparkles, Phone, MessageCircle, ArrowRight, Users, BookOpen, Award, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { INSTITUTION_INFO, SELECTED_PUBLISHERS } from '../data/kursData';
import BrandLogo from './BrandLogo';

interface HeroSectionProps {
  onOpenRegisterModal: (service?: string) => void;
  onOpenGuestStudentModal?: () => void;
}

export default function HeroSection({ onOpenRegisterModal, onOpenGuestStudentModal }: HeroSectionProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-white">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Action */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Official MEB accreditation pill & Top Slogan Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-slate-200 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>MEB 5580 Sayılı Kanun Onaylı Resmi Kurum</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>&ldquo;Başarı Bir Tercih Değil, Bir Disiplindir!&rdquo;</span>
              </div>
            </div>

            {/* Main Punchy Slogan from posters */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] font-['Outfit']">
                <span className="text-white block">KALABALIKTA</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 block">
                  KAYBOLMAK YOK!
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl leading-relaxed pt-2">
                Bingöl’de <strong className="text-white font-bold">10 Kişilik VIP Sınıflar</strong>, haftalık veli bilgilendirmesi, randevulu soru çözümü ve Türkiye’nin en seçkin 10 yayınıyla <strong className="text-amber-400 font-bold">60+ Deneme Kulübü</strong>.
              </p>
            </div>

            {/* Key Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-900/70 border border-slate-800 rounded-lg p-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span><strong>Sadece 40 Ders Öğrencisi</strong> (Butik İlgi)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-900/70 border border-slate-800 rounded-lg p-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span><strong>Haftanın 6 Günü 08:00 - 22:00</strong> Kütüphane</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-900/70 border border-slate-800 rounded-lg p-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span><strong>Vade Farksız Taksit & Erken Kayıt</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-900/70 border border-slate-800 rounded-lg p-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span><strong>Hızlı Optik Okuma & Net Karnesi</strong></span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={() => onOpenRegisterModal('VIP Sınıf (10 Kişilik)')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Yerinizi Ayırtın</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {onOpenGuestStudentModal && (
                <button
                  onClick={onOpenGuestStudentModal}
                  className="px-5 py-3.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/50 font-bold text-sm sm:text-base flex items-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-amber-400/10"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>1 Gün Ücretsiz Deneyimleyin</span>
                </button>
              )}

              <a
                href={`https://wa.me/${INSTITUTION_INFO.whatsappNumber}?text=${encodeURIComponent('Merhaba, Karşıyaka Akademi afişinizdeki %50 indirimli kontenjan hakkında bilgi almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp İletişim</span>
              </a>

              <a
                href={`tel:${INSTITUTION_INFO.phone1Raw}`}
                className="px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm sm:text-base flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{INSTITUTION_INFO.phone1}</span>
              </a>
            </div>

            {/* Quota warning */}
            <div className="flex items-center gap-2 text-xs text-amber-300/90 pt-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Sınırlı VIP kontenjan uygulanmaktadır. Vade farksız taksit ve erken kayıt avantajları devam etmektedir.</span>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Showcase (Card Stack reflecting afişler) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Poster Card Container */}
            <div className="relative mx-auto max-w-md rounded-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 p-5 sm:p-6 border border-amber-400/40 shadow-2xl shadow-amber-500/10">
              
              {/* Official Logo Banner */}
              <div className="flex flex-col items-center justify-center pb-5 border-b border-slate-800 relative">
                <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 font-black text-[11px] px-2.5 py-1 rounded-full animate-pulse shadow-md z-20">
                  %50 İNDİRİM
                </div>

                <div className="w-full py-2 flex items-center justify-center">
                  <BrandLogo variant="full" theme="dark" className="transform hover:scale-[1.02] transition-transform" />
                </div>

                <a
                  href={INSTITUTION_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 hover:bg-slate-800 text-amber-300 border border-amber-400/30 text-xs font-semibold transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bingöl Merkez (Konum & Harita)</span>
                </a>
              </div>

              {/* Main Feature Highlight 1: 10 Kişilik VIP Sınıflar */}
              <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-700/80 text-left space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-4 h-4" /> Butik Eğitim Modeli
                  </span>
                  <a
                    href={INSTITUTION_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>Haritada Gör</span>
                  </a>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                  10 KİŞİLİK VIP SINIFLAR
                </div>
                <p className="text-xs text-slate-300">
                  Kalabalık yok, birebir takip var. Az öğrenci ile öğretmenin kesintisiz ilgisi ve odaklanmış ders temposu.
                </p>
              </div>

              {/* Highlight 2: 60+ Kaliteli Deneme */}
              <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent border border-amber-400/30 text-left space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400" /> Deneme Kulübü
                  </span>
                  <span className="text-xs font-black text-amber-400">10 Seçkin Yayın</span>
                </div>
                <div className="text-2xl font-black text-amber-300 font-['Outfit']">
                  60+ KALİTELİ DENEME
                </div>
                <p className="text-xs text-slate-300">
                  Özdebir, Bilgi Sarmal, 3D, 345, Limit ve diğerleri ile gerçek sınav provası ve net karnesi.
                </p>
              </div>

              {/* Highlight 3: Butik Kontenjan */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Ders Kontenjanı</p>
                  <p className="text-lg font-black text-white">Sadece 40</p>
                  <p className="text-[10px] text-amber-400">Öğrenci Kabulü</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Kaynak Seçimi</p>
                  <p className="text-lg font-black text-white">Özgür Seçim</p>
                  <p className="text-[10px] text-amber-400">Seviyene Göre</p>
                </div>
              </div>

              {/* Fast phone call inside card */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Danışma & Kayıt</p>
                  <a href={`tel:${INSTITUTION_INFO.phone1Raw}`} className="text-sm font-black text-white hover:text-amber-400 transition-colors">
                    {INSTITUTION_INFO.phone1}
                  </a>
                </div>
                <button
                  onClick={() => onOpenRegisterModal('Deneme Kulübü (60+ Sınav)')}
                  className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  Bilgi Formu
                </button>
              </div>

            </div>
          </motion.div>

        </div>

        {/* 10 Publishers Ticker Bar (Directly from Afiş 1) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" /> SEÇKİN DENEME YAYINLARI
              </span>
              <p className="text-sm text-slate-400 mt-0.5">
                Karşıyaka Akademi Deneme Kulübü’nde Türkiye’nin en kaliteli 10 yayını bir arada:
              </p>
            </div>
            <span className="text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 self-start md:self-auto">
              60+ Türkiye Geneli Sınav
            </span>
          </div>

          {/* Publishers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {SELECTED_PUBLISHERS.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="group relative p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-400/50 transition-all text-left"
              >
                <div className="text-xs font-black text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>{pub.name}</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                  {pub.highlight}
                </p>
                <span className="inline-block mt-1.5 text-[9px] font-semibold text-amber-400/80 bg-amber-400/10 px-1.5 py-0.5 rounded">
                  {pub.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
