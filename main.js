const filter_buttons = document.querySelectorAll(".filter-button");
const moto_cards = document.querySelectorAll(".posts .card");
const like_buttons = document.querySelectorAll(".posts .card .like");

function displayCards(filter) {
  moto_cards.forEach((card) => {
    card.style.display = "none";
    if (filter == "all" || card.dataset.category == filter) {
      card.style.display = "block"
    }
  });
}

filter_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    filter_buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    displayCards(button.dataset.filter);
  });
});

like_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.parentElement.dataset.id;

      document.cookie = `liked_posts${id}=${id};`; 
  
    alert("Ви лайкнули цей пост! \n Зможете переглянути його у вашому профілі.");
  });
});
