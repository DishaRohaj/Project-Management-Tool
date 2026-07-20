import React, { useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    location: "New Delhi, India",
    role: "Project Manager",
    bio: "Passionate MERN Stack Developer who enjoys building scalable web applications and leading project teams.",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);

    // TODO:
    // Update profile using Redux/API

    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <FaUserCircle className="text-8xl text-blue-600" />

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {user.name}
            </h1>

            <p className="text-gray-500">{user.role}</p>

            <div className="mt-4 space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>{user.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone />
                <span>{user.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>{user.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaBriefcase />
                <span>{user.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Edit Profile
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={user.location}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-gray-700">
              Role
            </label>

            <input
              type="text"
              name="role"
              value={user.role}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-gray-700">
              Bio
            </label>

            <textarea
              rows="5"
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Save Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;