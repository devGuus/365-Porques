const input = document.getElementById('fileInput');
const gallery = document.getElementById('gallery');
const clearBtn = document.getElementById('clearGallery');

// Função para exibir imagens na tela
function renderGallery(images) {
  gallery.innerHTML = '';
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.title = 'Clique para remover';
    img.addEventListener('click', () => removeImage(index));
    gallery.appendChild(img);
  });
}

// Função para carregar imagens do localStorage
function loadGallery() {
  const savedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
  renderGallery(savedImages);
}

// Função para adicionar novas imagens
input.addEventListener('change', (event) => {
  const files = event.target.files;
  const stored = JSON.parse(localStorage.getItem('galleryImages')) || [];

  for (const file of files) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imgSrc = e.target.result;
      stored.push(imgSrc);
      localStorage.setItem('galleryImages', JSON.stringify(stored));
      loadGallery();
    };
    reader.readAsDataURL(file);
  }
});

// Função para remover uma imagem específica
function removeImage(index) {
  const stored = JSON.parse(localStorage.getItem('galleryImages')) || [];
  stored.splice(index, 1);
  localStorage.setItem('galleryImages', JSON.stringify(stored));
  loadGallery();
}

// Função para limpar toda a galeria
clearBtn.addEventListener('click', () => {
  if (confirm('Tem certeza que deseja apagar toda a galeria? 💔')) {
    localStorage.removeItem('galleryImages');
    gallery.innerHTML = '';
  }
});

// Carregar imagens ao iniciar
window.onload = loadGallery;
