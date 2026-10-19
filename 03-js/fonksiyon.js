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

function notDegerlendir(not) {
  if (not >= 85) {
    return "Pekiyi";
  } else if (not >= 70) {
    return "İyi";
  } else if (not >= 50) {
    return "Geçer";
  } else {
    return "Kaldı";
  }
}

console.log(notDegerlendir(92)); // Pekiyi
console.log(notDegerlendir(70)); // İyi
console.log(notDegerlendir(50)); // Geçer
console.log(notDegerlendir(49)); // Kaldı

function ortalama(a, b, c) {
  const sonuc = (a + b + c) / 3;
  return sonuc.toFixed(2);
}

console.log(ortalama(70, 80, 90));
console.log(ortalama(3, 4, 5));
console.log(ortalama(1, 2, 2));
console.log(ortalama(100, 95, 98));

function sifreGuclumu(sifre) {
  if (sifre.length >= 8 && /[0-9]/.test(sifre)) {
    return true;
  } else {
    return false;
  }
}

console.log(sifreGuclumu("abc12")); // false (çok kısa)
console.log(sifreGuclumu("abcdefgh")); // false (rakam yok)
console.log(sifreGuclumu("abcdefg1")); // true
console.log(sifreGuclumu("Sifre12345")); // true

function tersCevir(metin) {
  let sonuc = "";

  for (let i = metin.length - 1; i >= 0; i--) {
    sonuc += metin[i];
  }

  return sonuc;
}

console.log(tersCevir("kayseri"));
console.log(tersCevir("merhaba"));
console.log(tersCevir("ali"));
console.log(tersCevir("a"));

function faktoriyel(n) {
  let sonuc = 1;

  for (let i = 1; i <= n; i++) {
    sonuc *= i;
  }

  return sonuc;
}

console.log(faktoriyel(5));
console.log(faktoriyel(3));
console.log(faktoriyel(10));
console.log(faktoriyel(1));
console.log(faktoriyel(0));
