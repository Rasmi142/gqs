import { getTranslations } from "next-intl/server";
import { Target, Lightbulb, Compass } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export async function AboutVisionMission() {
  const t = await getTranslations("pages.home");

  return (
    <section className="bg-[var(--color-primary-navy)] py-24 lg:py-32 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-accent-gold) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-[var(--color-accent-gold)] font-bold uppercase tracking-[0.3em] text-xs">Our Purpose</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">Strategic Direction</h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent-gold)] mx-auto" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal direction="left">
            <div className="glass-dark p-10 lg:p-12 rounded-sm border-l-4 border-l-[var(--color-accent-gold)] h-full relative group">
              <Lightbulb className="absolute top-10 right-10 h-32 w-32 text-white opacity-[0.02] group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] shadow-xl">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-black text-white uppercase tracking-tight">
                    {t("vision.title")}
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-white/70 font-medium italic">
                  "{t("vision.description")}"
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="glass-dark p-10 lg:p-12 rounded-sm border-l-4 border-l-[var(--color-accent-gold)] h-full relative group">
              <Target className="absolute top-10 right-10 h-32 w-32 text-white opacity-[0.02] group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] shadow-xl">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-black text-white uppercase tracking-tight">
                    {t("mission.title")}
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-white/70 font-medium italic">
                  "{t("mission.description")}"
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
