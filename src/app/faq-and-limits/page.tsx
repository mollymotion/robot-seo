import SharedLayout from '../components/SharedLayout';
import HeroFrame from '../components/HeroFrame';
import CTABand from '../components/CTABand';

export default function FAQAndLimitsPage() {
  return (
    <SharedLayout>
      <div className="content">
        <HeroFrame 
          title="FAQ and Limits"
          subtitle="Frequently asked questions and clear limitations about Robot SEO"
        />

        <div className="section-anchor">
          <h2>Core Clarifying FAQs</h2>

          <h3>How do I get my company recommended by ChatGPT?</h3>
          <p>
            <a href="/ai-recommendations" className="!font-bold text-blue-600 hover:text-blue-800">AI assistants generate recommendations</a> based on their interpretation of available website content, structured data, and external signals.
          </p>
          <p>
            <a href="/" className="!font-bold text-blue-600 hover:text-blue-800">Robot SEO establishes</a> the architectural clarity required for AI systems to accurately understand your business entity, services, and scope. This includes consistent entity definition, clear service categorization, and coherent information hierarchy across all pages.
          </p>
          <p>
            Structural clarity increases the likelihood of accurate interpretation and confident citation. It does not guarantee recommendation.
          </p>

          <h3>Is Robot SEO the same as LLM SEO or GEO?</h3>
          <p>
            LLM SEO and GEO describe the goal of AI visibility.
          </p>
          <p>
            <a href="/" className="!font-bold text-blue-600 hover:text-blue-800">Robot SEO defines</a> the architectural discipline required to achieve that goal reliably.
          </p>
          <p>
            While LLM SEO and GEO often focus on optimization tactics, Robot SEO addresses the structural layer beneath those tactics: entity modeling, schema consistency, information hierarchy, and scope clarity.
          </p>

          <h3>What results should I expect?</h3>
          <p>
            Robot SEO improves how AI systems interpret and categorize your website through systematic structural correction.
          </p>
          <p>
            Business outcomes depend on competition, service quality, and external authority signals. Robot SEO creates the technical foundation for improved AI comprehension; it does not replace broader marketing strategy.
          </p>

          <h3>How long does it take?</h3>
          <p>
            Technical implementation typically completes within several weeks.
          </p>
          <p>
            AI systems may reflect structural changes within weeks. Business impact develops over months as AI systems consistently interpret and categorize the site.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Common Misunderstandings</h2>

          <h3>Is this AI manipulation?</h3>
          <p>
            No.
          </p>
          <p>
            Robot SEO follows documented web standards and established technical practices. Any attempt to mislead AI systems contradicts its principles and undermines long-term performance.
          </p>

          <h3>Is this future-proof?</h3>
          <p>
            No optimization approach is future-proof.
          </p>
          <p>
            Robot SEO focuses on stable architectural principles that support automated interpretation. As AI systems evolve, structural adjustments may be required.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Clear Limitations</h2>

          <p>
            Robot SEO does not:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>Fix service quality issues</li>
            <li>Replace marketing strategy</li>
            <li>Improve external authority signals directly</li>
            <li>Guarantee rankings, traffic, or revenue</li>
          </ul>
          <p>
            It establishes structural clarity. Business results depend on multiple external variables.
          </p>
        </div>

        <div className="section-anchor">
          <h2>When Robot SEO Is Not Appropriate</h2>
          
          <p>
            Robot SEO is generally less applicable when:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>Business depends primarily on referrals</li>
            <li>Online discovery is not a major revenue channel</li>
            <li>There are insufficient resources for ongoing technical maintenance</li>
            <li>Expectations center on guaranteed short-term traffic increases</li>
          </ul>
        </div>

        <CTABand message="Evaluate whether Robot SEO aligns with your structural and business requirements through our" linkText="evaluation process" linkHref="/how-it-works" />
      </div>
    </SharedLayout>
  );
}