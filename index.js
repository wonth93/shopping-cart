import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';

const db = {
  databaseURL: "https://shopping-cart-e321d-default-rtdb.firebaseio.com/"
}

const app = initializeApp(db);

console.log(app)

const input = document.getElementById("input-field");
const button = document.getElementById("add-button");

button.addEventListener("click", () =>{
  const inputValue = input.value;
  console.log(inputValue);
})