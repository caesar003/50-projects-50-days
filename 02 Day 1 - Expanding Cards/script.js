const panels = document.querySelectorAll(".panel");
const container = document.getElementById("container");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

const images = [
    {
        name: "Bali Indonesia",
        img: "bali_indonesia-wallpaper-1920x1080.jpg",
    },
    {
        name: "Bay 10",
        img: "bay_10-wallpaper-1920x1080.jpg",
    },
    {
        name: "Clay Banks",
        img: "clay-banks-_wkd7XBRfU4-unsplash.jpg",
    },
    {
        name: "Annas Hummingbird",
        img: "annas_hummingbird_perched_on_a_branch-wallpaper-1920x1080.jpg",
    },
    {
        name: "Cotton Clouds",
        img: "cotton_clouds-wallpaper-1920x1080.jpg",
    },
];
function renderPanels() {
    let panel = "";

    for (let i = 0; i < images.length; i++) {
        const { name, img } = images[i];
        panel += `
            <div class="panel ${
                i === 0 ? "active" : ""
            }" style="background-image: url('./img/${img}');">
                <h3>${name}</h3>
            </div>`;
    }
    container.innerHTML = panel;
}

renderPanels();
