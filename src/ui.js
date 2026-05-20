export function renderImages(images, gallery){
    gallery.innerHTML = '';

    if(!images || images.length === 0){
        gallery.innerHTML = '<p class="empty">Žádné obrázky nenalezeny</p>';
        return;
    }

    images.forEach(img => {
        const card = createImageCard(img);
        gallery.appendChild(card);
    });
}

function createImageCard(img){
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
    <div class="image-wrapper">
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy">
    </div>
    <div class="card-info">
        <small>📷 ${img.user || 'Unknown'}</small>
        <small>❤️ ${img.likes || 0}</small>
    </div>
    `;

    card.querySelector('img').addEventListener('click', () => openModal(img));

    return card;
}

export function openModal(img){
    const modal = document.getElementById('modal');
    const modalInfo = document.getElementById('modalInfo');
    const modalImage = document.getElementById('modalImg');

    modal.classList.remove('hidden');
    modalImage.src = img.largeImageURL;
    modalImage.alt = img.tags || 'image';
    modalInfo.innerHTML = `
        <strong>Autor:</strong> ${img.user || 'Unknown'}<br>
        <strong>Tagy:</strong> ${img.tags || 'N/A'}<br>
        <strong>Líbí se:</strong> ${img.likes || 0}<br>
        <strong>Stažení:</strong> ${img.downloads || 0}
    `;
}