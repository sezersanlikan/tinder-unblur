function otomatikBegen() {
  var buttons = document.querySelectorAll('span'); // Tüm <span> elementlerini seç
  buttons.forEach(function(button) {
    if (button.textContent === 'Beğen') { // Eğer içerik "Beğen" ise
      button.click(); // Butonu tıkla
    }
  });
}

// Her yarım saniyede bir otomatikBegen() fonksiyonunu çağır
setInterval(otomatikBegen, 500); // 500 milisaniye (yarım saniye) aralıkla çağır
