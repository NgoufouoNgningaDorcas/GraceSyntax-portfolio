import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { Folder, ArrowLeft, Search, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Projects3D } from "../components/Projects3D";
import { ProjectHero3D } from "../components/ProjectHero3D";

export const AllProjects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  const allTechs = ["All", ...Array.from(new Set(projects.flatMap(p => p.tech)))];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech = selectedTech === "All" || project.tech.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  return (
    <div className="min-h-screen pt-28 md:pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background 3D for page */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Projects3D />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-12">
            <div className="flex-1">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold uppercase tracking-widest text-xs">Back to Home</span>
              </Link>
              
              <h1 className="text-5xl md:text-8xl font-display font-black mb-6 tracking-tighter text-white">
                ALL <span className="text-transparent stroke-text">PROJECTS</span>
              </h1>
              <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
                A comprehensive archive of my digital explorations, from production-ready platforms to experimental prototypes.
              </p>
            </div>
            <div className="w-full lg:w-1/3 h-64 md:h-80">
              <ProjectHero3D />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-12 items-start lg:items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
              <input 
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 mr-2 text-zinc-500">
                <Filter size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Filter:</span>
              </div>
              {allTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative glass rounded-[2rem] overflow-hidden border-glow flex flex-col h-full"
                >
                  <Link to={`/projects/${project.id}`} className="block relative h-64 overflow-hidden">
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

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-2 block">
                        {project.year}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                        <Link to={`/projects/${project.id}`}>{project.title}</Link>
                      </h3>
                    </div>
                    
                    <p className="text-zinc-500 mb-8 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-[9px] uppercase tracking-[0.15em] font-bold text-zinc-600">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-zinc-600">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-zinc-500 text-xl">No projects found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedTech("All"); }}
                className="mt-4 text-blue-500 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </RevealOnScroll>
      </div>
    </div>
  );
};
