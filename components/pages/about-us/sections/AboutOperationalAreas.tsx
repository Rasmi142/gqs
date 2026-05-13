import { getTranslations } from "next-intl/server";
import { MapPin, Globe2 } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export async function AboutOperationalAreas() {
  const t = await getTranslations("pages.aboutUs.operationalAreas");
  
  // Explicitly casting the array since it's defined as an array of objects in en.json
  const regions = (await t.raw("regions")) as Array<{ name: string; cities: string }>;

  return (
    <section className="bg-[var(--color-primary-navy)] py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[var(--color-accent-gold)]/5 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <Reveal direction="left">
              <div className="space-y-4">
                <span className="text-[var(--color-accent-gold)] font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-2">
                  <Globe2 className="h-4 w-4" />
                  National & GCC Logistics
                </span>
                <h2 className="font-heading text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]">
                  {t("title")}
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <p className="text-xl text-white/60 font-medium leading-relaxed max-w-xl">
                {t("description")}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex items-center gap-8 p-8 glass-dark rounded-sm border border-white/5 shadow-2xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] shadow-xl">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-2xl font-black text-white italic tracking-tight">KSA Wide</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-gold)] mt-1">Full Kingdom Coverage</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <StaggerContainer staggerDelay={0.1}>
              <div className="space-y-4">
                {regions.map((region, idx) => (
                  <StaggerItem key={idx}>
                    <div className="group p-8 glass-dark border border-white/5 rounded-sm hover:border-[var(--color-accent-gold)]/50 transition-all duration-500 hover:translate-x-2">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[var(--color-accent-gold)] transition-colors">
                          {region.name}
                        </h3>
                        <div className="h-1 w-12 bg-white/10 group-hover:bg-[var(--color-accent-gold)]/50 transition-colors" />
                      </div>
                      <p className="text-white/40 text-sm font-bold uppercase tracking-widest leading-relaxed">
                        {region.cities}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
