"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  {
    title: "ETL Pipeline Architecture & Development",
    icon: "🔀",
    points: [
      "Scalable data pipelines using Python, Spark, and SQL for enterprise data integration across business units",
      "ETL/ELT workflows for multi-source ingestion, transformation, and loading with SLA compliance",
      "Incremental loads, change data capture (CDC), and fault tolerance mechanisms",
    ],
  },
  {
    title: "Data Warehousing & Optimization",
    icon: "🏛️",
    points: [
      "Optimized PostgreSQL warehouses for complex analytical and reporting workloads",
      "Dimensional models (Star & Snowflake Schema) for business analytics",
      "Indexing and query optimization improving performance by 40–50%",
    ],
  },
  {
    title: "Data Quality & Governance",
    icon: "✅",
    points: [
      "Automated validation frameworks improving accuracy from 94% to 99.8%",
      "Data profiling and monitoring for continuous quality assurance",
      "Governance policies, metadata management, and data lineage documentation",
    ],
  },
  {
    title: "Cloud Data Infrastructure",
    icon: "☁️",
    points: [
      "AWS & Azure infrastructure handling large-scale data volumes",
      "S3-based data lakes with partitioning and compression for cost optimization",
      "Serverless processing using AWS Lambda and Glue, with RDS HA/DR",
    ],
  },
  {
    title: "REST APIs for Data Access",
    icon: "🔌",
    points: [
      "Secure, performant REST APIs for analytics and reporting platforms",
      "API authentication, rate limiting, and structured logging",
      "GraphQL APIs for flexible querying by downstream tools",
    ],
  },
  {
    title: "Real-time & Batch Processing",
    icon: "⚡",
    points: [
      "Batch and real-time pipelines for BI and analytics workloads",
      "Stream processing reducing data latency from hours to minutes",
      "Optimized job scheduling and resource allocation for cost efficiency",
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