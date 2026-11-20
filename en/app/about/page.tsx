/**
 * @description 关于我们页面 - 为Cursor历史版本下载网站创建的关于页面，符合AdSense审核要求
 * @author Claude AI
 * @date 2025-01-14
 */

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Cursor Historical Version Download',
  description: 'Learn about Cursor Historical Version Download - your trusted source for Cursor editor historical versions',
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cursor Historical Version Download is dedicated to providing developers and programming enthusiasts with easy access to historical versions of the Cursor code editor. We believe that having access to previous software versions is essential for compatibility, testing, and educational purposes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our mission is to maintain a comprehensive, reliable, and user-friendly archive of Cursor editor versions, ensuring that developers can always find the specific version they need for their projects.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-blue-800">Version Archive</h3>
                <p className="text-gray-700">
                  Comprehensive collection of Cursor editor historical versions with detailed release information and download links.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-green-800">Multi-Platform Support</h3>
                <p className="text-gray-700">
                  Downloads available for Windows, macOS, and Linux platforms, including architecture-specific builds.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-purple-800">Educational Resources</h3>
                <p className="text-gray-700">
                  Tutorials, guides, and documentation to help users understand Cursor&apos;s features and capabilities.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-orange-800">Community Support</h3>
                <p className="text-gray-700">
                  Resources and information to help developers make the most of Cursor&apos;s AI-powered coding features.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">About Cursor Editor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cursor is an innovative AI-powered code editor developed by Anysphere, Inc. It represents a new generation of development tools that integrate artificial intelligence to enhance the coding experience. Key features include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>AI-Powered Code Completion:</strong> Intelligent suggestions and auto-completion based on context</li>
              <li><strong>Natural Language Programming:</strong> Write code using natural language descriptions</li>
              <li><strong>Code Generation:</strong> Generate entire functions and classes from simple prompts</li>
              <li><strong>Debugging Assistance:</strong> AI-powered debugging and error resolution</li>
              <li><strong>Multi-Language Support:</strong> Support for popular programming languages and frameworks</li>
              <li><strong>VS Code Compatibility:</strong> Built on VS Code foundation with enhanced AI capabilities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Historical Versions Matter</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Access to historical software versions is crucial for several reasons:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-medium mb-3 text-gray-800">Compatibility Testing</h3>
              <p className="text-gray-700 mb-4">
                Developers often need to test their applications against different versions of development tools to ensure compatibility across various environments.
              </p>
              
              <h3 className="text-lg font-medium mb-3 text-gray-800">Project Requirements</h3>
              <p className="text-gray-700 mb-4">
                Some projects may require specific versions of tools due to dependencies, team standards, or client requirements.
              </p>
              
              <h3 className="text-lg font-medium mb-3 text-gray-800">Educational Purposes</h3>
              <p className="text-gray-700 mb-4">
                Students and educators may need access to specific versions for coursework, tutorials, or research purposes.
              </p>
              
              <h3 className="text-lg font-medium mb-3 text-gray-800">Stability Preferences</h3>
              <p className="text-gray-700">
                Some users prefer to use stable, well-tested versions rather than the latest releases for production environments.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Commitment</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-4">
              <h3 className="text-lg font-medium mb-3 text-blue-800">Reliability</h3>
              <p className="text-gray-700">
                We maintain our archive with the highest standards of reliability, ensuring that download links are always functional and files are authentic.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-4">
              <h3 className="text-lg font-medium mb-3 text-green-800">Security</h3>
              <p className="text-gray-700">
                All files in our archive are verified for authenticity and scanned for security issues to protect our users.
              </p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-4">
              <h3 className="text-lg font-medium mb-3 text-purple-800">User Privacy</h3>
              <p className="text-gray-700">
                We respect user privacy and follow best practices for data protection. See our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> for details.
              </p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
              <h3 className="text-lg font-medium mb-3 text-orange-800">Continuous Updates</h3>
              <p className="text-gray-700">
                Our archive is automatically updated to include new Cursor releases, ensuring you always have access to the latest versions.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Technical Infrastructure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website is built with modern web technologies to ensure fast, reliable access to historical versions:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Next.js Framework:</strong> For optimal performance and SEO</li>
              <li><strong>Automated Tracking:</strong> GitHub Actions for continuous version monitoring</li>
              <li><strong>CDN Distribution:</strong> Fast global content delivery</li>
              <li><strong>Responsive Design:</strong> Optimized for all devices and screen sizes</li>
              <li><strong>Search Functionality:</strong> Easy version discovery and filtering</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Legal and Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We operate in full compliance with applicable laws and regulations:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>We respect intellectual property rights and provide access to software in accordance with its licensing terms</li>
              <li>Our service complies with GDPR, CCPA, and other privacy regulations</li>
              <li>We maintain transparent <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
              <li>We do not modify or redistribute software without proper authorization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We value feedback from our users and are always looking to improve our service. If you have questions, suggestions, or need assistance, please don&apos;t hesitate to reach out:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">General Inquiries</h3>
                  <p className="text-gray-700">cursor@cursorhistory.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Technical Support</h3>
                  <p className="text-gray-700">cursor@cursorhistory.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Legal Matters</h3>
                  <p className="text-gray-700">cursor@cursorhistory.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Privacy Concerns</h3>
                  <p className="text-gray-700">cursor@cursorhistory.com</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-700">
                  <strong>Website:</strong> <a href="https://cursorhistory.com" className="text-blue-600 hover:underline">https://cursorhistory.com</a>
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Disclaimer</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Important:</strong> Cursor Historical Version Download is an independent service and is not affiliated with Anysphere, Inc. or the Cursor editor development team. We provide access to publicly available software versions for educational and compatibility purposes. All trademarks and software remain the property of their respective owners.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}