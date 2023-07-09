import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';
import { dbURL, deleteInput, addShoppingListItem } from '../shopping-cart/function'

// location of the database
const appSettings = {
  databaseURL: dbURL
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingItemsInDB = ref(database, "ShoppingList");

const input = document.getElementById("input-field");
const button = document.getElementById("add-button");
const shoppingList = document.getElementById("shopping-list");

// onValue(shoppingItemsInDB, (db) => {
//   shoppingList.innerHTML = "";
//   db.forEach((value) => {
//     const shoppingListItem = value.val();
//     shoppingList.innerHTML += `<li>${shoppingListItem}</li>`;
//   })
// });

button.addEventListener("click", () =>{
  const inputValue = input.value;

  // Push data to the database
  // push(shoppingItemsInDB, inputValue);

  addShoppingListItem(inputValue);

  console.log(`${inputValue} is added to databse...`);

  deleteInput();
  
})
