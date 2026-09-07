import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { gallery } from "@/lib/site";

export const Route = createFileRoute("/gallery")({ component: Gallery });

function Gallery() {
  return (
    <main>
      <PageHero title="Gallery" kicker="From bed to container" image="/images/sorting.jpg" />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="max-w-2xl text-muted">
          Harvest, grade, pack, load. These frames are from the current season — not a stock library.
        </p>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 md:columns-3">
          {gallery.map((g) => (
            <figure key={g.src} className="mb-4 break-inside-avoid">
              <img src={g.src} alt={g.caption} className="w-full object-cover" />
              <figcaption className="mt-2 text-sm text-muted">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
