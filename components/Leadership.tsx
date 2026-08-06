export default function Leadership() {
  const roles = [
    {
      title: "Health Informatics Student Ambassador",
      subtitle: "Indiana University Indianapolis",
      icon: "🎓",
      description:
        "Represent the Health Informatics graduate program through student recruitment, mentorship, outreach, and engagement initiatives.",
    },
    {
      title: "Upward Bound Program Mentor",
      subtitle: "Indiana University Indianapolis",
      icon: "🌟",
      description:
        "Mentor high school students through academic coaching, college readiness, career guidance, and leadership development.",
    },
    {
      title: "Building Manager",
      subtitle: "Indiana University Indianapolis",
      icon: "🏢",
      description:
        "Coordinate campus operations, event logistics, stakeholder communication, and project support in a fast-paced university environment.",
    },
  ];

  return (
    <section
      id="leadership"
      className="relative overflow-hidden py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Leadership & Impact
          </h2>

          <p className="mt-5 text-lg text-slate-300 max-w-3xl mx-auto">
            Leadership experiences that strengthened my communication,
            collaboration, mentoring, and project coordination skills.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {roles.map((role) => (

            <div
              key={role.title}
              className="
                group
                relative
                rounded-3xl
                border border-white/10
                bg-white/10
                backdrop-blur-xl
                p-10
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-3
                hover:scale-105
                hover:border-cyan-400/60
                hover:shadow-[0_20px_60px_rgba(34,211,238,0.35)]
              "
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 to-blue-500/10"></div>

              <div className="relative z-10">

                <div className="text-6xl transition-transform duration-500 group-hover:scale-125">
                  {role.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                  {role.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  {role.subtitle}
                </p>

                <p className="mt-6 leading-8 text-slate-300">
                  {role.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}