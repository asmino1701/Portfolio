import React from "react";
import {Anchor, GradientButton} from "../Buttons/Button";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-emerald-600 mt-2 text-xl font-bold">{project.title}</h3>
      <p className="text-gray-600 p-2 text-left">{project.description}</p>
      <Anchor text="See more" href={project.link} btnClass="relative inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"/>
    </div>
  );
}