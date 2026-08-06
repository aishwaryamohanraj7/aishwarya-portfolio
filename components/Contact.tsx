export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
    >
      <div className="max-w-6xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-bold text-white">
          Let's Connect
        </h2>

        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
          I'm actively seeking internship opportunities in
          <span className="font-semibold"> Health Informatics, Healthcare Analytics,
          Clinical Informatics, Digital Health,</span> and Healthcare IT.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* Email */}

          <a
            href="mailto:aishu0743@gmail.com"
            className="bg-white rounded-3xl p-10 shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="text-6xl">📧</div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Email
            </h3>

            <p className="mt-4 text-slate-600 break-all">
              aishu0743@gmail.com
            </p>
          </a>

          {/* Phone */}

          <a
            href="tel:+12244543441"
            className="bg-white rounded-3xl p-10 shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="text-6xl">📱</div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Phone
            </h3>

            <p className="mt-4 text-slate-600">
              +1 (224) 454-3441
            </p>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/aishwarya-mohanraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-10 shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="text-6xl">💼</div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              LinkedIn
            </h3>

            <p className="mt-4 text-slate-600">
              Connect with me
            </p>
          </a>

        </div>

        <div className="mt-16">

          <a
            href="/resume/resume.pdf"
            target="_blank"
            className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-2xl shadow-lg hover:bg-slate-100 transition"
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}