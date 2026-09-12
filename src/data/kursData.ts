import { DenemeYayin, VipFeature, KursProgram, FAQItem, SuccessStory, GalleryPhoto } from '../types';

export const INSTITUTION_INFO = {
  name: 'Karşıyaka Akademi',
  officialName: 'Karşıyaka Akademi Özel Öğretim Kursu',
  foundingYear: '2024',
  city: 'Bingöl',
  district: 'Merkez',
  address: 'Karşıyaka Mahallesi, Dağlar Caddesi, Elleri Yapı A ve B girişli Blok No: 16/H',
  addressDetail: 'Hz. Osman Camii Karşısı, Nasa Reklam Yanı',
  fullAddress: 'Karşıyaka Mahallesi Dağlar Caddesi Elleri Yapı A ve B girişli Blok No: 16/H (Hz. Osman Camii Karşısı, Nasa Reklam Yanı), Merkez / BİNGÖL',
  googleMapsUrl: 'https://maps.app.goo.gl/y1vUBftP2DUGa7Re8',
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=38.8947662,40.491602&hl=tr&z=17&output=embed',
  logoUrl: '/logo.svg',
  phone1: '0534 268 24 79',
  phone1Raw: '05342682479',
  phone1International: '+905342682479',
  phone2: '0507 091 46 16',
  phone2Raw: '05070914616',
  phone2International: '+905070914616',
  phone: '0534 268 24 79',
  phoneRaw: '05342682479',
  phoneInternational: '+905342682479',
  whatsappNumber: '905342682479',
  slogans: {
    primary: 'Kalabalıkta Kaybolmak Yok!',
    discipline: 'Başarı Bir Tercih Değil, Bir Disiplindir!',
    futureNoLuck: 'Üniversiteye Hazırlıkta Geleceğini Şansa Bırakma!',
    realGuidance: 'Seni Gerçekten Birebir Takip Eden Koçluk ve Gerçek Rehberlik',
    philosophyQuote1: 'Sorun çalışmamak değil.',
    philosophyQuote2: 'Sorun takipsiz, plansız ve yönlendirmesiz çalışma.',
    callToAction: 'Planlı çalış, geleceğini riske atma!',
    subSlogan: 'Az öğrenci, yoğun ilgi, birebir takip.'
  },
  keyMetrics: {
    classSize: '10 Kişilik VIP Sınıflar',
    totalQuota: 'Sadece 40 Ders Öğrencisi',
    trialsCount: '60+ Kaliteli Deneme',
    campaign: 'Eylül Ayına Özel %50 İndirim',
    earlyBirdDiscount: '%25 Erken Kayıt İndirimi',
    quotaStatus: 'Kontenjanlarımız Sınırlıdır'
  },
  mebAccreditation: 'T.C. Millî Eğitim Bakanlığı 5580 Sayılı Kanun Kapsamında Onaylı Resmi Özel Öğretim Kursu',
  libraryHours: 'Haftanın 6 Günü 08:00 - 22:00 Arası Kesintisiz Sessiz Kütüphane',
  paymentAdvantages: 'Kredi kartına vade farksız taksit imkânı, erken kayıt ve kardeş indirimi avantajları'
};

