import { clinic } from "../data/clinic";

export default function ParaQuemE() {
  const d = clinic.paraQuemE;
  return (
    <section id="para-quem-e" className="py-12 md:py-[72px] bg-linen">
      <div className="max-w-editorial mx-auto px-6 md:px-12 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end reveal-item">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-rust block">{d.kicker}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight text-ink leading-tight">
              {d.titleBefore}
              <span className="italic text-rust">{d.titleItalic}</span>
              {d.titleAfter}
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[16px] leading-[1.7] text-moss">{d.text}</p>
            <div className="border-l-2 border-terracotta pl-5 py-1">
              <p className="font-fraunces italic text-[17px] leading-relaxed text-forest">"{d.quote}"</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {d.items.map((item, i) => (
            <div key={item.title} className="space-y-2 pt-5 border-t border-sand reveal-item">
              <span className="font-fraunces text-2xl text-terracotta block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-fraunces text-xl text-ink font-normal leading-snug">{item.title}</h3>
              <p className="text-[15px] leading-[1.7] text-moss">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
