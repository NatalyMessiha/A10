function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let username = getCookie("username");
  let message = document.getElementById("message");

  if (username !== "") {
    message.textContent = "Saved cookie value: " + username;
  } else {
    username = prompt("Please enter a value for the cookie:", "");
    if (username !== null && username.trim() !== "") {
      setCookie("username", username.trim(), 365);
      message.textContent = "Cookie saved. Reload the page to see it displayed.";
    } else {
      message.textContent = "No cookie was entered.";
    }
  }
}