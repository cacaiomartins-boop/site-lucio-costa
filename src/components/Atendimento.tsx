import { clinic, whatsappUrl } from "../data/clinic";
import { Icon } from "./ui";

export default function Atendimento() {
  const d = clinic.atendimento;
  return (
    <section id="atendimento" className="py-12 md:py-[72px] bg-linen">
      <div className="max-w-editorial mx-auto px-6 md:px-12 space-y-10">
        <div className="space-y-4 reveal-item">
          <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-rust block">{d.kicker}</span>
          <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight text-ink">{d.title}</h2>
          <p className="text-measure text-[17px] leading-[1.7] text-moss">{d.text}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {d.plans.map((p) => (
            <div
              key={p.title}
              className="lift bg-paper rounded-[20px] p-7 md:p-9 border-t-2 border-t-terracotta shadow-md space-y-4 reveal-item"
            >
              <span className="flex items-center gap-1.5 text-[13px] text-moss font-medium">
                <Icon name={p.modeIcon} className="text-[18px]" />
                {p.mode}
              </span>
              <h3 className="font-fraunces text-2xl text-forest font-normal">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-moss">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal-item">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn min-h-[52px] px-7 rounded-[20px] bg-forest text-paper font-medium text-[15px] hover:bg-forest/90 inline-flex items-center"
          >
            {d.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
