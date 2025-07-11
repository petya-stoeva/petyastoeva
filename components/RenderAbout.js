
export default function renderRight(right) {
  return `
    <section class="right">
      <div class="box-right">
        <div class="contain-pic">
          <img src="${right.photo}" title= ":)" class="profile-photo" />
        </div>
        <p>
          <!--  <i class="fa-solid fa-square-phone-flip"></i>
          Phone: <a href="tel:${right.phone}">${right.phone}</a> <br /> -->
          <i class="fa-solid fa-square-envelope"></i>
          Email: <a href="mailto:${right.email}">${right.email}</a> <br />
          <i class="fa-solid fa-house-user"></i>
          Address: <a href="${right.address}">${right.address}</a> <br />
          <i class="fa-solid fa-bolt"></i>
          LinkedIn: <a href="${right.linkedin}">${right.linkedin}</a> <br />
          <!--  <i class="fa-solid fa-bolt"></i>
          Github: <a href="${right.github}">${right.github}</a> -->
        </p>
      </div>
    </section>
  `;
}

export function renderLeft(left) {
  return `
    <section class="left">
      <h1>${left.name}</h1>
      <h3 class= "title">${left.title}</h3>
      <a href="${left["my resume"]}">MY RESUME</a>
    </section>
  `;
}

export function renderAbout(about) {
  return `
    <section class="about">
      <h2>${about.title}</h2>
      <div class="card-text">
        ${about.info}
      </div>
    </section>
  `;
}