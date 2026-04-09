function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

function checkCookie() {
  // ALWAYS ask every time the page loads
  let username = prompt("Enter a value for the cookie:", "");

  if (username !== null && username.trim() !== "") {
    // Save new cookie value
    setCookie("username", username.trim(), 365);

    // Display it
    document.getElementById("message").textContent =
      "Saved cookie value: " + username.trim();
  } else {
    document.getElementById("message").textContent =
      "No cookie value entered.";
  }
}