export function PageHero({
  title,
  kicker,
  image,
}: {
  title: string;
  kicker?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-hero text-surface">
      <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-hero/55" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-32">
        {kicker ? (
          <p className="text-xs uppercase tracking-[0.28em] text-gold">{kicker}</p>
        ) : null}
        <h1 className="mt-3 font-display text-5xl italic leading-none md:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
