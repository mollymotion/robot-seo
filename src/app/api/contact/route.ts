import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only when API key is available
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not configured');
  }
  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contactName, websiteUrl, businessType, acquisitionConcern, technicalConstraints, contactEmail } = body;

    // Validate required fields
    if (!contactName || !websiteUrl || !businessType || !acquisitionConcern || !contactEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailContent = `
Robot SEO Evaluation Request

Contact Name: ${contactName}
Contact Email: ${contactEmail}
Website URL: ${websiteUrl}
Business Type: ${businessType}

Primary Acquisition Concern:
${acquisitionConcern}

Technical Constraints: ${technicalConstraints || 'None specified'}

---
Submitted on: ${new Date().toISOString()}
    `;

    // Send email using Resend - no DNS setup needed
    const resend = getResendClient();
    const result = await resend.emails.send({
      from: 'Robot SEO Contact Form <onboarding@resend.dev>', // Verified domain, no DNS needed
      to: 'evaluation@robot-seo.com', // New account verified email
      subject: `Robot SEO Evaluation Request - ${contactName}`,
      text: emailContent,
      replyTo: contactEmail, // Replies go directly to the person who submitted
    });

    console.log('Email sent successfully:', result);
    
    // Note: Confirmation emails to users require domain verification on Resend
    // For now, user confirmation should be sent manually by replying to the submission
    
    // Always return success if we get here (no exception thrown)
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    }, { status: 200 });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    return NextResponse.json({ 
      error: 'Failed to send email', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}