// 1) Element Seçimi (HTML etiket adlarıyla seçiyoruz)
const baslik = document.querySelector("h1");
const aciklama = document.querySelector("p");
const buton = document.getElementById("renkDegistirBtn");

console.log(baslik.innerText); // "🚀 JavaScript Çalışma Alanı"

// 2) Elementin içeriğini değiştirme
baslik.innerText = "✨ DOM Manipülasyonu Başladı!";
baslik.style.color = "#f43f5e"; // Başlığın rengini pembe/kırmızı yap

// 3) Olay Dinleyicileri (Event Listeners) - Kullanıcı etkileşimi
buton.addEventListener("click", () => {
  aciklama.innerText = "Butona tıklandı ve metin JavaScript ile değiştirildi!";
  aciklama.style.color = "#34d399";
});
