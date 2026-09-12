import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  MessageSquare, 
  Users, 
  FileSpreadsheet, 
  CheckCircle2, 
  CreditCard, 
  Award,
  ArrowRight,
  BellRing
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/kursData';

interface ParentTrustSectionProps {
  onOpenRegisterModal: (service?: string) => void;
  onOpenGuestStudentModal?: () => void;
}

export default function ParentTrustSection({ onOpenRegisterModal, onOpenGuestStudentModal }: ParentTrustSectionProps) {
  return (
    <section id="veli-bilgilendirme" className="py-20 lg:py-28 bg-slate-900 text-slate-100 relative overflow-hidden border-t border-b border-slate-800">
      {/* Ambient background glow */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>T.C. MEB 5580 Sayılı Kanun Kapsamında Onaylı Resmi Özel Öğretim Kursu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit'] tracking-tight">
            Çocuğunuzun Geleceği Asla Takipsiz Kalmaz:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 block sm:inline">
              Veli Bilgilendirme Sistemi
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Velilerimizi sürecin her adımında bilgilendiriyor; haftalık raporlar, birebir görüşmeler ve aylık karnelerle tam şeffaflık sunuyoruz.
          </p>
        </div>

        {/* 3 Main Parent Guarantee Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1: Haftalık SMS & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-7 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition-all flex flex-col justify-between space-y-5 shadow-xl group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                  Anlık & Düzenli Akış
                </span>
                <h3 className="text-xl font-black text-white font-['Outfit'] mt-1">
                  Haftalık Veli SMS / WhatsApp Bilgilendirmesi
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Öğrencinizin haftalık çözdüğü net soru sayısı, ödev tamamlama oranı ve etüt devam durumu her hafta sonu velimize SMS ve WhatsApp üzerinden ayrıntılı dökümle iletilir.
              </p>

              <ul className="space-y-2 pt-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Haftalık ödev ve soru çözüm takip karnesi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kütüphane ve etüt devam bildirimleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Soru ve talepleriniz için anında danışman yanıtı</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-900 text-xs font-bold text-amber-400/90 flex items-center gap-1.5">
              <BellRing className="w-3.5 h-3.5" />
              <span>Haftalık Otomatik Bildirim Garantisi</span>
            </div>
          </motion.div>

          {/* Card 2: Birebir Veli Görüşmeleri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 sm:p-7 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition-all flex flex-col justify-between space-y-5 shadow-xl group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                  Yüz Yüze & Telefon
                </span>
                <h3 className="text-xl font-black text-white font-['Outfit'] mt-1">
                  Birebir Veli Görüşmeleri
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Rehber öğretmenimiz ve eğitim koçumuz, velilerimizle periyodik randevulu görüşmeler yapar. Hedef analizi, motivasyon durumu ve sınav stratejileri masaya yatırılır.
              </p>

              <ul className="space-y-2 pt-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Öğrenciye özel akademik durum değerlendirmesi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sınav kaygısı ve psikolojik takip desteği</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ev içi çalışma ortamı rehberliği</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-900 text-xs font-bold text-amber-400/90 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Düzenli Randevulu Görüşme Takvimi</span>
            </div>
          </motion.div>

          {/* Card 3: Aylık Gelişim Karnesi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 sm:p-7 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition-all flex flex-col justify-between space-y-5 shadow-xl group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <FileSpreadsheet className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                  Somut İlerleme Raporu
                </span>
                <h3 className="text-xl font-black text-white font-['Outfit'] mt-1">
                  Aylık Gelişim Karnesi & Net Analizi
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Her ay girilen tüm Türkiye Geneli deneme sınavlarının net dökümü, ders bazlı kazanım grafikleri ve kurum içi/il geneli başarı sıralaması resmi karne olarak veliye sunulur.
              </p>

              <ul className="space-y-2 pt-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ders ve konu bazlı eksik analizi dökümü</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Öncesi/Sonrası net artış grafiği</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ÖSYM sıralama simülasyonu</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-900 text-xs font-bold text-amber-400/90 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Yazılı & Dijital Karne Teslimi</span>
            </div>
          </motion.div>

        </div>

        {/* Payment Advantages & Official MEB accreditation banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-400/30 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 text-amber-300 text-xs font-bold">
              <CreditCard className="w-4 h-4 text-amber-400" />
              <span>Velilerimiz İçin Ödeme Kolaylığı</span>
            </div>

            <h4 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
              Vade Farksız Taksit İmkânı & İndirim Avantajları
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Tüm anlaşmalı kredi kartlarına <strong className="text-white font-bold">vade farksız taksit imkânı</strong>, erken kayıt dönemine özel indirimler ve aynı aileden gelen öğrencilerimiz için <strong className="text-amber-400 font-bold">kardeş indirimi avantajları</strong> sunulmaktadır.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0">
            {onOpenGuestStudentModal && (
              <button
                onClick={onOpenGuestStudentModal}
                className="flex-1 lg:flex-initial px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/40 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                1 Gün Misafir Öğrenci Olun
              </button>
            )}

            <button
              onClick={() => onOpenRegisterModal('Birebir Koçluk & Rehberlik')}
              className="flex-1 lg:flex-initial px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-amber-400/20"
            >
              <span>Veli Danışmanlığı Başvurusu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
