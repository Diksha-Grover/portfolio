"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Netflix Clone Website",
    description: "Built with React, features movie listings, routing, and a responsive UI design.",
    image: "/images/projects/1.png",
    link: "https://diksha-grover.github.io/NetflixClone/",
  },
  {
    id: 2,
    title: "Bankist Wesite",
    description: "Banking UI app with DOM manipulation, smooth scrolling, and interactive elements.",
    image: "/images/projects/2.png",
    link: "https://diksha-grover.github.io/bankist-javascript/",
  },
  {
    id: 3,
    title: "Stripe Submenus",
    description: "Dynamic submenus with React and Context API, inspired by Stripe’s navigation.",
    image: "/images/projects/3.png",
    link: "https://13-stripe-submenus-react.vercel.app/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "React-based food app with filtering, cart features, and clean responsive layout.",
    image: "/images/projects/4.png",
    link: "https://15-cocktail-react.vercel.app/",
  },
  {
    id: 5,
    title: "Mapty Wesite",
    description: "Workout tracker using Geolocation, Leaflet, and local storage for data handling.",
    image: "/images/projects/5.png",
    link: "https://diksha-grover.github.io/mapty-js/",
  },
  {
    id: 6,
    title: "E-commerce Application",
    description: "Product listing, cart, auth, and CRUD built with React and Firebase backend.",
    image: "/images/projects/6.png",
    link: "https://shopping-cart-sigma-two.vercel.app/",
  },
];
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initail="initial" animate={isInView ? "animate" : "initial"} transition={{duration: 0.3, delay: index * 0.4}}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              link={project.link}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;