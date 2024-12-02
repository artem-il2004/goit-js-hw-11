import iziToast from 'izitoast';
import httpRequest from './js/pixabay-api.js'
import renderIMG from './js/render-functions.js'
const submit = document.querySelector(".form-input");

function handleSubmit(event) { 
    event.preventDefault();
    const formValue = event.target.elements['input-field'].value.trim();
    const loadindMessage = document.querySelector(".loader-container");
    const gallery = document.querySelector(".gallery");

    if (!formValue) {
        iziToast.show({
            message: "Sorry, you forgot necessery information"
        });
        return;
        
    }
    else { 
         loadindMessage.style.display = "flex";
        httpRequest(formValue)
            .then(hits => {
                loadindMessage.style.display = "none";
                return renderIMG(hits);
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

submit.addEventListener("submit", handleSubmit);

