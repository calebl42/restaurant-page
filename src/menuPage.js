function menuPage() {
  let content = document.querySelector("#content");
  content.innerHTML = "";
  let menuImage = document.createElement("img");

  menuImage.src = "https://marketplace.canva.com/EAFwsZdqo0c/1/0/1131w/canva-cream-brown-watercolor-bakery-menu-tduWQYeZKh0.jpg";
  menuImage.id = "menu-image";

  content.appendChild(menuImage);
}

export default menuPage;