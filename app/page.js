import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";

const why_cards = [
  ["Solving the Capital Valley of Death","Modular units in the few-hundred-million range reduce front-loaded capital and open more financing pathways."],
  ["Solving the Regulatory Gauntlet","Proven materials and technologies with minimal R&D streamline the licensing basis."],
  ["From Simulation to Steel","No exotic materials: we integrate well-characterized components into a manufacturable system."],
  ["Rebuilding the Supply Chain","First-principles design avoids specialized nuclear-only parts wherever possible."],
  ["Deployment Timelines","Off-the-shelf components dramatically shorten lead times from order to operation."]
];

const principles = [
  "Integral primary system with components embedded in the vessel",
  "Operation at set-point by natural circulation (passive operation / passive safety)",
  "Standard PWR fuel for supply-chain strength",
  "Boiling in the reactor chimney—no external steam generators or separate pressurizer",
  "Small booster pump only for set-point approach and load-follow",
  "Reactor vessel submerged in an underground pool for inherent grace time",
  "Quick-opening pressure-boundary concept (e.g., clamp-ring) to minimize outage time"
];

export default function Page() {
  return (
    <div>

    {/* HERO: simple background image, no transforms or cropping */}
    <section className="relative isolate overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/future_kadmos_look.png"
          alt="Kadmos vision"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Subtle wash for readability; doesn't block taps */}
        <div className="absolute inset-0 bg-white/80 pointer-events-none" />
      </div>

      <div className="container-xl py-20 sm:py-28 text-center">
        <Image src="/logo.png" alt="Kadmos Energy" width={180} height={180} priority className="mx-auto" />
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-slate-900 leading-tight">
          Built on Proven Engineering, Designed for Passive Safety &amp; Scalable for the Future
        </h1>
        <p className="mt-4 text-slate-700 text-lg max-w-3xl mx-auto">
          Kadmos Energy designs and engineers scalable nuclear reactors that rely on passive safety,
          natural circulation, and proven components. Our “Home Depot” approach minimizes bespoke R&amp;D
          and licensing risk by integrating off-the-shelf technologies into an integral, simplified plant—
          optimized for high availability and rapid deployment.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="px-5 py-3 rounded-xl bg-kadmos-blue text-white hover:opacity-90">Talk to engineering</Link>
          <Link href="/technology" className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-white">How it works</Link>
        </div>
      </div>
    </section>

      {/* WHY KADMOS — wider trilemma image on the left, no cropping or frame */}
      <Section eyebrow="Why Kadmos" title="Pragmatic answers to nuclear's hardest bottlenecks">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Image column: natural aspect, fills the column width */}
          <div className="lg:col-span-7">
            <Image
              src="/nuclear_trilema.png"
              alt="Global demand, reliability gap, and the net-zero trajectory"
              width={2200}           // large enough to render crisply
              height={1240}          // any numbers that roughly match the image ratio are fine
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto rounded-2xl shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Cards column */}
          <div className="lg:col-span-5 grid md:grid-cols-2 gap-6">
            {why_cards.map(([t, b]) => (
              <div key={t} className="card p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{t}</h3>
                <p className="text-slate-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* KADMOS DESIGN — bullets left, factory visual right */}
      <Section eyebrow="KADMOS Design" title="KADMOS Design: engineered for high availability">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <ul className="lg:col-span-8 grid md:grid-cols-2 gap-3">
            {principles.map((x, i) => (
              <li key={i} className="p-3 bg-white rounded-xl border border-slate-200">{x}</li>
            ))}
          </ul>
          <div className="relative lg:col-span-4 rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[3/4]">
            <Image
              src="/kadmos_factory.png"
              alt="Factory modules and packaged systems for rapid deployment"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="container-xl my-20">
        <div className="card p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Partner with a build-first reactor team</h3>
            <p className="text-slate-700 mt-1">
              Send us your site requirements. We’ll map a path from permitting to power in months, not decades.
            </p>
          </div>
          <Link href="/contact" className="px-6 py-3 rounded-xl bg-kadmos-blue text-white hover:opacity-90">
            Start a scope call
          </Link>
        </div>
      </section>
    </div>
  );
}
