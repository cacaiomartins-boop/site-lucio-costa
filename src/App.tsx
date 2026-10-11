import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ParaQuemE from "./components/ParaQuemE";
import Sobre from "./components/Sobre";
import Video from "./components/Video";
import Abordagem from "./components/Abordagem";
import Passos from "./components/Passos";
import Atendimento from "./components/Atendimento";
import Depoimentos from "./components/Depoimentos";
import Online from "./components/Online";
import Faq from "./components/Faq";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import FloatingCta from "./components/FloatingCta";
import { useScrollEffects } from "./hooks/useScrollEffects";

export default function App() {
  useScrollEffects();

  // Animação de entrada ao rolar (conteúdo fica visível se o JS falhar)
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal-item"));
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-revealed", "reveal-done"));
      return;
    }

    const finish = (el: HTMLElement) => (e: TransitionEvent) => {
      if (e.target !== el || e.propertyName !== "opacity") return;
      el.style.transitionDelay = "";
      el.classList.add("reveal-done");
      el.removeEventListener("transitionend", handlers.get(el)!);
    };
    const handlers = new Map<HTMLElement, (e: TransitionEvent) => void>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("is-revealed");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    items.forEach((el) => {
      // escada: atraso conforme a posição entre os irmãos que também animam
      const siblings = Array.from(el.parentElement?.children ?? []).filter((c) =>
        c.classList.contains("reveal-item"),
      );
      el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 100}ms`;
      const h = finish(el);
      handlers.set(el, h);
      el.addEventListener("transitionend", h);
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      handlers.forEach((h, el) => el.removeEventListener("transitionend", h));
    };
  }, []);

  return (
    <>
      <div
        id="scroll-progress"
        aria-hidden="true"
        className="fixed top-0 left-0 z-[60] h-[3px] w-full origin-left bg-terracotta"
        style={{ transform: "scaleX(0)" }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ParaQuemE />
        <Sobre />
        <Video />
        <Abordagem />
        <Passos />
        <Atendimento />
        <Depoimentos />
        <Online />
        <Faq />
        <Contato />
        <Footer />
      </main>
      <FloatingCta />
    </>
  );
}
