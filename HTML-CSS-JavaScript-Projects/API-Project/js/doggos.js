const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'
const select = document.querySelector('.breeds'); 
fetch(BREEDS_URL)
    .then(function (response) {
        return response.json();
    } )
    .then(function (data) {
        const breedsArray = Object.keys(data.message);
        

        for(let i =0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }

       
   
    } )

const spinner = document.querySelector('.spinner')
const img = document.querySelector('.dog-img')
select.addEventListener("change", function(event) {
    console.log(`https://dog.ceo/api/breed/${event.target.value}/images/random`)

    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    getDoggo(url);
}) 

function getDoggo(url) {
    
    // can also use img.style.display = 'none' to achieve same thing
    spinner.classList.add('show');
    img.classList.remove("show");
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        img.src = data.message;
        // spinner.classList.remove('show'); can use load listener instead
        // img.classList.add("show");
    })

}

img.addEventListener('load', function () {
    spinner.classList.remove("show");
    img.classList.add("show");
})
