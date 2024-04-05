// API KEY
const Key = "NAjn1Pyv8Lc9Vd1MG5fn6JsMIyhqdl921FkRALhz8Fo";

const formElement = document.querySelector("form");
const inputElement = document.querySelector("#search-input");
const resultsElement = document.querySelector(".search-results");
const showMore = document.querySelector("#show-more");

let inputData = "";
let page = 1;


async function searchResults(){
    inputData = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${Key}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        resultsElement.innerHTML = ""; 
    }

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result"); 
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const img_link = document.createElement("a");
        img_link.href = result.links.html;
        img_link.target = "_blank";
        img_link.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(img_link);
        resultsElement.appendChild(imageWrapper);

    });

    page++;

    if (page > 1){
        showMore.style.display = "block";
    }
}



formElement.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchResults()
});

showMore.addEventListener("click", (event) => {
    searchResults()
});