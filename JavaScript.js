const submitButton = document.querySelector(".submitButton");
const radios = document.querySelectorAll(".radios");
const ratingForm = document.getElementById("ratingForm");
const submittedSection = document.querySelector(".submitted");
const countNum = document.querySelector(".CountNum");

let chosenNumber = 0;

radios.forEach((rd) => {
  rd.addEventListener("click", (e) => {
    chosenNumber = e.target.innerHTML;
    countNum.innerHTML = `You selected ${chosenNumber} out of 5`;
  });
});

submitButton.addEventListener("click", function (event) {
  if (chosenNumber === 0) {
    event.preventDefault();
    alert("Please select a number before submitting.");
  } else {
    ratingForm.style.display = "none";
    submittedSection.style.display = "flex";
    event.preventDefault();
  }
});
