import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';
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

const deleteInput = () => {
  return input.value = "";
}

const clearShoppingList = () => {
  return shoppingList.innerHTML = "";
}

const printShoppingList = (input, keys) => {
  const newElement = document.createElement("li");
  newElement.textContent = input;
  shoppingList.append(newElement);

  // remove shopping items when double click
  newElement.addEventListener("dblclick", () => {
    const shoppingItemsDBLocation = ref(database, `ShoppingList/${keys}`);
    console.log(`${input} is deleted from the databse...`);
    remove(shoppingItemsDBLocation);
  })
}

// Fetching database items
onValue(shoppingItemsInDB, (db) => {
  clearShoppingList();
  console.log(db.exists());

  if (db.exists()) {
    const objDB = Object.entries(db.val());
    
    objDB.forEach((item) => {
      const key = item[0];
      const shoppingListItem = item[1];
      printShoppingList(shoppingListItem, key);
    });
  } else {
    shoppingList.innerHTML = `<p style="color:red;">No items here...yet</p>`;
  }

});

button.addEventListener("click", () =>{
  const inputValue = input.value;

  // Push data to the database
  push(shoppingItemsInDB, inputValue);

  console.log(`${inputValue} is added to databse...`);

  deleteInput();
  
})
