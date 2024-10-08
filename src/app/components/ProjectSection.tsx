"use client";
import React from "react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "A responsive React website showcasing my portfolio and projects.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 2,
    title: "Gatsby Blog",
    description: "A Gatsby blog showcasing my latest blog posts and articles.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 3,
    title: "WordPress Theme",
    description:
      "A WordPress theme showcasing my latest blog posts and articles.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  }
  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2>My Projects</h2>
      <div>
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
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
