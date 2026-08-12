"use client";

import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Clock,
  Users,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  X,
  Menu,
  ArrowUp,
  CheckCircle2,
  Calculator,
  BookOpen,
  BarChart3,
  Quote,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Award,
  Zap,
  HeartHandshake,
  Target,
  Eye,
} from "lucide-react";

// ─── DESIGN TOKENS ───
const C = {
  navy: "#0F1B2E",
  navyLight: "#1A2A45",
  white: "#FFFFFF",
  offWhite: "#F7F8FA",
  emerald: "#10B981",
  emeraldHover: "#059669",
  slate: "#334155",
  slateLight: "#64748B",
  border: "#E2E8F0",
  glass: "rgba(255,255,255,0.7)",
};

// ─── ANIMATED HERO BACKGROUND (dynamic subtle shapes) ───
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <style>{`
        @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-40px) scale(1.1)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-25px,35px) scale(0.95)} }
        @keyframes float3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,20px) scale(1.05)} }
        @keyframes pulse1 { 0%,100%{opacity:0.12} 50%{opacity:0.22} }
      `}</style>
      <div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500, top: "-10%", right: "-8%",
          background: `radial-gradient(circle, ${C.emerald}18 0%, transparent 70%)`,
          animation: "float1 14s ease-in-out infinite, pulse1 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 350, height: 350, bottom: "5%", left: "-5%",
          background: `radial-gradient(circle, ${C.emerald}10 0%, transparent 70%)`,
          animation: "float2 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 200, height: 200, top: "40%", left: "50%",
          background: `radial-gradient(circle, ${C.navy}08 0%, transparent 70%)`,
          animation: "float3 12s ease-in-out infinite",
        }}
      />
    </div>
  );
}

// ─── SCROLL-TO-TOP ───
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      style={{ background: C.emerald, color: C.white }}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

