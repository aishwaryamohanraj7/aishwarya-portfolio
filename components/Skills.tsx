export default function Skills() {
  const categories = [
    {
      icon: "💻",
      title: "Programming",
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "SQL", "R", "SAS"],
    },
    {
      icon: "🏥",
      title: "Healthcare Standards",
      color: "from-cyan-500 to-teal-500",
      skills: ["FHIR", "HL7", "SNOMED CT", "EHR / EMR"],
    },
    {
      icon: "📊",
      title: "Analytics",
      color: "from-indigo-500 to-blue-500",
      skills: [
        "Machine Learning",
        "Statistics",
        "Random Forest",
        "Data Visualization",
      ],
    },
    {
      icon: "🛠",
      title: "Tools",
      color: "from-purple-500 to-cyan-500",
      skills: [
        "Power BI",
        "Tableau",
        "Git",
        "VS Code",
        "Jupyter",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-cyan-500 blur-[180px] opacity-10"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600 blur-[200px] opacity-10"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-600 blur-[180px] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            CORE EXPERTISE
          </p>

          <h2 className="mt-5 text-3xl lg:text-6xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <p className="mt-8 text-slate-400 max-w-3xl mx-auto text-lg leading-8">
            Combining healthcare knowledge, data analytics,
            interoperability, artificial intelligence,
            and digital health technologies to build
            innovative healthcare solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-24">

          {categories.map((category) => (

            <div
              key={category.title}
              className="group bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 transition-all duration-500 hover:border-cyan-300 hover:-translate-y-3 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]"
            >

              <div
                className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-5xl shadow-xl`}
              >
                {category.icon}
              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4 mt-8">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-5 py-3 rounded-full bg-slate-800/70 backdrop-blur-md border border-slate-700 text-slate-200 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              <div className="mt-10 h-1 rounded-full bg-slate-800 overflow-hidden">

                <div
                  className={`h-full w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r ${category.color}`}
                ></div>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-28 border-t border-slate-800"></div>
                {/* Current Focus */}

        <div className="mt-20">

          <h3 className="text-center text-3xl font-bold text-white">
            Currently Exploring
          </h3>

          <p className="text-center text-slate-400 mt-4 max-w-3xl mx-auto">
            Continuously expanding my expertise in healthcare AI,
            clinical decision support, healthcare interoperability,
            predictive analytics, and digital health innovation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            {[
              "Healthcare AI",
              "Clinical Decision Support",
              "Population Health",
              "Healthcare Interoperability",
              "Healthcare Data Engineering",
              "Predictive Analytics",
              "Digital Health",
              "Cloud Healthcare",
            ].map((item) => (

              <span
                key={item}
                className="px-6 py-3 rounded-full
                bg-slate-900/70 backdrop-blur-md
                border border-cyan-500/30
                text-cyan-300
                hover:bg-cyan-500/20
                hover:border-cyan-400
                hover:scale-105
                transition-all duration-300"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

        {/* Bottom Quote */}

        <div className="mt-24 text-center">

          <p className="italic text-slate-500 text-lg max-w-4xl mx-auto leading-8">

            "Technology is most powerful when it transforms data into
            meaningful clinical insights that improve patient care."

          </p>

        </div>

      </div>

    </section>
  );
}