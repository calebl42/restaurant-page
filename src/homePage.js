function homePage() {
  let content = document.querySelector("#content");
  content.innerHTML = "";
  let heading = document.createElement("h1");
  let subheading = document.createElement("h3");

  heading.textContent = "Pumpkin's Bakery";
  subheading.textContent = "~ the best baked goods in town!"

  content.appendChild(heading);
  content.appendChild(subheading);
}

export default homePage; 