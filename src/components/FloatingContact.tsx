import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/kursData';

interface FloatingContactProps {
  onOpenRegisterModal: () => void;
  onOpenGuestStudentModal?: () => void;
}

export default function FloatingContact({ onOpenRegisterModal, onOpenGuestStudentModal }: FloatingContactProps) {
  return (
    <aside aria-label="Hızlı İletişim Butonları" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* 1 Day Free Trial trigger */}
      {onOpenGuestStudentModal && (
        <button
          onClick={onOpenGuestStudentModal}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900/95 hover:bg-slate-850 text-amber-300 font-bold text-xs shadow-xl border border-amber-400/50 cursor-pointer active:scale-95 transition-all backdrop-blur-md"
          title="Karşıyaka Akademi'yi 1 Gün Ücretsiz Deneyimleyin"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>1 Gün Ücretsiz Misafir Ol</span>
        </button>
      )}

      {/* Floating Modal trigger on mobile */}
      <button
        onClick={onOpenRegisterModal}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-400/30 border border-amber-300 cursor-pointer active:scale-95 transition-all"
        title="Yerinizi Ayırtın"
      >
        <Sparkles className="w-4 h-4 fill-slate-950" />
        <span className="hidden sm:inline">Kayıt & Bilgi Al</span>
        <span className="sm:hidden">Bilgi Al</span>
      </button>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${INSTITUTION_INFO.whatsappNumber}?text=${encodeURIComponent('Merhaba Karşıyaka Akademi, afişteki eğitim ve deneme kulübü imkanları hakkında bilgi almak istiyorum.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 border-2 border-emerald-300 transition-transform hover:scale-110 active:scale-95"
        title="WhatsApp ile İletişime Geç"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Floating Call */}
      <a
        href={`tel:${INSTITUTION_INFO.phone1Raw}`}
        className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 flex items-center justify-center shadow-xl border border-slate-700 transition-transform hover:scale-110 active:scale-95"
        title="Hemen Ara: 0534 268 24 79"
        aria-label="Telefonla Ara"
      >
        <Phone className="w-5 h-5" />
      </a>
    </aside>
  );
}
