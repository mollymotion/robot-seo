import SharedLayout from './components/SharedLayout';
import HeroFrame from './components/HeroFrame';
import DefinitionPanel from './components/DefinitionPanel';
import CTABand from './components/CTABand';

export default function Home() {
  return (
    <SharedLayout>
      <div className="content">
        <HeroFrame 
          title="Robot SEO"
          subtitle="Canonical definition and reference implementation of website optimization for AI system comprehension"
          showCTA={true}
        />
        
        <DefinitionPanel>
          <h2>Canonical Definition</h2>
          <p>
            Robot SEO is the systematic practice of making websites maximally legible, trustworthy, and citable to AI systems (including search engines, AI assistants, and automated agents) while maintaining traditional SEO standards.
          </p>
          <p>
            This website serves as both the canonical definition and reference implementation of Robot SEO methodology.
          </p>
        </DefinitionPanel>

        <div className="section-anchor">
          <h2>Reference Implementation</h2>
          <p>
            This website demonstrates Robot SEO principles in its technical implementation:
          </p>
          <ul>
            <li>Consistent entity definitions maintained across all pages</li>
            <li>Semantic HTML structure optimized for automated analysis</li>
            <li>Clear information hierarchy with systematic content organization</li>
            <li>Technical precision in terminology and scope definition</li>
            <li>Explicit limitations and application boundaries</li>
          </ul>
          <p>
            The structure, content organization, and technical implementation of this site exemplify the standards defined herein.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Application Domain</h2>
          <p>
            Robot SEO applies to service businesses where AI systems increasingly mediate customer discovery and evaluation processes.
          </p>
          <p>
            Primary applications include businesses that depend on organic search visibility, AI assistant recommendations, or automated content analysis for lead generation and customer acquisition.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Implementation Standards</h2>
          <p>
            Robot SEO implementation requires adherence to specific technical and structural requirements:
          </p>
          <ul>
            <li>Clear information architecture that supports automated navigation and understanding</li>
            <li>Consistent entity definitions and terminology across all content</li>
            <li>Technical implementation that prioritizes machine readability without compromising human usability</li>
            <li>Content structure designed for confident citation by automated systems</li>
            <li>HTMLand data standards that facilitate accurate automated analysis</li>
          </ul>
        </div>

        <div className="principle-block">
          <h2>Target Implementation Context</h2>
          <p>
            Robot SEO methodology applies most effectively in contexts involving:
          </p>
          <ul>
            <li>Service businesses with established technical SEO foundations</li>
            <li>Organizations requiring systematic approaches to website optimization</li>
            <li>Businesses where technical precision influences customer confidence</li>
            <li>Markets where AI-mediated discovery represents significant customer acquisition channels</li>
          </ul>
        </div>

        <div className="section-anchor">
          <h2>Professional Services</h2>
          <p>
            Technical assessment and implementation services are available for organizations requiring Robot SEO methodology application.
          </p>
          <p>
            Services include technical foundation assessment, implementation specification development, and verification of standards compliance.
          </p>
        </div>

        <CTABand message="Organizations requiring technical assessment of Robot SEO applicability may request professional evaluation of their current implementation status." />
      </div>
    </SharedLayout>
  );
}
