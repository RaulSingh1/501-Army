console.log("Kontaktsiden er lastet inn!");
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
 event.preventDefault();
 const name = document.getElementById("name").value;
 const email = document.getElementById("email").value;
 const message = document.getElementById("message").value;
 console.log("Navn:", name);
 console.log("E-post:", email);
 console.log("Melding:", message);
}); 
