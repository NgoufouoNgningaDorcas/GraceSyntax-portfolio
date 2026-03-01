import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

import { Hero3D } from "../Hero3D";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-40">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content: Bold Typography */}
          <div className="flex flex-col justify-center">
            <RevealOnScroll>
              <div className="flex items-center gap-4 mb-6 relative">
                <span className="text-[4rem] font-display font-black text-white/5 absolute -left-8 md:-left-12 -top-4 select-none">01</span>
                <span className="h-px w-12 bg-blue-500"></span>
                <span className="text-blue-500 font-mono text-sm uppercase tracking-[0.3em] font-bold">Software Engineer</span>
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-display font-black leading-[0.85] tracking-[-0.04em] mb-8 text-white">
                GRACE<br />
                <span className="text-transparent stroke-text">SYNTAX</span>
              </h1>

              <div className="max-w-xl">
                <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-10">
                  Crafting <span className="text-white italic">high-performance</span> digital ecosystems. 
                  Focused on the intersection of scalable architecture and human-centric design.
                </p>

                <div className="flex flex-wrap gap-6">
                  <a 
                    href="#projects" 
                    className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12 active:scale-95"
                  >
                    <span className="relative z-10">Explore Work</span>
                    <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
                  </a>
                  
                  <div className="flex items-center gap-6 px-4">
                    <a href="https://github.com/NgoufouoNgningaDorcas" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github size={22} /></a>
                    <a href="https://www.linkedin.com/in/dorcas-ngoufouo-ngninga-5449ab319?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={22} /></a>
                  </div>
                </div>

                {/* Added Core Expertise to balance left side */}
                <div className="mt-16 pt-10 border-t border-white/5">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-blue-500 mb-8">Core Expertise</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="text-blue-500 font-mono text-[10px] font-bold">01.</div>
                      <div className="text-white font-bold text-sm">Full Stack</div>
                      <div className="text-zinc-500 text-xs leading-relaxed">Scalable web architectures & robust backends.</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-blue-500 font-mono text-[10px] font-bold">02.</div>
                      <div className="text-white font-bold text-sm">UI/UX Design</div>
                      <div className="text-zinc-500 text-xs leading-relaxed">Crafting intuitive and high-fidelity interfaces.</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-blue-500 font-mono text-[10px] font-bold">03.</div>
                      <div className="text-white font-bold text-sm">Cloud Ops</div>
                      <div className="text-zinc-500 text-xs leading-relaxed">Efficient deployment & infrastructure management.</div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Content: Stats & Visual */}
          <div className="relative flex flex-col justify-center">
            <RevealOnScroll>
              <div className="space-y-8 relative">
                <span className="text-[4rem] font-display font-black text-white/5 absolute -right-8 -top-12 select-none">02</span>
                
                {/* 3D Hero Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10 opacity-50 pointer-events-none">
                  <Hero3D />
                </div>

                <div className="glass p-8 rounded-[2rem] border-l-4 border-blue-500">
                  <div className="text-5xl font-display font-black text-white mb-2">02+</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Years of Innovation</div>
                </div>

                <div className="glass p-8 rounded-[2rem] border-l-4 border-cyan-500">
                  <div className="text-5xl font-display font-black text-white mb-2">15+</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Projects Completed</div>
                </div>

                <div className="relative group cursor-pointer">
                  <span className="text-[4rem] font-display font-black text-white/5 absolute -right-8 -bottom-8 select-none">03</span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative glass p-8 rounded-[2rem] flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-lg">Available for Hire</div>
                      <div className="text-zinc-500 text-sm">Remote / On-site</div>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>

      {/* Vertical Rail Text */}
      <div className="hidden xl:block absolute right-10 bottom-20 origin-bottom-right rotate-90">
        <p className="text-zinc-800 font-mono text-xs uppercase tracking-[1em] font-bold">
          Based in Yaoundé, Cameroon
        </p>
      </div>
    </section>
  );
};
