import { PageHero } from "@/components/common/PageHero";
import { getTranslations } from "next-intl/server";
import { AboutCompanyOverview } from "./sections/AboutCompanyOverview";
import { AboutFounderMessage } from "./sections/AboutFounderMessage";
import { AboutVisionMission } from "./sections/AboutVisionMission";
import { AboutCoreValues } from "./sections/AboutCoreValues";
import { AboutSafetyCommitment } from "./sections/AboutSafetyCommitment";
import { AboutOperationalStrengths } from "./sections/AboutOperationalStrengths";
import { AboutOperationalAreas } from "./sections/AboutOperationalAreas";
import { AboutCertifications } from "./sections/AboutCertifications";
import { HomeCTA } from "@/components/pages/home/sections/HomeCTA";

export async function AboutUsPage() {
  const t = await getTranslations("pages.aboutUs.index");

  return (
    <>
      <PageHero 
        title={t("title")} 
        description={t("description")} 
        label="Establishment Profile"
        centered={true}
      />
      <AboutCompanyOverview />
      <AboutFounderMessage />
      <AboutVisionMission />
      <AboutCoreValues />
      <AboutSafetyCommitment />
      <AboutOperationalStrengths />
      <AboutOperationalAreas />
      <AboutCertifications />
      <HomeCTA />
    </>
  );
}
