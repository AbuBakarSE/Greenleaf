const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

function toggleAnswer(questionNumber) {
  const answer = document.getElementById(`answer-${questionNumber}`);
  const icon = document.getElementById(`icon-${questionNumber}`);
  
  // Toggle visibility
  answer.classList.toggle('hidden');
  
  // Toggle icon between plus and minus
  if (answer.classList.contains('hidden')) {
    icon.classList.remove('fa-minus');
    icon.classList.add('fa-plus');
  } else {
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');
  }
}
