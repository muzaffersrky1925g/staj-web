function selamVer(isim) {
  return `Merhaba ${isim}!`;
}
console.log(selamVer("Ali"));

function kdvliFiyat(fiyat, oran = 0.2) {
  return fiyat + fiyat * oran;
}
console.log(kdvliFiyat(100));
console.log(kdvliFiyat(100, 0.1));

const kareAl = (sayi) => {
  return sayi * sayi;
};

const kupAl = (sayi) => sayi * sayi * sayi;

console.log(kareAl(4), kupAl(3)); // 16 27

function ikiKezCalistir(islem) {
  islem();
  islem();
}

ikiKezCalistir(() => console.log("Çalıştım!"));
