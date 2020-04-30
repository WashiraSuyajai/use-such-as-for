// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const users = ["Jacob", "Brad", "Newt"]

//for
 for (let i=0;i<users.length;i++) {
   console.log(i)
 }
// 0 1 2

//for-in
for (let i in users) {
   console.log(i)
 }
// "0" "1" "2"

//for-of
for (let i of users) {
   console.log(i)
 }
// "Jacob" "Brad" "Newt"

//forEach
users.forEach((_, i) => {
   console.log(i)
 })
// 0 1 2

//forEach
users.forEach((i) => {
   console.log(i)
 })
// "Jacob" "Brad" "Newt"