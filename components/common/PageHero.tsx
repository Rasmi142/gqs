import { Reveal } from "@/components/ui/motion-reveal";

interface PageHeroProps {
  title: string;
  description: string;
  label: string;
  centered?: boolean;
}

export function PageHero({ title, description, label, centered = true }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--color-primary-navy)] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-accent-gold)] opacity-[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-gold)]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
          <Reveal direction={centered ? "up" : "left"}>
            <span className="inline-block text-[var(--color-accent-gold)] font-bold uppercase tracking-[0.3em] text-xs mb-6">
              {label}
            </span>
          </Reveal>
          
          <Reveal direction={centered ? "up" : "left"} delay={0.2}>
            <h1 className="font-heading text-4xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tight">
              {title}<span className="text-[var(--color-accent-gold)]">.</span>
            </h1>
          </Reveal>
          
          <Reveal direction={centered ? "up" : "left"} delay={0.4}>
            <div className={`mt-8 ${centered ? 'mx-auto' : 'border-l-2 border-[var(--color-accent-gold)]/30 pl-8'}`}>
              <p className="text-lg text-white/60 font-medium leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
