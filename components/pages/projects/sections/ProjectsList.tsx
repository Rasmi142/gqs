import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MapPin, Box, Truck, AlertCircle } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export async function ProjectsList() {
  const t = await getTranslations("pages.projects.index");
  const items = (await t.raw("items")) as Array<{
    id: string;
    title: string;
    scope: string;
    location: string;
    equipment: string;
    challenge: string;
    image: string;
  }>;

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.2}>
          <div className="space-y-24">
            {items.map((project, idx) => (
              <StaggerItem key={project.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                  {/* Image Column */}
                  <div className="lg:col-span-7">
                    <Link href={`/projects/${project.id}`} className="block group">
                      <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-2xl group">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                           <span className="text-white font-black uppercase tracking-[0.2em] text-xs flex items-center gap-2">View Case Study <span className="h-px w-8 bg-white" /></span>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-1 gradient-line" />
                      </div>
                    </Link>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[var(--color-accent-gold)] font-bold text-xs uppercase tracking-[0.2em]">
                        <span className="h-px w-8 bg-[var(--color-accent-gold)]" />
                        Project {idx + 1}
                      </div>
                      <h2 className="font-heading text-3xl lg:text-4xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight leading-tight">
                        {project.title}
                      </h2>
                    </div>

                    <p className="text-lg text-gray-600 font-medium leading-relaxed">
                      {project.scope}
                    </p>

                    <div className="grid grid-cols-1 gap-6 pt-4">
                      <div className="flex gap-4">
                        <div className="h-10 w-10 shrink-0 rounded-sm bg-[var(--color-surface-soft)] flex items-center justify-center text-[var(--color-primary-navy)] border border-[var(--color-border)]">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent-gold)] mb-1">Location</p>
                          <p className="text-sm font-bold text-[var(--color-primary-navy)] uppercase">{project.location}</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="h-10 w-10 shrink-0 rounded-sm bg-[var(--color-surface-soft)] flex items-center justify-center text-[var(--color-primary-navy)] border border-[var(--color-border)]">
                          <Truck className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent-gold)] mb-1">Equipment Used</p>
                          <p className="text-sm font-bold text-gray-500 uppercase">{project.equipment}</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="h-10 w-10 shrink-0 rounded-sm bg-[var(--color-surface-soft)] flex items-center justify-center text-[var(--color-accent-gold)] border border-[var(--color-accent-gold)]/20 shadow-lg shadow-gold/5">
                          <AlertCircle className="h-5 w-5" />
                        </div>
                        <div className="p-4 bg-[var(--color-surface-soft)] rounded-sm border border-[var(--color-border)] italic">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary-navy)] mb-1">Challenge Solved</p>
                          <p className="text-xs font-medium text-gray-500 leading-relaxed">{project.challenge}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
