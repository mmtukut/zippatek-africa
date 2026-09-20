import { TeamPreview } from "@/components/sections/homepage/team-preview";
import { PageHeader } from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Zippatek Digital Ltd",
  description: "Founders of Zippatek Digital Ltd: Aminu S. Muhammad (CEO) and Muhammad Muhammad Tukur (CTO).",
};

export default function TeamPage() {
  return (
    <div>
      <PageHeader
        title="Our team"
        subtitle="Aminu S. Muhammad (CEO) is a chartered estate surveyor. Muhammad Muhammad Tukur (CTO) builds the AI and satellite systems."
      />
      <TeamPreview />
    </div>
  );
}
