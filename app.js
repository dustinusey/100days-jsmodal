const overlay = document.getElementById("overlay");
const login = document.getElementById("login");
const overlayCloseBtn = document.querySelector(".group p:last-of-type");

function handleOnClick(event) {
  if (event.target === login) {
    overlay.style.display = "grid";
  } else if (event.target === overlayCloseBtn) {
    overlay.style.display = "none";
  }
}

login.addEventListener("click", handleOnClick);
overlay.addEventListener("click", handleOnClick);
