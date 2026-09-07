import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { posts } from "@/lib/site";

export const Route = createFileRoute("/blog")({ component: Blog });

function Blog() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIndex = pathname === "/blog";

  return (
    <main>
      <PageHero title="Our blog" kicker="Crop & market notes" image="/images/field.jpg" />
      {isIndex ? (
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="group border border-line bg-surface">
                <img src={post.image} alt="" className="h-56 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{post.date}</p>
                  <h2 className="mt-2 font-display text-3xl italic group-hover:text-primary">{post.title}</h2>
                  <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <Outlet />
      )}
    </main>
  );
}
