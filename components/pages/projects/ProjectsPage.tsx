import { PageHero } from "@/components/common/PageHero";
import { getTranslations } from "next-intl/server";
import { ProjectsList } from "./sections/ProjectsList";
import { HomeCTA } from "@/components/pages/home/sections/HomeCTA";

export async function ProjectsPage() {
  const t = await getTranslations("pages.projects.index");

  return (
    <>
      <PageHero 
        title={t("title")} 
        description={t("description")} 
        label="Industrial Excellence"
        centered={true}
      />
      <ProjectsList />
      <HomeCTA />
    </>
  );
}
