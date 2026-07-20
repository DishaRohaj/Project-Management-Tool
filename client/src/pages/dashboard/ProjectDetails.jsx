import React from "react";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUsers,
  FaTasks,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const tasks = [
  {
    id: 1,
    title: "Design Dashboard UI",
    assignedTo: "John Doe",
    status: "Completed",
  },
  {
    id: 2,
    title: "Build Authentication",
    assignedTo: "Jane Smith",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Connect Backend API",
    assignedTo: "Mike Johnson",
    status: "Pending",
  },
];

const ProjectDetails = () => {
  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
      >
        <FaArrowLeft />
        Back to Projects
      </Link>

      {/* Project Header */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Project Management Tool
            </h1>

            <p className="text-gray-600 mt-3">
              A full-stack MERN application for managing projects,
              tasks, teams, and productivity.
            </p>

            <span className="inline-block mt-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
              In Progress
            </span>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <FaCalendarAlt className="mx-auto text-blue-600 text-2xl mb-2" />
              <p className="text-gray-500 text-sm">Deadline</p>
              <h3 className="font-semibold">
                30 Dec 2026
              </h3>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <FaUsers className="mx-auto text-green-600 text-2xl mb-2" />
              <p className="text-gray-500 text-sm">Members</p>
              <h3 className="font-semibold">6</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <FaTasks className="text-blue-600 text-3xl mb-3" />
          <h2 className="text-2xl font-bold">25</h2>
          <p className="text-gray-500">Total Tasks</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <FaCheckCircle className="text-green-600 text-3xl mb-3" />
          <h2 className="text-2xl font-bold">18</h2>
          <p className="text-gray-500">Completed</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <FaClock className="text-yellow-500 text-3xl mb-3" />
          <h2 className="text-2xl font-bold">7</h2>
          <p className="text-gray-500">Pending</p>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-5">
          Project Tasks
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Task</th>
                <th className="text-left p-4">Assigned To</th>
                <th className="text-center p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    {task.title}
                  </td>

                  <td className="p-4">
                    {task.assignedTo}
                  </td>

                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        task.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : task.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;