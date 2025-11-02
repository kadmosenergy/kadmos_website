import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import PdfLightbox from "@/components/PdfLightbox";

export const metadata = {
  title: "Case Studies — Kadmos Energy",
  description: "Examples of the engineering depth behind the Kadmos approach."
};

// --- PDFs in /public ---
const prelim = [
  { t: "SMR Cost Basis", file: "/smr_cost_basis.pdf" },
  { t: "Reactor Pressure Vessel (RPV) Options", file: "/pressure_vessel.pdf" },
  { t: "Steam Generators Options & Tradeoffs", file: "/steam_generators.pdf" },
  { t: "Primary Coolant Pumps — Architecture Review", file: "/pump.pdf" }
];

const engineering = [
  { t: "Reactivity-Insertion-Accident (RIA) Assessment", file: "/RIA_report.pdf" },
  { t: "Decay-Heat Evacuation Pool Sizing", file: "/decay_heat_evac_pool.pdf" },
  { t: "Clamp-Ring / Quick-Opening Closure — Code Basis", file: "/clamping_report.pdf" }
];

// Optional “studies” cards you already had
const cards = [
  ["Fast access & maintenance", "Clamp-ring/breech-lock closures with interlocks and reusable seals."],
  ["Transient resilience", "6-group kinetics with temperature feedback under natural circulation."],
  ["Decay-heat pool sizing", "Conservative pool-volume sizing to meet temperature limits."]
];

export default function Page() {
  return (
    <div>
      <div className="container-xl py-10 md:py-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Case Studies</h1>
        <p className="text-slate-700 mt-3 max-w-3xl">
          From closures to transients and passive heat removal, our design choices are validated by first-principles analysis.
        </p>

        {/* Header visual (kept) */}
        <div className="relative mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9]">
          <Image
            src="/city_graphics.jpg"
            alt="Global demand, reliability gap, and the net-zero trajectory"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* --- Preliminary analyses documents --- */}
      <Section eyebrow="Preliminary Analyses" title="Preliminary analyses documents">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prelim.map((d) => (
            <div key={d.t} className="card p-5 flex flex-col">
              <h3 className="font-semibold text-slate-900 mb-2">{d.t}</h3>
              <p className="text-slate-700 text-sm flex-1">
                PDF • click to preview or open in a new tab.
              </p>
              <div className="mt-4">
                <PdfLightbox href={d.file} label={d.t} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- KADMOS Engineering Documents --- */}
      <Section eyebrow="Engineering" title="KADMOS Engineering Documents">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineering.map((d) => (
            <div key={d.t} className="card p-5 flex flex-col">
              <h3 className="font-semibold text-slate-900 mb-2">{d.t}</h3>
              <p className="text-slate-700 text-sm flex-1">
                PDF • click to preview or open in a new tab.
              </p>
              <div className="mt-4">
                <PdfLightbox href={d.file} label={d.t} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- Studies (keep your existing three cards) --- */}
      <Section eyebrow="Studies" title="Studies">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(([t, b]) => (
            <div key={t} className="card p-6 flex flex-col">
              <h3 className="font-semibold text-slate-900 mb-2">{t}</h3>
              <p className="text-slate-700 flex-1">{b}</p>
              <div className="mt-4">
                <Link className="text-kadmos-blue" href="/contact">
                  Request the technical brief →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
