

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

var artist;

var DesName;
var DesArt;

var resCardIMG;

var state = 0;





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

function drawCardState() {




    
    if(counter[0] == resCardIMG.length){
        alert('You have reached the end of the deck')
        card.src = "images/faceDownCard.jpg" 
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

    let currentlySelected = 0;
    singleView.src = galleryImgs[0].src;

    var des = document.querySelectorAll('.artName li');
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
    
    

    
    
}






 async function justName(enterCard) {

    state++;


    if(state == 1){
            card.removeEventListener('click', drawCard);
       }
   
   
       counter[0] = 0;
       card.src = "images/faceDownCard.jpg"; 
       prevBtn.removeEventListener('click', prevF);
       nextBtn.removeEventListener('click', nextF);



    const urlIMG = `http://localhost:3000/api/noAuthor/images`;  // enterCard will be the query parameter here
    var promiseIMG = await fetch(urlIMG);
    var resIMG = await promiseIMG.json();

    artist = resIMG[0].name;


    


    



    const urlAll = `http://localhost:3000/api/author`; // social, will use enterCard
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

    const urlCard_images = `http://localhost:3000/api/author/card_images`;  // handling the draw card 
                                                                                       
    const promiseCardIMG = await fetch(urlCard_images);
     resCardIMG = await promiseCardIMG.json();

    if(state > 1) { 

        card.removeEventListener('click', drawCardState);



    }





  
    card.addEventListener('click', drawCardState);
   



    
     var k = document.querySelectorAll('.multi-view t');

    if(typeof k[0] != undefined) {

        var m = document.getElementById('m');
        

        multiView.style.overflow = 'auto';

        for(let q=0; q<k.length; k++){

            k[i].classList.remove('t');
            k[i].replaceChildren('')
            






    }
}

// handling the images

var resLen = resIMG.length;
var galleryLen = galleryImgs.length;
var difference = galleryLen - resLen;

artImage.src = resIMG[0].art_url;
singleView.src = resIMG[0].art_url;




if(difference > 0){


    artImage.src = resIMG[0].art_url;     // if the image count from api is less the than the avaliable spaces in the Mulit-view element
    singleView.src = resIMG[0].art_url;

for(let i=0; i<resIMG.length; i++) {

        galleryImgs[i].src = resIMG[i].art_url;       
        galleryImgs[i].title = resIMG[i].description;




}

    
for(let i=galleryLen - difference; i<galleryImgs.length; i++) {

    galleryImgs[i].src = `images/blue-eyes-300-438.jpg`;
    galleryImgs[i].title = `blue-eyes-white-dragon-art`;;




}

}

else if(difference < 0){
    var count = 0;
    var id = 13;

   



    for(let i=0; i<galleryImgs.length; i++) {
        galleryImgs[i].src = resIMG[i].art_url;       // filling in the staic inages with the new result
        galleryImgs[i].title = resIMG[i].description;
        galleryImgs[i].alt = resIMG[i].cardName;


    



    }
    alert(Math.abs(difference))

    for(let i=0; i<Math.abs(difference); i++) {             // creating new elements for the rest of the images
                                                                // create new row here  
                                                                // id will be 12 + i
                                                                // you will need to do a try and catch error for each img
                                                                // After creating use a continue statement

        if(i=0){
            var container = document.createElement('div');     // initial condition you need to create the div container
            container.classList.add('row', 't');    // create a second class to keep track of new elements created in multi-view
            
            var aL = document.createElement('a');
            aL.href = "#";
            var img1 = document.createElement('img');
            img1.src = resIMG[i+galleryLen].art_url;
            img1.alt = resIMG[i+galleryLen].cardName;
            img1.id = id;
            img1.title = resIMG[galleryLen+i].description;      
            aL.replaceChildren(img1);
            container.appendChild(aL);
            multiView.appendChild(container);    // you then append that container into the original multiview element

           


            galleryImgs = document.querySelectorAll('.multi-view img');  // updated with the new DOM
            

             aL.addEventListener('click', function(event) {
                event.preventDefault();
            })


            count++;
            id++;
            



            
            if(typeof resIMG[i+1+galleryLen] == undefined) {
                update()
                
                return}                              // checking next iterations within the the first
           
            var aL2 = document.createElement('a');
            aL2.href = '#';
            var img2 = document.createElement('img');   
            img2.src = resIMG[i+count+galleryLen].art_url;
            img2.alt = resIMG[i+count+galleryLen].cardName;
            img2.id = id;
            img2.title = resIMG[galleryLen+i+1].description;      
            aL2.replaceChildren(img2);
            container.appendChild(aL2);

           

            galleryImgs = document.querySelectorAll('.multi-view img');

             aL2.addEventListener('click', function(event) {
                event.preventDefault();
            })

            count++;
            id++;

            if(typeof resIMG[i+2+galleryLen] == undefined) {
                update();
                return}
            
            var aL3 = document.createElement('a');
            aL3.href = '#';
            var img3 = document.createElement('img');
    
            img3.src = resIMG[i+count+galleryLen].art_url;           // try block here
            img3.alt = resIMG[i+count+galleryLen].cardName;
            img3.id = id;
            img3.title = resIMG[galleryLen+i+2].description;      
            aL3.replaceChildren(img2);                         
            container.appendChild(aL3);

            
            galleryImgs = document.querySelectorAll('.multi-view img');
              
            aL3.addEventListener('click', function(event) {
                event.preventDefault();
            })

                                                 
                count++; 
                id++; 

                update();
                
                continue;
          

        
        }




        if(i % 3 == 0) {

            var j = 0;


            if(typeof resIMG[count+galleryLen] == undefined) {
                update();
                return}

            var container1 = document.createElement('div');
            container1.classList.add('row', 't');
            
            var aLR = document.createElement('a');
            aLR.href = "#";
            var imgR1 = document.createElement('img');
            imgR1.src = resIMG[count+galleryLen].art_url;      // dont add i becaue it is no lo
            imgR1.alt = resIMG[count+galleryLen].cardName;
            imgR1.id = id;
            imgR1.title = resIMG[count+galleryLen].description;      
            aLR.replaceChildren(imgR1);
            container1.appendChild(aLR);
            multiView.appendChild(container1);

           
            galleryImgs = document.querySelectorAll('.multi-view img');
             aLR.addEventListener('click', function(event) {
                event.preventDefault();
            })


            id++;
            count++;

            

            if(typeof resIMG[count+galleryLen] == undefined) {
                update();
                return}

          

           
            var aLR2 = document.createElement('a');
            aLR2.href = "#";
            var imgR2 = document.createElement('img');
            imgR2.src = resIMG[count+galleryLen].art_url;
            imgR2.alt = resIMG[count+galleryLen].cardName;
            imgR2.id = id;
            imgR2.title = resIMG[count+galleryLen].description;      
            aLR2.replaceChildren(imgR2);
            container1.appendChild(aLR2);

           

            galleryImgs = document.querySelectorAll('.multi-view img');

             aLR2.addEventListener('click', function(event) {
                event.preventDefault();
            })

            id++;
            count++;
            

            

            if(typeof resIMG[count+galleryLen] == undefined) {

                
                update();
                return}



            
               
           
            var aL3 = document.createElement('a');
            aL3.href = "#";
            var img3R = document.createElement('img');
      
            img3R.src = resIMG[count+galleryLen].art_url;
            img3R.alt = resIMG[count+galleryLen].cardName;
            img3R.id = id;
            img3R.title = resIMG[count+galleryLen].description;      
            aL3.replaceChildren(img3R);
            container1.appendChild(aL3);

           

            galleryImgs = document.querySelectorAll('.multi-view img');

             aL3.addEventListener('click', function(event) {
                event.preventDefault();
            });

            id++;
            count++;

            update()












                                                                            // create new row
                                                                            // id will be 12 + i
                                                                            // you will need to do a try and catch error for each img

        }
       





    }


}

else {

    for(let i=0; i<resIMG.length; i++) {

        galleryImgs[i].src = resIMG[i].art_url;       
        galleryImgs[i].title = resIMG[i].description;




}

    





}

    


}

async function justAuthor(author){

    artist = author;
    state++;


 if(state == 1){
         card.removeEventListener('click', drawCard);
    }


    counter[0] = 0;
    card.src = "images/faceDownCard.jpg"; 
    prevBtn.removeEventListener('click', prevF);
    nextBtn.removeEventListener('click', nextF);

   
   
    
   
   


    



    
    
    const urlAll = `http://localhost:3000/api/author`;
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


            const urlCard_images = `http://localhost:3000/api/author/card_images`;  // handling the draw card 
                                                                                       
            const promiseCardIMG = await fetch(urlCard_images);
             resCardIMG = await promiseCardIMG.json();

            if(state > 1) { 
        
                card.removeEventListener('click', drawCardState);
        
        

            }


        


          
            card.addEventListener('click', drawCardState);
           



            
             var k = document.querySelectorAll('.multi-view t');

            if(typeof k[0] != undefined) {

                var m = document.getElementById('m');
                

                multiView.style.overflow = 'auto';

                for(let q=0; q<k.length; k++){

                    k[i].classList.remove('t');
                    k[i].replaceChildren('')
                    
            }
        }

    }
}

