import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Award } from 'lucide-react';
// import { ModeToggle } from './theme-toggler';

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    //   const [activeSection, setActiveSection] = useState('home');
    const activeSection = 'home'
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "#"
        },
        {
            title: "AI Content Generator",
            description: "Machine learning powered content generation tool with natural language processing capabilities.",
            tech: ["Python", "TensorFlow", "FastAPI", "React"],
            link: "#"
        },
        {
            title: "Social Media Dashboard",
            description: "Analytics dashboard for tracking social media metrics across multiple platforms with real-time updates.",
            tech: ["Vue.js", "Firebase", "Chart.js", "Tailwind"],
            link: "#"
        },
        {
            title: "Task Management App",
            description: "Collaborative project management tool with kanban boards, time tracking, and team collaboration features.",
            tech: ["Next.js", "PostgreSQL", "Prisma", "WebSockets"],
            link: "#"
        }
    ];

    const skills = [
        { name: "Frontend", items: ["React", "Vue.js", "Next.js", "Tailwind CSS", "TypeScript"] },
        { name: "Backend", items: ["Node.js", "Python", "Express", "Django", "REST APIs"] },
        { name: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"] },
        { name: "Tools", items: ["Git", "Docker", "AWS", "CI/CD", "Figma"] }
    ];

    const experience = [
        {
            title: "Senior Full Stack Developer",
            company: "Tech Innovations Inc.",
            period: "2022 - Present",
            description: "Leading development of scalable web applications and mentoring junior developers."
        },
        {
            title: "Frontend Developer",
            company: "Digital Solutions Co.",
            period: "2020 - 2022",
            description: "Built responsive user interfaces and improved application performance by 40%."
        },
        {
            title: "Junior Developer",
            company: "StartUp Studio",
            period: "2019 - 2020",
            description: "Developed features for multiple client projects using modern web technologies."
        }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? (darkMode ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-lg') : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Portfolio
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`hover:text-blue-500 transition-colors duration-200 ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Theme Toggle & Mobile Menu */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-lg transition-all duration-200 ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-50 text-white hover:bg-gray-300'}`}
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            {/* < ModeToggle /> */}

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'bg-gray-50 text-white border-gray-200'}`}>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block px-3 py-2 rounded-md hover:bg-blue-500/10 hover:text-blue-500 transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-fade-in">
                            <div className="inline-block">
                                <span className="text-blue-500 font-semibold text-lg">Hello, I'm</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Elly Okinyi
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-400">
                                Full Stack Developer & UI/UX Enthusiast
                            </p>
                            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-xl`}>
                                Crafting beautiful, performant web experiences with modern technologies.
                                Passionate about clean code and intuitive design.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="#contact"
                                    className="px-8 py-3 bg-linear-to-r from-blue-300 to-purple-400 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                                >
                                    Get in Touch
                                </a>
                                <a
                                    href="#projects"
                                    className={`px-8 py-3 border-2 ${darkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'} rounded-lg font-semibold hover:scale-105 transition-all duration-200`}
                                >
                                    View Work
                                </a>
                            </div>
                            <div className="flex gap-4 pt-4">
                                {[Github, Linkedin, Mail].map((Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} hover:scale-110 transition-all duration-200`}
                                    >
                                        <Icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className={`relative w-full h-96 ${darkMode ? 'bg-linear-to-br from-blue-500/20 to-purple-600/20' : 'bg-linear-to-br from-blue-500/10 to-purple-600/10'} rounded-2xl animate-pulse-slow`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Code size={120} className="text-blue-500/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        <User className="inline-block mr-3 mb-2" size={36} />
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
                            <h3 className="text-2xl font-bold mb-4 text-blue-500">Background</h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                With over 5 years of experience in web development, I specialize in building
                                scalable applications that prioritize user experience. My journey started with
                                a passion for problem-solving and has evolved into creating solutions that
                                make a real impact.
                            </p>
                        </div>
                        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
                            <h3 className="text-2xl font-bold mb-4 text-purple-500">What I Do</h3>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                I transform ideas into elegant digital solutions, focusing on responsive design,
                                performance optimization, and clean architecture. I believe in writing code that's
                                not just functional, but maintainable and scalable.
                            </p>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((category, idx) => (
                            <div
                                key={idx}
                                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                            >
                                <h4 className="text-xl font-bold mb-4 text-blue-500">{category.name}</h4>
                                <ul className="space-y-2">
                                    {category.items.map((skill, i) => (
                                        <li key={i} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        <Briefcase className="inline-block mr-3 mb-2" size={36} />
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}
                            >
                                <div className="h-48 bg-linear-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Code size={64} className="text-white/80" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`px-3 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full text-sm`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        className="inline-flex items-center text-blue-500 hover:text-blue-600 font-semibold"
                                    >
                                        View Project <ExternalLink size={16} className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        <Award className="inline-block mr-3 mb-2" size={36} />
                        Experience
                    </h2>
                    <div className="space-y-8 max-w-3xl mx-auto">
                        {experience.map((exp, idx) => (
                            <div
                                key={idx}
                                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500`}
                            >
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                                    <h3 className="text-xl font-bold">{exp.title}</h3>
                                    <span className="text-blue-500 font-semibold text-sm mt-1 sm:mt-0">{exp.period}</span>
                                </div>
                                <p className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                                    {exp.company}
                                </p>
                                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        <Mail className="inline-block mr-3 mb-2" size={36} />
                        Get In Touch
                    </h2>
                    <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:hello@example.com"
                            className="px-8 py-4 bg-linear-to-r from-blue-200 to-purple-400 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            Send Email
                        </a>
                        <a
                            href="#"
                            className={`px-8 py-4 border-2 ${darkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'} rounded-lg font-semibold hover:scale-105 transition-all duration-200`}
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'} text-center`}>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    © 2024 John Doe. Built with React & Tailwind CSS
                </p>
            </footer>

            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
        </div>
    );
};

export default Portfolio;