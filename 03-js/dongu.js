for (let i = 1; i <= 5; i++) {
  console.log(`${i}. tur`);
}
let bakiye = 100;
while (bakiye > 0) {
  bakiye -= 30;
  console.log("Kalan:", bakiye);
}
const sehirler = ["Kayseri", "Ankara", "İzmir"];
for (const sehir of sehirler) {
  console.log(sehir);
}
for (let sayi = 1; sayi <= 100; sayi++) {
  if (sayi % 3 === 0 && sayi % 5 === 0) {
    console.log("FizzBuzz");
  } else if (sayi % 3 === 0) {
    console.log("Fizz");
  } else if (sayi % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(sayi);
  }
}
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
let toplam = 0;

for (let sayi = 2; sayi <= 50; sayi += 2) {
  toplam += sayi;
}

console.log(toplam);

function artikYilMi(yil) {
  if (yil % 400 === 0) {
    return true;
  } else if (yil % 100 === 0) {
    return false;
  } else if (yil % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const yillar = [1900, 2000, 2024, 2026];

for (const yil of yillar) {
  console.log(`${yil}: ${artikYilMi(yil) ? "Artık yıl" : "Artık yıl değil"}`);
}
