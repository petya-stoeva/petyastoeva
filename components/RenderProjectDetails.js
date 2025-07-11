export default function renderProjectDetails(data, project) {
  const body = document.querySelector("body");
  const projContent = document.createElement("div");

  let linkElement = '';
  let videoElements = '';

  if (project.link != "") {
    linkElement = `
      <a href=${project.link}>
        <img src=${project.photo} class="proj-photo" onerror='this.style.display = "none"'/>
      </a>
    `;
  } else {
    linkElement = `
      <img src=${project.photo} class="proj-photo" onerror='this.style.display = "none"'/>
    `;
  }

  if (project.videos && project.videos.length > 0) {
    project.videos.forEach((video, index) => {
      videoElements += `
        <div class="video-container">
          <video width="320" height="240" controls>
            <source src="${video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      `;
    });
  }

  projContent.innerHTML = `
    <section class="proj-grid">
      <section class="proj-left">
        <h1>${project.title}</h1>
      </section>
      <section class="proj-right">
        <p>${project.description}</p><br>
        <p><strong>Languages:</strong> ${project.language}</p>
      </section>
      <section class="end">
        <div class="links-wrapper">
          ${linkElement}
        </div>
        <div class="videos-wrapper">
          ${videoElements}
        </div>
      </section>
    </section>`;

  body.appendChild(projContent);
}
