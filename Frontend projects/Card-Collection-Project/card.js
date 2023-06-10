

const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');
const galleryImgs = document.querySelectorAll('.multi-view img');
const singleView = document.querySelector('.single-view img');
var cardNames = ['Dark Magician', 'Cyber Dragon', 'JetRoid', 'MechanicalChaser', 'Future Fusion'];
const card = document.querySelector('.draw img');
const a = document.querySelectorAll('.multi-view a')
const adr = document.querySelector('.draw a');


var counter = [0];










async function drawCard() {
    
    const URL = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardNames[counter[0]]}`
    
    if(counter[0] == cardNames.length){
        alert('You have reached the end of the deck')
        card.src = "images/faceDownCard.jpg" 
        counter[0] = 0;
        
    }
    else {
         const promise = await fetch(URL)
    const processedResponse = await promise.json();

    card.src = processedResponse.data[0].card_images[0].image_url;

    counter[0] = counter[0] + 1;
    
    }
   




}

card.addEventListener("click", drawCard);
adr.addEventListener("click", function(e) {
    e.preventDefault();
})



let currentlySelected = 0;


if(currentlySelected === 0) {
    prevBtn.disabled = true;
}
for(let i = 0; i<galleryImgs.length; i++){

    a[i].addEventListener('click', function(event){
        event.preventDefault();

    });



    galleryImgs[i].addEventListener('click', function(event){
        currentlySelected = Number(event.target.id ) - 1;
        singleView.src = galleryImgs[currentlySelected].src;

       

      

        if(currentlySelected > 0 && currentlySelected < galleryImgs.length -1 )  {
            nextBtn.disabled = false;
            prevBtn.disabled = false;
        }

          if (galleryImgs.length === currentlySelected + 1) {
            nextBtn.disabled = true;
            prevBtn.disabled = false;
        }


        if(currentlySelected === 0) {
            prevBtn.disabled = true;
            nextBtn.disabled = false;
        }

    }


)}


prevBtn.addEventListener('click', function() {
   
    singleView.classList.add('show')
    currentlySelected--;

     singleView.src = galleryImgs[currentlySelected].src;
     singleView.classList.remove('show')
   
   

    nextBtn.disabled = false;

    if(currentlySelected === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function() {
    singleView.classList.add('show')
    currentlySelected++;
    singleView.src = galleryImgs[currentlySelected].src;
    singleView.classList.remove('show')
    
    prevBtn.disabled = false;

    if (galleryImgs.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }


});














