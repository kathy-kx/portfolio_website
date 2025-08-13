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
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I'm Kathy Kexin Zhu — a Fullstack Developer who loves turning
            ideas into fast, functional, and delightful products. I'm graduating
            in April 2026 with a Master's in Electrical & Computer Engineering
            (GPA 3.95/4.0) from the University of Ottawa, and I'm currently
            seeking full-time opportunities as well as internships before
            graduation. I thrive on solving problems end to end — whether it's
            building scalable REST APIs, optimizing frontend performance, or
            integrating AI-powered features. I'm comfortable across the stack,
            from Java, Spring Boot, and Redis to Next.js, React, and Tailwind
            CSS. Beyond the code, I love collaborating with teams, documenting
            processes for smoother onboarding, and keeping quality high without
            slowing down delivery. I take pride in being highly responsible, and
            coding genuinely makes me happy — there's nothing more satisfying
            than seeing a solution come to life and knowing it works
            beautifully.
          </p>
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
