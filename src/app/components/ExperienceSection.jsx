"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="text-white scroll-mt-20 py-8" ref={ref}>
      <div className="flex flex-col items-center mt-4 mb-8 md:mb-12">
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Experience
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-3" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/60 to-pink-500/60 md:-translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            className="relative pl-12 md:pl-0 mb-10"
          >
            {/* dot */}
            <span className="absolute left-4 md:left-1/2 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 ring-4 ring-[#121212] md:-translate-x-1/2 z-10" />

            <div
              className={`md:w-1/2 ${
                index % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"
              }`}
            >
              <div className="bg-[#181818] border border-purple-500/10 rounded-xl p-6 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <span className="text-xs font-semibold text-pink-400 uppercase tracking-wide">
                  {exp.period}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{exp.role}</h3>
                <p className="text-purple-300 text-sm mb-3">{exp.company}</p>

                <ul className="list-disc pl-4 space-y-1.5 text-[#ADB7BE] text-sm">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <p className="text-white text-sm font-semibold mt-4 mb-1">
                  Key Achievements
                </p>
                <ul className="list-disc pl-4 space-y-1 text-green-400/90 text-sm">
                  {exp.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 bg-purple-500/15 border border-purple-500/30 rounded-full text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
