const main = document.getElementById("main");
const init = () => {
    let el = "";
    for (let i = 0; i < 24; i++) {
        el += `<div class="box">
        <h2>content</h2></div>`;
    }
    main.innerHTML = el;
};
init();
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
