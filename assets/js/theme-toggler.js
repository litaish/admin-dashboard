function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
}

document.getElementById("switch").addEventListener("click", setTheme);