import { getTranslations } from "next-intl/server";
import { ShieldCheck, Zap, Handshake, Award } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

const valueIcons = {
  safety: ShieldCheck,
  reliability: Zap,
  integrity: Handshake,
  excellence: Award,
} as const;

export async function AboutCoreValues() {
  const t = await getTranslations("pages.aboutUs.coreValues");
  const keys = ["safety", "reliability", "integrity", "excellence"] as const;

  return (
    <section className="bg-[var(--color-surface-soft)] py-24 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="font-heading text-3xl lg:text-4xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight">
              {t("title")}
            </h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent-gold)] mx-auto" />
            <p className="text-gray-500 font-medium text-lg pt-2">{t("description")}</p>
          </div>
        </Reveal>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keys.map((key) => {
              const Icon = valueIcons[key];
              return (
                <StaggerItem key={key}>
                  <div className="group bg-white p-10 rounded-sm border border-[var(--color-border)] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center">
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-sm bg-[var(--color-primary-navy)] text-[var(--color-accent-gold)] group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500 shadow-lg">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-primary-navy)] uppercase tracking-tight mb-4">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {t(`items.${key}.description`)}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
