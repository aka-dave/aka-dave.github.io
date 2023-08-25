

const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');
var galleryImgs = document.querySelectorAll('.multi-view img');
var singleView = document.querySelector('.single-view img');
var cardNames = ['Dark Magician', 'Cyber Dragon', 'JetRoid', 'MechanicalChaser', 'Future Fusion'];
var card = document.querySelector('.draw img');
const a = document.querySelectorAll('.multi-view a')
const adr = document.querySelector('.draw a');
const artName = document.querySelector('.artName');
const multiView = document.querySelector('.multi-view');
const direction = document.querySelector('.direction');
const platform = document.querySelector('.platform');
const artImage = document.querySelector('.second img');
const cardSearch = document.querySelector('.cardSearch button');


wrapperDiv = document.querySelector('.screen');
containerDiv = document.querySelector('.container');
sectionDiv = document.querySelector('.section');




var loader = document.querySelector('.loading');
var results = document.querySelector('.results');
var resultText = document.querySelector('.results p');

var artist;
var searchName;
var des;

var DesName;
var DesArt;

var resCardIMG;

var state = 0;





var counter = [0];
var unique = [];
var num = 0;
var start;


function orderChange(x) {

    if(x.matches){
        
        
        wrapperDiv.insertBefore(containerDiv, sectionDiv);    // using css in javascript
    }
    
    else{
    
      
        
    
    
         wrapperDiv.insertBefore(sectionDiv, containerDiv);
    
    }
    }
    
    var maxWidth = window.matchMedia("(min-width: 700px)");
    orderChange(maxWidth);
    maxWidth.addEventListener('change', orderChange);





async function drawCard() {
const url = `https://cardbackend-48584104be46.herokuapp.com/api/author/default/card_images`
  const promise = await fetch(url)
    const processedResponse = await promise.json();


     num = Math.floor(Math.random() * processedResponse.length);
    if(unique.length == processedResponse.length){
        alert('You have reached the end of the deck')
        card.src = "images/faceDownCardNEW1.jpg" 
        counter[0] = 0;
        unique = [];
        num = 0;

        
    }
    else {
        if(counter[0] == 0){
            num = 0;
            
            unique.push(num);
            counter[0] = counter[0] + 1;

         }


            
            if(!unique.includes(num)){
                unique.push(num);
                

            }
            else {
                start = num;

                while(unique.includes(start)){
                num = Math.floor(Math.random() * processedResponse.length);
                if(!unique.includes(num)){
                unique.push(num);
                break;
                }
                
                

                }

            }

        



        
    card.src = processedResponse[num].card_url;
    



       
    
    }
   



}






async function drawCardOther() {

var url = `https://cardbackend-48584104be46.herokuapp.com/api/Author/ImagesAll?person=${artist}`    // if the category is other
    if(resCardIMG.length == 0){

        alert('You have reached the end of the deck')
        card.src = "images/faceDownCardNEW1.jpg" 
        var p = await fetch(url);
        resCardIMG =  await p.json()
        
    }

    else {


            var  num = Math.floor(Math.random() * resCardIMG.length)

            card.src = resCardIMG[num].art_url;
            resCardIMG.splice(num, 1);

    }


}



async function drawCardOtherPartial() {

     
    var url = `https://cardbackend-48584104be46.herokuapp.com/api/author/images?person=${artist}&title=${searchName}`;     // if the category is other
 


        if(resCardIMG.length == 0){
    
            alert('You have reached the end of the deck')
            card.src = "images/faceDownCardNEW1.jpg" 
            var p = await fetch(url);
            resCardIMG =  await p.json()
            
        }
    
        else {
    
    
                var  num = Math.floor(Math.random() * resCardIMG.length)
    
                card.src = resCardIMG[num].art_url;
                resCardIMG.splice(num, 1);
    
        }
    
    
    }

function drawCardCategory() {

    
    
    if(counter[0] == resCardIMG.length){
        alert('You have reached the end of the deck')
        card.src = "images/faceDownCardNEW1.jpg" 
        counter[0] = 0;
    }

    else {

        card.src = resCardIMG[counter[0]].card_url;
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

    


)};

