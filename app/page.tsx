"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const goldGradient =
  "linear-gradient(180deg, #f8f3aa 0%, #ffe993 35%, #d4af37 65%, #b8860b 100%)";

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
  const [billing, setBilling] = useState<"monthly" | "6monthly" | "yearly">("monthly");

  const price = billing === "monthly" ? "$39.99" : billing === "6monthly" ? "$219.95" : "$399.99";

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
            <Image src="/images/logo2.png" alt="Logo" width={100} height={40} />

            <div className="hidden md:flex gap-10 text-sm tracking-widest uppercase">
              <a href="#features" onClick={e => handleAnchor(e, "#features")} className="cursor-pointer text-gray-400 hover:text-gray-200 transition text-sm">Features</a>
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
        <section className="py-48 flex flex-col items-center text-center px-6 pt-32">
          <div ref={heroRef} className="reveal reveal-stagger">
            <div
              className="inline-block border hover:bg-amber-200/10 cursor-pointer px-8 py-2 rounded-full text-sm mb-8"
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "9999px",
                borderColor: "#d4af37",
                color: "#d4af37",
              }}
            >
              First Week FREE
            </div>

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
              Structured execution. No hype. Just results.
            </p>
          </div>

          <div className="space-y-6 reveal reveal-stagger" ref={useReveal()}>
            {[
              "Real-Time Signals",
              "Daily Strategic Analysis",
              "Risk Framework Guidance",
              "Private Community",
              "Verified Performance"
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
        <section className="py-32 px-6 relative text-center">
          <div className="max-w-6xl mx-auto">

            <div ref={howRef} className="reveal">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-white/60 mb-20 text-lg">
                Start trading in minutes
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
                  Subscribe and get instant access to our private Telegram group
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
                  Receive Calls
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Get real-time trade alerts with entries, targets, and stop losses
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
                  Follow the calls on your preferred exchange and grow your portfolio
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================= */}
        {/* PRICING */}
        {/* ========================= */}
        <section id="pricing" className="py-32 px-6 text-center">
          <div ref={pricingRef} className="reveal">
            <h2 className="text-4xl font-bold mb-12">
              Join Silent Axis
            </h2>

            <div className="max-w-xl mx-auto border border-white/10 rounded-3xl p-10 bg-white/5 backdrop-blur">

              <div className="flex justify-center mb-10  rounded-full p-1">
                <button
                  onClick={() => setBilling("monthly")}
                  className="px-6 py-2 rounded-full  cursor-pointer transition"
                  style={
                    billing === "monthly"
                      ? { background: goldGradient, color: "black" }
                      : { color: "rgba(255,255,255,0.6)" }
                  }
                >
                  1 Month
                </button>

                <button
                  onClick={() => setBilling("6monthly")}
                  className="px-6 py-2 rounded-full cursor-pointer transition"
                  style={
                    billing === "6monthly"
                      ? { background: goldGradient, color: "black" }
                      : { color: "rgba(255,255,255,0.6)" }
                  }
                >
                  6 Months
                </button>
                <button
                  onClick={() => setBilling("yearly")}
                  className="px-6 py-2 rounded-full cursor-pointer transition"
                  style={
                    billing === "yearly"
                      ? { background: goldGradient, color: "black" }
                      : { color: "rgba(255,255,255,0.6)" }
                  }
                >
                  1 Year
                </button>
              </div>

              <h3 className="text-5xl font-bold mb-6">
                {price}
                <span className="text-lg text-white/60">
                  {" "}
                  / {billing === "monthly" ? "month" : billing === "6monthly" ? "6 months" : "year"}
                </span>
              </h3>

              <ul className="text-left space-y-4 mb-10 text-white/70">
                <li>✔ Full Community Access</li>
                <li>✔ Real-Time Execution Alerts</li>
                <li>✔ Daily Market Breakdown</li>
                <li>✔ Risk Strategy Framework</li>
              </ul>

              <button
                className="w-full py-4 rounded-full font-semibold text-black transition cursor-pointer"
                style={{ background: goldGradient }}
              >
                Get Started
              </button>
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
                q: "How does it work?",
                a: "You receive structured execution guidance in real-time.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. Full flexibility.",
              },
              {
                q: "Is it beginner friendly?",
                a: "Structured. But discipline required.",
              },
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

        <footer className="border-t border-white/10 py-16 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Silent Axis
        </footer>
      </main>
    </>
  );
}