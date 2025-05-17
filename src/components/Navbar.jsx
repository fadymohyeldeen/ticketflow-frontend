import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary to-primary/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to={"/"} className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20">
              <FaSquarePhone className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">
                Ticket<span className="text-accent">Flow</span>
              </span>
              <span className="text-xs text-white/60">Support System</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <Link
              to={"/"}
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
            >
              Home
            </Link>
            <Link
              to={"/submit-ticket"}
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
            >
              Submit Ticket
            </Link>
            <Link
              to={"/track-ticket"}
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
            >
              Track Ticket
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to={"/login"}
              className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
