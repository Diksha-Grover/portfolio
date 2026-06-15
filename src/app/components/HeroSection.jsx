"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const HeroSection = () => {
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
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                "Diksha Grover",
                1000,
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"
          >
            Driven by purpose and fueled by passion, I write code that speaks
            both logic and design—creating seamless, impactful interfaces that
            connect with users.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="#contact" scroll={true}>
              <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full mr-4 cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-200">
                Hire Me
              </button>
            </Link>
            <a href="/dikshaFrontend.pdf" target="_blank" rel="noopener noreferrer">
              <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1 text-white rounded-full hover:scale-105 transition-all duration-200">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 cursor-pointer">
                  Download CV
                </span>
              </button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="animate-float">
            <div className="animate-glow-pulse rounded-full p-1 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
              <div className="rounded-full bg-[#181818] w-[248px] h-[248px] lg:w-[398px] lg:h-[398px] relative overflow-hidden">
                <Image
                  src="/images/hero_image.png"
                  alt="hero image"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
