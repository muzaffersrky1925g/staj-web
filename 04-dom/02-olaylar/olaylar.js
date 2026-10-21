// 1) Elementleri Seçme
const kullaniciInput = document.getElementById("kullaniciInput");
const canliMetin = document.getElementById("canliMetin");
const etkilesimKutusu = document.getElementById("etkilesimKutusu");

// 2) Input Olayı (Kullanıcı yazdıkça anlık olarak ekrana yansıtma)
kullaniciInput.addEventListener("input", (e) => {
  canliMetin.innerText = e.target.value;
});

// 3) Fare Kutunun Üzerine Geldiğinde (mouseenter)
etkilesimKutusu.addEventListener("mouseenter", () => {
  etkilesimKutusu.style.backgroundColor = "#0284c7";
  etkilesimKutusu.innerText = "Fare kutunun üzerinde! 🎯";
});

// 4) Fare Kutudan Ayrıldığında (mouseleave)
etkilesimKutusu.addEventListener("mouseleave", () => {
  etkilesimKutusu.style.backgroundColor = "#334155";
  etkilesimKutusu.innerText = "Üzerime Fareyi Getir veya Tıkla!";
});

// 5) Kutuya Tıklandığında (click)
etkilesimKutusu.addEventListener("click", () => {
  etkilesimKutusu.style.backgroundColor = "#10b981";
  etkilesimKutusu.innerText = "Tıklandı! Harika! 🎉";
});
