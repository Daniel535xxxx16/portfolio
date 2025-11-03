"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaProjectDiagram, FaHistory } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["profile", "experience", "projects", "history"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-2xl font-bold text-gray-900 dark:text-white"
              whileHover={{ scale: 1.05 }}
            >
              Daniel
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "profile", label: "Profil" },
                { id: "experience", label: "Pengalaman" },
                { id: "projects", label: "Proyek" },
                { id: "history", label: "Riwayat" }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Profile Section */}
      <motion.section
        id="profile"
        className="pt-24 pb-20 px-6"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Profile Image */}
            <motion.div
              className="flex-shrink-0"
              variants={fadeInUp}
            >
              <Image
                src="/me.jpg"
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-lg border-4 border-blue-500"
                priority
              />
            </motion.div>

            {/* Profile Info */}
            <motion.div
              className="text-center md:text-left"
              variants={fadeInUp}
>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Daniel
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Developer Full Stack | UI/UX
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl">
                Student At Tarumanaga
              </p>

              {/* Skills */}
              <motion.div
                className="mb-8"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Skill
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Contact Links */}
              <motion.div
                className="flex justify-center md:justify-start gap-6"
                variants={fadeInUp}
              >
                <motion.a
                  href="https://github.com/test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaEnvelope size={24} />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 px-6"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <FaBriefcase className="mx-auto text-4xl text-blue-600 dark:text-blue-400 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Pengalaman</h2>
          </motion.div>
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                position: "Developer Full Stack Senior",
                company: "Tech Corp",
                year: "2022 - Sekarang",
                description: "Memimpin pengembangan aplikasi web menggunakan React, Node.js, dan teknologi cloud."
              },
              {
                position: "Developer Frontend",
                company: "Startup Inc",
                year: "2020 - 2022",
                description: "Mengembangkan antarmuka pengguna responsif dan meningkatkan pengalaman pengguna."
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{exp.position}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.year}</p>
                <p className="text-gray-700 dark:text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-6 bg-white dark:bg-gray-800"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <FaProjectDiagram className="mx-auto text-4xl text-blue-600 dark:text-blue-400 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Proyek</h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                title: "Platform E-commerce",
                description: "Solusi e-commerce full-stack dengan React, Node.js, dan MongoDB.",
                tech: ["React", "Node.js", "MongoDB"]
              },
              {
                title: "Aplikasi Manajemen Tugas",
                description: "Aplikasi manajemen tugas kolaboratif dengan pembaruan real-time.",
                tech: ["Next.js", "Socket.io", "PostgreSQL"]
              },
              {
                title: "Dashboard Cuaca",
                description: "Dashboard cuaca responsif dengan ramalan berbasis lokasi.",
                tech: ["React", "OpenWeather API", "Chart.js"]
              },
              {
                title: "Website Portofolio",
                description: "Website portofolio modern yang dibuat dengan Next.js dan Tailwind CSS.",
                tech: ["Next.js", "Tailwind CSS", "Framer Motion"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* History Section */}
      <motion.section
        id="history"
        className="py-20 px-6"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <FaHistory className="mx-auto text-4xl text-blue-600 dark:text-blue-400 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Riwayat</h2>
          </motion.div>
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                year: "2023",
                title: "Mencapai Sertifikasi AWS Certified Solutions Architect",
                description: "Menyelesaikan sertifikasi yang menunjukkan keahlian dalam solusi cloud AWS."
              },
              {
                year: "2022",
                title: "Lulus dengan Predikat Cum Laude",
                description: "Menyelesaikan gelar Sarjana Ilmu Komputer dengan IPK 3.8."
              },
              {
                year: "2021",
                title: "Kontribusi Open Source Pertama",
                description: "Berkontribusi pada perpustakaan React populer, mendapatkan pengalaman dalam pengembangan kolaboratif."
              },
              {
                year: "2020",
                title: "Mulai Belajar Pengembangan Web",
                description: "Memulai perjalanan ke pengembangan web, belajar HTML, CSS, dan JavaScript."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 dark:bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.year}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-12 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-2xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kontak Saya
          </motion.h3>
          <motion.p
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
          </motion.p>
          <motion.div
            className="flex justify-center gap-8 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/test"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/test"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaEnvelope size={28} />
            </motion.a>
          </motion.div>
          <motion.div
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm">
              © 2024 Daniel. All Right Reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
