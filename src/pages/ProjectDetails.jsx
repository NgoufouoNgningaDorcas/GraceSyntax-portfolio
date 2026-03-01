import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { ArrowLeft, Github, ExternalLink, Calendar, User, Briefcase, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Hero3D } from "../components/Hero3D";

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen pt-28 md:pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background 3D for page */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <Hero3D />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll>
          {/* Header Navigation */}
          <div className="flex flex-wrap items-center gap-4 mb-12 text-zinc-500 text-xs font-bold uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <ChevronRight size={14} />
            <span className="text-white">{project.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold uppercase tracking-widest text-xs">Back to Projects</span>
              </Link>

              <h1 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter text-white">
                {project.title.toUpperCase()}
              </h1>

              <div className="flex flex-wrap gap-3 mb-12">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                  {project.fullDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mt-12">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-3 hover:bg-zinc-200 transition-all active:scale-95"
                >
                  <ExternalLink size={20} />
                  Live Preview
                </a>
              </div>
            </div>

            {/* Right Column: Meta Info & Image */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-32 space-y-8"
              >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="glass rounded-[2rem] p-8 border border-white/10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Year</p>
                      <p className="text-white font-bold">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-500">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Role</p>
                      <p className="text-white font-bold">{project.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Client</p>
                      <p className="text-white font-bold">{project.client}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};
