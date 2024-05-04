const API_KEY = "hPLiLRR4wSIPRRFML70Qd8kOK5itmBhY";
const API_PREFIX = "https://api.giphy.com/v1/gifs/search?api_key=";
const API_SETTINGS = "&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

function renderGifs(response) {
    console.log(response);
}

function getMemes(searchExpression) {
    fetch(
        `${API_PREFIX}${API_KEY}&q=${searchExpression}&limit=25${API_SETTINGS}`
    )
        .then((data) => data.json())
        .then(renderGifs);
}

function formSubmitted(event) {
    event.preventDefault();
    let inputFieldContent = document.querySelector("[name=meme-input]").value;
    getMemes(inputFieldContent);
}

document.querySelector("#meme-form").addEventListener("submit", formSubmitted);
