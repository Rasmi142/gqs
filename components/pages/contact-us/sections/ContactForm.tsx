import { getTranslations } from "next-intl/server";
import { Send, User, Mail, MessageSquare, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/motion-reveal";

export async function ContactForm() {
  const t = await getTranslations("pages.contactUs.index");

  return (
    <section className="bg-[var(--color-surface-soft)] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-10">
            <Reveal direction="left">
              <div className="space-y-4">
                <span className="text-[var(--color-accent-gold)] font-bold uppercase tracking-[0.3em] text-xs">Direct Inquiry</span>
                <h2 className="font-heading text-4xl lg:text-5xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight leading-tight">
                  Send Us A Message
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="space-y-6">
                <p className="text-xl text-gray-500 font-medium leading-relaxed">
                  Have a specific project in mind? Our team is ready to provide you with expert logistical advice and equipment support.
                </p>
                <div className="flex items-center gap-4 p-6 bg-white border border-[var(--color-border)] rounded-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--color-accent-gold)]/10 text-[var(--color-accent-gold)]">
                    <span className="font-black text-lg">24/7</span>
                  </div>
                  <p className="text-sm font-bold text-[var(--color-primary-navy)] uppercase tracking-wide">
                    Emergency Support Available For GCC Projects
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right">
            <form className="bg-white p-8 lg:p-12 shadow-2xl rounded-sm border border-gray-100 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-200 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input type="text" placeholder="Project Inquiry" className="w-full bg-gray-50 border border-gray-200 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-gray-400" />
                  <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full bg-gray-50 border border-gray-200 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors resize-none" />
                </div>
              </div>

              <button type="submit" className="w-full group bg-[var(--color-primary-navy)] text-white py-5 rounded-sm font-black uppercase tracking-[0.2em] text-sm hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-primary-navy)] transition-all duration-500 shadow-xl shadow-navy/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                Send Message
                <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
