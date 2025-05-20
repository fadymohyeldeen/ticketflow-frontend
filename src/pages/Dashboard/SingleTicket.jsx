import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  FaTrash,
  FaComment,
  FaHistory,
  FaUser,
  FaCalendar,
  FaTag,
  FaChevronDown,
} from "react-icons/fa";
import { TicketsContext } from "../../context/TicketsContext";

const TicketDetail = () => {
  const { getTicketById, updateTicket } = useContext(TicketsContext);
  const { ticketId } = useParams();
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  const convertTimeToLocal = (time) => {
    return new Date(time).toLocaleString();
  };

  const handleupdateTicket = async (newUpdate) => {
    if (newUpdate === ticket.ticketStatus) {
      setIsStatusDropdownOpen(false);
      return;
    }

    const updatedTicket = {
      ...ticket,
      ticketStatus: newUpdate,
    };
    const response = await updateTicket(ticketId, updatedTicket);
    setTicket(response);
    setIsStatusDropdownOpen(false);
  };

  const statusOptions = [
    { value: "open", label: "Open", color: "yellow" },
    { value: "in-progress", label: "In Progress", color: "blue" },
    { value: "closed", label: "Closed", color: "green" },
  ];

  const getStatusColor = (status) => {
    const option = statusOptions.find((opt) => opt.value === status);
    return option ? option.color : "gray";
  };

  useEffect(() => {
    const fetchTicket = async () => {
      setLoading(true);
      const ticketData = await getTicketById(ticketId);
      setTicket(ticketData);
      setLoading(false);
    };
    fetchTicket();
  }, [ticketId, getTicketById]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Actions */}
        <div className="flex justify-between items-center mb-6">
          {loading ? (
            <h1 className="text-3xl font-bold text-gray-900">Loading...</h1>
          ) : ticket ? (
            <h1 className="text-3xl font-bold text-gray-900">
              Ticket: {ticket.ticketSubject}
            </h1>
          ) : (
            <h1 className="text-3xl font-bold text-gray-900">
              Ticket not found
            </h1>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Ticket Information</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Client Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{ticket?.clientName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{ticket?.clientEmail}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone Number</p>
                      <p className="font-medium">{ticket?.clientNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Ticket Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Ticket ID</p>
                      <p className="font-medium">{ticket?._id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Subject</p>
                      <p className="font-medium">{ticket?.ticketSubject}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <div className="relative">
                        <button
                          onClick={() =>
                            setIsStatusDropdownOpen(!isStatusDropdownOpen)
                          }
                          className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-${getStatusColor(
                              ticket?.ticketStatus
                            )}-100 text-${getStatusColor(
                              ticket?.ticketStatus
                            )}-800 mr-2`}
                          >
                            {
                              statusOptions.find(
                                (opt) => opt.value === ticket?.ticketStatus
                              )?.label
                            }
                          </span>
                          <FaChevronDown className="h-4 w-4 text-gray-400" />
                        </button>

                        {isStatusDropdownOpen && (
                          <div className="absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div
                              className="py-1"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              {statusOptions.map((status) => (
                                <button
                                  key={status.value}
                                  onClick={() =>
                                    handleupdateTicket(status.value)
                                  }
                                  className={`${
                                    ticket?.ticketStatus === status.value
                                      ? "bg-gray-100"
                                      : ""
                                  } flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50`}
                                  role="menuitem"
                                >
                                  <span
                                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-${status.color}-100 text-${status.color}-800 mr-2`}
                                  >
                                    {status.label}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Created At</p>
                      <p className="font-medium">
                        {convertTimeToLocal(ticket?.createdAt)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Last Updated</p>
                      <p className="font-medium">
                        {convertTimeToLocal(ticket?.updatedAt)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="col-span-2">
                  <p className="text-sm text-gray-500 mb-2">Message</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">{ticket?.ticketMessage}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Comments</h2>
                <button className="text-blue-600 hover:text-blue-800">
                  <FaComment className="inline mr-2" />
                  Add Comment
                </button>
              </div>
              <div className="space-y-4">
                {/* Comment Item */}
                <div className="border-b pb-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <FaUser className="text-gray-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">Admin</h3>
                        <span className="text-sm text-gray-500">
                          2 hours ago
                        </span>
                      </div>
                      <p className="mt-1 text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsa culpa quo dolores ratione aperiam voluptatum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - History */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">History</h2>
                <FaHistory className="text-gray-400" />
              </div>
              <div className="space-y-4">
                {/* History Item */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <FaCalendar className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Status changed to "In Progress"
                    </p>
                    <p className="text-xs text-gray-500">
                      By John Doe • 2 hours ago
                    </p>
                  </div>
                </div>
                {/* Another History Item */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <FaTag className="text-green-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ticket created</p>
                    <p className="text-xs text-gray-500">
                      By John Doe • 3 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
