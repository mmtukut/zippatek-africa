import { ProductShowcase } from "@/components/sections/homepage/product-showcase";

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-primary-900 text-white py-24">
        <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

export default function ProductsPage() {
    return (
        <div>
            <PageHeader title="Our Products" subtitle="Innovative platforms designed to solve Africa's unique real estate challenges." />
            <div className="bg-primary-900">
             <ProductShowcase />
            </div>
        </div>
    );
}
