"use client";
import React, { useState } from "react";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, link, github, technologies = [] }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className="group/card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/30"
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="group rounded-t-xl h-32 md:h-55 bg-center relative overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {/* Overlay with enhanced interactions */}
        <motion.div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center gap-6">
          {/* Code/GitHub Link */}
          {github && (
            <motion.div
              initial={{ scale: 0 }}
              animate={isHovering ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white hover:bg-white/10 group/link transition-all duration-300"
                title="View on GitHub"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors" />
              </Link>
            </motion.div>
          )}

          {/* Live Demo Link */}
          {link && (
            <motion.div
              initial={{ scale: 0 }}
              animate={isHovering ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white hover:bg-white/10 group/link transition-all duration-300"
                title="View Live Project"
              >
                <ArrowTopRightOnSquareIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white border-t border-purple-500/10 transition-all duration-300">
        <h5 className="font-lg font-semibold mb-2 group-hover/card:text-purple-300 transition-colors duration-200">
          {title}
        </h5>
        <p className="text-[#ADB7BE] text-sm mb-3">{description}</p>

        {/* Technology Tags */}
        {technologies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isHovering ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs text-purple-300 hover:bg-purple-500/40 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2 py-1 text-xs text-[#ADB7BE]">
                +{technologies.length - 3} more
              </span>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;