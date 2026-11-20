import { ArticleLayout } from '../../components/ArticleLayout'
import { TableOfContents } from '../../components/TableOfContents'

export const metadata = {
  title: 'Installing Cursor Editor - Complete Installation Guide',
  description: 'Learn how to install Cursor Editor on Windows, macOS, and Linux with our step-by-step installation guide.'
}

const tocItems = [
  { id: 'system-requirements', title: 'System Requirements', level: 1 },
  { id: 'windows-installation', title: 'Windows Installation', level: 2 },
  { id: 'macos-installation', title: 'macOS Installation', level: 2 },
  { id: 'linux-installation', title: 'Linux Installation', level: 2 },
  { id: 'verifying-installation', title: 'Verifying Installation', level: 2 },
  { id: 'troubleshooting', title: 'Troubleshooting', level: 2 }
]

export default function InstallationGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 sticky top-8">
          <TableOfContents items={tocItems} />
        </aside>
        
        <ArticleLayout
          title="Installing Cursor Editor"
          date="2024-03-20"
          author="Cursor Team"
        >
          <section id="system-requirements">
            <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
            <p className="mb-4">
              Before installing Cursor Editor, ensure your system meets these requirements:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Operating System:
                <ul className="list-disc pl-6 mt-2">
                  <li>Windows 10 or later</li>
                  <li>macOS 10.15 (Catalina) or later</li>
                  <li>Linux: Ubuntu 20.04 or later, Debian 10 or later</li>
                </ul>
              </li>
              <li>Hardware:
                <ul className="list-disc pl-6 mt-2">
                  <li>4GB RAM minimum (8GB recommended)</li>
                  <li>2GB free disk space</li>
                  <li>64-bit processor</li>
                </ul>
              </li>
              <li>Internet connection for AI features</li>
            </ul>
          </section>

          <section id="windows-installation">
            <h2 className="text-2xl font-bold mb-4">Windows Installation</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Download the latest Windows installer from the Cursor website</li>
              <li className="mb-2">Run the downloaded .exe file</li>
              <li className="mb-2">Follow the installation wizard&apos;s instructions</li>
              <li className="mb-2">Choose your installation directory (default recommended)</li>
              <li className="mb-2">Wait for the installation to complete</li>
              <li>Launch Cursor Editor from the Start menu or desktop shortcut</li>
            </ol>
          </section>

          <section id="macos-installation">
            <h2 className="text-2xl font-bold mb-4">macOS Installation</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Download the latest macOS .dmg file</li>
              <li className="mb-2">Open the downloaded .dmg file</li>
              <li className="mb-2">Drag Cursor Editor to your Applications folder</li>
              <li className="mb-2">Right-click Cursor Editor and select &quot;Open&quot;</li>
              <li>Click &quot;Open&quot; in the security dialog (first launch only)</li>
            </ol>
          </section>

          <section id="linux-installation">
            <h2 className="text-2xl font-bold mb-4">Linux Installation</h2>
            <p className="mb-4">Using apt (Debian/Ubuntu):</p>
            <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
              <code>
                curl -fsSL https://cursor.sh/install.sh | bash
              </code>
            </pre>
            <p className="mb-4">Using snap:</p>
            <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
              <code>
                sudo snap install cursor-editor
              </code>
            </pre>
          </section>

          <section id="verifying-installation">
            <h2 className="text-2xl font-bold mb-4">Verifying Installation</h2>
            <p className="mb-4">
              After installation, verify that Cursor Editor is working correctly:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Launch Cursor Editor</li>
              <li className="mb-2">Check for the welcome screen</li>
              <li className="mb-2">Verify AI features are accessible</li>
              <li>Test basic editing functionality</li>
            </ol>
          </section>

          <section id="troubleshooting">
            <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
            <p className="mb-4">Common installation issues and solutions:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Installation fails:</strong> Try running the installer with administrator privileges
              </li>
              <li className="mb-2">
                <strong>App won&apos;t launch:</strong> Verify system requirements and reinstall if necessary
              </li>
              <li className="mb-2">
                <strong>Missing AI features:</strong> Check your internet connection and login status
              </li>
              <li>
                <strong>Performance issues:</strong> Ensure your system meets the recommended requirements
              </li>
            </ul>
          </section>
        </ArticleLayout>
      </div>
    </div>
  )
} 