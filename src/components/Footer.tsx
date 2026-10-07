import { clinic } from "../data/clinic";

export default function Footer() {
  const a = clinic.address;
  const f = clinic.footer;
  return (
    <footer id="site-footer" className="bg-forest text-paper/80 pt-12 pb-8 border-t border-moss/30">
      <div className="max-w-editorial mx-auto px-6 md:px-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-2">
            <p className="font-fraunces text-2xl text-paper font-normal">{clinic.name}</p>
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-sage">{clinic.role}</p>
            <p className="text-[13px] text-paper/70">Registro Profissional Ativo: {clinic.crp}</p>
          </div>

          <div className="space-y-2 text-[14px]">
            <p className="font-medium text-paper">Consultório Presencial</p>
            <p className="text-paper/75">
              {a.building}, {a.street}
            </p>
            <p className="text-paper/75">
              {a.city.replace("—", "-")}, CEP {a.cep}
            </p>
            <a
              href={clinic.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage hover:underline text-[13px] inline-block pt-1"
            >
              Ver no mapa ↗
            </a>
          </div>

          <div className="space-y-2 text-[14px]">
            <p className="font-medium text-paper">Atendimento Online</p>
            <p className="text-paper/75">{f.onlineText}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-moss/30 text-[14px]">
          {f.links.map((l) => (
            <a key={l.href} href={l.href} className="text-paper/70 hover:text-paper transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="p-6 rounded-[20px] bg-moss/20 border border-sage/30 space-y-2">
          <p className="font-medium text-[14px] text-sage tracking-wider uppercase">{f.crisisTitle}</p>
          <p className="text-[14px] text-paper/85 leading-relaxed">{f.crisisText}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-paper/60 pt-4 border-t border-moss/30 gap-2">
          <p>
            © {clinic.copyYear} {clinic.name} · {clinic.crp} · Todos os direitos reservados.
          </p>
          <p className="italic text-paper/70">{f.ethics}</p>
        </div>
      </div>
    </footer>
  );
}
