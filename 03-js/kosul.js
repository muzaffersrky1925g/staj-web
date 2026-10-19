const not = 72;

if (not >= 85) {
  console.log("Pekiyi");
} else if (not >= 70) {
  console.log("İyi");
} else if (not >= 50) {
  console.log("Geçer");
} else {
  console.log("Kaldı");
}

// Karşılaştırma: her zaman === ve !== kullan
console.log(5 === 5, 5 === "5", 5 == "5"); // true, false, true

// Mantıksal operatörler
const yas = 17;
const ehliyetVar = false;

if (yas >= 18 && ehliyetVar) {
  console.log("Araba kullanabilir");
}

if (yas < 18 || !ehliyetVar) {
  console.log("Araba kullanamaz");
}

// Kısa koşul (ternary): koşul ? doğruysa : yanlışsa
const durum = not >= 50 ? "geçti" : "kaldı";
console.log(durum);
