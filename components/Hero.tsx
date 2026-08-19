"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-[#081426] to-[#1d1242]">

      {/* ================= Background Glow ================= */}

      <div className="absolute -top-40 -left-24 w-[520px] h-[520px] rounded-full bg-cyan-500/20 blur-[180px] animate-pulse"></div>

      <div className="absolute bottom-0 -right-32 w-[650px] h-[650px] rounded-full bg-violet-600/20 blur-[220px] animate-pulse"></div>

      <div className="absolute top-1/3 left-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[150px]"></div>

      {/* Floating Particles */}

      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cyan-300/20 animate-pulse"
          style={{
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-36 pb-16 lg:pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

         {/* ================= LEFT ================= */}

<div className="order-1 lg:order-1 text-center lg:text-left">

  {/* Status Badge */}
  

            <div className="inline-flex items-center gap-4 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-xl px-6 py-3">

              <div className="relative">

                <div className="h-3 w-3 rounded-full bg-green-400 animate-ping"></div>

                <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-400"></div>

              </div>

              <span className="font-semibold text-cyan-300">
                Open to Health Informatics & Healthcare Analytics Internships and full-time opportunities
              </span>

            </div>

            <h1 className="mt-8 text-3xl lg:text-3xl font-black leading-tight text-white">

              Transforming
              <br />

              Healthcare Through
              <br />

              Data & AI

            </h1>

            <h2 className="mt-8 text-3xl font-bold text-cyan-400">

              Aishwarya Mohanraj

            </h2>

            <p className="mt-6 text-xl leading-9 text-slate-300">

              Health Informatics Graduate Student

              <br />

              Healthcare Analytics • Clinical Informatics

              <br />

              Biomedical Research • Healthcare Interoperability

            </p>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">

              Passionate about leveraging healthcare data, artificial
              intelligence, interoperability standards, and biomedical
              analytics to improve patient outcomes and transform healthcare.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href="#projects"
                className="rounded-2xl bg-cyan-500 w-full sm:w-auto px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                Explore Projects
              </a>

              <a
                href="/resume/resume.pdf"
                target="_blank"
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl w-full sm:w-auto px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-white/10"
              >
                Download Resume
              </a>

            </div>

            {/* Statistics */}

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20">

                <h3 className="text-5xl font-black text-cyan-400 group-hover:scale-110 transition">
                  15+
                </h3>

                <p className="mt-3 text-slate-300">
                  Health Informatics Projects
                </p>

              </div>

              <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20">

                <h3 className="text-5xl font-black text-cyan-400 group-hover:scale-110 transition">
                  3+
                </h3>

                <p className="mt-3 text-slate-300">
                  Years of Healthcare Experience
                </p>

              </div>

              <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20">

                <h3 className="text-5xl font-black text-cyan-400 group-hover:scale-110 transition">
                  17+
                </h3>

                <p className="mt-3 text-slate-300">
                  Healthcare Technologies
                </p>

              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="flex justify-center lg:justify-center mt-8 lg:mt-0">

            <div className="relative w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[520px] lg:h-[520px]">
              {/* Main Glow */}

              <div className="lg:block absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 blur-3xl opacity-30 animate-pulse"></div>

              {/* Main Circle */}

              <div className="hidden lg:block absolute inset-6 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.25)]">

                <div className="text-center">

                  <div className="text-7xl mb-5">
                    🧬
                  </div>

                  <h3 className="text-3xl font-black text-white">
                    Healthcare AI
                  </h3>

                  <p className="mt-3 text-cyan-300">
                    Data • Analytics • Research
                  </p>

                </div>

              </div>

              {/* Floating Skill Cards */}

              <div className="hidden lg:block absolute top-4 left-10 rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-xl px-6 py-4 shadow-xl transition-all duration-300 hover:scale-105">

                <h4 className="font-bold text-cyan-300">
                  EHR
                </h4>

              </div>

              <div className="hidden lg:block absolute top-20 right-0 rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-xl px-6 py-4 shadow-xl transition-all duration-300 hover:scale-105">

                <h4 className="font-bold text-cyan-300">
                  FHIR
                </h4>

              </div>

              <div className="hidden lg:block absolute bottom-32 left-0 rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-xl px-6 py-4 shadow-xl transition-all duration-300 hover:scale-105">

                <h4 className="font-bold text-cyan-300">
                  Python
                </h4>

              </div>

              <div className="hidden lg:block absolute bottom-8 right-12 rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-xl px-6 py-4 shadow-xl transition-all duration-300 hover:scale-105">

                <h4 className="font-bold text-cyan-300">
                  SQL
                </h4>

              </div>

              <div className="hidden lg:block absolute left-[-20px] top-1/2 rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-xl px-6 py-4 shadow-xl transition-all duration-300 hover:scale-105">

                <h4 className="font-bold text-cyan-300">
                  EMR
                </h4>

              </div>

              <div className="hidden lg:block absolute right-[-40px] top-[58%] rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-xl px-6 py-4 shadow-xl transition-all duration-300 hover:scale-105">

                <h4 className="font-bold text-cyan-300">
                  Tableau
                </h4>

              </div>
                            {/* Research Focus Card */}

              <div className="hidden lg:block absolute -bottom-8 -left-10 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl px-7 py-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/20">

                <p className="text-sm uppercase tracking-widest text-slate-400">
                  
                </p>

                <h3 className="mt-2 text-xl font-bold text-cyan-300">
                  Biomedical Data Analytics
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  
                </p>

              </div>

              {/* Expertise Card */}

              <div className="hidden lg:block absolute -top-8 -right-10 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl px-7 py-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/20">

                

                <div className="mt-3 flex flex-wrap gap-2">

                  {[
                    "Machine Learning",
                   
                    "HL7",
                    "Power BI",
                    "AI",
                    
                  ].map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

              {/* Floating Icons */}

              <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 text-4xl opacity-70 animate-bounce">
                
              </div>

              <div className="hidden lg:block absolute bottom-16 left-20 text-4xl opacity-70 animate-pulse">
                📊
              </div>

              <div className="hidden lg:block absolute bottom-20 right-20 text-4xl opacity-70 animate-bounce">
                🤖
              </div>

              <div className="hidden lg:block absolute top-1/2 right-8 text-4xl opacity-70 animate-pulse">
  💻
</div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}

        <div className="hidden lg:flex mt-20 justify-center">

          <a
            href="#about"
            className="group flex flex-col items-center text-slate-400 transition hover:text-cyan-300"
          >

            <span className="text-sm tracking-[4px] uppercase">
              Scroll
            </span>

            <div className="mt-4 h-14 w-8 rounded-full border border-cyan-500/30 flex justify-center">

              <div className="mt-2 h-3 w-3 rounded-full bg-cyan-400 animate-bounce"></div>

            </div>

          </a>

        </div>

      </div>

    </section>
  );
}