const $ = document;
let menu = $.querySelector(".menu");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  menu.style.display = "flex";
  menu.style.top = event.pageY + "px";
  menu.style.left = event.pageX + "px";
});
document.addEventListener("click", () => {
  menu.style.display = "none";
});
