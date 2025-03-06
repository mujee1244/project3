document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})
document.getElementById("scrollToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
    console.log("click")
})

console.log("script runs")