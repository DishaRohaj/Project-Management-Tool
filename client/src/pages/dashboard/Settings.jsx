import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    darkMode: false,
    emailNotifications: true,
    pushNotifications: true,
    language: "English",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(settings);

    // TODO:
    // Save settings using Redux/API

    alert("Settings saved successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your account preferences and application settings.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 space-y-8"
      >
        {/* Account */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Account Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={settings.fullName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Notifications
          </h2>

          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">
                Email Notifications
              </span>

              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleChange}
                className="h-5 w-5"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">
                Push Notifications
              </span>

              <input
                type="checkbox"
                name="pushNotifications"
                checked={settings.pushNotifications}
                onChange={handleChange}
                className="h-5 w-5"
              />
            </label>
          </div>
        </div>

        {/* Appearance */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Appearance
          </h2>

          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">
                Enable Dark Mode
              </span>

              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
                className="h-5 w-5"
              />
            </label>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Language
              </label>

              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
                className="w-full md:w-72 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Security
          </h2>

          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition"
          >
            Change Password
          </button>
        </div>

        {/* Save */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;