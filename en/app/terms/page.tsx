/**
 * @description 服务协议页面 - 为Cursor历史版本下载网站创建的服务条款页面，符合AdSense审核要求
 * @author Claude AI
 * @date 2025-01-14
 */

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Cursor Historical Version Download',
  description: 'Terms of Service for Cursor Historical Version Download website',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 14, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using the Cursor Historical Version Download website (&quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cursor Historical Version Download provides access to historical versions of the Cursor code editor. Our service includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Download links to various versions of Cursor editor</li>
              <li>Version history and release information</li>
              <li>Platform-specific download options (Windows, macOS, Linux)</li>
              <li>Educational content about Cursor editor features</li>
              <li>Community resources and tutorials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. User Responsibilities</h2>
            
            <h3 className="text-xl font-medium mb-3 text-gray-800">3.1 Acceptable Use</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use our service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Distribute malware or harmful code through our platform</li>
              <li>Violate any applicable local, state, national, or international law</li>
              <li>Interfere with or disrupt the service or servers</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-gray-800">3.2 Download Responsibility</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When downloading Cursor software through our service, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>You are responsible for verifying the authenticity and safety of downloaded files</li>
              <li>You will use the software in accordance with Cursor&apos;s license terms</li>
              <li>You understand that older versions may have security vulnerabilities</li>
              <li>You will not redistribute the software without proper authorization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Cursor editor software is the intellectual property of Anysphere, Inc. Our website provides access to these files but does not claim ownership. All trademarks, service marks, and trade names are proprietary to their respective owners.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The content on our website, including but not limited to text, graphics, logos, and design, is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Disclaimers and Limitations</h2>
            
            <h3 className="text-xl font-medium mb-3 text-gray-800">5.1 Service Availability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to maintain high availability of our service, but we do not guarantee uninterrupted access. The service may be temporarily unavailable due to maintenance, updates, or technical issues.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-800">5.2 Software Disclaimers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The software provided through our service is offered &quot;as is&quot; without warranty of any kind. We do not guarantee the functionality, security, or compatibility of any software version.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-800">5.3 Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In no event shall Cursor Historical Version Download be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Privacy and Data Collection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices regarding the collection and use of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Third-Party Content and Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites or services, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>The Cursor website and documentation</li>
              <li>GitHub repositories and source code</li>
              <li>Community forums and discussion platforms</li>
              <li>Educational resources and tutorials</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are not responsible for the content, privacy policies, or practices of third-party websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Advertising and Monetization</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website displays advertisements through Google AdSense and other advertising partners to support the maintenance and operation of our service. By using our website, you agree to the display of such advertisements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which our service operates, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> cursor@cursorhistory.com<br/>
                <strong>Website:</strong> https://cursorhistory.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}