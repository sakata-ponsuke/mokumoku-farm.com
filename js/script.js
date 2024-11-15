// ハンバーガーメニュー
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".sp-nav").classList.toggle("open");
  document.body.classList.toggle("hamburger-active");
});
