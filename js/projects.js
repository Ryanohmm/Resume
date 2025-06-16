const main = document.querySelector("main");

fetch("https://api.github.com/users/Ryanohmm/repos")
  .then(res => res.json())
  .then(repos => {
    repos.forEach(repo => {
      const projectCard = document.createElement("section");
      projectCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank">View Project</a>
      `;
      main.appendChild(projectCard);
    });
  })
  .catch(err => console.error("Error fetching repos:", err));
