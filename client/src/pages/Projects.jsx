import React from "react";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

function Projects() {
  return (
    <div className="bg-zinc-900 rounded-lg shadow-md shadow-black p-8 h-3/5 w-3/5">
      <h1 className="text-2xl font-bold py-2 mb-4">Product Manager</h1>
      <div className="flex justify-between gap-x-1">
        <ProjectForm />
        <ProjectList />
      </div>
    </div>
  );
}

export default Projects;
