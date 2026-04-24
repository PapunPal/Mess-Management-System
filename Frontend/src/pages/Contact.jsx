const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-20"></div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        
        <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-10 shadow-2xl text-center">

          {/* Title */}
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h1>

          <p className="text-gray-300 mb-10">
            Feel free to reach out for any queries or collaboration.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Name */}
            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">👤 Name</h3>
              <p className="text-gray-300">Papun Pal</p>
            </div>

            {/* Email */}
            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700 hover:border-purple-400 transition">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">📧 Email</h3>
              <a
                href="mailto:papunpalpal100@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                papunpal100@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">📱 Phone</h3>
              <a
                href="tel:+916295804056"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                +91 6295804056
              </a>
            </div>

            {/* Location */}
            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-700 hover:border-purple-400 transition">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">📍 Location</h3>
              <p className="text-gray-300">West Bengal, India</p>
            </div>

          </div>

          {/* Social Links */}
          <div className="mt-10 flex justify-center gap-6">

            <a
              href="https://www.linkedin.com/in/papun-pal-247833285/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/PapunPal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              GitHub
            </a>

          </div>

        </div>
      </main>
    </div>
  );
};

export default ContactUs;