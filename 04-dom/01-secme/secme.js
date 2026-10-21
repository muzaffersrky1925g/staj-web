// DOM Elementlerini Seçme
const baslik = document.getElementById("baslik");
const aciklama = document.querySelector(".aciklama");
const degistirBtn = document.getElementById("degistirBtn");

// Konsola yazdırıp kontrol edelim
console.log("Seçilen başlık:", baslik.innerText);

// Butona tıklanınca DOM elemanlarını değiştirme
degistirBtn.addEventListener("click", () => {
  baslik.innerText = "DOM Manipülasyonu Başarılı! 🚀";
  baslik.style.color = "#34d399";
  aciklama.innerText =
    "JavaScript ile içerik ve stiller anlık olarak değiştirildi.";
});