function prevF() {
    singleView.classList.add('show')
    currentlySelected--;

     singleView.src = galleryImgs[currentlySelected].src;
     singleView.classList.remove('show')
   
   

    nextBtn.disabled = false;

    if(currentlySelected === 0) {
        prevBtn.disabled = true;
    }
}

function nextF() {
    singleView.classList.add('show')
    currentlySelected++;
    singleView.src = galleryImgs[currentlySelected].src;
    singleView.classList.remove('show')
    
    prevBtn.disabled = false;

    if (galleryImgs.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }



}




prevBtn.addEventListener('click', prevF);
   
   

nextBtn.addEventListener('click', nextF);

function update () {
    prevBtn.disabled = true;

    var currentlySelected = 0;
    singleView.src = galleryImgs[0].src;

    
    

    des[0].innerHTML = `${artist}'s art:`
    des[1].innerHTML = `${galleryImgs[0].alt} `
    

    








    for(let i = 0; i<galleryImgs.length; i++){



      

    
        galleryImgs[i].addEventListener('click', function(event){
            currentlySelected = Number(event.target.id ) - 1;
            singleView.src = galleryImgs[currentlySelected].src;
            artImage.src = galleryImgs[currentlySelected].src;
            des[1].innerHTML = `${galleryImgs[currentlySelected].alt} `; 

            
            
    
    
            
            
           
    
          
    
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
    
        
    
    
    )};

    prevBtn.addEventListener('click', function() {
   
        singleView.classList.add('show')     // hide current image
        currentlySelected--;
    
         singleView.src = galleryImgs[currentlySelected].src;
         singleView.classList.remove('show')                       // show current image
       
       
    
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



    loader.classList.remove('start');
    
    

    
    
}






 async function justName(enterCard) {

    var c = document.querySelector('.no-results');   // reseting the rrsults box

    if(c != 'undefined') {

        results.classList.remove('.no-results');
        results.style.display = 'none'
    }

   




    const urlIMG = `https://cardbackend-48584104be46.herokuapp.com/api/noAuthor/images?title=${enterCard}`;  // enterCard will be the query parameter here
    var promiseIMG = await fetch(urlIMG);
    var resIMG = await promiseIMG.json();

    if(typeof resIMG.message != 'undefined'){
        
             
                
                results.style.display = 'block';
                resultText.innerHTML = "We couldn't find any results, maybe try removing the text so that you can see the artist's full range of art"
                results.classList.add('.no-results');

                loader.classList.remove('start');

                return
    }

    else{
        artist = resIMG[0].name;

        state++;

      


        if(state == 1){
                card.removeEventListener('click', drawCard);
           }
       
       
           counter[0] = 0;
           card.src = "images/faceDownCard.jpg"; 
           prevBtn.removeEventListener('click', prevF);
           nextBtn.removeEventListener('click', nextF);
           card.removeEventListener('click', drawCardCategory);
           card.removeEventListener('click', drawCardOther);
           card.removeEventListener('click', drawCardOtherPartial);
    
        
        results.style.display = 'block';
        resultText.innerHTML = `Displaying ${resIMG.length} results for ${enterCard}`
      

    }



    


    


    



    const urlAll = `https://cardbackend-48584104be46.herokuapp.com/api/author`; // social, will use enterCard
    const promiseAll = await fetch(urlAll);
    const resAll = await promiseAll.json();

    for(let i of resAll){              
        if(i.name == artist){

            platform.replaceChildren('');
            

           

            

            var socialKeys = Object.keys(i.social_platforms);
            var socialURL = Object.values(i.social_platforms);

            

            for(let i=0; i<socialKeys.length; i++) {

                var li = document.createElement('li');
                var link = document.createElement('a');

                link.innerHTML = socialKeys[i];
                link.href = socialURL[i];

                li.appendChild(link);

                platform.appendChild(li);
            }
        }

    }

    des = document.querySelectorAll('.artName li');
    

    des[0].innerHTML = `${artist}'s art:`
    des[1].innerHTML = `${galleryImgs[0].alt} `

    const urlCard_images = `https://cardbackend-48584104be46.herokuapp.com/api/author/card_images?title=${enterCard}`;  // handling the draw card 
                                                                                       
    const promiseCardIMG = await fetch(urlCard_images);
     resCardIMG = await promiseCardIMG.json();



    

     if(resCardIMG[0].category != "other") { 


        drawCardCategory(resCardIMG);

        card.addEventListener('click', drawCardCategory);



    }

    else {


        card.addEventListener('click', drawCardOther);



    }







//     var k = document.querySelectorAll('.t');
            

//     if(typeof k[0] != 'undefined') {
//         alert('k')
//         alert(typeof k[0])

//         alert(k.length);

        

//         var m = document.getElementById('m');
        

//         multiView.style.overflow = 'auto';

//         for(let q=0; q<k.length; k++){
//             var el = k[q]

//             el.classList.remove('t');
//             el.remove();
           
            






//     }
// }

    
     

handleImages(resIMG);
return;






    


}

async function justAuthor(author){

    artist = author;
    var c = document.querySelector('.no-results');

    if(c != 'undefined') {

        results.classList.remove('.no-results');
        results.style.display = 'none'
    }


    
   
   


    



    
    
    const urlAll = `https://cardbackend-48584104be46.herokuapp.com/api/author`;
    const promiseAll = await fetch(urlAll);
    const resAll = await promiseAll.json();
    var socialArray;                         // handling social media first

    
    
    for(let i of resAll){              
        if(i.name == (author)){

            platform.replaceChildren('');
            

           

            

            var socialKeys = Object.keys(i.social_platforms);
            var socialURL = Object.values(i.social_platforms);

            

            for(let i=0; i<socialKeys.length; i++) {

                var li = document.createElement('li');
                var link = document.createElement('a');

                link.innerHTML = socialKeys[i];
                link.href = socialURL[i];

                li.appendChild(link);

                platform.appendChild(li);
            }


            const urlCard_images = `https://cardbackend-48584104be46.herokuapp.com/api/Author/ImagesAll?person=${author}`
            const promiseCardIMG = await fetch(urlCard_images);
             resCardIMG = await promiseCardIMG.json();

             if(resCardIMG.length == 0){

                
                results.style.display = 'block';
                resultText.innerHTML = "We couldn't find any results, maybe try removing the text so that you can see the artist's full range of art"
                results.classList.add('.no-results');

                loader.classList.remove('start');


 
                return


            }

            else{
                

                state++;
              

                if(state == 1){
                    card.removeEventListener('click', drawCard);
               }
           
           
               counter[0] = 0;
               card.src = "images/faceDownCardNEW1.jpg"; 
               prevBtn.removeEventListener('click', prevF);
               nextBtn.removeEventListener('click', nextF);
               card.removeEventListener('click', drawCardCategory);
               card.removeEventListener('click', drawCardOther);
               card.removeEventListener('click', drawCardOtherPartial);
           
              
                
                
                results.style.display = 'block';
                resultText.innerHTML = `Displaying all results for ${author}`

                des = document.querySelectorAll('.artName li');
    

                des[0].innerHTML = `${author}'s art:`
                des[1].innerHTML = `${galleryImgs[0].alt} `
            

            }




             


            card.addEventListener('click', drawCardOther);


        //     var k = document.querySelectorAll('.t');
            

        //     if(typeof k[0] != 'undefined') {
        //         alert('k')
        //         alert(typeof k[0])

        //         alert(k.length);

                

        //         var m = document.getElementById('m');
                

        //         multiView.style.overflow = 'auto';

        //         for(let q=0; q<k.length; k++){
        //             var el = k[q]

        //             el.classList.remove('t');
        //             el.remove();
                   
                    






        //     }
        // }
            
             

    }
}



const urlIMG = `https://cardbackend-48584104be46.herokuapp.com/api/Author/ImagesAll?person=${author}`;  // handling the images
var promiseIMG = await fetch(urlIMG);
var resIMG = await promiseIMG.json();




handleImages(resIMG);

return;







    

            

    
}





async function nameAndCard(author, enterCard) {
    artist = author;
    // alert(artist);
   

    var c = document.querySelector('.no-results');

    if(c != 'undefined') {

        results.classList.remove('.no-results');
        results.style.display = 'none';
    }


    


   
   
    
   
   

    
    const urlAll = `https://cardbackend-48584104be46.herokuapp.com/api/author`;
    const promiseAll = await fetch(urlAll);
    const resAll = await promiseAll.json();                  // handling social media first
    
    if(resAll.length == 0) {


        return;
    }

    
    
    for(let i of resAll){              
        if(i.name == author){

            platform.replaceChildren('');
            

           

            

            var socialKeys = Object.keys(i.social_platforms);
            var socialURL = Object.values(i.social_platforms);

            

            for(let i=0; i<socialKeys.length; i++) {

                var li = document.createElement('li');
                var link = document.createElement('a');

                link.innerHTML = socialKeys[i];
                link.href = socialURL[i];

                li.appendChild(link);

                platform.appendChild(li);
            }
           

            
        


        


          
            
           



            
              








            const urlIMG = `https://cardbackend-48584104be46.herokuapp.com/api/author/images?person=${author}&title=${enterCard}`;  // handling the images
            var promiseIMG = await fetch(urlIMG);
            var resIMG = await promiseIMG.json();
            // alert('api');
            // alert(resIMG.length);

            if(resIMG.length == 0){


                
                results.style.display = 'block';
                resultText.innerHTML = "We couldn't find any results, maybe try removing the text so that you can see the artist's full range of art"
                results.classList.add('.no-results');

                loader.classList.remove('start');


 
                return


            }

            else{

                state++;
                

                
        if(state == 1){
            card.removeEventListener('click', drawCard);
        }


        counter[0] = 0;
        card.src = "images/faceDownCardNEW1.jpg"; 
        prevBtn.removeEventListener('click', prevF);
        nextBtn.removeEventListener('click', nextF);
        card.removeEventListener('click', drawCardCategory);
        card.removeEventListener('click', drawCardOther);
        card.removeEventListener('click', drawCardOtherPartial);

                        
                
                results.style.display = 'block';
                resultText.innerHTML = `Displaying ${resIMG.length} results for ${enterCard}`
                des = document.querySelectorAll('.artName li');
    

                des[0].innerHTML = `${author}'s art:`
                des[1].innerHTML = `${galleryImgs[0].alt} `
            

            }

            // for the exact match case
            if(resIMG[0].match == 'exact') {const urlCard_images = `https://cardbackend-48584104be46.herokuapp.com/api/author/card_images?title=${enterCard}`;  // handling the draw card 
                                                                                       
            const promiseCardIMG = await fetch(urlCard_images);
             resCardIMG = await promiseCardIMG.json();

             if(resCardIMG.length!= 0) {

            if(resCardIMG[0].category != "other") { 


                
        
                card.addEventListener('click', drawCardCategory);
        
        

            }

            else {


                card.addEventListener('click', drawCardOther);




            }



           


            
            

    }}

    if(resIMG[0].match == 'exact') {const urlCard_images = `https://cardbackend-48584104be46.herokuapp.com/api/author/card_images?title=${enterCard}`;  // handling the draw card 
                                                                                       
            const promiseCardIMG = await fetch(urlCard_images);
             resCardIMG = await promiseCardIMG.json();

             if(resCardIMG.length!= 0) {

            if(resCardIMG[0].category != "other") { 


                
        
                card.addEventListener('click', drawCardCategory);
        
        

            }

            else {


                card.addEventListener('click', drawCardOther);




            }



           


            
            

    }}

    else {     // if the match is partial

        var url = `https://cardbackend-48584104be46.herokuapp.com/api/author/images?person=${author}&title=${enterCard}`; 
        var promiseCardIMG = await fetch(url);
        resCardIMG = await promiseCardIMG.json();
    

        searchName = enterCard
        
       card.addEventListener('click', drawCardOtherPartial);



    }


            


    handleImages(resIMG);

            return

}



    
  }   
}

function handleImages (resIMG) {

    
    multiView.style.overflow = 'auto';
    

   


    var resLen = resIMG.length;
var galleryLen = galleryImgs.length;
var difference = galleryLen - resLen;

artImage.src = resIMG[0].art_url;

singleView.src = resIMG[0].art_url;
card.src = "images/faceDownCardNEW1.jpg";

if(galleryLen > 12) {

    multiView.style.overflow = 'auto';

}




if(difference > 0){


    artImage.src = resIMG[0].art_url;     // if the image count from api is less the than the avaliable spaces in the Mulit-view element
    singleView.src = resIMG[0].art_url;

for(let i=0; i<resIMG.length; i++) {

        galleryImgs[i].src = resIMG[i].art_url;       
        galleryImgs[i].title = resIMG[i].cardName;
        galleryImgs[i].alt = resIMG[i].cardName;





}

    
for(let i=galleryLen - difference; i<galleryImgs.length; i++) {

    galleryImgs[i].src = `images/faceDownCardnew.jpg`;
    galleryImgs[i].title = `empty`;
    galleryImgs[i].alt = `EmptySpace`;




}
galleryImgs = document.querySelectorAll('.multi-view img');

update();



}


else if(difference < 0){
    
    var count = 0;
    var track = 0;
    var tally = 0;
    var id = galleryLen + 1; // ths has to change
    
    var start = true;

    multiView.style.overflow = 'auto';


   



    for(let i=0; i<galleryImgs.length; i++) {
        galleryImgs[i].src = resIMG[i].art_url;       // filling in the staic inages with the new result
        galleryImgs[i].title = resIMG[i].cardName;
        galleryImgs[i].alt = resIMG[i].cardName;


    



    }
    //alert(Math.abs(difference))
    // alert(difference)

    for(let i=0; i<Math.abs(difference); i++) { 

       
        if(typeof resIMG[galleryLen + i + 1] == "undefined" && typeof resIMG[galleryLen + i] != "undefined") {  // for a 1 problem you can ommit the second condition

            
                if(i % 3 == 1) {                            

            
       
           
        var aL2 = document.createElement('a');
        aL2.href = '#';
        var img2 = document.createElement('img');   
        img2.src = resIMG[galleryLen + i].art_url;
        img2.alt = resIMG[galleryLen + i].cardName;       // modulus = 1 means youve reach the second column successully, you now have to add to the 2nd comuln then fill the third blank
        img2.id = id;
        img2.title = resIMG[galleryLen + i].cardName;       
        aL2.replaceChildren(img2);
        container.appendChild(aL2);

        id++;
        

        galleryImgs = document.querySelectorAll('.multi-view img');

         aL2.addEventListener('click', function(event) {
            event.preventDefault();
        })

        


            var r = i % 3;





            for(let k=0; k<1; k++){

                var aL2Fill = document.createElement('a');
                aL2Fill.href = '#';
                var img2Fill = document.createElement('img');     // appending 2nd or  3rd  card on row
                img2Fill.src = "images/faceDownCardnew.jpg"
                img2Fill.alt = "EmptySpace";  
                img2Fill.id = id;
                img2Fill.title = "empty"      
                aL2Fill.replaceChildren(img2Fill);
                container.appendChild(aL2Fill);
    
                 aL2Fill.addEventListener('click', function(event) {
                    event.preventDefault();
                })

               

            }

            galleryImgs = document.querySelectorAll('.multi-view img'); 
            update();
            return galleryImgs;  

        }

        if(i % 3 == 2) {

            var aL2 = document.createElement('a');
            aL2.href = '#';
            var img2 = document.createElement('img');   
            img2.src = resIMG[galleryLen + i].art_url;
            img2.alt = resIMG[galleryLen + i].cardName;       // modulus = 1 means youve reach the second column successully, you now have to add to the 2nd comuln then fill the third blank
            img2.id = id;
            img2.title = resIMG[galleryLen + i].cardName;       
            aL2.replaceChildren(img2);
            container.appendChild(aL2);
    
            id++;
            
    
            galleryImgs = document.querySelectorAll('.multi-view img');
    
             aL2.addEventListener('click', function(event) {
                event.preventDefault();
            })


            update();
            return galleryImgs;


        }
        else {


      
                var container = document.createElement('div');     // initial condition you need to create the div container
                container.classList.add('row', 't');                     // create a second class to keep track of new elements created in multi-view
                multiView.appendChild(container);                       // you then append that container into the original multiview element
    
               
    
    
                galleryImgs = document.querySelectorAll('.multi-view img');  // updated with
            var aL2 = document.createElement('a');
            aL2.href = '#';
            var img2 = document.createElement('img');   
            img2.src = resIMG[galleryLen + i].art_url;
            img2.alt = resIMG[galleryLen + i].cardName;       // modulus = 1 means youve reach the second column successully, you now have to add to the 2nd comuln then fill the third blank
            img2.id = id;
            img2.title = resIMG[galleryLen + i].cardName;       
            aL2.replaceChildren(img2);
            container.appendChild(aL2);
    
            id++;
            
    
            galleryImgs = document.querySelectorAll('.multi-view img');
    
             aL2.addEventListener('click', function(event) {
                event.preventDefault();
            })

             
            for(let k=0; k<2; k++){

                var aL2Fill = document.createElement('a');
                aL2Fill.href = '#';
                var img2Fill = document.createElement('img');     // reached the first successfully, now need to in gaps
                img2Fill.src = "images/faceDownCardnew.jpg"         
                img2Fill.alt = "EmptySpace";
                img2Fill.id = id;
                img2Fill.title = "empty"      
                aL2Fill.replaceChildren(img2Fill);
                container.appendChild(aL2Fill);
    
                 aL2Fill.addEventListener('click', function(event) {
                    event.preventDefault();
                })

                id++;

            }

            galleryImgs = document.querySelectorAll('.multi-view img'); 
            update();
            return galleryImgs;

            




        }

       
        }

        

        if(i % 3 == 0){
            var container = document.createElement('div');     // initial condition you need to create the div container
            container.classList.add('row', 't');                     // create a second class to keep track of new elements created in multi-view
            multiView.appendChild(container);                       // you then append that container into the original multiview element

           


            galleryImgs = document.querySelectorAll('.multi-view img');  // updated with the new DOM
        
        }




       
 
                                                               // creating new elements for the rest of the images
                                                                // create new row here  
                                                                // id will be 12 + i
                                                    
                                                                // After creating use a continue statement

        var aL2 = document.createElement('a');
        aL2.href = '#';
        var img2 = document.createElement('img');   
        img2.src = resIMG[galleryLen + i].art_url;
        img2.alt = resIMG[galleryLen + i].cardName;       // next card on row
        img2.id = id;
        img2.title = resIMG[galleryLen + i].cardName;       
        aL2.replaceChildren(img2);
        container.appendChild(aL2);

        id++;
        

        galleryImgs = document.querySelectorAll('.multi-view img');

         aL2.addEventListener('click', function(event) {
            event.preventDefault();
        })

        update();





        

       

           

           


          
            }

          


    }


else {

    for(let i=0; i<resIMG.length; i++) {

        galleryImgs[i].src = resIMG[i].art_url;       
        galleryImgs[i].title = resIMG[i].cardName;
        galleryImgs[i].alt = resIMG[i].cardName;




}

galleryImgs = document.querySelectorAll('.multi-view img');

update();

    

}
}



cardSearch.addEventListener('click', function() {
    const author = document.querySelector('.authors select');
    const enterCard = document.querySelector('.enterCard input');

   

    // alert(author.value)

        if(author.value!= 'Select One' && enterCard.value!= ''){
            loader.classList.add('start');
           

            // alert("name and card");

            
            nameAndCard(author.value, enterCard.value);



            
        }

        if(enterCard.value!= '' && author.value == 'Select One') {
            loader.classList.add('start');


            // alert("just card");
            justName(enterCard.value);

        }

        if(author.value!= 'Select One' && enterCard.value == ''){
            loader.classList.add('start');

            // alert("just author");
            justAuthor(author.value);
        }

        if(author.value == 'Select One' && enterCard.value == ''){
            alert('select an author')


        }
        
        

})
















