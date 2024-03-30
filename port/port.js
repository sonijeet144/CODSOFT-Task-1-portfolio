content = document.getElementById("contact");

function toggleDisplay() {
  if (contact.style.display === "none") {
    contact.style.display = "block";
  } else {
    contact.style.display = "none";
  }
}

button = document.getElementsByClassName("btn-contact");
button.addEventListener("click", toggleDisplay);
