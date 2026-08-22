"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

// Counts up to `value` once the section scrolls into view.
const CountUp = ({ value, isInView, className }) => {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value, motionValue]);

  return <span className={className}>{display}</span>;
};

const impactMetrics = [
  {
    title: "API Latency",
    value: "40",
    unit: "%",
    description: "Reduction in response times via query and API optimization",
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Cloud Uptime",
    value: "99",
    unit: ".9%",
    description: "Sustained on Azure through proactive monitoring",
    color: "from-green-400 to-emerald-400",
  },
  {
    title: "Production Defects",
    value: "35",
    unit: "%",
    description: "Reduction with Pytest-based validation checks",
    color: "from-orange-400 to-red-400",
  },
  {
    title: "Release Cycle Time",
    value: "30",
    unit: "%",
    description: "Faster delivery through automated CI/CD pipelines",
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
                <div className="inline-flex items-center justify-center mb-4 leading-tight py-1">
                  <CountUp
                    value={parseInt(metric.value)}
                    isInView={isInView}
                    className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${metric.color}`}
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
