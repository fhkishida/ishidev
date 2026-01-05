import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionTitle
          kicker="Contact"
          title="Let’s build something reliable"
          subtitle="If you want to talk about backend, cloud, architecture, or product engineering — I’m open."
        />

        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="text-white/75">
                <div className="text-sm text-white/55">Email</div>
                <div className="text-lg font-medium">{profile.email}</div>

                <div className="mt-4 text-sm text-white/55">LinkedIn</div>
                <div className="text-lg font-medium">{profile.linkedin}</div>
              </div>

              <div className="flex gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full bg-orange-500/90 px-5 py-2.5 text-sm font-medium text-black hover:bg-orange-400 transition"
                >
                  Email me
                </a>
                <a
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/85 hover:text-white hover:border-white/25 transition"
                >
                  Open LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {profile.name}. Built with React + Tailwind.
        </div>
      </Container>
    </section>
  );
}
