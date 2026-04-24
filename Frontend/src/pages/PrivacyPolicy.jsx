const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-20"></div>

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl">

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <p className="mb-6 text-gray-300 leading-8">
            Welcome to our Mess Management System. This Privacy Policy explains how we collect,
            use, disclose, and protect your personal information.
          </p>

          {/* Section */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-blue-400">
              Information We Collect
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-400">
              <li><span className="text-white font-medium">Account Details:</span> name, email, phone, credentials.</li>
              <li><span className="text-white font-medium">Billing Info:</span> payments, meals, contributions.</li>
              <li><span className="text-white font-medium">Usage Info:</span> actions and system usage.</li>
            </ul>
          </section>

          {/* Section */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-purple-400">
              How We Use Your Information
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-400">
              <li>Provide and maintain services</li>
              <li>Process billing and payments</li>
              <li>Improve user experience</li>
              <li>Send updates and alerts</li>
            </ul>
          </section>

          {/* Section */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-blue-400">
              Data Security
            </h2>
            <p className="text-gray-400 leading-8">
              We use industry-standard security practices to protect your data.
            </p>
          </section>

          {/* Section */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-purple-400">
              Third-Party Services
            </h2>
            <p className="text-gray-400 leading-8">
              We may use trusted third-party services like payment gateways and analytics tools.
            </p>
          </section>

          {/* Section */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-blue-400">
              Cookies and Tracking
            </h2>
            <p className="text-gray-400 leading-8">
              Cookies help improve functionality and analyze usage patterns.
            </p>
          </section>

          {/* Section */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-purple-400">
              Children's Privacy
            </h2>
            <p className="text-gray-400 leading-8">
              Our services are not intended for children under 13.
            </p>
          </section>

          {/* Section */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-blue-400">
              Changes to This Policy
            </h2>
            <p className="text-gray-400 leading-8">
              We may update this Privacy Policy from time to time.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-purple-400">
              Contact Us
            </h2>
            <p className="text-gray-400 leading-8">
              Contact us through the website support section for any queries.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;