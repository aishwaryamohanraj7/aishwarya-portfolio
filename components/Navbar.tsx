"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Research",
    "Leadership",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5">

      <nav className="w-[95%] max-w-7xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

        <div className="flex items-center justify-between px-8 py-4">

          {/* Logo */}

          <a
            href="#"
            className="text-2xl font-black tracking-wide text-cyan-400"
          >
            Aishwarya
            <span className="text-cyan-400"> Mohanraj </span>
          </a>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (

              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-slate-300 font-medium transition duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>

            ))}

          </div>

          {/* Resume Button */}

          <div className="hidden md:block">

            <a
              href="/resume/resume.pdf"
              target="_blank"
              className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              Resume
            </a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <div className="border-t border-white/10 px-8 py-6 md:hidden">

            <div className="flex flex-col gap-5">

              {navItems.map((item) => (

                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 transition hover:text-cyan-400"
                >
                  {item}
                </a>

              ))}

              <a
                href="/resume/resume.pdf"
                target="_blank"
                className="mt-4 rounded-xl bg-cyan-500 py-3 text-center font-semibold text-white transition hover:bg-cyan-400"
              >
                Resume
              </a>

            </div>

          </div>

        )}

      </nav>

    </header>
  );
}