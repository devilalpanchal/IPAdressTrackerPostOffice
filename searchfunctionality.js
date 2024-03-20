

const search = document.querySelector(".search");
const main = document.querySelector(".main");
search.addEventListener("keyup", () => {
  const searchTerm = search.value.trim().toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const name = card.querySelector(".br").textContent.toLowerCase();
    if (name.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
