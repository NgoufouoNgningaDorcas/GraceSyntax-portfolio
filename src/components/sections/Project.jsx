import { RevealOnScroll } from "../RevealOnScroll"
import project1 from "../../assets/project1.png"
export const Project = () => {

    return (
        <section id="project" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                            <img
                                src={project1}
                                alt="GraceSyntax"
                                className="rounded-xl"
                            />
                            <h3 className="text-xl font-bold mb-2">
                                Tradify
                            </h3>
                            <p className="text-gray-400 mb-4">Tradify is an interactive cultural education platform that digitizes and preserves Cameroon’s heritage. It combines an
                                AI-powered assistant with a web app featuring history, folktales, cuisine, and gamified learning experiences, allowing users to explore and engage with
                                Cameroon’s traditions, stories, and regional cultures in a fun and immersive way.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React.js", "Node.js", "TailwindCSS", "DOCKER"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors"> View project ⟶ {" "}</a>
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                            <img
                                src={project1}
                                alt="GraceSyntax"
                                className="rounded-xl"
                            />
                            <h3 className="text-xl font-bold mb-2">
                                Cloud Patform
                            </h3>
                            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nemo voluptatibus commodi amet error praesentium neque architecto, velit officiis magni harum a
                                lias tempore corrupti perspiciatis incidunt possimus, quidem quo. Dignissimos, esse?
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "DOCKER"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors"> View project ⟶ {" "}</a>
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                            <img
                                src={project1}
                                alt="GraceSyntax"
                                className="rounded-xl"
                            />

                            <h3 className="text-xl font-bold mb-2">
                                ExamLink
                            </h3>
                            <p className="text-gray-400 mb-4">is a web-based platform designed to manage and streamline candidate registration, data tracking, and exam processing for educational institutions. It supports user authentication, school management, student assignment,
                                and exam handling through a clean and efficient interface. Built with modern technologies like React.js, Tailwind CSS, and Node.js, ExamLink aims to simplify exam logistics and candidate management.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React.js", "Node.js", "TailwindCSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors"> View project ⟶ {" "}</a>
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                            <img
                                src={project1}
                                alt="GraceSyntax"
                                className="rounded-xl"
                            />
                            <h3 className="text-xl font-bold mb-2">
                                Cloud Patform
                            </h3>
                            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nemo voluptatibus commodi amet error praesentium neque architecto, velit officiis magni harum a
                                lias tempore corrupti perspiciatis incidunt possimus, quidem quo. Dignissimos, esse?
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "DOCKER"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors"> View project ⟶ {" "}</a>
                            </div>

                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}