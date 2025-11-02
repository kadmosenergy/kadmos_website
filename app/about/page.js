import Image from "next/image";

export const metadata = {
  title: "About — Kadmos Energy",
  description: "Kadmos Energy Services LLC — nuclear reactor design and engineering."
};

const roles = [
  {
    role: "Chief Executive Officer",
    name: "Dr. Youssef Ballout",
    img: "/youssef_ballout.jpg",
    bio: `Prior to founding Kadmos Energy Services LLC, Dr. Youssef Ballout was the Director of Idaho National Laboratory’s (INL’s) Reactor Systems Design & Analysis division. He joined INL in December 2018 as the manager of the Fuel Design and Development Department. Prior to INL, he was the President of Elysium Industries Limited, leading the design and development of a molten chloride salt fast reactor. He also spent twenty-six years at the Naval Nuclear Laboratory (NNL)/Knolls Atomic Power Laboratory working on reactor design, reactor materials, thermal hydraulics, and structural performance. At NNL he managed the Space Structural Materials group with NASA on nuclear propulsion concepts for the Jupiter Icy Moon Orbiter (JIMO) project Prometheus. Over his career he has contributed as an experimentalist and modeler, often both. He has also held engineering and organizational leadership roles. Earlier he taught at the Virginia Military Institute (VMI). He began his studies in Limoges, France, and earned B.S., M.S., and Ph.D. engineering degrees from Wichita State University, Kansas.`
  },
  { role: "Chief Technology Officer", name: "To be announced soon", img: null },
  { role: "Chief Nuclear Officer", name: "To be announced soon", img: null },
  { role: "Chief Operating Officer", name: "To be announced soon", img: null },
  { role: "Chief Test Engineer", name: "To be announced", img: null },
  { role: "Chief Manufacturing Engineer", name: "To be announced", img: null }
];

export default function Page() {
  return (
    <div className="container-xl py-14">
      <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">About</h1>

      {/* Company description */}
      <div className="prose max-w-none prose-slate mt-6">
        <p>
          <strong>Kadmos Energy Services LLC</strong> is a nuclear reactor design and engineering firm focused on
          deployable, passively safe power. We take a “Home Depot” approach—integrating proven materials and
          catalog components into an <em>integral</em>, manufacturable plant—so our customers avoid long R&amp;D cycles,
          bespoke fabrication, and licensing surprises.
        </p>
        <p>
          We work from first principles and validated methods in neutronics, thermal-hydraulics, structures,
          and systems engineering to quickly converge from concept to detailed design. Our emphasis is on
          <em> set-point natural circulation</em>, high availability, and straightforward construction, enabling
          faster time-to-power for data-center and industrial loads.
        </p>
        <p className="mb-0">
          Kadmos offers: conceptual and pre-FEED design, safety-basis development, licensing strategy, vendor and
          supply-chain integration, prototype and test planning, and factory-first packaging to simplify site work.
          The result is a pragmatic path to clean, reliable baseload with minimal complexity.
        </p>
      </div>

      {/* Who we are */}
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mt-12">Who we are</h2>
      <p className="text-slate-700 mt-2">
        A cross-disciplinary leadership team spanning reactor systems, manufacturing, testing, and operations.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map(({ role, name, img, bio }) => {
          // CEO card with expandable bio
          if (bio) {
            return (
              <details key={role} className="group rounded-2xl border border-slate-200 bg-white shadow-sm p-5 open:shadow-md">
                <summary className="flex items-center gap-4 cursor-pointer list-none">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 shrink-0">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={name}
                      fill
                      sizes="80px"
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold">{name}</div>
                    <div className="text-slate-600 text-sm">{role}</div>
                    <div className="text-kadmos-blue text-sm mt-1 group-open:hidden">Read bio →</div>
                    <div className="text-kadmos-blue text-sm mt-1 hidden group-open:block">Hide bio ↑</div>
                  </div>
                </summary>
                <div className="mt-4 text-slate-700 leading-relaxed">
                  {bio.split("\n").map((line, i) => (
                    <p key={i} className="mt-3 first:mt-0">{line.trim()}</p>
                  ))}
                </div>
              </details>
            );
          }

          // Placeholder cards for TBA roles
          return (
            <div key={role} className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">
                <span className="text-sm">TBA</span>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">{name}</div>
                <div className="text-slate-600 text-sm">{role}</div>
                <div className="text-slate-500 text-xs mt-1">Announcement coming soon</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
