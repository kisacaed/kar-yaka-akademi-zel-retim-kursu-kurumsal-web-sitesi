interface BrandLogoProps {
  variant?: 'full' | 'horizontal' | 'compact';
  theme?: 'dark' | 'light';
  className?: string;
  showYear?: boolean;
}

export default function BrandLogo({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  showYear = true,
}: BrandLogoProps) {
  const isLight = theme === 'light';

  // 1. HORIZONTAL VARIANT (Ideal for Navbar & App Header)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {/* Left emblem: Stylized Graduation Cap with Golden Frame & Badge */}
        <div className="relative shrink-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 p-0.5 shadow-lg shadow-amber-500/20">
            <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center relative overflow-hidden">
              {/* Cap SVG */}
              <svg viewBox="0 0 100 100" className="w-8 h-8 -rotate-6">
                <polygon points="50,15 92,38 50,60 8,38" fill="#F59E0B" />
                <path d="M 30 45 Q 50 62 70 45 L 68 56 Q 50 72 32 56 Z" fill="#D97706" />
                <circle cx="50" cy="38" r="3.5" fill="#FFFFFF" />
                <path d="M 50 38 Q 78 40 85 55" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="85" cy="56" r="2.5" fill="#FBBF24" />
                <path d="M 83 58 L 87 58 L 89 72 L 81 72 Z" fill="#FBBF24" />
              </svg>
            </div>
          </div>
          {showYear && (
            <span className="absolute -bottom-1 -right-1 text-[9px] font-black bg-amber-400 text-slate-950 px-1 py-0.2 rounded border border-slate-950 shadow-sm leading-tight font-['Outfit']">
              2024
            </span>
          )}
        </div>

        {/* Textual Identity: Exact representation of Karşıyaka Akademi Özel Öğretim Kursu */}
        <div className="text-left leading-tight">
          <div className="flex items-center gap-1.5 font-['Outfit']">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-amber-400 drop-shadow-sm">
              KARŞIYAKA
            </span>
            <div className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 shadow-inner">
              <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-white">
                AKADEMİ
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className={`text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] uppercase ${
              isLight ? 'text-slate-700' : 'text-slate-300'
            }`}>
              ÖZEL ÖĞRETİM KURSU
            </span>
            <span className="text-[9px] font-black text-amber-400/90 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
              BİNGÖL
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 2. COMPACT BADGE VARIANT
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 select-none ${className}`}>
        <img
          src="/logo.svg"
          alt="Karşıyaka Akademi Logo"
          className="h-10 w-auto object-contain"
          loading="eager"
        />
      </div>
    );
  }

  // 3. FULL STACKED EMBLEM VARIANT (Faithful to the user's uploaded image)
  return (
    <div className={`relative flex flex-col items-center justify-center select-none text-center ${className}`}>
      {/* High-fidelity Vector Render of User's Uploaded Logo */}
      <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
        {/* Cap Sitting over top right */}
        <div className="absolute -top-6 right-6 sm:right-10 z-10 w-16 sm:w-20 -rotate-12 drop-shadow-xl pointer-events-none">
          <svg viewBox="0 0 140 100" className="w-full h-auto overflow-visible">
            {/* Under-cap body */}
            <path d="M 40 48 Q 70 70 100 48 L 96 66 Q 70 86 44 66 Z" fill="#0B132B" stroke="#000000" strokeWidth="2" />
            {/* Top Diamond */}
            <polygon points="70,8 136,42 70,76 4,42" fill="#111827" stroke="#374151" strokeWidth="2" />
            <polygon points="70,12 130,42 70,72 10,42" fill="#1F2937" />
            {/* Button */}
            <circle cx="70" cy="42" r="4.5" fill="#F59E0B" />
            {/* Tassel */}
            <path d="M 70 42 Q 112 45 124 68" fill="none" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
            <ellipse cx="124" cy="70" rx="4" ry="2.5" fill="#D97706" />
            <path d="M 120 72 L 128 72 L 132 96 L 116 96 Z" fill="#F59E0B" />
          </svg>
        </div>

        {/* Central Bold KARŞIYAKA Display */}
        <div className="relative pt-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-amber-400 font-['Outfit'] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] leading-none select-none">
            KARŞIYAKA
          </h1>
        </div>

        {/* Navy AKADEMİ Block Container */}
        <div className="mt-1 w-full bg-[#0B1B3D] border-2 border-slate-700/60 rounded-xl py-2 px-4 shadow-xl flex items-center justify-center">
          <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-[0.3em] sm:tracking-[0.4em] text-white font-['Outfit'] pl-1">
            AKADEMİ
          </span>
        </div>

        {/* Subtitle: ÖZEL ÖĞRETİM KURSU */}
        <div className="mt-2.5">
          <p className={`text-xs sm:text-sm font-black tracking-[0.28em] sm:tracking-[0.35em] uppercase ${
            isLight ? 'text-slate-900' : 'text-slate-200'
          } font-['Outfit']`}>
            ÖZEL ÖĞRETİM KURSU
          </p>
        </div>

        {/* Golden Script Signature: 2024 */}
        {showYear && (
          <div className="mt-0.5 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-black italic tracking-widest text-amber-400 font-serif opacity-95">
              2024
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
