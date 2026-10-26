// Elementleri Seçme
const gorevInput = document.getElementById("gorevInput");
const ekleBtn = document.getElementById("ekleBtn");
const gorevListesi = document.getElementById("gorevListesi");

// Ekle Butonuna Tıklandığında
ekleBtn.addEventListener("click", () => {
  const gorevMetni = gorevInput.value.trim();

  // Boş kontrolü
  if (gorevMetni === "") {
    alert("Lütfen geçerli bir görev yazın!");
    return;
  }

  // 1) Yeni bir <li> elementi oluştur
  const yeniLi = document.createElement("li");
  yeniLi.innerText = gorevMetni;

  // 2) Silme butonu oluştur
  const silBtn = document.createElement("button");
  silBtn.innerText = "Sil";

  // Sil butonuna tıklandığında görevi listeden kaldır
  silBtn.addEventListener("click", () => {
    yeniLi.remove();
  });

  // 3) Sil butonunu <li> içine ekle
  yeniLi.appendChild(silBtn);

  // 4) <li> elementini ana <ul> listesine ekle
  gorevListesi.appendChild(yeniLi);

  // Input alanını temizle ve odaklan
  gorevInput.value = "";
  gorevInput.focus();
});
