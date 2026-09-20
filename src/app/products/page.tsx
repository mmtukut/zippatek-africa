import { ProductShowcase } from "@/components/sections/homepage/product-showcase";
import { PageHeader } from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Zippatek Digital Ltd",
  description: "Propabridge, the live verified property marketplace, and FastFind360, satellite AI for government revenue.",
};

export default function ProductsPage() {
  return (
    <div>
      <PageHeader
        title="Our products"
        subtitle="Propabridge is live for buyers and renters. FastFind360 is our government mapping platform. Both are built by Zippatek Digital Ltd."
      />
      <div className="bg-primary-900">
        <ProductShowcase />
      </div>
    </div>
  );
}
