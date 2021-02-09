const flipTheBurger = () => {
  const bulmaBurger = document.querySelector(".navbar-burger");
  const bulmaMenu = document.querySelector(".navbar-menu");
  bulmaBurger.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(bulmaMenu.classList);
    bulmaBurger.classList.toggle("is-active");
    bulmaMenu.classList.toggle("is-active");
  });
};
flipTheBurger();
// const flipTheArrow = () => {
//   const bulmaArrow = document.querySelector(".navbar-burger");
//   const bulmaMenu = document.querySelector(".navbar-menu");
//   bulmaBurger.addEventListener("click", (e) => {
//     e.stopPropagation();
//     bulmaBurger.classList.toggle("is-active");
//     bulmaMenu.classList.toggle("is-active");
//   });
// };
// flipTheBurger();
