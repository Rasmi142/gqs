import { getTranslations } from "next-intl/server";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/motion-reveal";

export async function AboutFounderMessage() {
  const t = await getTranslations("pages.aboutUs.founderMessage");

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          <Reveal direction="up">
            <div className="flex flex-col items-center text-center space-y-12">
              <div className="h-16 w-16 rounded-full bg-[var(--color-accent-gold)] flex items-center justify-center text-[var(--color-primary-navy)] shadow-xl shadow-gold/20">
                <Quote className="h-8 w-8 fill-current" />
              </div>
              
              <div className="space-y-6">
                <h2 className="font-heading text-xl lg:text-2xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight">
                  {t("title")}
                </h2>
                <p className="text-xl lg:text-2xl font-medium leading-relaxed text-gray-600 italic font-serif">
                  "{t("content")}"
                </p>
              </div>

              <div className="pt-8 border-t border-gray-100 w-full max-w-xs space-y-2">
                <p className="text-lg font-black text-[var(--color-primary-navy)] uppercase tracking-tight">
                  {t("author")}
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-gold)]">
                  {t("position")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
