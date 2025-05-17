import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaHeadset,
  FaQuestionCircle,
  FaEnvelope,
} from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/90">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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

          <div className="flex justify-center">
            <ul className="flex gap-6">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/submit-ticket"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  Submit Ticket
                </Link>
              </li>
              <li>
                <Link
                  to="/track-ticket"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  Track Status
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-end">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="group relative flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
              >
                <FaEnvelope
                  className="text-white/60 group-hover:text-white"
                  size={14}
                />
                <span>Support</span>
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-accent"></span>
              </Link>
              <Link
                to="/"
                className="group relative flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
              >
                <FaQuestionCircle
                  className="text-white/60 group-hover:text-white"
                  size={14}
                />
                <span>FAQ</span>
              </Link>
              <div className="flex gap-1">
                <Link
                  href="/"
                  className="rounded-full bg-white/10 p-1.5 text-white/60 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
                >
                  <FaGithub size={14} />
                </Link>
                <Link
                  href="/"
                  className="rounded-full bg-white/10 p-1.5 text-white/60 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
                >
                  <FaTwitter size={14} />
                </Link>
                <Link
                  href="/"
                  className="rounded-full bg-white/10 p-1.5 text-white/60 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
                >
                  <FaLinkedin size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-xs text-white/60">
              © 2024 TicketFlow. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/" className="text-xs text-white/60 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/" className="text-xs text-white/60 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
