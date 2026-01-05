import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { profile } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionTitle
          kicker="Experience"
          title="Engineering that scales"
          subtitle="A timeline of roles focused on reliability, performance, and global systems."
        />

        <div className="space-y-6">
          {profile.experience.map((job, idx) => (
            <Reveal key={job.company} delay={idx * 0.04}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {job.role}
                    </h3>
                    <p className="text-white/65">{job.company}</p>
                  </div>
                  <div className="text-sm text-white/55 md:text-right">
                    <div>{job.period}</div>
                    <div>{job.place}</div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-white/70">
                  {job.bullets.map((b) => (
                    <li key={b} className="leading-relaxed">
                      <span className="text-orange-400/90">▸</span>{" "}
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/20 border border-white/10 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
