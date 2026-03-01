"use client";
import Link from "next/link";
import Image from "next/image";

const goldGradient =
  "linear-gradient(180deg, #fff3b0 0%, #ffe993 35%, #d4af37 65%, #b8860b 100%)";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6">

      {/* ========================= */}
      {/* NAV */}
      {/* ========================= */}
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
          PRIVACY POLICY
        </h1>

        <p className="text-white/60 mb-12 text-sm">
          Last Updated: March 2026
        </p>

        {/* Intro */}
        <section className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Silent Axis (“we,” “us,” or “our”) respects your privacy and is committed to protecting it through this Privacy Policy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access or use our website, 
            educational content, community features, and subscription-based services (collectively, the “Services”).
          </p>

          <p>
            Silent Axis provides educational and research-based content related to financial markets, including cryptocurrencies, macroeconomics, 
            trading, and investing. We do not provide financial advice, brokerage services, execute trades, or hold custody of user funds.
            By accessing or using our Services, you agree to this Privacy Policy. If you do not agree, please do not use our Services.
          </p>
        </section>

        {/* 1 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p className="text-white/70 leading-relaxed">
            We may collect personal information that can identify you, such as your name, email address, and other contact details. 
            When you create an account or access community features, we may collect account-related information such as usernames and encrypted or hashed passwords. 
            Billing and payment-related information is processed by third-party providers, and Silent Axis does not store full credit or debit card numbers. 
            We may also collect optional user-provided information, including trading experience, preferences, or survey responses, 
            as well as communications such as emails, support requests, chat messages, or community posts.
          </p>
          <p className="text-white/70 leading-relaxed">
            In addition, we collect non-personal information that does not directly identify you. This may include usage data such as pages viewed, 
            interactions with the Services, session duration, and referral URLs, as well as technical data such as IP address, browser type, device type, 
            and operating system. Cookies and similar tracking technologies may also be used as described below.
          </p>
        </section>

        {/* 2 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">2. How We Collect Information</h2>
          <p className="text-white/70 leading-relaxed">
            We collect information directly from you when you create an account, subscribe to our Services, communicate with us, 
            or participate in community activities. Information is also collected automatically through cookies, analytics tools, 
            pixels, and server logs when you access or use the Services. In some cases, we receive information from third parties 
            that help operate the Services, such as analytics providers, hosting services, subscription platforms, and payment processors.
          </p>
        </section>

        {/* 3 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <p className="text-white/70 leading-relaxed">
            We use the information we collect to provide, operate, and maintain the Services, manage subscriptions and user access, 
            and deliver customer support. Your information may be used to communicate important service updates, account-related notices, 
            and operational information. We may also send marketing communications, from which you can opt out at any time.
          </p>
          <p className="text-white/70 leading-relaxed">
            Additionally, information is used to improve our educational content, platform features, and overall user experience, 
            as well as to monitor usage, analytics, and performance. We may use collected data to detect fraud, abuse, or security issues 
            and to comply with applicable legal and regulatory obligations.
          </p>
        </section>

        {/* 4 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">4. Cookies and Tracking Technologies</h2>
          <p className="text-white/70 leading-relaxed">
            We use cookies and similar tracking technologies to remember user preferences, analyze how the Services are used, 
            and improve functionality and performance. You can disable cookies through your browser settings, 
            but doing so may limit certain features or functionality of the Services.
          </p>
        </section>

        {/* 5 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">5. Payments and Third-Party Platforms (Subscord)</h2>
          <p className="text-white/70 leading-relaxed">
            Silent Axis uses Subscord to manage subscriptions, handle customer access, and process payments related to the Services.
          </p>
        </section>

        {/* 6 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">6. Disclosure of Your Information</h2>
          <p className="text-white/70 leading-relaxed">
            We may disclose your information to trusted third-party service providers that assist us with hosting, analytics, email delivery, 
            customer support, and payment processing. Information may also be disclosed in connection with a business transfer such as a merger, 
            acquisition, or sale of assets, or when required to comply with applicable laws, regulations, subpoenas, or court orders. 
            We may disclose information to protect our rights, property, users, or the public, or when you have given explicit consent.
            Silent Axis does not sell your personal information.
          </p>
        </section>
                {/* 7 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">7. Data Security</h2>
          <p className="text-white/70 leading-relaxed">
            We implement reasonable administrative, technical, and physical safeguards 
            designed to protect your personal information. However, no method of transmission 
            over the internet or electronic storage is completely secure. You acknowledge 
            that any transmission of information is done at your own risk.
          </p>
        </section>

        {/* 8 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">8. Data Retention</h2>
          <p className="text-white/70 leading-relaxed">
            We retain personal information only for as long as necessary to fulfill 
            the purposes outlined in this Privacy Policy, unless a longer retention 
            period is required or permitted by law.
          </p>
        </section>

        {/* 9 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">9. Third-Party Links</h2>
          <p className="text-white/70 leading-relaxed">
            The Services may contain links to third-party websites or services. 
            Silent Axis is not responsible for the content, privacy practices, 
            or policies of those third parties.
          </p>
        </section>

        {/* 10 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">10. International Users</h2>
          <p className="text-white/70 leading-relaxed">
            If you access the Services from outside your country of residence, 
            your personal information may be transferred to, stored, and processed 
            in jurisdictions where our service providers operate, including the 
            United States. Data protection laws in those jurisdictions may differ 
            from those in your own. By accessing or using the Services, you consent 
            to such transfer, storage, and processing.
          </p>
        </section>

        {/* 11 */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">11. International Users</h2>
          <p className="text-white/70 leading-relaxed">
            If you access the Service from outside your country of residence, you acknowledge that your information may be transferred to, 
            stored, and processed in jurisdictions where our service providers operate, and you consent to such processing.
          </p>
        </section>

        {/* 12 */}
        <section className="mt-16 mb-24 space-y-6">
          <h2 className="text-2xl font-semibold">12. Changes to This Privacy Policy</h2>
          <p className="text-white/70 leading-relaxed">
            Silent Axis reserves the right to modify this Privacy Policy at any time. 
            Any changes will be posted with an updated “Last Updated” date. 
            Continued use of the Services after such changes constitutes acceptance of the revised Privacy Policy.
          </p>
        </section>

      </div>
    </main>
  );
}