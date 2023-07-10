const shoppingList = document.getElementById("shopping-list");
const input = document.getElementById("input-field");

const deleteInput = () => {
  return input.value = "";
}

const printShoppingList = (input, keys) => {
  const newElement = document.createElement("li");
  newElement.textContent = input;
  shoppingList.append(newElement);

  newElement.addEventListener("dblclick", () => {
    console.log(keys)
  })

}

const clearShoppingList = () => {
  return shoppingList.innerHTML = "";
}

export { deleteInput, printShoppingList, clearShoppingList };
