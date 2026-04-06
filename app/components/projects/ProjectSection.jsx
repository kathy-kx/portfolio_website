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
    imgUrl: "/images/projects/portfolio.png",
    tag: ["All", "Web", "React"],
    gitUrl: "https://github.com/kathy-kx/portfolio_website",
    previewUrl: "https://kathyzhu.com",
  },
  {
    id: 2,
    title: "Real Estate Demo",
    description:
      "A real estate demo built with Next.js, Node.js and MongoDB, featuring property display.",
    imgUrl: "/images/projects/property-info.png",
    tag: [
      "All",
      "Web",
      "Backend",
      "Node.js",
      "Next.js",
      "MongoDB",
      "Full Stack",
      "Authentication",
      "API Integration",
    ],
    gitUrl: "/", // private repository: "https://github.com/kathy-kx/real-estate-demo"
    previewUrl: "https://realestate.kathyzhu.com",
  },
  {
    id: 3,
    title: "Spring Cloud Microservices System",
    description:
      "A microservices backend system built with Java, Spring Cloud and Spring Security, demonstrating service discovery, load balancing, API gatewayand inter-service communication.",
    imgUrl: "/images/projects/default.png",
    tag: ["All", "Backend", "Java", "SpringBoot", "Authentication"],
    gitUrl: "https://github.com/kathy-kx/photo-app-microservices",
    previewUrl: "/",
  },

  {
    id: 4,
    title: "Food Delivery App",
    description:
      "A food delivery application built with Java, SpringBoot, MySQL. It covers user ordering, restaurant management, and order processing.",
    imgUrl: "/images/projects/food-delivery.png",
    tag: ["All", "Backend", "Java", "SpringBoot"],
    gitUrl: "https://github.com/kathy-kx/timing-food-delivery",
    previewUrl: "/",
  },

  {
    id: 5,
    title: "LLM-powered Conversational Book Recommendation System",
    description:
      "A conversational AI recommender system leveraging LLMs, RAG pipelines, and ML models to provide personalized, context-aware recommendations.",
    imgUrl: "/images/projects/chatbot.jpg",
    tag: ["All", "AI Systems", "Python", "RAG", "LLM", "Machine Learning"],
    gitUrl:
      "https://github.com/kathy-kx/chatbot-based-book-recommendation-system",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "CoSplit - Your Smart Receipt Splitter",
    description:
      "An AI-powered app that turns messy receipts into structured data and simplifies group expense splitting. Built with TypeScript and Gemini LLM.",
    imgUrl: "/images/projects/cosplit.png",
    tag: ["All", "TypeScript", "AI", "Backend"],
    gitUrl: "https://github.com/cosplit-now",
    previewUrl: "https://cosplit.xinqi.mu/dashboard",
  },
  {
    id: 7,
    title: "CO Detection",
    description:
      "A CO detection system built with C++ and Arduino, designed to monitor and detect carbon monoxide levels in residential areas.",
    imgUrl: "/images/projects/carbon-monoxide.png",
    tag: ["All", "C++", "Arduino", "IoT"],
    gitUrl:
      "https://www.tinkercad.com/things/jBcYAkMwLf1-arduino-based-carbon-monoxide-fire-alarm-system?sharecode=NoU8h0IMsN51NOtnq0qv0HPiAOC5lMd7N-hPaelQyP8",
    previewUrl:
      "https://www.tinkercad.com/things/jBcYAkMwLf1-arduino-based-carbon-monoxide-fire-alarm-system?sharecode=NoU8h0IMsN51NOtnq0qv0HPiAOC5lMd7N-hPaelQyP8",
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-text-primary mt-4 mb-8 md:mb-2">
        My Projects
      </h2>
      <div className="text-text-primary flex flex-row justify-center items-center gap-2 py-8">
        <ProjectTab
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTab
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTab
          onClick={() => handleTagChange("Backend")}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTab
          onClick={() => handleTagChange("Java")}
          name="Java"
          isSelected={tag === "Java"}
        />
        <ProjectTab
          onClick={() => handleTagChange("AI Systems")}
          name="AI Systems"
          isSelected={tag === "AI Systems"}
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
