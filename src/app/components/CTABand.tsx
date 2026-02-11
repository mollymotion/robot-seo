import Link from 'next/link';

interface CTABandProps {
  message: string;
}

export default function CTABand({ message }: CTABandProps) {
  return (
    <section className="cta-band" role="region" aria-labelledby="cta-heading">
      <div className="cta-band-content">
        <p>{message}</p>
        <Link href="/contact" className="cta-primary">
          Request an evaluation
        </Link>
      </div>
    </section>
  );
}