// 10 Seçkin Deneme Yayını (Afiş 1'den birebir)
export const SELECTED_PUBLISHERS: DenemeYayin[] = [
  {
    id: 'bilgi-sarmal',
    name: 'BİLGİ SARMAL',
    tagline: 'Yeni Nesil ÖSYM Standartları',
    category: 'Genel',
    highlight: 'TYT & AYT Türkiye Geneli',
    description: 'Yeni nesil kurgusal sorular, kavram yanılgılarını gideren detaylı çözümler ve ÖSYM eşdeğeri zorluk dengesi.',
    badge: 'Resmi Deneme Ortağı',
    popularity: 99
  },
  {
    id: 'ucdortbes',
    name: 'ÜÇDÖRTBEŞ (345)',
    tagline: 'Kolaydan Zora Gerçek Sınav Provası',
    category: 'Genel',
    highlight: 'Özgün & Aşamalı Testler',
    description: 'Türkiye’nin en çok çözülen denemeleri; ÖSYM soru mantığına birebir uyumlu, derece yaptıran soru kurguları.',
    badge: 'Türkiye Geneli',
    popularity: 98
  },
  {
    id: '3d-yayinlari',
    name: '3D YAYINLARI',
    tagline: 'Derinlikli & Yüksek Seçicilik',
    category: 'Matematik',
    highlight: 'Simülasyon Denemeleri',
    description: 'Klasikleşen 3D simülasyon denemeleriyle gerçek YKS zorluk seviyesini önceden yaşatan seçici sorular.',
    badge: 'Yüksek Seçicilik',
    popularity: 97
  },
  {
    id: 'limit-yayinlari',
    name: 'LİMİT YAYINLARI',
    tagline: 'Edebiyat, Sosyal ve Fen Gücü',
    category: 'Edebiyat / Sosyal',
    highlight: 'Akademik Derinlik',
    description: 'Özellikle Edebiyat, Tarih, Coğrafya ve Fende müfredatın tüm püf noktalarını tarayan usta deneme serisi.',
    badge: 'Müfredat Öncüsü',
    popularity: 96
  },
  {
    id: 'hiz-ve-renk',
    name: 'HIZ VE RENK',
    tagline: 'Zaman Yönetimi ve Hız Kazandıran Testler',
    category: 'Genel',
    highlight: 'Kırmızı - Mavi - Turuncu Testler',
    description: 'Kronometreli soru çözümü alışkanlığı kazandıran, sınav esnasında süre paniklerini sıfırlayan denemeler.',
    badge: 'Süre Koçluğu',
    popularity: 94
  },
  {
    id: 'ozdebir-yayinlari',
    name: 'ÖZDEBİR YAYINLARI',
    tagline: 'Yüz Binlerce Öğrenci Arasındaki Gerçek Sıralaman',
    category: 'Genel',
    highlight: 'Resmi Türkiye Geneli',
    description: 'Sınava giren yüz binlerce öğrenci arasında netlerinin ve Türkiye geneli yüzdelik diliminin net analizi.',
    badge: 'Ulusal Sıralama',
    popularity: 100
  },
  {
    id: 'toprak-yayincilik',
    name: 'TOPRAK YAYINCILIK',
    tagline: 'Analitik Akıl Yürütme ve Sağlam Temel',
    category: 'Fen',
    highlight: 'Öğretici & Analitik',
    description: 'Ezberden uzak, mantık yürüterek çözülen analitik sorularla eksik kazanımları nokta atışı belirleme.',
    badge: 'Kazanım Odaklı',
    popularity: 93
  },
  {
    id: 'mikroorijinal',
    name: 'MİKROORİJİNAL',
    tagline: 'Temelden Başlayıp Zirveye Taşıyan Adımlar',
    category: 'Matematik',
    highlight: 'Adım Adım Gelişim',
    description: 'Konu eksiklerini mikroskobik titizlikle tespit eden, temelini sağlamlaştırmak isteyen her öğrenci için ideal seri.',
    badge: 'Kavramsal Pekiştirme',
    popularity: 92
  },
  {
    id: 'orbital-yayinlari',
    name: 'ORBİTAL YAYINLARI',
    tagline: 'Kimya ve Fen Branşlarında Kusursuz Doğruluk',
    category: 'Fen',
    highlight: 'Fen & Kimya Otoritesi',
    description: 'YKS Fen Bilimleri ve Kimya alanında ÖSYM’nin sormayı en çok sevdiği soru tiplerini içeren uzman yayın.',
    badge: 'Branş Lideri',
    popularity: 95
  },
  {
    id: 'orijinal-yayinlari',
    name: 'ORİJİNAL YAYINLARI',
    tagline: 'Matematik ve Geometrinin Zirvesi',
    category: 'Matematik',
    highlight: 'Sarı - Mavi - Kırmızı Seviyeler',
    description: 'Öğrencinin ufkunu açan, derece hedefleyenlerin vazgeçilmezi olan özgün ve vizyoner matematik denemeleri.',
    badge: 'Derece Hedefi',
    popularity: 99
  }
];

// Afiş 4'teki "SİZİ NELER BEKLİYOR?" 9 Temel Ayrıcalık
export const NINE_EXPECTATIONS: VipFeature[] = [
  {
    id: 'birebir-kocluk',
    title: 'Birebir Koçluk ve Ödev Takibi',
    subtitle: 'Kişiye Özel İlgi',
    description: 'Haftalık birebir görüşmelerle her öğrencinin çalışma performansı, konu ilerleyişi ve ödevleri titizlikle denetlenir.',
    iconName: 'UserCheck',
    category: 'Rehberlik',
    badge: 'Haftalık Birebir'
  },
  {
    id: 'haftalik-deneme',
    title: 'Haftalık Deneme Sınavı',
    subtitle: '60+ Kaliteli Sınav',
    description: 'Her hafta Türkiye’nin en seçkin 10 yayınının denemeleriyle gerçek sınav ortamı deneyimlenir ve optik analizi yapılır.',
    iconName: 'FileText',
    category: 'Akademik',
    badge: 'Türkiye Geneli'
  },
  {
    id: 'basari-takibi',
    title: 'Başarı Takibi & Net Analizi',
    subtitle: 'Seni Gerçekten Takip Eden Rehberlik',
    description: 'Her deneme sonrasında branş ve konu bazlı karneler oluşturularak hangi konudan açık verildiği somut verilerle tespit edilir.',
    iconName: 'TrendingUp',
    category: 'Rehberlik',
    badge: 'Konu Analizli'
  },
  {
    id: 'sessiz-kutuphane',
    title: 'Sessiz ve Konforlu Kütüphane',
    subtitle: 'Bingöl’ün En İyi Çalışma Salonu',
    description: 'Geniş çalışma masaları, ergonomik koltuklar ve tam sessizlik kuralıyla maksimum odaklanma ortamı sunulur.',
    iconName: 'BookOpen',
    category: 'Ortam',
    badge: 'Konforlu Alan'
  },
  {
    id: 'verimli-ortam',
    title: 'Verimli Çalışma Ortamı',
    subtitle: 'Disiplin ve Motivasyon',
    description: 'Sadece ders çalışan, aynı hedefe odaklanmış bilinçli akranlarla birlikte çalışmanın sağladığı güçlü motivasyon atmosferi.',
    iconName: 'Target',
    category: 'Ortam',
    badge: 'Tam Odak'
  },
  {
    id: 'sinirsiz-wifi',
    title: 'Sınırsız Yüksek Hızlı Wi-Fi',
    subtitle: 'Kesintisiz Dijital Kaynaklar',
    description: 'Konu anlatım videolarını izlemek, soru çözüm arşivlerini taramak ve dijital içeriklere ulaşmak için yüksek hızlı internet.',
    iconName: 'Wifi',
    category: 'Ortam',
    badge: 'Yüksek Hız'
  },
  {
    id: 'soru-cozumu',
    title: 'Randevulu Soru Çözümü',
    subtitle: 'Sıra Beklemek Yok!',
    description: 'Öğretmeninle randevulaşarak takıldığın soruları masanda baş başa çözdürme imkânı. Çözülmemiş tek bir soru bile kalmaz.',
    iconName: 'HelpCircle',
    category: 'Akademik',
    badge: 'Randevulu Sistem'
  },
  {
    id: 'vip-siniflar',
    title: '10 Kişilik VIP Sınıflar',
    subtitle: 'Verimli Ders Anlatımı',
    description: 'Kalabalık dershane sınıflarında kaybolmaya son. 10 kişilik sınıflarda interaktif ders, öğretmenin her öğrenciyle birebir teması.',
    iconName: 'Users',
    category: 'Akademik',
    badge: 'Maks. 10 Kişi'
  },
  {
    id: 'disiplinli-program',
    title: 'Disiplinli ve Sistemli Çalışma',
    subtitle: 'Başarı Bir Disiplindir',
    description: 'Öğrencinin kapasitesine ve hedefine uygun gerçekçi günlük ve haftalık çalışma takvimi ile tavizsiz takip.',
    iconName: 'CalendarCheck',
    category: 'Rehberlik',
    badge: 'Sistemli Takip'
  }
];

