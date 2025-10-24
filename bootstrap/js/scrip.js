const form = document.getElementById("questionForm");
const questionList = document.getElementById("questionList");

const avatars = [
  "https://source.unsplash.com/48x48/?face",
  "https://source.unsplash.com/48x48/?person",
  "https://source.unsplash.com/48x48/?avatar",
  "https://source.unsplash.com/48x48/?user",
];

const fakeAnswers = {
  iPhone: "📱 iPhone hỗ trợ sạc nhanh, Face ID và camera chất lượng cao. Dòng Pro Max là lựa chọn tốt nhất nếu bạn thích chụp ảnh.",
  Samsung: "📷 Samsung dòng S có màn hình AMOLED và camera zoom 100x. Dòng Z Fold cũng rất thú vị nếu bạn thích công nghệ gập.",
  Xiaomi: "⚡ Xiaomi nổi bật với cấu hình mạnh, giá tốt. Dòng Redmi Note rất phù hợp cho người dùng phổ thông."
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const product = document.getElementById("productSelect").value;
  const name = document.getElementById("userName").value.trim();
  const question = document.getElementById("questionInput").value.trim();
  const avatar = avatars[Math.floor(Math.random() * avatars.length)];
  const answer = fakeAnswers[product];

  if (name && question) {
    const card = document.createElement("div");
    card.className = "question-card";

    card.innerHTML = `
      <div class="user-info">
        <div class="avatar" style="background-image: url('${avatar}')"></div>
        <strong>${name}</strong> hỏi về <em>${product}</em>
      </div>
      <div class="question-content">
        <h4>Câu hỏi:</h4>
        <p>${question}</p>
        <div class="answer"><strong>Phản hồi:</strong> ${answer}</div>
      </div>
    `;

    questionList.prepend(card);
    form.reset();
  }
});