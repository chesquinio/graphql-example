import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects";

function ProjectForm() {
  const [project, setProject] = useState({
    title: "",
    description: "",
  });
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
      "GetProjects",
    ],
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({
      variables: {
        name: project.name,
        description: project.description,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-2/5">
      {error && <p>{error.message}</p>}
      <input
        type="text"
        name="name"
        placeholder="Write a name..."
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-full shadow-lg p-3 block w-full mb-3"
      />
      <textarea
        name="description"
        rows="3"
        placeholder="Write a description..."
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-2xl shadow-lg p-3 block w-full mb-3"
      ></textarea>
      <button
        disabled={!project.name || !project.description || loading}
        className="bg-blue-500 px-4 py-2 rounded-full text-lg w-full mb-3 disabled:bg-zinc-400 transition-all"
      >
        Save
      </button>
    </form>
  );
}

export default ProjectForm;
