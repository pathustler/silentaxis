"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const goldGradient =
  "linear-gradient(180deg, #ffde59 0%, #ff914d 100%)";

// Hook: returns a ref that adds the "visible" class when element enters viewport
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const [open, setOpen] = useState<number | null>(0);
  const [billing, setBilling] = useState<"weekly" | "monthly" | "6monthly" | "yearly">("weekly");

  const price = billing === "weekly" ? "$19.99" : billing === "monthly" ? "$39.99" : billing === "6monthly" ? "$219.95" : "$399.99";

  // Reveal refs
  const heroRef = useReveal();
  const featuresRef = useReveal();
  const howRef = useReveal();
  const pricingRef = useReveal();
  const faqRef = useReveal();

  // Smooth scroll handler
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }

        /* Base reveal state */
        .reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Stagger children */
        .reveal-stagger > * {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                      transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-stagger.is-visible > *:nth-child(1) { opacity:1; transform:translateY(0); transition-delay: 0.05s; }
        .reveal-stagger.is-visible > *:nth-child(2) { opacity:1; transform:translateY(0); transition-delay: 0.15s; }
        .reveal-stagger.is-visible > *:nth-child(3) { opacity:1; transform:translateY(0); transition-delay: 0.25s; }
        .reveal-stagger.is-visible > *:nth-child(4) { opacity:1; transform:translateY(0); transition-delay: 0.35s; }
        .reveal-stagger.is-visible > *:nth-child(5) { opacity:1; transform:translateY(0); transition-delay: 0.45s; }
        .reveal-stagger.is-visible > *:nth-child(6) { opacity:1; transform:translateY(0); transition-delay: 0.55s; }
      `}</style>

      <main style={{backgroundImage: "url('/images/bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "100% 100vh"
      }} className="bg-black text-white overflow-x-hidden relative">

        {/* ========================= */}
        {/* BACKGROUND LAYERS */}
        {/* ========================= */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div
            className="fixed inset-0 z-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,233,147,0.15), transparent 65%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 40%, black 100%)",
            }}
          />
        </div>

        {/* ========================= */}
        {/* NAV */}
        {/* ========================= */}
        <nav className="w-full z-50 backdrop-none">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
            <Link href="/">
            <Image src="/images/logo2.png" alt="Logo" width={100} height={40} />
            </Link>

            <div className="hidden md:flex gap-10 text-sm tracking-widest uppercase">
              <a href="#features" onClick={e => handleAnchor(e, "#features")} className="cursor-pointer text-gray-400 hover:text-gray-200 transition text-sm">Features</a>
              <a href="#team" onClick={e => handleAnchor(e, "#team")} className="cursor-pointer text-gray-400 hover:text-gray-200 transition text-sm">Team</a>
              <a href="#pricing" onClick={e => handleAnchor(e, "#pricing")} className="cursor-pointer text-gray-400 hover:text-gray-200 transition">Pricing</a>
              <a href="#faq" onClick={e => handleAnchor(e, "#faq")} className="cursor-pointer text-gray-400 hover:text-gray-200 transition">FAQ</a>
            </div>

            <a
              href="#pricing"
              onClick={e => handleAnchor(e, "#pricing")}
              className="px-6 py-2 rounded-full cursor-pointer font-semibold text-black transition duration-200"
              style={{ background: goldGradient }}
            >
              Join Now
            </a>
          </div>
        </nav>

        {/* ========================= */}
        {/* HERO */}
        {/* ========================= */}
        <section className="pt-48 pb-24 flex flex-col items-center text-center px-6 pt-32">
          <div ref={heroRef} className="reveal reveal-stagger">
          

            <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
              Master Your{" "}
              <span
                style={{
                  background: goldGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Silent Axis
              </span>
            </h1>

            <p className="mt-8 w-full text-white/70 text-center text-lg">
              Precision. Discipline. Strategy. Execute without noise.
            </p>

            <div className="flex gap-6 mt-10 justify-center">
              <a
                href="#pricing"
                onClick={e => handleAnchor(e, "#pricing")}
                className="px-8 py-4 rounded-full font-semibold text-black transition"
                style={{ background: goldGradient  }}
              >
                Join Now
              </a>

              <a
                href="#features"
                onClick={e => handleAnchor(e, "#features")}
                className="border px-8 py-4 rounded-full hover:bg-amber-200/10 transition"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "9999px",
                  borderColor: "#d4af37",
                  color: "#d4af37",
                }}
              >
                Learn More
              </a>
            </div>
            {/* ========================= */}
{/* TRADE ON */}
{/* ========================= */}
<section className="py-12 mt-12 px-6 text-center relative">
  <div className="max-w-6xl mx-auto">

    <p className="text-white/40 tracking-[0.3em] text-xs mb-4 uppercase">
      Trade On
    </p>

    <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">

      {/* BYBIT */}
      <a
        href="https://www.bybit.com/invite?ref=JWB8LO"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:opacity-100 hover:scale-105"
      >
        <img
          src="/images/refer/bybit.png"
          alt="ByBit"
          className="h-4 md:h-4 grayscale hover:grayscale-0 transition duration-300"
        />
      </a>

      {/* MEXC */}
      <a
        href="https://promote.mexc.com/b/drymartini"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:opacity-100 hover:scale-105"
      >
        <img
          src="/images/refer/mexc.png"
          alt="MEXC"
          className="h-4 md:h-4 grayscale hover:grayscale-0 transition duration-300"
        />
      </a>

      {/* BLOFIN */}
      <a
        href="https://partner.blofin.com/d/DryMartini"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:opacity-100 hover:scale-105"
      >
        <img
          src="/images/refer/blofin.png"
          alt="BloFin"
          className="h-4 md:h-4 grayscale hover:grayscale-0 transition duration-300"
        />
      </a>

      {/* AVANTIS */}
      <a
        href="https://www.avantisfi.com/referral?code=drymartini"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:opacity-100 hover:scale-105"
      >
        <img
          src="/images/refer/avantis.png"
          alt="Avantis"
          className="h-6 md:h-8 grayscale hover:grayscale-0 transition duration-300"
        />
      </a>

    </div>
  </div>
</section>
          </div>
        </section>

        {/* ========================= */}
        {/* FEATURES */}
        {/* ========================= */}
        <section id="features" className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div ref={featuresRef} className="reveal">
            <h2 className="text-4xl font-bold mb-6">
              Operate With An{" "}
              <span
                style={{
                  background: goldGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Edge
              </span>
            </h2>
            <p className="text-white/70 text-lg">
              Get daily updates on global trends and market structure for crypto, stocks, metals, and indices.
Explore structured strategies and educational resources to strengthen your trading decisions.
            </p>
          </div>

          <div className="space-y-6 reveal reveal-stagger" ref={useReveal()}>
            {[
              "Macro context & market structure",
              "Trading & investing frameworks",
              "Portfolio management tools",
              "Education & regular analysis",
              "Daily trading Set-Ups",
              "Private Premium Community"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full" style={{ background: goldGradient }} />
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================= */}
        {/* HOW IT WORKS */}
        {/* ========================= */}
        <section className="py-24 px-6 relative text-center">
          <div className="max-w-6xl mx-auto">

            <div ref={howRef} className="reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-white/60 mb-20 text-lg">
               Build clarity, structure and confidence in your trading. From market context to execution, step by step. Learn the process behind consistent trading.
              </p>
            </div>

            <div className="relative grid md:grid-cols-3 gap-16 items-start reveal reveal-stagger" ref={useReveal()}>

              {/* STEP 1 */}
              <div className="space-y-6">
                <div
                  className="mx-auto w-16 h-16 rounded-full  flex items-center justify-center text-xl font-semibold"
                  style={{
                    backgroundColor: "rgba(253,236,157,0.1)",
                    color:"rgb(253,236,157)",

                  }}
                >
                  1
                </div>
                <h3 className="text-xl font-semibold">
                  Join the Community
                </h3>
                <p className="text-white/50 leading-relaxed">
                 Get access to the Silent Axis private Discord, where traders and analysts share macro views, market structure, and high-quality market discussions.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="space-y-6">
                <div
                  className="mx-auto w-16 h-16 rounded-full  flex items-center justify-center text-xl font-semibold"
                  style={{
                    backgroundColor: "rgba(253,236,157,0.1)",
                    color:"rgb(253,236,157)",

                  }}
                >
                  2
                </div>
                <h3 className="text-xl font-semibold">
                  Study the Process
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Break down our analyses, align them with your edge, and sharpen your decision-making. Learn how to read context, manage risk, and stay consistent.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="space-y-6">
                <div
                  className="mx-auto w-16 h-16 rounded-full  flex items-center justify-center text-xl font-semibold"
                  style={{
                    backgroundColor: "rgba(253,236,157,0.1)",
                    color:"rgb(253,236,157)",

                  }}
                >
                  3
                </div>
                <h3 className="text-xl font-semibold">
                  Execute &amp; Profit
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Put your skills into action with discipline and clarity. Trade smarter, grow your capital, and compound results over time.
                </p>
              </div>

            </div>
          </div>
        </section>

   {/* ========================= */}
{/* TEAM SECTION */}
{/* ========================= */}
<section id="team" className="relative py-40 px-6 overflow-hidden">

  {/* Background */}
  <div
    className="absolute inset-0 -z-10 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/mountain-bg.jpg')",
    }}
  />
  <div className="absolute inset-0 -z-10 bg-black/85" />

  {/* Header */}
  <div className="text-center max-w-4xl mx-auto mb-20">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide text-white">
      MEET THE TEAM
    </h2>

    <p className="text-white/70 text-lg leading-relaxed">
      We unite traders and analysts to deliver clear market context,
      actionable frameworks and education. Meet the experts shaping
      our research and daily analysis. Our team brings clarity and
      structure to every market.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 cursor-pointer">

    {[
      {
        img: "/images/team/dry.png",
        name: "Dry Martini",
        title: "Founder & Analyst",
        handle: "@drymartini777",
        x:"https://x.com/drymartini777",
        bio: "Italian swing trader with 4+ years of real market experience. He focuses on mindset, risk management and scenario-based trading. Backed by real-life businesses, he trades with patience, flexibility and a macro-driven approach.",
      },
      {
        img: "/images/team/joe.png",
        name: "Mr. Joe",
        title: "Founder & Analyst",
        handle: "@MrJoe880",
        x:"https://x.com/MrJoe880",
        bio: "A trader forged by discipline and experience, with a background in competitive sports. Focused on process over ego, he trades indices, gold and BTC through scalping, swing and spot strategies. His edge comes from rigor, risk control and learning from mistakes, not shortcuts.",
      },
      {
        img: "/images/team/kazy.png",
        name: "Kazy",
        title: "Analyst and Community Manager",
        handle: "@kazymun",
        x:"https://x.com/kazymun",
        bio: "A disciplined trader with 2.5 years of active experience and a longer background in crypto. Trades majors only — BTC, ETH, and SOL — with a focus on liquidity, structure, and clean execution. Uses liquidation heatmaps to identify dense liquidity zones and potential reversals, emphasizing risk management and consistency.",
      },
    ].map((member, i) => (
      <div
        key={i}
        className="group bg-black/70  backdrop-blur-sm rounded-2xl p-10 border-2 transition-all duration-500 hover:-translate-y-2"
        style={{
          borderColor: "#ffe99340",
        }}
      >

        {/* Gold Border Glow on Hover */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500"
          style={{
            boxShadow: "0 0 40px rgba(255,233,147,0.25)",
          }}
        />

        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div
            className="w-44 h-44 rounded-full p-[3px]"
            style={{ background: goldGradient }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-black">

              <Image
                src={member.img}
                alt={member.name}
                width={176}
                height={176}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Name + X */}
        <div className="flex items-center gap-3 justify-start mb-2">
          <h3 className="text-xl font-semibold text-white">
            {member.name}
          </h3>
          <Link href={member.x} target="_blank" >
          <Image
            src="/images/refer/x.png"
            alt="X"
            width={20}
            height={20}
            className="opacity-70 hover:opacity-100 transition"
          />
          </Link>
        </div>
        <p className="text-md text-amber-300/80 font-semibold mb-4 ">
          {member.title}
        </p>

        {/* Bio */}
        <p className="text-white/70 text-sm leading-relaxed">
          {member.bio}
        </p>

      </div>
    ))}
  </div>
</section>

{/* ========================= */}
{/* PRICING */}
{/* ========================= */}
<section id="pricing" className="relative py-32 px-6 overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 -z-10 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/mountain-bg.jpg')",
    }}
  />
  <div className="absolute inset-0 -z-10 bg-black/85" />

  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold tracking-widest">
      JOIN SILENT AXIS
    </h2>
  </div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

    {/* FREE TELEGRAM CARD */}
    <div className="rounded-2xl p-[2px]" style={{ background: goldGradient }}>
      <div className="bg-black rounded-2xl p-10 h-full flex flex-col justify-between">

        <div>
          <h3 className="text-xl font-semibold mb-4">Free Telegram</h3>
          <p className="text-white/60 text-sm mb-10">
            Get daily macro updates, weekly education, and join live sessions on Discord at no cost.
          </p>

          <h4 className="text-4xl font-bold mb-10">$0.00</h4>

          <ul className="text-white/70 space-y-3 mb-12 text-left">
            <li>• Daily macro market updates</li>
            <li>• Weekly educational content</li>
            <li>• Weekly live Discord sessions</li>
          </ul>
        </div>

        <Link target="__blank" href="https://t.me/silentaxis0">
          <button
            className="w-full py-4 rounded-full cursor-pointer font-semibold text-black transition"
            style={{ background: goldGradient }}
          >
            Join Telegram
          </button>
        </Link>

      </div>
    </div>


    {/* PREMIUM CARD */}
    <div className="rounded-2xl p-[2px]" style={{ background: goldGradient }}>
      <div className="bg-black rounded-2xl p-10 h-full flex flex-col justify-between">

        <div>
          <h3 className="text-xl font-semibold mb-4">Premium Discord</h3>
          <p className="text-white/60 text-sm mb-8">
            Unlock full analyst access, daily set-ups, portfolio tools, and in-depth market analysis.
          </p>

          {/* SEGMENTED TOGGLE */}
          <div className="flex mb-10 border rounded-full overflow-hidden w-fit mx-auto "
               style={{ borderColor: "#ff914d" }}>
            
            {[
              { key: "weekly", label: "1 Week" },
              { key: "monthly", label: "1 Month" },
              { key: "6monthly", label: "6 Months" },
              { key: "yearly", label: "1 Year" },
            ].map((plan) => (
              <button
                key={plan.key}
                onClick={() => setBilling(plan.key as any)}
                className="px-6 py-2 transition font-medium cursor-pointer"
                style={
                  billing === plan.key
                    ? { background: goldGradient, color: "black" }
                    : { color: "white" }
                }
              >
                {plan.label}
              </button>
            ))}

          </div>

          {/* PRICE */}
          <h4 className="text-4xl font-bold mb-4">
            {price}
            <span className="text-lg text-white/60 ml-2">
              /{" "}
              {billing === "weekly"
                ? "week"
                : billing === "monthly"
                ? "month"
                : billing === "6monthly"
                ? "6 months"
                : "year"}
            </span>
          </h4>

          <ul className="text-white/70 mb-6 text-left">
            <li>• Direct analysts access</li>
            <li>• Premium Live Sessions</li>
            <li>• Daily trade set-ups</li>
            <li>• Portfolio allocation tools</li>
            <li>• Educational contents</li>
            <li>• Crypto, stocks, metals, indices analysis</li>
            <li>• Hyperliquid Vault access</li>
          </ul>
        </div>

        <Link
          target="__blank"
          href={
            billing === "weekly"
              ? "https://subscord.com/store/1474291338802626570/checkout/_I07_IeE-MTMxMw"
              : billing === "yearly"
              ? "https://subscord.com/store/1474291338802626570/checkout/8f9B5nK--MTMxMg"
              : billing === "6monthly"
              ? "https://subscord.com/store/1474291338802626570/checkout/CObwDgo_-MTMxMQ"
              : "https://subscord.com/store/1474291338802626570/checkout/Z7teUQOl-MTI5Mg"
          }
        >
          <button
            className="w-full py-4 rounded-full cursor-pointer font-semibold text-black transition"
            style={{ background: goldGradient }}
          >
            Get Premium
          </button>
        </Link>

      </div>
    </div>

  </div>
</section>

        {/* ========================= */}
        {/* FAQ */}
        {/* ========================= */}
        <section id="faq" className="py-32 px-6 max-w-4xl mx-auto">
          <div ref={faqRef} className="reveal">
            <h2 className="text-4xl font-bold text-center mb-4">
              FAQ
            </h2>
            <p className="text-md opacity-30 text-center mb-16">
              Common questions about Silent Axis
            </p>

            {[
              {
                q: "Who can join Telegram or Discord?",
                a: "Anyone interested in market structure, macro context, or trading frameworks can join our free Telegram. Premium Discord is for those seeking advanced tools and direct analyst access.",
              },
              {
                q: "What do I get with free Telegram?",
                a: "Receive daily macro updates, weekly educational content, and invites to weekly live sessions on Discord—all free.",
              },
              {
                q: "How do I join Premium Discord?",
                a: "Choose a payment plan and follow the steps to subscribe. You’ll receive an invite link for instant access to premium features.",
              },
               {
                q: "What are the payment options?",
                a: "Crypto only. Select from monthly, six-month, or annual plans. All options include full access to our Discord and exclusive resources.",
              },
               {
                q: "Can I cancel anytime?",
                a: "Yes, there are no long-term commitments. You can cancel your subscription at any time.",
              },
               {
                q: "Can I get support if needed?",
                a: "Yes. For questions about joining, payments, or using our platforms, contact our support team for help opening a ticket on our Discord.",
              }
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl p-6 mb-6 cursor-pointer bg-white/5 transition duration-300"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex justify-between">
                  <h3>{item.q}</h3>
                  <span className="font-black opacity-60">{open === i ? "−" : "+"}</span>
                </div>
                {open === i && (
                  <p className="mt-4 text-white/70">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========================= */}
{/* FOOTER */}
{/* ========================= */}
<footer className="bg-black border-t border-[#ffe993]/30 mt-32">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-3 gap-12">

      {/* Left */}
      <div>
        <h3
          className="text-3xl font-bold tracking-widest mb-2 grayscale opacity-40"
          style={{
            background:
              "linear-gradient(180deg, #fff3b0 0%, #ffe993 35%, #d4af37 65%, #b8860b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SILENT AXIS
        </h3>

        <p className="text-white text-xs tracking-wider mb-6  opacity-30">
          — CLARITY. DISCIPLINE. CAPITAL —
        </p>

        <p className="text-white/70 mb-6">
          The All-in-One Premium Crypto Community.
        </p>

        {/* Social Icons */}
        <div className=" text-white/70 flex items-center gap-3">
          <a
            href="https://x.com/silentaxis0"

            target="_blank"
            className="hover:text-white transition"
          >
            <Image src="/images/refer/x.png" alt="X" width={40} height={40} />
          </a>

          <a
            href="https://t.me/silentaxis0"
            target="__blank"
            className="hover:text-white transition"
          >
            <Image src="/images/refer/telegram.png" alt="Telegram" width={30} height={30} />
          </a>
        </div>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-white font-semibold mb-6">Company</h4>
        <ul className="space-y-3 text-white/60">
          <li><a href="#features" className="hover:text-white transition">About</a></li>
          <li><a href="#team" className="hover:text-white transition">Team</a></li>
          <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
        </ul>
      </div>

      {/* Info */}
      <div>
        <h4 className="text-white font-semibold mb-6">Info</h4>
        <ul className="space-y-3 text-white/60">
          <li><a href="/terms" className="hover:text-white transition">Terms & Service</a></li>
          <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
          <li><a href="/refund" className="hover:text-white transition">Refund Policy</a></li>
        </ul>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10 mt-8 pt-8 text-white/50 text-sm">
      Silent Axis. All right reserved. © 2026
    </div>

  </div>
</footer>
      </main>
    </>
  );
}