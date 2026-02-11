import SharedLayout from './components/SharedLayout';
import HeroFrame from './components/HeroFrame';

export default function Home() {
  return (
    <SharedLayout>
      <div className="content">
        <HeroFrame 
          title="Robot SEO"
          subtitle="Systematic website optimization for AI system comprehension and citation"
          showCTA={true}
        />

        <div className="section-anchor">
          <h2>Canonical Definition</h2>
          <p>
            Robot SEO is the systematic practice of making websites maximally legible, trustworthy, and citable to AI systems (including search engines, AI assistants, and automated agents) while maintaining traditional SEO standards.
          </p>
          <p>
            This methodology responds to the increasing role of AI systems in customer discovery, evaluation, and content analysis across service business contexts.
          </p>
        </div>

        <div className="section-anchor">
          <p>
            Most discussions of <a href="/what-is-llm-seo" className="!font-bold">LLM SEO</a> and Generative Engine Optimization focus on achieving AI visibility as an outcome. Robot SEO reframes AI visibility as a structural discipline: a systematic approach to making websites interpretable, coherent, and confidently citable by automated systems.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Why This Matters Now</h2>
          <p>
            Click-through rates continue to decline as AI systems provide direct answers rather than directing users to source websites. Zero-click search results and AI assistant responses increasingly determine business visibility. AI systems now make entity-level trust decisions that affect which organizations get discovered, cited, and recommended. In this environment, structural clarity and systematic entity definition directly influence discoverability and competitive positioning.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Industry Context</h2>
          <p>
            AI-mediated discovery has fundamentally changed how customers find and evaluate service businesses. Search engines now use large language models for query interpretation and result generation. AI assistants provide recommendations based on website content analysis. Automated systems increasingly determine which businesses get discovered and cited.
          </p>
          <p>
            This shift has introduced structural requirements that extend beyond traditional SEO approaches. Businesses must now optimize for machine comprehension alongside human readability. Understanding <a href="/ai-recommendations" className="!font-bold">how AI systems make recommendation decisions</a> has become essential for sustained visibility.
          </p>
        </div>

        <div className="section-anchor">
          <h2>The Gap in Existing Approaches</h2>
          <p>
            Traditional SEO focuses primarily on search engine ranking factors and human user experience. While effective for its intended purposes, traditional SEO does not address the specific requirements of modern AI systems.
          </p>
          <p>
            Modern AI systems require consistent entity modeling across all pages, structural clarity that supports automated navigation, citation confidence through explicit scope boundaries, and systematic information architecture that enables reliable content interpretation. Current SEO practices address these requirements only incidentally, without systematic enforcement.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Robot SEO vs LLM SEO and GEO</h2>
          <p>
            <strong>LLM SEO</strong> and <strong>GEO (Generative Engine Optimization)</strong> describe the objective of achieving AI visibility through content optimization and format adjustments that AI systems can parse and reformulate.
          </p>
          <p>
            <strong>Robot SEO</strong> defines the architectural discipline required to achieve AI comprehension reliably. While LLM SEO and GEO focus on content-level optimization, Robot SEO establishes the systematic technical foundation—consistent entity modeling, structural clarity, and explicit information architecture—that enables AI systems to interpret, trust, and cite website content with confidence.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Methodology Summary</h2>
          <p>
            Robot SEO implementation involves systematic assessment and optimization of website technical foundation, content structure, and entity definition. The <a href="/how-it-works" className="!font-bold">implementation process</a> prioritizes machine readability without compromising human usability.
          </p>
          <p>
            Key areas include semantic HTML structure optimization, consistent entity definitions across all content, clear information architecture, and implementation of structured data that supports automated analysis and citation. These <a href="/technical-standards" className="!font-bold">technical standards</a> form the foundation for reliable AI system interpretation.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Applicability</h2>
          <p>
            Robot SEO is most immediately applicable to service businesses where AI systems increasingly mediate customer discovery and evaluation processes. Primary applications include:
          </p>
          <ul>
            <li>Professional services dependent on organic search visibility</li>
            <li>Businesses requiring AI assistant recommendations</li>
            <li>Organizations where automated content analysis affects lead generation</li>
            <li>Service providers where technical precision influences customer confidence</li>
          </ul>
          <p>
            Robot SEO is generally less applicable to e-commerce product catalogs, content marketing strategies, local businesses focused on physical locations, or high-volume transactional websites.
          </p>
          <p>
            Robot SEO is not a replacement for traditional SEO practices, does not guarantee improved rankings or traffic, and cannot resolve poor service delivery or fundamental business issues.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Engagement Path</h2>
          <p>
            Implementation follows a systematic process: preliminary review determines technical foundation suitability, formal audit evaluates current state and requirements, implementation applies Robot SEO methodology according to specifications, and verification confirms standards compliance.
          </p>
          <p>
            Each engagement begins with assessment of technical feasibility and business model alignment. No guarantees are made regarding traffic or ranking improvements. Results depend on implementation quality and market context.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Request an Evaluation</h2>
          <p>
            Organizations requiring technical assessment of Robot SEO applicability may request preliminary evaluation of their current implementation status and business model alignment.
          </p>
          <div className="cta-section">
            <a href="/contact" className="cta-primary">Request an Evaluation</a>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
