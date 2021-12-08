import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./home/index";
import $ from "jquery";
function App() {
  const [loading, setLoading] = useState(true);
  // useEffect(() => setLoading(false), []);

  useEffect(() => {
    $(window).on("load", function () {
      //everything is loaded
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    });
  }, []);
  const AppLoad = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}
      >
        <h2 style={{ color: "white", fontSize: "17px" }}>Please Wait...</h2>
        <br />
        {/* <p style={{ color: "white", fontSize: "12px" }}>
          Getting page content ready
        </p> */}
      </div>
    );
  };

  const ReturnApp = () => {
    return (
      <div>
        <div style={loading ? { display: "block" } : { display: "none" }}>
          <AppLoad />
        </div>

        <div style={loading ? { display: "none" } : { display: "block" }}>
          <Home />
        </div>
      </div>
    );
  };

  return <ReturnApp />;
}

export default App;