// ─── CONTACT MODAL (enhanced with more substance) ───
function ContactModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(15,27,46,0.6)", backdropFilter: "blur(4px)" }}>
      <div className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden" style={{ background: C.white }}>
        {/* Top accent bar */}
        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${C.emerald}, ${C.navy})` }} />
        <div className="p-8">
          <button onClick={onClose} className="absolute top-5 right-5 p-1 rounded-full hover:bg-gray-100 transition" aria-label="Close">
            <X size={20} style={{ color: C.slate }} />
          </button>
          <h3 className="text-2xl font-bold mb-1" style={{ color: C.navy, fontFamily: "'DM Serif Display', Georgia, serif" }}>
            Book Your Free Call
          </h3>
          <p className="text-sm mb-6" style={{ color: C.slateLight }}>
            15 minutes. No obligation. Just clarity on your tax situation.
          </p>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition" style={{ borderColor: C.border }} />
            <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition" style={{ borderColor: C.border }} />
            <input type="tel" placeholder="Phone number (optional)" className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition" style={{ borderColor: C.border }} />
            <textarea placeholder="Brief description of your situation" rows={3} className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition resize-none" style={{ borderColor: C.border }} />
            <button
              className="w-full py-3 rounded-lg font-semibold text-white text-sm transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
              style={{ background: C.emerald }}
              onMouseEnter={(e) => (e.target.style.background = C.emeraldHover)}
              onMouseLeave={(e) => (e.target.style.background = C.emerald)}
            >
              Book My Free Call
            </button>
          </div>
          {/* Extra trust line inside modal */}
          <div className="flex items-center justify-center gap-2 mt-5 pt-4" style={{ borderTop: `1px solid ${C.border}` }}>
            <Shield size={14} style={{ color: C.emerald }} />
            <p className="text-xs" style={{ color: C.slateLight }}>
              CPA & Registered Tax Agent · Responding within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── LEARN MORE MODAL (reasons to choose Meridian) ───
function LearnMoreModal({ open, onClose, onCTA }) {
  if (!open) return null;
  const reasons = [
    { icon: Award, title: "Qualified & Registered", desc: "CPA-qualified, registered tax agent — legally authorised to lodge on your behalf and represent you with the ATO." },
    { icon: Zap, title: "Proactive, Not Reactive", desc: "We call you before deadlines, not after. Quarterly check-ins keep you ahead of surprises year-round." },
    { icon: HeartHandshake, title: "Flat Fees, No Shocks", desc: "Every plan is fixed monthly pricing. No hourly billing, no unexpected invoices, no scope creep." },
    { icon: Target, title: "Deduction Guarantee", desc: "If we don't find at least $500 in deductions you weren't claiming, your first month is free." },
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(15,27,46,0.6)", backdropFilter: "blur(4px)" }}>
      <div className="relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden" style={{ background: C.white }}>
        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${C.emerald}, ${C.navy})` }} />
        <div className="p-8">
          <button onClick={onClose} className="absolute top-5 right-5 p-1 rounded-full hover:bg-gray-100 transition" aria-label="Close">
            <X size={20} style={{ color: C.slate }} />
          </button>
          <h3 className="text-2xl font-bold mb-1" style={{ color: C.navy, fontFamily: "'DM Serif Display', Georgia, serif" }}>
            Why Meridian?
          </h3>
          <p className="text-sm mb-6" style={{ color: C.slateLight }}>
            Four reasons businesses switch — and stay.
          </p>
          <div className="flex flex-col gap-4 mb-6">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3 p-4 rounded-xl" style={{ background: C.offWhite }}>
                <div className="p-2 rounded-lg h-fit" style={{ background: `${C.emerald}12` }}>
                  <Icon size={18} style={{ color: C.emerald }} />
                </div>
                <div>
                  <p className="text-sm font-bold mb-0.5" style={{ color: C.navy }}>{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: C.slateLight }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => { onClose(); onCTA(); }}
            className="w-full py-3 rounded-lg font-semibold text-white text-sm transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
            style={{ background: C.emerald }}
            onMouseEnter={(e) => (e.target.style.background = C.emeraldHover)}
            onMouseLeave={(e) => (e.target.style.background = C.emerald)}
          >
            Book Your Free Call
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── NAVBAR ───
function Navbar({ onCTA }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300" style={{
      background: scrolled ? "rgba(255,255,255,0.97)" : C.white,
      backdropFilter: scrolled ? "blur(8px)" : "none",
      borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
    }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Shield size={24} style={{ color: C.emerald }} />
          <span className="text-lg font-bold" style={{ color: C.navy, fontFamily: "'DM Serif Display', Georgia, serif" }}>Meridian</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[["services","Services"],["pricing","Pricing"],["faq","FAQ"],["contact","Contact"]].map(([id,label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-sm font-medium transition-colors duration-200 hover:opacity-70" style={{ color: C.slate }}>{label}</button>
          ))}
          <button onClick={onCTA} className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg active:scale-[0.97]"
            style={{ background: C.emerald }}
            onMouseEnter={e => e.target.style.background = C.emeraldHover}
            onMouseLeave={e => e.target.style.background = C.emerald}>
            Book Free Call
          </button>
        </div>
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <Menu size={22} style={{ color: C.navy }} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ background: C.white }}>
          {[["services","Services"],["pricing","Pricing"],["faq","FAQ"],["contact","Contact"]].map(([id,label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-left text-sm font-medium py-2" style={{ color: C.slate }}>{label}</button>
          ))}
          <button onClick={() => { setMenuOpen(false); onCTA(); }} className="w-full py-2.5 rounded-lg text-sm font-semibold text-white mt-1" style={{ background: C.emerald }}>Book Free Call</button>
        </div>
      )}
    </nav>
  );
}

