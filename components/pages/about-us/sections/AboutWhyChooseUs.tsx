import { getTranslations } from "next-intl/server";
import { CheckCircle2, Award, Zap, Shield, Users } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export async function AboutWhyChooseUs() {
  const t = await getTranslations("pages.aboutUs.whyChooseUs");
  const homeT = await getTranslations("pages.home.whyChooseUs");

  const highlights = [
    { icon: Award, key: "solutions" },
    { icon: Zap, key: "mobilization" },
    { icon: Shield, key: "network" },
    { icon: Users, key: "team" },
  ];

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-10">
            <Reveal direction="left">
              <div className="space-y-4">
                <span className="text-[var(--color-accent-gold)] font-bold uppercase tracking-[0.3em] text-xs">The GQS Advantage</span>
                <h2 className="font-heading text-3xl lg:text-4xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight leading-[1.1]">
                  {t("title")}
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
              </div>
            </Reveal>
            
            <Reveal direction="left" delay={0.2}>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                {t("description")}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="p-8 bg-[var(--color-primary-navy)] rounded-sm text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-gold)] opacity-[0.05] -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl" />
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent-gold)] mb-2">Operational Commitment</p>
                <p className="text-lg font-medium opacity-80 leading-relaxed italic">
                  "Delivering excellence through safety, speed, and reliability across every industrial project."
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={idx}>
                      <div className="p-8 rounded-sm border border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-all duration-500 group bg-white shadow-sm hover:shadow-xl">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--color-surface-soft)] text-[var(--color-primary-navy)] group-hover:bg-[var(--color-accent-gold)] transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[var(--color-primary-navy)] uppercase tracking-tight mb-3">
                          {homeT(`items.${item.key}.title`)}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                          {homeT(`items.${item.key}.description`)}
                        </p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
