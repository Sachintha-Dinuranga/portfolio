import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to bg-purple-600 bg-clip-text text-transparent  leading-right">
            Hi, I'm Sachintha Dinuranga
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
            As an enthusiastic undergraduate student at SLIIT pursuing a degree
            in Software Engineering, I have developed a strong passion for
            full-stack development. Through both personal and academic projects,
            I’ve gained hands-on experience with technologies like the MERN
            Stack, Spring Boot, and Python. I enjoy building end-to-end
            solutions that solve real-world problems and thrive on the challenge
            of creating seamless, user-friendly applications. Whether it’s
            developing dynamic web applications or collaborating on team
            projects, I’m constantly learning and refining my skills. Explore my
            portfolio to see my work!
          </p>
          {/* Download resume */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="/Sachintha_Dinuranga_CV.pdf" //Methana cv eke link eka danna ona
              download="Sachintha_Dinuranga_CV.pdf"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue=500/10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
