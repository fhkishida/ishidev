import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { profile } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <Container>
        <SectionTitle
          kicker="Selected work"
          title="Projects & systems"
          subtitle="A few highlights — you can expand these into detailed case studies later."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {profile.projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <a
                href={p.href}
                className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition"
              >
                <div className="h-56 overflow-hidden bg-black/1 flex items-center justify-center p-8">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="max-h-full max-w-full object-contain brightness-90 group-hover:brightness-100 group-hover:scale-[1.05] transition duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="text-sm text-orange-400/90">{p.subtitle}</div>
                  <div className="mt-2 text-xl font-semibold tracking-tight">
                    {p.title}
                  </div>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-black/20 border border-white/10 px-3 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