const urlIMG = `http://localhost:3000/api/Author/ImagesAll?person=${author}`;  // handling the images
var promiseIMG = await fetch(urlIMG);
var resIMG = await promiseIMG.json();


handleImages(resIMG);

return;







    

            

    
}





async function nameAndCard(author, enterCard) {
    artist = author;
    state++;


 if(state == 1){
         card.removeEventListener('click', drawCard);
    }


    counter[0] = 0;
    card.src = "images/faceDownCard.jpg"; 
    prevBtn.removeEventListener('click', prevF);
    nextBtn.removeEventListener('click', nextF);

   
   
    
   
   


    



    
    
    const urlAll = `http://localhost:3000/api/author`;
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


            const urlCard_images = `http://localhost:3000/api/author/card_images`;  // handling the draw card 
                                                                                       
            const promiseCardIMG = await fetch(urlCard_images);
             resCardIMG = await promiseCardIMG.json();

            if(state > 1) { 
        
                card.removeEventListener('click', drawCardState);
        
        

            }


        


          
            card.addEventListener('click', drawCardState);
           



            
             var k = document.querySelectorAll('.multi-view t');

            if(typeof k[0] != undefined) {

                var m = document.getElementById('m');
                

                multiView.style.overflow = 'auto';

                for(let q=0; q<k.length; k++){

                    k[i].classList.remove('t');
                    k[i].replaceChildren('')
                    






            }
        }
            








            const urlIMG = `http://localhost:3000/api/author/images?person=${author}&title=${enterCard}`;  // handling the images
            var promiseIMG = await fetch(urlIMG);
            var resIMG = await promiseIMG.json();


            handleImages(resIMG);

            return

            var resLen = resIMG.length;
            var galleryLen = galleryImgs.length;
            var difference = galleryLen - resLen;

            artImage.src = resIMG[0].art_url;
            singleView.src = resIMG[0].art_url;




            if(difference > 0){
        

                artImage.src = resIMG[0].art_url;     // if the image count from api is less the than the avaliable spaces in the Mulit-view element
                singleView.src = resIMG[0].art_url;

            for(let i=0; i<resIMG.length; i++) {

                    galleryImgs[i].src = resIMG[i].art_url;       
                    galleryImgs[i].title = resIMG[i].description;



            
            }

                
            for(let i=galleryLen - difference; i<galleryImgs.length; i++) {

                galleryImgs[i].src = `images/blue-eyes-300-438.jpg`;
                galleryImgs[i].title = `blue-eyes-white-dragon-art`;;



        
        }

            }

            else if(difference < 0){
                var count = 0;
                var id = 13;

               



                for(let i=0; i<galleryImgs.length; i++) {
                    galleryImgs[i].src = resIMG[i].art_url;       // filling in the staic inages with the new result
                    galleryImgs[i].title = resIMG[i].description;
                    galleryImgs[i].alt = resIMG[i].cardName;


                



                }
                alert(Math.abs(difference))

                for(let i=0; i<Math.abs(difference); i++) {             // creating new elements for the rest of the images
                                                                            // create new row here  
                                                                            // id will be 12 + i
                                                                            // you will need to do a try and catch error for each img
                                                                            // After creating use a continue statement

                    if(i=0){
                        var container = document.createElement('div');     // initial condition you need to create the div container
                        container.classList.add('row', 't');    // create a second class to keep track of new elements created in multi-view
                        
                        var aL = document.createElement('a');
                        aL.href = "#";
                        var img1 = document.createElement('img');
                        img1.src = resIMG[i+galleryLen].art_url;
                        img1.alt = resIMG[i+galleryLen].cardName;
                        img1.id = id;
                        img1.title = resIMG[galleryLen+i].description;      
                        aL.replaceChildren(img1);
                        container.appendChild(aL);
                        multiView.appendChild(container);    // you then append that container into the original multiview element

                       


                        galleryImgs = document.querySelectorAll('.multi-view img');  // updated with the new DOM
                        

                         aL.addEventListener('click', function(event) {
                            event.preventDefault();
                        })


                        count++;
                        id++;
                        



                        
                        if(typeof resIMG[i+1+galleryLen] == undefined) {
                            update()
                            
                            return}                              // checking next iterations within the the first
                       
                        var aL2 = document.createElement('a');
                        aL2.href = '#';
                        var img2 = document.createElement('img');   
                        img2.src = resIMG[i+count+galleryLen].art_url;
                        img2.alt = resIMG[i+count+galleryLen].cardName;
                        img2.id = id;
                        img2.title = resIMG[galleryLen+i+1].description;      
                        aL2.replaceChildren(img2);
                        container.appendChild(aL2);

                       

                        galleryImgs = document.querySelectorAll('.multi-view img');

                         aL2.addEventListener('click', function(event) {
                            event.preventDefault();
                        })

                        count++;
                        id++;

                        if(typeof resIMG[i+2+galleryLen] == undefined) {
                            update();
                            return}
                        
                        var aL3 = document.createElement('a');
                        aL3.href = '#';
                        var img3 = document.createElement('img');
                
                        img3.src = resIMG[i+count+galleryLen].art_url;           // try block here
                        img3.alt = resIMG[i+count+galleryLen].cardName;
                        img3.id = id;
                        img3.title = resIMG[galleryLen+i+2].description;      
                        aL3.replaceChildren(img2);                         
                        container.appendChild(aL3);

                        
                        galleryImgs = document.querySelectorAll('.multi-view img');
                          
                        aL3.addEventListener('click', function(event) {
                            event.preventDefault();
                        })

                                                             
                            count++; 
                            id++; 

                            update();
                            
                            continue;
                      

                    
                    }




                    if(i % 3 == 0) {

                        var j = 0;


                        if(typeof resIMG[count+galleryLen] == undefined) {
                            update();
                            return}

                        var container1 = document.createElement('div');
                        container1.classList.add('row', 't');
                        
                        var aL = document.createElement('a');
                        aL.href = "#";
                        var img1 = document.createElement('img');
                        img1.src = resIMG[count+galleryLen].art_url;      // dont add i becaue it is no lo
                        img1.alt = resIMG[count+galleryLen].cardName;
                        img1.id = id;
                        img1.title = resIMG[count+galleryLen].description;      
                        aL.replaceChildren(img1);
                        container1.appendChild(aL);
                        multiView.appendChild(container1);

                       
                        galleryImgs = document.querySelectorAll('.multi-view img');
                         aL.addEventListener('click', function(event) {
                            event.preventDefault();
                        })


                        id++;
                        count++;

                        

                        if(typeof resIMG[count+galleryLen] == undefined) {
                            update();
                            return}

                      

                       
                        var aL = document.createElement('a');
                        aL.href = "#";
                        var img1 = document.createElement('img');
                        img1.src = resIMG[count+galleryLen].art_url;
                        img1.alt = resIMG[count+galleryLen].cardName;
                        img1.id = id;
                        img1.title = resIMG[count+galleryLen].description;      
                        aL.replaceChildren(img1);
                        container1.appendChild(aL);

                       

                        galleryImgs = document.querySelectorAll('.multi-view img');

                         aL.addEventListener('click', function(event) {
                            event.preventDefault();
                        })

                        id++;
                        count++;
                        

                        

                        if(typeof resIMG[count+galleryLen] == undefined) {

                            
                            update();
                            return}



                        
                           
                       
                        var aL = document.createElement('a');
                        aL.href = "#";
                        var img1 = document.createElement('img');
                  
                        img1.src = resIMG[count+galleryLen].art_url;
                        img1.alt = resIMG[count+galleryLen].cardName;
                        img1.id = id;
                        img1.title = resIMG[count+galleryLen].description;      
                        aL.replaceChildren(img1);
                        container1.appendChild(aL);

                       

                        galleryImgs = document.querySelectorAll('.multi-view img');

                         aL.addEventListener('click', function(event) {
                            event.preventDefault();
                        });

                        id++;
                        count++;

                        update()












                                                                                        // create new row
                                                                                        // id will be 12 + i
                                                                                        // you will need to do a try and catch error for each img

                    }
                   




            
                }


        }

        else {
            for(let i=0; i<resIMG.length; i++) {

                galleryImgs[i].src = resIMG[i].art_url;       
                galleryImgs[i].title = resIMG[i].description;
        
        
        
        
        }
            
        }

    }



    
  }   
}

