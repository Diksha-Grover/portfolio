"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const impactMetrics = [
  {
    title: "Pipeline Optimization",
    value: "40",
    unit: "%",
    description: "Reduced execution time via Spark parallelization",
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Data Accuracy",
    value: "99",
    unit: ".8%",
    description: "Improvement with automated quality checks",
    color: "from-green-400 to-emerald-400",
  },
  {
    title: "Cost Reduction",
    value: "25",
    unit: "%",
    description: "Storage costs via optimized warehouse schema",
    color: "from-orange-400 to-red-400",
  },
  {
    title: "AWS Migration Savings",
    value: "30",
    unit: "%",
    description: "Cost reduction on cloud infrastructure",
    color: "from-purple-400 to-pink-400",
  },
];

const ImpactMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const metricVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-12 px-4 xl:gap-16 sm:py-16 xl:px-16"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
          Impact & Results
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactMetrics.map((metric, index) => (
          <motion.div
            key={index}
            variants={metricVariants}
            className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/50 overflow-hidden transition-all duration-300 cursor-default"
          >
            {/* Animated background glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="text-center">
                <div className="inline-flex items-baseline justify-center mb-4">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(metric.value)}
                    locale="en-US"
                    className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${metric.color}`}
                    configs={(_, index) => ({
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    })}
                  />
                  <span className={`text-2xl ml-1 font-bold bg-clip-text text-transparent bg-gradient-to-r ${metric.color}`}>
                    {metric.unit}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {metric.title}
                </h3>
                <p className="text-[#ADB7BE] text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${metric.color} rounded-full mt-4 w-0 group-hover:w-full transition-all duration-500`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImpactMetrics;
