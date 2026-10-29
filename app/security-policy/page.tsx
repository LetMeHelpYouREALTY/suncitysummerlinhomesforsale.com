import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security Policy',
  description: 'Security policy and responsible disclosure information for heyberkshire.com',
  robots: {
    index: true,
    follow: true,
  },
}

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Security Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Commitment to Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Berkshire Hathaway HomeServices Nevada Properties, we take the security
              of our systems and the privacy of our clients seriously. This page outlines
              our security practices and provides information for security researchers.
            </p>
          </section>

          {/* Reporting Vulnerabilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Reporting Security Vulnerabilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you've discovered a security vulnerability, we appreciate your help in
              disclosing it to us responsibly.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
              <h3 className="font-semibold text-blue-900 mb-3">
                How to Report
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:security@heyberkshire.com" className="underline">
                    security@heyberkshire.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+17025001955" className="underline">
                    (702) 500-1955
                  </a>
                </li>
                <li>
                  <strong>Response Time:</strong> Within 48 hours
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What to Include
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Description of the vulnerability</li>
              <li>Steps to reproduce the issue</li>
              <li>Potential impact assessment</li>
              <li>Any proof-of-concept code (if applicable)</li>
              <li>Your contact information (optional)</li>
            </ul>
          </section>

          {/* Security Measures */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Security Measures in Place
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  🛡️ Protection
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Cloudflare Turnstile CAPTCHA</li>
                  <li>• Rate limiting (Upstash)</li>
                  <li>• CSP headers</li>
                  <li>• HTTPS enforced</li>
                  <li>• Input sanitization</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  📊 Monitoring
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Sentry error tracking</li>
                  <li>• Vercel Analytics</li>
                  <li>• Automated security scans</li>
                  <li>• Weekly dependency audits</li>
                  <li>• Real-time alerts</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  🔐 Data Protection
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Encrypted connections (TLS 1.3)</li>
                  <li>• Secure API integrations</li>
                  <li>• Regular backups</li>
                  <li>• Access controls</li>
                  <li>• Audit logging</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ✅ Compliance
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• GDPR ready</li>
                  <li>• CCPA compliant</li>
                  <li>• Fair Housing Act</li>
                  <li>• Nevada real estate laws</li>
                  <li>• WCAG 2.1 (accessibility)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 mb-4">
              We use trusted third-party services to provide the best experience:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Vercel:</strong> Hosting and deployment
              </li>
              <li>
                <strong>Cloudflare:</strong> CDN, security, and edge computing
              </li>
              <li>
                <strong>Follow Up Boss:</strong> CRM and lead management
              </li>
              <li>
                <strong>RealScout:</strong> MLS/IDX property data
              </li>
              <li>
                <strong>Calendly:</strong> Appointment scheduling
              </li>
              <li>
                <strong>Google Analytics:</strong> Website analytics
              </li>
              <li>
                <strong>Sentry:</strong> Error monitoring
              </li>
              <li>
                <strong>Anthropic:</strong> AI assistance (Claude)
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Each service maintains its own security practices and compliance certifications.
            </p>
          </section>

          {/* Responsible Disclosure */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Responsible Disclosure Policy
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="font-semibold text-green-900 mb-3">
                We Promise
              </h3>
              <ul className="text-green-800 space-y-2">
                <li>✅ We will respond within 48 hours</li>
                <li>✅ We will keep you updated on our progress</li>
                <li>✅ We will credit you for the discovery (if desired)</li>
                <li>✅ We will not take legal action against good-faith researchers</li>
                <li>✅ We will work with you to understand and resolve the issue</li>
              </ul>
            </div>
          </section>

          {/* Out of Scope */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Out of Scope
            </h2>
            <p className="text-gray-700 mb-4">
              Please do not report the following (not considered vulnerabilities):
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Publicly accessible information (e.g., property listings)</li>
              <li>Social engineering attacks</li>
              <li>Physical security issues</li>
              <li>Denial of Service (DoS) attacks (we have rate limiting)</li>
              <li>Spam or abuse reports (contact support instead)</li>
              <li>Issues in third-party services (report to them directly)</li>
            </ul>
          </section>

          {/* Security Best Practices */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Security
            </h2>
            <p className="text-gray-700 mb-4">
              To protect your information when using our site:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Ensure you're on the correct domain: <strong>heyberkshire.com</strong></li>
              <li>Look for the padlock icon (HTTPS)</li>
              <li>Don't share sensitive information via email</li>
              <li>Use strong, unique passwords if creating an account</li>
              <li>Keep your browser and OS updated</li>
              <li>Be cautious of phishing attempts</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Questions?
            </h2>
            <p className="text-gray-700 mb-4">
              For general questions about our security practices:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-2">
                <strong>Dr. Jan Duffy</strong>
              </p>
              <p className="mb-2">
                Berkshire Hathaway HomeServices Nevada Properties
              </p>
              <p className="mb-2">
                Email:{' '}
                <a href="mailto:info@heyberkshire.com" className="text-blue-600 underline">
                  info@heyberkshire.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+17025001955" className="text-blue-600 underline">
                  (702) 500-1955
                </a>
              </p>
            </div>
          </section>

          {/* Last Updated */}
          <footer className="border-t pt-6 mt-12">
            <p className="text-sm text-gray-500">
              Last updated: February 14, 2026
            </p>
            <p className="text-sm text-gray-500">
              This policy is reviewed and updated regularly.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
