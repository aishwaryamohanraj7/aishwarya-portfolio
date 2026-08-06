import Image from "next/image";
import AutoimmuneProject from "./AutoimmuneProject";

export default function Projects() {
  return (

    <section
      id="projects"
      className="relative overflow-hidden py-36 bg-gradient-to-br from-[#0F172A] via-[#312E81] to-[#020617]"
>

      {/* Background Glow */}

      <div className="absolute -top-56 left-0 w-[600px] h-[600px] rounded-full bg-cyan-500 blur-[220px] opacity-10"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600 blur-[220px] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">

            FEATURED WORK

          </p>

          <h2 className="mt-5 text-5xl lg:text-4xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">

            FHIR Healthcare ETL Pipeline

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-400">

            End-to-end healthcare interoperability project integrating
            OpenEMR, FHIR APIs, SNOMED CT and HL7 v2 for modern
            healthcare data exchange.

          </p>

        </div>

        {/* HERO IMAGE */}

        <div className="mt-20 group overflow-hidden rounded-3xl border border-slate-800 hover:border-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)] transition-all duration-500">

          <Image
            src="/images/fhir-etl.png"
            alt="FHIR ETL"
            width={1600}
            height={900}
            className="w-full object-cover group-hover:scale-105 transition duration-700"
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">
        {/* Project Overview */}

<div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 hover:border-cyan-300 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)] transition-all duration-500">

  <h3 className="text-3xl font-bold text-white">
    Project Overview
  </h3>

  <p className="mt-6 text-slate-300 leading-8">

    Designed and implemented an end-to-end healthcare ETL
    pipeline that extracts patient information from OpenEMR,
    transforms clinical terminology using SNOMED CT,
    converts data into HL7 v2 format, and loads the processed
    information into a FHIR-compatible healthcare system.

  </p>

  <h3 className="mt-10 text-2xl font-bold text-white">
    Technology Stack
  </h3>

  <div className="flex flex-wrap gap-3 mt-6">

    {[
      "Python",
      "FHIR",
      "HL7 v2",
      "SNOMED CT",
      "OpenEMR",
      "GitHub Pages",
    ].map((tech) => (

      <span
        key={tech}
        className="px-4 py-2 rounded-full
        bg-slate-800/70
        backdrop-blur-md
        border border-cyan-500/30
        text-cyan-300
        hover:bg-cyan-500/20
        hover:border-cyan-300
        hover:scale-105
        hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
        transition-all duration-300"
      >

        {tech}

      </span>

    ))}

  </div>

</div>

{/* Project Links */}

<div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 hover:border-cyan-300 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)] transition-all duration-500">

  <h3 className="text-3xl font-bold text-white">
    Project Highlights
  </h3>

  <div className="mt-8 space-y-5">

    <div className="flex items-center gap-3 text-slate-300">
      <span className="text-green-400 text-xl">✓</span>
      Built an end-to-end ETL pipeline using Python.
    </div>

    <div className="flex items-center gap-3 text-slate-300">
      <span className="text-green-400 text-xl">✓</span>
      Integrated OpenEMR with FHIR APIs.
    </div>

    <div className="flex items-center gap-3 text-slate-300">
      <span className="text-green-400 text-xl">✓</span>
      Standardized clinical terminology using SNOMED CT.
    </div>

    <div className="flex items-center gap-3 text-slate-300">
      <span className="text-green-400 text-xl">✓</span>
      Generated HL7 v2 messages for interoperability.
    </div>

    <div className="flex items-center gap-3 text-slate-300">
      <span className="text-green-400 text-xl">✓</span>
      Designed and deployed a GitHub Pages documentation website.
    </div>

  </div>

  <div className="flex gap-5 mt-10">

    <a
      href="https://pages.github.iu.edu/Aismohan/Project-Health-Info-Standards-Group-Two/website/index.html"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      🌐 Live Website
    </a>

    <a
      href="https://github.com/aishwaryamohanraj7/groupprojectthiswebsite"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 transition"
    >
      💻 GitHub
    </a>

  </div>

</div>

</div>

{/* Supporting Screenshots */}

