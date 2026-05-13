import { getTranslations } from "next-intl/server";
import { Zap, Truck, Timer } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

const strengthIcons = [Truck, Zap, Timer];

export async function AboutOperationalStrengths() {
  const t = await getTranslations("pages.aboutUs.operationalStrengths");
  const items = (await t.raw("items")) as Array<{ title: string; value: string }>;

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="font-heading text-3xl lg:text-4xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight">
              {t("title")}
            </h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent-gold)] mx-auto" />
            <p className="text-gray-500 font-medium text-lg pt-2">{t("description")}</p>
          </div>
        </Reveal>

        <StaggerContainer staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {items.map((item, idx) => {
              const Icon = strengthIcons[idx];
              return (
                <StaggerItem key={idx}>
                  <div className="group relative p-10 bg-[var(--color-surface-soft)] rounded-sm border border-[var(--color-border)] hover:bg-[var(--color-primary-navy)] transition-all duration-700 overflow-hidden h-full flex flex-col items-center text-center">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-gold)] opacity-[0.03] -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" />
                    
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-sm bg-white text-[var(--color-primary-navy)] group-hover:bg-[var(--color-accent-gold)] transition-all duration-500 shadow-xl group-hover:rotate-6">
                      <Icon className="h-8 w-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-3xl lg:text-4xl font-black text-[var(--color-primary-navy)] group-hover:text-white uppercase tracking-tighter transition-colors">
                        {item.value}
                      </p>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent-gold)]">
                        {item.title}
                      </p>
                    </div>
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
