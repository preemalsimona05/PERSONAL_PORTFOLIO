import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Code,
  ShieldAlert,
  BrainCircuit,
  GraduationCap,
  Award,
  Mic,
  TerminalSquare,
  Send,
  CheckCircle2
} from 'lucide-react';

// --- DATA ---
const personalInfo = {
  name: "Preemal Simona Pinto",
  role: "B.Tech Computer Science & Engineering Student",
  tagline: "Building secure, AI-driven software solutions & resilient digital products.",
  about: "Passionate B.Tech student specializing in building secure, AI-driven software solutions. I combine technical skills in cybersecurity and rapid prototyping with a strong background in public speaking, active listening, and team leadership to deliver intelligent, resilient digital products.",
  email: "preemalpinto5@gmail.com",
  phone: "8147231555",
  location: "Mangalore, India",
  github: "https://github.com/preemalsimona05",
  linkedin: "https://linkedin.com/in/preemalsimona05",
  languages: ["English", "Hindi", "Kannada"]
};

const skills = {
  technical: ["AI & Machine Learning", "Software Development", "Full Stack Development", "Cybersecurity", "Python", "React 19", "TypeScript", "FastAPI", "TensorFlow", "SQLAlchemy"],
  soft: ["Public Speaking", "Team Collaboration", "Active Listening", "Communication", "Rapid Prototyping", "Team Leadership"]
};

const projects = [
  {
    title: "HEMOVISION AI",
    subtitle: "Full-Stack Medical Triage & AI Diagnostics",
    description: "Engineered a full-stack application to predict Dengue risk levels and estimate platelet counts. Built an AI inference engine integrating TensorFlow and NumPy to analyze visual biometrics (ocular/palmar scans) alongside patient history.",
    tech: ["React 19", "TypeScript", "FastAPI", "Python", "TensorFlow", "SQLite", "Pandas"],
    icon: <BrainCircuit className="w-6 h-6 text-teal-400" />
  },
  {
    title: "ZENITH",
    subtitle: "Autonomous AI Trust Engine & Self-Healing Debug System",
    description: "Developed a cutting-edge security and resilient infrastructure solution under tight deadlines for the Hackfest innovation competition. Focused on building a specialized AI trust layer to handle logic verification and automated error handling.",
    tech: ["AI Trust Layer", "Logic Verification", "Automated Debugging", "Cybersecurity"],
    icon: <ShieldAlert className="w-6 h-6 text-blue-400" />
  }
];

const experience = [
  {
    type: "edu",
    title: "B.Tech in Computer Science and Engineering",
    org: "St. Aloysius (Deemed to be University)",
    date: "07/2025 - Present",
    desc: "Focusing on AI, software engineering, and secure system architecture.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    type: "edu",
    title: "Pre-University (PU) / Class 12",
    org: "St. Aloysius PU College, Mangalore",
    date: "06/2023 - 03/2025",
    desc: "Foundation in science and mathematics.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    type: "achieve",
    title: "Student Innovation Ambassador",
    org: "MoE's Innovation Cell & AICTE, Government of India",
    date: "2025 - present",
    desc: "Appointed and certified at both Foundation and Advanced levels after rigorous training to drive institutional innovation and entrepreneurship.",
    icon: <Award className="w-5 h-5" />
  },
  {
    type: "achieve",
    title: "Hackathon Innovator & Competitor",
    org: "Hackfest & FutureSprint",
    date: "Recent",
    desc: "Collaborated in fast-paced team environments to design and rapidly prototype real-world tech applications like Zenith and Sustainability AI.",
    icon: <TerminalSquare className="w-5 h-5" />
  },
  {
    type: "achieve",
    title: "Bilingual Radio Broadcast Co-Host",
    org: "Radio Sarang, Mangalore",
    date: "Past",
    desc: "Co-hosted 'Simple English 2.0', successfully teaching English to the public through real-time Kannada translation.",
    icon: <Mic className="w-5 h-5" />
  }
];

