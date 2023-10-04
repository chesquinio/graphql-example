import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolvers = {
  Query: {
    projects: async () => await Project.find(),
    project: async (_, { _id }) => await Project.findById(_id),
    tasks: async () => await Task.find(),
    task: async (_, { _id }) => await Task.findById(_id),
  },
  Mutation: {
    createProject: async (_, { name, description }) => {
      const project = new Project({
        name,
        description,
      });
      const projectSaved = await project.save();
      return projectSaved;
    },
    updateProject: async (_, args) => {
      const projectUpdated = await Project.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!projectUpdated) throw new Error(`Project not found`);
      return projectUpdated;
    },
    deleteProject: async (_, { _id }) => {
      const projectDeleted = await Project.findByIdAndDelete(_id);
      if (!projectDeleted) throw new Error("Project not found");

      await Task.deleteMany({ projectId: projectDeleted._id });

      return projectDeleted;
    },
    createTask: async (_, { title, projectId }) => {
      const projectFound = await Project.findById(projectId);
      if (!projectFound) throw new Error("Project not found");

      const task = new Task({
        title,
        projectId,
      });
      const taskSaved = await task.save();
      return taskSaved;
    },
    updateTask: async (_, args) => {
      const taskUpdated = await Task.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!taskUpdated) throw new Error(`Task not found`);
      return taskUpdated;
    },
    deleteTask: async (_, { _id }) => {
      const taskDeleted = await Task.findByIdAndDelete(_id);
      if (!taskDeleted) throw new Error("Task not found");
      return taskDeleted;
    },
  },
  Project: {
    tasks: async (parent) => {
      return await Task.find({ projectId: parent._id });
    },
  },
  Task: {
    project: async (parent) => {
      return await Project.findById(parent.projectId);
    },
  },
};
