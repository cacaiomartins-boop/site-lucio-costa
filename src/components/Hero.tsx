import { clinic, whatsappUrl } from "../data/clinic";

export default function Hero() {
  const h = clinic.hero;
  const bg = clinic.images.heroBackground;
  return (
    <section
      id="topo"
      className="relative w-full min-h-[80vh] lg:min-h-[640px] bg-paper text-ink flex items-center overflow-hidden pt-28 pb-14 md:pb-20 lg:pt-[196px] lg:pb-28"
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
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-paper to-linen" />
      )}

      {/* Desktop: foto ocupa quase metade da seção, à direita, abaixo do cabeçalho, separada por uma linha simples */}
      <figure
        style={{ animationDelay: "180ms" }}
        className="hero-in hidden lg:block absolute top-[84px] right-0 bottom-0 w-[46%] border-l border-sand bg-sand"
      >
        <img
          src={clinic.images.heroPortrait}
          alt={clinic.images.heroPortraitAlt}
          width={400}
          height={500}
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
      </figure>

      <div className="relative z-10 w-full px-6 md:px-12 lg:w-[54%] lg:pr-12 lg:pl-[max(3rem,calc((100vw-1240px)/2+3rem))]">
        <h1 className="sr-only">{h.srTitle}</h1>

        <div className="flex flex-col gap-10 lg:gap-0">
          {/* Mobile e tablet: foto acima do texto */}
          <figure
            style={{ animationDelay: "180ms" }}
            className="hero-in lg:hidden w-full max-w-[320px] sm:max-w-sm mx-auto"
          >
            <div className="rounded-[20px] overflow-hidden aspect-[4/5] bg-sand shadow-xl ring-1 ring-sand">
              <img
                src={clinic.images.heroPortrait}
                alt={clinic.images.heroPortraitAlt}
                width={400}
                height={400}
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-[12px] font-medium uppercase tracking-[0.18em] text-moss text-center">
              {h.credit}
            </figcaption>
          </figure>

          <div className="flex flex-col space-y-7">
            <span
              style={{ animationDelay: "100ms" }}
              className="hero-in inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-paper border border-sand text-moss text-[12px] font-medium tracking-[0.18em] uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              {h.badge}
            </span>

            <p
              style={{ animationDelay: "240ms" }}
              className="hero-in font-fraunces font-light text-[28px] md:text-[40px] leading-[1.25] tracking-tight text-forest max-w-[24ch] md:max-w-[30ch]"
            >
              {h.text}
            </p>

            <p
              style={{ animationDelay: "320ms" }}
              className="hero-in text-[16px] md:text-[18px] leading-[1.6] text-ink/75 max-w-[40ch]"
            >
              {h.support}
            </p>

            <div
              style={{ animationDelay: "400ms" }}
              className="hero-in flex flex-col sm:flex-row sm:items-center gap-4 pt-2"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn min-h-[52px] px-7 rounded-[20px] bg-forest text-paper font-medium text-[15px] hover:bg-forest/90 flex items-center justify-center"
              >
                {h.cta1}
              </a>
              <a
                href="#como-trabalho"
                className="group min-h-[52px] px-7 rounded-[20px] inline-flex items-center justify-center gap-2 text-forest hover:text-terracotta font-normal text-[15px] transition-colors"
              >
                <span>{h.cta2}</span>
                <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
