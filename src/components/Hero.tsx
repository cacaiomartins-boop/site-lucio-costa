import { clinic, whatsappUrl } from "../data/clinic";

export default function Hero() {
  const h = clinic.hero;
  const bg = clinic.images.heroBackground;
  return (
    <section
      id="topo"
      className="relative w-full min-h-[80vh] bg-forest text-paper flex items-center overflow-hidden pt-28 pb-14 md:pb-20"
    >
      {bg ? (
        <>
          <div data-parallax="0.2" className="absolute inset-x-0 -top-[25%] bottom-0 will-change-transform">
            <img
              src={bg}
              alt=""
              aria-hidden="true"
              width={736}
              height={736}
              decoding="async"
              className="hero-bg w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/55" />
        </>
      ) : (
        <div className="absolute -right-24 -top-24 w-[620px] h-[620px] rounded-full bg-moss/25 blur-3xl pointer-events-none" />
      )}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#A9B58A_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-editorial w-full mx-auto px-6 md:px-12">
        <h1 className="sr-only">{h.srTitle}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col space-y-7">
            <span
              style={{ animationDelay: "100ms" }}
              className="hero-in inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-forest/90 border border-moss/40 text-sage text-[12px] font-medium tracking-[0.18em] uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-terracotta-light" />
              {h.badge}
            </span>

            <p
              style={{ animationDelay: "240ms" }}
              className="hero-in font-fraunces font-light text-[28px] md:text-[40px] leading-[1.25] tracking-tight text-paper max-w-[26ch] md:max-w-[28ch]"
            >
              {h.text}
            </p>

            <div
              style={{ animationDelay: "400ms" }}
              className="hero-in flex flex-col sm:flex-row sm:items-center gap-4 pt-2"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn min-h-[52px] px-7 rounded-[20px] bg-paper text-forest font-medium text-[15px] hover:bg-white flex items-center justify-center"
              >
                {h.cta1}
              </a>
              <a
                href="#como-trabalho"
                className="group min-h-[52px] px-7 rounded-[20px] inline-flex items-center justify-center gap-2 text-paper hover:text-sage font-normal text-[15px] transition-colors"
              >
                <span>{h.cta2}</span>
                <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">↓</span>
              </a>
            </div>
          </div>

          <figure
            style={{ animationDelay: "180ms" }}
            className="hero-in order-1 lg:order-2 lg:col-span-5 w-full max-w-[320px] sm:max-w-sm lg:max-w-[440px] mx-auto lg:ml-auto lg:mr-0"
          >
            <div className="rounded-[20px] overflow-hidden aspect-[4/5] bg-moss/30 shadow-2xl ring-1 ring-sage/25">
              <img
                src={clinic.images.heroPortrait}
                alt={clinic.images.heroPortraitAlt}
                width={400}
                height={400}
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-[12px] font-medium uppercase tracking-[0.18em] text-sage text-center lg:text-left">
              {h.credit}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
