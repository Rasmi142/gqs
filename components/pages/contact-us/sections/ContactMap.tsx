import { Reveal } from "@/components/ui/motion-reveal";

export async function ContactMap() {
  return (
    <section className="bg-white">
      <Reveal direction="up">
        <div className="h-[400px] lg:h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114389.0494481352!2d50.04746410406856!3d26.371360155099313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb0ed5642a4b%3A0x7d6f584e037b5f90!2sDammam%20Industrial%20City!5e0!3m2!1sen!2ssa!4v1715610000000!5m2!1sen!2ssa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-8 left-8 p-6 bg-[var(--color-primary-navy)] text-white rounded-sm shadow-2xl border border-white/5 space-y-4 max-w-xs">
            <h3 className="text-xl font-black uppercase tracking-tight">Main HQ</h3>
            <p className="text-sm opacity-60 leading-relaxed font-medium">
              Gulf Quality Structures Est.<br />
              Industrial Area 1, Dammam 34326<br />
              Kingdom of Saudi Arabia
            </p>
            <div className="h-1 w-12 bg-[var(--color-accent-gold)]" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
