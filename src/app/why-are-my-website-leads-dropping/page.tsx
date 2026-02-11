import type { Metadata } from 'next'
import SharedLayout from '../components/SharedLayout'

export const metadata: Metadata = {
  title: 'Why Are My Website Leads Dropping? | Robot SEO',
  description: 'Understanding the shift to AI-mediated discovery and how structural clarity affects lead generation in the zero-click environment.',
}

export default function WhyAreMyWebsiteLeadsDroppingPage() {
  return (
    <SharedLayout>
      <article role="main" className="prose max-w-none">
        <div className="section-anchor">
          <h1>Why Are My Website Leads Dropping?</h1>
          
          <p>Many businesses are seeing:</p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>Stable or increasing traffic</li>
            <li>Declining inquiries</li>
            <li>Fewer calls</li>
            <li>Reduced form submissions</li>
          </ul>

          <p>The assumption is often:</p>
          <p><em>"SEO stopped working."</em></p>
          <p>In many cases, something else is happening.</p>
        </div>

        <div className="section-anchor">
          <h2>The Shift to AI-Mediated Discovery</h2>
          <p>Search engines and AI assistants increasingly provide direct answers rather than sending users to websites.</p>
          <p>These zero-click responses:</p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>Summarize services</li>
            <li>Recommend businesses</li>
            <li>Provide comparisons</li>
            <li>Answer informational queries</li>
          </ul>
          <p>Users may receive sufficient information without visiting your site.</p>
          <p>If your business is not cited or referenced within those responses, visibility decreases even if rankings remain stable. Understanding <a href="/ai-recommendations" className="!font-bold">how AI systems make recommendation choices</a> becomes crucial for maintaining discoverability.</p>
        </div>

        <div className="section-anchor">
          <h2>How AI Systems Select Businesses</h2>
          <p>AI systems favor sources that exhibit:</p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>Clear entity boundaries</li>
            <li>Consistent service definitions</li>
            <li>Explicit geographic scope</li>
            <li>Structured data aligned with visible content</li>
            <li>Predictable information hierarchy</li>
          </ul>
          <p>When structural ambiguity exists, interpretive confidence declines.</p>
          <p>Declining interpretive confidence can reduce citation likelihood.</p>
        </div>

        <div className="section-anchor">
          <h2>Rankings vs. Interpretability</h2>
          <p>Traditional SEO focused heavily on ranking signals.</p>
          <p>AI-mediated discovery introduces a second layer:</p>
          <p><em>Interpretability.</em></p>
          <p>A website may still rank in search results while being less frequently cited in generated answers.</p>
          <p>This creates a gap between traffic metrics and actual inquiries.</p>
        </div>

        <div className="section-anchor">
          <h2>Structural Causes of Lead Decline</h2>
          <p>Lead decline may correlate with:</p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>Ambiguous service categorization</li>
            <li>Inconsistent terminology across pages</li>
            <li>Fragmented authority signals</li>
            <li>Overlapping or unclear geographic scope</li>
            <li>Poor schema alignment</li>
          </ul>
          <p>These structural deficiencies affect how automated systems understand and categorize your business, often violating core <a href="/technical-standards" className="!font-bold">technical standards</a> for AI interpretation.</p>
        </div>

        <div className="section-anchor">
          <h2>What Structural Correction Changes</h2>
          <p>Architectural clarity can:</p>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li>Stabilize entity interpretation</li>
            <li>Increase citation confidence</li>
            <li>Improve consistency across AI-generated summaries</li>
            <li>Reduce ambiguity in automated categorization</li>
          </ul>
          <p>It does not guarantee increased leads.</p>
          <p>It establishes the technical foundation required for sustained interpretability through <a href="/" className="!font-bold">systematic architectural discipline</a>.</p>
        </div>

        <div className="section-anchor">
          <h2>The Right Diagnostic Question</h2>
          <p>Instead of asking:</p>
          <p><em>"Why did my rankings drop?"</em></p>
          <p>It may be more accurate to ask:</p>
          <p><em>"Is my website structurally interpretable in an AI-mediated discovery environment?"</em></p>
          <p>If your business depends on online acquisition, structural evaluation may be appropriate.</p>
          <p><a href="/contact" className="!font-bold">Request an evaluation</a></p>
        </div>
      </article>
    </SharedLayout>
  )
}