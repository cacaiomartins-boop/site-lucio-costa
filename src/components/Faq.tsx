import { clinic } from "../data/clinic";

export default function Faq() {
  const d = clinic.faq;
  return (
    <section id="duvidas" className="py-12 md:py-[72px] bg-paper">
      <div className="max-w-editorial mx-auto px-6 md:px-12 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal-item">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-rust block">{d.kicker}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight text-ink leading-tight">
              {d.titleBefore}
              <span className="italic text-rust">{d.titleItalic}</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {[d.items.slice(0, 3), d.items.slice(3)].map((col, c) => (
            <div key={c} className="space-y-4">
              {col.map((f, i) => (
                <details
                  key={f.q}
                  open={c === 0 && i === 0}
                  className="group p-5 rounded-[20px] bg-linen border border-sand transition-all reveal-item"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-fraunces text-lg text-forest font-normal pr-4">{f.q}</span>
                    <span className="text-rust text-2xl font-light transition-transform duration-300 group-open:rotate-45 shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="pt-4 text-[15px] leading-[1.7] text-moss border-t border-sand/60 mt-4">{f.a}</div>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
