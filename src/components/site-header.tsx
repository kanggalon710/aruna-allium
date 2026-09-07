import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const light = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        light ? "bg-transparent text-surface" : "bg-hero/95 text-surface shadow-lg shadow-hero/20 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-wide lowercase">
            {site.name.toLowerCase().replace(" ", "")}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-gold">Indonesia · Export</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "transition-opacity hover:opacity-100",
                pathname.startsWith(item.href) ? "opacity-100 text-gold" : "opacity-80",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-hero px-5 py-4 md:hidden">
          {nav.map((item) => (
            <Link key={item.href} to={item.href} className="py-3 text-base text-surface">
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
