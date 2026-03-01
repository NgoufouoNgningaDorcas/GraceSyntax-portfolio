import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Globe, Server, Layout, Database, Shield, Zap } from "lucide-react";
import { Services3D } from "../Services3D";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive, high-performance web applications using modern frameworks like React and Next.js.",
      icon: <Globe className="text-blue-400" size={32} />,
      color: "blue"
    },
    {
      title: "Backend Architecture",
      description: "Designing scalable server-side logic and RESTful APIs with Node.js, Express, and Python.",
      icon: <Server className="text-cyan-400" size={32} />,
      color: "cyan"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and seamless user experiences with a focus on accessibility.",
      icon: <Layout className="text-purple-400" size={32} />,
      color: "purple"
    },
    {
      title: "Database Management",
      description: "Optimizing data storage and retrieval with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) solutions.",
      icon: <Database className="text-emerald-400" size={32} />,
      color: "emerald"
    },
    {
      title: "Cloud Infrastructure",
      description: "Deploying and managing applications on AWS and Docker for high availability and scalability.",
      icon: <Zap className="text-amber-400" size={32} />,
      color: "amber"
    },
    {
      title: "Security & Testing",
      description: "Implementing robust security protocols and automated testing to ensure software reliability.",
      icon: <Shield className="text-rose-400" size={32} />,
      color: "rose"
    }
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-20 md:py-24 px-6 relative overflow-hidden">
      {/* Background 3D for section */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Services3D />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tighter">
              My <span className="text-gradient">Services</span>
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
              Leveraging modern technologies to deliver end-to-end engineering solutions 
              tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group glass p-8 rounded-[2.5rem] hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 border border-white/5"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/[0.02] w-fit group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
