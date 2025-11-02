const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-primary-900 text-white py-24">
        <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

export default function SolutionsPage() {
    return (
        <div>
            <PageHeader title="Solutions" subtitle="Tailored solutions for governments, enterprises, and consumers." />
            <div className="container py-24 text-center">
                <h2 className="text-2xl font-bold mb-4">Tailored For You</h2>
                <p className="text-muted-foreground">Our solutions page is being crafted to showcase how Zippatek can help your organization. Please check back soon.</p>
            </div>
        </div>
    );
}
