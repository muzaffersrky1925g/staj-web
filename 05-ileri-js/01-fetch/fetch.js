const veriCekBtn = document.getElementById("veriCekBtn");
const kullaniciListesi = document.getElementById("kullaniciListesi");

veriCekBtn.addEventListener("click", () => {
  // Açık kaynaklı test API'sinden kullanıcı verilerini çekiyoruz
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      kullaniciListesi.innerHTML = ""; // Listeyi sıfırla

      data.forEach((kullanici) => {
        const li = document.createElement("li");
        li.innerText = `${kullanici.name} (${kullanici.email})`;
        kullaniciListesi.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Veri çekme hatası:", error);
      alert("Veriler yüklenirken bir hata oluştu!");
    });
});