<div className="mt-24">

  <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">

    Project Gallery

  </h3>

  <p className="text-center text-slate-400 mt-4">

    Explore different sections of the FHIR ETL Pipeline project.

  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-12">
    {/* Screenshot 1 */}

<div className="group overflow-hidden rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500">

  <Image
    src="/images/Project Homepage.png"
    alt="Project Homepage"
    width={900}
    height={500}
    className="w-full h-96 object-contain bg-slate-900 group-hover:scale-105 transition duration-700"
  />

  <div className="p-6">

    <h4 className="text-2xl font-bold text-white">
      Homepage
    </h4>

    <p className="mt-3 text-slate-400">
      Overview of the ETL pipeline, workflow, and healthcare interoperability architecture.
    </p>

  </div>

</div>

{/* Screenshot 2 */}

<div className="group overflow-hidden rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500">

  <Image
    src="/images/ETL Workflow.png"
    alt="Workflow"
    width={700}
    height={500}
    className="w-full h-96 object-contain bg-slate-900 group-hover:scale-105 transition duration-700"
  />

  <div className="p-6">

    <h4 className="text-2xl font-bold text-white">
      ETL Workflow
    </h4>

    <p className="mt-3 text-slate-400">
      End-to-end data extraction, transformation, and loading process using FHIR APIs.
    </p>

  </div>

</div>

{/* Screenshot 3 */}

<div className="group overflow-hidden rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500">

  <Image
    src="/images/Technology.png"
    alt="Technology"
    width={700}
    height={500}
    className="w-full h-96 object-contain bg-slate-900 group-hover:scale-105 transition duration-700"
  />

  <div className="p-6">

    <h4 className="text-2xl font-bold text-white">
      Technology Overview
    </h4>

    <p className="mt-3 text-slate-400">
      Key technologies, interoperability standards, and project architecture.
    </p>

  </div>

</div>

</div>

</div>

{/* Other Projects */}

<div className="mt-28">

  <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">

    Other Academic Projects

  </h3>

  <div className="grid md:grid-cols-3 gap-8 mt-12">

   {/* ================= Childhood Vaccination Analytics ================= */}

<div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500">

  <h3 className="text-3xl font-bold text-blue-500">

    Childhood Vaccination Analytics

  </h3>

  <p className="mt-5 text-slate-400 leading-8">

    Comparative analysis of Social Determinants of Health
    influencing childhood vaccination completion across
    Indiana counties using statistical analysis and machine
    learning models.

  </p>

  {/* ================= HEATMAP ================= */}

  <div className="mt-8 group overflow-hidden rounded-3xl border border-slate-800 hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

    <Image
      src="/images/correlation heat map.png"
      alt="Correlation Heatmap"
      width={1200}
      height={700}
      className="w-full h-auto object-contain bg-white group-hover:scale-105 transition duration-700"
    />

  </div>

  <p className="mt-4 text-center text-slate-400 text-sm">

    Correlation Heatmap showing relationships between
    Social Determinants of Health and vaccination completion.

  </p>

  {/* ================= MODEL IMAGES ================= */}

  <div className="grid md:grid-cols-2 gap-6 mt-10">

    {/* Logistic */}

    <div className="group overflow-hidden rounded-3xl border border-slate-800 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500">

      <Image
        src="/images/logistic regression.png"
        alt="Logistic Regression"
        width={700}
        height={500}
        className="w-full h-auto object-contain bg-white group-hover:scale-105 transition duration-700"
      />

      <div className="p-5">

        <h4 className="text-xl font-bold text-white">

          Logistic Regression

        </h4>

        <p className="mt-2 text-slate-400 text-sm">

          Binary classification model evaluating county-level
          predictors of vaccination completion.

        </p>

      </div>

    </div>

    {/* Linear */}

    <div className="group overflow-hidden rounded-3xl border border-slate-800 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500">

      <Image
        src="/images/linear regression.png"
        alt="Linear Regression"
        width={700}
        height={500}
        className="w-full h-auto object-contain bg-white group-hover:scale-105 transition duration-700"
      />

      <div className="p-5">

        <h4 className="text-xl font-bold text-white">

          Linear Regression

        </h4>

        <p className="mt-2 text-slate-400 text-sm">

          Predictive modeling and performance evaluation
          using continuous vaccination completion rates.

        </p>

      </div>

    </div>

  </div>

  {/* ================= TECHNOLOGIES ================= */}

  <div className="flex flex-wrap gap-3 mt-10">

    {[
      "Python",
      "SQL",
      "MySQL",
      "Pandas",
      "Scikit-learn",
      "Logistic Regression",
      "Linear Regression",
      "Machine Learning",
    ].map((tech) => (

      <span
        key={tech}
        className="px-3 py-2 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-300 text-sm hover:bg-cyan-500/20 transition-all duration-300"
      >

        {tech}

      </span>

    ))}

  </div>

  {/* ================= BUTTONS ================= */}

  <div className="flex gap-5 mt-10">

    <a
      href="/reports/Final Project Report - Group 2.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
    >

      📄 View Report

    </a>

    

  </div>

