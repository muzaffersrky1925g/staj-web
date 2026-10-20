// 1) Elementleri Seçme
const gorevInput = document.getElementById("gorevInput");
const ekleBtn = document.getElementById("ekleBtn");
const gorevListesi = document.getElementById("gorevListesi");

// 2) Ekle butonuna tıklandığında çalışacak fonksiyon
ekleBtn.addEventListener("click", () => {
  const gorevMetni = gorevInput.value.trim(); // Girilen metni al (boşlukları temizle)

  // Eğer input boşsa uyarı ver ve çık
  if (gorevMetni === "") {
    alert("Lütfen boş bir görev girmeyin!");
    return;
  }

  // 3) Yeni bir li (liste elemanı) oluşturma
  const yeniLi = document.createElement("li");
  yeniLi.innerText = gorevMetni;

  // Listeye biraz şık görünüm ve stil ekleyelim
  yeniLi.style.padding = "8px 12px";
  yeniLi.style.margin = "5px 0";
  yeniLi.style.background = "#1e293b";
  yeniLi.style.borderRadius = "6px";
  yeniLi.style.border = "1px solid #334155";
  yeniLi.style.display = "flex";
  yeniLi.style.justifyContent = "space-between";
  yeniLi.style.alignItems = "center";

  // 4) Görevi silmek için bir silme butonu ekleyelim
  const silBtn = document.createElement("button");
  silBtn.innerText = "Sil";
  silBtn.style.background = "#f43f5e";
  silBtn.style.color = "white";
  silBtn.style.border = "none";
  silBtn.style.borderRadius = "4px";
  silBtn.style.padding = "4px 8px";
  silBtn.style.cursor = "pointer";

  // Sil butonuna tıklandığında ilgili li elementini silme
  silBtn.addEventListener("click", () => {
    yeniLi.remove();
  });

  // Sil butonunu li içine ekle
  yeniLi.appendChild(silBtn);

  // 5) Oluşturduğumuz li elementini ana ul listesinin içine ekle
  gorevListesi.appendChild(yeniLi);

  // Input alanını temizle ve odaklan
  gorevInput.value = "";
  gorevInput.focus();
});
