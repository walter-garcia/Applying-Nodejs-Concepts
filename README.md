# Rocketseat Bootcamp

### Applying Nodejs Concepts

##### Create an application from scratch using `Express` to store projects and their tasks.


## Routes

GET /project - `http://localhost:3333/project` - Show all projects.

GET /project/:id - `http://localhost:3333/project/1` - Show a specific project.

POST /project - `http://localhost:3333/project` - Create a new project.

POST /project/:id/tasks - `http://localhost:3333/project/1/tasks` - Create a new task.

PUT /project/:id - `http://localhost:3333/project/1` - Update a specific project.

PUT /project/:id/tasks/:id - `http://localhost:3333/project/1/tasks/1` - Update a specific task.

DELETE /project/:id - `http://localhost:3333/project/1` - Delete a specific project.


### Examples

##### `POST /project`
```
[
  {
    "id": "1",
    "title": "First Project",
    "tasks": []
  }
]
```

##### `POST /project` + `POST /project/:id/tasks`
```
[
  {
    "id": "1",
    "title": "First Project",
    "tasks": [
      "First Task of first project"
    ]
  }
]
```


### Middlewares

###### Create middleware that will be used on all routes that receive the project ID in the URL parameters that check if the project with that ID exists. If none exists, return an error, otherwise allow the request to continue normally.

###### Create a global middleware called on all requests that prints out a count of how many requests have been made in the application so far.
