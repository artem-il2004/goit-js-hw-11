import iziToast from 'izitoast';
import httpRequest from './js/pixabay-api.js';
import renderIMG from './js/render-functions.js';

const submit = document.querySelector(".form-input");
const loadBTN = document.querySelector('.loadMoreBTN');
const loadingMessage = document.querySelector(".loadSpin");
let page = 1;
const perPage = 15;
let formValue = '';
let imgLeft = 0;


function handleLoadMore(event) {
    event.preventDefault();
    loadingMessage.style.display = "flex";
    page += 1;
    
    httpRequest(formValue, page, perPage)
        .then(responseData => {
            imgLeft -= responseData.hits.length;
            if (imgLeft <= 0) {
                loadBTN.style.display = 'none';
                 iziToast.show({
                    message: "We're sorry, but you've reached the end of search results."
                 })
        }
            loadingMessage.style.display = "none";
            return responseData.hits;
        })
        .then(hits => { 
            return renderIMG(hits);
          
        })
        .then(() => { 
            window.scrollBy({
                    top: 209.19 * 2,  
                    behavior: "smooth",
                });
        })
        
        .catch(error => {
            iziToast.show({
                message: "Something went wrong"
            });
        })
        
}


function handleSubmit(event) { 
    event.preventDefault();
    formValue = event.target.elements['input-field'].value.trim();
    const loadindMessage = document.querySelector(".loader-container");
    const gallery = document.querySelector(".gallery");

    page = 1;
    
    
    if (!formValue) {
        iziToast.show({
            message: "Sorry, you forgot necessery information"
        });

        return;
    }
    else { 
         loadindMessage.style.display = "flex";
        httpRequest(formValue, page, perPage)
            .then(responseData => {
                loadindMessage.style.display = "none";
                gallery.innerHTML = "";
                imgLeft = responseData.totalHits; 
                imgLeft -= responseData.hits.length;
                renderIMG(responseData.hits);

            })
            .catch(error => {
                gallery.innerHTML = "";
                iziToast.show({
            message: "Something went wrong"
        });
            })
            .finally(() => {
                event.target.reset();
            });        
    }
};



    
loadBTN.addEventListener("click", handleLoadMore);
submit.addEventListener("submit", handleSubmit);

