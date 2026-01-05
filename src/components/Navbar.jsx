import Container from "./Container";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-[#0b0e14]/60 border-b border-white/5">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight">
            <span className="text-white">ishidev</span>
            <span className="text-orange-400">.</span>
          </div>

          <div className="hidden md:flex items-center gap-7 text-sm text-white/70">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-orange-500/90 px-4 py-2 text-sm font-medium text-black hover:bg-orange-400 transition"
          >
            Let&apos;s talk
          </a>
        </div>
      </Container>
    </div>
  );
}
