import React from "react";
import { FaUserPlus, FaEdit, FaTrash, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Frontend Developer",
    email: "jane@example.com",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Backend Developer",
    email: "michael@example.com",
    status: "Busy",
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "UI/UX Designer",
    email: "emily@example.com",
    status: "Offline",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "Busy":
      return "bg-yellow-100 text-yellow-700";
    case "Offline":
      return "bg-gray-200 text-gray-700";
    default:
      return "bg-blue-100 text-blue-700";
  }
};

const Team = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Team Members
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your project team members.
          </p>
        </div>

        <button className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition">
          <FaUserPlus />
          Add Member
        </button>
      </div>

      {/* Team Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
                {member.name.charAt(0)}
              </div>
            </div>

            {/* Details */}
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>

              <p className="text-gray-500">
                {member.role}
              </p>

              <div className="flex justify-center items-center gap-2 mt-3 text-gray-600 text-sm">
                <FaEnvelope />
                {member.email}
              </div>

              <span
                className={`inline-block mt-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  member.status
                )}`}
              >
                {member.status}
              </span>
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-5 mt-6">
              <button
                className="text-blue-600 hover:text-blue-800"
                title="Edit Member"
              >
                <FaEdit size={18} />
              </button>

              <button
                className="text-red-600 hover:text-red-800"
                title="Remove Member"
              >
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;