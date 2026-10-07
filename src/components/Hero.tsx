import { clinic } from "../data/clinic";
import { Icon, Stars, scrollToId } from "./ui";

export default function Hero() {
  const h = clinic.hero;
  return (
    <section
      id="topo"
      className="relative w-full min-h-[80vh] bg-forest text-paper flex items-end overflow-hidden pt-32 pb-14 md:pb-20"
    >
      <div data-parallax="0.2" className="absolute inset-x-0 -top-[25%] bottom-0 will-change-transform">
        <img
          src={clinic.images.hero}
          alt=""
          aria-hidden="true"
          width={736}
          height={736}
          decoding="async"
          className="hero-bg w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-forest/60" />
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#A9B58A_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-editorial w-full mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span style={{ animationDelay: "100ms" }} className="hero-in inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-forest/90 border border-moss/40 text-sage text-[12px] font-medium tracking-[0.18em] uppercase">
              <span className="w-2 h-2 rounded-full bg-terracotta-light" />
              {h.badge}
            </span>

            <h1 style={{ animationDelay: "220ms" }} className="hero-in font-fraunces text-[40px] md:text-[64px] font-normal leading-[1.12] tracking-tight">
              {h.titleBefore}
              <span className="italic text-sage font-light">{h.titleItalic}</span>
              {h.titleAfter}
            </h1>

            <p style={{ animationDelay: "380ms" }} className="hero-in text-measure text-[17px] leading-[1.7] text-paper/80 font-normal">{h.text}</p>

            <div style={{ animationDelay: "520ms" }} className="hero-in flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollToId("atendimento")}
                className="btn min-h-[52px] px-7 rounded-[20px] bg-paper text-forest font-medium text-[15px] hover:bg-white flex items-center justify-center"
              >
                {h.cta1}
              </button>
              <a
                href="#como-trabalho"
                className="group min-h-[52px] px-7 rounded-[20px] inline-flex items-center justify-center gap-2 text-paper hover:text-sage font-normal text-[15px] transition-colors"
              >
                <span>{h.cta2}</span>
                <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">↓</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-linen text-ink rounded-[20px] p-7 md:p-10 shadow-2xl flex flex-col space-y-6 reveal-item">
              <div className="pb-5 border-b border-sand">
                <div className="flex items-center gap-1.5 text-terracotta mb-1">
                  <Stars className="text-[20px]" />
                  <span className="ml-2 font-fraunces text-[18px] text-ink font-normal">
                    {clinic.rating.score} de {clinic.rating.score}
                  </span>
                </div>
                <p className="text-[13px] text-moss tracking-wide">
                  {clinic.rating.count} opiniões verificadas · {clinic.rating.platform}
                </p>
              </div>

              <div className="space-y-4 text-[14px]">
                {h.card.map((row) => (
                  <div key={row.title} className="flex items-start gap-3.5">
                    <Icon name={row.icon} className="text-moss text-[22px] mt-0.5" />
                    <div>
                      {row.link ? (
                        <a
                          href={clinic.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-forest hover:text-terracotta underline decoration-sand transition-colors block"
                        >
                          {row.title}
                        </a>
                      ) : (
                        <span className="font-medium text-forest block">{row.title}</span>
                      )}
                      <span className="text-moss text-[13px]">{row.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
