import SharedLayout from '../components/SharedLayout';
import HeroFrame from '../components/HeroFrame';
import CTABand from '../components/CTABand';

export default function HowItWorksPage() {
  return (
    <SharedLayout>
      <div className="content">
        <HeroFrame 
          title="How It Works"
          subtitle="Disciplined methodology for implementing architectural clarity"
        />

        <div className="section-anchor">
          <h2>Strategic Framework</h2>
          <p>
            <a href="/" className="!font-bold">Robot SEO</a> implements disciplined architectural correction rather than experimental ranking tactics.
          </p>
          <p>
            The methodology enforces structural clarity required for consistent AI system interpretation.
          </p>
        </div>

        <div className="process-section">
          <h2>Phase 1: Assessment</h2>
          <p>
            Technical evaluation identifies architectural deficiencies in:
          </p>
          <ul>
            <li>Entity definition</li>
            <li>Information hierarchy</li>
            <li>Content organization</li>
            <li>Structured data consistency</li>
            <li>Semantic markup integrity</li>
          </ul>
          <p>
            Findings are documented with prioritized structural corrections.
          </p>
        </div>

        <div className="process-section">
          <h2>Phase 2: Structural Implementation</h2>
          <p>
            Identified deficiencies are corrected through:
          </p>
          <ul>
            <li>Entity definition standardization</li>
            <li>Information hierarchy reconstruction</li>
            <li>Service taxonomy alignment</li>
            <li>Structured data implementation</li>
            <li>Semantic markup correction</li>
          </ul>
          <p>
            The objective is architectural coherence, not incremental optimization, following established <a href="/technical-standards" className="!font-bold">architectural standards</a>.
          </p>
        </div>

        <div className="process-section">
          <h2>Phase 3: Verification & Monitoring</h2>
          <p>
            Implemented corrections are validated through:
          </p>
          <ul>
            <li>Structured data testing</li>
            <li>Entity consistency verification</li>
            <li>Technical validation</li>
            <li>Ongoing monitoring</li>
          </ul>
          <p>
            This ensures sustained structural clarity rather than temporary adjustment.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Implementation Approach</h2>
          <p>
            Sequential implementation establishes architectural foundation before advancing to further modifications.
          </p>
          <p>
            You receive documented structural analysis and implemented technical corrections with maintenance guidelines for ongoing compliance. All work operates within <a href="/faq-and-limits" className="!font-bold">clearly defined limitations and expectations</a>.
          </p>
        </div>

        <CTABand message="Evaluate whether your website requires technical modification." />
      </div>
    </SharedLayout>
  );
}