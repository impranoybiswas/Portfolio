import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center h-[calc(100vh-69px)] w-full px-4 text-center bg-base-100">
      {/* Large decorative 404 */}
      <h1 className="text-9xl font-extrabold text-primary opacity-20">
        404
      </h1>
      
      <div className="absolute flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          Lost in Space?
        </h2>
        <p className="text-gray-400 max-w-md mb-8">
          The page you’re looking for doesn’t exist or has been moved. 
          Let&apos;s get you back to the portfolio.
        </p>
        
        <Link 
          href="/" 
          className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/10"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}