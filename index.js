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

server.get("/project", (request, response) => {
  return response.json(newProjects);
});

server.get("/project/:index", (request, response) => {
  const { index } = request.params;

  return response.json(newProjects[index]);
});

server.post("/project", (request, response) => {
  const { id, title } = request.body;

  const newProject = {
    id,
    title,
    tasks: []
  };

  newProjects.push(newProject);

  return response.send("Project created successfully");
});

server.post("/project/:id/tasks", (request, response) => {
  const { id } = request.params;
  const { title } = request.body;

  const newProject = newProjects.find(project => project.id == id);

  newProject.tasks.push(title);

  return response.send("Task created successfully");
});

server.put("/project/:id", (request, response) => {
  const { id } = request.params;
  const { title } = request.body;

  const newProject = newProjects.find(project => project.id == id);

  newProject.title = title;

  return response.send("User updated successfully");
});

server.delete("/project/:id", (request, response) => {
  const { id } = request.params;

  const newProject = newProjects.findIndex(project => project.id == id);

  newProjects.splice(newProject, 1);

  return response.send("User deleted successfully");
});

server.listen(3333);
