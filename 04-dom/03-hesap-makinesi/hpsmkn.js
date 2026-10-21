// Elementleri Seçme
const sayi1 = document.getElementById("sayi1");
const sayi2 = document.getElementById("sayi2");
const toplaBtn = document.getElementById("toplaBtn");
const cikarBtn = document.getElementById("cikarBtn");
const carpBtn = document.getElementById("carpBtn");
const bolBtn = document.getElementById("bolBtn");
const sonucSpan = document.getElementById("sonuc");

// Toplama İşlemi
toplaBtn.addEventListener("click", () => {
  const s1 = Number(sayi1.value);
  const s2 = Number(sayi2.value);
  sonucSpan.innerText = s1 + s2;
});

// Çıkarma İşlemi
cikarBtn.addEventListener("click", () => {
  const s1 = Number(sayi1.value);
  const s2 = Number(sayi2.value);
  sonucSpan.innerText = s1 - s2;
});

// Çarpma İşlemi
carpBtn.addEventListener("click", () => {
  const s1 = Number(sayi1.value);
  const s2 = Number(sayi2.value);
  sonucSpan.innerText = s1 * s2;
});

// Bölme İşlemi
bolBtn.addEventListener("click", () => {
  const s1 = Number(sayi1.value);
  const s2 = Number(sayi2.value);

  // Sıfıra bölünme kontrolü
  if (s2 === 0) {
    sonucSpan.innerText = "Hata! Sıfıra bölünemez.";
    return;
  }

  sonucSpan.innerText = s1 / s2;
});
