export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#081426] to-[#1d1242] text-white py-16">

      {/* ================= Background Glow Effects ================= */}

      <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-[140px] animate-pulse"></div>

      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[180px] animate-pulse"></div>

      <div className="absolute top-10 left-1/2 w-56 h-56 bg-violet-500/20 rounded-full blur-[130px] animate-pulse"></div>

      <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-cyan-400/10 rounded-full blur-[100px] animate-pulse"></div>

      {/* Floating Particles */}

      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cyan-300/20 animate-pulse"
          style={{
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      {/* ================= Content ================= */}

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

          <div className="text-center">

            <h2 className="text-4xl font-black tracking-wide">
              Aishwarya Mohanraj
            </h2>

            <p className="mt-4 text-slate-300 text-lg">
              Health Informatics Graduate Student
            </p>

            <p className="mt-2 text-slate-400">
              Healthcare Analytics • Clinical Informatics • Biomedical Research
            </p>

            {/* Links */}

            <div className="mt-10 flex flex-wrap justify-center gap-8">

              <a
                href="mailto:aishu0743@gmail.com"
                className="transition duration-300 hover:text-cyan-400 hover:-translate-y-1"
              >
                📧 Email
              </a>

              <a
                href="tel:+12244543441"
                className="transition duration-300 hover:text-cyan-400 hover:-translate-y-1"
              >
                📱 Phone
              </a>

              <a
                href="https://www.linkedin.com/in/aishwarya-mohanraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-cyan-400 hover:-translate-y-1"
              >
                💼 LinkedIn
              </a>

              <a
                href="https://github.com/aishwaryamohanraj7"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-cyan-400 hover:-translate-y-1"
              >
                💻 GitHub
              </a>

              <a
                href="/resume/resume.pdf"
                target="_blank"
                className="transition duration-300 hover:text-cyan-400 hover:-translate-y-1"
              >
                📄 Resume
              </a>

            </div>

            {/* Divider */}

            <div className="mt-12 border-t border-white/10 pt-8">

              <p className="text-slate-300 text-lg">
                📍 Indianapolis, Indiana
              </p>

              <p className="mt-4 text-slate-500 text-sm">
                © 2026 Aishwarya Mohanraj. All Rights Reserved.
              </p>

              <p className="mt-2 text-slate-500 text-sm">
                Built with Next.js • React • Tailwind CSS
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}