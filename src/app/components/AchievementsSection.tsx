"use client";

import React from "react";
import { FC } from "react";
import dynamic from "next/dynamic";

// Dynamic import for react-animated-numbers with `ssr: false`
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

// Define the type for an achievement item
type Achievement = {
  metric: string;
  value: string; // Keep as string to handle numbers with commas
  prefix?: string;
  postfix?: string;
};



// Achievement data with proper typing
const achievementsList: Achievement[] = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100000", // Use unformatted value to allow parsing
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          // Convert value to number for AnimatedNumbers
          const numericValue = parseInt(achievement.value.replace(/,/g, ""), 10);

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={numericValue}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_: number, i: number) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (i + 1),
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
