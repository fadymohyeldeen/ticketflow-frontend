import React from "react";
import { FaTicket, FaSpinner, FaClock } from "react-icons/fa6";
import { FaCheckCircle, FaSearch } from "react-icons/fa";

function TicketTrack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary mb-4">
            <FaTicket className="h-4 w-4" />
            Track Your Ticket
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Track Ticket Status
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter your ticket number to check its current status and updates.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden mb-8">
          <div className="p-6">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <FaTicket className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your ticket number"
                  className="block w-full rounded-lg border-0 bg-white py-3 pl-12 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary hover:text-primary/90"
                >
                  <FaSearch className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Status Section */}
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <FaTicket className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Ticket Status
              </h2>
            </div>
          </div>

          {/* Status Timeline */}
          <div className="p-6">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {/* Submitted Status */}
                <div className="relative flex gap-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-8 ring-white">
                    <FaCheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        Ticket Submitted
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                        Completed
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Your ticket has been successfully submitted
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      March 15, 2024 - 10:30 AM
                    </p>
                  </div>
                </div>

                {/* In Progress Status */}
                <div className="relative flex gap-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-8 ring-white">
                    <FaSpinner className="h-4 w-4 text-primary animate-spin" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        In Progress
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                        Current
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Our team is currently reviewing your ticket
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      March 15, 2024 - 11:45 AM
                    </p>
                  </div>
                </div>

                {/* Pending Status */}
                <div className="relative flex gap-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                    <FaClock className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        Resolution
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                        Pending
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Waiting for resolution
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      Estimated completion: March 16, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Details */}
          <div className="border-t border-gray-100 p-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Ticket Information
                </h3>
                <dl className="mt-2 space-y-2">
                  <div>
                    <dt className="text-xs text-gray-500">Ticket Number</dt>
                    <dd className="text-sm text-gray-900">#TKT-2024-001</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500">Subject</dt>
                    <dd className="text-sm text-gray-900">
                      Technical Support Request
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500">Priority</dt>
                    <dd className="text-sm text-gray-900">Medium</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Contact Information
                </h3>
                <dl className="mt-2 space-y-2">
                  <div>
                    <dt className="text-xs text-gray-500">Name</dt>
                    <dd className="text-sm text-gray-900">John Doe</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500">Email</dt>
                    <dd className="text-sm text-gray-900">
                      john.doe@example.com
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500">Phone</dt>
                    <dd className="text-sm text-gray-900">+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketTrack;
