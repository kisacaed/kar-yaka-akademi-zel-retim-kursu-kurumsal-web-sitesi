export interface DenemeYayin {
  id: string;
  name: string;
  tagline: string;
  category: 'Genel' | 'Matematik' | 'Fen' | 'Edebiyat / Sosyal';
  highlight: string;
  description: string;
  badge: string;
  popularity: number; // e.g. 98
}

export interface VipFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  category: 'Rehberlik' | 'Akademik' | 'Ortam';
  badge?: string;
}

export interface KursProgram {
  id: string;
  title: string;
  targetAudience: string;
  classSize: string;
  features: string[];
  recommendedFor: string;
  badge?: string;
  accent: 'amber' | 'blue' | 'emerald' | 'purple';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Kayıt' | 'VIP Sınıf' | 'Deneme Kulübü' | 'Rehberlik';
}

export interface ExamNetBreakdown {
  turkce?: number;
  matematik?: number;
  fen?: number;
  sosyal?: number;
}

export interface SuccessStory {
  id: string;
  studentTitle: string; // e.g. "Öğrenci K.A. (Sayısal)"
  targetFaculty: string; // e.g. "Tıp Fakültesi Hedefi"
  netIncrease: number; // e.g. 60
  initialExamName: string; // e.g. "Bilgi Sarmal TG TYT 1"
  initialNet: number; // e.g. 58.75
  initialScore: number; // e.g. 318.293
  finalExamName: string; // e.g. "Bilgi Sarmal TG TYT 2"
  finalNet: number; // e.g. 113.75
  finalScore: number; // e.g. 481.780
  currentStatusNote?: string; // e.g. "Şu an 120 Net'e ulaşıldı"
  ranking?: string; // e.g. "Genel %0.04 - İl & İlçe 1.si"
  studyMethod: string; // e.g. "Sınıf dersi veya özel ders olmadan birebir koçluk ve soru çözümü ile"
  duration?: string; // e.g. "Eylül - Şubat (5 Ay)"
  category: 'tip-derece' | 'buyuk-sicrama' | 'temelden-yukselis';
  tags: string[];
  initialBreakdown?: ExamNetBreakdown;
  finalBreakdown?: ExamNetBreakdown;
}

export interface PreRegistrationPayload {
  studentName: string;
  parentPhone: string;
  gradeOrTarget: string;
  interestedIn: 'VIP Sınıf (10 Kişilik)' | 'Deneme Kulübü (60+ Sınav)' | 'Birebir Özel Ders' | 'Kütüphane / Çalışma Salonu' | 'Birebir Koçluk & Rehberlik' | '%25 Erken Kayıt Başvurusu';
  notes?: string;
}

export interface GuestStudentPayload {
  studentName: string;
  phone: string;
  grade: string;
  branch: string;
  preferredDate: string;
  interests: string[];
  notes?: string;
}

export interface GalleryPhoto {
  id: number;
  filename: string;
  title: string;
  netGainText: string;
  netGainNumber: number;
  slogan: string;
  firstExam: {
    name: string;
    net: number;
    score: number;
  };
  lastExam: {
    name: string;
    net: number;
    score: number;
  };
  highlightNote?: string;
  tags: string[];
}
