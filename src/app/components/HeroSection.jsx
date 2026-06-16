"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { currentTarget } = e;
    const { clientWidth, clientHeight } = currentTarget;
    const { clientX, clientY } = e;

    const x = (clientX - clientWidth / 2) / 50;
    const y = (clientY - clientHeight / 2) / 50;

    setMousePosition({ x, y });
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <motion.h1
            variants={itemVariants}
            className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold"
          >
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-400 hover:to-purple-600 transition-all duration-300">
              Hello, I&apos;m{" "}
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                "Diksha Grover",
                1000,
                "Data Engineer",
                1000,
                "Analytics Engineer",
                1000,
                "Cloud Data Specialist",
                1000,
                "ML Pipeline Architect",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            />
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl hover:text-white transition-colors duration-300"
          >
            Data Engineer with 5 years of experience designing scalable data
            pipelines and analytics infrastructure using Python, SQL, and cloud
            platforms (AWS, Azure). I turn raw, disparate data into reliable,
            production-grade systems that drive business decisions.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#contact" scroll={true}>
              <motion.button 
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </Link>
            <a href="/dikshaDataEngineer.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1 text-white rounded-full transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 cursor-pointer font-semibold transition-colors">
                  Download CV
                </span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="animate-float"
            style={{
              x: mousePosition.x * 10,
              y: mousePosition.y * 10,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          >
            <div className="animate-glow-pulse rounded-full p-1 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
              <div className="rounded-full bg-[#181818] w-[248px] h-[248px] lg:w-[398px] lg:h-[398px] relative overflow-hidden">
                <Image
                  src="/images/hero_image.png"
                  alt="hero image"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-transform duration-300"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDownIcon className="w-6 h-6 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
