const button = document.querySelectorAll(".buttons");

const body = document.querySelector("body");

button.forEach((but) => {
  but.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
