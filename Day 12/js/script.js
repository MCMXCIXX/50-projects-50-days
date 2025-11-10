const faqToggle = document.querySelectorAll(".faq-toggle");

faqToggle.forEach((faq) => {
  faq.addEventListener("click", () => {
    console.log(faq.parentElement);
    faq.parentElement.classList.toggle("active");
  });
});
