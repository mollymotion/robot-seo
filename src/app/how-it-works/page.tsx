import SharedLayout from '../components/SharedLayout';
import HeroFrame from '../components/HeroFrame';
import CTABand from '../components/CTABand';

export default function HowItWorksPage() {
  return (
    <SharedLayout>
      <div className="content">
        <HeroFrame 
          title="How It Works"
          subtitle="A systematic, repeatable methodology for optimizing websites for AI system comprehension"
        />

        <div className="section-anchor">
          <h2>The Robot SEO Process</h2>
          <p>
            Robot SEO follows a systematic, repeatable methodology designed to optimize websites for AI system comprehension while maintaining traditional SEO effectiveness.
          </p>
          <p>
            The process emphasizes technical precision and structural clarity rather than subjective optimization decisions.
          </p>
        </div>

        <div className="process-section">
          <h2>Phase 1: Technical Foundation Assessment</h2>

          <h3>Current State Analysis</h3>
          <p>
            We evaluate your website's existing technical infrastructure against AI system requirements:
          </p>
          <ul>
            <li>HTML structure and semantic markup quality</li>
            <li>Site architecture and information hierarchy</li>
            <li>Content organization and entity definition</li>
            <li>Technical performance metrics</li>
            <li>Existing structured data implementation</li>
            <li>Mobile responsiveness and accessibility standards</li>
          </ul>

          <h3>Gap Identification</h3>
          <p>
            This assessment identifies specific areas where AI systems may struggle to understand or confidently cite your website content.
          </p>

          <h3>Documentation</h3>
          <p>
            All findings are documented with specific technical recommendations and implementation priorities.
          </p>
        </div>

        <div className="process-section">
          <h2>Phase 2: Entity and Content Architecture</h2>

        <h3>Entity Definition</h3>
        <p>
          We establish clear, consistent definitions for your business, services, and key concepts throughout your website:
        </p>
        <ul>
          <li>Primary business entity clarification</li>
          <li>Service category definitions</li>
          <li>Geographic and market scope specification</li>
          <li>Relationship mapping between services and business focus</li>
        </ul>

        <h3>Information Architecture Optimization</h3>
        <p>
          Website structure is refined to support AI system navigation and understanding:
        </p>
        <ul>
          <li>Logical page hierarchy development</li>
          <li>Clear navigation paths and internal linking</li>
          <li>Content categorization that aligns with AI system expectations</li>
          <li>URL structure that reflects information organization</li>
        </ul>

        <h3>Content Consistency Implementation</h3>
        <p>
          Terminology and messaging are standardized across all website content to eliminate confusion for automated analysis.
        </p>
        </div>

        <div className="process-section">
          <h2>Phase 3: Technical Implementation</h2>

          <h3>HTML and Markup Optimization</h3>
          <p>
            Technical code is refined for maximum AI system compatibility:
          </p>
          <ul>
            <li>Semantic HTML structure implementation</li>
            <li>Proper heading hierarchy and content organization</li>
            <li>Clean, crawlable code that minimizes JavaScript dependencies</li>
            <li>Technical performance optimization for automated access</li>
          </ul>

        <h3>Structured Data Integration</h3>
        <p>
          JSON-LD structured data is implemented to provide explicit context for AI systems:
        </p>
        <ul>
          <li>Business entity markup</li>
          <li>Service descriptions and categorization</li>
          <li>Location and contact information specification</li>
          <li>Review and rating data where applicable</li>
        </ul>

        <h3>Citation-Ready Content Formatting</h3>
        <p>
          Content is structured to facilitate confident citation by AI systems:
        </p>
        <ul>
          <li>Clear attribution and source information</li>
          <li>Factual claims with appropriate context</li>
          <li>Professional formatting that supports automated analysis</li>
          <li>Logical content flow that AI systems can follow</li>
        </ul>
        </div>

        <div className="process-section">
          <h2>Phase 4: Quality Assurance and Testing</h2>
          <h3>Technical Validation</h3>
          <p>
            All implementations are tested for proper functionality:
          </p>
          <ul>
            <li>Structured data validation and error correction</li>
            <li>Mobile responsiveness verification</li>
            <li>Page speed and technical performance testing</li>
            <li>Accessibility compliance checking</li>
          </ul>

          <h3>AI System Testing</h3>
          <p>
            Website performance is evaluated from an AI system perspective:
          </p>
          <ul>
            <li>Crawlability and indexing verification</li>
            <li>Content interpretation accuracy assessment</li>
            <li>Entity recognition and relationship validation</li>
            <li>Citation readiness evaluation</li>
          </ul>
        </div>

        <div className="process-section">
          <h2>Phase 5: Monitoring and Maintenance</h2>
          <h3>Ongoing Assessment</h3>
          <p>
            Regular technical audits ensure continued optimal performance:
          </p>
          <ul>
            <li>Quarterly technical health checks</li>
            <li>Structured data accuracy verification</li>
            <li>Content consistency monitoring</li>
            <li>Performance metric tracking</li>
          </ul>

          <h3>Adaptation Support</h3>
          <p>
            As AI systems evolve, technical implementations are updated to maintain compatibility and effectiveness.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Timeline and Implementation</h2>
          <ul>
            <li><strong>Typical Project Duration:</strong> 6-12 weeks depending on website size and technical complexity</li>
            <li><strong>Implementation Phases:</strong> Sequential execution ensures each foundation is solid before proceeding</li>
            <li><strong>Testing Periods:</strong> Built into each phase to verify implementations before advancement</li>
            <li><strong>Documentation:</strong> Complete technical documentation provided at project completion</li>
          </ul>
        </div>

        <div className="principle-block">
          <h2>What You Receive</h2>
          <ul>
            <li><strong>Technical Audit Report:</strong> Comprehensive analysis of current website status and AI system compatibility</li>
            <li><strong>Implementation Plan:</strong> Step-by-step technical modifications with priority ranking</li>
            <li><strong>Updated Website:</strong> Fully implemented Robot SEO optimizations</li>
            <li><strong>Documentation Package:</strong> Technical specifications and ongoing maintenance guidelines</li>
            <li><strong>Monitoring Setup:</strong> Systems for tracking ongoing performance and identifying future optimization needs</li>
          </ul>
        </div>

        <div className="section-anchor">
          <p>
            This systematic approach ensures that Robot SEO implementations are based on technical requirements rather than speculation about AI system preferences.
          </p>
        </div>

        <CTABand message="Learn how these methods apply to your website and get a technical evaluation tailored to your business." />
      </div>
    </SharedLayout>
  );
}