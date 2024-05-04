const API_KEY = "hPLiLRR4wSIPRRFML70Qd8kOK5itmBhY";
const API_PREFIX = "https://api.giphy.com/v1/gifs/search?api_key=";
const API_SETTINGS = "&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

function renderGifs(response) {
    let result = "";

    if (response.data.length === 0) {
        renderError("No results.");
    } else {
        for (let meme of response.data) {
            result += `
                <img 
                    src="${meme.images.original.url}" 
                    alt="${meme.alt_text}" 
                    class="meme-img" />
            `;
        }

        document.querySelector(".js-memes-container").innerHTML = result;
    }
}

function renderError(message) {
    document.querySelector(".js-memes-container").innerHTML = `
        <div class="alert alert-danger error-container">${message}</div>
    `;
}

function getMemes(searchExpression, memeCount) {
    fetch(
        `${API_PREFIX}${API_KEY}&q=${searchExpression}&limit=${memeCount}${API_SETTINGS}`
    )
        .then((data) => data.json())
        .then(renderGifs)
        .catch(() => renderError("Error retrieving data."));
}

function formSubmitted(event) {
    event.preventDefault();
    let inputFieldContent = document.querySelector("[name=meme-input]").value;
    let memeCount = document.querySelector("[name=meme-count]").value;
    getMemes(inputFieldContent, memeCount);
}

document.querySelector("#meme-form").addEventListener("submit", formSubmitted);
