import fs from 'fs';
import path from 'path';

const galleryItems = [
  {
    num: 1,
    netBadge: '+28 NET',
    headline: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK İLE ÇALIŞTIK',
    firstExam: 'BİLGİ SARMAL TG TYT 2',
    firstScore: '325,591',
    firstNet: '61.00 NET',
    firstDetails: 'T: 25.50 | M: 13.50 | S: 10.75 | F: 11.25',
    lastExam: 'ÜÇDÖRTBEŞ TYT TÜRKİYE GENELİ - MART 2026',
    lastScore: '409,319',
    lastNet: '89.00 NET',
    lastDetails: 'T: 40.00 (FULL) | M: 20.75 | S: 18.75 | F: 9.50',
    footerNote: 'SON DENEME: 89 NET'
  },
  {
    num: 2,
    netBadge: '+37 NET',
    headline: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE',
    firstExam: 'MİKRO ORİJİNAL TYT 1',
    firstScore: '201,014',
    firstNet: '19.25 NET',
    firstDetails: 'T: 14.50 | M: 4.75 | S: 0.00 | F: 0.00',
    lastExam: 'MİKROORİJİNAL TYT TG',
    lastScore: '312,062',
    lastNet: '56.75 NET',
    lastDetails: 'T: 27.75 | M: 11.75 | S: 10.75 | F: 6.50',
    footerNote: 'SON DENEME: 56.75 NET'
  },
  {
    num: 3,
    netBadge: '+60 NET',
    headline: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE 58 NET\'TEN ŞUAN 120 NET\'E YÜKSELDİK',
    firstExam: 'BİLGİ SARMAL TG TYT 1',
    firstScore: '318,293',
    firstNet: '58.75 NET',
    firstDetails: 'T: 21.75 | M: 18.50 | S: 9.75 | F: 8.75',
    lastExam: 'BİLGİ SARMAL TYT TG 2',
    lastScore: '481,780 (%0,04 DERECE)',
    lastNet: '113.75 NET',
    lastDetails: 'T: 36.25 | M: 37.50 | S: 20.00 | F: 20.00',
    footerNote: 'ÖĞRENCİMİZ İLE 2. YILIMIZ DERECE İLE TIP FAKÜLTESİ HEDEFLİYORUZ'
  },
  {
    num: 4,
    netBadge: '+23 NET',
    headline: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE ELDE ETTİĞİMİZ BAŞARI',
    firstExam: 'YILDIZLAR YARIŞIYOR TYT 2',
    firstScore: '228,279',
    firstNet: '28.50 NET',
    firstDetails: 'T: 11.25 | M: 4.00 | S: 9.25 | F: 4.00',
    lastExam: 'YILDIZLAR YARIŞIYOR ATAK TYT',
    lastScore: '294,352',
    lastNet: '51.00 NET',
    lastDetails: 'T: 24.50 | M: 13.25 | S: 11.00 | F: 2.25',
    footerNote: 'SON DENEME: 51.00 NET'
  },
  {
    num: 5,
    netBadge: '+36 NET',
    headline: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE ELDE ETTİĞİMİZ BAŞARI',
    firstExam: 'BİLGİ SARMAL TG TYT 1',
    firstScore: '320,135',
    firstNet: '59.00 NET',
    firstDetails: 'T: 22.25 | M: 10.75 | S: 5.75 | F: 3.25',
    lastExam: 'YILDIZLAR YARIŞIYOR ATAK TYT',
    lastScore: '427,129 (%3,24)',
    lastNet: '95.25 NET',
    lastDetails: 'T: 30.00 | M: 34.75 | S: 13.00 | F: 17.50',
    footerNote: 'HEDEFİMİZ TIP FAKÜLTESİ'
  },
  {
    num: 6,
    netBadge: '+37 NET',
    headline: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE ELDE ETTİĞİMİZ BAŞARI',
    firstExam: 'YAYIN DENİZİ TYT 1',
    firstScore: '236,188',
    firstNet: '31.25 NET',
    firstDetails: 'T: 13.50 | M: 8.75 | S: 6.50 | F: 2.50',
    lastExam: 'MİKROORİJİNAL TYT TG',
    lastScore: '345,970',
    lastNet: '68.75 NET',
    lastDetails: 'T: 32.50 | M: 24.25 | S: 10.50 | F: 1.50',
    footerNote: 'SON DENEME: 68.75 NET'
  },
  {
    num: 7,
    netBadge: '+30 NET',
    headline: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE KISA SÜREDE ELDE ETTİĞİMİZ BAŞARI',
    firstExam: 'BİLGİ SARMAL TYT TG 4',
    firstScore: '279,222',
    firstNet: '45.75 NET',
    firstDetails: 'T: 25.25 | M: 9.25 | S: 7.75 | F: 3.50',
    lastExam: 'YILDIZLAR YARIŞIYOR DENEME KULÜBÜ TYT',
    lastScore: '367,956',
    lastNet: '75.50 NET',
    lastDetails: 'T: 30.00 | M: 21.50 | S: 12.75 | F: 11.25',
    footerNote: 'EYLÜL AYINDAN ŞUBAT AYINA KADAR ÇALIŞMAMIZIN SONUCU'
  },
  {
    num: 8,
    netBadge: '+45 NET',
    headline: 'SINIF DERSİ VEYA ÖZEL DERS OLMADAN BİRE BİR KOÇLUK VE SORU ÇÖZÜMÜ İLE KISA SÜREDE ELDE ETTİĞİMİZ BAŞARI',
    firstExam: 'ACİL TYT TÜRKİYE GENELİ',
    firstScore: '273,648',
    firstNet: '44.00 NET',
    firstDetails: 'T: 17.50 | M: 11.00 | S: 15.00 | F: 0.50',
    lastExam: 'ÜÇDÖRTBEŞ TYT BÜYÜK PROVA - MART 2026',
    lastScore: '408,319',
    lastNet: '89.00 NET',
    lastDetails: 'T: 22.75 | M: 23.50 | S: 26.50 | F: 16.25',
    footerNote: 'SON DENEME: 89 NET'
  }
];

