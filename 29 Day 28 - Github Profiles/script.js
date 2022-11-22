const APIURL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("caesar003");
async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
        addReposToCard(data);
        getRepos(username);
    } catch (err) {
        if (err.response.status === 404) {
            createErrorCard("No profile with this username");
        }
    }
}

async function getRepos(username) {
    try {
        const { data: user } = await axios(APIURL + username + "/repos");
        createUserCard(user);
    } catch (err) {
        createErrorCard("Problem fetching repos");
    }
}

function createUserCard(user) {
    const { bio, name, avatar_url, public_repos, followers, following } = user;
    const card = `
    <div class="card">
        <div>
            <img
                src="${avatar_url}"
                class="avatar"
                alt="${name}"
            />
        </div>
        <div class="user-info">
            <h2>${name}</h2>
            <p>
            ${bio || "<em>No bio</em>"} 
            </p>
            <ul>
                <li>${followers} <strong> Followers</strong></li>
                <li>${following} <strong> Following</strong></li>
                <li>${public_repos} <strong> Repositories</strong></li>
            </ul>

            <div id="repos">
            
            </div>
        </div>
    </div>`;

    main.innerHTML = card;
}
function createErrorCard(msg) {
    const card = `<div class="card">
        <h1>${msg} </h1>
    </div>`;

    main.innerHTML = card;
}
function addReposToCard(repos) {
    const reposEl = document.getElementById("repos");

    repos.forEach((repo) => {
        const repoEl = document.createElement("a");
        repoEl.classList.add("repo");
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;
        reposEl.appendChild(repoEl);
    });
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value;

    if (user) {
        getUser(user);

        search.value = "";
    }
});
