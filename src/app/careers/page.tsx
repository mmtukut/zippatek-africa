const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-primary-900 text-white py-24">
        <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

export default function CareersPage() {
    return (
        <div>
            <PageHeader title="Careers" subtitle="Join us in building the future of property intelligence in Africa." />
            <div className="container py-24 text-center">
                <h2 className="text-2xl font-bold mb-4">We're always looking for talented individuals.</h2>
                <p className="text-muted-foreground">Our careers page is currently under construction. Please check back soon for open positions.</p>
            </div>
        </div>
    );
}
