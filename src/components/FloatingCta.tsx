import { useEffect, useState } from "react";
import { whatsappUrl } from "../data/clinic";
import { Icon } from "./ui";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const run = () => {
      ticking = false;
      const footer = document.getElementById("site-footer");
      const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;
      setVisible(window.scrollY > 500 && footerTop > window.innerHeight);
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
    <aside
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-pulse btn min-h-[56px] px-8 rounded-full bg-forest text-paper border border-sage/30 shadow-2xl hover:bg-forest/90 flex items-center gap-2 font-medium text-[15px]"
      >
        <Icon name="calendar_today" className="text-[20px]" />
        <span>Agendar Consulta</span>
      </a>
    </aside>
  );
}
