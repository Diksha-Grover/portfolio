"use client";
import React, { useState, useTransition, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",
  "React",
  "Next.js",
  "Redux Toolkit",
  "RTK Query",
  "HTML5",
  "CSS3",
  "FastAPI",
  "Django",
  "Flask",
  "REST APIs",
  "Microservices",
  "Authentication",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "AWS",
  "Azure",
  "Docker",
  "CI/CD",
  "Git",
  "Pytest",
  "Jira",
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-2 mt-2">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-full text-sm text-[var(--chip-text)] hover:bg-purple-500/40 hover:border-purple-400 transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          Bachelor of Engineering (B.E.) in Computer Science — Prof Ram Meghe
          College of Engineering and Management, Maharashtra (2016 – 2020),
          Grade: 8.54 / 10
        </li>
      </ul>
    ),
  },
  {
    title: "Expertise",
    id: "expertise",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>Full-Stack Web Development (React, Next.js, FastAPI)</li>
        <li>REST API Design &amp; Microservices Architecture</li>
        <li>Database Design &amp; Query Optimization</li>
        <li>CI/CD Pipelines &amp; Cloud Deployment (AWS, Azure)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section id="about" className="text-[var(--text-primary)] scroll-mt-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image src="/images/about-image.png" width={500} height={500} alt="" className="rounded-2xl" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-4" />
          <p className="text-[var(--text-secondary)] text-base lg:text-lg">
            I am a Full Stack Developer with 5+ years of experience building
            scalable web applications and backend services across the stack
            using Python, JavaScript, TypeScript, React, and PostgreSQL. I
            specialize in designing REST APIs, responsive front-end interfaces,
            and cloud deployments on AWS and Azure&mdash;with strong expertise in
            performance optimization, CI/CD, and delivering end-to-end features
            across finance, healthcare, and logistics domains.
          </p>
          <div className="flex flex-row flex-wrap justify-start items-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("expertise")}
              active={tab === "expertise"}
            >
              Expertise
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;