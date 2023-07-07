import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';
import { dbURL } from '../shopping-cart/function'

// location of the database
const appSettings = {
  databaseURL: dbURL
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingItemsInDB = ref(database, "ShoppingList")

const input = document.getElementById("input-field");
const button = document.getElementById("add-button");
const shoppingList = document.getElementById("shopping-list");

button.addEventListener("click", () =>{
  const inputValue = input.value;

  // Push data to the database
  // push(shoppingItemsInDB, inputValue)

  shoppingList.innerHTML += `<li>${inputValue}</li>`


  console.log(`${inputValue} is added to databse...`);
})