const shoppingList = document.getElementById("shopping-list");
const input = document.getElementById("input-field");

const deleteInput = () => {
  input.value = "";
}

const addShoppingListItem = (input) => {
  return shoppingList.innerHTML += `<li>${input}</li>`
}

export { deleteInput, addShoppingListItem };
