
export default function renderProjectListItem(project) {
  return `
    <section id="proj" class="proj-flex">
      <h1>Projects</h1>
      <div class="psearch">
        <input type="search" name="psearch" placeholder="Search Project by name, number, or language...">
      </div>
      <div class="projlist">
        ${project.map((item) => renderProjectItem(item)).join("")}
      </div>
    </section>
  `;
}

export function renderProjectItem(project) {
  return `
      <div class="proj">
        <a href="?project=${project.id}">${project.num}- ${project.title}</a>
      </div>`
}