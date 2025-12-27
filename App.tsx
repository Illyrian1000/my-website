import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Send,
  Terminal,
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';

import { Header, Footer, PageShell, ThemeProvider } from './components/Layout';
import { Button, Card, Badge, Input, Textarea, cn } from './components/UI';
import { 
  SERVICES, 
  PROJECTS, 
  EXPERIENCE, 
  SKILLS, 
  CERTIFICATIONS, 
  TOOL_LOGOS 
} from './constants';
import { Project } from './types';

// --- Components ---
const Scanline = () => (
  <>
    <div className="scanline-bar"></div>
    <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-30"></div>
  </>
);

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Animations ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Pages ---

const HomePage = () => (
  <div className="flex flex-col gap-24 pb-20">
    {/* Hero Section */}
    <section className="relative pt-12 pb-20 md:pt-32 md:pb-32 px-4 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto max-w-4xl text-center flex flex-col items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-mono"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Available for new projects
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
        >
          System Admin <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-600">
            Microsoft Specialist
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 font-mono"
        >
          Specializing in Hybrid Identity, Exchange, Azure Infrastructure, and Endpoint Automation.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/services">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              View Services <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Tooling Strip */}
    <section className="container mx-auto max-w-6xl px-4 md:px-12 relative z-10">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-100 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {TOOL_LOGOS.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center gap-2 group">
             <tool.icon size={32} className="text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
             <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-500 group-hover:text-cyan-700 dark:group-hover:text-cyan-400">{tool.name.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Capabilities Snapshot */}
    <section className="container mx-auto max-w-6xl px-4 md:px-12 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Capabilities</h2>
          <p className="text-slate-600 dark:text-slate-400">Core competencies and technical focus areas.</p>
        </div>
        <Link to="/services" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 text-sm font-medium flex items-center gap-1">
          View all services <ArrowRight size={16} />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.slice(0, 3).map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full p-6 flex flex-col gap-4">
              <div className="h-12 w-12 rounded-lg bg-cyan-100 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Selected Proof */}
    <section className="container mx-auto max-w-6xl px-4 md:px-12 relative z-10">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.slice(0, 2).map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/80 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <span className="text-xs font-mono text-slate-500">{project.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-1">Challenge:</strong>
                  {project.challenge}
                </div>
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-1">Outcome:</strong>
                  {project.outcome}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/projects">
          <Button variant="outline">View All Projects</Button>
        </Link>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="container mx-auto max-w-6xl px-4 md:px-12 mb-12 relative z-10">
      <Card variant="glass" className="p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Ready to optimize your infrastructure?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Whether you need a one-off migration or ongoing support, I'm here to help you scale securely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
            <a href="mailto:ilirprevazi@gmail.com">
              <Button variant="ghost" size="lg">ilirprevazi@gmail.com</Button>
            </a>
          </div>
        </div>
      </Card>
    </section>
  </div>
);

const ServicesPage = () => (
  <PageShell className="container mx-auto px-4">
    <motion.div 
      initial="initial" animate="animate" variants={staggerContainer}
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={fadeInUp} className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Services</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Professional IT services designed to secure, manage, and optimize your Microsoft environment.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {SERVICES.map((service) => (
          <motion.div key={service.id} variants={fadeInUp}>
            <Card className="p-6 md:p-8 grid md:grid-cols-[1fr,2fr] gap-8">
              <div className="flex flex-col gap-4">
                <div className="h-14 w-14 rounded-lg bg-cyan-100 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="mt-2 w-full md:w-auto">
                    Inquire
                  </Button>
                </Link>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8 text-sm">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-cyan-500" /> What You Get
                  </h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-700 mt-1.5 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                    <Terminal size={16} className="text-cyan-500" /> Deliverables
                  </h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeInUp} className="mt-16 grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Troubleshooting</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Hourly engagement for fixing critical issues.</p>
        </Card>
        <Card className="p-6 text-center bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-500/20">
          <h3 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Projects</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Fixed-scope delivery with clear milestones.</p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Retainer</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Monthly support for ongoing maintenance.</p>
        </Card>
      </motion.div>
    </motion.div>
  </PageShell>
);

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const allTags = ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <PageShell className="container mx-auto px-4">
      <motion.div 
        initial="initial" animate="animate" variants={staggerContainer}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Case Studies</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Real-world examples of infrastructure challenges solved through modern cloud architecture.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                filter === tag
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-800"
              )}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp} layout>
              <Card className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-grow space-y-6">
                    <div>
                      <div className="flex items-center gap-3 text-sm text-slate-500 font-mono mb-2">
                        <span>{project.date}</span>
                        <span>•</span>
                        <span className="text-cyan-500">Case Study</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h2>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider">The Challenge</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.challenge}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider">The Solution</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-64 flex-shrink-0 bg-slate-100 dark:bg-slate-950/50 rounded-lg p-6 border border-slate-200 dark:border-slate-800/50 flex flex-col justify-center">
                    <h4 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 mb-4 uppercase tracking-wider">Key Outcomes</h4>
                    <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      "{project.outcome}"
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No projects found with that tag.
            </div>
          )}
        </div>
      </motion.div>
    </PageShell>
  );
};

