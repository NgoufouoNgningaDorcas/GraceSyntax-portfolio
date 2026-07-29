import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Building } from "lucide-react";
import { ProjectHero3D } from "../components/ProjectHero3D";

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-zinc-400 mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Link to="/projects" className="group px-6 py-3 glass rounded-full text-white font-bold hover:bg-white/5 transition-all border border-white/10 active:scale-95 flex items-center gap-3">
          <ArrowLeft size={20} />
          Back to All Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 md:pt-40 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <ProjectHero3D />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="mb-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold uppercase tracking-widest text-xs">All Projects</span>
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-display font-black mb-4 tracking-tighter text-white">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mb-12">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto object-cover rounded-[2rem] border border-white/10 shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass p-6 rounded-2xl border-glow">
              <User className="text-blue-500 mb-3" size={24} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-1">Role</h3>
              <p className="text-white font-medium">{project.role}</p>
            </div>
            <div className="glass p-6 rounded-2xl border-glow">
              <Building className="text-blue-500 mb-3" size={24} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-1">Client</h3>
              <p className="text-white font-medium">{project.client}</p>
            </div>
            <div className="glass p-6 rounded-2xl border-glow">
              <Calendar className="text-blue-500 mb-3" size={24} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-1">Year</h3>
              <p className="text-white font-medium">{project.year}</p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-zinc-300 leading-relaxed mb-12">
            <p>{project.fullDescription}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-2 bg-white/5 rounded-full text-sm text-zinc-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Links</h3>
              <div className="flex flex-wrap gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-white font-bold transition-colors">
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-white font-bold transition-colors">
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};