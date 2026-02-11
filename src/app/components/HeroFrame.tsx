import Link from 'next/link';

interface HeroFrameProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function HeroFrame({ title, subtitle, showCTA = false }: HeroFrameProps) {
  return (
    <section className="hero-frame" role="banner">
      <div className="hero-content">
        <h1>{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {showCTA && (
          <div className="hero-cta">
            <Link href="/contact" className="cta-primary">
              Request an evaluation
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}