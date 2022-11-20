async function fetchImage() {
    res = await fetch('https://cataas.com/cat?json=true&type=sq'); // Wait for api
    imageData = await res.json(); // Wait for JSON
    console.log(imageData.tags + ' : ' + 'https://cataas.com' + imageData.url); // Log loaded url
    document.getElementById("api-ex").src=('https://cataas.com' + imageData.url);
    document.getElementById("api-ex").alt=('https://cataas.com' + imageData.tags);
}
fetchImage();