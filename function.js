const shoppingList = document.getElementById("shopping-list");
const input = document.getElementById("input-field");

const deleteInput = () => {
  return input.value = "";
}

const printShoppingList = (input) => {
  const newElement = document.createElement("li");
  newElement.textContent = input;
  shoppingList.append(newElement);
}

const clearShoppingList = () => {
  return shoppingList.innerHTML = "";
}

export { deleteInput, printShoppingList, clearShoppingList };