// Afişlerdeki 5 Temel Güçlü Karşıyaka Akademi Maddesi (Afiş 3)
export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'Her Hafta Deneme + Net Analizi',
    description: 'Ezbere net hesabı değil; hangi konudan, hangi soru tipinden hata yapıldığını gösteren yapay kazanım dökümü.'
  },
  {
    number: '02',
    title: 'Seni Gerçekten Takip Eden Rehberlik',
    description: 'Haftada bir formalite görüşmesi değil; ders saatlerinden etüt verimine kadar günlük disiplini izleyen mentorluk.'
  },
  {
    number: '03',
    title: 'Randevulu Soru Çözüm Sistemi',
    description: 'Koridorda öğretmen kovalamak veya sıra kavgası vermek yok. Sisteme gir, randevunu al, öğretmeninle birebir sorunu çöz.'
  },
  {
    number: '04',
    title: 'Öğrenciye Özel Gerçekçi Çalışma Planı',
    description: 'Uygulanamayan hayali listeler yerine; öğrencinin günlük uyku, okul ve etüt temposuna tam oturan uygulanabilir programlar.'
  },
  {
    number: '05',
    title: "Bingöl'ün En İyi Çalışma Salonu",
    description: 'Kafelerdeki gürültüden veya evdeki dikkat dağıtıcılardan uzak, tam profesyonel sessiz etüt salonu.'
  }
];

