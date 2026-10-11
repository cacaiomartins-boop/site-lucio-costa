import { clinic, whatsappUrl } from "../data/clinic";
import { Icon } from "./ui";

export default function Online() {
  const d = clinic.online;
  return (
    <section className="py-12 md:py-[72px] bg-forest text-paper">
      <div className="max-w-editorial mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div data-reveal="left" className="lg:col-span-7 space-y-5 reveal-item">
            <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-sage block">{d.kicker}</span>
            <h2 className="font-fraunces text-3xl md:text-5xl font-normal tracking-tight leading-tight">
              {d.titleBefore}
              <span className="italic text-sage font-light">{d.titleItalic}</span>
            </h2>
            <p className="text-measure text-[17px] leading-[1.7] text-paper/85">{d.text}</p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn min-h-[52px] px-7 rounded-[20px] bg-paper text-forest font-medium text-[15px] hover:bg-white inline-flex items-center"
              >
                {d.cta}
              </a>
            </div>
          </div>

          <div data-reveal="right" className="lg:col-span-5 reveal-item">
            <div className="rounded-[20px] border border-moss/40 bg-moss/15 p-7 md:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-5 border-b border-moss/40">
                <Icon name="videocam" className="text-sage text-[28px]" />
                <div>
                  <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-sage">{d.badgeKicker}</p>
                  <p className="font-fraunces text-lg text-paper mt-0.5">{d.badgeText}</p>
                </div>
              </div>
              <ul className="space-y-4 text-[15px]">
                {d.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Icon name="check_circle" className="text-sage text-[20px] mt-0.5" />
                    <span className="text-paper/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
