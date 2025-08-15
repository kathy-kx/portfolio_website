"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Spring Boot</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Express</li>
        <li>MySQL & MongoDB</li>
        <li>Git</li>
        <li>Linux</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Master of Engineering in Electrical and Computer Engineering,
          University of Ottawa, ON, Canada
        </li>
        <li>
          Bachelor of Engineering in Communication Engineering, Xidian
          University, Xi'an, China
        </li>
      </ul>
    ),
  },
  // {
  //     title: "Certifications",
  //     id: "certifications",
  //     content: (
  //         <ul className='list-disc pl-2'>
  //             <li>AWS Cloud Practitioner</li>
  //         </ul>
  //     ),
  // }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills"); // default tab is skills
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-text-middle">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-text-middle mb-4">About Me</h2>
          <div className="text-base lg:text-lg">
            <p className="mb-4">
              Hi, I'm Kathy Kexin Zhu, a software engineer and full-stack
              developer.
            </p>
            <p className="mb-4">
              I'm graduating in April 2026 with a Master's in Electrical &
              Computer Engineering (GPA 3.95/4.0) from the University of Ottawa.
              and I'm open to full-time opportunities as well
              as part-time internships.
            </p>
            <p className="mb-4">
              I build end-to-end products that are fast and reliable: 
              shaping REST APIs and data flows, integrating AI-powered features, 
              and polishing frontend performance so experiences are fast and reliable. 
              My core stack includes Java, Spring Boot, Redis, MongoDB, MySQL, Next.js, React, and Tailwind CSS.
            </p>
            {/* <p className="mb-4">
              I thrive on solving problems end to end, whether it's building
              scalable REST APIs, optimizing frontend performance, or
              integrating AI-powered features.
            </p> */}
            {/* <p className="mb-4">
              I'm comfortable across the stack, from Java, Spring Boot, and
              Redis to Next.js, React, and Tailwind CSS.
            </p> */}
            {/* <p className="mb-4">
              Beyond the code, I love collaborating with teams, documenting
              processes for smoother onboarding, and keeping quality high
              without slowing down delivery. I take pride in being highly
              responsible, and coding genuinely makes me happy. There's nothing
              more satisfying than seeing a solution come to life and knowing it
              works beautifully.
            </p> */}
            <p className="mb-4">Colleagues describe me as collaborative, responsible, and detail-oriented. I prioritize maintainable code and clear documentation to keep teams aligned. I’m a fast learner who adapts quickly to new challenges, communicates openly, and takes pride in delivering quality without slowing momentum.
            </p>
          </div>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
