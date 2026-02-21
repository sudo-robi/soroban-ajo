import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Drips Documentation
          </h1>
          <p className="text-xl text-gray-600">
            Complete guides and API reference for building with Drips
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Getting Started */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              🚀 Getting Started
            </h2>
            <p className="text-gray-600 mb-4">
              Set up your development environment and run Drips locally
            </p>
            <Link
              href="https://github.com/Christopherdominic/soroban-ajo#-quick-start"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Guide →
            </Link>
          </div>

          {/* API Reference */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              📚 API Reference
            </h2>
            <p className="text-gray-600 mb-4">
              Interactive Swagger documentation for all API endpoints
            </p>
            <a
              href="http://localhost:3001/api-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Open Swagger UI →
            </a>
          </div>

          {/* Architecture */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              🏗️ Architecture
            </h2>
            <p className="text-gray-600 mb-4">
              System design, components, and data flow
            </p>
            <Link
              href="https://github.com/Christopherdominic/soroban-ajo/blob/master/documentation/architecture.md"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More →
            </Link>
          </div>

          {/* Smart Contracts */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              📜 Smart Contracts
            </h2>
            <p className="text-gray-600 mb-4">
              Rust/Soroban contract documentation and deployment
            </p>
            <Link
              href="https://github.com/Christopherdominic/soroban-ajo/tree/master/contracts/ajo"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Contracts →
            </Link>
          </div>
        </div>

        {/* Guides Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            📖 Guides
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="https://github.com/Christopherdominic/soroban-ajo/blob/master/documentation/ENVIRONMENT_SETUP.md"
              target="_blank"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Environment Setup
              </h3>
              <p className="text-sm text-gray-600">
                Configure environment variables and network settings
              </p>
            </Link>

            <Link
              href="https://github.com/Christopherdominic/soroban-ajo/blob/master/documentation/WALLET_INTEGRATION.md"
              target="_blank"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Wallet Integration
              </h3>
              <p className="text-sm text-gray-600">
                Connect Freighter and other Stellar wallets
              </p>
            </Link>

            <Link
              href="https://github.com/Christopherdominic/soroban-ajo/blob/master/documentation/CACHING_IMPLEMENTATION.md"
              target="_blank"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Caching Strategy
              </h3>
              <p className="text-sm text-gray-600">
                React Query implementation and best practices
              </p>
            </Link>

            <Link
              href="https://github.com/Christopherdominic/soroban-ajo/blob/master/documentation/ACCESSIBILITY_IMPROVEMENTS.md"
              target="_blank"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Accessibility
              </h3>
              <p className="text-sm text-gray-600">
                WCAG 2.1 compliance and testing guidelines
              </p>
            </Link>

            <Link
              href="https://github.com/Christopherdominic/soroban-ajo/blob/master/documentation/ERROR_HANDLING_IMPLEMENTATION.md"
              target="_blank"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Error Handling
              </h3>
              <p className="text-sm text-gray-600">
                Error boundaries, validation, and user feedback
              </p>
            </Link>

            <Link
              href="https://github.com/Christopherdominic/soroban-ajo/blob/master/documentation/MONOREPO_GUIDE.md"
              target="_blank"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Monorepo Workflow
              </h3>
              <p className="text-sm text-gray-600">
                Managing frontend, backend, and contracts together
              </p>
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🔗 Additional Resources
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="https://github.com/Christopherdominic/soroban-ajo/blob/master/documentation/CODE_OF_CONDUCT.md"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Christopherdominic/soroban-ajo/blob/master/documentation/SECURITY.md"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                Security Guidelines
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Christopherdominic/soroban-ajo/blob/master/documentation/roadmap.md"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                Project Roadmap
              </Link>
            </li>
            <li>
              <a
                href="https://developers.stellar.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Stellar Documentation
              </a>
            </li>
            <li>
              <a
                href="https://soroban.stellar.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Soroban Documentation
              </a>
            </li>
          </ul>
        </div>

        {/* Contributing */}
        <div className="mt-8 text-center">
          <Link
            href="https://github.com/Christopherdominic/soroban-ajo"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
