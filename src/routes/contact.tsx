import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  return (
    <main>
      <PageHero title="Contact" kicker="Export desk" image="/images/container.jpg" />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl italic">Request a quotation</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tell us destination port, grade and monthly volume. We reply with availability, a packing photo
            from the current lot, and a CIF / FOB indication.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-gold">Packing house</dt>
              <dd className="mt-1">{site.address}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-gold">Phone / WhatsApp</dt>
              <dd className="mt-1">
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-gold">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="border border-line bg-surface p-6 md:p-8">
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
