import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <>
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Streamline Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Support</span>
                <span className="absolute bottom-2 left-0 h-3 w-full bg-primary/10"></span>
              </span>{" "}
              Process
            </h1>

            <p className="mb-12 max-w-2xl text-lg text-gray-600 md:text-xl">
              Experience seamless ticket management with our intuitive platform.
              Submit, track, and resolve issues faster than ever before.
            </p>

            <div className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <Link
                to="/submit-ticket"
                className="group relative inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-primary/90"
              >
                <span>Submit a Ticket</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/track-ticket"
                className="group relative inline-flex items-center justify-center gap-2 rounded-md border bg-white border-gray-200 px-8 py-4 text-center font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50"
              >
                <span>Track Status</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid w-full max-w-4xl grid-cols-2 gap-8 rounded-t-2xl border border-gray-100 bg-white p-8 sm:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  15min
                </div>
                <div className="text-sm text-gray-600">Avg. Response</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-gray-600">Tickets Resolved</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;
