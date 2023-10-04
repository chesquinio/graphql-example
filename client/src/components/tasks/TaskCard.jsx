import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../../graphql/tasks";

function TaskCard({ task }) {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["getProject"],
  });
  return (
    <div className="bg-zinc-900 rounded-lg px-5 py-3 mb-2 flex justify-between">
      <p>{task.title}</p>
      <button
        onClick={() =>
          deleteTask({
            variables: { id: task._id },
          })
        }
        className="bg-red-500 py-1 px-3 rounded-full"
      >
        X
      </button>
    </div>
  );
}

export default TaskCard;
