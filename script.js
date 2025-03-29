document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-mode");
    const body = document.body;
    const header = document.querySelector("header");

    // Make the toggle button responsive
    toggleButton.style.padding = "10px 20px";
    toggleButton.style.fontSize = "16px";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "20px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.transition = "background 0.3s ease, color 0.3s ease";
    toggleButton.style.position = "absolute";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.zIndex = "1000"; // Ensures it's above other elements

    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode", isDarkMode);
        
        // Toggle button text
        toggleButton.textContent = isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode";
        
        // Change header background color
        header.style.backgroundColor = isDarkMode ? "#222" : "#555";
        
        // Update button style for dark mode
        if (isDarkMode) {
            toggleButton.style.background = "#444";
            toggleButton.style.color = "white";
        } else {
            toggleButton.style.background = "white";
            toggleButton.style.color = "black";
        }
    });

    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "🌙 Dark Mode";
        header.style.backgroundColor = "#222";
        toggleButton.style.background = "#444";
        toggleButton.style.color = "white";
    } else {
        toggleButton.textContent = "☀️ Light Mode";
        header.style.backgroundColor = "#555";
        toggleButton.style.background = "white";
        toggleButton.style.color = "black";
    }

    // Fix image layout
    const certCards = document.querySelectorAll(".cert-card img");
    certCards.forEach(img => {
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        img.style.display = "block";
        img.style.margin = "0 auto";
    });
});