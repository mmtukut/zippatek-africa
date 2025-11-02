import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto text-center py-24">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">The page you are looking for does not exist.</p>
      <Link href="/" className="text-primary-500 hover:underline mt-8 inline-block">
        Go back to the homepage
      </Link>
    </div>
  );
}
