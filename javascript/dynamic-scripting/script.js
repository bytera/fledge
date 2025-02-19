const button = document.querySelector("button");
button.addEventListener("click", updateName);
button.addEventListener("click", createParagraph);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "New player created!";
  document.body.appendChild(para);
}