// Eğitim Paketleri & Kurs Programları
export const KURS_PROGRAMLARI: KursProgram[] = [
  {
    id: 'vip-sayisal',
    title: 'YKS Sayısal VIP Hazırlık',
    targetAudience: '12. Sınıf & Mezun Sayısal Öğrencileri',
    classSize: '10 Kişilik VIP Sınıf',
    badge: 'En Çok Tercih Edilen',
    accent: 'amber',
    recommendedFor: 'Tıp, Mühendislik, Diş Hekimliği Hedefleyenler',
    features: [
      '10 kişilik butik sınıflarda TYT ve AYT Matematik, Fizik, Kimya, Biyoloji',
      'Haftalık Türkiye geneli denemeler ve detaylı branş net analizleri',
      'Haftalık birebir koçluk görüşmesi ve ödev takibi',
      'Randevulu birebir soru çözüm seansları',
      'Bingöl’ün en iyi çalışma salonuna ve sessiz kütüphanesine tam erişim',
      'Ders kaynaklarını kendin seçme özgürlüğü'
    ]
  },
  {
    id: 'vip-esit-agirlik',
    title: 'YKS Eşit Ağırlık VIP Hazırlık',
    targetAudience: '12. Sınıf & Mezun EA Öğrencileri',
    classSize: '10 Kişilik VIP Sınıf',
    badge: 'Derece Odaklı',
    accent: 'blue',
    recommendedFor: 'Hukuk, Psikoloji, İktisat ve Yönetim Hedefleyenler',
    features: [
      '10 kişilik sınıflarda Matematik, Geometri, Türk Dili ve Edebiyatı, Tarih, Coğrafya',
      'ÖSYM soru formatlarına birebir uygun paragraf ve problem kampları',
      'Haftalık bireysel koçluk ve hedef üniversite simülasyonu',
      'Kişiye özel çalışma ve ödev programı',
      'Soru çözüm saatlerinde branş öğretmenleriyle birebir soru inceleme',
      'Sınırsız Wi-Fi ve sessiz etüt ortamı'
    ]
  },
  {
    id: 'kocluk-etut-paketi',
    title: 'Koçluk ve Etüt Paketi',
    targetAudience: '12. Sınıf & Mezun (Tüm Alanlar)',
    classSize: 'Birebir Mentorluk & Kütüphane Etüt',
    badge: 'Yoğun Talep',
    accent: 'purple',
    recommendedFor: 'Birebir koçluk, soru çözümü, kütüphane ve deneme kulübüyle eksiksiz ilerlemek isteyenler',
    features: [
      'Haftalık birebir koçluk görüşmesi ve ödev takibi',
      'Randevulu birebir soru çözüm seansları',
      'Bingöl’ün en iyi çalışma salonuna ve sessiz kütüphanesine tam erişim',
      'Haftalık Türkiye geneli denemeler (Yıl boyunca 60+ kaliteli Türkiye geneli ve kurumsal deneme sınavı - Bilgi Sarmal, 3D, 345, Limit, Özdebir, Orijinal dahil 10 seçkin yayın )'
    ]
  },
  {
    id: 'deneme-kulubu',
    title: '60+ Deneme Kulübü Üyeliği',
    targetAudience: '11, 12. Sınıf & Mezun (Tüm Alanlar)',
    classSize: 'Gerçek Sınav Düzeni',
    badge: 'Eylül Ayına Özel %50 İndirim',
    accent: 'emerald',
    recommendedFor: 'Ders almadan da Türkiye geneli seçkin denemelere katılmak isteyenler',
    features: [
      'Bilgi Sarmal, 3D, 345, Limit, Özdebir, Orijinal dahil 10 seçkin yayın',
      'Yıl boyunca 60+ kaliteli Türkiye geneli ve kurumsal deneme sınavı',
      'Optik okuma ve anında bireysel sonuç dökümü',
      'Sınav sonrası konu eksik analizi ve sıralama takibi',
      'Gerçek sınav düzeninde ve zamanında uygulama',
      'Sınırlı kontenjan garantisi'
    ]
  }
];

