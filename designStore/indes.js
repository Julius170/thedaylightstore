const menuButton = document.getElementById("bar");
const menu = document.getElementById("header__navbar");
const navLink = document.querySelectorAll(".navbar_links");

menuButton.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
});


// const removeActive = () => {
//   navLink.forEach((y) => {
//     if (x.classList.contains(y)) {
//       x.classList.remove("active");
//     }
//   });
// };

navLink.forEach((x) => {
  x.addEventListener("click", () => {
    menu.classList.contains("show") ? menu.classList.remove("show") : 0;
    // removeActive();

    // x.classList.add("active");
  });
});
