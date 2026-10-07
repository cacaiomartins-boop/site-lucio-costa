import { useEffect } from "react";

/**
 * Um único listener de scroll (com requestAnimationFrame) para:
 * - barra de progresso no topo
 * - parallax suave no fundo do topo
 */
export function useScrollEffects() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;

    const run = () => {
      ticking = false;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      if (!reduce && y < window.innerHeight * 1.3) {
        layers.forEach((el) => {
          const speed = Number(el.dataset.parallax) || 0.2;
          el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
        });
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(run);
      }
    };

    run();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}
