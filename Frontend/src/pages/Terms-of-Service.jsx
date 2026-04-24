const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-20"></div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl">

          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>

          <p className="text-gray-300 mb-6">
            By using our platform, you agree to the following terms and conditions.
          </p>

          <section className="mb-6">
            <h2 className="text-xl text-blue-400 font-semibold mb-2">User Responsibilities</h2>
            <p className="text-gray-400">
              Users must provide accurate data and use the system responsibly.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl text-purple-400 font-semibold mb-2">Prohibited Activities</h2>
            <p className="text-gray-400">
              Misuse, hacking, or unauthorized access is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-blue-400 font-semibold mb-2">Termination</h2>
            <p className="text-gray-400">
              We may suspend accounts that violate our policies.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
};

export default TermsOfService;