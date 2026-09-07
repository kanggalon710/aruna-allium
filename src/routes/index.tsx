import { createFileRoute, Link } from "@tanstack/react-router";
import { destinations, gallery, posts, products, site, stats, team } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-hero text-surface">
        <img src="/images/hero.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-hero/50" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <h1 className="font-script text-5xl leading-tight md:text-7xl">{site.tagline}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-surface/85 md:text-base">
            Shallots and scallions grown on the volcanic soils of Bayongbong, Garut — West Java’s largest
            shallot kecamatan, packed to export grade for kitchens and processors across Asia, the Gulf and
            Europe.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-12 items-center bg-surface px-8 text-sm font-semibold tracking-wide text-ink"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Origin story</p>
            <h2 className="mt-3 font-display text-4xl italic leading-tight md:text-5xl">
              Shallots are Indonesia’s most demanded allium export
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              We grow and pack red shallots and green onions for importers who need a program, not a spot
              lot. Partner farms follow GAP, lots are size-graded by hand, and every shipment leaves with
              phytosanitary papers, packing lists and a photo report.
            </p>
          </div>
          <img src="/images/shallot.jpg" alt="Red shallots" className="h-80 w-full object-cover md:h-[420px]" />
        </div>
      </section>

      <section className="bg-primary py-14 text-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-5xl italic">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-surface/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl italic">Gallery</h2>
            <p className="mt-3 text-muted">
              Daily harvest, grading, packing and loading — the same fields and house that fill your order.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((g) => (
              <Link key={g.src} to="/gallery" className="group relative block overflow-hidden">
                <img src={g.src} alt={g.caption} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-hero/60 px-3 py-2 text-xs text-surface opacity-0 transition-opacity group-hover:opacity-100">
                  {g.caption}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-hero py-24 text-surface">
        <img src="/images/farm.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <h2 className="font-display text-4xl italic md:text-5xl">Over twelve years in the allium trade</h2>
          <div className="space-y-4 leading-relaxed text-surface/85">
            <p>
              Bayongbong, Garut is the shallot heart of West Java — about 1,500 hectares in the kecamatan,
              nearly half of Garut’s crop. Highland scallions from Cisurupan and Cikajang share the same
              packing house.
            </p>
            <p>
              Destinations we ship regularly: {destinations.slice(0, 6).join(", ")} and more.
            </p>
            <Link to="/about" className="inline-block border border-surface/40 px-6 py-3 text-sm">
              About the farm
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl italic">Products</h2>
              <p className="mt-2 text-muted">Two lines. Export packing. Clear grades.</p>
            </div>
            <Link to="/products" className="text-sm font-semibold text-primary">
              See all specs
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {products.map((p) => (
              <article key={p.slug} className="border border-line bg-bg">
                <img src={p.image} alt={p.name} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{p.local}</p>
                  <h3 className="mt-1 font-display text-3xl italic">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
                  <table className="mt-5 w-full text-sm">
                    <tbody>
                      {p.specs.slice(0, 5).map(([k, v]) => (
                        <tr key={k} className="border-t border-line">
                          <td className="py-2 text-muted">{k}</td>
                          <td className="py-2 text-right font-medium">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="mt-6 inline-flex h-11 items-center bg-primary px-5 text-sm font-medium text-surface"
                  >
                    Product detail
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl italic">Our team</h2>
          <p className="mt-2 max-w-xl text-muted">
            Growers, packers and export staff who still walk the beds before they sign a contract.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {team.map((m) => (
              <article key={m.name} className="text-center">
                <img src={m.image} alt={m.name} className="mx-auto aspect-[3/4] w-full max-w-xs object-cover" />
                <h3 className="mt-4 font-display text-2xl">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl italic">Our blog</h2>
          <p className="mt-2 text-muted">Crop notes, packing updates and market reads for buyers.</p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="group grid gap-4 sm:grid-cols-5">
                <img src={post.image} alt="" className="h-40 w-full object-cover sm:col-span-2" />
                <div className="sm:col-span-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{post.date}</p>
                  <h3 className="mt-2 font-display text-2xl leading-snug group-hover:text-primary">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Call us at</p>
            <p className="font-display text-3xl">{site.phoneDisplay}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">E-mail us at</p>
            <p className="font-display text-3xl">{site.email}</p>
          </div>
          <Link to="/contact" className="inline-flex h-12 items-center bg-surface px-8 text-sm font-semibold text-ink">
            Request a quotation
          </Link>
        </div>
      </section>
    </main>
  );
}