// Sıkça Sorulan Sorular
export const FAQS: FAQItem[] = [
  {
    question: '10 Kişilik VIP sınıf ne anlama geliyor?',
    answer: 'Sınıflarımızda en fazla 10 öğrenci bulunur. Bu sayede öğretmen her öğrencinin dersi anlayıp anlamadığını doğrudan gözlemleyebilir, soru sorulmasını teşvik eder ve kimse arka sıralarda kaybolmaz. Kalabalık 20-30 kişilik sınıflara göre verim katbekat yüksektir.',
    category: 'VIP Sınıf'
  },
  {
    question: 'Neden "Sadece 40 Ders Öğrencisi" sınırı var?',
    answer: 'Karşıyaka Akademi olarak fabrikasyon eğitim anlayışını reddediyoruz. Butik bir yapıda kalarak her öğrencimize isim isim hakim olmak, rehberliğini, ödev takibini ve soru çözümünü tavizsiz sürdürebilmek için ders kontenjanımızı kesin olarak 40 öğrenciyle sınırlandırdık.',
    category: 'VIP Sınıf'
  },
  {
    question: '"Ders Kaynaklarını Kendin Seç" sistemi nasıl işliyor?',
    answer: 'Tek tip, seviyene uymayan standart kitap mecburiyetini kaldırıyoruz! Rehber öğretmenlerimiz ve branş hocalarımız öğrencinin mevcut seviyesini (temel, orta veya ileri derece) tespit eder. Öğrenci kendi hedefine ve anlama yapısına en uygun yayını seçer ve o kaynak üzerinden yürür.',
    category: 'Rehberlik'
  },
  {
    question: 'Deneme Kulübüne sadece kurum öğrencileri mi katılabiliyor?',
    answer: 'Hayır, Deneme Kulübümüz dışarıdan katılmak isteyen tüm 11., 12. sınıf ve mezun öğrencilere de açıktır. Bilgi Sarmal, Özdebir, 3D, 345, Limit ve Orijinal gibi 10 dev yayının 60+ denemesine Eylül ayına özel %50 indirim fırsatıyla kayıt olabilirsiniz.',
    category: 'Deneme Kulübü'
  },
  {
    question: 'Randevulu soru çözüm sistemi nasıl çalışır?',
    answer: 'Öğrencilerimiz çözemedikleri sorular için sıra kavgası yapmaz veya koridorda hoca aramaz. Belirlenen sistem üzerinden branş öğretmeninden randevusunu alır, ayrılan birebir saatte öğretmeniyle baş başa masaya oturarak sorularını ayrıntılı olarak çözer.',
    category: 'Rehberlik'
  },
  {
    question: 'Sınıf dersi veya özel ders olmadan nasıl +30, +45, +60 Net artışı sağlanıyor?',
    answer: 'Öğrencinin en büyük vakit kaybı kalabalık sınıflarda herkesin bildiği veya hiç anlamadığı konuları pasif şekilde dinlemektir. Biz her öğrenciye özel seviye analizi yapıyoruz. Eksik olduğu konuları tespit edip doğrudan birebir koçluk planlaması, randevulu birebir soru çözümü ve Türkiye Geneli 60+ deneme sınavı ile takip ediyoruz. Sitemizdeki başarı karneleri bu disiplinli takip modelinin somut kanıtıdır.',
    category: 'Rehberlik'
  },
  {
    question: 'Veli bilgilendirme ve takip sistemi nasıl işliyor?',
    answer: 'Karşıyaka Akademi’de hiçbir velimiz süreçten habersiz kalmaz. Haftalık Veli SMS ve WhatsApp bilgilendirmeleri, periyodik birebir veli görüşmeleri ve her ay veliye teslim edilen Aylık Gelişim Karnesi ile öğrencinin etüt devam durumu, haftalık çözdüğü soru sayısı ve Türkiye Geneli deneme netleri düzenli olarak paylaşılır.',
    category: 'Rehberlik'
  },
  {
    question: 'Ödeme koşulları ve taksit imkânları nelerdir?',
    answer: 'Velilerimizin bütçesini gözeten esnek ödeme kolaylıkları sunuyoruz. Anlaşmalı tüm kredi kartlarına vade farksız taksit imkânı, sezonluk erken kayıt avantajı ve aynı aileden gelen öğrencilerimiz için kardeş indirimi uygulanmaktadır.',
    category: 'Kayıt'
  },
  {
    question: 'Kütüphane ve çalışma salonunun açık olduğu saatler nelerdir?',
    answer: 'Kütüphanemiz haftanın 6 günü 08:00 - 22:00 saatleri arasında kesintisiz olarak hizmet vermektedir. Sessizlik kuralları, yüksek hızlı internet, gözetmen öğretmen kontrolü ve randevulu soru çözüm masaları tüm çalışma saatleri boyunca etkindir.',
    category: 'VIP Sınıf'
  },
  {
    question: '1 Gün Ücretsiz Deneyim (Misafir Öğrenci) nedir, nasıl başvurulur?',
    answer: 'Öğrencilerimiz ve velilerimiz kurumu yerinde görüp ortamı test edebilsin diye 1 gün boyunca kütüphane, etüt veya örnek derslerimize ücretsiz misafir olabilmektedir. Sitemizdeki Misafir Öğrenci formunu doldurarak doğrudan WhatsApp üzerinden anında randevu oluşturabilirsiniz.',
    category: 'Kayıt'
  },
  {
    question: 'Kurumunuz MEB onaylı mıdır?',
    answer: 'Evet, Karşıyaka Akademi; T.C. Millî Eğitim Bakanlığı 5580 Sayılı Kanun Kapsamında Onaylı Resmi Özel Öğretim Kursu ruhsatına sahiptir. Tüm eğitim faaliyetlerimiz yasal mevzuata ve resmi standartlara tam uygundur.',
    category: 'Kayıt'
  },
  {
    question: 'Kurumunuz Bingöl’de tam olarak nerede?',
    answer: 'Bingöl Merkez Karşıyaka Mahallesi, Dağlar Caddesi üzerinde yer almaktayız. Elleri Yapı A ve B girişli Blok No: 16/H adresindeyiz. Hz. Osman Camii’nin hemen tam karşısında ve Nasa Reklam’ın yanındayız. Ulaşımı son derece rahat ve merkezi bir konumdadır.',
    category: 'Kayıt'
  }
];

