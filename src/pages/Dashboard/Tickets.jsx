import React, { useContext, useState, useMemo } from "react";
import { TicketsContext } from "../../context/TicketsContext";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaSort,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

const Tickets = () => {
  const navigate = useNavigate();
  const { tickets, filterTickets } = useContext(TicketsContext);
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("updatedAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const convertTimeToLocal = (time) => {
    return new Date(time).toLocaleString();
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
    setIsFiltered(false);
  };

  const handleSortBy = (value) => {
    setSortBy(value);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleTicketClick = (ticketId) => {
    navigate(`/tickets/${ticketId}`);
  };

  const handleFilterByStatus = async (status) => {
    try {
      setFilterStatus(status);
      if (status === "all") {
        setIsFiltered(false);
      } else {
        const result = await filterTickets({ ticketStatus: status });
        setFilteredResults(result);
        setIsFiltered(true);
      }
    } catch (err) {
      console.log(err);
      setIsFiltered(false);
    }
  };

  const processedTickets = useMemo(() => {
    let ticketsToProcess = [];

    if (isFiltered) {
      ticketsToProcess = filteredResults.filter((ticket) => {
        if (search) {
          return (
            ticket.ticketSubject.toLowerCase().includes(search) ||
            ticket._id.includes(search)
          );
        }
        return true;
      });
    } else {
      ticketsToProcess = tickets.filter((ticket) => {
        if (search) {
          return (
            ticket.ticketSubject.toLowerCase().includes(search) ||
            ticket._id.includes(search)
          );
        }
        if (filterStatus === "all") {
          return true;
        } else {
          return ticket.ticketStatus === filterStatus;
        }
      });
    }

    return ticketsToProcess.sort((a, b) => {
      if (sortBy === "createdAt") {
        return sortOrder === "asc"
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else if (sortBy === "updatedAt") {
        return sortOrder === "asc"
          ? new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
          : new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
      return 0;
    });
  }, [
    tickets,
    search,
    filterStatus,
    sortBy,
    sortOrder,
    filteredResults,
    isFiltered,
  ]);

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Ticket Management</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            <FaExclamationTriangle className="inline-block mr-1 text-yellow-500" />
            {tickets.filter((ticket) => ticket.ticketStatus === "open").length +
              " Open"}
          </span>
          <span className="text-sm text-gray-600">
            <FaClock className="inline-block mr-1 text-blue-500" />
            {tickets.filter((ticket) => ticket.ticketStatus === "in-progress")
              .length + " In Progress"}
          </span>
          <span className="text-sm text-gray-600">
            <FaCheckCircle className="inline-block mr-1 text-green-500" />
            {tickets.filter((ticket) => ticket.ticketStatus === "closed")
              .length + " Closed"}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <div className="flex items-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="flex flex-1 items-center px-4">
                <FaSearch className="text-gray-400" />
                <input
                  onChange={handleSearch}
                  value={search}
                  type="text"
                  placeholder="Search tickets by subject or id .."
                  className="ml-3 w-full border-none outline-none text-gray-700 placeholder:text-gray-400"
                />
              </div>
              <div className="flex items-center border-l border-gray-200">
                <button className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                  <FaSearch className="text-sm" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleFilterByStatus("all")}
              className={`${
                filterStatus === "all"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-transparent text-gray-600"
              } rounded-full px-3 py-1 text-sm font-medium hover:bg-gray-50`}
            >
              All
            </button>
            <button
              onClick={() => handleFilterByStatus("open")}
              className={`${
                filterStatus === "open"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-transparent text-gray-600"
              } rounded-full px-3 py-1 text-sm font-medium hover:bg-gray-50`}
            >
              Open
            </button>
            <button
              onClick={() => handleFilterByStatus("in-progress")}
              className={`${
                filterStatus === "in-progress"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-transparent text-gray-600"
              } rounded-full px-3 py-1 text-sm font-medium hover:bg-gray-50`}
            >
              In Progress
            </button>
            <button
              onClick={() => handleFilterByStatus("closed")}
              className={`${
                filterStatus === "closed"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-transparent text-gray-600"
              } rounded-full px-3 py-1 text-sm font-medium hover:bg-gray-50`}
            >
              Closed
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600  hover:bg-gray-100">
                #
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 hover:bg-gray-100">
                <div className="flex items-center gap-2">Subject</div>
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 hover:bg-gray-100">
                <div className="flex items-center gap-2">Status</div>
              </th>
              <th
                onClick={() => handleSortBy("createdAt")}
                className="px-6 py-3 text-left text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center gap-2">
                  Created
                  <FaSort className="text-gray-400" />
                </div>
              </th>
              <th
                onClick={() => handleSortBy("updatedAt")}
                className="px-6 py-3 text-left text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center gap-2">
                  Updated
                  <FaSort className="text-gray-400" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {processedTickets.map((ticket, index) => (
              <tr
                key={ticket._id}
                onClick={() => handleTicketClick(ticket._id)}
                className="cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {ticket.ticketSubject}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      ticket.ticketStatus === "open"
                        ? "bg-yellow-100 text-yellow-800"
                        : ticket.ticketStatus === "in-progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {ticket.ticketStatus === "open"
                      ? "Open"
                      : ticket.ticketStatus === "in-progress"
                      ? "In Progress"
                      : "Closed"}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-gray-900">
                  {convertTimeToLocal(ticket.createdAt)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {convertTimeToLocal(ticket.updatedAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
