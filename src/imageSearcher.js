import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector(".search-form")
const input = document.querySelector("input[name='searchQuery']")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const userInput = input.value
    userSearch(userInput)
} )



const userSearch = (userInput) => {
    const apiKey = "50495832-52e00f4195b6d2cb1ef4fba52"
    const userSearchUrl = `https://pixabay.com/api/?key=${apiKey}&q=${userInput}&image_type=photo&orientation=horizontal`
    const options = {
        method: "GET"
    };
    fetch(userSearchUrl, options) 
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json();
        })
        .then (res => {
            console.log(res.hits);
            const firstImage = res.hits[0];
            const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = firstImage
             console.log(webformatURL, largeImageURL, tags, likes, views, comments, downloads);
        })
        .catch(console.error)
}
