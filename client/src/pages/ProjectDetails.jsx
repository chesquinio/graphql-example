import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/projects";
import TasksList from "../components/tasks/TasksList";
import TaskForm from "../components/tasks/TaskForm";

function ProjectDetails() {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id,
    },
    skip: !params.id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <Link to={"/projects"}>
        <button className="bg-blue-500 px-3 py-2 mb-2 text-white rounded-full w-20">
          Back
        </button>
      </Link>
      <div className="bg-zinc-900 mb-2 p-10 flex justify-between rounded-lg">
        <div>
          <h1 className="text-2xl">{data.project.name}</h1>
          <p>{data.project.description}</p>
        </div>
      </div>
      <button className="bg-red-500 px-3 py-2 mb-4 w-full rounded-full">
        Delete
      </button>
      <TaskForm />
      <TasksList tasks={data.project.tasks} />
    </div>
  );
}

export default ProjectDetails;
