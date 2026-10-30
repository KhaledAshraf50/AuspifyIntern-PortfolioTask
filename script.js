const hamberger = document.querySelector(".hamberger"); // سيختار أول عنصر يحمل هذا الكلاس
const headerList = document.querySelector(".header-list");
hamberger.addEventListener("click", () => {
  headerList.classList.toggle("active");
});

const contactBtn = document.querySelector(".submit");
console.log(contactBtn);
contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
