import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Calendar, 
  User, 
  Phone, 
  GraduationCap, 
  BookOpen, 
  MessageSquare,
  Building2,
  Clock
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/kursData';
import { GuestStudentPayload } from '../types';

interface GuestStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuestStudentModal({ isOpen, onClose }: GuestStudentModalProps) {
  const [formData, setFormData] = useState<GuestStudentPayload>({
    studentName: '',
    phone: '',
    grade: '12. Sınıf (YKS)',
    branch: 'Sayısal',
    preferredDate: '',
    interests: ['Kütüphane & Sessiz Çalışma Salonu', '10 Kişilik VIP Sınıf Örnek Dersi'],
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const availableInterests = [
    'Kütüphane & Sessiz Çalışma Salonu (08:00-22:00)',
    '10 Kişilik VIP Sınıf Örnek Dersi',
    'Birebir Rehberlik & Seviye Belirleme Görüşmesi',
    'Randevulu Soru Çözüm Masası Deneyimi',
    'Örnek Türkiye Geneli Deneme Analizi'
  ];

  const handleInterestToggle = (item: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(item);
      return {
        ...prev,
        interests: exists ? prev.interests.filter((i) => i !== item) : [...prev.interests, item]
      };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.phone.trim()) {
      return;
    }

    // Compose formatted WhatsApp message
    const lines = [
      '🎓 *KARŞIYAKA AKADEMİ - 1 GÜN ÜCRETSİZ MİSAFİR ÖĞRENCİ BAŞVURUSU*',
      '----------------------------------------',
      `👤 *Öğrenci Adı Soyadı:* ${formData.studentName.trim()}`,
      `📱 *İletişim Numarası:* ${formData.phone.trim()}`,
      `📚 *Sınıf Düzeyi:* ${formData.grade}`,
      `🎯 *Alan / Branş:* ${formData.branch}`,
      formData.preferredDate ? `📅 *Tercih Edilen Gün:* ${formData.preferredDate}` : '',
      `✨ *Deneyimlemek İstenen İmkânlar:*`,
      formData.interests.length > 0 ? formData.interests.map((i) => `  • ${i}`).join('\n') : '  • Kurum İçi İnceleme',
      formData.notes ? `💬 *Özel Not / Hedef:* ${formData.notes.trim()}` : '',
      '----------------------------------------',
      'Merhaba, Karşıyaka Akademi’yi 1 gün boyunca yerinde deneyimlemek ve ortamı test etmek istiyorum. Müsaitlik durumuna göre randevu oluşturabilir miyiz?'
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${INSTITUTION_INFO.whatsappNumber}?text=${encodeURIComponent(lines)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-amber-400/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-left"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 p-5 sm:p-6 text-slate-950 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/15 hover:bg-slate-950/30 flex items-center justify-center transition-colors cursor-pointer text-slate-950"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-950/80 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Tamamen Ücretsiz & Taahhütsüz</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] tracking-tight">
              Karşıyaka Akademi’yi 1 Gün Ücretsiz Deneyimleyin!
            </h3>
            
            <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-1 max-w-xl">
              10 Kişilik VIP Sınıflarımızı, sessiz kütüphanemizi ve disiplinli rehberliğimizi yerinde test edin. Karar vermeden önce misafirimiz olun.
            </p>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h4 className="text-2xl font-black text-white font-['Outfit']">
                  Talebiniz WhatsApp’a İletildi!
                </h4>

                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  WhatsApp penceresi açıldı. Mesajınızı onaylayarak eğitim danışmanlarımıza iletebilirsiniz. En kısa sürede sizin için misafir öğrenci programı planlanacaktır.
                </p>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 transition-colors"
                  >
                    Kapat
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-slate-200">
                
                {/* 2 Column: Name and Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-400" />
                      Öğrenci Adı Soyadı *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Ahmet Yılmaz"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      Telefon Numarası (Öğrenci / Veli) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Sınıf & Branş */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                      Sınıf Düzeyi
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="12. Sınıf (YKS)">12. Sınıf (YKS)</option>
                      <option value="Mezun (YKS Hazırlık)">Mezun (YKS Hazırlık)</option>
                      <option value="11. Sınıf (Erken Başlangıç)">11. Sınıf (Erken Başlangıç)</option>
                      <option value="10. Sınıf (Temel Takviye)">10. Sınıf (Temel Takviye)</option>
                      <option value="LGS / Ortaokul">LGS / Ortaokul</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      Alan / Branş
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="Sayısal">Sayısal (MF)</option>
                      <option value="Eşit Ağırlık">Eşit Ağırlık (TM)</option>
                      <option value="Sözel">Sözel (TS)</option>
                      <option value="Yabancı Dil">Yabancı Dil (YDT)</option>
                    </select>
                  </div>
                </div>

                {/* Tercih Edilen Gün */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    Katılmak İstediğiniz Gün / Tercih
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Bu Cumartesi veya Hafta İçi Salı öğleden sonra"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                  />
                </div>

                {/* Deneyimlemek İstenen İmkânlar */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Deneyimlemek İstediğiniz İmkânlar (Birden fazla seçebilirsiniz):
                  </label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {availableInterests.map((interest) => {
                      const isChecked = formData.interests.includes(interest);
                      return (
                        <button
                          type="button"
                          key={interest}
                          onClick={() => handleInterestToggle(interest)}
                          className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all flex items-start gap-2 cursor-pointer ${
                            isChecked
                              ? 'bg-amber-400/15 border-amber-400 text-white'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                              isChecked
                                ? 'bg-amber-400 border-amber-400 text-slate-950'
                                : 'border-slate-600'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                          </span>
                          <span className="leading-tight">{interest}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Not / Hedef */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                    Özel Notunuz veya Hedefiniz (Opsiyonel)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Örn: Hedefim Tıp Fakültesi, özellikle matematik soru çözüm ortamını denemek istiyorum."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                  />
                </div>

                {/* Info Note */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Kütüphanemiz haftanın 6 günü 08:00 - 22:00 arası açıktır. Misafir öğrenci kontenjanı günlük 3 kişiyle sınırlıdır.
                  </span>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>WhatsApp ile Ücretsiz Deneyim Talebini Gönder</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Footer note */}
          <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              {INSTITUTION_INFO.addressDetail}
            </span>
            <span className="text-amber-400 font-semibold">
              Danışma: {INSTITUTION_INFO.phone1}
            </span>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
