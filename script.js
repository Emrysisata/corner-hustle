// script.js

function checkFirstStart() {
  const firstStartState = localStorage.getItem("cornerHustleSolanaTradingAppFirstStartState");
  if (firstStartState === "already") {
    window.location.href = "navigation.html"; 
  } else {
    // Set the first start state in local storage
    localStorage.setItem("cornerHustleSolanaTradingAppFirstStartState", "already"); 
  }
}

// ... rest of your JavaScript code ...

// Call the checkFirstStart function on page load
window.onload = checkFirstStart;
