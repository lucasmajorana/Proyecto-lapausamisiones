// Carrusel simple para turismo
let indexInicio = 0;
const carruselImgs = document.querySelectorAll(".carrusel-galeria img");
const total = carruselImgs.length;

setInterval(() => {
  carruselImgs.forEach((img, i) => {
    img.style.display = "none";
  });
  for (let i = 0; i < 5; i++) {
    const index = (indexInicio + i) % total;
    carruselImgs[index].style.display = "inline-block";
  }
  indexInicio = (indexInicio + 1) % total;
}, 2000);

// Modal para imágenes de galería
document.querySelectorAll(".galeria img").forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-contenido">
        <img src="${img.src}" alt="Vista ampliada">
      </div>`;
    modal.addEventListener("click", () => modal.remove());
    document.body.appendChild(modal);
  });
});
