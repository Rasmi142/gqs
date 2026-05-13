import { PageHero } from "@/components/common/PageHero";
import { getTranslations } from "next-intl/server";
import { QuoteForm } from "./sections/QuoteForm";

export async function RequestAQuotePage() {
  const t = await getTranslations("pages.requestAQuote.index");

  return (
    <>
      <PageHero 
        title={t("title")} 
        description={t("description")} 
        label="Instant Estimates"
        centered={true}
      />
      <QuoteForm />
    </>
  );
}
