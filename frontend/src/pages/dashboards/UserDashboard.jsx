import React, { useState } from "react";

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar (mobile + desktop) */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-72 bg-white shadow-md p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:shadow`}
      >
        <div>
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-3xl font-bold">
              <span>👤</span>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-gray-800">
              Lovelead
            </h2>
            <button className="text-blue-500 text-sm mt-1 hover:underline">
              Add phone number
            </button>
          </div>

          {/* Menu */}
          <nav className="space-y-3">
           
            <button className="flex items-center space-x-3 w-full text-left p-2 rounded-md bg-gray-100 hover:bg-green-50">
              <span>📋</span>
              <span className="text-gray-700 font-medium">My orders</span>
            </button>

            <button className="flex items-center space-x-3 w-full text-left p-2 rounded-md bg-gray-100 hover:bg-green-50">
              <span>💬</span>
              <span className="text-gray-700 font-medium">Feedback</span>
            </button>

            <button className="flex items-center space-x-3 w-full text-left p-2 rounded-md bg-gray-100 hover:bg-green-50">
              <span>❓</span>
              <span className="text-gray-700 font-medium">
                Frequently 
              </span>
            </button>
          </nav>
        </div>

        {/* Settings */}
        <div className="flex items-center justify-between mt-8 border-t pt-4">
          <span className="text-sm text-gray-500">Settings</span>
          <span className="text-lg">⚙️</span>
        </div>
      </aside>

      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar for Mobile */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          <div className="w-6" /> {/* Spacer */}
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-10">
        
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
