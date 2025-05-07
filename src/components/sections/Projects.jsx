import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = [
    {
      title: "Food Ordering Microservice",
      description:
        "Developed a scalable Cloud Native Food Ordering application using Node.js microservices architecture with multiple databases and event-driven communication.",
      techStack: [
        "Node.Js",
        "React.Js",
        "Tailwind CSS",
        "Stripe",
        "Zustand",
        "MongoDB",
        "Docker",
        "Kubernetes",
      ],
      link: "https://github.com/Janinduchamod2001425/HelaEats",
    },
    {
      title: "Multimaster - (Group Project)",
      description:
        "Full-stack Computer sales and repair management system, Implemented the repair tracking module, enabling users to monitor repair statuses in real-time, ensuring seamless communication between technicians and customers.",
      techStack: ["MERN Stack", "Tailwind CSS", "Postman API", "GIT"],
      link: "https://github.com/Suchindu/multimaster-web",
    },
    {
      title: "ZapChat",
      description:
        "Real-time chat application leveraging the MERN stack and Socket.io, achieving seamless instant messaging capabilities while implementing secure user authentication protocols with JWT.",
      techStack: ["MERN Stack", "Tailwind CSS", "Socket.io", "JWT"],
      link: "https://github.com/Sachintha-Dinuranga/zap-chat",
    },
    {
      title: "Medicare - (Group Project)",
      description:
        "Developed a mobile application enabling users to maintain personal health profiles, set medication reminders, contact emergency services, and locate nearby doctors on a map.",
      techStack: ["Flutter", "Firebase"],
      link: "https://github.com/Sachintha-Dinuranga/medicare",
    },
  ];

  const moreProjects = [
    {
      title: "MovieFlix - Full Stack Mobile Application",
      description:
        "A full-stack mobile application that allows users to browse trending and popular movies, view detailed information, and search for their favorite films.",
      techStack: ["React Native", "Appwrite", "NativeWind"],
      link: "https://github.com/Sachintha-Dinuranga/movie_app-",
    },
    {
      title: "My-Portfolio",
      description: "And of course, my portfolio project! 🤗",
      techStack: ["React", "Tailwind CSS"],
      link: "https://github.com/Sachintha-Dinuranga/portfolio",
    },
    {
      title: "Alien-Invasion",
      description:
        "Alien Invasion is a 2D arcade-style game built using Python and the Pygame module. The goal is to defend your spaceship from waves of alien invaders while aiming for the highest score!😏",
      techStack: ["Python", "Pygame"],
      link: "https://github.com/Sachintha-Dinuranga/alien-invasion",
    },
    {
      title: "Movie-Finder",
      description:
        "A React-based web application that allows users to browse popular movies, search for specific movies, and add movies to their favorites list.",
      techStack: ["React.js", "CSS", "API"],
      link: "https://github.com/Sachintha-Dinuranga/movie-finder",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 bg-purple-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...featuredProjects, ...(showMore ? moreProjects : [])].map(
              (project, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:bg-blue-600"
            >
              {showMore ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
