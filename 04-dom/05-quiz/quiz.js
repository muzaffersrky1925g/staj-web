// Sorular Dizisi
const sorular = [
  {
    soru: "JavaScript'te bir değişken hangi anahtar kelime ile tanımlanmaz?",
    secenekler: ["var", "let", "const", "define"],
    dogruCevap: 3,
  },
  {
    soru: "Hangisi bir DOM seçici metodu değildir?",
    secenekler: [
      "getElementById",
      "querySelector",
      "getElementByCSS",
      "getElementsByClassName",
    ],
    dogruCevap: 2,
  },
  {
    soru: "JavaScript'te konsola yazdırmak için hangi komut kullanılır?",
    secenekler: ["print()", "console.log()", "echo()", "write()"],
    dogruCevap: 1,
  },
];

// Elementleri Seçme
const soruMetni = document.getElementById("soruMetni");
const seceneklerAlani = document.getElementById("seceneklerAlani");
const quizAlani = document.getElementById("quizAlani");
const sonucAlani = document.getElementById("sonucAlani");
const skorMetni = document.getElementById("skorMetni");
const tekrarBaslaBtn = document.getElementById("tekrarBaslaBtn");

let aktifSoruIndex = 0;
let skor = 0;

// Soruyu Ekrana Getirme Fonksiyonu
function soruyuGetir() {
  const mevcutSoru = sorular[aktifSoruIndex];
  soruMetni.innerText = `${aktifSoruIndex + 1}. ${mevcutSoru.soru}`;

  // Önceki şıkları temizle
  seceneklerAlani.innerHTML = "";

  // Yeni şıkları döngüyle oluştur ve ekle
  mevcutSoru.secenekler.forEach((secenek, index) => {
    const btn = document.createElement("button");
    btn.innerText = secenek;
    btn.classList.add("secenek");

    // Şıkka tıklandığında çalışacak olay
    btn.addEventListener("click", () => cevabiSec(index));
    seceneklerAlani.appendChild(btn);
  });
}

// Cevap Seçildiğinde Çalışacak Fonksiyon
function cevabiSec(secilenIndex) {
  const mevcutSoru = sorular[aktifSoruIndex];

  // Doğru cevap kontrolü (Doğru ise puanı artır)
  if (secilenIndex === mevcutSoru.dogruCevap) {
    skor += 10;
  }

  aktifSoruIndex++;

  // Sorular bitmediyse sonraki soruya geç, bittiyse quizi bitir
  if (aktifSoruIndex < sorular.length) {
    soruyuGetir();
  } else {
    quiziBitir();
  }
}

// Quizi Bitirme Fonksiyonu
function quiziBitir() {
  quizAlani.classList.add("gizli");
  sonucAlani.classList.remove("gizli");
  skorMetni.innerText = `Toplam Skorun: ${skor} / ${sorular.length * 10}`;
}

// Yeniden Başla Butonu
tekrarBaslaBtn.addEventListener("click", () => {
  aktifSoruIndex = 0;
  skor = 0;
  quizAlani.classList.remove("gizli");
  sonucAlani.classList.add("gizli");
  soruyuGetir();
});

// Uygulama ilk açıldığında ilk soruyu yükle
soruyuGetir();
