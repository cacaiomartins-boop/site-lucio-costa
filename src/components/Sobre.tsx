import { clinic, whatsappUrl } from "../data/clinic";

export default function Sobre() {
  const d = clinic.sobre;
  return (
    <section id="sobre" className="py-12 md:py-[72px] bg-sand">
      <div className="max-w-editorial mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div data-reveal="left" className="lg:col-span-5 reveal-item">
            <div className="relative max-w-md mx-auto lg:max-w-none pt-5 pl-5">
              <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-sage -z-0" />
              <div className="relative z-10 group rounded-[20px] overflow-hidden aspect-[4/5] bg-paper shadow-md">
                <img
                  src={clinic.images.sobrePortrait}
                  alt={clinic.images.sobrePortraitAlt}
                  loading="lazy"
                  decoding="async"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="relative z-20 -mt-16 mx-4 p-5 rounded-[20px] bg-paper shadow-xl border border-sand">
                <p className="font-fraunces text-xl text-forest font-normal">{d.cardName}</p>
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-moss">{d.cardRole}</p>
                <p className="text-[13px] text-ink mt-1 border-t border-sand pt-2 font-normal">{d.cardInfo}</p>
              </div>
            </div>
          </div>

          <div data-reveal="right" className="lg:col-span-7 space-y-6 reveal-item">
            <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-rust block">{d.kicker}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight text-ink leading-tight">
              {d.titleBefore}
              <span className="italic text-rust">{d.titleItalic}</span>
              {d.titleAfter}
            </h2>

            <div className="space-y-4 text-[17px] leading-[1.7] text-ink/90 text-measure">
              {d.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>

            <div className="border-l-2 border-terracotta pl-5 py-1">
              <p className="font-fraunces italic text-[18px] text-forest">"{d.quote}"</p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {d.pills.map((p) => (
                <span key={p} className="px-4 py-2 rounded-full bg-linen border border-moss text-[13px] text-forest font-medium">
                  {p}
                </span>
              ))}
            </div>

            <div className="pt-4">
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
        </div>
      </div>
    </section>
  );
}
