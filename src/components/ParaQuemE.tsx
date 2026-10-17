import { clinic } from "../data/clinic";

export default function ParaQuemE() {
  const d = clinic.paraQuemE;
  const last = d.items.length - 1;
  return (
    <section id="para-quem-e" className="py-12 md:py-[72px] bg-linen">
      <div className="max-w-editorial mx-auto px-6 md:px-12 space-y-10">
        <div className="reveal-item">
          <div className="space-y-4">
            <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-rust block">{d.kicker}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight text-ink leading-tight">
              {d.titleBefore}
              <span className="italic text-rust">{d.titleItalic}</span>
              {d.titleAfter}
            </h2>
            <p className="text-measure text-[17px] leading-[1.7] text-moss">{d.intro}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {d.items.map((item, i) => (
            <div
              key={item.title}
              className={`space-y-2 pt-5 border-t border-sand reveal-item ${
                i === last && d.items.length % 2 === 1 ? "md:col-span-2" : ""
              } ${i === last && d.items.length % 3 === 1 ? "lg:col-span-3" : "lg:col-span-1"}`}
            >
              <span className="font-fraunces text-2xl text-terracotta block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-fraunces text-xl text-ink font-normal leading-snug">{item.title}</h3>
              <p className="text-[15px] leading-[1.7] text-moss max-w-[60ch]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-terracotta pl-5 py-1 reveal-item">
          <p className="font-fraunces italic text-[18px] md:text-[20px] text-forest text-measure">{d.closing}</p>
        </div>
      </div>
    </section>
  );
}
