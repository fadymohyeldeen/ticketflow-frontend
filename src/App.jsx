import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TicketSubmit from "./pages/TicketSubmit";
import TicketTrack from "./pages/TicketTrack";
import Login from "./pages/Login";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit-ticket" element={<TicketSubmit />} />
        <Route path="/track-ticket" element={<TicketTrack />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
