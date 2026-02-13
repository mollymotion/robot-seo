'use client';

import SharedLayout from '../components/SharedLayout';
import HeroFrame from '../components/HeroFrame';
import ObfuscatedEmail from '../components/ObfuscatedEmail';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const form = e.currentTarget; // Store form reference early
    const formData = new FormData(form);
    const data = {
      contactName: formData.get('contactName'),
      websiteUrl: formData.get('websiteUrl'),
      businessType: formData.get('businessType'),
      acquisitionConcern: formData.get('acquisitionConcern'),
      technicalConstraints: formData.get('technicalConstraints'),
      contactEmail: formData.get('contactEmail'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const responseData = await response.json();
      
      if (response.ok && responseData.success) {
        // Redirect to success page
        router.push('/contact/success');
      } else {
        setSubmitMessage('There was an error sending your request. Please try again or use the email address below.');
      }
    } catch (error) {
      setSubmitMessage('There was an error sending your request. Please try again or use the email address below.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SharedLayout>
      <div className="content">
        <HeroFrame 
          title="Contact"
          subtitle="Request an evaluation to determine if Robot SEO applies to your situation"
        />

        <div className="section-anchor">
          <h2>Request an Evaluation</h2>
          <p>
            If your service business depends on organic discovery and you want to determine whether Robot SEO applies to your situation, we can evaluate your current technical foundation.
          </p>
          <p>
            This evaluation examines how AI systems currently interpret your website and identifies specific areas where technical improvements may enhance machine understanding.
          </p>
        </div>

        <div className="definition-block contact-form-container">
          <h3>Evaluation Request Form</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contactName">Contact name *</label>
              <input 
                type="text" 
                id="contactName" 
                name="contactName" 
                required 
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-field">
              <label htmlFor="websiteUrl">Website URL *</label>
              <input 
                type="url" 
                id="websiteUrl" 
                name="websiteUrl" 
                required 
                placeholder="https://example.com"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-field">
              <label htmlFor="businessType">Primary business type *</label>
              <input 
                type="text" 
                id="businessType" 
                name="businessType" 
                required 
                placeholder="e.g. Legal services, Marketing consultancy, Financial planning"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-field">
              <label htmlFor="acquisitionConcern">Primary acquisition concern *</label>
              <textarea 
                id="acquisitionConcern" 
                name="acquisitionConcern" 
                rows={3}
                required 
                placeholder="e.g. organic leads declining, AI assistants recommending competitors"
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div className="form-field">
              <label htmlFor="technicalConstraints">Technical constraints (optional)</label>
              <input 
                type="text" 
                id="technicalConstraints" 
                name="technicalConstraints" 
                placeholder="e.g. WordPress, Shopify, custom framework"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-field">
              <label htmlFor="contactEmail">Contact email *</label>
              <input 
                type="email" 
                id="contactEmail" 
                name="contactEmail" 
                required 
                placeholder="your@email.com"
                disabled={isSubmitting}
              />
            </div>

            <button type="submit" className="cta-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Request an evaluation'}
            </button>
          </form>

          {submitMessage && (
            <div className="form-message">
              <p style={{ color: 'var(--text-primary)', margin: 0 }}>{submitMessage}</p>
            </div>
          )}
          
          <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
            If you prefer email - <ObfuscatedEmail />
          </p>
          
          <p className="mt-6" style={{ color: 'var(--text-secondary)' }}>
            <strong>Response Timeline:</strong> We respond to evaluation requests within one business day with next steps and scheduling information.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Evaluation Process</h2>
          
          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Technical Assessment</strong></p>
            <p style={{ marginBottom: 0 }}>
              We analyze your website's current structure, content organization, and technical implementation against AI system requirements.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Compatibility Review</strong></p>
            <p style={{ marginBottom: 0 }}>
              We determine whether your business type, market situation, and website characteristics align with Robot SEO applications.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Implementation Scope</strong></p>
            <p style={{ marginBottom: 0 }}>
              If Robot SEO is appropriate for your situation, we outline specific technical recommendations and implementation priorities.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>No-Obligation Analysis</strong></p>
            <p style={{ marginBottom: 0 }}>
              The evaluation process involves no commitments or obligations beyond the assessment itself.
            </p>
          </div>
        </div>

        <div className="section-anchor">
          <h2>Who Should Request an Evaluation</h2>
          <ul className="list-disc pl-6 mb-5 space-y-2">
            <li><strong>Service Business Owners</strong> who depend on organic search and online discovery for customer acquisition.</li>
            <li><strong>Marketing Directors</strong> working with service businesses that want technical precision in their website optimization approach.</li>
            <li><strong>Businesses Currently Investing in SEO</strong> who want to understand how AI system requirements may affect their optimization strategy.</li>
            <li><strong>Professional Service Providers</strong> who compete based on expertise and credibility rather than price alone.</li>
          </ul>
        </div>

        <div className="section-anchor">
          <h2>Evaluation Criteria</h2>
          
          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Business Type Alignment</strong></p>
            <p style={{ marginBottom: 0 }}>
              Service businesses with established markets, clear service definitions, and dependence on credibility-based customer decisions.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Current Website Foundation</strong></p>
            <p style={{ marginBottom: 0 }}>
              Existing websites with sufficient content and technical infrastructure to support optimization implementation.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Market Competition</strong></p>
            <p style={{ marginBottom: 0 }}>
              Competitive situations where technical precision and AI system understanding may provide differentiation advantages.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Resource Availability</strong></p>
            <p style={{ marginBottom: 0 }}>
              Businesses with resources to implement and maintain technical improvements over time.
            </p>
          </div>
        </div>

        <div className="section-anchor">
          <h2>What to Expect</h2>
          
          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Initial Consultation</strong></p>
            <p style={{ marginBottom: 0 }}>
              Brief discussion about your business, current website performance, and technical optimization goals.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Technical Review</strong></p>
            <p style={{ marginBottom: 0 }}>
              Systematic analysis of your website structure, content organization, and AI system compatibility.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Assessment Results</strong></p>
            <p style={{ marginBottom: 0 }}>
              Clear evaluation of whether Robot SEO applications align with your business situation and technical requirements.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Implementation Options</strong></p>
            <p style={{ marginBottom: 0 }}>
              If Robot SEO is appropriate, specific recommendations for technical implementation approaches and priorities.
            </p>
          </div>
        </div>

        <div className="section-anchor">
          <h2>Alternative Considerations</h2>
          
          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Traditional SEO Focus</strong></p>
            <p style={{ marginBottom: 0 }}>
              If your website primarily needs conventional SEO improvements, we may recommend focusing on traditional optimization approaches first.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Content Development Priority</strong></p>
            <p style={{ marginBottom: 0 }}>
              If your website lacks sufficient content depth, content development may take priority over technical optimization.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Business Development Focus</strong></p>
            <p style={{ marginBottom: 0 }}>
              If your business model does not depend heavily on organic discovery, other business development approaches may be more appropriate.
            </p>
          </div>
        </div>

        <div className="section-anchor">
          <h2>Geographic Scope</h2>
          <p>
            We work with service businesses throughout North America, with remote collaboration for technical implementation.
          </p>
        </div>

        <div className="section-anchor">
          <h2>Evaluation Standards</h2>
          
          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Honest Assessment</strong></p>
            <p style={{ marginBottom: 0 }}>
              If Robot SEO is not appropriate for your situation, we will communicate this clearly rather than attempting to fit inappropriate solutions.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Technical Focus</strong></p>
            <p style={{ marginBottom: 0 }}>
              Evaluation emphasizes technical requirements and systematic implementation rather than promotional promises.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Business Alignment</strong></p>
            <p style={{ marginBottom: 0 }}>
              We assess genuine alignment between Robot SEO applications and your specific business situation rather than pursuing universal applicability.
            </p>
          </div>

          <div className="mb-8">
            <p style={{ marginBottom: '0.25rem' }}><strong>Resource Consideration</strong></p>
            <p style={{ marginBottom: 0 }}>
              Evaluation includes realistic assessment of implementation resources and maintenance requirements.
            </p>
          </div>

          <p>
            Robot SEO works best for businesses that understand the importance of technical precision and want systematic approaches to website optimization for AI system compatibility.
          </p>
        </div>
      </div>
    </SharedLayout>
  );
}