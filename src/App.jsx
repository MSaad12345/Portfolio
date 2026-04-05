import "./App.css";
import { useState } from "react";
import avatar from "./assets/avatar2.jpeg";
import projects from "./project.js";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen w-full bg-[#010134] text-[#fbf8f5]">
        {/* Header / Navigation */}
        <header className="fixed top-0 w-full bg-[#010134]/80 shadow-lg z-50">
          <div className="flex items-center justify-between px-6 md:px-20 py-6">
            <div
              className="flex items-center text-3xl font-black tracking-wide italic"
              style={{ color: "gold" }}
            >
              Saad
            </div>
            {/* Desktop nav */}
            <nav className="hidden md:flex gap-10 text-lg font-bold uppercase">
              <a href="#home" className="hover:text-[gold] transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-[gold] transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-[gold] transition-colors">
                Skills
              </a>
              <a
                href="#experience"
                className="hover:text-[gold] transition-colors"
              >
                Experience
              </a>
              <a
                href="#portfolio"
                className="hover:text-[gold] transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="hover:text-[gold] transition-colors"
              >
                Contact
              </a>
            </nav>
            {/* Hamburger */}
            <button
              className="md:hidden text-[gold] text-3xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              &#9776;
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <nav className="md:hidden flex flex-col gap-6 px-6 pb-6 bg-[#010134]/95 text-lg font-bold uppercase">
              <a
                href="#home"
                className="hover:text-[gold] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-[gold] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-[gold] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="hover:text-[gold] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </a>
              <a
                href="#portfolio"
                className="hover:text-[gold] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="hover:text-[gold] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </nav>
          )}
        </header>
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex items-center flex-wrap-reverse justify-around  min-h-[100vh] pb-16 pt-36 w-full bg-[#010134] text-center"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Hi, I'm <span className="text-[gold]">Saad</span>
            </h1>
            <p className="text-lg md:text-2xl font-medium text-[#9a9ca0] max-w-2xl mx-auto mb-4">
              A{" "}
              <span className="text-cyan-400 font-bold">
                Full Stack Web Developer
              </span>{" "}
              with hands-on experience building
            </p>
            <p className="text-lg md:text-2xl font-medium text-[#9a9ca0] max-w-2xl mx-auto mb-8">
              production-grade applications with{" "}
              <span className="text-cyan-400 font-bold">
                MERN, Next.js & TypeScript
              </span>
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-4">
              <a
                href="#portfolio"
                className="px-8 py-3 rounded-lg font-bold uppercase tracking-wider bg-[gold] text-[#232126] hover:bg-[#a56687] hover:text-[#fbf8f5] transition-colors shadow-lg"
              >
                See Portfolio
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg font-bold uppercase tracking-wider border-2 border-[gold] bg-transparent text-[gold] hover:bg-[gold] hover:text-[#232126] transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="rounded-full border-3 border-[gold] p-2 w-64 h-64 mb-8 flex items-center justify-center bg-[#010134]/20 shadow-2xl shadow-amber-400">
            {/* Replace with real image later */}
            <img
              src={avatar}
              alt="Avatar"
              className="rounded-full object-cover w-55 h-55 "
            />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-[#010134] text-white pt-16 px-6 md:px-20 pb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[gold]">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  Results-driven Full Stack Web Developer with hands-on
                  experience building and deploying production-grade web
                  applications using the{" "}
                  <span className="text-cyan-400 font-bold">
                    MERN stack, Next.js, and TypeScript
                  </span>
                  .
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  Proven ability to design{" "}
                  <span className="text-cyan-400 font-bold">
                    scalable REST APIs
                  </span>
                  , implement
                  <span className="text-cyan-400 font-bold">
                    {" "}
                    JWT authentication
                  </span>
                  , document APIs with{" "}
                  <span className="text-cyan-400 font-bold">
                    Swagger/OpenAPI
                  </span>
                  , and manage{" "}
                  <span className="text-cyan-400 font-bold">
                    CI/CD pipelines
                  </span>{" "}
                  via GitHub Actions.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Strong problem-solving skills with ability to work
                  independently and in cross-functional teams. Passionate about
                  delivering impactful software solutions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-[#1a1a4d]/50 p-4 rounded-lg border-l-4 border-[gold]">
                  <p className="text-gray-300">
                    <span className="text-[gold] font-bold">📍 Location:</span>{" "}
                    Rahim Yar Khan, Punjab, Pakistan
                  </p>
                  <p className="text-gray-300">
                    <span className="text-[gold] font-bold">🎓 Education:</span>{" "}
                    BSc Computer Science (2023-2027)
                  </p>
                  <p className="text-gray-300">
                    <span className="text-[gold] font-bold">
                      🏢 Current Role:
                    </span>{" "}
                    Full Stack Developer at Nuex Solutions
                  </p>
                  <p className="text-gray-300">
                    <span className="text-[gold] font-bold">
                      📊 Experience:
                    </span>{" "}
                    Aug 2025 - Present
                  </p>
                  <p className="text-gray-300">
                    <span className="text-[gold] font-bold">
                      ⏱️ Availability:
                    </span>{" "}
                    Open to Remote/Hybrid/On-Site
                  </p>
                </div>
                <a
                  href="/resume1.pdf"
                  download
                  className="inline-block px-6 py-3 bg-[gold] text-[#010134] font-semibold rounded-lg hover:bg-[#ffed4e] transition duration-300 w-full text-center"
                >
                  📄 Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="bg-[#1a1a4d] text-white py-16 px-6 md:px-20"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[gold] text-center">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-16 mb-8">
              {/* Frontend Skills */}
              <div className="bg-[#010134] p-6 rounded-lg border-t-4 border-[gold]">
                <div className="flex items-center gap-3 mb-4">
                  <FaCode className="text-[gold] text-2xl" />
                  <h3 className="text-2xl font-bold">Frontend</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ React.js & Next.js</li>
                  <li>✓ TypeScript & JavaScript (ES6+)</li>
                  <li>✓ Tailwind CSS & Responsive Design</li>
                  <li>✓ RTK Query & Context API</li>
                  <li>✓ React Router DOM & Hooks</li>
                  <li>✓ Axios & REST API Integration</li>
                </ul>
              </div>

              {/* Backend Skills */}
              <div className="bg-[#010134] p-6 rounded-lg border-t-4 border-cyan-400">
                <div className="flex items-center gap-3 mb-4">
                  <FaDatabase className="text-cyan-400 text-2xl" />
                  <h3 className="text-2xl font-bold">Backend</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Node.js & Express.js</li>
                  <li>✓ REST APIs & API Design</li>
                  <li>✓ JWT Authentication & Authorization</li>
                  <li>✓ OOP Principles</li>
                  <li>✓ Swagger/OpenAPI Documentation</li>
                  <li>✓ CORS & Middleware</li>
                </ul>
              </div>

              {/* DevOps & Databases */}
              <div className="bg-[#010134] p-6 rounded-lg border-t-4 border-[#00ff88]">
                <div className="flex items-center gap-3 mb-4">
                  <FaTools className="text-[#00ff88] text-2xl" />
                  <h3 className="text-2xl font-bold">DevOps & DB</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ PostgreSQL & MongoDB</li>
                  <li>✓ Mongoose & Data Modeling</li>
                  <li>✓ Git & GitHub Version Control</li>
                  <li>✓ CI/CD (GitHub Actions)</li>
                  <li>✓ Postman API Testing</li>
                  <li>✓ AWS (EC2, S3 concepts)</li>
                </ul>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-[#010134] p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {["JavaScript", "TypeScript", "SQL", "C++", "Python"].map(
                  (lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 bg-[#1a1a4d] text-[gold] font-semibold rounded-full border border-[gold]"
                    >
                      {lang}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section
          id="experience"
          className="bg-[#010134] text-white py-16 px-6 md:px-20"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[gold]">
              Work Experience
            </h2>

            <div className="relative border-l-4 border-[gold] pl-8 space-y-12">
              <div className="relative">
                <div className="absolute -left-12 top-0 w-6 h-6 bg-[gold] rounded-full border-4 border-[#010134]"></div>
                <h3 className="text-2xl font-bold mb-2">
                  Full Stack Web Developer
                </h3>
                <p className="text-cyan-400 font-semibold mb-2">
                  Nuex Solutions • Rahim Yar Khan, Pakistan
                </p>
                <p className="text-gray-400 mb-4">Aug 2025 – Present</p>
                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                  <li>
                    Develop and maintain full-stack web applications using
                    Next.js, TypeScript, Node.js, Express.js, and PostgreSQL
                  </li>
                  <li>
                    Build responsive, accessible frontends with React.js,
                    Tailwind CSS, and RTK Query
                  </li>
                  <li>
                    Design and document RESTful APIs using Swagger/OpenAPI for
                    frontend-backend collaboration
                  </li>
                  <li>
                    Implement JWT-based authentication and role-based access
                    control across production applications
                  </li>
                  <li>
                    Manage version control and set up CI/CD pipelines through
                    GitHub Actions
                  </li>
                  <li>
                    Test and validate 15+ API endpoints using Postman; apply OOP
                    principles in backend architecture
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio section */}
        <section
          id="portfolio"
          className="bg-[#1a1a4d] px-4 md:px-12 py-16 lg:px-3"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Featured Projects
            </h2>
            <p className="text-center text-lg text-cyan-400 mb-12 max-w-2xl mx-auto">
              Production-ready applications showcasing expertise in MERN stack,
              Next.js, and modern web technologies
            </p>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#010134] shadow-2xl rounded-xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-[gold] transition-all duration-300 border border-[gold]/30 hover:border-[gold] group"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010134] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-[gold]">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <span className="font-semibold text-cyan-400 block mb-2">
                        Tech Stack:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#1a1a4d] text-[gold] px-3 py-1 rounded-full border border-[gold]/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto flex gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-[gold] text-[#010134] font-bold rounded hover:bg-[#ffed4e] transition-colors text-center"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 border-2 border-[gold] text-[gold] font-bold rounded hover:bg-[gold] hover:text-[#010134] transition-colors text-center"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="w-full px-4 md:px-20 bg-[#010134]">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h2 className="text-4xl font-bold mb-6 text-[gold]">
              Get In Touch
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's connect! Open to opportunities, collaborations, and new
              challenges.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 flex-wrap">
              <a
                href="mailto:saaddev694@gmail.com"
                className="flex items-center gap-3 px-6 py-3 bg-[gold] text-[#010134] font-bold rounded-lg hover:bg-[#ffed4e] transition duration-300"
              >
                <FaEnvelope size={20} />
                msaad.dev@gmail.com
              </a>

              <a
                href="https://wa.me/+923272876084"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1ebe5d] transition duration-300"
              >
                <FaPhone size={20} />
                +92 327 2876084
              </a>

              <a
                href="https://linkedin.com/in/m-saad-7a8163401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-[#0077b5] text-white font-bold rounded-lg hover:bg-[#0077b5]/90 transition duration-300"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              <a
                href="https://github.com/msaad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition duration-300"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            </div>

            <div className="mt-12 p-6 bg-[#1a1a4d] rounded-lg border border-[gold]/30">
              <p className="text-gray-300 mb-2">
                <FaMapMarkerAlt className="inline mr-2 text-[gold]" />
                Rahim Yar Khan, Punjab, Pakistan
              </p>
              <p className="text-gray-300">
                <span className="text-[gold] font-bold">Available for:</span>{" "}
                Remote • Hybrid • On-Site • Relocation
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#010134] text-gray-400 py-8 text-center border-t border-[gold]/30">
          <p className="mb-2">&copy; 2026 M SAAD. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            Full Stack Web Developer | Building production-grade applications
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
