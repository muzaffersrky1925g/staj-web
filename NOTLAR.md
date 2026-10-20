# Staj Notlarım

## 30.09.2026

- Yaptım: Programları kurdum, ilk sayfamı yaptım.
- Öğrendim: HTML sayfası head ve body'den oluşur.
- Takıldım: -

# Web Geliştirme Staj Günlüğü

## 1. Ay: HTML Temelleri ve Proje Geliştirme

- **Tarih:** Ekim 2026
- **Çalışma Ortamı:** VS Code, Git & GitHub, Firefox

### 📂 Tamamlanan Modüller ve Dosyalar

1. **`01-html` Modülü:**
   - `index.html` (Temel iskelet ve sayfa içi yönlendirmeler)
   - `metinler.html` (Başlıklar, paragraflar, vurgu etiketleri ve yorum satırları)
   - `listeler.html` (Sıralı/sırasız listeler, harici bağlantılar)
   - `tablo.html` (Ders programı tablosu, `border`, `thead`, `tbody`, `colspan`)
   - `form.html` (Kulüp kayıt formu, `input`, `label`, `required`)
   - `yapi.html` (Anlamsal/semantic yapı: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
   - `images/cay.jpg` (Görsel ve `<figure>` / `<figcaption>` kullanımı)

2. **`proje-1` (1. Ay Sonu Kişisel Portfolyo Projesi):**
   - 3 sayfalık bağımsız web sitesi mimarisi (`index.html`, `hakkimda.html`, `iletisim.html`)
   - Ortak navigasyon (`nav`) menüsü ile sayfalar arası geçiş
   - Hobiler, haftalık staj çalışma takvimi tablosu ve detaylı iletişim formu (`select`, `textarea`)

### 🛠️ Kazanılan Teknik Beceriler

- Git versiyon kontrol sistemi ile düzenli `commit` ve `push` akışı.
- Standart ana dizin (`01-html`, `02-css`, `03-js`, `proje-1`) repository yönetimi.
- W3C HTML5 standartlarına ve erişilebilirlik kurallarına uygun kod yazma disiplini.

## 2. Ay: CSS (Cascading Style Sheets) Modülü

- **Tarih:** Ekim 2026
- **Çalışma Ortamı:** VS Code, Git & GitHub, Firefox

### 📂 Tamamlanan Modüller ve Dosyalar

1. **`02-css` Modülü:**
   - `secici.html` ve `style.css` (Etiket, Class `.`, ID `#` seçicileri ve temel stil tanımları)
   - `kutu.html` (Box Model yapısı: Content, Padding, Border, Margin ve `box-sizing: border-box`)
   - `flex.html` (Flexbox ile esnek yerleşim, `display: flex`, `justify-content`, `align-items`, `gap`)
   - `responsive.html` (Media Queries `@media` ile ekran boyutuna göre dinamik tasarım değişimi)

### 🛠️ Kazanılan Teknik Beceriler

- Harici CSS dosyalarını HTML projelerine bağlama ve seçici önceliklerini yönetme.
- Sayfa yerleşimlerini (layout) modern Flexbox mimarisiyle kurma.
- Farklı cihaz boyutlarına (masaüstü, tablet, mobil) uyumlu duyarlı (responsive) tasarımlar geliştirme.

## Proje-1 (Ay Sonu Projesi) - Tamamlandı

- **CSS Mimarisi ve Bağlantısı:** `proje-1/css/style.css` dosyası oluşturuldu ve tüm HTML sayfalarına (`index.html`, `hakkimda.html`, `iletisim.html`) `<link>` etiketiyle bağlandı.
- **Global Stiller ve Değişkenler:** `:root` yapısı ile renk paleti ve global değişkenler tanımlandı; `box-sizing: border-box` ve `body` tipografi ayarları yapıldı.
- **Header ve Navigasyon:**
  - `sticky` pozisyonlandırma ile yapışkan header oluşturuldu.
  - Flexbox kullanılarak menü yatay hizalandı ve sayfa geçişleri için `.aktif` sınıfı entegre edildi.
- **Ana Sayfa (Hero Section):** Karşılama alanı Flexbox ile yan yana (görsel ve metin) düzenlendi, görsellere gölge ve köşe yuvarlaklığı (`border-radius`) verildi.
- **Hakkımda Sayfası:**
  - Hobi kartları için `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))` kullanılarak esnek (responsive) bir Grid yapısı kuruldu.
  - Ders programı/tablolar için şık arka plan renkleri, satır çizgileri ve zebra (`nth-child`) efektleri uygulandı.
- **İletişim Sayfası:** İletişim formu elemanları (`input`, `textarea`, `button`) stilize edildi ve `:focus` geçiş efektleri eklendi.
- **Mobil Uyumluluk (Responsive):** `@media (max-width: 768px)` kırılma noktası kullanılarak mobil cihazlar için dikey yerleşim düzenleri (`flex-direction: column`) ve kaydırılabilir tablolar sağlandı.
- **Temizlik ve Versiyon Kontrolü:** HTML dosyalarındaki eski nitelikler temizlendi; yapılan tüm geliştirmeler Git ile `commit` edilerek GitHub'a `push` edildi.

## 📌 Ay 3 — JavaScript Temelleri (Güncellemeler)

### 🚀 1. Arayüz ve Kullanım Deneyimi

- `index.html` dosyası şık bir koyu tema (dark mode) tasarımıyla güncellendi.
- Sayfayı açan kişilerin kod çıktılarını görebilmesi için konsolu (`F12` / Sağ tık -> Console) açması gerektiğini belirten rehber kart eklendi.

### 🛠️ 2. Görev 3: Fonksiyonlar (`fonksiyon.js`)

- **Klasik Fonksiyonlar:** `function ad(parametre) { return ... }` yapısı.
- **Default Parametreler:** Fonksiyona değer gönderilmediğinde varsayılan değer atama (`oran = 0.2`).
- **Arrow Functions (Ok Fonksiyonları):** `const fonksiyonAdi = (param) => { ... }` yazım biçimi (özellikle React için temel oluşturur).
- **Callback Fonksiyonlar:** Başka bir fonksiyona parametre olarak fonksiyon gönderme mantığı.

### 📝 3. Görev 3 Alıştırmaları ve Mantıkları

1. **`notDegerlendir(puan)`:** Girilen puana göre (`85+`, `70+`, `50+`) `if-else` yapılarıyla harf/durum (`Pekiyi`, `İyi`, `Geçer`, `Kaldı`) döndüren fonksiyon.
2. **`ortalama(a, b, c)`:** Gönderilen üç sayının ortalamasını hesaplayıp `toFixed(2)` metodu ile virgülden sonra 2 hane hassasiyetle döndüren fonksiyon.
3. **`sifreGucluMu(sifre)`:** Şifrenin uzunluğunu (`sifre.length >= 8`) ve içinde rakam olup olmadığını (`/[0-9]/.test(sifre)`) kontrol ederek `true`/`false` döndüren fonksiyon.
4. **`tersCevir(metin)`:** Klasik `for` döngüsü yardımıyla kelimenin son harfinden başa doğru giderek metni ters çeviren fonksiyon.
5. **`faktoriyel(n)`:** Bir sayının faktöriyelini döngü kullanarak (`sonuc *= i`) hesaplayan fonksiyon.

### 📦 4. Görev: Diziler (Arrays) ve Nesneler (Objects) (`dizi.js`)

- **Diziler (Arrays):** Birden fazla veriyi liste halinde tutma (`['Elma', 'Armut']`), `0` tabanlı indeksleme ve `.push()` ile eleman ekleme.
- **Nesneler (Objects):** Key-value (anahtar-değer) mantığıyla verileri saklama (`ogrenci.ad` veya `ogrenci["yas"]`).
- **Modern Dizi Metotları:**
  - `map()`: Dizideki her elemanı dönüştürme.
  - `filter()`: Belirli bir koşula uyan elemanları filtreleme.
- **Görev 4 Alıştırmaları:**
  1. **`urunleriYazdir(urunler)`:** `for...of` döngüsü ile dizi elemanlarını konsola alt alta yazdırma.
  2. **`enBuyukFiyat(fiyatlar)`:** `Math.max()` ve **Spread Operatörü (`...`)** kullanarak sayısal dizideki en büyük değeri bulma.
  3. **`kullaniciBilgi(kullanici)`:** Nesne parametresi alarak Template Literals ile biçimlendirilmiş bir cümle döndürme.

### 🌐 5. Görev: DOM Manipülasyonu ve Olaylar (Events) (`dom.js`)

- **DOM (Document Object Model):** JavaScript ile HTML elementlerine erişme ve onları dinamik olarak değiştirme yapısı.
- **Element Seçimi:**
  - `document.querySelector("h1")`: Etiket adı veya CSS seçicisi ile ilk eşleşen elementi yakalama.
  - `document.getElementById("idAdi")`: ID değerine göre elementi doğrudan seçme.
- **İçerik ve Stil Değiştirme:**
  - `element.innerText`: Elementin metin içeriğini okuma veya değiştirme.
  - `element.style.color`: JavaScript üzerinden CSS stillerine müdahale etme.
- **Olay Dinleyicileri (Event Listeners):**
  - `element.addEventListener("click", () => { ... })`: Kullanıcının tıklama gibi etkileşimlerini dinleyip fonksiyon tetikleme.
