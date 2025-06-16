const username = "sspektrun";
const repo = "website";

document.getElementById("repo-name").textContent = `https://github.com/${username}/${repo}.git`;

fetch(`https://api.github.com/repos/${username}/${repo}/tags`)
  .then(res => res.json())
  .then(tags => {
    const list = document.getElementById("version-list");

    if (tags.length === 0) {
      list.innerHTML = "<li>⚠ There was no versions detected.</li>";
      return;
    }

    tags.forEach(tag => {
      const listItem = document.createElement("li");

      const cloneUrl = `https://github.com/${username}/${repo}.git`;

      listItem.innerHTML = `
        <div>
          <strong>${tag.name}</strong><br>
          <span class="clone-url">${cloneUrl}</span>
        </div>
        <a class="download-btn" href="https://github.com/${username}/${repo}/archive/refs/tags/${tag.name}.zip">
          Descargar
        </a>
      `;

      list.appendChild(listItem);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById("version-list").innerHTML = "<li>⚠ There was an error while searching for versions.</li>";
  });
