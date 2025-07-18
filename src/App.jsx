import "./App.css";
import { useState } from "react";
import avatar from "./assets/avatar.jpeg";
// import card from "./assets/img2.jpeg";
import projects from './project.js'
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

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
            <p className="text-lg md:text-2xl font-medium text-[#9a9ca0] max-w-2xl mx-auto mb-8">
              A <span className="text-cyan-400 font-bold">Web Developer</span>{" "}
              passionate about building modern, elegant and effective websites.
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

        {/* // About Section */}
        <section
          id="about"
          className="bg-[#010134] text-white pt-16 px-6 md:px-20"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[gold]">
              About Me
            </h2>
            <p className="text-lg md:text-xl leading-relaxed flex flexw">
              I am a passionate and dedicated Bachelor of Science in Computer
              Science student with strong skills in frontend and backend
              development. I specialize in building responsive and user-friendly
              web applications using React.js, JavaScript, and the MERN stack. I
              am comfortable creating REST APIs, implementing CRUD operations,
              connecting databases (SQL & MongoDB), and designing clean UI/UX
              interfaces. I also have experience using Tailwind CSS for modern,
              responsive designs. I enjoy solving problems, learning new
              technologies, and collaborating in a team to deliver high-quality
              projects.
            </p>
            <div className="mt-8">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-[#010134] text-[gold] font-semibold rounded-lg shadow-md hover:bg-[#010134]/90 transition duration-300"
          >
            📄 Download My Resume
          </a>
        </div>
          </div>
        </section>

        {/* porfolio section */}
        <section
          id="portfolio"
          className=" px-4 md:px-12  lg:px-3"
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-[#010134]">
            My Portfolio
          </h2>
          <p className="text-center text-lg text-cyan-400 mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in React, Node.js, and responsive design.
          </p>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-4 md:px-12  lg:px-20">
            {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-[#010134]">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4">
                  <span className="font-semibold text-[#010134]">
                    Tech Stack:
                  </span>{" "}
                  <span className="text-gray-700">{project.tech.join(", ")}</span>
                </div>
                <div className="mt-auto flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#010134] text-white rounded hover:bg-[#010134]/90 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-[#010134] text-[#010134] rounded hover:bg-[#010134] hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
             ))} 
          </div>
        </section>

        {/* // Contact section /// */}
        <section id="contact" className="w-full px-4 md:px-20 ">
      <div className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-4xl font-bold mb-6 text-[#010134]">Contact Me</h2>
        <p className="text-lg mb-8 text-cyan-400">
          Let's get in touch! You can reach me via email, LinkedIn, Github, or WhatsApp.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:ms808080@gmail.com"
            className="flex items-center gap-3 px-5 py-3 bg-[#010134] text-white rounded-lg hover:bg-[#010134]/90 transition duration-300"
          >
            <FaEnvelope size={20} />
            ms808080@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-saad-3045a0343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#0077b5]/90 transition duration-300"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://msaad12345.github.io/Login-Form/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            <FaGithub size={20} />
            Github
          </a>

          <a
            href="https://wa.me/message/EPLDDJ54LG2KI1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#1ebe5d] transition duration-300"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>

     {/* /// footer //// */}
     <footer className="bg-[#010134] text-gray-400 py-6 text-center">
  &copy; 2025 Saad. All rights reserved.
</footer>

      </div>
    </>
  );
}

export default App;