function handleImages (resIMG){


    var resLen = resIMG.length;
var galleryLen = galleryImgs.length;
var difference = galleryLen - resLen;

artImage.src = resIMG[0].art_url;
singleView.src = resIMG[0].art_url;




if(difference > 0){


    artImage.src = resIMG[0].art_url;     // if the image count from api is less the than the avaliable spaces in the Mulit-view element
    singleView.src = resIMG[0].art_url;

for(let i=0; i<resIMG.length; i++) {

        galleryImgs[i].src = resIMG[i].art_url;       
        galleryImgs[i].title = resIMG[i].description;




}

    
for(let i=galleryLen - difference; i<galleryImgs.length; i++) {

    galleryImgs[i].src = `images/blue-eyes-300-438.jpg`;
    galleryImgs[i].title = `blue-eyes-white-dragon-art`;;




}

}

else if(difference < 0){
    var count = 0;
    var track = 0;
    var tally = 0;
    var id = 13;
    
    var start = true;

   



    for(let i=0; i<galleryImgs.length; i++) {
        galleryImgs[i].src = resIMG[i].art_url;       // filling in the staic inages with the new result
        galleryImgs[i].title = resIMG[i].description;
        galleryImgs[i].alt = resIMG[i].cardName;


    



    }
    //alert(Math.abs(difference))
    alert(difference)

    for(let i=0; i<Math.abs(difference); i++) {  
        if(i=0) {
            track = 0;
        }
        else{
            track = 3;
        }



        if(i % 3!= 0)  {

            tally++;
        }        // creating new elements for the rest of the images
                                                                // create new row here  
                                                                // id will be 12 + i
                                                    
                                                                // After creating use a continue statement

        if(i % 3 == 0){
            var container = document.createElement('div');                    // initial condition you need to create the div container
            container.classList.add('row', 't');                            // create a second class to keep track of new elements created in multi-view
            multiView.appendChild(container);                           // you then append that container into the original multiview element

           


            galleryImgs = document.querySelectorAll('.multi-view img');  // updated with the new DOM
            

              
        }

        

       
        for(let j=0; j<3; j++){

            tally++;

            

            if(start){


                    var aL2 = document.createElement('a');
            aL2.href = '#';
            var img2 = document.createElement('img');   
            img2.src = resIMG[galleryLen + count].art_url;
            img2.alt = resIMG[galleryLen+count ].cardName;
            img2.id = id;
            img2.title = resIMG[galleryLen+count ].description;        // first card, first row
            aL2.replaceChildren(img2);
            container.appendChild(aL2);

           

           

            galleryImgs = document.querySelectorAll('.multi-view img');

             aL2.addEventListener('click', function(event) {
                event.preventDefault();
            })
            
            count++;
             id++;

             start = false;


          
            }

            if(typeof resIMG[galleryLen + i] == "undefined") {  // checks first card of next row
  
                update();
                return;


            }


            


            if(typeof resIMG[galleryLen + track + tally] == "undefined") {    

                

                for(let k=1; k<3-j; k++){

                var aL2Fill = document.createElement('a');
                aL2Fill.href = '#';
                var img2Fill = document.createElement('img');     // appending 2nd or  3rd  card on row
                img2Fill.src = "images/faceDownCard.jpg"
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
                return


            }


            var aL2 = document.createElement('a');
            aL2.href = '#';
            var img2 = document.createElement('img');   
            img2.src = resIMG[galleryLen + count].art_url;
            img2.alt = resIMG[galleryLen+count].cardName;       // next card on row
            img2.id = id;
            img2.title = resIMG[galleryLen+count].description;       
            aL2.replaceChildren(img2);
            container.appendChild(aL2);

            id++;
            count++;

           

            galleryImgs = document.querySelectorAll('.multi-view img');

             aL2.addEventListener('click', function(event) {
                event.preventDefault();
            })







   


        }



    }


}

else {

    for(let i=0; i<resIMG.length; i++) {

        galleryImgs[i].src = resIMG[i].art_url;       
        galleryImgs[i].title = resIMG[i].description;




}

    

}

    

}


cardSearch.addEventListener('click', function() {
    const author = document.querySelector('.authors select');
    const enterCard = document.querySelector('.enterCard input');

   

    alert(author.value)

        if(author.value!= 'Select One' && enterCard.value!= undefined){
           

            alert("name and card");

            
            nameAndCard(author.value, enterCard.value)



            
        }

        if(enterCard.value!= '' && author.value == 'Select One') {


            alert("just card");
            justName(enterCard);

        }

        if(author.value!= 'Select One' && enterCard.value == ''){

            alert("just author");
            justAuthor(author.value);
        }
        

})
















