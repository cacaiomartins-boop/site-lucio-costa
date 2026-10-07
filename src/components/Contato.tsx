import { clinic } from "../data/clinic";
import { Icon, scrollToId } from "./ui";

export default function Contato() {
  const d = clinic.contato;
  const a = clinic.address;
  return (
    <section id="contato" className="py-12 md:py-[72px] bg-forest text-paper">
      <div className="max-w-editorial mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div data-reveal="left" className="lg:col-span-5 space-y-8 reveal-item">
            <div className="space-y-4">
              <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-sage block">{d.kicker}</span>
              <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight">
                {d.titleBefore}
                <span className="italic text-sage font-light">{d.titleItalic}</span>
              </h2>
              <p className="text-measure text-[17px] leading-[1.7] text-paper/85">{d.text}</p>
            </div>

            <button
              type="button"
              onClick={() => scrollToId("atendimento")}
              className="btn min-h-[52px] px-8 rounded-[20px] bg-paper text-forest font-medium text-[15px] hover:bg-white"
            >
              {d.cta}
            </button>

            <div className="space-y-6 pt-4 border-t border-moss/40 text-[15px]">
              <div className="space-y-1">
                <p className="flex items-center gap-2 font-medium text-sage text-[13px] tracking-wider uppercase">
                  <Icon name="location_on" className="text-[18px]" />
                  Consultório presencial
                </p>
                <p className="font-fraunces text-xl text-paper">{a.building}</p>
                <p className="text-paper/80">{a.street}</p>
                <p className="text-paper/70 text-sm">
                  {a.city}, CEP {a.cep}
                </p>
              </div>
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
            <div className="bg-paper text-ink rounded-[20px] overflow-hidden shadow-2xl">
              <div className="p-7 border-b border-sand flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-rust block">
                    Localização do consultório
                  </span>
                  <p className="font-fraunces text-xl text-forest font-normal mt-0.5">{d.mapTitle}</p>
                  <p className="text-[13px] text-moss">{d.mapSub}</p>
                </div>
                <a
                  href={clinic.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-forest hover:text-terracotta underline decoration-sand transition-colors"
                >
                  <span>{d.mapLink}</span>
                  <span>↗</span>
                </a>
              </div>
              <div className="w-full h-[320px] md:h-[400px] bg-sand/20">
                <iframe
                  src={clinic.mapsEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Mapa do consultório em Brasília"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
