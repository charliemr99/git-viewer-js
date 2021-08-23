import React from "react";

// assets
import gitLogo from "../../assets/icons/github.svg";

import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar__title">
          <img
            src={gitLogo}
            alt="GitHub Logo"
            style={{ width: "30px", height: "30px" }}
          />
          <h1>Git Viewer</h1>
        </div>
      </div>
    </>
  );
}
