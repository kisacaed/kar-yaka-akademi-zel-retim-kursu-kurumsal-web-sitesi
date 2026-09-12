import { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import PhotoGallerySection from './components/PhotoGallerySection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import ParentTrustSection from './components/ParentTrustSection';
import VipClassAndExpectations from './components/VipClassAndExpectations';
import DenemeKulubuSection from './components/DenemeKulubuSection';
import StudyHallSection from './components/StudyHallSection';
import ProgramsSection from './components/ProgramsSection';
import FAQSection from './components/FAQSection';
import ContactFooter from './components/ContactFooter';
import RegistrationCalculatorModal from './components/RegistrationCalculatorModal';
import GuestStudentModal from './components/GuestStudentModal';
import FloatingContact from './components/FloatingContact';

export default function App() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [guestStudentModalOpen, setGuestStudentModalOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<string>('VIP Sınıf (10 Kişilik)');

  const handleOpenRegisterModal = (service?: string) => {
    if (service) {
      setDefaultService(service);
    }
    setRegisterModalOpen(true);
  };

  const handleOpenGuestStudentModal = () => {
    setGuestStudentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Main Sticky Header */}
      <Navbar 
        onOpenRegisterModal={handleOpenRegisterModal} 
        onOpenGuestStudentModal={handleOpenGuestStudentModal}
      />

      {/* Main Page Flow with Scroll Animations */}
      <main className="flex-grow">
        {/* 1. Hero Section: Afiş slogans, 10 Kişilik VIP, Sadece 40 Öğrenci, %50 İndirim */}
        <HeroSection 
          onOpenRegisterModal={handleOpenRegisterModal} 
          onOpenGuestStudentModal={handleOpenGuestStudentModal}
        />

        {/* 2. Educational Philosophy: "Sorun Çalışmamak Değil..." (Afiş 3) */}
        <PhilosophySection onOpenRegisterModal={() => handleOpenRegisterModal('Birebir Koçluk & Rehberlik')} />

        {/* 3. Real Success Stories & Score Increases (Karneler & Net Artışları) */}
        <SuccessStoriesSection onOpenRegisterModal={handleOpenRegisterModal} />

        {/* 3.5 Photo Gallery with Left/Right Arrows for 8 Original Posters & Report Cards */}
        <PhotoGallerySection 
          onOpenRegisterModal={handleOpenRegisterModal}
          onOpenGuestStudentModal={handleOpenGuestStudentModal}
        />

        {/* 4. Parent Trust & Guarantees: MEB Onayı, Haftalık Veli Bilgilendirmesi, Vade Farksız Taksit */}
        <ParentTrustSection 
          onOpenRegisterModal={handleOpenRegisterModal}
          onOpenGuestStudentModal={handleOpenGuestStudentModal}
        />

        {/* 5. VIP Classes & 9 Expectations (Afiş 2 & Afiş 4: Sizi Neler Bekliyor?) */}
        <VipClassAndExpectations onOpenRegisterModal={handleOpenRegisterModal} />

        {/* 6. Deneme Kulübü: 60+ Kaliteli Deneme & Hızlı Optik Okuma & 10 Seçkin Yayın */}
        <DenemeKulubuSection onOpenRegisterModal={handleOpenRegisterModal} />

        {/* 7. Study Hall & Library: Haftanın 6 Günü 08:00 - 22:00 Sessiz Kütüphane */}
        <StudyHallSection 
          onOpenRegisterModal={handleOpenRegisterModal} 
          onOpenGuestStudentModal={handleOpenGuestStudentModal}
        />

        {/* 8. Programs: YKS Sayısal, Eşit Ağırlık, Deneme Kulübü Paketleri */}
        <ProgramsSection onOpenRegisterModal={handleOpenRegisterModal} />

        {/* 9. FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer with Bingöl address, phone numbers and Google Maps */}
      <ContactFooter onOpenRegisterModal={() => handleOpenRegisterModal()} />

      {/* Floating Speed Contact (WhatsApp, Call, Form, Guest Student) */}
      <FloatingContact 
        onOpenRegisterModal={() => handleOpenRegisterModal()} 
        onOpenGuestStudentModal={handleOpenGuestStudentModal}
      />

      {/* Registration & Consultation Modal */}
      <RegistrationCalculatorModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        defaultService={defaultService}
      />

      {/* 1 Day Free Trial Guest Student Modal */}
      <GuestStudentModal
        isOpen={guestStudentModalOpen}
        onClose={() => setGuestStudentModalOpen(false)}
      />
    </div>
  );
}
