const form = document.getElementById("questionForm");
const input = document.getElementById("questionInput");
const questionsList = document.getElementById("questions");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const questionText = input.value.trim();
  if (questionText !== "") {
    const li = document.createElement("li");
    li.textContent = questionText;
    questionsList.appendChild(li);
    input.value = "";
  }
});