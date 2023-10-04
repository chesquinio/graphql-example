import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../../graphql/tasks";
import { useParams } from "react-router-dom";

function TaskForm() {
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ["getProject"],
  });
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({
      variables: {
        title: e.target.title.value,
        projectId: params.id,
      },
    });
    e.target.reset();
    e.target.title.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        className="bg-zinc-800 text-white w-full p-2 rounded-lg mb-2"
        placeholder="Write a task..."
      />
      <button className="bg-blue-500 px-3 py-2 mb-2 text-white rounded-full w-full">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
