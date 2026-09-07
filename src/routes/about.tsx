import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { destinations, stats } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <main>
      <PageHero title="About the farm" kicker="Since 2014" image="/images/farm.jpg" />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl italic">A packing house built next to the beds</h2>
          <p className="mt-6 leading-relaxed text-muted">
            Aruna Allium started as a family shallot plot in Bayongbong, Garut. We built a food-grade packing
            house so village harvests could be size-graded, documented and shipped without mixing lots.
            Highland scallions from Cisurupan and Cikajang joined the program so buyers get a second line from
            the same quality desk.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            We contract GAP-trained growers, pay on delivered grade, and refuse to blend sizes. That is
            slower. It is also why kitchens reorder.
          </p>
        </div>
        <img src="/images/packing.jpg" alt="Packing house" className="h-full min-h-80 object-cover" />
      </section>
      <section className="bg-surface px-5 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl italic text-primary">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-4xl italic">Markets we serve</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {destinations.map((d) => (
            <li key={d} className="border border-line bg-surface px-4 py-2 text-sm">
              {d}
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["GAP + SNI", "Field protocols and Indonesian national product standard on every contracted bed."],
            ["Phytosanitary", "Quarantine papers issued lot-by-lot with photo reports attached."],
            ["Cold chain", "Hydro-cool for scallions, ventilated mesh for shallots, data-logged containers."],
          ].map(([t, b]) => (
            <article key={t} className="border border-line bg-surface p-6">
              <h3 className="font-display text-2xl italic">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
