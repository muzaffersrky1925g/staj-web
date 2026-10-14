// Konsola selamlama mesajı yazdıralım
console.log("JavaScript dosyası başarıyla bağlandı!");

// HTML elementlerini seçme
const buton = document.getElementById("tiklama-btn");
const mesaj = document.getElementById("mesaj");

// Butona tıklandığında çalışacak olay (Event Listener)
buton.addEventListener("click", function () {
  mesaj.textContent = "Harika! JavaScript ile metni değiştirdin.";
  mesaj.style.color = "#e74c3c";
  mesaj.style.fontWeight = "bold";
});
