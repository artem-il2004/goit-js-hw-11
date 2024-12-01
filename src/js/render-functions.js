
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export default function renderIMG(hits) {
    const gallery = document.querySelector(".gallery"); 
    const imgMarkup = hits
        .map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
            return `
            <li class="list-item">

            <a href="${largeImageURL}" >  <img class="image" src="${webformatURL}" alt="${tags}"></a>
             
                <ul class="info-list">
                <li class="info-item"> <h3 class="infoTitle">Likes</h3> <p class="infoTxt">${likes}</p></li>
                <li class="info-item"><h3 class="infoTitle">Views</h3> <p class="infoTxt">${views}</p></li>
                <li class="info-item"><h3 class="infoTitle">Comments</h3> <p class="infoTxt">${comments}</p></li>
                <li class="info-item"><h3 class="infoTitle">Downloads</h3> <p class="infoTxt">${downloads}</p></li>
                </ul>
              </li>  
            `;
        })
        .join("");
    gallery.innerHTML = imgMarkup; 
    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
}
