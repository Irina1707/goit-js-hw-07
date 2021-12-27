import { galleryItems } from './gallery-items.js';
// Change code below this line


//console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");


const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

//console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class = "gallery__item">
        <a class = "gallery__link" href="${original}">
        <img
        class = "gallery__image"
        src = "${preview}"
        data-source = "${original}"
        alt = "${description}"
        />
        </a>
        </div>
        `;
    }).join("");
}

let galleryImg = document.querySelectorAll(".gallery__image");


function onGalleryContainerClick(event) {

    event.preventDefault();
    
    const isGalleryImgEl = event.target.classList.contains("gallery__image");
    if (!isGalleryImgEl) {
        return;
    }

    const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
`)

    instance.show()

    const currentActiveCard = document.querySelector()
    
}
    //const img = event.target;
    //largeGalleryImg.src = event.target.dataset.source;

    //const parentImgGallery = event.target.closest(".gallery__item");
    //parentImgGallery.classList.add("modal");

    //console.log(event.target.dataset.source);
   
    
 
    



