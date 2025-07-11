export default function renderNavbar(data) {
  const navbar = document.getElementById("topbar");
  navbar.innerHTML = `
    <ul>
      <li><a href="https://petya-stoeva.github.io/petyastoeva/">ABOUT</a></li>
      <li><a href="https://petya-stoeva.github.io/petyastoeva/#skills">SKILLS</a></li>
      <li><a href="https://petya-stoeva.github.io/petyastoeva/#news">NEWS</a></li>
      <li><a href="https://petya-stoeva.github.io/petyastoeva/#proj">PROJECTS</a></li>
      <li><a href="${data.left["my resume"]}">RESUME</a></li>
    </ul>
  `;
}