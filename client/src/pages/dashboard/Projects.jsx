import React from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Project Management Tool",
    description: "A MERN stack project management application.",
    status: "In Progress",
    members: 6,
  },
  {
    id: 2,
    name: "E-Commerce Website",
    description: "Online shopping website built with MERN.",
    status: "Completed",
    members: 4,
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "Personal portfolio website.",
    status: "Pending",
    members: 2,
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

const Projects = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Projects
          </h1>
          <p className="text-gray-500">
            Manage all your projects in one place.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition">
          <FaPlus />
          New Project
        </button>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4">Project</th>
              <th className="text-left px-6 py-4">Description</th>
              <th className="text-center px-6 py-4">Members</th>
              <th className="text-center px-6 py-4">Status</th>
              <th className="text-center px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-5 font-semibold text-gray-800">
                  {project.name}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {project.description}
                </td>

                <td className="px-6 py-5 text-center">
                  {project.members}
                </td>

                <td className="px-6 py-5 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-3">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      title="View"
                    >
                      <FaEye />
                    </button>

                    <button
                      className="text-green-600 hover:text-green-800"
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

        {projects.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No projects found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;