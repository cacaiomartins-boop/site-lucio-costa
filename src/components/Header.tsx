import { useEffect, useState } from "react";
import { clinic, whatsappUrl } from "../data/clinic";
import { Icon } from "./ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const run = () => {
      ticking = false;
      setScrolled(window.scrollY > 60);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(run);
      }
    };
    run();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-linen/95 backdrop-blur-md border-b border-sand shadow-sm py-4" : "py-5"
        }`}
      >
        <div className="max-w-editorial mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#topo" className="group flex flex-col justify-center">
            <span className={`font-fraunces text-2xl font-normal tracking-tight transition-colors ${scrolled ? "text-forest" : "text-paper"}`}>
              {clinic.name}
            </span>
            <span className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-colors ${scrolled ? "text-moss" : "text-sage"}`}>
              Psicanálise · {clinic.crp}
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-normal">
            {clinic.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`link-underline transition-colors ${scrolled ? "text-ink/80 hover:text-forest" : "text-paper/85 hover:text-paper"}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn min-h-[52px] px-7 rounded-[20px] bg-paper text-forest font-medium text-[15px] hover:bg-white inline-flex items-center"
            >
              Agendar Consulta
            </a>
          </div>

          <button
            type="button"
            aria-label="Abrir Menu"
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 focus:outline-none ${scrolled ? "text-forest" : "text-paper"}`}
          >
            <Icon name="menu" className="text-[28px]" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="absolute inset-0 bg-forest/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-paper p-8 flex flex-col justify-between transform transition-transform duration-300 shadow-2xl ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-sand">
              <div>
                <span className="font-fraunces text-2xl text-forest block">{clinic.name}</span>
                <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-moss">{clinic.crp}</span>
              </div>
              <button type="button" aria-label="Fechar Menu" onClick={() => setOpen(false)} className="p-2 text-ink">
                <Icon name="close" className="text-[28px]" />
              </button>
            </div>
            <nav className="flex flex-col space-y-5 pt-8">
              {clinic.mobileNav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-fraunces text-[20px] text-ink hover:text-forest transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="w-full min-h-[52px] rounded-[20px] bg-forest text-paper font-medium text-[15px] flex items-center justify-center"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </>
  );
}
