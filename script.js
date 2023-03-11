"use strict";

const disclaimerCheck = document.querySelector("#disclaimer");
const offerToolsCheck = document.querySelector("#offerTools");
const btnSend = document.querySelector(".btn-send");
const locationSelect = document.querySelector("#cityInput");
const dropdownItems = document.querySelectorAll(".dropdown-item");

disclaimerCheck.addEventListener("click", function (event) {
  if (event.target.value) {
    btnSend.classList.toggle("disabled");
  }
});

offerToolsCheck.addEventListener("click", function (event) {
  if (event.target.value) {
    locationSelect.classList.toggle("disabled");
  }
});

dropdownItems.forEach((option) =>
  option.addEventListener("click", function (event) {
    event.preventDefault();
  })
);
