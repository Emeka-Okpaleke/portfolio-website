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
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      )
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul>
          <li>Benson Idahosa University</li>
        </ul>
      )
    },
    {
      title: "Certification",
      id: "certification",
      content: (
        <ul>
          <li>Bachelor's Degree in Engineering</li>
        </ul>
      )
    }
  ];
  
  const AboutSection = () => {
    const [tab, setTab] = useState("skills"); // Default to 'skills' tab
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id); // Update the active tab's id
      });
    };
  
    return (
      <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
          {/* About Image */}
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="About Image"
          />
          

          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              corrupti iusto deleniti sunt rerum amet harum nesciunt iste modi
              dignissimos accusamus laudantium repellendus vel, doloremque
              deserunt porro voluptates ut quaerat veritatis eum pariatur!
            </p>
  
            {/* Tab Buttons */}
            <div className="flex flex-row mt-8 space-x-3">
              {TAB_DATA.map((tabItem) => (
                <TabButton
                  key={tabItem.id}
                  selectTab={() => handleTabChange(tabItem.id)} // Change the tab when clicked
                  active={tab === tabItem.id} // Highlight the active tab
                >
                  {tabItem.title}
                </TabButton>
              ))}
            </div>
  
            {/* Display corresponding tab content */}
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab)?.content || <p>No content available for this tab.</p>}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;