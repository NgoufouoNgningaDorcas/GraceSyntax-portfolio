import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";
import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { projects } from "../../data/projects";
import { Projects3D } from "../Projects3D";

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative glass rounded-[2rem] overflow-hidden border-glow"
    >
      <div style={{ transform: "translateZ(50px)" }}>
        <Link to={`/projects/${project.id}`} className="block relative h-72 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

          <div className="absolute top-6 left-6">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
              <Folder size={20} />
            </div>
          </div>
        </Link>

        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
              <Link to={`/projects/${project.id}`}>{project.title}</Link>
            </h3>
            <div className="flex gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <p className="text-zinc-500 mb-8 line-clamp-2 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-[9px] uppercase tracking-[0.15em] font-bold text-zinc-600">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Project = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  const allTechs = ["All", ...Array.from(new Set(projects.flatMap(p => p.tech)))];

  const filteredProjects = selectedTech === "All" 
    ? projects 
    : projects.filter(p => p.tech.includes(selectedTech));

  const visibleProjects = filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background 3D for section */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Projects3D />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tighter text-gradient">
                Selected <br /> Works.
              </h2>
              <p className="text-zinc-500 max-w-sm">
                A collection of projects where I've pushed the boundaries of what's possible.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {allTechs.slice(0, 6).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                    selectedTech === tech 
                      ? "bg-blue-500 border-blue-500 text-white" 
                      : "bg-white/5 border-white/5 text-zinc-500 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="flex justify-center">
            <Link 
              to="/projects"
              className="group px-10 py-4 glass rounded-full text-white font-bold hover:bg-white/5 transition-all border border-white/10 active:scale-95 flex items-center gap-3"
            >
              See More Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

