"use client";
import Link from "next/link";
import Image from "next/image";

const goldGradient =
 "linear-gradient(180deg, #ffde59 0%, #ff914d 100%)";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6">

      {/* NAV */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto flex items-center px-6 py-5">
          <Link href="/">
            <Image src="/images/logo2.png" alt="Logo" width={100} height={40} />
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-24">

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{
            background: goldGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          TERMS OF SERVICE
        </h1>

        <p className="text-white/60 mb-12 text-sm">
          Last Updated: March 2026
        </p>

        {/* Intro */}
        <section className="space-y-6 text-white/80 leading-relaxed">
          <p>
            These Terms of Service (“Terms”) govern your access to and use of the website,
            educational content, community features, live sessions, and subscription-based
            services (collectively, the “Service”) provided by Silent Axis (“we,” “us,” or “our”).
            By accessing or using the Service, you agree to be bound by these Terms.
            If you do not agree to these Terms, you must not access or use the Service.
          </p>
        </section>

        {/* 1 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">1. Accounts and Membership</h2>
          <p className="text-white/70 leading-relaxed">
            You must be at least 18 years old to access or use the Service.
            By creating an account or joining the community, you confirm that you meet this requirement.
          </p>
          <p className="text-white/70 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activities conducted under your account. You agree to provide accurate,
            current, and complete information and to keep it updated.
          </p>
        </section>

        {/* 2 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">2. Use of the Service</h2>
          <p className="text-white/70 leading-relaxed">
            Silent Axis provides educational and research-based content related to financial markets,
            including but not limited to cryptocurrencies, macroeconomics, trading, investing,
            stocks, indices, and commodities. The Service is provided for informational and
            educational purposes only and does not constitute financial, investment, legal,
            or tax advice.
          </p>
          <p className="text-white/70 leading-relaxed">
            Silent Axis does not provide signals, copy trading services, personalized investment advice,
            trade execution, brokerage services, or custody of funds. Users are solely responsible
            for their own trading and investment decisions.
          </p>
          <p className="text-white/70 leading-relaxed">
            You agree to use the Service lawfully and respectfully. You must not share, resell,
            or redistribute content without permission, post illegal or harmful material,
            attempt to bypass security measures, introduce malware, or provide personalized
            financial advice to other users.
          </p>
        </section>

        {/* 3 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">3. Subscriptions and Payments (via Subscord)</h2>
          <p className="text-white/70 leading-relaxed">
            Silent Axis uses Subscord to manage subscriptions, user access, and payment processing.
            All purchases and subscriptions are processed by Subscord and are subject to
            Subscord’s own Terms of Service and Privacy Policy.
          </p>
          <p className="text-white/70 leading-relaxed">
            Silent Axis does not store full payment card details and does not control
            payment processing systems operated by Subscord.
          </p>
        </section>

        {/* 4 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
          <p className="text-white/70 leading-relaxed">
            All content, including text, graphics, videos, educational materials,
            branding, and trademarks, is owned by or licensed to Silent Axis.
            You are granted a limited, non-exclusive, non-transferable license
            to access and use the content solely for personal and educational purposes.
          </p>
          <p className="text-white/70 leading-relaxed">
            Any content you post within the community remains your property.
            However, by posting content, you grant Silent Axis a non-exclusive,
            worldwide, royalty-free license to use, display, and distribute
            such content in connection with the operation of the Service.
          </p>
        </section>

        {/* 5 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">5. Risk Disclosure and No Guarantees</h2>
          <p className="text-white/70 leading-relaxed">
            Trading and investing in financial markets involve substantial risk.
            You acknowledge that you may lose some or all of your invested capital.
            Silent Axis makes no guarantees regarding performance, profitability, or outcomes.
          </p>
          <p className="text-white/70 leading-relaxed">
            All examples, strategies, opinions, and discussions shared through the Service
            are for educational purposes only and should not be interpreted as
            recommendations or guarantees.
          </p>
        </section>

        {/* 6 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">6. Disclaimers</h2>
          <p className="text-white/70 leading-relaxed">
            The Service is provided on an “AS IS” and “AS AVAILABLE” basis.
            Silent Axis disclaims all warranties, whether express or implied,
            including but not limited to implied warranties of merchantability,
            fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        {/* 7 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
          <p className="text-white/70 leading-relaxed">
            To the fullest extent permitted by law, Silent Axis shall not be liable
            for any indirect, incidental, special, consequential, or financial damages
            arising out of or related to your use of the Service, including losses
            resulting from trading or investment decisions.
          </p>
        </section>

        {/* 8 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">8. Indemnification</h2>
          <p className="text-white/70 leading-relaxed">
            You agree to defend, indemnify, and hold harmless Silent Axis,
            its founders, team members, affiliates, and partners from and against
            any claims, damages, losses, or expenses arising from your use
            of the Service, violation of these Terms, or misuse of content.
          </p>
        </section>

        {/* 9 */}
        <section className="mt-16 mb-24 space-y-6">
          <h2 className="text-2xl font-semibold">9. Termination</h2>
          <p className="text-white/70 leading-relaxed">
            Silent Axis may suspend or terminate your access to the Service
            at any time for violations of these Terms or misuse of the platform.
            Provisions related to intellectual property, disclaimers,
            limitation of liability, and indemnification shall survive termination.
          </p>
        </section>

      </div>
    </main>
  );
}