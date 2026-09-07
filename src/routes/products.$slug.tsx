import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { InquiryForm } from "@/components/inquiry-form";
import { products } from "@/lib/site";

export const Route = createFileRoute("/products/$slug")({ component: ProductDetail });

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = products.find((p) => p.slug === slug);
  if (!product) throw notFound();

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
      <div>
        <img src={product.image} alt={product.name} className="w-full object-cover" />
        <p className="mt-3 text-sm text-muted">
          {product.local} · {product.latin}
        </p>
      </div>
      <div>
        <h2 className="font-display text-4xl italic">{product.name}</h2>
        <p className="mt-4 leading-relaxed text-muted">{product.summary}</p>
        <table className="mt-6 w-full text-sm">
          <tbody>
            {product.specs.map(([k, v]) => (
              <tr key={k} className="border-t border-line">
                <td className="py-3 text-muted">{k}</td>
                <td className="py-3 text-right font-medium">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/contact" className="mt-8 inline-flex h-11 items-center border border-ink px-5 text-sm">
          Download lot sheet via inquiry
        </Link>
        <div className="mt-12 border-t border-line pt-10">
          <h3 className="font-display text-2xl italic">Request this line</h3>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
