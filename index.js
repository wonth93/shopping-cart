import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';
import { deleteInput, printShoppingList, clearShoppingList } from '../shopping-cart/function';
import { dbURL } from './variable';

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

onValue(shoppingItemsInDB, (db) => {
  clearShoppingList();
  db.forEach((value) => {
    const shoppingListItem = value.val();
    printShoppingList(shoppingListItem);
  })
});

button.addEventListener("click", () =>{
  const inputValue = input.value;

  // Push data to the database
  push(shoppingItemsInDB, inputValue);

  // printShoppingList(inputValue);

  console.log(`${inputValue} is added to databse...`);

  deleteInput();
  
})
