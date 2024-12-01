import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export default function httpRequest(q) {
const params = new URLSearchParams({
    key: "47392401-769446c280b709c486589ce4f",
    q,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
});
        
    const url = `https://pixabay.com/api/?${params.toString()}`;
    return fetch(url) 
    .then(res => {
            if (!res.ok) { 
                throw new Error(res.status);
            }
            if(res)
            return res.json();
        })
        .then(data => { 
            if (data.hits && data.hits.length === 0) {
                iziToast.show({
                    position: 'topRight',
                    iconUrl: "../img/x.svg",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    backgroundColor: "#EF4040",
                    messageColor: "white",
});
            } else {
                return data.hits;
            }
        }
    )
    .catch(error => console.log(error));
    
        

}