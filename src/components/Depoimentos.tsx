import { clinic } from "../data/clinic";
import { Icon, Stars } from "./ui";

export default function Depoimentos() {
  const d = clinic.depoimentos;
  return (
    <section id="depoimentos" className="py-12 md:py-[72px] bg-sand">
      <div className="max-w-editorial mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5 space-y-6 reveal-item">
            <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-rust block">{d.kicker}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight text-ink leading-tight">
              {d.titleBefore}
              <span className="italic text-rust">{d.titleItalic}</span>
            </h2>
            <div className="pt-2">
              <div className="flex items-center gap-1.5 text-terracotta mb-2">
                <Stars className="text-[24px]" />
              </div>
              <span className="font-fraunces text-6xl text-terracotta font-normal block">{clinic.rating.score}</span>
              <p className="text-[15px] text-forest font-medium mt-1">{d.summaryLabel}</p>
              <p className="text-[13px] text-moss mt-1">{d.summaryNote}</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {d.items.map((t) => (
              <div
                key={t.author}
                data-reveal="zoom" className="lift bg-paper p-6 rounded-[20px] shadow-sm space-y-4 flex flex-col justify-between reveal-item"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-terracotta">
                      <Stars className="text-[18px]" />
                    </div>
                    <Icon name="format_quote" className="text-sage text-[24px]" />
                  </div>
                  <p className="text-[15px] leading-[1.7] text-ink font-normal">"{t.text}"</p>
                </div>
                <div className="pt-3 border-t border-sand">
                  <p className="font-medium text-[14px] text-forest">{t.author}</p>
                  <p className="text-[12px] text-moss">{t.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
