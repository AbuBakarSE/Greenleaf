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


let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // if at very top → always show navbar
  if (currentScroll <= 10) {
    navbar.classList.remove("-translate-y-full");
    navbar.classList.add("translate-y-0");
    return;
  }

  if (currentScroll > lastScroll) {
    // scrolling DOWN → hide navbar
    navbar.classList.remove("translate-y-0");
    navbar.classList.add("-translate-y-full");
  } else {
    // scrolling UP → show navbar
    navbar.classList.remove("-translate-y-full");
    navbar.classList.add("translate-y-0");
  }

  lastScroll = currentScroll;
});

