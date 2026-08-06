"use client";

import { Home, User, Code2, FolderOpen, FlaskConical, Award, Mail, FileText } from "lucide-react";

export default function Sidebar() {
  const menu = [
    { icon: <Home size={20} />, title: "Home", href: "#" },
    { icon: <User size={20} />, title: "About", href: "#about" },
    { icon: <Code2 size={20} />, title: "Skills", href: "#skills" },
    { icon: <FolderOpen size={20} />, title: "Featured Work", href: "#projects" },
    { icon: <FlaskConical size={20} />, title: "Research", href: "#research" },
    { icon: <Award size={20} />, title: "Leadership", href: "#leadership" },
    { icon: <Mail size={20} />, title: "Contact", href: "#contact" },
    { icon: <FileText size={20} />, title: "Resume", href: "/resume/resume.pdf" },
  ];

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex">

      <div className="group bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:w-60 w-20">

        <div className="p-5">

          <div className="text-center">

            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto flex items-center justify-center text-white font-bold text-xl">

              AM

            </div>

            <h2 className="mt-4 text-white font-bold hidden group-hover:block">
              Aishwarya Mohanraj
            </h2>

            <p className="text-cyan-400 text-sm hidden group-hover:block">
              Health Informatics
            </p>

          </div>

          <div className="mt-10 space-y-3">

            {menu.map((item) => (

              <a
                key={item.title}
                href={item.href}
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition p-3 rounded-xl hover:bg-slate-800"
              >

                {item.icon}

                <span className="hidden group-hover:block whitespace-nowrap">
                  {item.title}
                </span>

              </a>

            ))}

          </div>

          <div className="mt-10 hidden group-hover:block">

            <div className="border-t border-slate-700 pt-5">

              <p className="text-xs text-slate-400">
                Open to Internship, Full time, and Research Opportunities in Health Informatics, Healthcare Analytics, and Digital Health.
              </p>

              <div className="mt-3 h-2 rounded-full bg-slate-700 overflow-hidden">

                <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}