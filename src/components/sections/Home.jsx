import { RevealOnScroll } from "../RevealOnScroll"
import profile from "../../assets/profile.jpeg"

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative gap-70 p-7 md:flex-row md:gap-8 grid grid-cols-1 md:grid-cols-2 gap-20">

        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight inline-block ">
                    Hi, I'm GraceSyntax
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm Dorcas alias GraceSyntax, a passionate Full Stack Junior
                    Developer with hands-on experience in building modern web applications using React,
                    Tailwind CSS, Node.js, and MySQL. As a Software Engineering student,
                    I enjoy transforming ideas into scalable solutions, whether it's a portfolio site,
                    a restaurant app, or an AI-integrated platform. With a heart rooted in faith and a
                    mind driven by curiosity, I aim to create clean, user-centered products
                    that reflect both technical excellence and strong values.
                    My principle is <strong className=" font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight inline-block"> 'It Must Function'</strong>.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#project" className=" bg-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        view projects
                    </a>
                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-100 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                        Contact me
                    </a>
                </div>
            </div>
        </RevealOnScroll>
        <RevealOnScroll>
            <div className="relative w-[410px] h-[410px] rounded-full overflow-hidden border-4 border-blue-900 shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                    src={profile}
                    alt="GraceSyntax"
                    className="w-full h-full object-cover object-center rounded-full"
                />
            </div>
        </RevealOnScroll>
    </section>
}