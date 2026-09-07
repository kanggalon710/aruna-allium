import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { team } from "@/lib/site";

export const Route = createFileRoute("/team")({ component: Team });

function Team() {
  return (
    <main>
      <PageHero title="Our team" kicker="Growers & packers" image="/images/packing.jpg" />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="max-w-2xl text-muted">
          We keep the desk small on purpose. Decisions on grade, rejection and loading sit with people who
          still walk the field.
        </p>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {team.map((m) => (
            <article key={m.name}>
              <img src={m.image} alt={m.name} className="aspect-[3/4] w-full object-cover" />
              <h2 className="mt-5 font-display text-3xl">{m.name}</h2>
              <p className="text-xs uppercase tracking-[0.22em] text-primary">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
