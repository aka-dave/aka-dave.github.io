
function handleImages (resIMG) {


    var resLen = resIMG.length;
var galleryLen = galleryImgs.length;
var difference = galleryLen - resLen;

artImage.src = resIMG[0].art_url;

singleView.src = resIMG[0].art_url;
card.src = "images/faceDownCardNEW1.jpg";




if(difference > 0){


    artImage.src = resIMG[0].art_url;     // if the image count from api is less the than the avaliable spaces in the Mulit-view element
    singleView.src = resIMG[0].art_url;

for(let i=0; i<resIMG.length; i++) {

        galleryImgs[i].src = resIMG[i].art_url;       
        galleryImgs[i].title = resIMG[i].cardName;
        galleryImgs[i].alt = resIMG[i].cardName;





}

    
for(let i=galleryLen - difference; i<galleryImgs.length; i++) {

    galleryImgs[i].src = `images/faceDownCardNEW1.jpg`;
    galleryImgs[i].title = `empty`;
    galleryImgs[i].alt = `EmptySpace`;




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
        galleryImgs[i].title = resIMG[i].cardName;
        galleryImgs[i].alt = resIMG[i].cardName;


    



    }
    //alert(Math.abs(difference))
    alert(difference)

    for(let i=0; i<Math.abs(difference); i++) { 

        if(i == 0){
            var container = document.createElement('div');     // initial condition you need to create the div container
            container.classList.add('row', 't');                     // create a second class to keep track of new elements created in multi-view
            multiView.appendChild(container);                       // you then append that container into the original multiview element


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
            
            continue;
              
        }
        
      
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
                img2Fill.src = "images/faceDownCardNEW1.jpg"
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

         if(i % 3 == 0) {



            for(let k=0; k<2; k++){

                var aL2Fill = document.createElement('a');
                aL2Fill.href = '#';
                var img2Fill = document.createElement('img');     // reached the first successfully, now need to in gaps
                img2Fill.src = "images/faceDownCardNEW1.jpg"         // This is scalable, all you need to do is end the loop at number of columns - 1
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



     


       
 
                                                               // creating new elements for the rest of the images
                                                                // create new row here  
                                                                // id will be 12 + i
                                                    
                                                                // After creating use a continue statement

        if(i % 3 == 0){
            var container = document.createElement('div');     // initial condition you need to create the div container
            container.classList.add('row', 't');                     // create a second class to keep track of new elements created in multi-view
            multiView.appendChild(container);                       // you then append that container into the original multiview element

           


            galleryImgs = document.querySelectorAll('.multi-view img');  // updated with the new DOM
            

              
        }

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
        galleryImgs[i].title = resIMG[i].description;
        galleryImgs[i].alt = resIMG[i].cardName;




}

    

}
}
