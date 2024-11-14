// ハンバーガーメニュー
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".sp-nav").classList.toggle("open");
  document.body.classList.toggle("hamburger-active");
});

// スライダー
$(document).ready(function () {
  $(".slider").slick({
    infinite: true, // 無限ループ
    slidesToShow: 1, // 表示するスライド数
    slidesToScroll: 1, // スクロールするスライド数
    autoplay: true, // 自動再生
    autoplaySpeed: 5000, // 自動再生のスピード（ミリ秒）
    arrows: true, // 矢印ナビゲーションを表示
    dots: true, // ドットナビゲーションを表示
    centerMode: true, // 画像を中央に配置
    centerPadding: "20%", // 左右の隠れた部分の表示幅
  });
});
