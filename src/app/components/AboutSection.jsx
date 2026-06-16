"use client";
import React, { useState, useTransition, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  "Python",
  "SQL",
  "PostgreSQL",
  "Apache Spark",
  "Airflow",
  "Pandas",
  "NumPy",
  "FastAPI",
  "AWS (S3, Lambda, Glue, Athena, RDS)",
  "Azure (Data Factory, Synapse)",
  "ETL / ELT",
  "Data Modeling",
  "Data Warehousing",
  "Tableau",
  "Power BI",
  "REST APIs",
  "CI/CD",
  "DBeaver",
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
            className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-sm text-purple-300 hover:bg-purple-500/40 hover:border-purple-400 transition-all duration-200 cursor-default"
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
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>AWS Certified Cloud Practitioner (in progress)</li>
        <li>Advanced Python for Data Engineering</li>
        <li>SQL Performance Tuning Specialization</li>
        <li>Data Warehouse Design Best Practices</li>
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
    <section id="about" className="text-white scroll-mt-20" ref={ref}>
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
          <p className="text-[#ADB7BE] text-base lg:text-lg">
            I am a Data Engineer with 5 years of experience designing, building,
            and maintaining scalable data pipelines and analytics infrastructure
            using Python, SQL, PostgreSQL, and cloud platforms (AWS, Azure). I
            specialize in ETL/ELT development, data modeling, real-time data
            processing, and warehouse optimization—partnering with analytics,
            product, and backend teams to deliver reliable data solutions that
            drive business decisions.
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
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
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