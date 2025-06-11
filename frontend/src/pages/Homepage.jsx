import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Welcome to <span className=" text-indigo-700 font-extrabold">Mini Asset Manager</span> 
        </h1>
        <p className="mt-4 text-gray-600">
          <span className="font-bold">Track, manage, and control</span> your assets in <span className="font-bold">real time</span> — all from one dashboard.
        </p>
        <div className="mt-16 flex justify-center gap-8">
          <Link
            to="/login"
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 bg-transparent rounded border-[1px] border-green-600 text-green-600"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-32 px-4 ">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          Key Features
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-100 rounded shadow">
            <h3 className="text-lg font-semibold">Asset Tracking</h3>
            <p className="text-sm text-gray-600">
              Keep track of all assets in your organization.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow">
            <h3 className="text-lg font-semibold">Department Assignment</h3>
            <p className="text-sm text-gray-600">
              Assign and manage assets per department.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow">
            <h3 className="text-lg font-semibold">Audit Logs</h3>
            <p className="text-sm text-gray-600">
              Track changes and movements for accountability.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow">
            <h3 className="text-lg font-semibold">Dashboard Overview</h3>
            <p className="text-sm text-gray-600">
              Visualize your data with summary stats.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Homepage;
