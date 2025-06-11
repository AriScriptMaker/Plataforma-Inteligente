  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Fecha clicando fora da imagem
  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }