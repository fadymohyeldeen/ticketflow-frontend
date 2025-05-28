import React, { createContext, useState, useEffect, useMemo } from "react";

export const TicketsContext = createContext();

export const TicketsProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No authentication token found");
          return;
        }
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/ticket`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          if (response.status === 403) {
            localStorage.removeItem("token");
            window.location.href = "/login";
            return;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const formattedTickets = Array.isArray(data)
          ? data.map((ticket) => ({
              ...ticket,
              createdAt: ticket.createdAt,
              updatedAt: ticket.updatedAt,
            }))
          : [];
        setTickets(formattedTickets);
      } catch (err) {
        console.error("Error fetching tickets:", err);
        setError(err.message);
        setTickets([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const memoizedTickets = useMemo(() => tickets, [tickets]);

  const getTicketById = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authentication token found");
        return null;
      }
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/ticket/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const ticket = await response.json();
      return ticket;
    } catch (err) {
      console.error("Error fetching ticket:", err);
      setError(err.message);
      return null;
    }
  };

  const updateTicket = async (id, updatedTicket) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authentication token found");
        return;
      }
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/ticket/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTicket),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setTickets((currentTickets) =>
        currentTickets.map((ticket) => (ticket._id === id ? data : ticket))
      );

      return data;
    } catch (err) {
      console.error("Error updating ticket:", err);
      setError(err.message);
      return null;
    }
  };

  const filterTickets = async (filterObject) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authentication token found");
        return [];
      }

      const queryParams = new URLSearchParams();
      Object.entries(filterObject).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          queryParams.append(key, value);
        }
      });

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/ticket/filter?${queryParams}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error filtering tickets:", err);
      setError(err.message);
      return [];
    }
  };

  return (
    <TicketsContext.Provider
      value={{
        tickets: memoizedTickets,
        setTickets,
        error,
        getTicketById,
        updateTicket,
        filterTickets,
        loading,
      }}
    >
      {children}
    </TicketsContext.Provider>
  );
};