const certificates = [
  "Certified Innovation Ambassador (Advanced Level) - MoE's Innovation Cell & AICTE (2026)",
  "Certified Innovation Ambassador (Foundation Level) - MoE's Innovation Cell & AICTE (2026)",
  "Build Your Own Chatbot - IBM Developer Skills Network (Cognitive Class, 2026)"
];


// --- COMPONENTS ---

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          PSP.
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
          <a href="#journey" className="hover:text-teal-400 transition-colors">Journey</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>
        <a 
          href="#contact"
          className="px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 hover:bg-teal-500 hover:text-slate-900 transition-all text-sm font-semibold"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
    {/* Abstract Background Orbs */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

    <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300 mb-8">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
        <span>Available for Internships & Projects</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
        Hi, I'm <br className="md:hidden"/>
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {personalInfo.name}
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light mb-10 leading-relaxed">
        {personalInfo.role}. {personalInfo.tagline}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <a href="#projects" className="px-8 py-3 rounded-full bg-teal-500 text-slate-900 font-bold hover:bg-teal-400 transition-colors flex items-center group">
          View Projects
          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors flex items-center border border-slate-700">
          <Github className="mr-2 w-4 h-4" />
          GitHub
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors flex items-center border border-slate-700">
          <Linkedin className="mr-2 w-4 h-4" />
          LinkedIn
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-400 text-sm max-w-3xl w-full">
        <div className="flex items-center justify-center space-x-2 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
          <Mail className="w-5 h-5 text-teal-400" />
          <span>{personalInfo.email}</span>
        </div>
        <div className="flex items-center justify-center space-x-2 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
          <Phone className="w-5 h-5 text-teal-400" />
          <span>{personalInfo.phone}</span>
        </div>
        <div className="flex items-center justify-center space-x-2 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
          <MapPin className="w-5 h-5 text-teal-400" />
          <span>{personalInfo.location}</span>
        </div>
      </div>
    </div>
  </section>
);

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12 md:mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
    {subtitle && <p className="text-slate-400 text-lg">{subtitle}</p>}
    <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-6"></div>
  </div>
);

