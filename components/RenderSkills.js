export default function renderSkills(skills) {
  return `
    <section id="skills" class="skills-flex">
      <div class="skills-heading">
        <h2>Skills...</h2>
      </div>
      <div class="skillslist">
        ${skills.map((item) => renderSkillItem(item)).join("")}
      </div>
    </section>
  `;
}

export function renderSkillItem(item) {
  return `
       <div class="skill">
          <img src=${item.photo} title=${item.id} class="skill-photo" onerror='this.style.display = "none"'/>
        </div>
  `;
}
