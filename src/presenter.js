import Rover from "./rover.js";
const RoverInstructions = document.querySelector("#RoverInstructions");
const form = document.querySelector("#instructions-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let rover=new Rover(10)
  div.innerHTML = "<p>" + rover.recieveInstructions(RoverInstructions.value) + "</p>";
});