// Gerçek Öğrenci Başarı Karneleri & Net Artışları (Afişlerden Birebir)
export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'basari-1',
    studentTitle: 'Öğrenci K.T. (12. Sınıf Sayısal)',
    targetFaculty: 'Hedef Tıp Fakültesi & Derece',
    netIncrease: 60,
    initialExamName: 'Bilgi Sarmal TG TYT 1',
    initialNet: 58.75,
    initialScore: 318.293,
    finalExamName: 'Bilgi Sarmal TG TYT 2',
    finalNet: 113.75,
    finalScore: 481.780,
    currentStatusNote: 'Şu an 120 Net Seviyesinde',
    ranking: 'Kurum 1.si • İlçe 1.si • İl 1.si • Türkiye %0,04 Derece',
    studyMethod: 'Sınıf dersi veya özel ders olmadan bire bir koçluk ve soru çözümü ile 58 net’ten 120 net’e yükseldik. Öğrencimiz ile 2. yılımız, derece ile Tıp Fakültesi hedefliyoruz.',
    duration: '2. Yılımız - Sürekli Takip',
    category: 'tip-derece',
    tags: ['Tıp Fakültesi', 'Türkiye %0.04 Derece', '+60 Net', 'İl 1.si'],
    initialBreakdown: { turkce: 21.75, matematik: 18.50, sosyal: 9.75, fen: 8.75 },
    finalBreakdown: { turkce: 36.25, matematik: 37.50, sosyal: 20.00, fen: 20.00 }
  },
  {
    id: 'basari-2',
    studentTitle: 'Öğrenci M.Y. (Mezun Sayısal)',
    targetFaculty: 'Mühendislik & Sağlık Bilimleri',
    netIncrease: 45,
    initialExamName: 'Acil TYT Türkiye Geneli',
    initialNet: 44.00,
    initialScore: 273.648,
    finalExamName: 'ÜçDörtBeş TYT TG Büyük Prova Mart 2026',
    finalNet: 89.00,
    finalScore: 408.319,
    currentStatusNote: '44 Net’ten 89 Net’e Zirve',
    ranking: 'Bingöl Kurum İçi İlk 5',
    studyMethod: 'Sınıf dersi veya özel ders olmadan bire bir koçluk ve soru çözümü ile kısa sürede elde ettiğimiz başarı.',
    duration: 'Kısa Sürede Yoğun Koçluk',
    category: 'buyuk-sicrama',
    tags: ['+45 Net', 'Acil TG -> 345 Prova', '89 Net', 'Birebir Koçluk'],
    initialBreakdown: { turkce: 17.50, matematik: 11.00, sosyal: 15.00, fen: 0.50 },
    finalBreakdown: { turkce: 22.75, matematik: 23.50, sosyal: 16.50, fen: 15.25 }
  },
  {
    id: 'basari-3',
    studentTitle: 'Öğrenci E.B. (12. Sınıf)',
    targetFaculty: 'Temelden Üniversiteye Hazırlık',
    netIncrease: 37,
    initialExamName: 'Mikro Orijinal TYT 1',
    initialNet: 19.25,
    initialScore: 201.014,
    finalExamName: 'Mikro Orijinal TYT TG',
    finalNet: 56.75,
    finalScore: 312.062,
    currentStatusNote: 'Netini Yaklaşık 3 Katına Çıkardı',
    ranking: 'Yüzdelik Diliminde Devasa Sıçrama',
    studyMethod: 'Sınıf dersi veya özel ders olmadan bire bir koçluk ve soru çözümü ile. Sıfır temelle başlayıp düzenli soru takibiyle 19 net’ten 56,75 net’e ulaştı.',
    duration: 'Adım Adım Temel İnşası',
    category: 'temelden-yukselis',
    tags: ['Temelden Yükseliş', '+37 Net', '3 Kat Artış', 'Mikro Orijinal'],
    initialBreakdown: { turkce: 14.50, matematik: 4.75, sosyal: 0.00, fen: 0.00 },
    finalBreakdown: { turkce: 27.75, matematik: 11.75, sosyal: 10.75, fen: 6.50 }
  },
  {
    id: 'basari-4',
    studentTitle: 'Öğrenci A.K. (Mezun Eşit Ağırlık)',
    targetFaculty: 'Hukuk / İktisat Hedefi',
    netIncrease: 37,
    initialExamName: 'Yayın Denizi TYT 1',
    initialNet: 31.25,
    initialScore: 236.188,
    finalExamName: 'Mikro Orijinal TYT TG',
    finalNet: 68.75,
    finalScore: 345.970,
    currentStatusNote: '70 Net Eşiğinde Güçlü İlerleme',
    ranking: 'Kurum İçi İlk 10',
    studyMethod: 'Sınıf dersi veya özel ders olmadan bire bir koçluk ve soru çözümü ile elde ettiğimiz başarı.',
    duration: 'Haftalık Birebir Planlama',
    category: 'buyuk-sicrama',
    tags: ['+37 Net', 'Eşit Ağırlık', 'İstikrarlı Sıçrama', 'Randevulu Çözüm'],
    initialBreakdown: { turkce: 13.50, matematik: 8.75, sosyal: 6.50, fen: 2.50 },
    finalBreakdown: { turkce: 32.50, matematik: 24.25, sosyal: 10.50, fen: 1.50 }
  },
  {
    id: 'basari-5',
    studentTitle: 'Öğrenci S.A. (12. Sınıf Sayısal)',
    targetFaculty: 'Hedefimiz Tıp Fakültesi',
    netIncrease: 36,
    initialExamName: 'Bilgi Sarmal TG TYT 1',
    initialNet: 59.00,
    initialScore: 320.135,
    finalExamName: 'Yıldızlar Yarışıyor Atak TYT',
    finalNet: 95.25,
    finalScore: 427.129,
    currentStatusNote: '95 Net Barajını Aştı',
    ranking: 'Türkiye Geneli %3,24 • Kurum 3.sü',
    studyMethod: 'Sınıf dersi veya özel ders olmadan bire bir koçluk ve soru çözümü ile elde ettiğimiz başarı. HEDEFİMİZ TIP FAKÜLTESİ.',
    duration: 'Kesintisiz Birebir Koçluk',
    category: 'tip-derece',
    tags: ['Hedef Tıp Fakültesi', '+36 Net', '95.25 Net', 'Yıldızlar Atak'],
    initialBreakdown: { turkce: 22.25, matematik: 10.75, sosyal: 5.75, fen: 3.25 },
    finalBreakdown: { turkce: 30.00, matematik: 34.75, sosyal: 13.00, fen: 17.50 }
  },
  {
    id: 'basari-6',
    studentTitle: 'Öğrenci B.C. (12. Sınıf)',
    targetFaculty: 'Mühendislik Fakültesi Hedefi',
    netIncrease: 30,
    initialExamName: 'Bilgi Sarmal TYT TG 4',
    initialNet: 45.75,
    initialScore: 279.222,
    finalExamName: 'Yıldızlar Yarışıyor Deneme Kulübü TYT',
    finalNet: 75.50,
    finalScore: 367.956,
    currentStatusNote: '5 Ayda 45’ten 75 Net’e',
    ranking: 'Kurum İçi Üst Sıralar',
    studyMethod: 'Eylül ayından Şubat ayına kadar çalışmamızın sonucu. Sınıf dersi veya özel ders olmadan bire bir koçluk ve soru çözümü ile kısa sürede elde ettiğimiz başarı.',
    duration: 'Eylül - Şubat (5 Ay)',
    category: 'buyuk-sicrama',
    tags: ['5 Aylık Dönüşüm', '+30 Net', 'Eylül-Şubat Sonucu', 'Planlı Takip'],
    initialBreakdown: { turkce: 25.25, matematik: 9.25, sosyal: 7.75, fen: 3.50 },
    finalBreakdown: { turkce: 30.00, matematik: 21.50, sosyal: 12.75, fen: 11.25 }
  },
  {
    id: 'basari-7',
    studentTitle: 'Öğrenci R.K. (Mezun Sayısal)',
    targetFaculty: 'Diş Hekimliği / Mühendislik',
    netIncrease: 28,
    initialExamName: 'Bilgi Sarmal TG TYT 2',
    initialNet: 61.00,
    initialScore: 325.591,
    finalExamName: 'ÜçDörtBeş TYT TG Büyük Prova Mart 2026',
    finalNet: 89.75,
    finalScore: 409.319,
    currentStatusNote: '90 Net Eşiğinde Güçlü Performans',
    ranking: 'Şube 4.sü • Kurum 4.sü',
    studyMethod: 'Sınıf dersi veya özel ders olmadan bire bir koçluk ile çalıştık.',
    duration: 'Mart 2026 Prova Başarısı',
    category: 'buyuk-sicrama',
    tags: ['+28 Net', '89.75 Net', '345 Büyük Prova', 'Birebir Koçluk'],
    initialBreakdown: { turkce: 25.50, matematik: 13.50, sosyal: 10.75, fen: 11.25 },
    finalBreakdown: { turkce: 40.00, matematik: 20.75, sosyal: 18.75, fen: 10.25 }
  },
  {
    id: 'basari-8',
    studentTitle: 'Öğrenci Y.T. (11. Sınıf Hazırlık)',
    targetFaculty: 'Hedef YKS İlk 50.000',
    netIncrease: 23,
    initialExamName: 'Yıldızlar Yarışıyor TYT 2',
    initialNet: 28.50,
    initialScore: 228.279,
    finalExamName: 'Yıldızlar Yarışıyor Atak TYT',
    finalNet: 51.00,
    finalScore: 294.352,
    currentStatusNote: '50 Net Barajını Güvenle Aştı',
    ranking: 'Öğrenci Sırası: 28 / Kurum: 41',
    studyMethod: 'Sınıf dersi veya özel ders olmadan bire bir koçluk ve soru çözümü ile elde ettiğimiz başarı.',
    duration: 'Temelden İleriye',
    category: 'temelden-yukselis',
    tags: ['+23 Net', 'Temel Güçlendirme', 'Haftalık Koçluk', '51 Net'],
    initialBreakdown: { turkce: 11.25, matematik: 4.00, sosyal: 9.25, fen: 4.00 },
    finalBreakdown: { turkce: 24.50, matematik: 13.25, sosyal: 11.00, fen: 2.25 }
  }
];

