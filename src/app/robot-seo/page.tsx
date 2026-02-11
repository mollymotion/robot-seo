import SharedLayout from '../components/SharedLayout';
import DocumentHeader from '../components/DocumentHeader';
import StandardBlock from '../components/StandardBlock';

export default function RobotSEOPage() {
  return (
    <SharedLayout>
      <div className="content">
        <DocumentHeader 
          title="Robot SEO"
          version="v1.0"
          status="Reference implementation"
          scope="Systematic methodology for optimizing websites for AI system comprehension while maintaining traditional SEO standards."
          showCTA={true}
        />

        <div className="numbered-section">
          <h2>Definition</h2>
          <StandardBlock type="definition">
            <p>
              Robot SEO is the systematic practice of making websites maximally legible, trustworthy, and citable to AI systems (including search engines, AI assistants, and automated agents) while maintaining traditional SEO standards.
            </p>
            <p>
              This definition establishes both the technical implementation and strategic approach needed to ensure websites communicate effectively with automated systems.
            </p>
          </StandardBlock>
        </div>

        <div className="numbered-section">
          <h2>Scope</h2>
          <p>
            Robot SEO applies to service businesses where AI systems increasingly mediate customer discovery and evaluation processes.
          </p>
          
          <StandardBlock type="requirement">
            <p><strong>Primary applications include:</strong></p>
            <ul>
              <li>Service businesses dependent on organic search visibility</li>
              <li>Organizations requiring AI assistant recommendations</li>
              <li>Businesses where automated content analysis affects lead generation</li>
              <li>Professional services where technical precision influences customer confidence</li>
            </ul>
          </StandardBlock>

          <StandardBlock type="limitation">
            <p><strong>Robot SEO does not apply to:</strong></p>
            <ul>
              <li>E-commerce product catalog optimization</li>
              <li>Content marketing or blog-based SEO strategies</li>
              <li>Local SEO for physical location businesses</li>
              <li>High-volume transactional websites</li>
            </ul>
          </StandardBlock>
        </div>

        <div className="numbered-section">
          <h2>What Robot SEO Is and Is Not</h2>
          
          <StandardBlock type="definition">
            <p><strong>Robot SEO is:</strong></p>
            <ul>
              <li>A systematic approach to technical website optimization</li>
              <li>An extension of traditional SEO practices</li>
              <li>A methodology for improving AI system interpretation</li>
              <li>A framework for consistent entity definition and content structure</li>
            </ul>
          </StandardBlock>

          <StandardBlock type="limitation">
            <p><strong>Robot SEO is not:</strong></p>
            <ul>
              <li>A replacement for traditional SEO practices</li>
              <li>A guarantee of improved rankings or traffic</li>
              <li>A prediction about future AI developments</li>
              <li>A method for manipulating AI systems</li>
              <li>A solution for poor service delivery or business fundamentals</li>
            </ul>
          </StandardBlock>
        </div>

        <div className="numbered-section">
          <h2>Methodology</h2>
          
          <StandardBlock type="requirement">
            <p><strong>Phase 1: Technical Foundation Assessment</strong></p>
            <ul>
              <li>HTML structure and semantic markup evaluation</li>
              <li>Information architecture analysis</li>
              <li>Content organization and entity definition review</li>
              <li>Structured data implementation assessment</li>
            </ul>
          </StandardBlock>

          <StandardBlock type="requirement">
            <p><strong>Phase 2: Entity and Content Architecture</strong></p>
            <ul>
              <li>Business entity definition clarification</li>
              <li>Service category definitions</li>
              <li>Geographic and market scope specification</li>
              <li>Content consistency implementation</li>
            </ul>
          </StandardBlock>

          <StandardBlock type="requirement">
            <p><strong>Phase 3: Technical Implementation</strong></p>
            <ul>
              <li>Semantic HTML structure optimization</li>
              <li>Schema markup implementation</li>
              <li>URL structure refinement</li>
              <li>Internal linking optimization</li>
            </ul>
          </StandardBlock>
        </div>

        <div className="numbered-section">
          <h2>Verification Criteria</h2>
          
          <StandardBlock type="requirement">
            <p><strong>Technical Implementation Verification:</strong></p>
            <ul>
              <li>Valid semantic HTML structure throughout site</li>
              <li>Consistent entity definitions across all pages</li>
              <li>Appropriate schema markup implementation</li>
              <li>Clear information hierarchy and navigation structure</li>
            </ul>
          </StandardBlock>

          <StandardBlock type="example">
            <p><strong>Content Structure Verification:</strong></p>
            <ul>
              <li>Business entity clearly defined on primary pages</li>
              <li>Service offerings consistently described</li>
              <li>Geographic scope explicitly stated</li>
              <li>Contact information properly structured</li>
            </ul>
          </StandardBlock>
        </div>

        <div className="numbered-section">
          <h2>Engagement Model</h2>
          
          <StandardBlock type="definition">
            <p><strong>Assessment Phase (5-7 business days):</strong></p>
            <p>Technical evaluation of current website structure, content organization, and AI system compatibility. Deliverable: Technical assessment document.</p>
          </StandardBlock>

          <StandardBlock type="definition">
            <p><strong>Analysis Phase (2-3 weeks):</strong></p>
            <p>Comprehensive analysis of implementation requirements and specification development. Deliverable: Implementation specification document.</p>
          </StandardBlock>

          <StandardBlock type="definition">
            <p><strong>Implementation Phase (4-6 weeks):</strong></p>
            <p>Technical implementation of Robot SEO methodology according to specifications. Deliverable: Completed technical implementation.</p>
          </StandardBlock>

          <StandardBlock type="definition">
            <p><strong>Verification Phase (1 week):</strong></p>
            <p>Verification of standards compliance and implementation quality. Deliverable: Verification report and documentation.</p>
          </StandardBlock>

          <StandardBlock type="limitation">
            <p><strong>Engagement Constraints:</strong></p>
            <ul>
              <li>Assessment available only for service businesses with existing websites</li>
              <li>Implementation requires technical website access</li>
              <li>Results dependent on business model and market context</li>
              <li>No guarantees of traffic or ranking improvements</li>
            </ul>
          </StandardBlock>
        </div>
      </div>
    </SharedLayout>
  );
}