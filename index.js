import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

// location of the database
const appSettings = {
  databaseURL: "https://shopping-cart-e321d-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingItemsInDB = ref(database, "ShoppingList")

const input = document.getElementById("input-field");
const button = document.getElementById("add-button");

button.addEventListener("click", () =>{
  const inputValue = input.value;

  // Push data to the database
  push(shoppingItemsInDB, inputValue)

  console.log(`${inputValue} is added to databse...`);
})