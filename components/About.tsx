"use client";

import { useState } from "react";

export default function About() {
  const [active, setActive] = useState(0);

  const journey = [
    {
      icon: "🦷",
      title: "Dentistry",
      subtitle: "Bachelor of Dental Surgery",
      description:
        "Built a strong clinical foundation through patient care, diagnosis, treatment planning, EHR documentation, and evidence-based clinical practice.",
    },
    {
      icon: "📊",
      title: "Public Health",
      subtitle: "Healthcare Analytics",
      description:
        "Transitioned into healthcare analytics, using Python, SQL, and statistical analysis to evaluate public health data and population health trends.",
    },
    {
      icon: "🎓",
      title: "Health Informatics",
      subtitle: "Indiana University Indianapolis",
      description:
        "Currently pursuing a Master's in Health Informatics with a focus on FHIR, HL7, clinical decision support, interoperability, and healthcare AI.",
    },
    {
      icon: "🔬",
      title: "Research",
      subtitle: "Biomedical Data Analytics",
      description:
        "Conducting biomedical research involving VOC signal processing, feature extraction, predictive modeling, and disease detection.",
    },
    {
      icon: "🚀",
      title: "Future",
      subtitle: "Healthcare Innovation",
      description:
        "Aspiring to build intelligent healthcare technologies that improve patient outcomes through data analytics, interoperability, and artificial intelligence.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 bg-gradient-to-br from-slate-950 via-[#081426] to-[#1d1242]"
    >

      {/* ================= Background Glow ================= */}

      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[180px] animate-pulse"></div>

      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[220px] animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[150px]"></div>

      {/* Floating Particles */}

      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cyan-300/20 animate-pulse"
          style={{
            width: `${5 + Math.random() * 10}px`,
            height: `${5 + Math.random() * 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-cyan-400 font-semibold">
            MY JOURNEY
          </p>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-white leading-tight">
            From Dentistry
            <br />
            to Healthcare Analytics
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-slate-300">
            My journey has evolved from clinical dentistry to healthcare
            analytics, biomedical research, and health informatics. Every step
            has strengthened my passion for leveraging technology, data, and AI
            to improve patient care and healthcare delivery.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          <div className="absolute top-10 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"></div>

          <div className="grid lg:grid-cols-5 gap-8 relative">

            {journey.map((item, index) => (

              <div
                key={item.title}
                onMouseEnter={() => setActive(index)}
                className="text-center cursor-pointer transition-all duration-500"
              >

                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 text-4xl transition-all duration-500 ${
                    active === index
                      ? "border-cyan-400 bg-gradient-to-br from-cyan-500/30 to-blue-500/20 scale-110 rotate-6 shadow-[0_0_40px_rgba(34,211,238,0.45)]"
                      : "border-slate-700 bg-slate-900"
                  }`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 font-medium text-cyan-400">
                  {item.subtitle}
                </p>

              </div>

            ))}

          </div>

        </div>
                {/* ================= Active Journey Card ================= */}

        <div className="mt-20 flex justify-center">

          <div className="max-w-5xl w-full rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl transition-all duration-500 hover:border-cyan-400 hover:shadow-cyan-500/20">

            <div className="grid lg:grid-cols-[120px_1fr] gap-8 items-center">

              <div className="flex justify-center">

                <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-6xl shadow-[0_0_35px_rgba(34,211,238,0.35)]">

                  {journey[active].icon}

                </div>

              </div>

              <div>

                <h3 className="text-4xl font-black text-white">
                  {journey[active].title}
                </h3>

                <p className="mt-2 text-xl font-semibold text-cyan-400">
                  {journey[active].subtitle}
                </p>

                <p className="mt-8 text-lg leading-9 text-slate-300">
                  {journey[active].description}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= Quote ================= */}

        <div className="mt-24 flex justify-center">

          <div className="max-w-5xl rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl p-10">

            <p className="text-center text-xl italic leading-10 text-slate-300">

              "My journey from dentistry to healthcare analytics has been
              driven by one goal — leveraging data, technology, and innovation
              to improve patient care and transform healthcare."

            </p>

          </div>

        </div>

        {/* ================= Statistics ================= */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20">

            <h3 className="text-5xl font-black text-cyan-400 group-hover:scale-110 transition">
              3+
            </h3>

            <p className="mt-4 text-slate-300">
              Years of Healthcare Experience
            </p>

          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20">

            <h3 className="text-5xl font-black text-cyan-400 group-hover:scale-110 transition">
              4+
            </h3>

            <p className="mt-4 text-slate-300">
              Graduate Projects
            </p>

          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20">

            <h3 className="text-5xl font-black text-cyan-400 group-hover:scale-110 transition">
              10+
            </h3>

            <p className="mt-4 text-slate-300">
              Healthcare Technologies
            </p>

          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20">

            <h3 className="text-5xl font-black text-cyan-400 group-hover:scale-110 transition">
              2
            </h3>

            <p className="mt-4 text-slate-300">
              Research Areas
            </p>

          </div>

        </div>
                {/* ================= Current Focus ================= */}

        <div className="mt-28">

          <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 backdrop-blur-xl p-12">

            <h3 className="text-center text-4xl font-black text-white">
              What I'm Currently Focused On
            </h3>

            <p className="mt-5 max-w-3xl mx-auto text-center text-lg leading-8 text-slate-300">
              Expanding my expertise across healthcare analytics, clinical
              informatics, biomedical research, interoperability, and
              artificial intelligence to develop data-driven healthcare
              solutions.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              {[
                "Healthcare Analytics",
                "Clinical Informatics",
                "FHIR Interoperability",
                "Biomedical Research",
                "Machine Learning",
                "Healthcare AI",
                "Population Health",
                "Predictive Analytics",
                "Clinical Decision Support",
                "Digital Health",
              ].map((item) => (

                <span
                  key={item}
                  className="cursor-pointer rounded-full border border-cyan-400/30 bg-white/5 px-6 py-3 text-cyan-300 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>

        {/* ================= Bottom Banner ================= */}

        <div className="mt-28">

          <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center shadow-2xl">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-5xl shadow-[0_0_35px_rgba(34,211,238,0.35)]">
              🚀
            </div>

            <h3 className="mt-8 text-4xl font-black text-white">
              Looking Ahead
            </h3>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-slate-300">
              My goal is to bridge clinical expertise with health informatics,
              biomedical research, and artificial intelligence to create
              innovative technologies that enhance healthcare quality, improve
              patient outcomes, and support data-driven clinical decision
              making.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}