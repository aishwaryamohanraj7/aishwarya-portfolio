import Image from "next/image";

export default function AutoimmuneProject() {
  return (
    <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-cyan-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500">

      {/* Title Image */}

      <div className="group overflow-hidden rounded-2xl border border-slate-700">

        <Image
          src="/images/r title.png"
          alt="Autoimmune Biomarker Analysis"
          width={1200}
          height={700}
          className="w-full h-auto object-contain bg-white group-hover:scale-105 transition duration-700"
        />

      </div>

      <h3 className="mt-8 text-2xl font-bold text-white">
        
      </h3>

      <p className="mt-4 text-slate-400 leading-7">
        Statistical analysis of inflammatory biomarkers for
        autoimmune disease diagnosis using descriptive
        statistics, Welch's t-tests, Spearman correlation,
        and Binary Logistic Regression.
      </p>

      {/* Images */}

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="group overflow-hidden rounded-2xl border border-slate-700 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-500">

          <Image
            src="/images/welchs t test.png"
            alt="Welch's t-Test"
            width={700}
            height={500}
            className="w-full h-auto object-contain bg-white group-hover:scale-105 transition duration-700"
          />

          <div className="p-5">

            <h4 className="text-xl font-semibold text-white">
              Welch's t-Test
            </h4>

            <p className="mt-2 text-slate-400 text-sm">
              Statistical comparison of biomarker levels
              between autoimmune and healthy patients.
            </p>

          </div>

        </div>

        <div className="group overflow-hidden rounded-2xl border border-slate-700 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-500">

          <Image
            src="/images/model perfomance and roc analysis.png"
            alt="Model Performance"
            width={700}
            height={500}
            className="w-full h-auto object-contain bg-white group-hover:scale-105 transition duration-700"
          />

          <div className="p-5">

            <h4 className="text-xl font-semibold text-white">
              Model Performance
            </h4>

            <p className="mt-2 text-slate-400 text-sm">
              Logistic Regression model evaluated using ROC,
              AUC, sensitivity and specificity.
            </p>

          </div>

        </div>

      </div>

      {/* Technologies */}

      <div className="flex flex-wrap gap-3 mt-8">

        {[
          "R",
          "Welch's t-Test",
          "Logistic Regression",
          "Spearman Correlation",
          "ROC Analysis",
          "Biomedical Statistics",
          "Data Visualization",
        ].map((tech) => (

          <span
            key={tech}
            className="px-3 py-2 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-300 text-sm hover:bg-cyan-500/20 transition"
          >
            {tech}
          </span>

        ))}

      </div>

      <div className="mt-8 space-y-3 text-slate-300 text-sm">

        <p>✅ Descriptive statistical analysis</p>
        <p>✅ Welch's two-sample t-test</p>
        <p>✅ Spearman correlation analysis</p>
        <p>✅ Binary Logistic Regression</p>
        <p>✅ ROC & AUC performance evaluation</p>

      </div>

      <div className="mt-10">

        <a
          href="/reports/Autoimmune Analysis Report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          📄 View Report
        </a>

      </div>

    </div>
  );
}