const hamberger = document.querySelector(".hamberger"); // سيختار أول عنصر يحمل هذا الكلاس
const headerList = document.querySelector(".header-list");
hamberger.addEventListener("click", () => {
  headerList.classList.toggle("active");
});
