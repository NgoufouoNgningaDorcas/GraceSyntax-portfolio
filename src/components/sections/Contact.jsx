import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Send, Mail, MessageCircle, ArrowRight, Copy, Check, MapPin, Github, Linkedin, Calendar, Loader2 } from "lucide-react";
import { Contact3D } from "../Contact3D";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const email = "gracesyntax@example.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 md:py-24 px-6 relative overflow-hidden">
      {/* Background 3D for section */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <Contact3D />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Side: Editorial Style Heading & Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none mb-8 text-white">
                  LET'S<br />
                  <span className="text-blue-500 italic">CONNECT.</span>
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed max-w-md">
                  Have a project in mind or just want to say hi? My inbox is always open for new opportunities and collaborations.
                </p>
              </div>

              {/* Added Content to balance left side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-500">
                    <MapPin size={18} className="text-blue-500" />
                    <span className="text-sm font-bold uppercase tracking-widest">Location</span>
                  </div>
                  <p className="text-white font-medium">Yaoundé, Cameroon</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-500">
                    <Calendar size={18} className="text-blue-500" />
                    <span className="text-sm font-bold uppercase tracking-widest">Availability</span>
                  </div>
                  <p className="text-white font-medium">Open for Projects</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/NgoufouoNgningaDorcas" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/dorcas-ngoufouo-ngninga-5449ab319" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={copyToClipboard}
                    className="group flex items-center gap-4 p-4 glass rounded-2xl w-full hover:bg-white/5 transition-all text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Email Me</p>
                      <p className="text-white font-medium truncate">{email}</p>
                    </div>
                    <div className="pr-2">
                      {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-zinc-600 group-hover:text-white transition-colors" />}
                    </div>
                  </button>

                  <a 
                    href="https://wa.me/237693611669" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 glass rounded-2xl w-full hover:bg-white/5 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all">
                      <MessageCircle size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">WhatsApp</p>
                      <p className="text-white font-medium">Chat with me</p>
                    </div>
                    <div className="pr-2 opacity-0 group-hover:opacity-100 transition-all">
                      <ArrowRight size={18} className="text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Minimalist Form */}
            <div className="relative">
              {/* Decorative background for form */}
              <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-[3rem] -z-10"></div>
              
              <form onSubmit={handleSubmit} className="glass p-10 rounded-[3rem] border border-white/5 space-y-8">
                <div className="space-y-6">
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-white focus:outline-none focus:border-blue-500 transition-all peer placeholder-transparent"
                      placeholder="Name"
                    />
                    <label 
                      htmlFor="name"
                      className="absolute left-0 top-4 text-zinc-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-white focus:outline-none focus:border-blue-500 transition-all peer placeholder-transparent"
                      placeholder="Email"
                    />
                    <label 
                      htmlFor="email"
                      className="absolute left-0 top-4 text-zinc-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative group">
                    <textarea 
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-white focus:outline-none focus:border-blue-500 transition-all peer placeholder-transparent resize-none"
                      placeholder="Message"
                    />
                    <label 
                      htmlFor="message"
                      className="absolute left-0 top-4 text-zinc-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                    >
                      Your Message
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={submitting || submitted}
                  className="group w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      Sending...
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : submitted ? (
                    <>
                      Message Sent
                      <Check size={18} />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
