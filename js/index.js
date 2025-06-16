document.getElementById("view-projects").addEventListener("click", function (e) {
  e.preventDefault(); // Stop the link from navigating

  fetch("https://api.github.com/users/Ryanohmm/repos")
    .then((response) => response.json())
    .then((repos) => {
      const main = document.querySelector("main");
      main.innerHTML = "<h2>GitHub Projects</h2>"; // Optional: clear old content

      repos.forEach((repo) => {
        const article = document.createElement("article");
        article.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description provided."}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        main.appendChild(article);
      });
    })
    .catch((error) => console.error("Failed to fetch repos:", error));
});