</div>
    {/* ================= MEDMIND ================= */}

<div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-cyan-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

  {/* Project Image */}

  <div className="group overflow-hidden rounded-2xl">

    <Image
      src="/images/medmind-home.png"
      alt="MedMind"
      width={700}
      height={450}
      className="w-full h-auto object-contain bg-white rounded-2xl group-hover:scale-105 transition duration-700"
    />

  </div>
  {/* ================= MEDMIND IMAGES ================= */}

<div className="mt-8">

  

  {/* WBS + Budget */}

  <div className="grid md:grid-cols-2 gap-6 mt-8">

    {/* WBS */}

    <div className="group overflow-hidden rounded-3xl border border-slate-800 hover:border-cyan-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-500">

      <Image
        src="/images/medmind-wbs.png"
        alt="Work Breakdown Structure"
        width={700}
        height={500}
        className="w-full h-auto object-contain bg-white group-hover:scale-105 transition duration-700"
      />

      <div className="p-5">

        <h4 className="text-xl font-bold text-white">
          Work Breakdown Structure
        </h4>

        <p className="mt-2 text-slate-400 text-sm">
          Structured project planning across planning,
          development, pilot testing, launch,
          and compliance phases.
        </p>

      </div>

    </div>

    {/* Budget */}

    <div className="group overflow-hidden rounded-3xl border border-slate-800 hover:border-cyan-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-500">

      <Image
        src="/images/medmind-budget.png"
        alt="Project Budget"
        width={700}
        height={500}
        className="w-full h-auto object-contain bg-white group-hover:scale-105 transition duration-700"
      />

      <div className="p-5">

        <h4 className="text-xl font-bold text-white">
          Project Budget
        </h4>

        <p className="mt-2 text-slate-400 text-sm">
          Budget allocation across five project phases,
          including planning, development,
          pilot testing, launch, and compliance.
        </p>

      </div>

    </div>

  </div>

</div>

  <h3 className="mt-8 text-2xl font-bold text-white">
    
  </h3>

  <p className="mt-4 text-slate-400 leading-7">

    AI-enabled digital mental health platform designed to improve
    psychiatric medication adherence through smart reminders,
    wearable integration, AI-powered mood journaling,
    pharmacy refill tracking, and a secure provider dashboard.

  </p>

  <div className="flex flex-wrap gap-3 mt-6">

    {[
      "Health Informatics",
      "AI",
      "Mobile Health",
      "Wearables",
      "HIPAA",
      "GDPR",
      "Project Management",
      "UX/UI"
    ].map((tech)=>(

      <span
        key={tech}
        className="px-3 py-2 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-300 text-sm hover:bg-cyan-500/20 transition"
      >

        {tech}

      </span>

    ))}

  </div>

  <div className="mt-8 space-y-3 text-slate-300 text-sm">

    <p>✅ Smart medication reminders</p>

    <p>✅ AI mood journaling & chatbot</p>

    <p>✅ Wearable device integration</p>

    <p>✅ Provider dashboard with real-time analytics</p>

    <p>✅ HIPAA & GDPR compliant project planning</p>

  </div>

  <div className="mt-8 flex gap-4">

    <a
      href="/reports/MEDMIND.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
    >
      📄 View Project
    </a>

  </div>

</div>

    {/* Biomarker */}
    <AutoimmuneProject />

    

  </div>

</div>

<div className="mt-24 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

</div>

</section>

);

}