"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Years Experience",
    value: "5",
    postfix: "+",
  },
  {
    metric: "Projects Delivered",
    value: "30",
    postfix: "+",
  },
  {
    metric: "Monthly Users Served",
    value: "1",
    postfix: "M+",
  },
  {
    metric: "Cloud Uptime",
    value: "99",
    postfix: ".9%",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between"
      >
        {achievementsList.map((achievement, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-[var(--text-primary)] text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-[var(--text-primary)] text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[var(--text-secondary)] text-base">{achievement.metric}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AchievementsSection;
