/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Landmark,
  GraduationCap,
  Users,
  Calendar,
  Clock,
  ShieldCheck,
  CreditCard,
  RefreshCcw,
  Star,
  MessageCircle,
  Phone,
  CheckCircle2,
  XCircle,
  HeartHandshake,
  Award,
  ClipboardCheck,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  MapPin,
  Mail,
  Sparkles,
  ArrowRight,
  Check,
  Percent,
  TrendingUp,
  HelpCircle,
} from "lucide-react";

import {
  problemSolutions,
  services,
  features,
  packages,
  offers,
  comparisonRows,
  teamMembers,
  testimonials,
  faqs,
} from "./types";

// ========================================================
// Reusable Component: SectionHeader
// ========================================================
interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}

function SectionHeader({ eyebrow, title, description, light = false }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 px-4">
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
        light 
          ? "bg-gold-brand/20 text-gold-light border border-gold-light/20" 
          : "bg-soft-green text-primary-brand border border-primary-brand/10"
      }`}>
        <Sparkles className="w-3.5 h-3.5 text-gold-brand" />
        {eyebrow}
      </span>
      <h2 className={`text-3xl sm:text-4xl font-black font-display tracking-tight mb-4 ${
        light ? "text-white" : "text-primary-dark"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg ${
          light ? "text-cream-brand/80" : "text-slate-600"
        }`}>
          {description}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="h-0.5 w-12 bg-gold-brand rounded-full"></span>
        <span className="w-2 h-2 rotate-45 bg-gold-brand"></span>
        <span className="h-0.5 w-12 bg-gold-brand rounded-full"></span>
      </div>
    </div>
  );
}

// ========================================================
// Reusable Component: AnimatedCounter
// ========================================================
function AnimatedCounter({ target, suffix = "", duration = 1500 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let startTimestamp: number | null = null;
        
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };
        
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, duration, hasAnimated]);

  return (
    <div ref={ref} className="font-display font-black text-4xl sm:text-5xl text-gold-brand select-none">
      <span>{count}</span>
      {suffix && <span className="text-xl sm:text-2xl font-bold text-gold-light mr-1">{suffix}</span>}
    </div>
  );
}

// ========================================================
// Reusable Component: IslamicVisual (SVG-based Premium Identity)
// ========================================================
function IslamicVisual() {
  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-square mx-auto flex items-center justify-center p-4">
      {/* Background glowing gradients */}
      <div className="absolute inset-0 bg-primary-brand/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute w-[80%] h-[80%] bg-gold-brand/5 rounded-full blur-2xl"></div>
      
      {/* Dynamic Gold Arch and Quran Outline SVG */}
      <svg viewBox="0 0 500 500" className="w-full h-full relative z-10 filter drop-shadow-2xl" dir="ltr">
        {/* Outer Circular frame with Islamic geometric dash */}
        <circle cx="250" cy="250" r="230" fill="none" stroke="#B98A3A" strokeWidth="2" strokeDasharray="14, 7" opacity="0.4" />
        <circle cx="250" cy="250" r="215" fill="none" stroke="#1F5634" strokeWidth="1" opacity="0.3" />
        
        {/* Islamic Arch shape */}
        <path 
          d="M 100,410 L 100,240 C 100,135 180,95 250,45 C 320,95 400,135 400,240 L 400,410 Z" 
          fill="#12351F" 
          stroke="#B98A3A" 
          strokeWidth="3.5" 
          strokeLinejoin="round"
        />
        
        {/* Inner glow arch */}
        <path 
          d="M 115,395 L 115,245 C 115,150 190,110 250,65 C 310,110 385,150 385,245 L 385,395 Z" 
          fill="none" 
          stroke="#D6B064" 
          strokeWidth="1.5" 
          opacity="0.5"
        />
        
        {/* Glowing Gold Diamond / Star of octagram */}
        <g transform="translate(250, 115) scale(1.5)">
          <path d="M 0,-15 L 5,-5 L 15,0 L 5,5 L 0,15 L -5,5 L -15,0 L -5,-5 Z" fill="#D6B064" />
          <circle cx="0" cy="0" r="3.5" fill="#ffffff" />
        </g>
        
        {/* Open Quran/Book representation */}
        <g transform="translate(160, 230) scale(1.15)">
          {/* Wooden Rehal / Book Stand */}
          <path d="M 10,110 L 80,50 L 150,110" fill="none" stroke="#8F6828" strokeWidth="12" strokeLinecap="round" />
          <path d="M 25,110 L 80,50 L 135,110" fill="none" stroke="#B98A3A" strokeWidth="8" strokeLinecap="round" />
          <path d="M 80,45 L 80,105" fill="none" stroke="#12351F" strokeWidth="4" opacity="0.15" />
          
          {/* Left page */}
          <path d="M 80,50 C 50,45 10,25 5,42 L 5,92 C 10,77 50,97 80,102 Z" fill="#F8F5EC" stroke="#12351F" strokeWidth="2.5" />
          {/* Right page */}
          <path d="M 80,50 C 110,45 150,25 155,42 L 155,92 C 150,77 110,97 80,102 Z" fill="#FFFFFF" stroke="#12351F" strokeWidth="2.5" />
          
          {/* Page lines symbolizing Quran verses */}
          <path d="M 22,54 Q 45,62 70,59" fill="none" stroke="#1F5634" strokeWidth="2" opacity="0.65" strokeLinecap="round" />
          <path d="M 17,69 Q 42,77 70,74" fill="none" stroke="#1F5634" strokeWidth="2" opacity="0.65" strokeLinecap="round" />
          <path d="M 22,84 Q 45,92 70,89" fill="none" stroke="#1F5634" strokeWidth="1.5" opacity="0.65" strokeLinecap="round" />
          
          <path d="M 138,54 Q 115,62 90,59" fill="none" stroke="#1F5634" strokeWidth="2" opacity="0.65" strokeLinecap="round" />
          <path d="M 143,69 Q 118,77 90,74" fill="none" stroke="#1F5634" strokeWidth="2" opacity="0.65" strokeLinecap="round" />
          <path d="M 138,84 Q 115,92 90,89" fill="none" stroke="#1F5634" strokeWidth="1.5" opacity="0.65" strokeLinecap="round" />
          
          {/* Golden Bookmark Ribbon */}
          <path d="M 80,102 Q 82,126 102,136" fill="none" stroke="#B98A3A" strokeWidth="4" strokeLinecap="round" />
        </g>
        
        {/* Floating sparkles around */}
        <circle cx="160" cy="115" r="3.5" fill="#D6B064" />
        <circle cx="340" cy="120" r="3" fill="#D6B064" />
        <circle cx="120" cy="330" r="2.5" fill="#D6B064" />
        <circle cx="370" cy="310" r="3" fill="#D6B064" />
      </svg>
      
      {/* Floating Interactive Badge (Righthand side) */}
      <div className="absolute top-12 right-2 sm:right-6 bg-white/95 border border-gold-brand/20 shadow-xl backdrop-blur-md rounded-2xl p-3 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 z-20">
        <div className="w-8 h-8 bg-soft-green rounded-xl flex items-center justify-center text-primary-brand font-bold">✨</div>
        <div>
          <div className="text-[10px] text-slate-500 font-bold leading-none">متابعة دقيقة</div>
          <div className="text-xs font-black text-primary-brand font-display mt-0.5">شريك تربوي مخلص</div>
        </div>
      </div>

      {/* Floating Interactive Badge (Lefthand side) */}
      <div className="absolute bottom-16 left-2 sm:left-6 bg-white/95 border border-gold-brand/20 shadow-xl backdrop-blur-md rounded-2xl p-3 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 z-20">
        <div className="w-8 h-8 bg-cream-brand rounded-xl flex items-center justify-center text-gold-brand font-bold">📖</div>
        <div>
          <div className="text-[10px] text-slate-500 font-bold leading-none">تأسيس ممتاز</div>
          <div className="text-xs font-black text-primary-brand font-display mt-0.5">معلم حافظ ومجاز</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  // Mobile menu interactive state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Accordion FAQ interactive state
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq1");

  // Contact form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentGender, setStudentGender] = useState("ولد");
  const [requestedProgram, setRequestedProgram] = useState("تحفيظ القرآن");
  const [parentMessage, setParentMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setFormStatus("error");
      return;
    }
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1200);
  };

  const handleResetForm = () => {
    setName("");
    setPhone("");
    setStudentAge("");
    setParentMessage("");
    setFormStatus("idle");
  };

  return (
    <div className="min-h-screen bg-[#F8F5EC] text-[#111827] flex flex-col antialiased">
      
      {/* ========================================================
          1. STICKY NAVBAR
          ======================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gold-brand/10 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo and Brand Title */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-brand rounded-xl flex items-center justify-center relative shadow-md shadow-primary-brand/10 border-2 border-gold-brand/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-brand to-primary-light opacity-80" />
                <BookOpen className="w-6 h-6 text-gold-light relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black font-display text-primary-brand tracking-tight">أكاديمية الذكر</span>
                <span className="text-[10px] text-gold-brand font-bold max-sm:hidden leading-none mt-0.5">
                  لتحفيظ القرآن والمواد العلمية والتأسيس
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              <a href="#hero" className="text-sm font-bold text-primary-dark hover:text-gold-brand transition-colors">الرئيسية</a>
              <a href="#problems" className="text-sm font-bold text-slate-600 hover:text-gold-brand transition-colors">لماذا نحن</a>
              <a href="#services" className="text-sm font-bold text-slate-600 hover:text-gold-brand transition-colors">الخدمات</a>
              <a href="#packages" className="text-sm font-bold text-slate-600 hover:text-gold-brand transition-colors">الباقات</a>
              <a href="#offers" className="text-sm font-bold text-slate-600 hover:text-gold-brand transition-colors">العروض</a>
              <a href="#comparison" className="text-sm font-bold text-slate-600 hover:text-gold-brand transition-colors">المقارنة</a>
              <a href="#about" className="text-sm font-bold text-slate-600 hover:text-gold-brand transition-colors">من نحن</a>
              <a href="#faqs" className="text-sm font-bold text-slate-600 hover:text-gold-brand transition-colors">الأسئلة الشائعة</a>
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-primary-brand hover:bg-primary-light border border-gold-brand/30 hover:border-gold-light shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
              >
                احجز حصتكِ المجانية
              </a>
            </div>

            {/* Mobile Menu Button Hamburger */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-primary-brand hover:bg-soft-green focus:outline-none focus:ring-2 focus:ring-gold-brand mr-2"
                aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu Area */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gold-brand/10 bg-white/98 backdrop-blur-md px-4 pt-4 pb-6 space-y-3 shadow-xl transition-all duration-350">
            <a 
              href="#hero" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-primary-dark hover:bg-soft-green"
            >
              الرئيسية
            </a>
            <a 
              href="#problems" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-slate-600 hover:bg-soft-green"
            >
              لماذا نحن
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-slate-600 hover:bg-soft-green"
            >
              الخدمات
            </a>
            <a 
              href="#packages" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-slate-600 hover:bg-soft-green"
            >
              الباقات
            </a>
            <a 
              href="#offers" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-slate-600 hover:bg-soft-green"
            >
              العروض
            </a>
            <a 
              href="#comparison" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-slate-600 hover:bg-soft-green"
            >
              المقارنة
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-slate-600 hover:bg-soft-green"
            >
              من نحن
            </a>
            <a 
              href="#faqs" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-slate-600 hover:bg-soft-green"
            >
              الأسئلة الشائعة
            </a>
            <div className="pt-2 border-t border-slate-100">
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-3 rounded-xl font-bold text-white bg-primary-brand hover:bg-primary-light border border-gold-brand/30 shadow transition-all duration-200"
              >
                احجز حصتكِ المجانية
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================
          2. HERO SECTION
          ======================================================== */}
      <section id="hero" className="relative pt-8 pb-16 md:py-24 overflow-hidden islamic-pattern-light">
        
        {/* Decorative Gold & Green Accent Blur Spheres */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gold-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-primary-brand/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Right Side: Hero Texts */}
            <div className="lg:col-span-7 text-right space-y-6">
              
              {/* Trust Badge Indicator */}
              <div id="hero-badge" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-soft-green border border-primary-brand/10 text-primary-brand text-xs sm:text-sm font-bold">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-brand"></span>
                </span>
                <span>سجل تجاري سعودي رسمي ومعتمد للتحفيظ</span>
              </div>

              {/* Main H1 Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-primary-dark tracking-tight leading-[1.2]">
                تحفيظ القرآن الكريم أونلاين لأبنائك — <span className="text-gold-brand bg-gradient-to-l from-gold-brand to-gold-dark bg-clip-text text-transparent block sm:inline">من أي مكان في السعودية</span>
              </h1>
              
              {/* Subheadline tags */}
              <div className="flex flex-wrap gap-2.5 text-xs sm:text-sm font-bold text-slate-700 bg-white/60 p-2.5 rounded-xl border border-gold-brand/10 inline-block">
                <span className="flex items-center gap-1 text-primary-brand">
                  <GraduationCap className="w-4 h-4 text-gold-brand" /> معلمون متخصصون
                </span>
                <span className="text-gold-brand">•</span>
                <span className="flex items-center gap-1 text-primary-brand">
                  <Clock className="w-4 h-4 text-gold-brand" /> حصص مرنة مجدولة
                </span>
                <span className="text-gold-brand">•</span>
                <span className="flex items-center gap-1 text-primary-brand">
                  <Award className="w-4 h-4 text-gold-brand" /> نتائج حفظ حقيقية
                </span>
              </div>

              {/* Intro Copywriting text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                أكاديمية الذكر منصتكم الموثوقة لتحفيظ القرآن الكريم وتعليم التجويد عبر الإنترنت. نقدم لأبنائكم وبناتكم تجربة تعليمية وطنية أصيلة مع أفضل المعلمين والمعلمات المتخصصين المجازين — بجدول مرن يناسب يومكم، وبأعلى معايير التربية التي تطمئن إليها كل عائلة.
              </p>

              {/* Action CTAs columns */}
              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-black text-white bg-gradient-to-b from-primary-brand to-primary-light hover:from-primary-light hover:to-primary-brand duration-300 shadow-xl hover:shadow-primary-brand/20 border border-gold-brand/40 text-center text-lg active:scale-98"
                >
                  احجز حصتك التجريبية المجانية الآن
                </a>
                <a 
                  href="#packages" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold bg-white text-primary-brand hover:bg-[#EEF7F1]/50 border border-primary-brand/20 hover:border-gold-brand text-center text-lg shadow-sm transition-all duration-300"
                >
                  تعرّف على باقاتنا
                </a>
              </div>

              {/* Mini trust features under heroes */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-gold-brand/20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-soft-green flex items-center justify-center text-primary-brand">
                    <ShieldCheck className="w-4.5 h-4.5 text-gold-brand" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">سجل تجاري رسمي</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-soft-green flex items-center justify-center text-primary-brand">
                    <GraduationCap className="w-4.5 h-4.5 text-gold-brand" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">معلمات ومعلمون مجازون</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-soft-green flex items-center justify-center text-primary-brand">
                    <MapPin className="w-4.5 h-4.5 text-gold-brand" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">نخدم كافة مدن المملكة</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-soft-green flex items-center justify-center text-primary-brand">
                    <CheckCircle2 className="w-4.5 h-4.5 text-gold-brand" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">حصة تجربة مجانية</span>
                </div>
              </div>

            </div>

            {/* Left Side: Premium Animated Islamic Visual */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center items-center">
              <IslamicVisual />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. SOCIAL PROOF BAR
          ======================================================== */}
      <section className="bg-primary-dark text-white py-8 border-y-2 border-gold-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-right">
              <h3 className="text-lg font-black font-display text-gold-light">ثقة تبدأ من أول تلاوة</h3>
              <p className="text-xs text-cream-brand/80 mt-1">توفير تجربة تعليمية متكاملة لربط الأطفال والفتيات بكتاب الله عز وجل</p>
            </div>
            
            {/* Badges Layout */}
            <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 max-w-4xl">
              {[
                "سجل تجاري موثق",
                "مدرسات مستقلات للبنات",
                "متابعة دورية مستمرة",
                "نخدم كافة مناطق السعودية",
                "حصة تجريبية مجانية بالكامل",
                "معلمون بشهادات وإجازات"
              ].map((badge, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary-brand/90 hover:bg-gold-brand/20 text-[#FAF7EE] text-xs font-bold border border-gold-brand/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Check className="w-3.5 h-3.5 text-gold-brand" />
                  {badge}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          4. PROBLEM / SOLUTION SECTION
          ======================================================== */}
      <section id="problems" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            eyebrow="الاحتياج والتربية" 
            title="هل تواجه عناء البحث عن معلم قرآن مخلص وموثوق لطفلك؟"
            description="كثير من الآباء والأمهات في بلادنا يواجهون تحديات حقيقية عند تأمين تعليم قرآني آمن، منتظم وتفاعلي لأولادهم."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            
            {/* Right Group: Problem Cards (Red Tint) */}
            <div className="space-y-4">
              <h3 className="text-xl font-black font-display text-rose-800 flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600 block"></span>
                التحديات والصعوبات التي يواجهها الآباء:
              </h3>
              
              {problemSolutions.map((item, index) => (
                <div 
                  key={item.id} 
                  className="bg-rose-50/40 hover:bg-rose-50 border border-rose-100 rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:-translate-x-1"
                >
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111827] text-base">{item.problem}</h4>
                    <span className="text-[11px] text-rose-700 font-bold block mt-1.5">عائق تربوي يؤثر على استقرار الحفظ</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Left Group: Academy Solutions (Green/Gold Tint) */}
            <div className="bg-gradient-to-br from-primary-brand to-primary-dark text-white rounded-3xl p-6 sm:p-8 space-y-6 relative border-t-4 border-gold-brand shadow-xl">
              <div className="absolute top-4 left-4 text-gold-light opacity-10">
                <Landmark className="w-24 h-24" />
              </div>

              <h3 className="text-2xl font-black font-display text-gold-light flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-gold-brand" />
                في أكاديمية الذكر، هذه المشاكل انتهت!
              </h3>
              <p className="text-sm text-cream-brand/80 leading-relaxed">
                أوجدنا لكم بيئة تقنية حديثة ومنظومة إشراقية تربوية تعيد ربط الأبناء بالقرآن الكريم بكل مودة وتشجيع تفاعلي.
              </p>

              <div className="space-y-4 pt-2">
                {problemSolutions.map((item, index) => (
                  <div 
                    key={`sol-${item.id}`} 
                    className="bg-primary-light/40 border border-[#B98A3A]/20 hover:border-[#D6B064]/50 rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-brand text-primary-brand flex items-center justify-center font-bold text-sm">
                      <Check className="w-4 h-4 text-primary-dark" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{item.solution}</h4>
                      <span className="text-[11px] text-gold-light font-bold block mt-1.5">حل أمثل يتناسب مع ثقافة بيوتنا</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 justify-center px-6 py-3.5 bg-gold-brand hover:bg-gold-light text-primary-brand font-black rounded-xl duration-300 shadow-lg text-sm w-full sm:w-auto"
                >
                  تخلّص من عناء البحث و جرب حصتك المجانية الآن
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          5. SERVICES SECTION
          ======================================================== */}
      <section id="services" className="py-20 islamic-pattern-light border-y border-gold-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            eyebrow="خدماتنا ورؤيتنا" 
            title="برامج وخدمات أكاديمية الذكر"
            description="أنشطة وبرامج مخصصة بعناية ومصممة لتلائم الفروق العمرية للطلاب واهتمامات مستوياتهم من التحفيظ والترتيل والتأسيس الهادئ."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white hover:bg-white border hover:border-gold-brand/30 border-primary-brand/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative flex flex-col justify-between"
              >
                {/* Visual Circle & Number Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-soft-green text-primary-brand flex items-center justify-center font-bold text-xl border border-primary-brand/10">
                    {index % 4 === 0 && <BookOpen className="w-6 h-6 text-gold-brand" />}
                    {index % 4 === 1 && <GraduationCap className="w-6 h-6 text-gold-brand" />}
                    {index % 4 === 2 && <Award className="w-6 h-6 text-gold-brand" />}
                    {index % 4 === 3 && <Users className="w-6 h-6 text-gold-brand" />}
                  </div>
                  <span className="text-2xl font-black font-display text-slate-100 select-none">0{index + 1}</span>
                </div>

                <div className="space-y-2 flex-grow">
                  <h3 className="text-lg font-black font-display text-primary-dark leading-snug">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-slate-600 line-clamp-4">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-gold-brand font-bold">باقة معتمدة وموثقة</span>
                  <a href="#contact" className="text-xs font-bold text-primary-brand hover:text-gold-brand flex items-center gap-1">
                    احجز الآن <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          6. FEATURES SECTION
          ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            eyebrow="مزايا حصرية" 
            title="لماذا تختار أكاديمية الذكر لتعليم طفلك؟"
            description="وفرنا لكم تجربة ومميزات متطورة تؤمن أقصى درجات الضمان والأمان التربوي لتعاملاتكم."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feat, index) => (
              <div 
                key={feat.id} 
                className="group relative bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-gold-brand/40 duration-300 rounded-3xl p-6 hover:shadow-xl transition-all"
              >
                {/* Hover indicator border top */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-l from-primary-brand to-gold-brand rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 rounded-full bg-gold-brand/10 text-gold-brand flex items-center justify-center mb-5 group-hover:bg-primary-brand group-hover:text-gold-light duration-300">
                  {index === 0 && <ShieldCheck className="w-6 h-6" />}
                  {index === 1 && <Calendar className="w-6 h-6" />}
                  {index === 2 && <Clock className="w-6 h-6" />}
                  {index === 3 && <Users className="w-6 h-6" />}
                  {index === 4 && <ClipboardCheck className="w-6 h-6" />}
                  {index === 5 && <Landmark className="w-6 h-6" />}
                  {index === 6 && <CreditCard className="w-6 h-6" />}
                  {index === 7 && <RefreshCcw className="w-6 h-6 animate-spin-slow" />}
                </div>

                <h3 className="text-lg font-black font-display text-primary-dark mb-2 tracking-tight group-hover:text-primary-brand duration-300">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {feat.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-gold-dark">
                  <Check className="w-3.5 h-3.5" /> ميزة معتمدة ومفتوحة
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          7. PACKAGES SECTION
          ======================================================== */}
      <section id="packages" className="py-20 bg-[#F4EFEB] border-y border-gold-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            eyebrow="باقات معتمدة" 
            title="اختر الباقة المناسبة لمستوى طفلك"
            description="جميع الباقات المعروضة تشمل حصصاً تفاعلية بمدة 30 دقيقة، ويمكن للأهل ترقية مدة الحصة لساعة كاملة في أي وقت لتسريع وتيرة الحفظ."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`relative bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 transition-all duration-300 hover:scale-103 ${
                  pkg.isPopular 
                    ? "border-gold-brand shadow-xl shadow-gold-brand/5" 
                    : pkg.name === "الباقة الشاملة"
                    ? "border-primary-brand/30 shadow-lg"
                    : "border-primary-brand/5 shadow-md"
                }`}
              >
                {/* Popular Badge ribbon */}
                {pkg.badge && (
                  <span className={`absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    pkg.isPopular 
                      ? "bg-gold-brand text-primary-brand" 
                      : "bg-soft-green text-primary-light"
                  }`}>
                    <Sparkles className="w-3 h-3 text-gold-brand" /> {pkg.badge}
                  </span>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl shadow-inner shadow-slate-100">
                      {pkg.icon}
                    </div>
                    <div>
                      {pkg.isPopular && <span className="text-[10px] text-gold-brand font-black block">الأكثر اختياراً وطلبًا</span>}
                      <h3 className="text-xl sm:text-2xl font-black font-display text-primary-brand">{pkg.name}</h3>
                    </div>
                  </div>

                  {/* Pricing / Details Line */}
                  <div className="border-t border-b border-rose-100/10 bg-[#FAF7EE]/60 px-4 py-3.5 rounded-2xl mb-6">
                    <div className="text-sm font-black text-slate-800 flex justify-between">
                      <span>عدد الحصص:</span>
                      <span className="text-primary-brand font-black text-base">{pkg.lessons}</span>
                    </div>
                    <div className="text-sm font-black text-slate-800 flex justify-between mt-2">
                      <span>إجمالي الساعات:</span>
                      <span className="text-gold-brand-dark font-black text-base">{pkg.hours}</span>
                    </div>
                  </div>

                  {/* Bullet Values */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                      <Check className="w-4.5 h-4.5 text-gold-brand flex-shrink-0 mt-0.5" />
                      <span>{pkg.bestFor}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <Check className="w-4.5 h-4.5 text-gold-brand flex-shrink-0 mt-0.5" />
                      <span>إشراف تربوي من قِبل إدارة الأكاديمية</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <Check className="w-4.5 h-4.5 text-gold-brand flex-shrink-0 mt-0.5" />
                      <span>تقارير شهرية ترسل لولي الأمر بانتظام</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <Check className="w-4.5 h-4.5 text-gold-brand flex-shrink-0 mt-0.5" />
                      <span>تعويض كامل للحصص الفائتة بإشعار مسبق</span>
                    </div>
                  </div>
                </div>

                {/* Pricing / Custom Action text */}
                <div className="space-y-3">
                  <div className="text-center bg-slate-50 rounded-xl py-3 border border-slate-100">
                    <span className="text-xs text-slate-500 font-bold block">اضغط للتواصل فوراً</span>
                    <span className="text-sm font-black text-primary-dark">تواصل لمعرفة السعر والخصم اليوم</span>
                  </div>
                  
                  <a 
                    href={`https://wa.me/966501234567?text=السلام%20عليكم%20أكاديمية%20الذكر.%20أرغب%20في%20الاستفسار%20عن%20(${pkg.name})%20وحجز%20الحصة%20التجريبية%20المجانية%20لطفلي`} 
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full inline-flex items-center justify-center py-3.5 rounded-2xl font-black text-sm transition-all duration-300 ${
                      pkg.isPopular 
                        ? "bg-gold-brand hover:bg-gold-light text-primary-brand shadow-lg hover:shadow-gold-brand/20 border border-gold-light" 
                        : "bg-primary-brand hover:bg-primary-light text-white shadow"
                    }`}
                  >
                    اسأل عن الأسعار واحجز الآن
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          8. OFFERS SECTION
          ======================================================== */}
      <section id="offers" className="py-20 bg-primary-dark text-white relative overflow-hidden">
        {/* Decorative backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-brand to-[#041008] opacity-95 pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-gold-brand/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader 
            eyebrow="عروض التوفير الأقوى" 
            title="وفّر أكثر مع عروض اشتراك المائة يوم والطاقات الطويلة"
            description="جميع باقاتنا السابقة مدعومة بثلاثة عروض ترويجية استثنائية — مخصصة للأسر الجادة الحريصة على إتمام الحفظ."
            light={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {offers.map((off) => (
              <div 
                key={off.id} 
                className="bg-primary-brand/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 border-gold-brand/20 hover:border-gold-brand transition-all duration-300 hover:scale-102 hover:shadow-2xl hover:shadow-gold-brand/10"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-gold-brand/10 text-gold-brand flex items-center justify-center font-bold text-2xl">
                      ⭐
                    </span>
                    {off.badge && (
                      <span className="bg-gold-brand text-primary-brand text-[9px] font-black px-2.5 py-1 rounded-full animate-bounce">
                        {off.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black font-display text-gold-light tracking-tight mb-2">
                    {off.title}
                  </h3>
                  <h4 className="text-base sm:text-lg font-black font-display text-white border-b border-white/10 pb-4 mb-4">
                    {off.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-cream-brand/80 leading-relaxed mb-6">
                    {off.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-center py-2 bg-primary-dark/80 rounded-xl border border-white/5">
                    <span className="text-[10px] text-gold-light font-bold">خصومات تعادل لغاية 33%!</span>
                  </div>
                  <a 
                    href={`https://wa.me/966501234567?text=السلام%20عليكم%20أكاديمية%20الذكر.%20أريد%20الاستفسار%20والحصول%20على%20تفاصيل%20(${off.title})`} 
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-gold-brand hover:bg-gold-light text-primary-brand font-black text-sm transition-colors duration-300"
                  >
                    اسأل وتواصل عن هذا العرض
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          9. COMPARISON SECTION
          ======================================================== */}
      <section id="comparison" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            eyebrow="مقارنة وتقييم" 
            title="ما الفرق بين أكاديمية الذكر والخيارات الأخرى؟"
            description="نحن لا نقدم معلم قرآن فقط، بل نتميز بتوفير منظومة جودة وإشراف تربوي متكاملة تطمئن إليها الأسرة خطوة بخطوة."
          />

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-gold-brand/20 shadow-xl mt-12 bg-white">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-gradient-to-l from-primary-brand to-primary-light text-white border-b-2 border-gold-brand">
                  <th className="px-6 py-5 font-black font-display text-base">مزايا التقدم</th>
                  <th className="px-6 py-5 font-black font-display text-base text-gold-light">أكاديمية الذكر</th>
                  <th className="px-6 py-5 font-black font-display text-base text-cream-brand/80">خيارات تقليدية أو معلّم فردي</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7EE]/40 transition-colors">
                    <td className="px-6 py-4 font-black text-primary-dark text-sm sm:text-base border-l border-slate-100">
                      {row.criteria}
                    </td>
                    <td className="px-6 py-4 text-sm text-primary-brand font-bold bg-soft-green/30 border-l border-slate-100">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span>{row.academy}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                        <span>{row.competitors}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Card View */}
          <div className="block md:hidden space-y-4 mt-8">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-150 rounded-2xl p-5 space-y-3">
                <span className="inline-block px-2.5 py-1 bg-gold-brand/10 text-gold-dark text-xs font-black rounded-lg">
                  {row.criteria}
                </span>
                
                <div className="bg-soft-green/40 p-3.5 rounded-xl border border-emerald-100">
                  <span className="text-[10px] text-emerald-800 font-bold block mb-1">أكاديمية الذكر:</span>
                  <div className="flex items-start gap-1.5 text-xs text-primary-brand font-bold">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{row.academy}</span>
                  </div>
                </div>

                <div className="bg-rose-50/40 p-3.5 rounded-xl border border-rose-100">
                  <span className="text-[10px] text-rose-800 font-bold block mb-1">معلم فردي / تقليدي:</span>
                  <div className="flex items-start gap-1.5 text-xs text-slate-500">
                    <XCircle className="w-4.5 h-4.5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span>{row.competitors}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm font-bold text-slate-600 mb-4">
              احسم الخيار لعائلتك وابدأ مع شريك تضمنه وتطمئن له
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-brand hover:bg-primary-light text-white font-black rounded-2xl duration-200 shadow-md border border-gold-brand/30 hover:border-gold-light"
            >
              ابدأ الحصة التجريبية المجانية الآن
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================
          10. HOW IT WORKS SECTION
          ======================================================== */}
      <section className="py-20 islamic-pattern-light border-y border-gold-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            eyebrow="الخطوات والبدء" 
            title="طريقة بدء رحلة طفلك مع القرآن في 3 خطوات فقط"
            description="سهلنا عليكم آلية التسجيل وبدء أول حصة تجريبية بكل يسر وسرعة مع مستشارينا."
          />

          <div className="relative mt-16 max-w-5xl mx-auto">
            {/* Background progress track line on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gold-brand/30 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
              
              {/* Step 1 */}
              <div className="bg-white border hover:border-gold-brand/30 border-slate-100 rounded-3xl p-6 shadow-md shadow-slate-150/5 text-center space-y-4 hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 rounded-full bg-primary-brand text-gold-light flex items-center justify-center font-black text-2xl mx-auto shadow-md border-2 border-gold-brand select-none">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-black font-display text-primary-brand">تواصل معنا بكل يسر</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-slate-600">
                  أرسل لنا بياناتك واستمارة الاتصال أو اضغط زر واتساب المباشر، وسيتواصل معك مشرفنا بخلال دقائق.
                </p>
                <span className="inline-block text-[11px] text-gold-dark font-bold bg-[#FAF7EE] px-3 py-1 rounded-lg">رابط واتساب مباشر وفوري</span>
              </div>

              {/* Step 2 */}
              <div className="bg-white border hover:border-gold-brand/30 border-slate-100 rounded-3xl p-6 shadow-md shadow-slate-150/5 text-center space-y-4 hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 rounded-full bg-primary-brand text-gold-light flex items-center justify-center font-black text-2xl mx-auto shadow-md border-2 border-gold-brand select-none">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-black font-display text-primary-brand">اختر باقتك وجدول طفلك</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-slate-600">
                  سنساعدك في اختيار معلم أو معلمة للمكالمات المناسبة، واختيار الأيام والأوقات الملائمة ليومك بالكامل.
                </p>
                <span className="inline-block text-[11px] text-gold-dark font-bold bg-[#FAF7EE] px-3 py-1 rounded-lg">بدون دفع مسبق</span>
              </div>

              {/* Step 3 */}
              <div className="bg-white border hover:border-gold-brand/30 border-slate-100 rounded-3xl p-6 shadow-md shadow-slate-150/5 text-center space-y-4 hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 rounded-full bg-gold-brand text-primary-brand flex items-center justify-center font-black text-2xl mx-auto shadow-md border-2 border-primary-brand select-none">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-black font-display text-primary-brand">ابدأ الحصة التجريبية الأولى</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-slate-600">
                  يتواصل معك المعلم عبر تطبيق الفيديو المعتاد في الموعد المتفق عليه تماماً، وتبدأ أول خطوة مباركة.
                </p>
                <span className="inline-block text-[11px] text-green-800 font-bold bg-green-50 px-3 py-1 rounded-lg">مجانية بالكامل لولي الأمر</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          11. ABOUT US SECTION
          ======================================================== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story text */}
            <div className="lg:col-span-6 space-y-6 text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-soft-green text-primary-brand border border-primary-brand/10">
                <Sparkles className="w-3.5 h-3.5 text-gold-brand" /> قصة التأسيس
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-primary-dark">
                أكاديمية الذكر — نشأت من شغف، وترسّخت على أمانة
              </h2>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                أكاديمية الذكر لم تولد في مكتب مغلق، ولم تنشأ خلف شاشة جافة — بل وُلدت من إيمان حقيقي بأن كل طفل يحتاج ويرنو أن يرتل ويحفظ كتاب الله في صدره وعقله بكل حب وطمأنينة.
              </p>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                أسسها نخبة من معلمي التربية والتقنية الذين جمعهم غرض سامٍ: تذليل الحصص وتيسير تلاوة القرآن الكريم منزلياً أونلاين بكلفة ملائمة لجميع الأسر داخل المملكة وبمنظومة إشرافية محترمة.
              </p>

              {/* Quote block */}
              <div className="relative border-r-4 border-gold-brand bg-[#FAF7EE] p-5 rounded-l-2xl shadow-sm italic text-slate-700 font-medium">
                <span className="text-4xl text-gold-brand absolute top-1 right-2 opacity-25">"</span>
                <p className="mr-4 text-primary-brand font-bold text-base sm:text-lg leading-relaxed">
                  "لماذا يجد الآباء والأمهات في هذا الجيل صعوبة بالغة في توفير معلّم مخلص ذي كفاءة دون عناء المشاوير اليومية؟ الجواب كان أكاديمية الذكر التي جعلت القرآن منهجاً وجزءاً من يوم طفلك بكل يسر."
                </p>
              </div>
            </div>

            {/* Mission / Vision / Values grid cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Mission */}
              <div className="bg-soft-green/50 border border-emerald-100 p-6 rounded-2xl space-y-3 hover:bg-soft-green transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-primary-brand text-gold-light flex items-center justify-center text-lg font-bold">
                  🌱
                </div>
                <h3 className="text-lg font-black font-display text-primary-brand">رسالتنا</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  تيسير كتاب الله وتلاوته وتحفيظه لكل طفل وبنت في السعودية والخليج، باستخدام أساليب تربوية حديثة تشجع الطالب ولا تنفره.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-[#FAF7EE]/50 border border-gold-brand/10 p-6 rounded-2xl space-y-3 hover:bg-[#FAF7EE] transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-gold-brand text-primary-brand flex items-center justify-center text-lg font-bold">
                  🎯
                </div>
                <h3 className="text-lg font-black font-display text-[#8F6828]">رؤيتنا</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  أن نكون الأكاديمية والمنصة التعليمية الأولى الأكثر جودة وأماناً تربوياً للبيوت الكريمة في عموم محافظات المملكة بحلول 2028.
                </p>
              </div>

              {/* Values */}
              <div className="sm:col-span-2 bg-[#FAF7EE]/30 border border-slate-150 p-6 rounded-2xl space-y-4">
                <h3 className="text-lg font-black font-display text-primary-brand flex items-center gap-1.5">
                  <HeartHandshake className="w-5 h-5 text-gold-brand" /> قيّمنا وسرّ أمانتنا التربوية
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-bold text-primary-dark block">الأمانة في التعليم:</span>
                    <span className="text-[11px] text-slate-500">تقديم أعلى كفاءة تعليم مع معلم ملائم وأخلاق كريمة.</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary-dark block">احترام وقت الأسرة:</span>
                    <span className="text-[11px] text-slate-500">التزام صارم ودقيق بكافة المواعيد والحضور المحدد.</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary-dark block">الجودة قبل الكم:</span>
                    <span className="text-[11px] text-slate-500">تثبيت الحفظ والمراجعة بشكل يفيد مدارك الطالب دون ضغوط.</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary-dark block">الشفافية التامة:</span>
                    <span className="text-[11px] text-slate-500">إرسال تقارير موضوعية وتنسيق مستمر بأي ملاحظات.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          12. TEAM / BEHIND THE SCENES SECTION
          ======================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            eyebrow="فريق مبارك يعمل لأجلكم" 
            title="خلف كل حصة كادر متكامل يسهر لخدمتكم"
            description="خلف الكواليس في أكاديمية الذكر فريق من المشرفين والتربويين الذين يتعهدون رعاية المسيرة التعليمية لأبنائكم يومياً."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member, idx) => (
              <div 
                key={member.id} 
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow hover:shadow-md transition-shadow relative overflow-hidden"
              >
                {/* Decorative gold background strip */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gold-brand" />
                
                <span className="text-4xl mb-4 block">
                  {idx === 0 && "📌"}
                  {idx === 1 && "🎓"}
                  {idx === 2 && "📚"}
                  {idx === 3 && "💬"}
                </span>

                <h3 className="text-lg font-black font-display text-primary-brand mb-2">
                  {member.role}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-slate-600">
                  {member.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] text-gold-dark font-black">
                  <span>خدمة القرآن الكريم</span>
                  <span>أكاديمية الذكر الرسمية</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-xs sm:text-sm mt-12 bg-white px-6 py-3.5 rounded-2xl border border-slate-105 max-w-2xl mx-auto font-medium">
            💡 <strong className="text-primary-brand">تعهّد بالرعاية والمتابعة:</strong> يسهر كادر التنسيق على مدار اليوم لإتاحة التغييرات، وتأمين الحصص البديلة فوراً حتى يكون طفلك دائماً في تقدم مستقر.
          </p>

        </div>
      </section>

      {/* ========================================================
          13. STATS SECTION
          ======================================================== */}
      <section className="py-20 bg-primary-brand text-white relative border-y-2 border-gold-brand islamic-pattern">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader 
            eyebrow="أرقام تبرهن كفاءتنا" 
            title="أرقام تعكس ثقة مئات الأمهات والآباء بنا"
            description="إحصائيات نعتز بها تبرز مدى جودة مسار التدريس المتميز بالأكاديمية."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            
            {/* Stat 1 */}
            <div className="bg-primary-dark/80 backdrop-blur border border-gold-brand/20 p-6 rounded-3xl text-center space-y-2 group hover:border-gold-brand transition-colors duration-300">
              <AnimatedCounter target={6} suffix="" />
              <h4 className="font-bold text-sm text-cream-brand">باقات تعليمية مرنة</h4>
              <p className="text-[11px] text-cream-brand/60">باقات مدروسة بعناية لتناسب استيعاب وميزانية كل أسرة.</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-primary-dark/80 backdrop-blur border border-gold-brand/20 p-6 rounded-3xl text-center space-y-2 group hover:border-gold-brand transition-colors duration-300">
              <AnimatedCounter target={100} suffix="%" />
              <h4 className="font-bold text-sm text-cream-brand">نغطي كافة مناطق المملكة</h4>
              <p className="text-[11px] text-cream-brand/60">نخدم الرياض، جدة، الدمام، عسير، والجنوب والشرقية والغربية.</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-primary-dark/80 backdrop-blur border border-gold-brand/20 p-6 rounded-3xl text-center space-y-2 group hover:border-gold-brand transition-colors duration-300">
              <AnimatedCounter target={24} suffix="س" />
              <h4 className="font-bold text-sm text-cream-brand">متابعة وعمل مستمر</h4>
              <p className="text-[11px] text-cream-brand/60">فريق إداري على مدار الساعة للتنسيق الحركي والتقني.</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-primary-dark/80 backdrop-blur border border-gold-brand/20 p-6 rounded-3xl text-center space-y-2 group hover:border-gold-brand transition-colors duration-300">
              <AnimatedCounter target={1} suffix="رسمي" />
              <h4 className="font-bold text-sm text-cream-brand">سجل تجاري سعودي</h4>
              <p className="text-[11px] text-cream-brand/60">الأمان النظامي الكامل لك ولكافة مدفوعاتك الإلكترونية.</p>
            </div>

            {/* Stat 5 (Text badge because teacher count varies) */}
            <div className="bg-primary-dark/80 backdrop-blur border border-gold-brand/30 p-6 rounded-3xl text-center space-y-2 flex flex-col justify-center items-center hover:border-gold-brand transition-colors duration-305">
              <span className="text-3xl font-display font-black text-gold-brand block">نخبة</span>
              <h4 className="font-bold text-sm text-cream-brand mt-1.5">معلمون مخلصون معتمدون</h4>
              <p className="text-[11px] text-cream-brand/60">كوادر مختارة ومحفظات بمؤهلات وإجازات شرعية معتمدة.</p>
            </div>

          </div>

          <div className="mt-16 bg-primary-dark/60 rounded-3xl border border-gold-brand/10 p-6 max-w-4xl mx-auto">
            <h4 className="text-lg font-black font-display text-gold-light text-center mb-4">أهم البنود والمزايا الرقمية المعتمدة</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-cream-brand/90 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-brand" />
                <span>6 باقات مرنة لتلائم كافة الطلاب وبكافة الظروف</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-brand" />
                <span>معلمون ومعلمات متمكنون من الحفظ والتجويد</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-brand" />
                <span>نخدم جميع مناطق ومحافظات المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-brand" />
                <span>مسجلون رسميًا بسجل تجاري معتمد ومرخص بالكامل</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-brand" />
                <span>متاحون للخدمة والتواصل على مدار اليوم والدعم الفني</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-brand" />
                <span>حصة تجربة مجانية بالكامل قبل الدفع والاشتراك</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          14. TESTIMONIALS SECTION
          ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            eyebrow="تقييمات وآراء" 
            title="ماذا يقول آباء وأمهات سبقوكم بالاشتراك؟"
            description="نعتز بشدة برسائل الشكر والثناء التي تصلنا دورياً من أولياء الأمور الذين لمسوا فارقاً حقيقياً في تلاوة وسلوك أولادهم."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((test) => (
              <div 
                key={test.id} 
                className="bg-[#FAF7EE]/60 hover:bg-[#FAF7EE] border border-gold-brand/10 hover:border-gold-brand/30 transition-all duration-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative"
              >
                {/* Visual decorative Gold quote quote mark */}
                <span className="text-5xl text-gold-light opacity-30 absolute top-4 left-6 pointer-events-none select-none">”</span>

                <div>
                  {/* Rating star stars */}
                  <div className="flex items-center gap-1.5 text-gold-brand mb-4">
                    {[...Array(test.rating)].map((_, index) => (
                      <Star key={index} className="w-4.5 h-4.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-bold">
                    "{test.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-100/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-brand text-gold-light flex items-center justify-center font-black select-none text-xs">
                    {test.name.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary-brand">{test.name}</h4>
                    <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold-brand" /> {test.city}، المملكة العربية السعودية
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          15. FAQ SECTION
          ======================================================== */}
      <section id="faqs" className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            eyebrow="الأسئلة الأكثر شيوعاً" 
            title="أسئلة يطرحها كل ولي أمر قبل حجز حصة التحفيظ"
            description="أعددنا لكم إجابات كاملة مفصلة عن طريقة تسيير الحصص وضمان التزام الأطفال والفتيات."
          />

          <div className="mt-12 space-y-3.5">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border transition-all duration-300 rounded-2xl overflow-hidden bg-white ${
                    isOpen ? "border-gold-brand/50 shadow-md" : "border-slate-150"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-5 sm:px-6 py-5 text-right flex items-center justify-between font-black text-sm sm:text-base text-primary-dark group hover:text-gold-brand"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-gold-brand flex-shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gold-brand flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 group-hover:text-gold-brand" />
                    )}
                  </button>

                  {/* Accordion smooth expansion */}
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-slate-100/60" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 py-5 bg-slate-50/50 text-xs sm:text-sm text-slate-650 leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-slate-550 text-xs mt-10">
            ألديك سؤال آخر لم نذكره؟ لا تتردد بالضغط على زر <a href="#contact" className="text-primary-brand font-black underline hover:text-gold-brand">تواصل معنا</a> لخدمتكم الفورية والودية.
          </p>

        </div>
      </section>

      {/* ========================================================
          16. CONTACT SECTION
          ======================================================== */}
      <section id="contact" className="py-20 islamic-pattern-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
            
            {/* Right column: Form */}
            <div className="lg:col-span-7 bg-white border border-gold-brand/20 rounded-3xl p-6 sm:p-9 shadow-xl relative">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-soft-green text-primary-brand mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold-brand" /> استمارة مجانية
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-black font-display text-primary-dark mb-2">
                احجز حصة طفلك التجريبية المجانية الآن
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                اترك بيانات الاتصال والتواصل وسيقوم مشرف أكاديمية الذكر بالتواصل الهاتفي معكم اليوم لتنسيق التوقيت والبديل المناسب لطفلك.
              </p>

              {formStatus === "success" ? (
                <div id="contact-success" className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-emerald-800">تم إرسال طلبكم بنجاح وبركة!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    نشكركم على ثقتكم الغالية وسيتصل بكم المشرف التربوي لأكاديمية الذكر في غضون وقت وجيز لترتيب الحصة ومقابلة المعلم.
                  </p>
                  <button 
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-brand underline cursor-pointer"
                  >
                    أرسل طلباً إضافياً لطفل آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  {formStatus === "error" && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 font-bold flex items-center gap-2">
                      ⚠️ يرجى تعبئة الاسم ورقم الجوال للتواصل.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Parent Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="pname" className="text-xs font-black text-slate-700 block">اسم ولي الأمر الأب أو الأم *</label>
                      <input 
                        type="text" 
                        id="pname" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="مثال: يوسف الحربي" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-brand focus:border-transparent text-sm bg-slate-50 hover:bg-white text-slate-800"
                      />
                    </div>

                    {/* Phone input */}
                    <div className="space-y-1.5">
                      <label htmlFor="pnum" className="text-xs font-black text-slate-700 block">رقم الجوال الفعال (واتساب) *</label>
                      <input 
                        type="tel" 
                        id="pnum" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="مثال: 05XXXXXXXX" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-brand focus:border-transparent text-sm bg-slate-50 hover:bg-white text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Student Age input */}
                    <div className="space-y-1.5">
                      <label htmlFor="sage" className="text-xs font-black text-slate-700 block">عمر الطالب أو الابنة</label>
                      <input 
                        type="text" 
                        id="sage" 
                        value={studentAge}
                        onChange={(e) => setStudentAge(e.target.value)}
                        placeholder="مثال: 8 سنوات" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-brand focus:border-transparent text-sm bg-slate-50 hover:bg-white text-slate-800"
                      />
                    </div>

                    {/* Student Gender option */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-700 block">نوع الطالب</label>
                      <div className="grid grid-cols-2 gap-2">
                        {["ولد", "بنت"].map((g) => (
                          <button
                            type="button"
                            key={g}
                            onClick={() => setStudentGender(g)}
                            className={`py-3 rounded-xl border font-bold text-xs transition-colors ${
                              studentGender === g 
                                ? "bg-primary-brand/10 border-primary-brand text-primary-brand" 
                                : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                            }`}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Program Requested selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700 block">البرنامج القرآني المطلوب</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        "تحفيظ القرآن",
                        "تعليم التجويد",
                        "تصحيح التلاوة",
                        "تأسيس الأطفال",
                        "أحتاج استشارة"
                      ].map((prog) => (
                        <button
                          type="button"
                          key={prog}
                          onClick={() => setRequestedProgram(prog)}
                          className={`py-2 p-1.5 rounded-xl border font-bold text-xs transition-all leading-tight ${
                            requestedProgram === prog 
                              ? "bg-gold-brand/10 border-gold-brand text-gold-dark" 
                              : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                          }`}
                        >
                          {prog}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Parent Message text area */}
                  <div className="space-y-1.5">
                    <label htmlFor="pmsg" className="text-xs font-black text-slate-700 block">اكتب تفاصيل إضافية تود إخبار المعلم بها</label>
                    <textarea 
                      id="pmsg"
                      value={parentMessage}
                      onChange={(e) => setParentMessage(e.target.value)}
                      rows={3}
                      placeholder="امثلة: طفلي خجول، يحفظ جزئين، نقاط يحتاج لترسيخها..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-brand focus:border-transparent text-sm bg-slate-50 hover:bg-white text-slate-800 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center py-4 bg-primary-brand hover:bg-primary-light text-white font-black rounded-xl duration-300 shadow-lg text-sm select-none hover:shadow-primary-brand/10 border border-gold-brand/40 active:scale-98 cursor-pointer"
                  >
                    {formStatus === "submitting" ? "جاري الإرسال..." : "أرسل طلب الحصة المجانية الآن"}
                  </button>

                </form>
              )}

              {/* Sub CTA row */}
              <div className="mt-6 pt-5 border-t border-slate-100 text-center">
                <span className="text-xs text-slate-500 font-bold block mb-2">تفضل الطريقة الأسرع؟</span>
                <a 
                  href="https://wa.me/966501234567?text=السلام%20عليكم%20أكاديمية%20الذكر.%20أرغب%20في%20ترتيب%20حصة%20تجريبية%20مجانية%20للطفل%20فورًا"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" /> أو تواصل معنا مباشرة عبر واتساب
                </a>
              </div>

            </div>

            {/* Left column: Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Contact Card 1: WhatsApp */}
              <div className="bg-white/90 border border-[#B98A3A]/25 rounded-3xl p-6 shadow-md shadow-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-1 bg-emerald-600 w-full" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-800 font-black block uppercase">تواصل فوري سريع</span>
                    <a href="https://wa.me/966501234567" target="_blank" rel="noreferrer" className="text-lg font-black text-[#111827] hover:text-emerald-700 tracking-tight block mt-0.5">
                      966501234567+
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Card 2: Phone */}
              <div className="bg-white/90 border border-[#B98A3A]/25 rounded-3xl p-6 shadow-md shadow-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-1 bg-primary-brand w-full" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-soft-green text-primary-brand flex items-center justify-center text-xl">
                    <Phone className="w-6 h-6 text-gold-brand" />
                  </div>
                  <div>
                    <span className="text-[10px] text-primary-brand font-black block uppercase">رقم الهاتف التربوي للاستفسار</span>
                    <a href="tel:+966501234567" className="text-lg font-black text-[#111827] hover:text-primary-brand tracking-tight block mt-0.5" dir="ltr">
                      +966 50 123 4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Card 3: Mail */}
              <div className="bg-white/90 border border-[#B98A3A]/25 rounded-3xl p-6 shadow-md shadow-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-1 bg-gold-brand w-full" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7EE] text-gold-brand flex items-center justify-center text-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gold-brand font-black block">البريد الإلكتروني للأكاديمية</span>
                    <a href="mailto:info@althikr.academy" className="text-base font-black text-[#111827] hover:text-gold-brand block mt-0.5">
                      info@althikr.academy
                    </a>
                  </div>
                </div>
              </div>

              {/* Detailed highlights area */}
              <div className="bg-primary-dark text-white rounded-3xl p-6 tracking-wide border-t-4 border-gold-brand shadow-lg space-y-4">
                <h4 className="font-black font-display text-gold-light text-base sm:text-lg">نخدم أولياء الأمور فخراً على مدار اليوم:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-cream-brand/90">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold-brand flex-shrink-0 mt-0.5" />
                    <span>متاحون للتواصل والإجابة الفورية يوميًا على مدار اليوم لخدمتكم.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold-brand flex-shrink-0 mt-0.5" />
                    <span>توفير مشرفين مخصصين لربط المعلم بالطالب والترشيح المناسب.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold-brand flex-shrink-0 mt-0.5" />
                    <span>خدمة شاملة تغطي الرياض، مكة، المدينة، جدة، الشرقية، الجنوب والشمال.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          17. FINAL CTA SECTION
          ======================================================== */}
      <section className="py-20 text-white bg-primary-brand relative overflow-hidden border-t-2 border-gold-brand islamic-pattern">
        
        {/* Glowing aura background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-brand/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          <span className="inline-flex items-center gap-1 bg-gold-brand/20 text-gold-light px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-1">
            🌱 وصية المصطفى وبدء الحفظ
          </span>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white leading-tight">
            لا تؤجل — كل يوم تأخير هو حصة متأخرة عن كتاب الله عز وجل
          </h1>

          <div className="bg-primary-dark/80 p-5 rounded-3xl border border-gold-brand/20 max-w-2xl mx-auto italic text-gold-light font-medium tracking-wide">
            "يقول النبي ﷺ: <strong>خيركم من تعلّم القرآن وعلّمه</strong>"
          </div>

          <p className="text-sm sm:text-base text-cream-brand/90 max-w-xl mx-auto leading-relaxed">
            ابدأوا اليوم وأهدوا أطفالكم وبناتكم هدية حية مخلدة لا تفنى في الحياة والآخرة — تاج الوقار وهدية القرآن الكريم وصحبة صالحة مخلصة.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 max-w-md mx-auto">
            <a 
              href="https://wa.me/966501234567?text=السلام%20عليكم%20أكاديمية%20الذكر.%20أريد%20الاستفسار%20عن%20التسجيل%20والحصول%20على%20الحصة%20المجانية%20للطفل"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-brand hover:bg-gold-light text-primary-brand font-black rounded-2xl duration-300 shadow-xl hover:shadow-gold-brand/20 border border-gold-light text-lg select-none cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" /> تواصل معنا الآن عبر واتساب
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-light hover:bg-[#1f5634]/80 text-white font-bold rounded-2xl border border-white/20 hover:border-gold-brand transition-all text-lg"
            >
              احجز حصتكِ المجانية
            </a>
          </div>

          {/* Quick core highlights */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-8 text-xs text-cream-brand/80">
            <span className="flex items-center gap-1.5 font-bold"><Check className="w-4 h-4 text-gold-brand" /> ردّ فوري وتنسيق سعيد</span>
            <span className="text-gold-brand">•</span>
            <span className="flex items-center gap-1.5 font-bold"><Check className="w-4 h-4 text-gold-brand" /> حصة تجريبية مجانية بالكامل</span>
            <span className="text-gold-brand">•</span>
            <span className="flex items-center gap-1.5 font-bold"><Check className="w-4 h-4 text-gold-brand" /> لا التزام مالي مسبق قبل الرضا</span>
          </div>

        </div>
      </section>

      {/* ========================================================
          18. FOOTER
          ======================================================== */}
      <footer className="bg-primary-dark text-white pt-16 pb-8 border-t-2 border-gold-brand relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Logo/Brand columns */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-brand rounded-xl flex items-center justify-center border border-gold-brand/40">
                  <BookOpen className="w-5 h-5 text-gold-light" />
                </div>
                <span className="text-xl font-black font-display tracking-tight text-white">أكاديمية الذكر</span>
              </div>
              <p className="text-xs text-cream-brand/80 leading-relaxed text-slate-300">
                أكاديمية سعودية تربوية متخصصة في تحفيظ القرآن الكريم وتعليم التجويد وتصحيح التلاوة والتأسيس أونلاين لخدمة أطفالنا وبناتنا ومجتمعنا بالخليج تحت مظلة إشراف وتنسيق حريص ومحمي.
              </p>
              <div className="text-xs bg-[#FAF7EE]/5 border border-gold-brand/10 p-3 rounded-xl max-w-xs text-slate-300">
                🌱 حريصون على غرس أخلاق وحفظ القرآن بصدور الجيل الصاعد.
              </div>
            </div>

            {/* Links Column */}
            <div className="space-y-4">
              <h4 className="font-black font-display text-gold-brand text-sm tracking-wider">سلسلة الروابط</h4>
              <ul className="space-y-2 text-xs font-bold text-cream-brand/70">
                <li><a href="#hero" className="hover:text-gold-brand uppercase transition-colors">الرئيسية</a></li>
                <li><a href="#services" className="hover:text-gold-brand uppercase transition-colors">الخدمات والبرامج</a></li>
                <li><a href="#packages" className="hover:text-gold-brand uppercase transition-colors">الباقات الأكاديمية</a></li>
                <li><a href="#offers" className="hover:text-gold-brand uppercase transition-colors">اشتراكات وعروض اليوم</a></li>
                <li><a href="#comparison" className="hover:text-gold-brand uppercase transition-colors">جدول مقارنة الأكاديمية</a></li>
                <li><a href="#about" className="hover:text-gold-brand uppercase transition-colors">مسيرة التأسيس من نحن</a></li>
                <li><a href="#faqs" className="hover:text-gold-brand uppercase transition-colors">الأسئلة المتكررة الشائعة</a></li>
              </ul>
            </div>

            {/* Contact Details Column */}
            <div className="space-y-4">
              <h4 className="font-black font-display text-gold-brand text-sm tracking-wider">وسائل الاتصال والخدمة</h4>
              <ul className="space-y-3 text-xs text-cream-brand/80">
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 text-gold-brand flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold leading-none">واتساب للأكاديمية:</span>
                    <a href="https://wa.me/966501234567" target="_blank" rel="noreferrer" className="font-bold text-white hover:text-gold-brand block mt-1">966501234567+</a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-gold-brand flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold leading-none">رقم الهاتف الفعال:</span>
                    <a href="tel:+966501234567" className="font-bold text-white hover:text-gold-brand block mt-1" dir="ltr">+966 50 123 4567</a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-gold-brand flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold leading-none">البريد الإلكتروني للشكاوى:</span>
                    <a href="mailto:info@althikr.academy" className="font-bold text-white hover:text-gold-brand block mt-1">info@althikr.academy</a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-brand flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold leading-none">المقر والدولة:</span>
                    <span className="font-bold text-white block mt-1">المملكة العربية السعودية، ونخدم كافة المناطق</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Certification and Business registration */}
            <div className="space-y-4">
              <h4 className="font-black font-display text-gold-brand text-sm tracking-wider">كيان وطني معتمد</h4>
              <p className="text-xs text-cream-brand/70 leading-relaxed text-slate-300">
                نفخر بكوننا مؤسسة سعودية مسجلة رسميًا وبسجل تجاري وطني معتمد للتحفيظ وخدمات التعليم عن بعد. يضمن لكم كامل الأريحية والشفافية.
              </p>
              <div className="border border-gold-brand/20 rounded-xl p-3 bg-primary-brand/50 text-center flex flex-col items-center justify-center">
                <span className="text-[10px] text-slate-400 block font-bold">بوابة سداد إلكترونية آمنة</span>
                <span className="text-xs font-black text-gold-light mt-1">مدى | فيزا | أبل باي</span>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-brand/50 font-medium gap-4">
            <p className="text-center sm:text-right text-slate-400">
              © {new Date().getFullYear()} أكاديمية الذكر لتحفيظ القرآن والتجويد أونلاين. جميع الحقوق محفوظة ومسجلة رسميًا.
            </p>
            <div className="flex gap-4">
              <span className="text-[11px] text-slate-300">نحن شركاؤكم في تربية جيل يحمل القرآن</span>
            </div>
          </div>

        </div>
      </footer>

      {/* ========================================================
          19. FLOATING WHATSAPP CTA
          ======================================================== */}
      <a
        href="https://wa.me/966501234567?text=السلام%20عليكم%20أكاديمية%20الذكر.%20أريد%20الاستفسار%20عن%20الحصة%20التجريبية%20المجانية%20لابني"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group cursor-pointer border border-[#B98A3A]/40 animate-pulse"
        style={{ animationDuration: "3s" }}
        aria-label="تواصل معنا عبر واتساب"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
        </span>
        <span>احجز حصة مجانية بالاتصال</span>
        <MessageCircle className="w-5 h-5 flex-shrink-0 text-white fill-current group-hover:rotate-12 transition-transform duration-300" />
      </a>

    </div>
  );
}
