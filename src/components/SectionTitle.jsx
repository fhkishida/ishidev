import Reveal from "./Reveal";

export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mb-10">
      <Reveal>
        <p className="text-sm tracking-[0.22em] uppercase text-orange-400">
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.1}>
          <p className="mt-3 text-base md:text-lg text-white/65 max-w-3xl">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
