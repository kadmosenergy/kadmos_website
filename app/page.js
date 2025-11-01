import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
const why_cards=[
  ["Solving the Capital Valley of Death","Modular units in the few‑hundred‑million range reduce front‑loaded capital and open more financing pathways."],
  ["Solving the Regulatory Gauntlet","Proven materials and technologies with minimal R&D streamline the licensing basis."],
  ["From Simulation to Steel","No exotic materials: we integrate well‑characterized components into a manufacturable system."],
  ["Rebuilding the Supply Chain","First‑principles design avoids specialized nuclear‑only parts wherever possible."],
  ["Deployment Timelines","Off‑the‑shelf components dramatically shorten lead times from order to operation."]
];
const principles=[
  "Integral primary system with components embedded in the vessel",
  "Operation at set‑point by natural circulation (passive operation / passive safety)",
  "Standard PWR fuel for supply‑chain strength",
  "Boiling in the reactor chimney—no external steam generators or separate pressurizer",
  "Small booster pump only for set‑point approach and load‑follow",
  "Reactor vessel submerged in an underground pool for inherent grace time",
  "Quick‑opening pressure‑boundary concept (e.g., clamp‑ring) to minimize outage time"
];
export default function Page(){
  return (<div>
    <section className="gradient-hero border-b border-slate-200">
      <div className="container-xl py-20 sm:py-28 flex flex-col items-center text-center gap-8">
        <Image src="/logo.png" alt="Kadmos Energy logo" width={240} height={240} priority />
        <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 max-w-4xl leading-tight">Built on Proven Engineering, Designed for Passive Safety & Scalable for the Future</h1>
        <p className="text-slate-700 text-lg max-w-3xl">Kadmos Energy designs and engineers scalable nuclear reactors that rely on passive safety, natural circulation, and proven components. Our 'Home Depot' approach minimizes bespoke R&D and licensing risk by integrating off‑the‑shelf technologies into an integral, simplified plant—optimized for high availability and rapid deployment.</p>
        <div className="flex flex-col sm:flex-row gap-3"><Link href="/contact" className="px-5 py-3 rounded-xl bg-kadmos-blue text-white hover:opacity-90">Talk to engineering</Link><Link href="/technology" className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-white">How it works</Link></div>
      </div>
    </section>

    <Section eyebrow="Why Kadmos" title="Pragmatic answers to nuclear's hardest bottlenecks">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{why_cards.map(c=>(
        <div key={c[0]} className="card p-6"><h3 className="font-semibold text-slate-900 mb-2">{c[0]}</h3><p className="text-slate-700">{c[1]}</p></div>
      ))}</div>
    </Section>

    <Section eyebrow="KADMOS Design" title="KADMOS Design: engineered for high availability">
      <ul className="grid md:grid-cols-2 gap-3">{principles.map((x,i)=>(<li key={i} className="p-3 bg-white rounded-xl border border-slate-200">{x}</li>))}</ul>
    </Section>

    {/* KADMOS Design One‑Pager (Image) */}
    <section className="container-xl my-12">
      <div className="card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-slate-900">KADMOS Design — one‑pager</h3>
          <a className="text-kadmos-blue underline" href="/one_page_design.pdf" target="_blank" rel="noreferrer">Open PDF</a>
        </div>
        <a href="/one_page_design.pdf" target="_blank" rel="noreferrer" className="block">
          <img src="/one_page_design.png" alt="Kadmos Design one‑pager" className="w-full h-auto rounded-xl border border-slate-200"/>
        </a>
      </div>
    </section>

    <section className="container-xl my-20">
      <div className="card p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div><h3 className="text-2xl font-semibold text-slate-900">Partner with a build‑first reactor team</h3><p className="text-slate-700 mt-1">Send us your site requirements. We'll map a path from permitting to power in months, not decades.</p></div>
        <Link href="/contact" className="px-6 py-3 rounded-xl bg-kadmos-blue text-white hover:opacity-90">Start a scope call</Link>
      </div>
    </section>
  </div>);
}
