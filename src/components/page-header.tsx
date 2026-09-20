export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-primary-900 text-white pt-32 pb-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}
