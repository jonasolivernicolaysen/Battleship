document.addEventListener("DOMContentLoaded", function () {
    const turnTimeButton = document.getElementById("turnTimeButton");
    const gameTimeButton = document.getElementById("gameTimeButton");
    const startingPlayerButton = document.getElementById("startingPlayerButton");

    const turnTimeValue = document.getElementById("turnTimeValue");
    const gameTimeValue = document.getElementById("gameTimeValue");
    const startingPlayerValue = document.getElementById("startingPlayerValue");
    
    function setupDropdownMenu(buttonId, choicePrefix, updateField) {
        document.querySelectorAll(`[id^='${choicePrefix}']`).forEach(item => {
            item.addEventListener("click", function(e) {
                e.preventDefault();
                buttonId.textContent = this.textContent;
                updateField.textContent = this.textContent;
            });
        });
    };
    setupDropdownMenu(turnTimeButton, "turnTimeButtonChoice", turnTimeValue);
    setupDropdownMenu(gameTimeButton, "gameTimeButtonChoice", gameTimeValue);
    setupDropdownMenu(startingPlayerButton, "startingPlayerButtonChoice", startingPlayerValue);
});

/*
document.getElementById("createButton").addEventListener("click", function(e) {
    e.preventDefault();
});

*/