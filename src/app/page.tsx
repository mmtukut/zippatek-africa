import { Hero } from "@/components/sections/homepage/hero";
import { CompanyOverview } from "@/components/sections/homepage/company-overview";
import { ProblemStatement } from "@/components/sections/homepage/problem-statement";
import { ProductShowcase } from "@/components/sections/homepage/product-showcase";
import { HowPropabridgeWorks } from "@/components/sections/homepage/how-propabridge-works";
import { CitiesSection } from "@/components/sections/homepage/cities-section";
import { WhyZippatek } from "@/components/sections/homepage/why-zippatek";
import { ImpactMetrics } from "@/components/sections/homepage/impact-metrics";
import { TeamPreview } from "@/components/sections/homepage/team-preview";
import { PressRecognition } from "@/components/sections/homepage/press-recognition";
import { FinalCta } from "@/components/sections/homepage/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ProblemStatement />
      <ProductShowcase />
      <HowPropabridgeWorks />
      <CitiesSection />
      <WhyZippatek />
      <ImpactMetrics />
      <TeamPreview />
      <PressRecognition />
      <FinalCta />
    </>
  );
}
