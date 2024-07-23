import React from "react";
import TaskItem from "../TaskItem";
import "./index.css";

const tasks = [
  {
    id: 1,
    name: "Task 1",
    description: "Description for Task 1",
    assignedTime: "2 hours",
  },
  {
    id: 2,
    name: "Task 2",
    description: "Description for Task 2",
    assignedTime: "3 hours",
  },
  {
    id: 3,
    name: "Task 3",
    description: "Description for Task 3",
    assignedTime: "1 hour",
  },
];

const Dashboard = () => {
  return (
    <div className="App">
      <div className="dashboard">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
