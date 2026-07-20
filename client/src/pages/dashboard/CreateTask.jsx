import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    project: "",
    assignedTo: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(taskData);

    // TODO:
    // Dispatch Redux action or call API

    alert("Task Created Successfully!");

    navigate("/tasks");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Create New Task
        </h1>

        <p className="text-gray-500 mb-8">
          Fill in the details below to create a new task.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Task Title
            </label>

            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={taskData.description}
              onChange={handleChange}
              placeholder="Enter task description"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Project */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Project
            </label>

            <select
              name="project"
              value={taskData.project}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Project</option>
              <option value="Project Management Tool">
                Project Management Tool
              </option>
              <option value="E-Commerce Website">
                E-Commerce Website
              </option>
              <option value="Portfolio Website">
                Portfolio Website
              </option>
            </select>
          </div>

          {/* Assigned To */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Assign To
            </label>

            <input
              type="text"
              name="assignedTo"
              value={taskData.assignedTo}
              onChange={handleChange}
              placeholder="Enter team member name"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Priority & Status */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Priority
              </label>

              <select
                name="priority"
                value={taskData.priority}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Status
              </label>

              <select
                name="status"
                value={taskData.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Due Date
            </label>

            <input
              type="date"
              name="dueDate"
              value={taskData.dueDate}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
              Create Task
            </button>

            <button
              type="button"
              onClick={() => navigate("/tasks")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;