import SharedLayout from '../../components/SharedLayout';
import HeroFrame from '../../components/HeroFrame';
import Link from 'next/link';

export default function ContactSuccessPage() {
  return (
    <SharedLayout>
      <div className="content">
        <HeroFrame 
          title="Request received"
          subtitle="We'll conduct a preliminary review and respond within one business day.

If your site is a strong candidate, we'll follow up with details regarding a formal audit and associated pricing.

Each submission is reviewed manually."
        />

        <div className="section-anchor">
          <h2>While You Wait</h2>
          <p>
            Learn more about how Robot SEO works and what's required for implementation:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <Link href="/how-it-works" className="cta-secondary">
              How Robot SEO Works
            </Link>
            <Link href="/faq-and-limits" className="cta-secondary">
              FAQ & Limitations
            </Link>
            <Link href="/technical-standards" className="cta-secondary">
              Technical Standards
            </Link>
          </div>
        </div>

        <div className="section-anchor">
          <h2>Questions About Your Request?</h2>
          <p>
            If you have questions about the evaluation process or need to modify your request, you can contact us directly.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <Link href="/" className="cta-primary">
              Return to Homepage
            </Link>
            <Link href="/contact" className="cta-secondary">
              Submit Another Request
            </Link>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}