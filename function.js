const shoppingList = document.getElementById("shopping-list");
const input = document.getElementById("input-field");

const deleteInput = () => {
  return input.value = "";
}

const printShoppingList = (input) => {
  return shoppingList.innerHTML += `<li>${input}</li>`
}

const clearShoppingList = () => {
  return shoppingList.innerHTML = "";
}

export { deleteInput, printShoppingList, clearShoppingList };
