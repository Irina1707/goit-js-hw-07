import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");


const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

//console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(galleryItems) {

    return galleryItems.map(({ preview, original }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="Image description" />
  </a>
        `;
    }).join("");
}

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

function onGalleryContainerClick(event) {

    event.preventDefault();
    
    const isGalleryImgEl = event.target.classList.contains("gallery__image");
    if (!isGalleryImgEl) {
        return;
    }
    
}