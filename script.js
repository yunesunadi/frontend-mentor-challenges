import projects from "./projects.js";

const projectsContainer = document.querySelector(".cards");
const githubBaseUrl =
    "https://github.com/yunesunadi/frontend-mentor-challenges/tree/master/";
const siteBaseUrl = "https://yunesunadi.com/frontend-mentor-challenges/";
let cardEls = "";

projects.forEach(({ id, name }) => {
    const folderName = name.toLowerCase().replace(/\s/g, "-");

    cardEls += `
    <article class="card">
        <h4 class="card-title">${id}. ${name}</h4>
        <div class="social-links">
            <a
                href="${githubBaseUrl + folderName}"
                target="_blank"
                class="social-link"
                ><i class="fa-brands fa-github"></i> View Code</a
            >
            <a href="${
                siteBaseUrl + folderName
            }" target="_blank" class="social-link"
                ><i class="fa-sharp fa-solid fa-eye"></i> Live Preview</a
            >
        </div>
    </article>`;
});

projectsContainer.innerHTML = cardEls;
