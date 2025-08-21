// Carrossel simples
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");
setInterval(() => {
  testimonials[index].classList.remove("active");
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add("active");
}, 3000);

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";

    const img = btn.querySelector("img");
    if (img) {
      img.style.transform =
        img.style.transform === "rotate(180deg)"
          ? "rotate(0deg)"
          : "rotate(180deg)";
    }
  });
});

// Formulário de newsletter
document.getElementById("newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg");
  if (/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    msg.textContent = "Inscrição realizada com sucesso!";
    msg.style.color = "var(--green)";
  } else {
    msg.textContent = "Por favor, insira um e-mail válido.";
    msg.style.color = "red";
  }
});
