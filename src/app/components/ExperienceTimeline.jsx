"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    role: "Consultant – Full Stack Developer",
    company: "Topsoe, Noida",
    period: "Oct 2025 – Present",
    summary:
      "Backend APIs and cloud services powering Topsoe's internal web platforms.",
    points: [
      "Built Python REST APIs and backend services powering internal web platforms (Topsearch, Clearview), integrating with front-end reporting interfaces.",
      "Optimized PostgreSQL queries and API response times, reducing latency by 40% and improving dashboard performance by 45%.",
      "Automated build, test, and deployment through CI/CD pipelines, cutting release cycle time by 30%.",
      "Deployed and monitored cloud-hosted services on Azure, sustaining 99.9% uptime through proactive troubleshooting and performance tuning.",
      "Led peer code reviews and defined documentation and coding standards, mentoring engineers on modular design and secure practices.",
    ],
    achievements: [
      "Reduced API latency by 40% and improved dashboard performance by 45%",
      "Cut release cycle time by 30% through automated CI/CD pipelines",
      "Sustained 99.9% uptime on Azure cloud-hosted services",
    ],
    stack: ["Python", "FastAPI", "TypeScript", "React", "REST APIs", "PostgreSQL", "CI/CD", "Azure", "Docker", "Git"],
  },
  {
    role: "Sr. Engineering Analyst – Full Stack Developer",
    company: "Qualtech, Noida",
    period: "May 2024 – Mar 2025",
    summary:
      "Full-stack lending platform serving 1M+ monthly users at MyMoneyMantra.",
    points: [
      "Developed FastAPI backend services and REST API integrations supporting MyMoneyMantra loan discovery, eligibility checks, and partner journeys across 1M+ monthly users.",
      "Built responsive front-end workflows and dashboards surfacing lending data across customer-facing journeys, reducing manual handoffs by 60%.",
      "Implemented caching tiers, partitioning, and archival strategies that cut report runtimes by 40% without impacting freshness.",
      "Strengthened reliability with Pytest-based validation checks, reducing production defects by 35%.",
      "Owned end-to-end feature delivery and drove Agile sprint execution, mentoring 3 junior engineers through code reviews.",
    ],
    achievements: [
      "Supported loan journeys across 1M+ monthly users",
      "Reduced manual handoffs by 60% and report runtimes by 40%",
      "Cut production defects by 35% with Pytest validation checks",
    ],
    stack: ["Python", "FastAPI", "React", "REST APIs", "SQL", "PostgreSQL", "Pytest", "AWS", "Git"],
  },
  {
    role: "Software Engineer – Full Stack Developer",
    company: "MTAP Technologies, Gurugram",
    period: "Jan 2023 – May 2024",
    summary:
      "End-to-end SaaS features for Autologix fleet booking and dispatch.",
    points: [
      "Built end-to-end features for Autologix SaaS booking, fleet operations, dispatching, and tracking using Python, React, and PostgreSQL for 500+ daily transactions.",
      "Developed responsive front-end interfaces in JavaScript/React and modular backend services connected through REST APIs.",
      "Designed normalized database schemas and API integrations that unified operations modules, improving reporting turnaround by 30%.",
      "Containerized services with Docker and wired CI/CD pipelines into AWS, reducing deployment errors by 25%.",
      "Partnered with operations and QA teams across Agile sprints to ship dispatch and tracking features with reliable, on-time releases.",
    ],
    achievements: [
      "Delivered features handling 500+ daily transactions",
      "Improved reporting turnaround by 30% with unified operations modules",
      "Reduced deployment errors by 25% via Docker and CI/CD on AWS",
    ],
    stack: ["Python", "JavaScript", "React", "REST APIs", "PostgreSQL", "Docker", "AWS", "Git"],
  },
  {
    role: "Software Engineer – Full Stack Developer",
    company: "Crownstack, Remote",
    period: "Oct 2021 – Jan 2023",
    summary:
      "Full-stack healthcare product features delivered across multiple teams.",
    points: [
      "Delivered full-stack features using Python, JavaScript, React, and SQL for healthcare product engineering and digital transformation initiatives.",
      "Built reusable front-end components and backend modules with database integrations across MySQL and NoSQL stores, supporting 4+ product teams.",
      "Optimized queries, API flows, and UI rendering, reducing average response and load times by 30%.",
      "Hardened authentication flows and documented deployment runbooks, cutting incident resolution time by 20%.",
      "Collaborated with cross-functional teams to translate healthcare requirements into reliable, well-documented full-stack solutions.",
    ],
    achievements: [
      "Supported 4+ product teams with reusable components and backend modules",
      "Reduced average response and load times by 30%",
      "Cut incident resolution time by 20% with hardened auth and runbooks",
    ],
    stack: ["Python", "JavaScript", "React", "SQL", "MySQL", "Git", "AWS"],
  },
];

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState(0);

  const timelineVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="text-[var(--text-primary)] scroll-mt-20 py-8 md:py-16" ref={ref}>
      <div className="flex flex-col items-center mt-4 mb-12">
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Experience
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-3" />
      </div>

      <motion.div
        className="relative"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={timelineVariants}
      >
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-30" />

        <div className="space-y-8 md:space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4 md:gap-8`}
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-4 border-[var(--bg-primary)] cursor-pointer hover:scale-125 transition-transform"
                  whileHover={{ scale: 1.3 }}
                  onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                />
                {index < experiences.length - 1 && (
                  <div className="hidden md:block w-1 h-24 bg-gradient-to-b from-purple-500/50 to-transparent mt-2" />
                )}
              </div>

              {/* Experience Card */}
              <motion.div
                className="flex-1 md:flex-[0.45]"
                initial={false}
              >
                <motion.div
                  onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                  className="group bg-[var(--bg-secondary)] border border-purple-500/20 rounded-lg p-6 cursor-pointer hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  whileHover={{ y: -8 }}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-purple-300 transition-colors">
                        {experience.role}
                      </h3>
                      <p className="text-purple-400 font-medium mt-1">{experience.company}</p>
                      <p className="text-[var(--text-secondary)] text-sm mt-2">{experience.period}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-purple-400" />
                    </motion.div>
                  </div>

                  {/* Always-visible summary + tech chips */}
                  <p className="text-[var(--text-secondary)] text-sm mt-3">
                    {experience.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {experience.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-full text-xs text-[var(--chip-text)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand hint */}
                  <div className="flex items-center gap-1 mt-3 text-xs font-medium text-purple-400/80 group-hover:text-purple-300 transition-colors">
                    <span>
                      {expandedIndex === index ? "Hide details" : "View details"}
                    </span>
                  </div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedIndex === index ? "auto" : 0,
                      opacity: expandedIndex === index ? 1 : 0,
                      marginTop: expandedIndex === index ? 16 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {/* Points */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {experience.points.map((point, i) => (
                          <li key={i} className="text-[var(--text-secondary)] text-sm flex gap-3">
                            <span className="text-purple-400 flex-shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-emerald-400 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="text-[var(--text-secondary)] text-sm flex gap-3">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span className="text-emerald-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Spacer for alternate layout */}
              <div className="hidden md:block flex-[0.05]" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceTimeline;
