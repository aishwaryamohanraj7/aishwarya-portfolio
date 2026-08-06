import Image from "next/image";
export default function Research() {
  const technologies = [
    "Python",
    "NumPy",
    "Pandas",
    "Machine Learning",
    "Feature Extraction",
    "VOC Analysis",
    "Metal Oxide Sensors",
    "Biomedical Analytics",
  ];

  const highlights = [
    "Developing feature extraction algorithms for VOC sensor data",
    "Optimizing metal oxide nanosensor operating parameters",
    "Analyzing exhaled breath for non-invasive diabetes detection",
    "Applying biomedical data analytics and predictive modeling",
  ];

  return (
    <section
      id="research"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-[#071426] via-[#0B1F3A] to-[#2A0E4D]"
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-cyan-500 blur-[180px] opacity-20 animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full bg-purple-600 blur-[200px] opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[6px] text-cyan-300 font-semibold">
            CURRENT RESEARCH
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black text-white leading-tight">
            Non-Invasive Diabetes
            <br />
            Mellitus Detection
          </h2>

          <p className="mt-8 text-slate-300 max-w-3xl mx-auto text-lg leading-8">
            Developing feature extraction algorithms and biomedical data
            analytics techniques to analyze VOC profiles from exhaled breath
            using metal oxide nanosensors.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-24 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <h3 className="text-3xl font-bold text-white">
                Research Objective
              </h3>

              <p className="mt-8 text-slate-300 leading-9 text-lg">
                My current research focuses on developing computational
                approaches for non-invasive Diabetes Mellitus detection through
                VOC analysis of exhaled breath.
              </p>

              <p className="mt-8 text-slate-300 leading-9 text-lg">
                The work combines biomedical sensing, feature extraction, signal
                processing, and machine learning to support disease detection.
              </p>

              <h3 className="mt-12 text-3xl font-bold text-white">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-4 mt-6">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-200 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/40 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div>
              <h3 className="text-3xl font-bold text-white">
                Research Workflow
              </h3>

              <div className="mt-10 space-y-6">
                {[
                  [
                    "🫁",
                    "Breath Sample",
                    "Collection of exhaled breath containing VOCs.",
                  ],
                  [
                    "🧪",
                    "VOC Detection",
                    "Metal oxide nanosensors capture VOC responses.",
                  ],
                  [
                    "⚙️",
                    "Feature Extraction",
                    "Python algorithms extract informative sensor features.",
                  ],
                  [
                    "🤖",
                    "Machine Learning",
                    "Predictive analytics identify disease patterns.",
                  ],
                  [
                    "🩺",
                    "Clinical Insight",
                    "Supporting non-invasive diabetes detection.",
                  ],
                ].map(([icon, title, desc], i) => (
                  <div key={title}>
                    <div className="group flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:scale-[1.03] cursor-pointer">
                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-3xl transition-all duration-300 group-hover:bg-cyan-500 group-hover:rotate-6">
                        {icon}
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {title}
                        </h4>

                        <p className="text-slate-300 mt-1">{desc}</p>
                      </div>
                    </div>

                    {i < 4 && (
                      <div className="ml-8 h-10 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-16 border-t border-white/10 pt-12">
            <h3 className="text-3xl font-bold text-white text-center">
              Research Highlights
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {highlights.map((h) => (
                <div
                  key={h}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-slate-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 cursor-pointer"
                >
                  <span className="text-cyan-400 font-bold">✅</span>{" "}
                  <span className="group-hover:text-white">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Research Gallery */}
      {/* Testing Chamber */}

<div
  className="group relative overflow-hidden rounded-3xl
  bg-slate-900/70
  backdrop-blur-xl
  border border-slate-800
  hover:border-cyan-300
  hover:-translate-y-3
  hover:shadow-[0_0_45px_rgba(34,211,238,0.30)]
  transition-all duration-500"
>

  <Image
    src="/images/testing.png"
    alt="Testing Chamber"
    width={700}
    height={500}
    className="w-full h-80 object-contain bg-white transition-all duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-500"></div>

  <div className="p-6">

    <h4 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-cyan-300">
      Testing Chamber
    </h4>

    <p className="mt-3 text-slate-400 leading-7">
      Experimental setup used for sensor validation,
      breath sampling, and biomedical testing.
    </p>

  </div>

</div>

<div className="mt-24">

  <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
    Research Visualization
  </h3>

  <p className="text-center text-slate-400 mt-4">
    Experimental workflow and sensor setup used in the research.
  </p>

  <div className="flex justify-center mt-12">

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl">

      {/* Sensor Workflow */}

      <div
        className="group relative overflow-hidden rounded-3xl
        bg-slate-900/70
        backdrop-blur-xl
        border border-slate-800
        hover:border-cyan-300
        hover:-translate-y-3
        hover:shadow-[0_0_45px_rgba(34,211,238,0.30)]
        transition-all duration-500"
      >

        <Image
          src="/images/sensor.png"
          alt="Sensor Workflow"
          width={700}
          height={500}
          className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-500"></div>

        <div className="p-6">

          <h4 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-cyan-300">
            Sensor Workflow
          </h4>

          <p className="mt-3 text-slate-400 leading-7">
            Breath analysis workflow showing VOC sensing,
            gas mixing, testing chamber and biomedical sensor system.
          </p>

        </div>

      </div>

      {/* VOC Concentration */}

      <div
        className="group relative overflow-hidden rounded-3xl
        bg-slate-900/70
        backdrop-blur-xl
        border border-slate-800
        hover:border-cyan-300
        hover:-translate-y-3
        hover:shadow-[0_0_45px_rgba(34,211,238,0.30)]
        transition-all duration-500"
      >

        <Image
          src="/images/workflow.png"
          alt="VOC Concentration"
          width={700}
          height={500}
          className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-500"></div>

        <div className="p-6">

          <h4 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-cyan-300">
            VOC Concentration Analysis
          </h4>

          <p className="mt-3 text-slate-400 leading-7">
            Comparison of VOC concentrations in healthy and
            disease-simulated breath samples for diabetes research.
          </p>

        </div>

      </div>

    </div>

  </div>

</div>    </section>
  );
}