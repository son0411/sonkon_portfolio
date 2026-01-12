"use client";

import React from 'react';
import { Github, Linkedin, FileText, Mail, ExternalLink, Code2, Database, Layout, Server, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// 2. IMPORT HÌNH ẢNH (GIỮ NGUYÊN)
import avatarImg from './images/avata3.png';
import aboutImg from './images/sonkon5.png';

// --- DATA CẤU HÌNH ---
const PORTFOLIO_DATA = {
  personal: {
    name: "Nguyễn Quốc Sơn",
    title: "Frontend Developer",
    tagline: "Web Developer – Luôn học hỏi, luôn cải thiện",
    email: "sonnguyen2003cpr@gmail.com",
    location: "Thu Dau Mot, Ho Chi Minh City",
    avatar: avatarImg.src,
    links: {
      github: "https://github.com/son0411",
      linkedin: "https://www.linkedin.com/in/s%C6%A1n-nguy%E1%BB%85n-a495403a5",
      cv: "/CV_NguyenQuocSon03.pdf",
      zalo: "https://zalo.me/0396781900"
    }
  },
  about: {
    image: aboutImg.src,
    summary: "I am a fresh graduate majoring in Information Technology, currently focusing on Frontend development, especially React. I have experience building web applications through academic projects and personal projects. I am always eager to learn, improve my skills, and gain practical experience as a Frontend Developer.",
    education: [
      {
        school: "Đại học Thủ Dầu Một (TDMU)",
        major: "Công nghệ thông tin",
        time: "2021 - 2026",
        gpa: "7/10"
      }
    ]
  },
  skills: [
    { category: "Frontend", icon: <Layout className="w-5 h-5" />, items: ["React", "TypeScript", "Flutter", "Tailwind CSS", "Ant Design"] },
    { category: "Backend Basics", icon: <Server className="w-5 h-5" />, items: ["Node.js", "Express", "RESTful API"] },
    { category: "Database", icon: <Database className="w-5 h-5" />, items: ["MongoDB", "MySQL", "PostgreSQL"] },
    { category: "Tools", icon: <Code2 className="w-5 h-5" />, items: ["Git/Github", "VS Code", "Postman", "Figma"] }
  ],
  projects: [
    {
      name: "Tutor – Student Connection System",
      desc: "Hệ thống kết nối gia sư trên nền tảng web/app giúp Gia sư và Học sinh tìm kiếm kết nối với nhau để học tập.",
      tech: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&q=80",
      demo: "https://youtu.be/2OGspyi0D2M?si=RFComVjISvKQUySe",
      github: "https://github.com/son0411/doantotnghiep_tutor.git"
    },
    {
      name: "Job Finder App",
      desc: "Ứng dụng tìm kiếm việc làm giúp nhà tuyển dụng và ứng viên tìm đến nhau.",
      tech: ["Android", "Kotlin", "Firebase"],
      image: "https://images.ui8.net/uploads/job_finder_mobile_app_ui_kit_card_product_1696848653737.png",
      demo: "https://youtu.be/jFih_-JRysU?si=fVMJnQwhaLXwlxzv",
      github: "https://github.com/son0411/ck_androi.git"
    },
    {
      name: "IT Learning App",
      desc: "Ứng dụng học tập tin học cơ bản cho học sinh.",
      tech: ["React Native", "Firebase", "Expo"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?fit=crop&w=800&q=80",
      demo: "https://drive.google.com/file/d/1dnoY9lntoQO539AGKI8PtksxxGt70VzX/view",
      github: "https://github.com/NKT-Anh/app_trac_nghiem.git"
    }
  ]
};

// --- CẤU HÌNH HIỆU ỨNG ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

// --- COMPONENTS ---

// 1. Navbar (Đơn giản hóa, bỏ Dark Mode, bỏ Mobile Menu)
const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100"
  >
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#" className="font-bold text-xl text-gray-900 flex items-center gap-2">
        <Code2 className="text-blue-600"/> SonkonIT
      </a>
      
      {/* Chỉ hiển thị trên Desktop, ẩn trên mobile */}
      <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </div>
  </motion.nav>
);

// 2. Hero Section (Xóa Dark Mode logic)
const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden relative">
    {/* Hiệu ứng nền */}
    <motion.div 
      animate={{ x: [0, 50, 0], y: [0, -30, 0] }} 
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
    />
    <motion.div 
      animate={{ x: [0, -50, 0], y: [0, 30, 0] }} 
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
    />

    <div className="max-w-6xl mx-auto px-4 z-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Cột Trái: Thông tin Text */}
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.div variants={fadeInUp}>
             <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                👋 Welcome to my portfolio
             </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Hi, I'm <br/>
            <span className="text-blue-600">{PORTFOLIO_DATA.personal.name}</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-600 font-medium mb-4">
            {PORTFOLIO_DATA.personal.title}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-6 font-medium">
            <MapPin className="w-5 h-5 text-red-500" /> 
            <span>{PORTFOLIO_DATA.personal.location}</span>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-gray-500 mb-8 text-lg font-light max-w-lg mx-auto md:mx-0">
            {PORTFOLIO_DATA.personal.tagline}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex justify-center md:justify-start gap-4 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href={PORTFOLIO_DATA.personal.links.cv} download
              className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition shadow-lg"
            >
              <FileText size={20} /> Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href={PORTFOLIO_DATA.personal.links.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-full hover:border-blue-500 hover:text-blue-500 transition shadow-sm"
            >
              <Linkedin size={20} /> LinkedIn
            </motion.a>
             <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href={PORTFOLIO_DATA.personal.links.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-full hover:border-black transition shadow-sm"
            >
              <Github size={20} /> GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Cột Phải: Avatar */}
        <motion.div 
          initial="hidden" animate="visible" variants={scaleUp}
          className="order-1 md:order-2 flex justify-center md:justify-end relative group"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
           <div className="relative w-64 h-64 md:w-80 md:h-80">
             <img 
               src={PORTFOLIO_DATA.personal.avatar} 
               alt="Profile" 
               className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
             />
              <motion.span 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ delay: 0.5, type: "spring" }}
               className="absolute bottom-8 right-8 bg-green-500 w-6 h-6 border-4 border-white rounded-full z-20"
             ></motion.span>
           </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// 3. About Section (Đã làm sạch Dark Mode)
