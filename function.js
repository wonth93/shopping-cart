const shoppingList = document.getElementById("shopping-list");
const input = document.getElementById("input-field");

const deleteInput = () => {
  return input.value = "";
}

const printShoppingList = (input) => {
  return shoppingList.innerHTML += `<li class="shopping-items">${input}</li>`
}

const clearShoppingList = () => {
  return shoppingList.innerHTML = "";
}

export { deleteInput, printShoppingList, clearShoppingList };
