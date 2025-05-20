import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TicketSubmit from "../pages/TicketSubmit";
import TicketTrack from "../pages/TicketTrack";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tickets from "../pages/Dashboard/Tickets";
import SideBar from "../components/Dashboard/SideBar";
import ProtectedRoute from "./ProtectedRoute";
import TicketDetail from "../pages/Dashboard/SingleTicket";
import Users from "../pages/Dashboard/Users";
import Profile from "../pages/Dashboard/Profile";
import Settings from "../pages/Dashboard/Settings";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/submit-ticket"
          element={
            <>
              <Navbar />
              <TicketSubmit />
              <Footer />
            </>
          }
        />
        <Route
          path="/track-ticket"
          element={
            <>
              <Navbar />
              <TicketTrack />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SideBar>
                <Dashboard />
              </SideBar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <SideBar>
                <Users />
              </SideBar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <SideBar>
                <Profile />
              </SideBar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SideBar>
                <Settings />
              </SideBar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/tickets"
          element={
            <ProtectedRoute>
              <SideBar>
                <Tickets />
              </SideBar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/tickets/:ticketId"
          element={
            <ProtectedRoute>
              <SideBar>
                <TicketDetail />
              </SideBar>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
