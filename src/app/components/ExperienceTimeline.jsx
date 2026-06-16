"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    role: "Consultant – Data Engineering",
    company: "Topsoe, Noida",
    period: "Oct 2025 – Present",
    points: [
      "Designed and built scalable ETL/ELT pipelines with Python and Apache Spark to ingest, transform, and load enterprise data across Clearview-Api-Services, Topsearch, and Self-Service-Tool.",
      "Optimized PostgreSQL queries and implemented data warehouse schemas for complex analytical workloads.",
      "Developed REST APIs for data access and built data validation frameworks with real-time monitoring.",
      "Supported cloud data infrastructure on Azure including storage optimization, cost management, and performance tuning.",
    ],
    achievements: [
      "Reduced pipeline execution time by 40% via query optimization and Spark parallelization",
      "Improved data accuracy from 94% to 99.8% with automated quality checks",
      "Cut storage costs by 25% through optimized warehouse schema design",
    ],
    stack: ["Python", "Apache Spark", "PostgreSQL", "REST APIs", "Azure Data Factory", "Pandas", "Airflow"],
  },
  {
    role: "Senior Engineering Analyst – Data Platform",
    company: "Qualtech Edge, Noida",
    period: "May 2024 – Mar 2025",
    points: [
      "Led data engineering initiatives and architecture decisions for analytics and SaaS data platforms.",
      "Built CRUD-based data APIs and ETL workflows with Python and FastAPI, processing 500K+ records daily.",
      "Optimized database performance through query tuning, indexing, and schema design—improving query times by 45%.",
      "Worked extensively with AWS (S3, Lambda, RDS, Glue) for scalable data processing and storage.",
    ],
    achievements: [
      "Architected platform handling 2TB+ monthly ingestion with 99.9% uptime",
      "Reduced manual validation efforts by 60% via automated reconciliation",
      "Led on-premise to AWS migration achieving 30% cost reduction",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "AWS", "Pandas", "Airflow", "DBeaver"],
  },
  {
    role: "Software Engineer – Data Integration",
    company: "Mtap Technologies, Gurugram",
    period: "Jan 2023 – May 2024",
    points: [
      "Migrated legacy data infrastructure to modern cloud-based analytics platforms using Python and SQL.",
      "Built REST APIs for data integration between upstream sources and downstream analytics systems.",
      "Designed dimensional data models and star schemas, implementing ETL pipelines for consolidation and enrichment.",
      "Participated in AWS cloud deployments for analytics infrastructure and data services.",
    ],
    achievements: [
      "Integrated 8+ heterogeneous data sources into a unified analytics platform",
      "Reduced data latency from 6 hours to 30 minutes via stream processing",
      "Documented data lineage for 200+ datasets",
    ],
    stack: ["Python", "SQL", "REST APIs", "AWS", "Pandas", "PostgreSQL", "Git"],
  },
  {
    role: "Junior Data Engineer / Backend Developer",
    company: "Crownstack Technologies, Remote",
    period: "Oct 2021 – Jan 2023",
    points: [
      "Developed and maintained data pipelines and backend services using Python and SQL.",
      "Implemented data validation, transformation logic, and error handling for ETL workflows.",
      "Assisted with AWS-based data infrastructure setup and backend data service deployments.",
    ],
    achievements: [
      "Developed 15+ ETL pipelines supporting various business domains",
      "Achieved 98% data accuracy through comprehensive validation frameworks",
      "Supported onboarding of 5+ new data sources to the analytics platform",
    ],
    stack: ["Python", "SQL", "AWS", "PostgreSQL", "Testing", "Git"],
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
    <section id="experience" className="text-white scroll-mt-20 py-8 md:py-16" ref={ref}>
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
                  className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-4 border-[#121212] cursor-pointer hover:scale-125 transition-transform"
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
                  className="group bg-[#181818] border border-purple-500/20 rounded-lg p-6 cursor-pointer hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  whileHover={{ y: -8 }}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {experience.role}
                      </h3>
                      <p className="text-purple-400 font-medium mt-1">{experience.company}</p>
                      <p className="text-[#ADB7BE] text-sm mt-2">{experience.period}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-purple-400" />
                    </motion.div>
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
                      <h4 className="font-semibold text-white mb-2 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {experience.points.map((point, i) => (
                          <li key={i} className="text-[#ADB7BE] text-sm flex gap-3">
                            <span className="text-purple-400 flex-shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-emerald-400 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="text-[#ADB7BE] text-sm flex gap-3">
                            <span className="text-emerald-400 flex-shrink-0">✓</span>
                            <span className="text-emerald-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs text-purple-300 hover:bg-purple-500/40 hover:border-purple-400 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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
