document.getElementById("fetchImages").addEventListener("click", fetchImages);

function fetchImages() {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = '';
    
    fetch("https://api.unsplash.com/photos/random?count=10&client_id=ck1QzEwzjlBTQx91_pexPriWEM6bgWzUQLE1PejXamg")
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                const imgElement = document.createElement("img"); //create the element using javascript
                imgElement.src = photo.urls.small;
                imageContainer.appendChild(imgElement)

            })
        })


}