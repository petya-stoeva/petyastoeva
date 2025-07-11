
import renderProjectListItem, {renderProjectItem} from "./RenderProject.js"
import renderNews, {renderNewsItem} from "./RenderNews.js"
import renderRight, {renderLeft, renderAbout} from "./RenderAbout.js"
import renderSkills, {renderSkillItem} from "./RenderSkills.js"

export default function renderMainPage(data) {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  main.innerHTML = renderLeft(data.left);
  main.innerHTML += renderRight(data.right);
  main.innerHTML += renderAbout(data.about);
  main.innerHTML += renderSkills(data.skills);
  main.innerHTML += renderNews(data.news);
  body.innerHTML += renderProjectListItem(data.projects);
  
  const nsearch = document.querySelector('.nsearch');
  nsearch.addEventListener("input", e => {
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);
    const value = e.target.value.toLowerCase();
    const filtered = data.news.filter(newsitem => newsitem.info.toLowerCase().includes(value) || newsitem.date.toLowerCase().includes(value));
    console.log(filtered);
    const list = document.querySelector(".newslist");
    console.log(list);
    list.innerHTML = filtered.map(newsitem =>renderNewsItem(newsitem)).join("");
  });
  
  const psearch = document.querySelector('.psearch');
  psearch.addEventListener("input", p => {
      const value = p.target.value.toLowerCase();
      const filtered = data.projects.filter(projItem => {
          const matchesNumber = projItem.num.toLowerCase().includes(value);
          const matchesTitle = projItem.title.toLowerCase().includes(value);
          const matchesLanguage = projItem.language.toLowerCase().includes(value); // Check if language matches
          return matchesNumber || matchesTitle || matchesLanguage;
      });
      const list = document.querySelector(".projlist");
      list.innerHTML = filtered.map(projlist => renderProjectItem(projlist)).join("");
  });
}


