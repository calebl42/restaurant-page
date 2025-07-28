import "./styles.css";
import homePage from "./homePage.js";
import menuPage from "./menuPage.js";

homePage();
let homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => {
  homePage();
});

let menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () => {
  menuPage();
});