// addEventListener
// onclick

// 1. select the body

const body = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-btn");
let isDarkMode = false; // my toggle

function init() {
    const currentMode = window.localStorage.getItem("mode");
    if (currentMode) {
        console.log("currentMode: ", currentMode);
        if (currentMode === "dark") {
            isDarkMode = true;
            body.style.backgroundColor = "darkblue";
        } else { // light
            isDarkMode = false;
            body.style.backgroundColor = "white";
        }
    } else {
        console.log("no mode yet");
    }
}

init();

toggleBtn.addEventListener("click", function () {
    isDarkMode = !isDarkMode;
    console.log("isDarkMode: ", isDarkMode);
    if (isDarkMode) { // true
        body.style.backgroundColor = "darkblue";
        window.localStorage.setItem("mode", "dark");
    } else { // false
        body.style.backgroundColor = "white";
        window.localStorage.setItem("mode", "light");
    }
});