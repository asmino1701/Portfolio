import React from "react";
import { projects } from "../data/projects/projects";
import ProjectCard from "../components/Cards/projectCard";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col justify-center items-center text-center py-20 px-6 md:px-16 transition-colors duration-500 ease-in-out bg-slate-900 text-slate-300 container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}