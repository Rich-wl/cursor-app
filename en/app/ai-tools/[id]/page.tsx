import Link from 'next/link'
import { notFound } from 'next/navigation'

// Detailed information about each tool
export const toolDetails = {
  'v0': {
    name: 'V0',
    description: 'V0 is a powerful AI-assisted development tool that helps developers write, understand, and refactor code faster.',
    longDescription: `V0 represents the next generation of AI-powered development tools. It combines advanced machine learning with intuitive design to streamline the development process.

Key advantages of V0 include:
- Instant code generation from natural language descriptions
- Smart code refactoring suggestions
- Automated bug detection and fixing
- Real-time pair programming with AI
- Context-aware code completion`,
    features: [
      {
        title: 'AI Code Completion',
        description: 'Advanced code completion powered by state-of-the-art language models.'
      },
      {
        title: 'Natural Language Programming',
        description: 'Convert natural language descriptions into functional code.'
      },
      {
        title: 'Code Refactoring',
        description: 'Intelligent suggestions for improving code structure and performance.'
      },
      {
        title: 'Smart Debugging',
        description: 'AI-powered debugging that helps identify and fix issues quickly.'
      }
    ],
    pricing: [
      {
        plan: 'Free',
        price: '$0',
        features: ['Basic code completion', 'Limited generations', 'Community support']
      },
      {
        plan: 'Pro',
        price: '$20/month',
        features: ['Advanced code completion', 'Unlimited generations', 'Priority support']
      },
      {
        plan: 'Enterprise',
        price: 'Custom',
        features: ['Custom models', 'Team collaboration', 'Dedicated support']
      }
    ],
    url: 'https://v0.dev',
    category: 'IDE & Coding Assistant'
  },
  'github-copilot': {
    name: 'GitHub Copilot',
    description: 'GitHub Copilot is an AI programming assistant developed by GitHub and OpenAI that provides contextual code suggestions.',
    longDescription: `GitHub Copilot is your AI pair programmer that helps you write code faster and with less work. It draws context from comments and code to suggest individual lines and whole functions instantly.

Key advantages of GitHub Copilot include:
- Real-time code suggestions as you type
- Support for multiple programming languages
- Integration with popular IDEs
- Learning from your coding style
- Automated test generation`,
    features: [
      {
        title: 'Real-time Code Suggestions',
        description: 'Get instant code suggestions based on context and comments.'
      },
      {
        title: 'Natural Language to Code',
        description: 'Write comments in plain English and get code suggestions.'
      },
      {
        title: 'Multi-language Support',
        description: 'Works with dozens of programming languages and frameworks.'
      },
      {
        title: 'Smart Test Generation',
        description: 'Automatically generate unit tests for your code.'
      }
    ],
    pricing: [
      {
        plan: 'Individual',
        price: '$10/month',
        features: ['Full access to Copilot', 'Multi-language support', 'IDE integration']
      },
      {
        plan: 'Business',
        price: '$19/user/month',
        features: ['Team management', 'Advanced security', 'License management']
      }
    ],
    url: 'https://github.com/features/copilot',
    category: 'IDE & Coding Assistant'
  },
  'lovable': {
    name: 'Lovable',
    description: 'Lovable is an AI-powered code review assistant that helps teams maintain high code quality and consistent standards.',
    longDescription: `Lovable transforms the code review process by combining AI intelligence with best practices in software development. It helps teams catch issues early and maintain consistent code quality across projects.

Key advantages of Lovable include:
- Automated code quality checks
- Style guide enforcement
- Security vulnerability detection
- Performance optimization suggestions
- Best practices recommendations`,
    features: [
      {
        title: 'Automated Code Review',
        description: 'AI-powered analysis of code changes with detailed feedback and suggestions.'
      },
      {
        title: 'Quality Metrics',
        description: 'Comprehensive code quality metrics and trend analysis.'
      },
      {
        title: 'Security Scanning',
        description: 'Continuous security vulnerability detection and remediation advice.'
      },
      {
        title: 'Performance Analysis',
        description: 'Identify and fix performance bottlenecks before they reach production.'
      }
    ],
    pricing: [
      {
        plan: 'Starter',
        price: '$10/user/month',
        features: ['Basic code review', 'Quality metrics', 'Email support']
      },
      {
        plan: 'Team',
        price: '$25/user/month',
        features: ['Advanced analysis', 'Custom rules', 'Priority support']
      },
      {
        plan: 'Enterprise',
        price: 'Custom',
        features: ['Custom deployment', 'Dedicated support', 'SLA guarantees']
      }
    ],
    url: 'https://lovable.ai',
    category: 'Code Review & Quality'
  },
  'augment': {
    name: 'Augment',
    description: 'Augment is an AI development platform that enhances developer productivity through intelligent automation and workflow optimization.',
    longDescription: `Augment is a comprehensive AI development platform that streamlines the entire software development lifecycle. It combines multiple AI technologies to automate repetitive tasks and optimize development workflows.

Key advantages of Augment include:
- Intelligent workflow automation
- Smart code generation and transformation
- Automated documentation
- Integration with existing tools
- Custom AI model training`,
    features: [
      {
        title: 'Workflow Automation',
        description: 'Automate repetitive development tasks with AI-powered workflows.'
      },
      {
        title: 'Code Generation',
        description: 'Generate high-quality code from specifications and templates.'
      },
      {
        title: 'Documentation Assistant',
        description: 'Automatically generate and maintain technical documentation.'
      },
      {
        title: 'Integration Hub',
        description: 'Seamless integration with popular development tools and platforms.'
      }
    ],
    pricing: [
      {
        plan: 'Developer',
        price: '$29/month',
        features: ['Personal automation', 'Basic integrations', 'Community support']
      },
      {
        plan: 'Team',
        price: '$49/user/month',
        features: ['Team collaboration', 'Advanced automation', 'Priority support']
      },
      {
        plan: 'Enterprise',
        price: 'Custom',
        features: ['Custom solutions', 'Dedicated support', 'Training & onboarding']
      }
    ],
    url: 'https://augment.dev',
    category: 'Development Platform'
  },
  'bolt': {
    name: 'Bolt',
    description: 'Bolt is an AI-powered development acceleration platform that helps developers write, test, and deploy code faster with built-in best practices.',
    longDescription: `Bolt is a comprehensive AI development platform that supercharges your development workflow. It combines code intelligence, automated testing, and deployment optimization to help teams ship high-quality code faster.

Key advantages of Bolt include:
- Intelligent code suggestions and completions
- Automated test generation and execution
- CI/CD pipeline optimization
- Performance monitoring and optimization
- Security scanning and vulnerability detection`,
    features: [
      {
        title: 'Smart Code Intelligence',
        description: 'Context-aware code suggestions and completions powered by advanced AI models.'
      },
      {
        title: 'Automated Testing',
        description: 'Generate and run tests automatically based on code changes and coverage analysis.'
      },
      {
        title: 'CI/CD Optimization',
        description: 'Optimize build and deployment pipelines with AI-powered insights.'
      },
      {
        title: 'Performance Monitoring',
        description: 'Real-time performance monitoring and optimization recommendations.'
      }
    ],
    pricing: [
      {
        plan: 'Developer',
        price: '$15/month',
        features: ['Code intelligence', 'Basic testing', 'Community support']
      },
      {
        plan: 'Team',
        price: '$35/user/month',
        features: ['Advanced features', 'Team collaboration', 'Priority support']
      },
      {
        plan: 'Enterprise',
        price: 'Custom',
        features: ['Custom deployment', 'Advanced security', 'Dedicated support']
      }
    ],
    url: 'https://bolt.dev',
    category: 'Development Platform'
  }
}

// Static export: pre-render one page per tool, anything else is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(toolDetails).map((id) => ({ id }))
}

export default function ToolDetail({ params }: { params: { id: string } }) {
  const tool = toolDetails[params.id as keyof typeof toolDetails]
  
  if (!tool) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/ai-tools" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to AI Tools
          </Link>
          <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {tool.category}
            </span>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Visit Website →
            </a>
          </div>
        </div>

        {/* Main content */}
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">{tool.description}</p>
          <div className="mb-12 whitespace-pre-wrap">{tool.longDescription}</div>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          {/* <section>
            <h2 className="text-2xl font-bold mb-6">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tool.pricing.map((plan, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">{plan.plan}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      </div>
    </div>
  )
} 