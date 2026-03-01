"use client";
import Link from "next/link";
import Image from "next/image";

const goldGradient =
  "linear-gradient(180deg, #ffde59 0%, #ff914d 100%)";

export default function RefundPage() {
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
          REFUND AND CANCELLATION POLICY
        </h1>

        <p className="text-white/60 mb-12 text-sm">
          Last Updated: March 2026
        </p>

        {/* Introduction */}
        <section className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Silent Axis uses Subscord to manage subscriptions, process payments,
            and provide access to its services. By subscribing, you acknowledge
            and agree that your subscription is governed both by this policy and
            by Subscord’s own Terms of Service and Privacy Policy.
          </p>
        </section>

        {/* Refunds */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">Refunds</h2>

          <p className="text-white/70 leading-relaxed">
            All subscription sales are final. By subscribing to Silent Axis,
            you understand and agree that no refunds will be issued for any
            subscription payment, including monthly or annual plans.
          </p>

          <p className="text-white/70 leading-relaxed">
            Once access to the Services is granted, payments are non-refundable.
            Any refund requests must comply with Subscord’s policies, which
            generally do not permit refunds.
          </p>

          <p className="text-white/70 leading-relaxed">
            For questions related to billing or payments, you may contact
            Silent Axis by opening a ticket on Discord, or contact Subscord’s
            support team through their official channels.
          </p>
        </section>

        {/* Subscription Cancellation */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">Subscription Cancellation</h2>

          <p className="text-white/70 leading-relaxed">
            You may cancel your subscription at any time through your Subscord account.
            Upon cancellation, your subscription will remain active until the end
            of the current billing period.
          </p>

          <p className="text-white/70 leading-relaxed">
            After that period ends, your subscription will not automatically renew,
            and no further charges will be applied.
          </p>
        </section>

        {/* Billing and Renewal */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">Billing and Automatic Renewal</h2>

          <p className="text-white/70 leading-relaxed">
            Subscriptions are billed automatically according to the selected plan.
            Monthly subscriptions are charged at the beginning of each billing cycle,
            while annual subscriptions are charged in full on the day of purchase and
            automatically renewed each year unless canceled before the renewal date.
          </p>

          <p className="text-white/70 leading-relaxed">
            Any upgrades, downgrades, or cancellations must be managed directly
            through your Subscord account.
          </p>
        </section>

        {/* Final Notes */}
        <section className="mt-16 mb-24 space-y-6">
          <h2 className="text-2xl font-semibold">Final Notes</h2>

          <p className="text-white/70 leading-relaxed">
            By subscribing to Silent Axis, you agree to Subscord’s payment
            processing rules and policies. This Refund and Cancellation Policy
            applies in addition to Subscord’s own refund and cancellation terms.
          </p>

          <p className="text-white/70 leading-relaxed">
            All sales are final and consistent with Subscord’s platform guidelines.
          </p>
        </section>

      </div>
    </main>
  );
}