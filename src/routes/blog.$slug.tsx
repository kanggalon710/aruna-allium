import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({ component: Post });

function Post() {
  const { slug } = Route.useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.22em] text-gold">{post.date}</p>
      <h2 className="mt-3 font-display text-4xl italic md:text-5xl">{post.title}</h2>
      <img src={post.image} alt="" className="mt-8 w-full object-cover" />
      <div className="mt-8 space-y-4 leading-relaxed text-muted">
        <p>{post.excerpt}</p>
        <p>
          This note is written for buyers planning cover, not for the open market. Volume, grade mix and
          vessel dates move with weather. Ask the export desk for the current lot sheet before you lock a
          price.
        </p>
        <p>
          Samples ship as 5 kg air parcels. Commercial lots move as chilled cartons (scallions) or ventilated
          mesh in 20ft / 40ft containers (shallots). Phytosanitary and packing photos go out with the
          documents.
        </p>
      </div>
      <Link to="/contact" className="mt-10 inline-flex h-11 items-center bg-primary px-5 text-sm font-medium text-surface">
        Talk to the desk
      </Link>
    </article>
  );
}
