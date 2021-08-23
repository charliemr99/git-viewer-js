import React from "react";
import fetchGit from "../../api/Github";

// assets
import agenda from "../../assets/icons/agenda.svg";
import search from "../../assets/icons/search.svg";
import data from "../../assets/icons/data.svg";

import "./Content.css";

export default function Content() {
  const [username, setUsername] = React.useState("charliemr99");
  const [repository, setRepository] = React.useState("git-viewer");
  const [commitsData, setCommitsData] = React.useState(null);

  function gitCallback(data) {
    setCommitsData(data);
  }

  return (
    <>
      <div className="name-bar">
        <img src={agenda} alt="Agenda Logo" />
        <div className="name-bar__userandrepo">
          <input
            type="text"
            id="user_input"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.value);
              console.log("username: ", username);
            }}
          ></input>
          <h2>/</h2>
          <input
            type="text"
            id="repo_input"
            placeholder="Repository"
            value={repository}
            onChange={(e) => {
              setRepository(e.value);
              console.log("repository: ", repository);
            }}
          ></input>
        </div>
        <div className="name-bar__userandrepo__search">
          <img
            src={search}
            alt="Search Logo"
            style={{ width: "30px", height: "30px" }}
            onClick={() => {
              fetchGit(gitCallback, username, repository);
            }}
          ></img>
        </div>
      </div>
      <div className="content">
        {commitsData ? (
          <div className="content__commit_list">
            {commitsData.map((item, index) => {
              return <Commit key={index} data={item} />;
            })}
          </div>
        ) : (
          <div className="content__empty">
            <img
              src={data}
              alt="No data Logo"
              style={{ width: "35vh", height: "35vh" }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export function Commit({ data }) {
  console.log("commit: ", data);
  return (
    <div className="commit">
      <div className="commit_title">{data.commit.message}</div>
    </div>
  );
}
