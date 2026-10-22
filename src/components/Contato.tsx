import { clinic, whatsappUrl } from "../data/clinic";
import { Icon } from "./ui";

export default function Contato() {
  const d = clinic.contato;
  return (
    <section id="contato" className="py-12 md:py-[72px] bg-forest text-paper">
      <div className="max-w-editorial mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div data-reveal="left" className="lg:col-span-5 space-y-8 reveal-item">
            <div className="space-y-4">
              <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-sage block">{d.kicker}</span>
              <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight">
                {d.titleBefore}
                <span className="italic text-sage font-light">{d.titleItalic}</span>
              </h2>
              <p className="text-measure text-[17px] leading-[1.7] text-paper/85">{d.text}</p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn min-h-[52px] px-8 rounded-[20px] bg-paper text-forest font-medium text-[15px] hover:bg-white inline-flex items-center"
            >
              {d.cta}
            </a>

            <div className="space-y-6 pt-4 border-t border-moss/40 text-[15px]">
              <div className="space-y-1">
                <p className="flex items-center gap-2 font-medium text-sage text-[13px] tracking-wider uppercase">
                  <Icon name="videocam" className="text-[18px]" />
                  Atendimento online
                </p>
                <p className="text-paper/85">{d.onlineText}</p>
              </div>
            </div>
          </div>

          <div data-reveal="right" className="lg:col-span-7 reveal-item">
            <div className="h-full flex flex-col bg-paper text-ink rounded-[20px] overflow-hidden shadow-2xl">
              <div className="px-6 md:px-7 pt-6 pb-4 border-b border-sand">
                <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-rust block">
                  Localização dos consultórios
                </span>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 md:divide-x divide-y md:divide-y-0 divide-sand">
                {clinic.offices.map((o) => (
                  <div key={o.city} className="flex flex-col">
                    <div className="p-5 md:p-6 space-y-1">
                      <p className="font-fraunces text-2xl text-forest font-normal">{o.city}</p>
                      <p className="text-[14px] text-ink">{o.place}</p>
                      <p className="text-[13px] text-moss leading-snug">
                        {o.detail}
                        {o.extra && ` · ${o.extra}`}
                      </p>
                      <a
                        href={o.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 pt-1 text-[14px] font-medium text-forest hover:text-terracotta underline decoration-sand transition-colors"
                      >
                        <span>{d.mapLink}</span>
                        <span>↗</span>
                      </a>
                    </div>
                    <div className="flex-1 min-h-[260px] bg-sand/20">
                      <iframe
                        src={o.mapsEmbed}
                        className="w-full h-full min-h-[260px] border-0 block"
                        loading="lazy"
                        title={`Mapa do consultório em ${o.city}`}
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
