export default function renderNews(news) {
  return `
    <section id="news" class="news-flex">
      <div class="nsearch">
        <h2>News...</h2>
        <input type="search" name="nsearch" placeholder="Search News...">
      </div>
      <div class="newslist">
        ${news.map((item) => renderNewsItem(item)).join("")}
      </div>
    </section>
  `;
}

export function renderNewsItem(item) {
  return `
    <div class= "col">
      <p class="row">${item.info}</p>
      <p class="row-date">${item.date}</p>
    </div>
  `;
}