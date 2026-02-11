import Navigation from './Navigation';

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Navigation />
        <main role="main">
          {children}
        </main>
      </div>
    </div>
  );
}