import React from "react";
import "./nav.css";
export default function Navbar() {
  return (
    <div className="navbar-wrap">
      <div className="logoWrap">
        <img src="./images/logo.png" alt="" />
      </div>

      <div className="rightMenu">
        <div className="authBtns">
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}
