import { clinic } from "../data/clinic";

export default function Sobre() {
  const d = clinic.sobre;
  return (
    <section id="sobre" className="py-12 md:py-[72px] bg-forest">
      <div className="max-w-editorial mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div data-reveal="left" className="lg:col-span-4 reveal-item">
            <div className="p-6 md:p-7 rounded-[20px] bg-paper shadow-md border border-sand space-y-2">
              <p className="font-fraunces text-2xl text-forest font-normal">{d.cardName}</p>
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-moss">{d.cardRole}</p>
              <p className="text-[14px] text-ink mt-1 border-t border-sand pt-3 font-normal">{d.cardInfo}</p>
            </div>
          </div>

          <div data-reveal="right" className="lg:col-span-8 space-y-6 reveal-item">
            <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-sage block">{d.kicker}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight text-paper leading-tight">
              {d.titleBefore}
              <span className="italic text-terracotta-light">{d.titleItalic}</span>
              {d.titleAfter}
            </h2>

            <div className="space-y-4 text-[17px] leading-[1.7] text-paper/85 text-measure">
              {d.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>

            <div className="border-l-2 border-terracotta-light pl-5 py-1">
              <p className="font-fraunces italic text-[18px] text-sage text-measure">“{d.quote}”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
