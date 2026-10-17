import { clinic, whatsappUrl } from "../data/clinic";

export default function Valores() {
  const d = clinic.valores;
  return (
    <section id="valores" className="py-12 md:py-[72px] bg-linen">
      <div className="max-w-editorial mx-auto px-6 md:px-12 space-y-10">
        <div className="space-y-4 reveal-item">
          <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-rust block">{d.kicker}</span>
          <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight text-ink leading-tight">
            {d.titleBefore}
            <span className="italic text-rust">{d.titleItalic}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {d.prices.map((p) => (
            <div
              key={p.label}
              className="bg-paper rounded-[20px] p-7 md:p-9 border-t-2 border-t-terracotta shadow-md space-y-2 reveal-item"
            >
              <span className="text-[12px] uppercase tracking-wider text-moss block">{p.label}</span>
              <span className="font-fraunces text-4xl text-forest font-normal">{p.price}</span>
            </div>
          ))}
        </div>

        <div className="space-y-1 reveal-item">
          <p className="font-fraunces text-xl text-forest">{d.paymentTitle}</p>
          <p className="text-[16px] leading-[1.7] text-ink/90">{d.paymentText}</p>
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
