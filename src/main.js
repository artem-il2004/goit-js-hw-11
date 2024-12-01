import iziToast from 'izitoast';
import httpRequest from './js/pixabay-api.js'
import renderIMG from './js/render-functions.js'
const submit = document.querySelector(".form-input");

function handleSubmit(event) { 
    event.preventDefault();
    const formValue = event.target.elements['input-field'].value.trim();
    const loadindMessage = document.querySelector(".loader-container");
   
    if (!formValue) {
        iziToast.show({
            message: "Sorry, you 4goat necessery information"
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
            .catch(error => console.error(error))
            .finally(() => {
                event.target.reset();
            });        
    }
        
}; 

submit.addEventListener("submit", handleSubmit);

