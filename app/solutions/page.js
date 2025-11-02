import Section from "@/components/Section";
export const metadata={title:"Solutions — Kadmos Energy",description:"Modular, integral reactors sized for your site and load profile."};
const cards=[
  ["Integral primary system","Core, chimney, separators and pressurization functions live inside the vessel to cut complexity and leak paths."],
  ["Boiling in the reactor chimney","This eliminates external steam generators and a separate pressurizer, simplifying the plant and enabling passive operation."],
  ["Underground water pool","The vessel sits in a below‑grade pool that provides long grace times for decay‑heat removal and reduces grading cost."],
  ["Standard PWR fuel","Use of commercial fuel lowers cost and supply risk while preserving licensing familiarity."],
  ["Set‑point booster pump","A small, non‑nuclear‑grade pump assists only near set‑point to avoid instabilities and enable load‑follow."],
  ["Quick‑opening closure","Bandlock‑style clamp rings minimize outage duration for refueling and inspection."]
];
export default function Page(){
  return (<div>
    <div className="container-xl py-14">
      <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Solutions</h1>
      <p className="text-slate-700 mt-4 max-w-3xl">We deliver modular, integral reactors sized from 30–165 MW. Each unit is designed for natural‑circulation operation at set‑point, high availability (≥95%), and rapid site integration for data‑center and industrial customers.</p>
    </div>
    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(([t,b])=>(<div key={t} className="card p-6"><h3 className="font-semibold text-slate-900 mb-2">{t}</h3><p className="text-slate-700">{b}</p></div>))}
      </div>
    </Section>
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
  </div>);
}
