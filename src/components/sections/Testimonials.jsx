import React, { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Quote, User, Briefcase, MessageSquare, Send, Check, Zap, Loader2 } from "lucide-react";
import { Testimonials3D } from "../Testimonials3D";

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", role: "", project: "", content: "" });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/testimonials");
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.content || !formData.project || !formData.role) return;
    
    setSubmitting(true);
    try {
      const newTestimonial = {
        name: formData.name,
        role: `${formData.role} @ ${formData.project}`,
        content: formData.content,
        avatar: `https://picsum.photos/seed/${formData.name}/100/100`
      };
      
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTestimonial),
      });

      if (response.ok) {
        setFormData({ name: "", role: "", project: "", content: "" });
        await fetchTestimonials();
      }
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="min-h-screen flex items-center justify-center py-20 md:py-24 px-6 bg-[#050505]/50 relative overflow-hidden">
      {/* Background 3D for section */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/4 h-full opacity-10 pointer-events-none">
        <Testimonials3D />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tighter">
              Social <span className="text-gradient">Proof</span>
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
              What mentors and colleagues say about my work and professional ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {loading ? (
              <div className="col-span-full flex justify-center py-12">
                <Loader2 className="animate-spin text-blue-500" size={48} />
              </div>
            ) : (
              testimonials.map((t, idx) => (
                <div 
                  key={idx} 
                  className="glass p-8 rounded-[2.5rem] relative flex flex-col h-full hover:bg-white/[0.04] transition-colors"
                >
                  <div className="absolute top-6 right-8 text-blue-500/20">
                    <Quote size={48} />
                  </div>
                  
                  <p className="text-zinc-300 italic mb-8 relative z-10 leading-relaxed">
                    "{t.content}"
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full border border-white/10"
                    />
                    <div>
                      <h4 className="text-white font-bold text-sm">{t.name}</h4>
                      <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Testimonial Section Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Context */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <MessageSquare size={14} />
                Feedback Loop
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Your Opinion <br />
                <span className="text-blue-500 italic">Matters.</span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                I believe in continuous improvement through collaboration. If we've worked together on a project, I'd love to hear your thoughts on our partnership and the results we achieved.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-500">
                    <Check size={18} />
                  </div>
                  <span>Help me grow as an engineer</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-500">
                    <Check size={18} />
                  </div>
                  <span>Share insights on our collaboration</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-500">
                    <Check size={18} />
                  </div>
                  <span>Build trust with future partners</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="glass p-10 rounded-[3rem] border border-white/5 relative">
              <div className="absolute -inset-2 bg-blue-500/5 blur-2xl -z-10"></div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                    <input 
                      type="text" 
                      placeholder="Role in Project"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <Zap className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="Project Name (e.g., Tradify, HealthSync)"
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-zinc-500" size={18} />
                  <textarea 
                    placeholder="Your Testimonial"
                    rows={4}
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      Posting...
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Post Testimonial
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
