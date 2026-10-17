import { clinic } from "../data/clinic";
import { Icon } from "./ui";

export default function Abordagem() {
  const d = clinic.abordagem;
  const photo = clinic.images.abordagem;
  return (
    <section id="como-trabalho" className="py-12 md:py-[72px] bg-paper">
      <div className="max-w-editorial mx-auto px-6 md:px-12 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div data-reveal="left" className="lg:col-span-7 space-y-6 reveal-item">
            <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-rust block">{d.kicker}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight text-ink leading-tight">
              {d.titleBefore}
              <span className="italic text-rust">{d.titleItalic}</span>
              {d.titleAfter}
            </h2>
            <div className="space-y-4 text-measure text-[17px] leading-[1.7] text-moss">
              {d.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            {photo && (
              <div className="border-l-2 border-terracotta pl-5 py-1">
                <p className="font-fraunces italic text-[18px] text-forest">{d.quote}</p>
              </div>
            )}
          </div>

          {photo ? (
            <div data-reveal="right" className="lg:col-span-5 reveal-item">
              <div className="group rounded-[20px] overflow-hidden aspect-square bg-sand shadow-lg max-w-sm mx-auto">
                <img
                  src={photo}
                  alt={clinic.images.abordagemAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="text-center text-[13px] text-moss mt-3">{d.caption}</p>
            </div>
          ) : (
            <div data-reveal="right" className="lg:col-span-5 reveal-item">
              <div className="rounded-[20px] bg-forest text-paper p-8 md:p-10 space-y-4">
                <Icon name="format_quote" className="text-sage text-[36px]" />
                <p className="font-fraunces italic text-[20px] md:text-[22px] leading-snug">{d.quote}</p>
              </div>
            </div>
          )}
        </div>

        <div className="pt-8 border-t border-sand space-y-6">
          <h3 className="font-fraunces text-2xl md:text-3xl font-normal text-ink reveal-item">{d.pillarsTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.pillars.map((p) => (
              <div key={p.num} data-reveal="zoom" className="space-y-3 reveal-item">
                <span className="font-fraunces text-2xl text-terracotta block">{p.num}</span>
                <h4 className="font-fraunces text-xl text-ink font-normal">{p.title}</h4>
                <p className="text-[15px] leading-[1.7] text-moss">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="bg-forest text-paper p-7 md:p-10 rounded-[20px] space-y-4 reveal-item">
            <h3 className="font-fraunces text-2xl md:text-3xl font-normal">{d.efeitos.title}</h3>
            <p className="text-[16px] leading-[1.7] text-paper/85">{d.efeitos.text}</p>
          </div>

          <div className="bg-linen text-ink p-7 md:p-10 rounded-[20px] space-y-6 border border-sand reveal-item">
            <h3 className="font-fraunces text-2xl md:text-3xl font-normal">{d.notIs.title}</h3>
            <ul className="space-y-4 text-[16px]">
              {d.notIs.items.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Icon name="close" className="text-terracotta text-[20px] mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-fraunces italic text-[20px] md:text-[24px] leading-snug text-forest text-center max-w-[40ch] mx-auto pt-4 reveal-item">
          {d.closing}
        </p>
      </div>
    </section>
  );
}
