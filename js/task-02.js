const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");

const addIngedients = ingredients.map(ingredient => {
  const ingredientsRef = document.createElement("li");
  ingredientsRef.textContent = ingredient;
  ingredientsRef.classList.add("item");

  return ingredientsRef;
})

list.append(...addIngedients);

