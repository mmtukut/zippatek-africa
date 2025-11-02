import { ContactForm } from "./contact-form";
import { Suspense } from 'react';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-primary-900 text-white pt-32 pb-16">
        <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

export default function ContactPage() {
    return (
        <div>
            <PageHeader title="Contact Us" subtitle="We'd love to hear from you. Let's build the future together." />
            <div className="py-24 bg-background">
                <div className="container max-w-2xl mx-auto">
                    <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg border">
                       <Suspense fallback={<div>Loading...</div>}>
                          <ContactForm />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}
