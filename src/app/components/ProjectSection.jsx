"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  {
    title: "Frontend Development",
    icon: "🎨",
    points: [
      "Responsive, accessible interfaces with React and Next.js across customer-facing journeys",
      "State management using Redux Toolkit and RTK Query for scalable data flow",
      "Reusable component libraries and dashboards surfacing real-time business data",
    ],
  },
  {
    title: "Backend & APIs",
    icon: "⚙️",
    points: [
      "REST APIs and microservices built with FastAPI, Django, and Flask",
      "Modular backend services powering internal web platforms and SaaS products",
      "Authentication, rate limiting, and structured logging for secure access",
    ],
  },
  {
    title: "Databases & Data Modeling",
    icon: "🗄️",
    points: [
      "Normalized schemas and query optimization on PostgreSQL and MySQL",
      "Caching tiers with Redis, partitioning, and archival strategies",
      "Reduced report runtimes by 40% without impacting data freshness",
    ],
  },
  {
    title: "Cloud & CI/CD",
    icon: "☁️",
    points: [
      "Cloud deployments on AWS and Azure with 99.9% uptime",
      "Containerized services with Docker and automated CI/CD pipelines",
      "Cut release cycle time by 30% and deployment errors by 25%",
    ],
  },
  {
    title: "Authentication & Security",
    icon: "🔐",
    points: [
      "Hardened authentication and authorization flows across products",
      "Secure coding standards and peer code reviews for modular design",
      "Reduced incident resolution time by 20% with documented runbooks",
    ],
  },
  {
    title: "Performance Optimization",
    icon: "⚡",
    points: [
      "Reduced API latency by 40% and dashboard load times by 45%",
      "Optimized queries, API flows, and UI rendering across the stack",
      "Pytest-based validation cutting production defects by 35%",
    ],
  },
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="scroll-mt-30">
      <div className="flex flex-col items-center mt-4 mb-8 md:mb-12">
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Technical Highlights
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-3" />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {highlights.map((item, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="bg-[#181818] border border-purple-500/10 rounded-xl p-6 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-3">
              {item.title}
            </h3>
            <ul className="list-disc pl-4 space-y-1.5 text-[#ADB7BE] text-sm">
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;