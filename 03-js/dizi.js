// 1) Diziler (Arrays): Birden fazla veriyi bir arada tutan listeler
const meyveler = ["Elma", "Armut", "Muz", "Çilek"];

console.log(meyveler[0]); // Elma (Diziler 0'dan başlar!)
console.log(meyveler.length); // 4

// Diziye yeni eleman ekleme
meyveler.push("Karpuz");
console.log(meyveler);

// 2) Nesneler (Objects): Bir varlığın özelliklerini key-value (anahtar-değer) olarak tutma
const ogrenci = {
  ad: "Ahmet",
  yas: 22,
  bolum: "Bilgisayar Mühendisliği",
  aktifMi: true,
};

console.log(ogrenci.ad); // Ahmet
console.log(ogrenci["yas"]); // 22

// 3) Modern Dizi Metotları (React'te sürekli kullanılacak!)
const sayilar = [1, 2, 3, 4, 5];

// map: Dizideki her elemanı dönüştürmek için
const ikiKati = sayilar.map((sayi) => sayi * 2);
console.log(ikiKati); // [2, 4, 6, 8, 10]

// filter: Belirli bir koşula uyanları filtrelemek için
const ciftler = sayilar.filter((sayi) => sayi % 2 === 0);
console.log(ciftler); // [2, 4]

function urunleriYazdir(urunler) {
  for (const urun of urunler) {
    console.log(urun);
  }
}

urunleriYazdir(["Elma", "Armut", "Muz", "Çilek"]);

function enBuyukFiyat(fiyatlar) {
  return Math.max(...fiyatlar);
}

console.log(enBuyukFiyat([150, 299, 75, 420, 89])); // 420
console.log(enBuyukFiyat([10, 20, 30])); // 30
console.log(enBuyukFiyat([-5, -2, -9])); // -2
console.log(enBuyukFiyat([99.99, 100.5])); // 100.5

function kullaniciBilgisi(kullanici) {
  return `${kullanici.ad} ${kullanici.soyad}, ${kullanici.yas} yaşında.`;
}

const kisi1 = { ad: "Ahmet", soyad: "Yılmaz", yas: 22 };
const kisi2 = { ad: "Ayşe", soyad: "Demir", yas: 30 };

console.log(kullaniciBilgisi(kisi1));
console.log(kullaniciBilgisi(kisi2));
console.log(kullaniciBilgisi({ ad: "Can", soyad: "Kaya", yas: 18 }));
