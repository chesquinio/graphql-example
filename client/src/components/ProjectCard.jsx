import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 w-full rounded-lg shadow-lg shadow-black p-4 mb-4 hover:bg-zonc-700 hover:cursor-pointer"
      onClick={() => navigate(`/projects/${project._id}`)}
    >
      <h2>{project.name}</h2>
      <h3>{project.description}</h3>
    </div>
  );
}

export default ProjectCard;
