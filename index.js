const express = require("express");

const server = express();

server.use(express.json());

server.use(numberOfRequests);

const newProjects = [];

let requestCounter = 0;

function numberOfRequests(request, response, next) {
  requestCounter += 1;

  console.log(`Number of Requests: ${requestCounter}`);

  return next();
}

function projectExistence(request, response, next) {
  const { id } = request.params;

  const checkProject = newProjects.find(project => project.id == id);

  if (!checkProject) {
    return response.status(400).json("Project not found!");
  }

  return next();
}

server.get("/project", (request, response) => {
  return response.json(newProjects);
});

server.get("/project/:id", projectExistence, (request, response) => {
  const { id } = request.params;

  const newProject = newProjects.find(project => project.id == id);

  return response.json(newProject);
});

server.post("/project", (request, response) => {
  const { id, title } = request.body;

  const newProject = {
    id,
    title,
    tasks: []
  };

  newProjects.push(newProject);

  return response.json("Project successfully created");
});

server.post("/project/:id/tasks", projectExistence, (request, response) => {
  const { id } = request.params;
  const { title } = request.body;

  const newProject = newProjects.find(project => project.id == id);

  newProject.tasks.push(title);

  return response.json("Task successfully created");
});

server.put("/project/:id", projectExistence, (request, response) => {
  const { id } = request.params;
  const { title } = request.body;

  const newProject = newProjects.find(project => project.id == id);

  newProject.title = title;

  return response.json("Project updated successfully");
});

server.put(
  "/project/:id/tasks/:index",
  projectExistence,
  (request, response) => {
    const { id } = request.params;
    const { index } = request.params;
    const { tasks } = request.body;

    const taskUpdate = newProjects.find(project => project.id == id);

    taskUpdate.tasks[index] = tasks;

    return response.json("Task updated successfully");
  }
);

server.delete("/project/:id", projectExistence, (request, response) => {
  const { id } = request.params;

  const newProject = newProjects.findIndex(project => project.id == id);

  newProjects.splice(newProject, 1);

  return response.json("Project deleted successfully");
});

server.listen(3333);
