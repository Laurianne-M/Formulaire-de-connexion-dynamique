const bonjour = document.querySelector(".bonjour");
const welcome = document.querySelector(".welcome");
const bienvenue = document.querySelector(".bienvenue");

cta3.addEventListener("click", () => {
  welcome.style.display = "none";
  bonjour.style.display = "revert";
  bienvenue.style.left = "51%";
});

cta4.addEventListener("click", () => {
  bonjour.style.display = "none";
  welcome.style.display = "revert";
  bienvenue.style.left = "18%";
});
