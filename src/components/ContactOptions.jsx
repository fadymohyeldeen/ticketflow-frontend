import React from "react";
import { FaEnvelope, FaPhone, FaComments, FaClock } from "react-icons/fa";

function ContactOptions() {
  const contactMethods = [
    {
      icon: <FaComments className="h-6 w-6" />,
      name: "Live Chat",
      description: "Chat with our support team in real-time",
      availability: "Available 24/7",
      responseTime: "Instant response",
    },
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      name: "Email Support",
      description: "Send us a detailed message",
      availability: "Always open",
      responseTime: "Within 24 hours",
    },
    {
      icon: <FaPhone className="h-6 w-6" />,
      name: "Phone Support",
      description: "Speak with our support team",
      availability: "Mon-Fri, 9 AM - 5 PM EST",
      responseTime: "Immediate",
    },
  ];

  return (
    <section className="relative -mt-8 bg-white pb-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Need a Different Way to Reach Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group bg-white rounded-b-2xl p-6 text-left transition-all duration-300 hover:bg-primary/5 border border-gray-100 border-t-0"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {method.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {method.description}
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaClock className="mr-2 h-4 w-4" />
                      {method.availability}
                    </div>
                    <div className="text-sm text-gray-500">
                      Response: {method.responseTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactOptions;
