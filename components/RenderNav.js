export default function renderNavbar(data) {
  const navbar = document.getElementById("topbar");
  navbar.innerHTML = `
    <ul>
      <li><a href="https://petyastoeva.glitch.me/">ABOUT</a></li>
      <li><a href="https://petyastoeva.glitch.me/#skills">SKILLS</a></li>
      <li><a href="https://petyastoeva.glitch.me/#news">NEWS</a></li>
      <li><a href="https://petyastoeva.glitch.me/#proj">PROJECTS</a></li>
      <li><a href="${data.left["my resume"]}">RESUME</a></li>
    </ul>
  `;
}