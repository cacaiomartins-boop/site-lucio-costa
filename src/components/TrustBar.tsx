import { clinic } from "../data/clinic";
import { Icon } from "./ui";

export default function TrustBar() {
  return (
    <section className="bg-forest text-paper py-8">
      <div className="max-w-editorial mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clinic.trust.map((t) => (
            <div key={t.title} className="flex items-center gap-4 reveal-item">
              <Icon name={t.icon} className="text-sage text-[32px] p-3 rounded-full bg-moss/40" />
              <div>
                <p className="font-medium text-[15px] text-paper">{t.title}</p>
                <p className="text-[13px] text-paper/70">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
