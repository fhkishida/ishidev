import Container from "./Container";
import Reveal from "./Reveal";
import { profile } from "../data/profile";

export default function Stats() {
  return (
    <section className="py-16 border-t border-white/5">
      <Container>
        <div className="grid sm:grid-cols-3 gap-6">
          {profile.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-semibold tracking-tight text-white">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/60">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
