import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-hero text-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl lowercase">{site.name.toLowerCase().replace(" ", "")}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-surface/70">
            Our company is a group of growers and packers who pay attention to small details — size grade, dry
            matter, and a cold chain that actually holds. We work for shared harvests, not one-off loads.
          </p>
        </div>
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">Address</h3>
          <p className="mt-3 text-sm leading-relaxed text-surface/80">{site.address}</p>
          <a href={`mailto:${site.email}`} className="mt-3 block text-sm text-surface">
            {site.email}
          </a>
          <a href={`tel:${site.phoneTel}`} className="mt-1 block text-sm text-surface">
            {site.phoneDisplay}
          </a>
        </div>
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">Working Hours</h3>
          <ul className="mt-3 space-y-2 text-sm text-surface/80">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-6">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-4">
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/15">
              <Youtube className="size-4" />
            </span>
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/15">
              <Instagram className="size-4" />
            </span>
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/15">
              <Linkedin className="size-4" />
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-surface/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.{" "}
        <Link to="/contact" className="underline-offset-2 hover:underline">
          Request a quotation
        </Link>
      </div>
    </footer>
  );
}
