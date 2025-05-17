import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTag,
  FaMessage,
  FaArrowRight,
} from "react-icons/fa6";

function TicketSubmit() {
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
            <FaMessage className="h-4 w-4" />
            Support Ticket
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Submit a Ticket
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help! Fill out the form below and we'll get back to
            you as soon as possible.
          </p>
        </div>

        {/* Form Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <FaUser className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Contact Information
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="group">
                <label
                  htmlFor="clientName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    className="block w-full rounded-lg border-0 bg-white py-2.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="clientEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="clientEmail"
                    name="clientEmail"
                    className="block w-full rounded-lg border-0 bg-white py-2.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="clientNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaPhone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="clientNumber"
                    name="clientNumber"
                    className="block w-full rounded-lg border-0 bg-white py-2.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Details Card */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <FaMessage className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Ticket Details
                </h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="group">
                <label
                  htmlFor="ticketSubject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaTag className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="ticketSubject"
                    name="ticketSubject"
                    className="block w-full rounded-lg border-0 bg-white py-2.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="Brief description of your issue"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="ticketMessage"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute top-3 left-3">
                    <FaMessage className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="ticketMessage"
                    name="ticketMessage"
                    rows="6"
                    className="block w-full rounded-lg border-0 bg-white py-2.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 resize-none"
                    placeholder="Please describe your issue in detail..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="group relative inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-primary/90"
          >
            <span>Submit Ticket</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketSubmit;
