"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Hackathon Website",
    description: "A student-built website for visualizing and interacting with software construction algorithms like sorting and trees, designed for first-time learners.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/acm-ucr/hackathon-website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Pier-Point-Shipping-Inc",
    description: "An AI-powered class project designed to efficiently sort and balance a ship's cargo. The system processes weight data and optimizes load distribution using internal software, ensuring stability and accuracy in manifest management.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://lackline.github.io/Pier-Point-Shipping-Inc/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "R-Tools",
    description: "A comprehensive hackathon portal with check-in, team management, communication, and backend analytics for a seamless experience.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/acm-ucr/r-tools",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "8 Puzzle",
    description: "A Python-based AI project solving the 8-puzzle problem using search algorithms like BFS, DFS, and A*. Designed to explore heuristic optimization and problem-solving strategies in artificial intelligence.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Lackline/CS170_Lab1_8Puzzle",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "RPG Goat Game",
    description: "A C++ text-based RPG with branching narratives, choice-driven outcomes, and an inventory system. Built with OOP and SOLID principles for extensibility and maintainability.",
    image: "/images/projects/6.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Lackline/cs100_rpg_goat",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* 
<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
    <ProjectTag
      onClick={handleTagChange}
      name="All"
      isSelected={tag === "All"}
    />
    <ProjectTag
      onClick={handleTagChange}
      name="Web"
      isSelected={tag === "Web"}
    />
    <ProjectTag
      onClick={handleTagChange}
      name="Mobile"
      isSelected={tag === "Mobile"}
    />
</div> 
*/}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
