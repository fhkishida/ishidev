import { motion } from "framer-motion";
import Container from "./Container";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[90px]" />
      <div className="pointer-events-none absolute top-20 left-10 h-[320px] w-[320px] rounded-full bg-white/5 blur-[80px]" />

      <Container>
        <div className="min-h-[86vh] py-20 flex items-center">
          <div className="grid md:grid-cols-12 gap-10 items-center w-full">
            <div className="md:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-sm tracking-[0.22em] uppercase text-white/60"
              >
                {profile.location}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
                className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight"
              >
                {profile.name}
                <span className="text-orange-400">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl"
              >
                {profile.headline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="#projects"
                  className="rounded-full bg-orange-500/90 px-5 py-2.5 text-sm font-medium text-black hover:bg-orange-400 transition"
                >
                  View work
                </a>
                <a
                  href="#experience"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/85 hover:text-white hover:border-white/25 transition"
                >
                  Experience
                </a>
              </motion.div>

              <div className="mt-10 flex flex-wrap gap-2">
                {profile.topSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/75"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3">
                <div className="overflow-hidden rounded-2xl">
                  {/* troque por sua imagem */}
                  <img
                    src="/images/hero.png"
                    alt="Hero"
                    className="h-[380px] w-full object-cover"
                  />
                </div>
                <div className="mt-4 px-2 pb-2 text-sm text-white/65">
                  Building scalable systems, cloud-native architecture, and graph data modeling.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
