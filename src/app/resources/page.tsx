const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-primary-900 text-white py-24">
        <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

export default function ResourcesPage() {
    return (
        <div>
            <PageHeader title="Resources" subtitle="Insights, case studies, and documentation from the Zippatek team." />
            <div className="container py-24 text-center">
                <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
                <p className="text-muted-foreground">We're preparing valuable resources to share. Check back later for our blog, case studies, and more.</p>
            </div>
        </div>
    );
}
