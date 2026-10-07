import { clinic } from "../data/clinic";

export default function Passos() {
  const d = clinic.passos;
  return (
    <section id="como-funciona" className="py-12 md:py-[72px] bg-forest text-paper">
      <div className="max-w-editorial mx-auto px-6 md:px-12 space-y-10">
        <div className="space-y-4 reveal-item">
          <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-sage block">{d.kicker}</span>
          <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight">
            {d.titleBefore}
            <span className="italic text-terracotta-light">{d.titleItalic}</span>
          </h2>
          <p className="text-measure text-[17px] text-paper/80 leading-[1.7]">{d.text}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {d.items.map((s) => (
            <div key={s.num} data-reveal="zoom" className="lift space-y-3 p-6 rounded-[20px] bg-forest border border-moss/30 reveal-item">
              <span className="font-fraunces text-3xl text-terracotta-light block">{s.num}</span>
              <h3 className="font-fraunces text-xl font-normal">{s.title}</h3>
              <p className="text-[15px] leading-[1.7] text-paper/75">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
