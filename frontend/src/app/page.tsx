"use client";
import React, { useState, useEffect } from "react";
import LandingPage from "./landing/page";
import * as UserDash from "./(dashboard)/user/page";
import StateContext from "./StateContext";
import { useContext } from "react";
import landing from "./landing/page";
import Landing from "./landing/page";

const App = () => {
  const appState = useContext(StateContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading timeout
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000); // You can adjust the timeout duration as needed

    // Clear the timeout if the component unmounts or if the data is loaded
    return () => clearTimeout(timeoutId);
  }, []); // This effect runs once when the component mounts

  return (
    <main>
      {loading ? (
        // Show a loading indicator while waiting
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin h-12 w-12 rounded-full bg-gradient-to-r from-gray-200 to-gray-300" />
        </div>
      ) : (
        // Render the components based on the app state
        <>
          {appState.loggedIn && appState.user.role === "user" && <UserDash.default />}
          {!appState.loggedIn && <LandingPage />}
        </>
      )}
    </main>
  );
};

export default App;
