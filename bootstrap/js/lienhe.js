const form = document.getElementById("form");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  message.classList.remove("hidden");
  form.reset();
  setTimeout(() => {
    message.classList.add("hidden");
  }, 5000);
});