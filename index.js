
import renderNavbar from "./components/RenderNav.js"
import renderMainPage from "./components/RenderMain.js"
import renderProjectDetails from "./components/RenderProjectDetails.js"

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");
    const page = projectId == null ? "main" : "project";

    if (page === "main") {
      renderNavbar(data);
      renderMainPage(data);
    } else {
      renderNavbar(data);
      const p = data.projects.find((p) => p.id == projectId);
      renderProjectDetails(data, p);
    }
  });

