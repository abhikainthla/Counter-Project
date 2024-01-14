
let addButton = document.getElementById("increment");
let removeButton = document.getElementById("decrement");
let resetButton = document.getElementById("reset");
let num =0;
let countValue = 0;

function updateCount() {
  document.getElementById('number').innerText = countValue;
}

function increase() {
  countValue++;
  updateCount();
}

function decrease() {
  countValue--;
  updateCount();
}

function reset() {
  countValue = 0;
  updateCount();
}
addButton.addEventListener("click", increase);
removeButton.addEventListener("click", decrease);
resetButton.addEventListener("click", reset);