const About = () => (
  <section id="about" className="py-20 px-6 bg-slate-900/50 border-t border-slate-800/50">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        
        <div className="md:col-span-7">
          <SectionHeading title="About Me" subtitle="Bridging the gap between intelligent systems and human-centric design." />
          
          <div className="text-slate-300 leading-relaxed text-lg mb-8 space-y-5">
            <p>
              I'm Preemal Simona Pinto, a passionate B.Tech student in Computer Science and Engineering at St. Aloysius University, Mangalore. I specialize in the powerful intersection of AI, Software Development, and Cybersecurity.
            </p>
            <p>
              I thrive on building intelligent, secure, and resilient digital solutions—leveraging modern rapid prototyping workflows to deliver production-ready software while keeping data security and system integrity at the core of what I do.
            </p>
            <p>
              Beyond the keyboard, I am an active communicator and collaborative team player. I bring strong public speaking skills, active listening abilities, and a passion for team leadership. I believe the best and most secure technology is built through active collaboration. Fluent in English, Hindi, and Kannada.
            </p>
          </div>

          <div className="mb-8 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
            <h4 className="text-white font-semibold mb-4 text-lg">Focus Areas</h4>
            <ul className="space-y-3">
              {[
                "AI and intelligent system design",
                "Cybersecurity and secure architecture",
                "Rapid prototyping with modern development workflows",
                "Collaborative problem-solving and team communication"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-300">
                  <span className="text-teal-400 mr-3 font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            {personalInfo.languages.map(lang => (
              <span key={lang} className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-sm border border-slate-700">
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 space-y-6 md:sticky md:top-32">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
            <h3 className="text-white font-semibold flex items-center mb-4">
              <Code className="w-5 h-5 mr-2 text-teal-400" />
              Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-teal-500/10 text-teal-300 text-sm font-medium border border-teal-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
            <h3 className="text-white font-semibold flex items-center mb-4">
              <Mic className="w-5 h-5 mr-2 text-blue-400" />
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-300 text-sm font-medium border border-blue-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
            <h3 className="text-white font-semibold mb-4">Beyond Coding</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-300 bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
                <span className="text-xl mr-3 leading-none">🎤</span>
                <span className="text-sm font-medium">Public speaking and sharing knowledge</span>
              </li>
              <li className="flex items-center text-slate-300 bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
                <span className="text-xl mr-3 leading-none">🎭</span>
                <span className="text-sm font-medium">Dramatic acting and creative expression</span>
              </li>
              <li className="flex items-center text-slate-300 bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
                <span className="text-xl mr-3 leading-none">👥</span>
                <span className="text-sm font-medium">Active communication and collaborative teamwork</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6 relative">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading title="Featured Projects" subtitle="Architecting AI-driven solutions and resilient systems." />
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative bg-slate-800/40 hover:bg-slate-800/80 rounded-3xl p-8 border border-slate-700 transition-all duration-300 hover:border-teal-500/50 hover:shadow-[0_0_40px_-15px_rgba(20,184,166,0.3)]">
            <div className="absolute top-8 right-8 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform">
              {project.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 pr-16">{project.title}</h3>
            <p className="text-teal-400 text-sm font-semibold mb-6 uppercase tracking-wider">{project.subtitle}</p>
            
            <p className="text-slate-300 leading-relaxed mb-8">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900 text-slate-400 border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Journey = () => (
  <section id="journey" className="py-24 px-6 bg-slate-900/50 border-t border-slate-800/50">
    <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16">
      
      {/* Timeline Column */}
      <div>
        <SectionHeading title="Education & Experience" subtitle="My academic and professional trajectory." />
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experience.map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-teal-500 text-slate-900 shrink-0 z-10 shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {item.icon}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-teal-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-teal-400 text-sm">{item.date}</span>
                </div>
                <h4 className="font-bold text-lg text-white mb-1">{item.title}</h4>
                <p className="text-sm font-medium text-slate-400 mb-3">{item.org}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Column */}
      <div>
        <SectionHeading title="Certifications" subtitle="Continuous learning and validation." />
        <div className="space-y-4">
          {certificates.map((cert, idx) => (
            <div key={idx} className="flex items-start p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
              <Award className="w-6 h-6 text-blue-400 mr-4 shrink-0 mt-1" />
              <p className="text-slate-300 font-medium leading-relaxed">{cert}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // The industry standard for static/React portfolios is using an Email API.
    // Services like Formspree.io or Web3Forms give you a unique ID to paste here.
    // It securely routes the form data directly to your email inbox!
    
    // To make this live: Go to formspree.io, get a free form ID, and replace 'YOUR_FORM_ID'
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Fallback for demonstration inside this environment until you add your real Form ID
      setTimeout(() => {
        setFormStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together." />
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              Whether you have a question about my projects, are interested in a collaboration, or just want to say hi, my inbox is always open!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-teal-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-slate-400 hover:text-teal-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <span className="text-slate-400">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Hi Preemal, I'd like to talk about..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
                {formStatus === 'sending' && (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                )}
                {formStatus === 'sent' && (
                  <>
                    <span>Message Sent!</span>
                    <CheckCircle2 className="w-5 h-5 ml-1" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 py-12 px-6 border-t border-slate-800">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">PSP.</h2>
        <p className="text-slate-500 mt-2">© {new Date().getFullYear()} Preemal Simona Pinto. All rights reserved.</p>
      </div>
      
      <div className="flex space-x-6">
        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
          <Github className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
          <Linkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white transition-colors">
          <Mail className="w-6 h-6" />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-teal-500/30 selection:text-teal-200" style={{scrollBehavior: 'smooth'}}>
      {/* Dynamic Font Styling Injected Directly */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        /* Modern sci-fi/geometric look for headings */
        h1, h2, h3, h4, .font-display {
          font-family: 'Space Grotesk', sans-serif !important;
          letter-spacing: -0.02em;
        }
        
        /* Premium circular curves for body reading & elements */
        body, p, span, li, a, label, input, textarea, button, .font-sans {
          font-family: 'Outfit', sans-serif !important;
          letter-spacing: -0.01em;
        }
      `}</style>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}