// ─── HERO + TRUST BAR (with dynamic background) ───
function Hero({ onCTA, onLearnMore }) {
  return (
    <section className="relative pt-28 pb-20 px-6" style={{ background: C.white }}>
      <HeroBackground />
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: C.emerald }}>
            Sydney's Accountant for Growing Businesses
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: C.navy, fontFamily: "'DM Serif Display', Georgia, serif" }}>
            Numbers you understand.{" "}
            <span style={{ color: C.emerald }}>Deadlines you never chase.</span>
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: C.slateLight }}>
            Meridian Tax & Advisory helps sole traders and small business owners stop guessing, start saving, and finally have an accountant who calls them before a deadline — not after.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={onCTA}
              className="px-8 py-4 rounded-lg text-base font-semibold text-white transition-all duration-200 hover:shadow-xl active:scale-[0.97]"
              style={{ background: C.emerald }}
              onMouseEnter={e => e.target.style.background = C.emeraldHover}
              onMouseLeave={e => e.target.style.background = C.emerald}>
              Book Your Free 15-Minute Tax Clarity Call
            </button>
            <button onClick={onLearnMore}
              className="px-8 py-4 rounded-lg text-base font-semibold transition-all duration-200 hover:shadow-md active:scale-[0.97] border"
              style={{ color: C.navy, borderColor: C.border, background: C.white }}>
              <span className="flex items-center gap-2"><Eye size={18} /> Learn More</span>
            </button>
          </div>
        </div>
        {/* Trust Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, label: "CPA & Registered Tax Agent", value: "Verified" },
            { icon: Clock, label: "Years of Experience", value: "15+" },
            { icon: Users, label: "Clients Served", value: "430+" },
            { icon: TrendingUp, label: "Deductions Found", value: "$2.4M+" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: C.offWhite, border: `1px solid ${C.border}` }}>
              <div className="p-2 rounded-lg" style={{ background: `${C.emerald}15` }}>
                <Icon size={20} style={{ color: C.emerald }} />
              </div>
              <div>
                <p className="text-lg font-bold" style={{ color: C.navy }}>{value}</p>
                <p className="text-xs" style={{ color: C.slateLight }}>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ───
function Services({ onLearnMore }) {
  const services = [
    { icon: Calculator, title: "Tax Returns & Lodgments", desc: "Individual and sole trader returns, done right and on time, every time. No last-minute scrambles, no missed deductions." },
    { icon: BookOpen, title: "Bookkeeping & BAS", desc: "Monthly reconciliation and quarterly BAS lodgment so you're never scrambling at quarter-end. Clean books, zero stress." },
    { icon: BarChart3, title: "Growth Advisory", desc: "Quarterly strategy sessions to structure your business for tax efficiency and sustainable growth. Not just compliance — direction." },
  ];
  return (
    <section id="services" className="py-20 px-6" style={{ background: C.offWhite }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-wide uppercase mb-3 text-center" style={{ color: C.emerald }}>What We Do</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: C.navy, fontFamily: "'DM Serif Display', Georgia, serif" }}>
          Three Services. Complete Clarity.
        </h2>
        <p className="text-center max-w-xl mx-auto mb-12" style={{ color: C.slateLight }}>
          Everything a growing Australian business needs from their accountant — nothing it doesn't.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{ background: C.glass, backdropFilter: "blur(12px)", borderColor: C.border }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${C.emerald}12` }}>
                <Icon size={24} style={{ color: C.emerald }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: C.navy }}>{title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: C.slateLight }}>{desc}</p>
              <button onClick={onLearnMore} className="text-sm font-semibold transition-colors duration-200 flex items-center gap-1" style={{ color: C.emerald }}>
                Learn more <ChevronDown size={14} style={{ transform: "rotate(-90deg)" }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SOCIAL PROOF ───
function SocialProof({ onCTA }) {
  const testimonials = [
    { name: "Priya N.", role: "Freelance Graphic Designer", text: "I was paying $4,200 in tax on guesswork. After Meridian restructured how I invoice, I paid $2,100 — same income, same year.", saved: "$2,100 saved" },
    { name: "Marcus T.", role: "Café Owner", text: "First accountant who called me before a deadline instead of after. BAS panic is gone.", saved: "Zero missed deadlines" },
    { name: "Sana R.", role: "E-commerce Founder", text: "Found $3,800 in deductions my old accountant never mentioned. Paid for two years of fees in one lodgment.", saved: "$3,800 in deductions" },
  ];
  return (
    <section className="py-20 px-6" style={{ background: C.white }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-wide uppercase mb-3 text-center" style={{ color: C.emerald }}>Real Results</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: C.navy, fontFamily: "'DM Serif Display', Georgia, serif" }}>
          What Clients Actually Experience
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map(({ name, role, text, saved }) => (
            <div key={name} className="p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: C.offWhite, borderColor: C.border }}>
              <Quote size={20} style={{ color: C.emerald, marginBottom: 12, opacity: 0.5 }} />
              <p className="text-sm leading-relaxed mb-6" style={{ color: C.slate }}>"{text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold" style={{ color: C.navy }}>{name}</p>
                  <p className="text-xs" style={{ color: C.slateLight }}>{role}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: `${C.emerald}12`, color: C.emerald }}>{saved}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={onCTA}
            className="px-8 py-4 rounded-lg text-base font-semibold text-white transition-all duration-200 hover:shadow-xl active:scale-[0.97]"
            style={{ background: C.emerald }}
            onMouseEnter={e => e.target.style.background = C.emeraldHover}
            onMouseLeave={e => e.target.style.background = C.emerald}>
            Book Your Free 15-Minute Tax Clarity Call
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ───
function Pricing() {
  const tiers = [
    { name: "Solo Starter", price: "$149", period: "/mo", desc: "For sole traders who want their return done right",
      features: ["Annual tax return", "Quarterly check-in call", "Deduction maximisation", "ATO correspondence handling"], popular: false },
    { name: "Growth", price: "$349", period: "/mo", desc: "For small businesses ready to stop guessing",
      features: ["Everything in Solo Starter", "Monthly bookkeeping", "Quarterly BAS lodgment", "Quarterly advisory session", "Xero/MYOB management"], popular: true },
    { name: "Advisory Partner", price: "$699", period: "/mo", desc: "Full-service for businesses scaling up",
      features: ["Everything in Growth", "Ongoing structure advice", "Cash flow forecasting", "Entity structuring review", "Priority response (< 4 hrs)"], popular: false },
  ];
  return (
    <section id="pricing" className="py-20 px-6" style={{ background: C.offWhite }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-wide uppercase mb-3 text-center" style={{ color: C.emerald }}>Investment</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: C.navy, fontFamily: "'DM Serif Display', Georgia, serif" }}>
          Flat Fees. No Hourly Surprises.
        </h2>
        <p className="text-center max-w-xl mx-auto mb-12" style={{ color: C.slateLight }}>
          Every tier includes unlimited email support. No hidden charges, no bill shock.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(({ name, price, period, desc, features, popular }) => (
            <div key={name} className="relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: popular ? C.navy : C.glass,
                backdropFilter: popular ? "none" : "blur(12px)",
                borderColor: popular ? C.emerald : C.border,
                borderWidth: popular ? 2 : 1,
              }}>
              {popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full text-white" style={{ background: C.emerald }}>Most Popular</span>}
              <h3 className="text-lg font-bold mb-1" style={{ color: popular ? C.white : C.navy }}>{name}</h3>
              <p className="text-sm mb-4" style={{ color: popular ? "rgba(255,255,255,0.6)" : C.slateLight }}>{desc}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold" style={{ color: popular ? C.white : C.navy }}>{price}</span>
                <span className="text-sm" style={{ color: popular ? "rgba(255,255,255,0.5)" : C.slateLight }}>{period}</span>
              </div>
              <div className="flex flex-col gap-3">
                {features.map(f => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle2 size={16} style={{ color: C.emerald, marginTop: 2, flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: popular ? "rgba(255,255,255,0.85)" : C.slate }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center p-6 rounded-xl border" style={{ borderColor: C.border, background: C.white }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield size={18} style={{ color: C.emerald }} />
            <span className="text-sm font-bold" style={{ color: C.navy }}>Deduction Guarantee</span>
          </div>
          <p className="text-sm max-w-lg mx-auto" style={{ color: C.slateLight }}>
            If we don't find at least $500 in legitimate deductions you weren't already claiming in your first year, your first month is free.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: "How is this different from just using Xero myself?", a: "Software tracks numbers — it doesn't tell you which deductions apply to your specific situation or catch errors before the ATO does. Meridian bridges the gap between bookkeeping software and strategic tax advice." },
    { q: "Are you a registered tax agent?", a: "Yes, fully registered with the Tax Practitioners Board — required to legally lodge on your behalf. Registration is verifiable on the TPB public register." },
    { q: "What if I'm behind on lodgments?", a: "Common, and fixable. Your first call includes a no-judgment catch-up plan. We deal with overdue lodgments regularly and know exactly how to get you current without drama." },
    { q: "Do you work with my industry?", a: "Meridian works across trades, creative freelancers, hospitality, and e-commerce — the profile of most Australian small business. If your situation is unusual, the free call will confirm fit." },
    { q: "What if I already have a bookkeeper?", a: "Meridian can work alongside your existing bookkeeper, handling tax strategy and lodgment only. We'll coordinate directly so nothing falls through the cracks." },
    { q: "How much does this actually cost?", a: "Three flat-fee tiers starting at $149/month. No hourly billing, no surprise invoices. Check the pricing section above for full details." },
  ];
  return (
    <section id="faq" className="py-20 px-6" style={{ background: C.white }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-wide uppercase mb-3 text-center" style={{ color: C.emerald }}>Common Questions</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: C.navy, fontFamily: "'DM Serif Display', Georgia, serif" }}>
          Still Have Questions?
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="rounded-xl border overflow-hidden transition-all duration-200"
              style={{ borderColor: openIndex === i ? C.emerald : C.border, background: C.offWhite }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="text-sm font-semibold pr-4" style={{ color: C.navy }}>{q}</span>
                {openIndex === i
                  ? <ChevronUp size={18} style={{ color: C.emerald, flexShrink: 0 }} />
                  : <ChevronDown size={18} style={{ color: C.slateLight, flexShrink: 0 }} />}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FINAL CTA BAND ───
function FinalCTA({ onCTA }) {
  return (
    <section id="contact" className="py-20 px-6" style={{ background: C.navy }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.white, fontFamily: "'DM Serif Display', Georgia, serif" }}>
          Ready for an Accountant Who Actually Calls You Back?
        </h2>
        <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
          15 minutes. No obligation. Just clarity on where you stand and what you're missing.
        </p>
        <button onClick={onCTA}
          className="px-8 py-4 rounded-lg text-base font-semibold text-white transition-all duration-200 hover:shadow-xl active:scale-[0.97]"
          style={{ background: C.emerald }}
          onMouseEnter={e => e.target.style.background = C.emeraldHover}
          onMouseLeave={e => e.target.style.background = C.emerald}>
          Book Your Free 15-Minute Tax Clarity Call
        </button>
      </div>
    </section>
  );
}

// ─── FOOTER (new — added this lesson) ───
function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <footer className="py-12 px-6" style={{ background: C.navy, borderTop: `1px solid ${C.navyLight}` }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Shield size={20} style={{ color: C.emerald }} />
              <span className="text-lg font-bold" style={{ color: C.white, fontFamily: "'DM Serif Display', Georgia, serif" }}>Meridian Tax & Advisory</span>
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              Numbers you understand. Deadlines you never chase.
            </p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
              Registered Tax Agent No. 12345678 · CPA Australia
            </p>
          </div>
          <div className="flex items-center gap-6">
            {[["services","Services"],["pricing","Pricing"],["faq","FAQ"],["contact","Contact"]].map(([id,label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-xs font-medium transition-opacity duration-200 hover:opacity-100" style={{ color: "rgba(255,255,255,0.55)" }}>
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail size={14} style={{ color: C.emerald }} />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>hello@meridiantax.com.au</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} style={{ color: C.emerald }} />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>02 8000 0000</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 Meridian Tax & Advisory. Prototype only — not a live business.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ASSEMBLY ───
export default function MeridianPrototype() {
  const [contactOpen, setContactOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const openLearn = () => setLearnOpen(true);

  return (
    <div style={{ fontFamily: "Inter, -apple-system, sans-serif", color: C.slate }}>
      <Navbar onCTA={openContact} />
      <Hero onCTA={openContact} onLearnMore={openLearn} />
      <Services onLearnMore={openLearn} />
      <SocialProof onCTA={openContact} />
      <Pricing />
      <FAQ />
      <FinalCTA onCTA={openContact} />
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <LearnMoreModal open={learnOpen} onClose={() => setLearnOpen(false)} onCTA={openContact} />
      <ScrollToTop />
    </div>
  );
}
