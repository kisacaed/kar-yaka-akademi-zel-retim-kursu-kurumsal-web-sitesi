import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Phone, MessageCircle, Sparkles, Send, MapPin } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/kursData';
import BrandLogo from './BrandLogo';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function RegistrationCalculatorModal({
  isOpen,
  onClose,
  defaultService = 'VIP Sınıf (10 Kişilik)'
}: RegistrationModalProps) {
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [targetBranch, setTargetBranch] = useState(defaultService || 'VIP Sınıf (10 Kişilik)');
  const [grade, setGrade] = useState('12. Sınıf');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStudentName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  const whatsappMessage = `Merhaba Karşıyaka Akademi, ben ${studentName || 'öğrenci/veli'}. ${grade} için ${targetBranch} hakkında bilgi almak ve yerimi ayırtmak istiyorum. İletişim Numaram: ${phone}`;
  const whatsappUrl = `https://wa.me/${INSTITUTION_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-lg rounded-3xl bg-slate-900 border-2 border-amber-400/40 p-6 sm:p-8 text-white shadow-2xl shadow-amber-400/10 my-8 text-left"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Header */}
            <div className="space-y-2 pr-8">
              <div className="pb-1">
                <BrandLogo variant="horizontal" theme="dark" showYear={false} />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>MEB Onaylı • Sınırlı VIP Kontenjan</span>
              </div>
              <h3 className="text-2xl font-black text-white font-['Outfit']">
                Yerinizi Ayırtın & Bilgi Alın
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Afişlerimize özel <strong className="text-amber-400">%50 Eylül İndirimi</strong>, vade farksız taksit ve kardeş indirimi avantajları için formu doldurun, sizi arayalım.
              </p>
            </div>

            {/* Student Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Öğrenci / Veli Adı Soyadı *
              </label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Örn: Ahmet Yılmaz"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Telefon Numarası *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="05XX XXX XX XX"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
              />
            </div>

            {/* Program Selection */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  İlgilenilen Alan
                </label>
                <select
                  value={targetBranch}
                  onChange={(e) => setTargetBranch(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-xs sm:text-sm"
                >
                  <option value="Koçluk ve Etüt Paketi">Koçluk ve Etüt Paketi</option>
                  <option value="VIP Sınıf (10 Kişilik)">10 Kişilik VIP Sınıf</option>
                  <option value="YKS Sayısal VIP Hazırlık">YKS Sayısal VIP Hazırlık</option>
                  <option value="YKS Eşit Ağırlık VIP Hazırlık">YKS Eşit Ağırlık VIP Hazırlık</option>
                  <option value="60+ Deneme Kulübü Üyeliği">60+ Deneme Kulübü (%50 İndirim)</option>
                  <option value="Kütüphane / Çalışma Salonu">Kütüphane (08:00 - 22:00)</option>
                  <option value="Birebir Özel Ders">Birebir Özel Ders</option>
                  <option value="%25 Erken Kayıt Başvurusu">%25 Erken Kayıt Başvurusu</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Sınıf / Düzey
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-xs sm:text-sm"
                >
                  <option value="12. Sınıf">12. Sınıf (YKS)</option>
                  <option value="Mezun Grubu">Mezun Grubu (YKS)</option>
                  <option value="11. Sınıf">11. Sınıf (Ara Sınıf)</option>
                  <option value="YDT / Dil">YDT / Yabancı Dil</option>
                </select>
              </div>
            </div>

            {/* Optional Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Hedefiniz veya Sormak İstedikleriniz (Opsiyonel)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Örn: Tıp hedefliyorum, deneme kulübü günleri hakkında bilgi almak istiyorum."
                className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs sm:text-sm"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2 space-y-2.5">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 cursor-pointer active:scale-95 transition-transform"
              >
                <Send className="w-4 h-4" />
                <span>Ön Kayıt Talebini Gönder</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-1">
                <span>⚡ Hemen aramak için:</span>
                <a href={`tel:${INSTITUTION_INFO.phone1Raw}`} className="text-amber-400 font-bold hover:underline">
                  {INSTITUTION_INFO.phone1}
                </a>
              </div>
            </div>

          </form>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white font-['Outfit']">
                Talebiniz Alındı!
              </h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Sayın <strong>{studentName}</strong>, Karşıyaka Akademi rehberlik ekibimiz en kısa sürede <strong>{phone}</strong> numarasından sizinle iletişime geçecektir.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Program:</span>
                <span className="text-amber-400 font-bold">{targetBranch}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Düzey:</span>
                <span className="text-white font-medium">{grade}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Kurum / Konum:</span>
                <a
                  href={INSTITUTION_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline font-medium text-xs flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3" />
                  <span>Karşıyaka Mah. (Haritada Aç)</span>
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Action to speed up */}
            <div className="space-y-2 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp’tan Anında Mesaj Gönder</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-bold text-xs cursor-pointer"
              >
                Tamamla ve Kapat
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
