import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { products } from "@/lib/site";

export const Route = createFileRoute("/products")({ component: Products });

function Products() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIndex = pathname === "/products";

  return (
    <main>
      <PageHero title="Products" kicker="Export catalogue" image="/images/hero.jpg" />
      {isIndex ? (
        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="max-w-2xl text-muted">
            Two allium lines from one packing house. Specs below are what we actually load — not brochure
            averages. Ask for the current lot sheet and a 5 kg sample.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {products.map((p) => (
              <article key={p.slug} className="border border-line bg-surface">
                <img src={p.image} alt={p.name} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">
                    {p.local} · {p.latin}
                  </p>
                  <h2 className="mt-2 font-display text-3xl italic">{p.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="mt-6 inline-flex h-11 items-center bg-primary px-5 text-sm font-medium text-surface"
                  >
                    Open specifications
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <Outlet />
      )}
    </main>
  );
}
