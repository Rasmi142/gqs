import { getTranslations } from "next-intl/server";
import { ShieldAlert, CheckCircle } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export async function AboutSafetyCommitment() {
  const t = await getTranslations("pages.aboutUs.safetyCommitment");
  const points = (await t.raw("points")) as string[];

  return (
    <section className="bg-[var(--color-primary-navy)] py-24 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal direction="left">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[var(--color-accent-gold)] font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4" />
                  HSE Compliance
                </span>
                <h2 className="font-heading text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                  {t("title")}
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
              </div>
              <p className="text-xl text-white/60 leading-relaxed font-medium">
                {t("description")}
              </p>
            </div>
          </Reveal>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 gap-4">
              {points.map((point, idx) => (
                <StaggerItem key={idx}>
                  <div className="group p-6 glass-dark rounded-sm border border-white/5 hover:border-[var(--color-accent-gold)]/30 transition-all duration-500 flex items-center gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-white/5 text-[var(--color-accent-gold)] group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-primary-navy)] transition-colors">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-[var(--color-accent-gold)] transition-colors">
                      {point}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
