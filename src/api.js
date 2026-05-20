import { renderImages, openModal } from './ui.js';
 
const API_KEY = "55790798-f52520810e523ed63afe7ae87";
const PER_PAGE = 9;
 
let query = '';
let page = 1;
let totalPages = 1;
 
const elements = {
    form: document.getElementById('searchForm'),
    input: document.getElementById('searchInput'),
    gallery: document.getElementById('gallery'),
    spinner: document.getElementById('spinner'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    pageInfo: document.getElementById('pageInfo'),
    modal: document.getElementById('modal')
};
 
export function initApp() {
    setupEvents();
}
 
function setupEvents() {
    elements.form.addEventListener('submit', handleSearch);
    elements.prevBtn.addEventListener('click', () => navigatePage(-1));
    elements.nextBtn.addEventListener('click', () => navigatePage(1));
 
    document.getElementById('closeModal').addEventListener('click', closeModal);
    elements.modal.addEventListener('click', e => {
        if (e.target === elements.modal) closeModal();
    });
 
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
}
 
async function handleSearch(e) {
    e.preventDefault();
    query = elements.input.value.trim();
    if (!query) return;
 
    page = 1;
    await fetchImages();
}
 
async function fetchImages() {
    elements.spinner.classList.remove('hidden');
    elements.gallery.innerHTML = '';
 
    try {
        const res = await fetch(
            `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&page=${page}&per_page=${PER_PAGE}&image_type=photo`
        );
 
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
 
        const data = await res.json();
 
        totalPages = Math.ceil(Math.max(1, data.totalHits / PER_PAGE));
        renderImages(data.hits, elements.gallery);
        updatePagination();
 
    } catch (err) {
        elements.gallery.innerHTML = `<p class="error">Failed to load images. Check your API key or try again.</p>`;
        console.error(err);
    } finally {
        elements.spinner.classList.add('hidden');
    }
}
 
function navigatePage(direction) {
    const newPage = page + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        page = newPage;
        fetchImages();
    }
}
 
function updatePagination() {
    elements.pageInfo.textContent = `Page ${page} of ${totalPages}`;
    elements.prevBtn.disabled = page === 1;
    elements.nextBtn.disabled = page === totalPages;
}
 
function closeModal() {
    elements.modal.classList.add('hidden');
}
 