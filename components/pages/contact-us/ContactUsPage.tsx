import { PageHero } from "@/components/common/PageHero";
import { getTranslations } from "next-intl/server";
import { ContactDetails } from "./sections/ContactDetails";
import { ContactForm } from "./sections/ContactForm";
import { ContactMap } from "./sections/ContactMap";

export async function ContactUsPage() {
  const t = await getTranslations("pages.contactUs.index");

  return (
    <>
      <PageHero 
        title={t("title")} 
        description={t("description")} 
        label="Get In Touch"
        centered={true}
      />
      <ContactDetails />
      <ContactForm />
      <ContactMap />
    </>
  );
}
