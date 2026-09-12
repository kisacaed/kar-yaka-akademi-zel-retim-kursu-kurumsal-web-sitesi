import { motion } from 'motion/react';
import { 
  Users, 
  UserCheck, 
  FileText, 
  TrendingUp, 
  BookOpen, 
  Target, 
  Wifi, 
  HelpCircle, 
  CalendarCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Library,
  BookMarked
} from 'lucide-react';
import { NINE_EXPECTATIONS, INSTITUTION_INFO } from '../data/kursData';

interface VipClassAndExpectationsProps {
  onOpenRegisterModal: (service?: string) => void;
}

export default function VipClassAndExpectations({ onOpenRegisterModal }: VipClassAndExpectationsProps) {
  
  // Icon mapper for the 9 items
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-amber-400" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-amber-400" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-amber-400" />;
      case 'HelpCircle':
        return <HelpCircle className="w-6 h-6 text-amber-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="vip-siniflar" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top VIP Presentation Banner */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-5 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Butik & Birebir Kurs Anlayışı</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Outfit'] leading-tight">
              10 KİŞİLİK VIP SINIFLAR
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 block">
                Kalabalık Yok, Birebir Takip Var.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Öğrencinin arka sıralarda kaybolmadığı, anlamadığı her yeri anında sorabildiği ve öğretmenin gözünün sürekli üzerinde olduğu 10 kişilik VIP sınıflarla başarıyı şansa bırakmıyoruz.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase">Ders Öğrencisi Limiti</span>
                  <Users className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-2xl font-black text-white">Sadece 40 Öğrenci</p>
                <p className="text-xs text-slate-400">Sınırlı kontenjan ile tavizsiz yoğun ilgi ve disiplin.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase">Kaynak Özgürlüğü</span>
                  <BookMarked className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-2xl font-black text-white">Kaynaklarını Kendin Seç!</p>
                <p className="text-xs text-slate-400">Tek tip kitap dayatması yok. Seviyene ve hedefine uygun kaynak.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenRegisterModal('VIP Sınıf (10 Kişilik)')}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-amber-400/20 cursor-pointer active:scale-95 transition-all"
              >
                <span>VIP Sınıf Ön Kaydı Oluştur</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${INSTITUTION_INFO.phone1Raw}`}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm sm:text-base transition-colors"
              >
                Bilgi Hattı: {INSTITUTION_INFO.phone1}
              </a>
            </div>
          </motion.div>

          {/* Right Card / Golden Seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-amber-500/20 via-slate-950 to-slate-950 p-8 border-2 border-amber-400/50 shadow-2xl text-left space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                  2026 - 2027 SEZONU
                </span>
                <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase">
                  Kayıtlarımız Devam Ediyor
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Karşıyaka Akademi Sözü
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                  &ldquo;Az Öğrenci, Yoğun İlgi, Birebir Takip.&rdquo;
                </h3>
              </div>

              <div className="space-y-3 pt-2 text-sm text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <UserCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <span><strong>Birebir Koçluk:</strong> Haftalık hedef ve ödev denetimi</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <FileText className="w-5 h-5 text-amber-400 shrink-0" />
                  <span><strong>Haftalık Deneme:</strong> ÖSYM optik kodlama ve Türkiye geneli sıralama</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <CalendarCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <span><strong>Birebir Ödev Takibi:</strong> Yapılmayan ödev asla geçiştirilmez</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-300 font-semibold text-center">
                Kontenjanlarımız sınırlıdır, geç kalmayın!
              </div>

            </div>
          </motion.div>

        </div>

        {/* SİZİ NELER BEKLİYOR? - 9 Items Grid from Afiş 4 */}
        <div id="ayricaliklar" className="pt-10 border-t border-slate-800/80">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-amber-400 text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" /> KARŞIYAKA AKADEMİ FARKI
            </span>
            <h3 className="text-3xl sm:text-5xl font-black text-white font-['Outfit']">
              👉 SİZİ NELER BEKLİYOR? 👈
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Afişlerimizde yer alan 9 temel gücümüz; başarıyı tesadüflere değil, sarsılmaz bir sisteme bağlar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NINE_EXPECTATIONS.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400/60 transition-all text-left flex flex-col justify-between hover:shadow-xl hover:shadow-amber-400/5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {renderIcon(feature.iconName)}
                    </div>
                    {feature.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors font-['Outfit']">
                      {feature.title}
                    </h4>
                    <p className="text-xs font-bold text-amber-400/90 mt-0.5">
                      {feature.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-900 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-400">Madde 0{idx + 1}</span>
                  <span className="text-amber-400/80 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    İncele &rarr;
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
