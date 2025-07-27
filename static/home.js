document.addEventListener("DOMContentLoaded", function () {
    const turnTimeButton = document.getElementById("turnTimeButton");
    const gameTimeButton = document.getElementById("gameTimeButton");
    const startingPlayerButton = document.getElementById("startingPlayerButton");

    document.querySelectorAll("[id^='turnTimeButtonChoice']").forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            turnTimeButton.innerHTML = this.innerHTML;
        });
    });

    document.querySelectorAll("[id^='gameTimeButtonChoice']").forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            gameTimeButton.innerHTML = this.innerHTML;
        });
    });

    document.querySelectorAll("[id^='startingPlayerButtonChoice']").forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            startingPlayerButton.innerHTML = this.innerHTML;
        });
    });
});

