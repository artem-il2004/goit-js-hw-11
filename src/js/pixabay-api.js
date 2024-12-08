import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export default async function httpRequest(q, page, PerPage) {
    try {
        const response = await axios.get("https://pixabay.com/api/", {
            params: {
                key: "47392401-769446c280b709c486589ce4f",
                q,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: "true",
                page: page,
                per_page: PerPage,
            },
        });

        const responseData = response.data;
        
        if (responseData.totalHits === 0) { 
                 iziToast.show({
            position: 'topRight',
            iconUrl: "../img/x.svg",
            message: "Sorry, there are no images matching your search query. Please try again!",
            backgroundColor: "#EF4040",
            messageColor: "white",
                 });
        
        }

        
        return responseData;
    } catch (error) {
        iziToast.show({
            position: 'topRight',
            iconUrl: "../img/x.svg",
            message: "Something went wrong. Please try again later!",
            backgroundColor: "#EF4040",
            messageColor: "white",
        });
        return [];
    }
}
