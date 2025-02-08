
    function updateUTCTime() {
        document.getElementById("utcTime").textContent = new Date().toUTCString();
    }
    updateUTCTime(); 
    setInterval(updateUTCTime, 1000); 

    // Toggle Dark Mode
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }
