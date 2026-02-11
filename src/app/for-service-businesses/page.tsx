import SharedLayout from '../components/SharedLayout';
import HeroFrame from '../components/HeroFrame';
import CTABand from '../components/CTABand';

export default function ForServiceBusinessesPage() {
  return (
    <SharedLayout>
      <div className="content">
        <HeroFrame 
          title="For Service Businesses"
          subtitle="Understanding why service businesses need Robot SEO and how AI systems evaluate service providers"
        />

        <div className="section-anchor">
          <h2>Service Business Applicability</h2>
          <p>
            <a href="/" className="!font-bold">Robot SEO</a> is most immediately applicable to service businesses, where structural deficiencies most visibly limit AI system comprehension.
          </p>
          <p>
            Service websites frequently exhibit:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>Ambiguous business boundaries</li>
            <li>Inconsistent service definitions</li>
            <li>Overlapping terminology</li>
            <li>Fragmented authority signals</li>
            <li>Information architecture based on internal structure rather than logical service relationships</li>
          </ul>
          <p>
            These issues reduce AI system confidence in categorization and citation, often reflecting violations of fundamental <a href="/technical-standards" className="!font-bold">technical standards</a> for automated interpretation.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Common Structural Deficiencies</h2>
          
          <p><strong>Entity Ambiguity</strong></p>
          <p>
            Business identity, geographic scope, and service boundaries are often inconsistently defined across pages. AI systems struggle to form a stable understanding of the entity.
          </p>

          <p><strong>Service Taxonomy Fragmentation</strong></p>
          <p>
            Service descriptions vary without systematic categorization, preventing coherent interpretation of the full service portfolio.
          </p>

          <p><strong>Information Architecture Misalignment</strong></p>
          <p>
            Navigation and hierarchy frequently reflect internal organization rather than logical service relationships, limiting systematic AI interpretation.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Structural Correction Principles</h2>
          
          <p>
            Robot SEO addresses these deficiencies through:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>Explicit entity definition with defined scope</li>
            <li>Standardized service taxonomy</li>
            <li>Consistent terminology enforcement</li>
            <li>Structured authority documentation</li>
            <li>Logical information hierarchy</li>
          </ul>
          <p>
            These corrections enable systematic AI interpretation rather than surface-level optimization.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Structural Outcomes</h2>
          
          <p>
            When architectural clarity is enforced:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>AI systems categorize the business more accurately</li>
            <li>Service offerings are interpreted as coherent portfolios</li>
            <li>Citation confidence increases</li>
            <li>Entity recognition stabilizes across systems</li>
          </ul>
          <p>
            These structural changes create the technical foundation required for sustained AI comprehension.
          </p>
        </div>

        <CTABand message="Evaluate whether your website exhibits these structural deficiencies through a professional assessment." />
        <div className="mt-8 text-center">
          <a href="/how-it-works" className="!font-bold text-sm text-gray-600 hover:text-gray-800">Learn about the evaluation process</a>
        </div>
      </div>
    </SharedLayout>
  );
}