const About = () => (
  <section id="about" className="py-24 bg-white scroll-mt-16 overflow-hidden">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 mb-16 text-center decoration-blue-500 underline decoration-4 underline-offset-8"
      >
        About Me
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition duration-300"></div>
          <img src={PORTFOLIO_DATA.about.image} alt="About" className="relative rounded-2xl shadow-lg w-full h-[400px] object-cover border border-gray-100" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Hello, I'm <span className="text-blue-600">Nguyễn Quốc Sơn</span>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">
            {PORTFOLIO_DATA.about.summary}
          </p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition duration-300">
             <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-500 rounded-full"></span> Education
             </h4>
             {PORTFOLIO_DATA.about.education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start md:items-center flex-col md:flex-row mb-2">
                <div>
                  <p className="font-bold text-gray-900 text-lg">{edu.school}</p>
                  <p className="text-gray-600">{edu.major}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {edu.time}
                  </span>
                  <p className="text-sm text-gray-500 mt-1 font-medium">GPA: {edu.gpa}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// 4. Skills Section (Đã làm sạch Dark Mode)
const Skills = () => (
  <section id="skills" className="py-24 bg-gray-50 scroll-mt-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 mb-12 text-center decoration-blue-500 underline decoration-4 underline-offset-8"
      >
        Technical Skills
      </motion.h2>
      
      <motion.div 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
          <motion.div 
            key={idx} variants={fadeInUp} whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              {skillGroup.icon}
              <h3 className="font-bold text-gray-900">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// 5. Projects Section (Đã làm sạch Dark Mode)
const Projects = () => (
  <section id="projects" className="py-24 bg-white scroll-mt-16">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 mb-12 text-center decoration-blue-500 underline decoration-4 underline-offset-8"
      >
        Featured Projects
      </motion.h2>

      <motion.div 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div 
            key={idx} variants={fadeInUp} whileHover={{ y: -10 }}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="h-48 overflow-hidden relative bg-gray-200">
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4 z-10 backdrop-blur-sm">
                <motion.a 
                  whileHover={{ scale: 1.1 }} href={project.github} target="_blank" rel="noreferrer" 
                  className="bg-white p-3 rounded-full shadow-lg" title="View Code"
                >
                  <Github size={20} className="text-gray-900" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }} href={project.demo} target="_blank" rel="noreferrer" 
                  className="bg-white p-3 rounded-full shadow-lg" title="View Demo"
                >
                  <ExternalLink size={20} className="text-gray-900" />
                </motion.a>
              </div>
              <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// 6. Contact Section (Giữ style tối màu cho Footer nhưng bỏ Dark Mode toggle)
const Contact = () => (
  <section id="contact" className="py-24 bg-gray-900 text-white text-center scroll-mt-16">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
      <p className="text-gray-400 mb-12 text-lg">
        Tôi đang tìm kiếm cơ hội Intern/Fresher Frontend Developer.
        <br />Sẵn sàng di chuyển và làm việc tại {PORTFOLIO_DATA.personal.location}.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <motion.a 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }} whileTap={{ scale: 0.95 }}
          href={`mailto:${PORTFOLIO_DATA.personal.email}`} 
          className="flex items-center gap-3 text-xl transition bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm"
        >
          <Mail /> {PORTFOLIO_DATA.personal.email}
        </motion.a>
      </div>

      <div className="flex justify-center gap-8 border-t border-gray-800 pt-8">
        <motion.a whileHover={{ y: -5, color: "#fff" }} href={PORTFOLIO_DATA.personal.links.github} className="text-gray-500 transition"><Github size={24}/></motion.a>
        <motion.a whileHover={{ y: -5, color: "#3b82f6" }} href={PORTFOLIO_DATA.personal.links.linkedin} className="text-gray-500 transition"><Linkedin size={24}/></motion.a>
      </div>
      
      <p className="text-gray-600 text-sm mt-12">
        © 2024 {PORTFOLIO_DATA.personal.name}. Built with React & Tailwind CSS.
      </p>
    </motion.div>
  </section>
);

// --- APP COMPONENT ---
function App() {
  return (
    <div className="min-h-screen font-sans antialiased bg-white text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;