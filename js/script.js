console.log("script.js loaded");

const gifContainer = document.querySelector("#gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");
fetchBtn.addEventListener("click", function () {
  const searchTerm = searchInput.value;
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=slu5oBBfMOwxAJvmbaYFef9ImRqdNmjd&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  fetch(endpoint)

    .then(response => response.json())
    .then(data => {
      // Clear the container first
      gifContainer.innerHTML = "";
      
      // Loop through the data array from the API response
      data.data.forEach(gif => {
        const imageUrl = gif.images.original.url;
        gifContainer.innerHTML += `<img src="${imageUrl}" class="col-3 mb-3">`;
      });
    })
    .catch(error => {
      console.error("Error fetching GIFs:", error);
    });
});