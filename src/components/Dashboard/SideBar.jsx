"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
  TbReportSearch,
} from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

function SideBar({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-gray-50">
        <aside
          className={`${
            isSidebarOpen ? "w-64" : "w-20"
          } pt-4 fixed left-0 top-0 h-full bg-white flex flex-col justify-between transition-all duration-300 ease-in-out overflow-y-auto border-r border-gray-200 shadow-sm`}
        >
          <div>
            <div
              className={`mb-8 flex ${
                isSidebarOpen ? "justify-end" : "justify-center"
              }`}
            >
              <button
                onClick={toggleSidebar}
                aria-label="Toggle Sidebar"
                title="Toggle Sidebar"
                className={`hover:bg-blue-500 text-gray-600 hover:text-white p-2 rounded-lg transition-colors duration-200 ${
                  isSidebarOpen ? "mr-4" : ""
                }`}
              >
                {isSidebarOpen ? (
                  <TbLayoutSidebarLeftCollapse size={22} />
                ) : (
                  <TbLayoutSidebarRightCollapse size={22} />
                )}
              </button>
            </div>

            <nav>
              <ul className="space-y-4 flex-col pb-3 px-3">
                <li
                  className={`group flex items-center ${
                    isSidebarOpen ? "px-4" : "px-3"
                  } py-3 text-sm text-gray-600 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer transition-colors duration-200 ${
                    isActive("/dashboard") ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  <Link to="/dashboard">
                    <div
                      className={`flex items-center pl-1 ${
                        isSidebarOpen ? "gap-3" : ""
                      }`}
                    >
                      <MdOutlineDashboard size={22} />
                      {isSidebarOpen && (
                        <span className="font-medium">Overview</span>
                      )}
                    </div>
                  </Link>
                </li>

                <li className={`group ${isSidebarOpen ? "px-0" : "px-0"}`}>
                  <Link to="/tickets">
                    <div
                      className={`flex items-center justify-between py-3 px-2 pl-3 text-sm text-gray-600 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer transition-colors duration-200 ${
                        location.pathname.includes("/tickets")
                          ? " bg-blue-600 text-white"
                          : ""
                      }`}
                    >
                      <div
                        className={`flex items-center pl-1 ${
                          isSidebarOpen ? "gap-3" : ""
                        }`}
                      >
                        <TbReportSearch size={22} />
                        {isSidebarOpen && (
                          <span className="font-medium">Tickets</span>
                        )}
                      </div>
                    </div>
                  </Link>
                </li>

                <li
                  className={`group flex items-center ${
                    isSidebarOpen ? "px-4" : "px-3"
                  } py-3 text-sm text-gray-600 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer transition-colors duration-200 ${
                    isActive("/users") ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  <Link to="/users">
                    <div
                      className={`flex items-center pl-1 ${
                        isSidebarOpen ? "gap-3" : ""
                      }`}
                    >
                      <HiOutlineUserGroup size={22} />
                      {isSidebarOpen && (
                        <span className="font-medium">Users</span>
                      )}
                    </div>
                  </Link>
                </li>

                <li
                  className={`group flex items-center ${
                    isSidebarOpen ? "px-4" : "px-3"
                  } py-3 text-sm text-gray-600 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer transition-colors duration-200 ${
                    isActive("/profile") ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  <Link to="/profile">
                    <div
                      className={`flex items-center pl-1 ${
                        isSidebarOpen ? "gap-3" : ""
                      }`}
                    >
                      <RiUserSettingsLine size={22} />
                      {isSidebarOpen && (
                        <span className="font-medium">Profile</span>
                      )}
                    </div>
                  </Link>
                </li>

                <li
                  className={`group flex items-center ${
                    isSidebarOpen ? "px-4" : "px-3"
                  } py-3 text-sm text-gray-600 hover:bg-blue-500 hover:text-white rounded-lg cursor-pointer transition-colors duration-200 ${
                    isActive("/settings") ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  <Link to="/settings">
                    <div
                      className={`flex items-center pl-1 ${
                        isSidebarOpen ? "gap-3" : ""
                      }`}
                    >
                      <IoSettingsOutline size={22} />
                      {isSidebarOpen && (
                        <span className="font-medium">Settings</span>
                      )}
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Logo Section - Moved to bottom */}
          <div className="px-4 py-4 border-t border-gray-200">
            <Link to="/" className="group flex items-center justify-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 transition-all group-hover:bg-blue-700">
                <FaSquarePhone className="text-white" size={18} />
              </div>
              {isSidebarOpen && (
                <div className="ml-3 flex flex-col">
                  <span className="text-xl font-bold text-gray-800">
                    Ticket<span className="text-blue-600">Flow</span>
                  </span>
                  <span className="text-xs text-gray-500">Support System</span>
                </div>
              )}
            </Link>
          </div>
        </aside>
        <main
          className={`flex-1 overflow-y-auto bg-gray-50 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          <div className="text-gray-800">{children}</div>
        </main>
      </div>
    </>
  );
}

export default SideBar;
