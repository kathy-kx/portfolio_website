"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTab from "./ProjectTab";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "A personal portfolio website built with React and Next.js to showcase my projects and skills.",
    imgUrl: "/images/projects/1.png",
    tag: ["All", "Web Development", "React"],
    gitUrl: "https://github.com/kathy-kx/portfolio_website",
    previewUrl: "https://kathyzhu.com",
  },
  {
    id: 2,
    title: "Food Delivery App",
    description:
      "A food delivery application built with Java, SpringBoot, MySQL. It covers user ordering, restaurant management, and order processing.",
    imgUrl: "/images/projects/1.png",
    tag: ["All", "Backend", "Java", "SpringBoot"],
    gitUrl: "https://github.com/kathy-kx/timing-food-delivery",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Real Estate Platform",
    description:
      "A real estate platform built with Next.js, Node.js and MongoDB, featuring user authentication and property display.",
    imgUrl: "/images/projects/1.png",
    tag: [
      "All",
      "Web Development",
      "Backend",
      "Node.js",
      "Next.js",
      "MongoDB",
      "Full Stack",
      "Authentication",
      "API Integration",
    ],
    gitUrl: "https://github.com/kathy-kx/real-estate-demo",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Feedback System",
    description:
      "A feedback system built with MERN, allowing users to submit and manage feedback.",
    imgUrl: "/images/projects/1.png",
    tag: ["All", "Web Development", "React", "Node.js", "Redux", "Full Stack"],
    gitUrl: "https://github.com/kathy-kx/feedback_system",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "CO Detection",
    description:
      "A CO detection system built with C++ and Arduino, designed to monitor and detect carbon monoxide levels in residential areas.",
    imgUrl: "/images/projects/1.png",
    tag: ["All", "C++", "Arduino", "IoT"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-text-middle mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-text-middle flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTab
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTab
          onClick={() => handleTagChange("Web Development")}
          name="Web Development"
          isSelected={tag === "Web Development"}
        />
        <ProjectTab
          onClick={() => handleTagChange("Backend")}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard key={project.id} {...project} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
