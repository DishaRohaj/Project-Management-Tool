import React from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";

const tasks = [
  {
    id: 1,
    title: "Design Dashboard UI",
    project: "Project Management Tool",
    assignedTo: "John Doe",
    priority: "High",
    status: "Completed",
  },
  {
    id: 2,
    title: "Build Login API",
    project: "Project Management Tool",
    assignedTo: "Jane Smith",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Create Landing Page",
    project: "Portfolio Website",
    assignedTo: "Alex Brown",
    priority: "Low",
    status: "Pending",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";
    case "In Progress":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-yellow-100 text-yellow-700";
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-700";
    case "Medium":
      return "bg-orange-100 text-orange-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const Tasks = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Tasks
          </h1>

          <p className="text-gray-500">
            Manage and track all project tasks.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition">
          <FaPlus />
          Create Task
        </button>
      </div>

      {/* Task Table */}
      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4">Task</th>
              <th className="text-left px-6 py-4">Project</th>
              <th className="text-left px-6 py-4">Assigned To</th>
              <th className="text-center px-6 py-4">Priority</th>
              <th className="text-center px-6 py-4">Status</th>
              <th className="text-center px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-5 font-medium text-gray-800">
                  {task.title}
                </td>

                <td className="px-6 py-5">
                  {task.project}
                </td>

                <td className="px-6 py-5">
                  {task.assignedTo}
                </td>

                <td className="px-6 py-5 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                </td>

                <td className="px-6 py-5 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-4">
                    <button
                      className="text-green-600 hover:text-green-800"
                      title="Mark Completed"
                    >
                      <FaCheckCircle />
                    </button>

                    <button
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {tasks.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No tasks available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;