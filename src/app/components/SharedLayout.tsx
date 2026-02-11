import Navigation from './Navigation';

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-8 pb-16">
        <Navigation />
        <main role="main">
          {children}
        </main>
        <footer className="mt-16 pt-8 border-t border-black text-center">
          <p className="text-sm text-gray-500">
            © 2026 Robot SEO<br />
            Developed and maintained by <a href="https://www.mollymotion.dev/" className="!font-bold text-gray-600 hover:text-gray-800 underline">Molly Evans</a>
          </p>
        </footer>
      </div>
    </div>
  );
}