const images = document.querySelectorAll('.profile-picture');
const modal = document.querySelector('.modal-container');
const modalImg = document.querySelector('.modal-img');
const closeBtn = document.querySelector('.close');

// Adiciona evento de clique em cada imagem
images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = image.src;
  });
});

// Fecha modal quando usuário clica no botão de fechar ou fora da imagem
window.addEventListener('click', e => {
  if (e.target === modal || e.target === closeBtn) {
    modal.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutBtn = document.getElementById("about-btn");
  const projectsBtn = document.getElementById("projects-btn");
  const aboutText = document.getElementById("about-text");
  const projectsText = document.getElementById("projects-text");

  // Mostrar texto "About" e esconder "Projects"
  aboutBtn.addEventListener("click", function() {
      aboutText.style.display = "block";
      projectsText.style.display = "none";
  });

  // Mostrar texto "Projects" e esconder "About"
  projectsBtn.addEventListener("click", function() {
      projectsText.style.display = "block";
      aboutText.style.display = "none";
  });
});