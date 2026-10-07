import { clinic, whatsappUrl } from "../data/clinic";
import { Icon } from "./ui";

export default function Atendimento() {
  const d = clinic.atendimento;
  return (
    <section id="atendimento" className="py-12 md:py-[72px] bg-linen">
      <div className="max-w-editorial mx-auto px-6 md:px-12 space-y-10">
        <div className="space-y-4 reveal-item">
          <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-rust block">{d.kicker}</span>
          <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight text-ink">
            {d.titleBefore}
            <span className="italic text-rust">{d.titleItalic}</span>
          </h2>
          <p className="text-measure text-[17px] leading-[1.7] text-moss">{d.text}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {d.plans.map((p) => (
            <div
              key={p.title}
              className="lift bg-paper rounded-[20px] p-7 md:p-9 border-t-2 border-t-terracotta shadow-md flex flex-col justify-between space-y-6 reveal-item"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[13px] text-moss">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Icon name={p.modeIcon} className="text-[18px]" />
                    {p.mode}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="schedule" className="text-[18px]" />
                    {p.duration}
                  </span>
                </div>
                <h3 className="font-fraunces text-2xl text-forest font-normal">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-moss">{p.text}</p>
                <ul className="space-y-2.5 text-[14px] text-ink pt-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-sand space-y-4">
                <div>
                  <span className="text-[12px] uppercase tracking-wider text-moss block">{d.investLabel}</span>
                  <span className="font-fraunces text-3xl text-forest font-normal">{p.price}</span>
                  <span className="text-[13px] text-moss">{d.perSession}</span>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full min-h-[52px] rounded-[20px] bg-forest text-paper font-medium text-[15px] hover:bg-forest/90 flex items-center justify-center"
                >
                  {d.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
