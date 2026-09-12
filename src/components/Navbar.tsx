import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/kursData';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onOpenRegisterModal: (preferredService?: string) => void;
  onOpenGuestStudentModal?: () => void;
}

export default function Navbar({ onOpenRegisterModal, onOpenGuestStudentModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Karne Galerisi', href: '#karne-galerisi' },
    { label: 'Başarılarımız', href: '#basarilar' },
    { label: 'VIP Sınıflar (10 Kişi)', href: '#vip-siniflar' },
    { label: 'Veli Takip Sistemi', href: '#veli-bilgilendirme' },
    { label: 'Deneme Kulübü (60+)', href: '#deneme-kulubu' },
    { label: 'Eğitim Felsefemiz', href: '#felsefe' },
    { label: 'Kütüphane (08-22)', href: '#calisma-salonu' },
    { label: 'İletişim & Adres', href: '#iletisim' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-amber-400 text-slate-950 px-4 py-1.5 text-xs font-semibold border-b border-amber-500 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-slate-950 text-amber-300 text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded-full tracking-wide shrink-0">
              MEB ONAYLI
            </span>
            <span className="font-bold truncate text-[11px] sm:text-xs">
              T.C. Millî Eğitim Bakanlığı 5580 Sayılı Kanun Kapsamında Onaylı Resmi Özel Öğretim Kursu
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-xs font-bold">
            {onOpenGuestStudentModal && (
              <button
                onClick={onOpenGuestStudentModal}
                className="hidden md:inline-flex items-center gap-1 text-slate-950 bg-amber-300 hover:bg-amber-200 border border-slate-950/20 px-2 py-0.5 rounded-full text-[11px] font-black cursor-pointer transition-colors"
              >
                <Sparkles className="w-3 h-3 text-slate-950" />
                <span>1 Gün Ücretsiz Deneyim</span>
              </button>
            )}
            <a
              href={`tel:${INSTITUTION_INFO.phone1Raw}`}
              className="flex items-center gap-1 hover:text-slate-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-950" />
              <span>{INSTITUTION_INFO.phone1}</span>
            </a>
            <span className="hidden sm:inline text-amber-800">|</span>
            <a
              href={INSTITUTION_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-slate-950 hover:text-slate-800 transition-colors"
              title="Google Haritalar'da Aç"
            >
              <MapPin className="w-3.5 h-3.5 text-slate-950" />
              <span>Bingöl Merkez (Konum)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        id="main-navigation"
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-3'
            : 'bg-slate-950/80 backdrop-blur-sm py-4 border-b border-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Official Logo */}
          <a
            href="#"
            className="group transition-transform active:scale-95"
            aria-label="Karşıyaka Akademi Ana Sayfa"
          >
            <BrandLogo variant="horizontal" theme="dark" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Direct Chat */}
            <a
              href={`https://wa.me/${INSTITUTION_INFO.whatsappNumber}?text=${encodeURIComponent('Merhaba, Karşıyaka Akademi hakkında bilgi almak ve yerimi ayırtmak istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 transition-colors"
              title="WhatsApp Bilgi Hattı"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Quick Call */}
            <a
              href={`tel:${INSTITUTION_INFO.phone1Raw}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{INSTITUTION_INFO.phone1}</span>
            </a>

            {/* 1 Day Free Trial CTA */}
            {onOpenGuestStudentModal && (
              <button
                onClick={onOpenGuestStudentModal}
                className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg bg-amber-400/15 hover:bg-amber-400/25 text-amber-300 border border-amber-400/40 transition-colors cursor-pointer"
                title="1 Gün Ücretsiz Deneyimleyin"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>1 Gün Ücretsiz Misafir</span>
              </button>
            )}

            {/* Modal Opener */}
            <button
              onClick={() => onOpenRegisterModal()}
              className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-md shadow-amber-400/20 transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Yerinizi Ayırtın</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            {onOpenGuestStudentModal && (
              <button
                onClick={onOpenGuestStudentModal}
                className="px-2.5 py-1.5 text-[11px] font-bold rounded-lg bg-amber-400/20 text-amber-300 border border-amber-400/40"
              >
                1 Gün Ücretsiz
              </button>
            )}
            <button
              onClick={() => onOpenRegisterModal()}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-400 text-slate-950"
            >
              Bilgi Al
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
              aria-label="Menüyü aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3"
            >
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                {onOpenGuestStudentModal && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenGuestStudentModal();
                    }}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-amber-400 text-slate-950 font-bold text-sm"
                  >
                    <Sparkles className="w-4 h-4 fill-slate-950" />
                    <span>1 Gün Ücretsiz Misafir Olun</span>
                  </button>
                )}
                <a
                  href={`tel:${INSTITUTION_INFO.phone1Raw}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 text-white font-bold text-sm border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Ara: {INSTITUTION_INFO.phone1}</span>
                </a>
                <a
                  href={`https://wa.me/${INSTITUTION_INFO.whatsappNumber}?text=${encodeURIComponent('Merhaba, Karşıyaka Akademi hakkında bilgi almak istiyorum.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-bold text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp ile Danış</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
