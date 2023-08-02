"use client";

const selector = ".transition-onload-prevent";
const transitions = document.querySelectorAll(selector);

window.addEventListener("DOMContentLoaded", () => {
  transitions.forEach((el) => el.classList.remove(selector));
});