// Kullanıcının Yüklediği 8 Orijinal Öğrenci Karnesi & Başarı Görselleri
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    filename: '1.jpg',
    title: 'Öğrenci Karnesi 1: 61 Net’ten 89 Net’e',
    netGainText: '+28 NET',
    netGainNumber: 28,
    slogan: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK İLE ÇALIŞTIK',
    firstExam: {
      name: 'Bilgi Sarmal TG TYT 2',
      net: 61.00,
      score: 325.591
    },
    lastExam: {
      name: 'ÜçDörtBeş TYT Türkiye Geneli Büyük Prova Mart 2026',
      net: 89.00,
      score: 409.319
    },
    highlightNote: 'Son Deneme: 89 Net • Türkçe 40 Net (Full)',
    tags: ['+28 Net Artışı', 'Birebir Koçluk', '345 Büyük Prova']
  },
  {
    id: 2,
    filename: '2.jpg',
    title: 'Öğrenci Karnesi 2: 19.25 Net’ten 56.75 Net’e',
    netGainText: '+37 NET',
    netGainNumber: 37,
    slogan: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE',
    firstExam: {
      name: 'Mikro Orijinal TYT 1',
      net: 19.25,
      score: 201.014
    },
    lastExam: {
      name: 'Mikro Orijinal TYT TG',
      net: 56.75,
      score: 312.062
    },
    highlightNote: 'Netini Yaklaşık 3 Katına Çıkardı • Düzenli Soru Takibi',
    tags: ['+37 Net Artışı', 'Temelden Yükseliş', 'Mikro Orijinal']
  },
  {
    id: 3,
    filename: '3.jpg',
    title: 'Öğrenci Karnesi 3: 58 Net’ten 120 Net’e (Tıp Fakültesi & Derece)',
    netGainText: '+60 NET',
    netGainNumber: 60,
    slogan: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE 58 NET’TEN ŞUAN 120 NET’E YÜKSELDİK',
    firstExam: {
      name: 'Bilgi Sarmal TG TYT 1',
      net: 58.75,
      score: 318.293
    },
    lastExam: {
      name: 'Bilgi Sarmal TYT TG 2 (%0,04 Genel Derece)',
      net: 113.75,
      score: 481.780
    },
    highlightNote: 'Öğrencimiz ile 2. yılımız, derece ile Tıp Fakültesi hedefliyoruz. Sosyal & Fen Full!',
    tags: ['+60 Net Devasa Sıçrama', 'Türkiye %0.04 Derece', 'Hedef Tıp Fakültesi']
  },
  {
    id: 4,
    filename: '4.jpg',
    title: 'Öğrenci Karnesi 4: 28.50 Net’ten 51.00 Net’e',
    netGainText: '+23 NET',
    netGainNumber: 23,
    slogan: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE ELDE ETTİĞİMİZ BAŞARI',
    firstExam: {
      name: 'Yıldızlar Yarışıyor TYT 2',
      net: 28.50,
      score: 228.279
    },
    lastExam: {
      name: 'Yıldızlar Yarışıyor Atak TYT',
      net: 51.00,
      score: 294.352
    },
    highlightNote: '50 Net Barajı Aşıldı • İstikrarlı Matematik ve Türkçe Artışı',
    tags: ['+23 Net Artışı', 'Adım Adım Gelişim', 'Birebir Çözüm']
  },
  {
    id: 5,
    filename: '5.jpg',
    title: 'Öğrenci Karnesi 5: 59 Net’ten 95.25 Net’e',
    netGainText: '+36 NET',
    netGainNumber: 36,
    slogan: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE ELDE ETTİĞİMİZ BAŞARI',
    firstExam: {
      name: 'Bilgi Sarmal TG TYT 1',
      net: 59.00,
      score: 320.135
    },
    lastExam: {
      name: 'Yıldızlar Yarışıyor Atak TYT (%3,24)',
      net: 95.25,
      score: 427.129
    },
    highlightNote: 'HEDEFİMİZ TIP FAKÜLTESİ • Kurum 3.sü • Matematik 34.75 Net',
    tags: ['+36 Net Artışı', 'Hedef Tıp Fakültesi', '95.25 Net']
  },
  {
    id: 6,
    filename: '6.jpg',
    title: 'Öğrenci Karnesi 6: 31.25 Net’ten 68.75 Net’e',
    netGainText: '+37 NET',
    netGainNumber: 37,
    slogan: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE ELDE ETTİĞİMİZ BAŞARI',
    firstExam: {
      name: 'Yayın Denizi TYT 1',
      net: 31.25,
      score: 236.188
    },
    lastExam: {
      name: 'Mikro Orijinal TYT TG',
      net: 68.75,
      score: 345.970
    },
    highlightNote: '70 Net Eşiğinde Güçlü İlerleme • Türkçe 32.50 Net • Mat 24.25 Net',
    tags: ['+37 Net Artışı', 'Soru Çözüm Desteği', 'Düzenli Etüt']
  },
  {
    id: 7,
    filename: '7.jpg',
    title: 'Öğrenci Karnesi 7: 45.75 Net’ten 75.50 Net’e',
    netGainText: '+30 NET',
    netGainNumber: 30,
    slogan: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE KISA SÜREDE ELDE ETTİĞİMİZ BAŞARI',
    firstExam: {
      name: 'Bilgi Sarmal TYT TG 4',
      net: 45.75,
      score: 279.222
    },
    lastExam: {
      name: 'Yıldızlar Yarışıyor Deneme Kulübü TYT',
      net: 75.50,
      score: 367.956
    },
    highlightNote: 'Eylül ayından Şubat ayına kadar (5 Ayda) çalışmamızın somut sonucu!',
    tags: ['+30 Net Artışı', '5 Aylık Dönüşüm', 'Eylül - Şubat Sonucu']
  },
  {
    id: 8,
    filename: '8.jpg',
    title: 'Öğrenci Karnesi 8: 44 Net’ten 89 Net’e',
    netGainText: '+45 NET',
    netGainNumber: 45,
    slogan: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE KISA SÜREDE ELDE ETTİĞİMİZ BAŞARI',
    firstExam: {
      name: 'Acil TYT Türkiye Geneli',
      net: 44.00,
      score: 273.648
    },
    lastExam: {
      name: 'ÜçDörtBeş TYT Büyük Prova Mart 2026',
      net: 89.00,
      score: 408.319
    },
    highlightNote: 'Kısa Sürede 44 Net’ten 89 Net’e Zirve • Acil TG’den 345 Prova’ya',
    tags: ['+45 Net Artışı', 'Hızlı Net Kazanımı', 'Birebir Mentorluk']
  }
];
