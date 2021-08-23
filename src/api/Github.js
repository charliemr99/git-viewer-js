export const fetchGit = (
  callback = null,
  username = "charliemr99",
  repo = "git-viewer"
) => {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/vnd.github.v3+json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://api.github.com/repos/${username}/${repo}/commits`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
