import React from "react";
import {
  FaProjectDiagram,
  FaTasks,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Total Projects",
    value: 12,
    icon: <FaProjectDiagram className="text-3xl text-blue-600" />,
    color: "bg-blue-100",
  },
  {
    id: 2,
    title: "Total Tasks",
    value: 86,
    icon: <FaTasks className="text-3xl text-green-600" />,
    color: "bg-green-100",
  },
  {
    id: 3,
    title: "Team Members",
    value: 15,
    icon: <FaUsers className="text-3xl text-purple-600" />,
    color: "bg-purple-100",
  },
  {
    id: 4,
    title: "Completed Tasks",
    value: 64,
    icon: <FaCheckCircle className="text-3xl text-orange-600" />,
    color: "bg-orange-100",
  },
];

const recentProjects = [
  {
    id: 1,
    name: "Project Management Tool",
    status: "In Progress",
    progress: 75,
  },
  {
    id: 2,
    name: "E-Commerce Website",
    status: "Completed",
    progress: 100,
  },
  {
    id: 3,
    name: "Portfolio Website",
    status: "Pending",
    progress: 30,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back! Here's an overview of your projects.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div className={`${item.color} p-4 rounded-full`}>
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Projects */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-5">
          Recent Projects
        </h2>

        <div className="space-y-6">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="border-b last:border-none pb-5"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  {project.name}
                </h3>

                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : project.status === "In Progress"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="mt-3 w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{
                    width: `${project.progress}%`,
                  }}
                ></div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                {project.progress}% Completed
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-4">
          <li className="text-gray-600">
            ✅ New project <strong>"Project Management Tool"</strong> created.
          </li>

          <li className="text-gray-600">
            📋 Task <strong>"Design Dashboard UI"</strong> marked as completed.
          </li>

          <li className="text-gray-600">
            👥 New member <strong>"John Doe"</strong> joined the team.
          </li>

          <li className="text-gray-600">
            🚀 Project <strong>"E-Commerce Website"</strong> successfully completed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;