const AboutPage = () => (
  <PageShell className="container mx-auto px-4">
    <motion.div 
      initial="initial" animate="animate" variants={staggerContainer}
      className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12"
    >
      <div className="space-y-12">
        <motion.section variants={fadeInUp}>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">About Me</h1>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
            <p className="text-lg leading-relaxed mb-4">
              I am a Technology Enthusiast and System Administrator with extensive experience in modern IT infrastructure, cloud technologies, and Microsoft solutions.
            </p>
            <p className="leading-relaxed mb-4">
              I actively invest time in self-study, following official documentation, blogs, and technical courses to stay updated on Microsoft and cloud technologies. I enjoy testing new features, services, and tools to explore how they can be used to improve reliability, automation, and day-to-day IT operations.
            </p>
            <p className="leading-relaxed">
              In my free time, I improve my programming skills, mainly with JavaScript, PowerShell, and Python, using them to build scripts that automate routine tasks and simulate real infrastructure scenarios.
            </p>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Terminal size={20} className="text-cyan-500" /> Experience
          </h2>
          <div className="relative border-l border-slate-300 dark:border-slate-800 ml-3 space-y-12 pl-8 py-2">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-cyan-500" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{job.role}</h3>
                  <span className="text-sm font-mono text-slate-500">{job.period}</span>
                </div>
                <div className="text-cyan-600 dark:text-cyan-400 mb-4 font-medium">{job.company}</div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                  {job.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Skills Matrix</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {SKILLS.map((cat) => (
              <Card key={cat.category} className="p-5">
                <h4 className="font-bold text-cyan-600 dark:text-cyan-400 mb-3 text-sm uppercase tracking-wide">{cat.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="text-xs px-2 py-1 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.section>
      </div>

      <div className="space-y-8">
        <motion.div variants={fadeInUp}>
          <Card className="p-6 sticky top-28">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="flex flex-col gap-3">
              <Button className="w-full gap-2 justify-center">
                <Download size={18} /> Download CV (PDF)
              </Button>
              <Button variant="outline" className="w-full gap-2 justify-center">
                <Download size={18} /> One-Page Resume
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-4">Connect</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="px-0 hover:bg-transparent hover:text-cyan-500">LinkedIn</Button>
                <Button variant="ghost" size="sm" className="px-0 hover:bg-transparent hover:text-cyan-500">GitHub</Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  </PageShell>
);

const CertificationsPage = () => (
  <PageShell className="container mx-auto px-4">
    <motion.div 
      initial="initial" animate="animate" variants={staggerContainer}
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={fadeInUp} className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications & Learning</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Continuous professional development and validated expertise.
        </p>
      </motion.div>

      <div className="grid gap-6 mb-16">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div key={idx} variants={fadeInUp}>
            <Card className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={24} className={cert.status === 'Active' ? "text-green-500" : (cert.status === 'In Progress' ? "text-cyan-500" : "text-yellow-500")} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cert.name}</h3>
                  <p className="text-sm text-slate-500">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
              <Badge className={cn(
                cert.status === 'Active' ? "bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-500/20" : 
                cert.status === 'In Progress' ? "bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20" :
                "bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/20"
              )}>
                {cert.status}
              </Badge>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeInUp}>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Learning Roadmap</h2>
        <Card className="p-8 border-l-4 border-l-cyan-500">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Focus: Azure Administration (AZ-104)</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
             Currently preparing for the Microsoft Azure Administrator certification to further strengthen my skills in managing Azure and hybrid environments.
          </p>
          <div className="flex gap-4 text-sm text-slate-500 font-mono">
            <span>Status: In Progress</span>
            <span>Target: 2025</span>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  </PageShell>
);

const ContactPage = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Construct mailto link
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const topic = formData.get('topic');
    const message = formData.get('message');
    
    const subject = encodeURIComponent(`Portfolio Contact: ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    
    // Simulate delay for effect, then open mailto
    setTimeout(() => {
      window.location.href = `mailto:ilirprevazi@gmail.com?subject=${subject}&body=${body}`;
      setFormState('success');
    }, 1000);
  };

  return (
    <PageShell className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Have a project in mind or need assistance with your Microsoft stack?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 order-2 md:order-1">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="h-16 w-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">I'll get back to you within 24 hours.</p>
                <Button onClick={() => setFormState('idle')} variant="outline">Send another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Name</label>
                  <Input name="name" required placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Email</label>
                  <Input name="email" required type="email" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Topic</label>
                  <select name="topic" className="flex h-10 w-full rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500">
                    <option>General Inquiry</option>
                    <option>Project Quote</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Message</label>
                  <Textarea name="message" required placeholder="Tell me about your infrastructure needs..." rows={5} />
                </div>
                <Button type="submit" className="w-full gap-2" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Opening Email Client...' : (
                    <>Send Message <Send size={16} /></>
                  )}
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Info */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:ilirprevazi@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  <div className="h-10 w-10 rounded bg-slate-100 dark:bg-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-800">
                    <Mail size={18} />
                  </div>
                  ilirprevazi@gmail.com
                </a>
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                  <div className="h-10 w-10 rounded bg-slate-100 dark:bg-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-800">
                    <Phone size={18} />
                  </div>
                  +355 696352684
                </div>
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                  <div className="h-10 w-10 rounded bg-slate-100 dark:bg-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-800">
                    <MapPin size={18} />
                  </div>
                  Tirana, Albania
                </div>
              </div>
            </div>

            <Card variant="glass" className="p-6 bg-cyan-50/50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-500/20">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-4 flex items-center gap-2">
                <Terminal size={16} /> Before you message
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                To help me understand your request better, please include:
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li className="flex gap-2"><span className="text-cyan-500">•</span> Tenant type (Business/Enterprise)</li>
                <li className="flex gap-2"><span className="text-cyan-500">•</span> Summary of the issue or goal</li>
                <li className="flex gap-2"><span className="text-cyan-500">•</span> Desired timeline</li>
              </ul>
            </Card>

            <div className="pt-4">
               <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Also find me on</h4>
               <div className="flex gap-4">
                 <a href="https://www.linkedin.com/in/ilirjan-prevazi/" target="_blank" rel="noopener noreferrer">
                   <Button variant="outline" size="sm" className="gap-2">
                     <ExternalLink size={14} /> LinkedIn
                   </Button>
                 </a>
                 <Button variant="outline" size="sm" className="gap-2">
                   <ExternalLink size={14} /> Upwork
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </PageShell>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-700 dark:selection:text-cyan-200 font-sans transition-colors duration-300">
          <Scanline />
          <Header />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;