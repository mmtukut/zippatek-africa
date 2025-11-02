import { Hero } from "@/components/sections/homepage/hero";
import { ProblemStatement } from "@/components/sections/homepage/problem-statement";
import { ProductShowcase } from "@/components/sections/homepage/product-showcase";
import { WhyZippatek } from "@/components/sections/homepage/why-zippatek";
import { ImpactMetrics } from "@/components/sections/homepage/impact-metrics";
import { TeamPreview } from "@/components/sections/homepage/team-preview";
import { PressRecognition } from "@/components/sections/homepage/press-recognition";
import { FinalCta } from "@/components/sections/homepage/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <ProductShowcase />
      <WhyZippatek />
      <ImpactMetrics />
      <TeamPreview />
      <PressRecognition />
      <FinalCta />
    </>
  );
}
