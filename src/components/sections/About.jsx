import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Code2, Cpu, GraduationCap, Briefcase, Globe, Zap } from "lucide-react";
import { About3D } from "../About3D";

export const About = () => {
  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", 
    "AWS", "Docker", "PostgreSQL", "MongoDB", "TailwindCSS",
    "GraphQL", "FastAPI", "TensorFlow", "Git"
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background 3D for section */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full opacity-20 pointer-events-none">
        <About3D />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row gap-12 mb-20 items-center text-center md:text-left">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter text-gradient">
                The Stack & <br /> The Story.
              </h2>
              <p className="text-zinc-500 text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
                Bridging the gap between complex backend logic and intuitive frontend experiences. 
                Software Engineering student at Siantou University, passionate about building 
                resilient systems that solve real-world problems.
              </p>
            </div>

            {/* Profile Picture moved from Home */}
            <div className="relative group w-48 h-48 md:w-64 md:h-64 shrink-0 order-1 md:order-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 glass">
                <img 
                  src="https://picsum.photos/seed/grace-profile/800/1000" 
                  alt="GraceSyntax Profile" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
            {/* Bio - Large */}
            <div className="md:col-span-2 md:row-span-2 glass p-6 md:p-10 rounded-[2rem] flex flex-col justify-between border-glow">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                  <Globe size={24} />
                </div>
                <p className="text-2xl text-white font-medium leading-tight">
                  Building scalable systems with a focus on performance and clean architecture.
                </p>
              </div>
              <div className="space-y-4 mt-10">
                <p className="text-zinc-500">
                  Based in Yaoundé, working globally. I specialize in full-stack development 
                  and AI integration. My journey started with a fascination for how data 
                  flows through the web, leading me to master modern frameworks and cloud 
                  technologies.
                </p>
                <p className="text-zinc-500">
                  I believe in continuous learning and community contribution. When I'm not 
                  coding, I'm exploring new architectural patterns or mentoring junior 
                  developers in local tech hubs.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="glass p-8 rounded-[2rem] border-glow">
              <GraduationCap className="text-zinc-500 mb-6" size={24} />
              <h3 className="text-white font-bold mb-2">Education</h3>
              <p className="text-zinc-500 text-sm">B.S. Software Engineering @ Siantou University</p>
            </div>

            {/* Experience */}
            <div className="glass p-8 rounded-[2rem] border-glow">
              <Briefcase className="text-zinc-500 mb-6" size={24} />
              <h3 className="text-white font-bold mb-2">Experience</h3>
              <p className="text-zinc-500 text-sm">Software Intern @ ABC Corp</p>
            </div>

            {/* Skills - Wide */}
            <div className="md:col-span-2 glass p-8 rounded-[2rem] flex items-center justify-between border-glow">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold">Fast Learner</h3>
                  <p className="text-zinc-500 text-sm">Adapting to new stacks rapidly.</p>
                </div>
              </div>
              <div className="text-zinc-700 font-display text-4xl font-bold">99%</div>
            </div>
          </div>

          {/* Tech Marquee */}
          <div className="relative overflow-hidden py-10 border-y border-white/5">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack].map((tech, i) => (
                <span key={i} className="text-zinc-700 text-4xl md:text-6xl font-display font-bold mx-10 uppercase tracking-tighter hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