const outDir = path.join(process.cwd(), 'public', 'gallery');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

galleryItems.forEach(item => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <linearGradient id="yellowBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Yellow Poster Background -->
  <rect width="1000" height="1000" fill="url(#yellowBg)"/>
  
  <!-- Subtle graphic curves -->
  <path d="M 0,0 L 500,0 Q 400,300 0,500 Z" fill="#fcd34d" opacity="0.6"/>
  <path d="M 1000,1000 L 500,1000 Q 600,700 1000,500 Z" fill="#fcd34d" opacity="0.6"/>

  <!-- Top Left: İLK DENEME Label -->
  <g transform="translate(450, 125)">
    <rect x="0" y="0" width="340" height="80" rx="8" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
    <text x="170" y="55" font-family="'Outfit', sans-serif" font-weight="900" font-size="44" fill="#0f172a" text-anchor="middle" letter-spacing="2">İLK DENEME</text>
  </g>

  <!-- First Exam Result Card (White Sheet) -->
  <g transform="translate(40, 100)" filter="url(#shadow)">
    <rect width="430" height="440" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <!-- b2s bar -->
    <rect x="0" y="0" width="430" height="48" fill="#0284c7"/>
    <text x="20" y="32" font-family="sans-serif" font-weight="900" font-size="24" fill="#ffffff">b2s</text>
    <text x="410" y="32" font-family="sans-serif" font-weight="700" font-size="16" fill="#ffffff" text-anchor="end">${item.firstExam}</text>
    
    <!-- Puan Box -->
    <rect x="20" y="60" width="390" height="60" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
    <text x="35" y="98" font-family="sans-serif" font-weight="900" font-size="28" fill="#0369a1">${item.firstScore} PUAN</text>
    <text x="395" y="98" font-family="sans-serif" font-weight="900" font-size="24" fill="#0284c7" text-anchor="end">${item.firstNet}</text>
    
    <!-- Net Details -->
    <rect x="20" y="130" width="390" height="290" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="35" y="165" font-family="sans-serif" font-weight="700" font-size="16" fill="#475569">BİNGÖL KARŞIYAKA AKADEMİ TAKİP</text>
    <line x1="35" y1="180" x2="395" y2="180" stroke="#cbd5e1"/>
    <text x="35" y="220" font-family="sans-serif" font-size="16" fill="#334155">${item.firstDetails}</text>
    <text x="35" y="260" font-family="sans-serif" font-size="14" fill="#64748b">Haftalık Optik Okuma & Konu Kazanım Analizi</text>
    <rect x="35" y="290" width="360" height="110" rx="6" fill="#e2e8f0" opacity="0.5"/>
    <text x="215" y="350" font-family="sans-serif" font-weight="700" font-size="15" fill="#475569" text-anchor="middle">Gerçek Optik Sonuç Belgesi Arşivi</text>
  </g>

  <!-- Right Side: Headline -->
  <g transform="translate(490, 210)">
    <text x="0" y="35" font-family="'Outfit', sans-serif" font-weight="900" font-size="34" fill="#0f172a" width="460">
      <tspan x="0" dy="0">SINIF DERSİ VEYA</tspan>
      <tspan x="0" dy="46">ÖZEL DERS OLMADAN</tspan>
      <tspan x="0" dy="46">BİRE BİR KOÇLUK İLE</tspan>
      <tspan x="0" dy="46">ÇALIŞTIK</tspan>
    </text>
  </g>

  <!-- Middle Center: Black Brush Net Badge -->
  <g transform="translate(370, 320) rotate(-12)" filter="url(#shadow)">
    <rect x="0" y="0" width="240" height="90" rx="16" fill="#09090b"/>
    <text x="120" y="62" font-family="'Outfit', sans-serif" font-weight="900" font-size="44" fill="#fbbf24" text-anchor="middle" letter-spacing="2">${item.netBadge}</text>
  </g>

  <!-- Bottom Left: SON DENEME Label -->
  <g transform="translate(130, 580)">
    <rect x="0" y="0" width="370" height="80" rx="8" fill="#0f172a"/>
    <text x="185" y="55" font-family="'Outfit', sans-serif" font-weight="900" font-size="38" fill="#fbbf24" text-anchor="middle" letter-spacing="2">SON DENEME</text>
  </g>

  <!-- Second Exam Result Card (White Sheet) -->
  <g transform="translate(500, 440)" filter="url(#shadow)">
    <rect width="460" height="450" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Navy bar -->
    <rect x="0" y="0" width="460" height="48" fill="#0f172a"/>
    <text x="20" y="32" font-family="sans-serif" font-weight="900" font-size="20" fill="#fbbf24">SONUÇ BELGESİ</text>
    <text x="440" y="32" font-family="sans-serif" font-weight="700" font-size="14" fill="#ffffff" text-anchor="end">${item.lastExam}</text>
    
    <!-- Score Box -->
    <rect x="20" y="60" width="420" height="65" rx="6" fill="#fefce8" stroke="#fde047"/>
    <text x="35" y="102" font-family="sans-serif" font-weight="900" font-size="28" fill="#854d0e">${item.lastScore}</text>
    <text x="425" y="102" font-family="sans-serif" font-weight="900" font-size="28" fill="#15803d" text-anchor="end">${item.lastNet}</text>

    <!-- Details -->
    <rect x="20" y="140" width="420" height="280" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="35" y="175" font-family="sans-serif" font-weight="700" font-size="16" fill="#1e293b">DERSLERE GÖRE NET DAĞILIMI</text>
    <line x1="35" y1="190" x2="425" y2="190" stroke="#cbd5e1"/>
    <text x="35" y="230" font-family="sans-serif" font-weight="700" font-size="18" fill="#0f172a">${item.lastDetails}</text>
    <text x="35" y="270" font-family="sans-serif" font-size="15" fill="#16a34a" font-weight="bold">✓ ${item.netBadge} Net Artışı Onaylandı</text>
    
    <rect x="35" y="300" width="390" height="100" rx="6" fill="#f1f5f9"/>
    <text x="230" y="340" font-family="sans-serif" font-weight="700" font-size="15" fill="#334155" text-anchor="middle">Karşıyaka Akademi Birebir Takip Başarısı</text>
    <text x="230" y="370" font-family="sans-serif" font-weight="900" font-size="16" fill="#0f172a" text-anchor="middle">${item.footerNote}</text>
  </g>

  <!-- Bottom Badge: Footer Note (e.g. Tıp Hedefi) -->
  <g transform="translate(100, 680)">
    <text x="0" y="0" font-family="'Outfit', sans-serif" font-weight="900" font-size="26" fill="#0f172a">
      <tspan x="0" dy="30">${item.footerNote.slice(0, 30)}</tspan>
      ${item.footerNote.length > 30 ? `<tspan x="0" dy="34">${item.footerNote.slice(30)}</tspan>` : ''}
    </text>
  </g>

  <!-- Watermark: Karşıyaka Akademi -->
  <text x="500" y="965" font-family="'Outfit', sans-serif" font-weight="900" font-size="20" fill="#78350f" text-anchor="middle" letter-spacing="3">KARŞIYAKA AKADEMİ • BİNGÖL • 0534 268 24 79</text>
</svg>`;

  fs.writeFileSync(path.join(outDir, `${item.num}.svg`), svg, 'utf-8');
});

console.log('Successfully generated 8 gallery SVGs in public/gallery/');
