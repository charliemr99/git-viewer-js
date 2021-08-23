import React from "react";
import gitLogo from "../../assets/icons/github.svg";
import agenda from "../../assets/icons/agenda.svg";
import "./Header.css";

export default function Header() {
  const [username, setUsername] = React.useState("charliemr99");
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
      <div className="name-bar">
        <img src={agenda} alt="Agenda Logo" />
        <div className="name-bar__user">
          <input
            type="text"
            id="user_input"
            placeholder="Username"
            value={username}
          ></input>
        </div>
      </div>
    </>
  );
}
