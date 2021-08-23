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
              setUsername(e.target.value);
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
              setRepository(e.target.value);
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
          <div className="content__commitcontainer">
            {commitsData.map((item, index) => {
              return (
                <Commit
                  key={index}
                  data={item}
                  username={username}
                  repository={repository}
                />
              );
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

export function Commit({ data, username, repository }) {
  const commitDate = new Date(data.commit.committer.date);
  const currentDate = new Date();
  const differenceTime = currentDate.getTime() - commitDate.getTime();

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    console.log(seconds, minutes, hours);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `commited ${hours} hours, ${minutes} minutes and ${seconds} seconds ago.`;
  }

  console.log("commit: ", data);
  return (
    <div className="commit">
      <div className="commit_title">
        <div className="commit_picture">
          <img
            src={data.author.avatar_url}
            style={{ width: "4vh", height: "4vh" }}
          />
        </div>
        <div className="commit_data">
          <a
            href={`https://github.com/${username}/${repository}/commit/${data.sha}`}
          >
            {data.commit.message}
          </a>
          <small>
            <strong>{data.author.login}</strong> - {msToTime(differenceTime)}
          </small>
        </div>
      </div>
    </div>
  );
}
