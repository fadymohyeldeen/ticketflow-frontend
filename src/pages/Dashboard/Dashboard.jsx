import React, { useContext } from "react";
import { TicketsContext } from "../../context/TicketsContext";
import { Link } from "react-router-dom";
import {
  FaTicketAlt,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaHistory,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const { tickets = [] } = useContext(TicketsContext);
  const ticketStatusData = [
    {
      status: "Open",
      count: tickets.filter((ticket) => ticket.ticketStatus === "open").length,
    },
    {
      status: "In Progress",
      count: tickets.filter((ticket) => ticket.ticketStatus === "in-progress")
        .length,
    },
    {
      status: "Closed",
      count: tickets.filter((ticket) => ticket.ticketStatus === "closed")
        .length,
    },
  ];

  const ticketHistory = [
    {
      id: "Test-001",
      action: "Status Updated",
      from: "Open",
      to: "In Progress",
      by: "Admin Name",
      timestamp: "2 hours ago",
    },
    {
      id: "Test-002",
      action: "New Comment",
      by: "Admin Name",
      timestamp: "3 hours ago",
    },
  ];
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Tickets</p>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {tickets.length}
                </h3>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <FaTicketAlt className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Open Tickets</p>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {
                    tickets.filter((ticket) => ticket.ticketStatus === "open")
                      .length
                  }
                </h3>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <FaExclamationTriangle className="text-yellow-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">In Progress</p>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {
                    tickets.filter(
                      (ticket) => ticket.ticketStatus === "in-progress"
                    ).length
                  }
                </h3>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <FaClock className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Resolved</p>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {
                    tickets.filter((ticket) => ticket.ticketStatus === "closed")
                      .length
                  }
                </h3>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <FaCheckCircle className="text-green-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/">
                <button className="w-full bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200 shadow-sm hover:shadow flex items-center justify-center gap-2">
                  <FaHome />
                  <span>Home</span>
                </button>
              </Link>
              <Link to="/tickets">
                <button className="w-full bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200 shadow-sm hover:shadow">
                  Manage Tickets
                </button>
              </Link>
              <Link to="/users">
                <button className="w-full bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200 shadow-sm hover:shadow">
                  Manage Users
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="w-full bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200 shadow-sm hover:shadow">
                  View Reports
                </button>
              </Link>
              <Link to="/settings">
                <button className="w-full bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200 shadow-sm hover:shadow">
                  Settings
                </button>
              </Link>
              <Link>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-50 text-red-600 px-4 py-2.5 rounded-lg hover:bg-red-100 transition-all duration-200 border border-red-200 shadow-sm hover:shadow flex items-center justify-center gap-2"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Ticket History
            </h2>
            <div className="space-y-3">
              {ticketHistory.map((history, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded">
                  <div className="flex items-center gap-2">
                    <FaHistory className="text-gray-400" />
                    <p className="font-semibold text-gray-800">
                      {history.action} - {history.id}
                    </p>
                  </div>
                  {history.from && (
                    <p className="text-sm text-gray-600">
                      Changed from {history.from} to {history.to}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">
                    By {history.by} - {history.timestamp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Ticket Status Distribution
            </h3>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={ticketStatusData}>
                  <XAxis dataKey="status" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="count"
                    fill="#3b82f6"
                    name="Number of Tickets"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Ticket Status Overview
            </h3>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={ticketStatusData}
                    dataKey="count"
                    nameKey="status"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {ticketStatusData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={["#3b82f6", "#f59e0b", "#10b981"][index % 3]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
