import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-primary-900 text-white py-24">
        <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

export default function PressPage() {
    return (
        <div>
            <PageHeader title="Press & Media" subtitle="Resources for journalists, partners, and anyone interested in our story." />
            <div className="container py-24 text-center">
                <h2 className="text-2xl font-bold mb-4">Our Press Kit</h2>
                <p className="text-muted-foreground mb-8">Download our press kit for logos, company information, and founder bios.</p>
                <Button size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Download Press Kit
                </Button>
            </div>
        </div>
    );
}
