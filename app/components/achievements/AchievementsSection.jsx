"use client";
import dynamic from "next/dynamic";
import React from "react";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false },
);

const achievementsList = [
  {
    metric: "Projects Completed",
    value: "10",
    postfix: "+",
  },
  // {
  //     prefix: "~",
  //     metric: "Users",
  //     value: "100000",
  // },
  {
    metric: "Internships Completed",
    value: "2",
  },
  {
    metric: "GPA",
    value: "4.0",
  },
  {
    metric: "Cloud Certification",
    value: "1",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-8 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-border hover:border-border-hover border rounded-md py-6 px-4 md:py-8 md:px-16 grid grid-cols-2 gap-y-6 md:flex md:flex-row md:items-center md:justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <h2 className="text-text-primary text-3xl md:text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  useThousandsSeparator={true}
                  includeComma={true}
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-text-primary text-3xl md:text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                      delay: index * 100,
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-text-secondary text-sm md:text-base py-2">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
