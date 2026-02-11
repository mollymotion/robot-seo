import Link from 'next/link';

interface CTABandProps {
  message: string;
  linkText?: string;
  linkHref?: string;
}

export default function CTABand({ message, linkText = "Request an evaluation", linkHref = "/contact" }: CTABandProps) {
  return (
    <section className="cta-band" role="region" aria-labelledby="cta-heading">
      <div className="cta-band-content">
        <p>{message}</p>
        <Link href={linkHref} className="cta-primary">
          {linkText}
        </Link>
      </div>
    </section>
  );
}