// JavaScript

// Function to toggle login/logout button text
function toggleButtonText(btnId, newText) {
    var button = document.getElementById(btnId);
    if (button) {
        button.textContent = newText;
        if (newText.toLowerCase() === "logout") {
            button.style.backgroundColor = "red";
        } else {
            button.style.backgroundColor = ""; // Reset to default background color
        }
    }
}


// Function to disable button
function disableButton(btnId) {
    var button = document.getElementById(btnId);
    if (button) {
        button.style.display = "none";
    }
}

