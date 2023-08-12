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
    var id = 13;
    var j = 0;

   



    for(let i=0; i<galleryImgs.length; i++) {
        galleryImgs[i].src = resIMG[i].art_url;       // filling in the staic inages with the new result
        galleryImgs[i].title = resIMG[i].description;
        galleryImgs[i].alt = resIMG[i].cardName;


    



    }
    //alert(Math.abs(difference))
    alert(difference)

    for(let i=0; i<Math.abs(difference); i++) {             // creating new elements for the rest of the images
                                                                // create new row here  
                                                                // id will be 12 + i
                                                    
                                                                // After creating use a continue statement

        if(i=0){
            var container = document.createElement('div');     // initial condition you need to create the div container
            container.classList.add('row', 't');    // create a second class to keep track of new elements created in multi-view
            
            var aL = document.createElement('a');
            aL.href = "#";
            var img1 = document.createElement('img');
            img1.src = resIMG[i+galleryLen].art_url;
            img1.alt = resIMG[i+galleryLen].cardName;         // first card in row
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
            j++;
            



            
            if(typeof resIMG[i+1+galleryLen] == undefined) {           // appending 2 face down cards to the row

                var aL2Fill = document.createElement('a');
                aL2Fill.href = '#';
                var img2Fill = document.createElement('img');   
                img2Fill.src = "images/faceDownCard.jpg"
                img2Fill.alt = "EmptySpace";
                img2Fill.id = id;
                img2Fill.title = "empty"      
                aL2Fill.replaceChildren(img2Fill);
                container.appendChild(aL2Fill);
    
               
    
    
                 aL2Fill.addEventListener('click', function(event) {
                    event.preventDefault();
                })

                var aL2Fill2 = document.createElement('a');
                aL2Fill2.href = '#';
                var img2Fill2 = document.createElement('img');   
                img2Fill2.src = "images/faceDownCard.jpg"
                img2Fill2.alt = "EmptySpace";
                img2Fill2.id = id + 1;
                img2Fill2.title = "empty"      
                aL2Fill2.replaceChildren(img2Fill2);
                container.appendChild(aL2Fill2);
    
               
    
                galleryImgs = document.querySelectorAll('.multi-view img');
    
                 aL2Fill2.addEventListener('click', function(event) {
                    event.preventDefault();
                })



                update()
                
                return}                             
           
            var aL2 = document.createElement('a');
            aL2.href = '#';
            var img2 = document.createElement('img');   
            img2.src = resIMG[i+count+galleryLen].art_url;
            img2.alt = resIMG[i+count+galleryLen].cardName;
            img2.id = id;
            img2.title = resIMG[galleryLen+i+1].description;        // second card in row
            aL2.replaceChildren(img2);
            container.appendChild(aL2);

           

            galleryImgs = document.querySelectorAll('.multi-view img');

             aL2.addEventListener('click', function(event) {
                event.preventDefault();
            })

            count++;
            id++;
            j++;

            if(typeof resIMG[i+2+galleryLen] == undefined) {       // Appending 1 face down card to the row

                var aL2Fill3 = document.createElement('a');
                aL2Fill3.href = '#';
                var img2Fill3 = document.createElement('img');   
                img2Fill3.src = "images/faceDownCard.jpg"
                img2Fill3.alt = "EmptySpace";
                img2Fill3.id = id;
                img2Fill3.title = "Empty"     
                aL2Fill3.replaceChildren(img2Fill3);
                container.appendChild(aL2Fill3);
    
               
    
                galleryImgs = document.querySelectorAll('.multi-view img');
    
                 aL2Fill2.addEventListener('click', function(event) {
                    event.preventDefault();
                })
                update();
                return}
            
            var aL3 = document.createElement('a');
            aL3.href = '#';
            var img3 = document.createElement('img');
    
            img3.src = resIMG[i+count+galleryLen].art_url;           // end of first row
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
                j++;

                update();
                
                continue;
          

        
        }






        if(i % 3 == 0) {

            
                  if(typeof resIMG[i+galleryLen] == "undefined") {         // exiting out without updating since it was updated prior

                return}

            

        

            var container1 = document.createElement('div');
            container1.classList.add('row', 't');
            
            var aLR = document.createElement('a');
            aLR.href = "#";
            var imgR1 = document.createElement('img');
            imgR1.src = resIMG[count+galleryLen].art_url;      // First card in row
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
            j++;

            

            if(typeof resIMG[i+4+galleryLen] == "undefined") {

            var aLRFillc = document.createElement('a');
            aLRFillc.href = "#";
            var imgR1Fillc = document.createElement('img');
            imgR1Fillc.src = "images/faceDownCard.jpg"      
            imgR1Fillc.alt = "emptySpace"
            imgR1Fillc.id = id;
            imgR1Fillc.title = "empty"      
            aLRFillc.replaceChildren(imgR1Fillc);
            container1.appendChild(aLRFillc);
           

           
            galleryImgs = document.querySelectorAll('.multi-view img');
             aLRFillc.addEventListener('click', function(event) {                     // appending two facedown cards to the row
                event.preventDefault();
            })
                                                                           

            var aLRFillc2 = document.createElement('a');
            aLRFillc2.href = "#";
            var imgR1Fillc2 = document.createElement('img');
            imgR1Fillc2.src = "images/faceDownCard.jpg"      
            imgR1Fillc2.alt = "emptySpace"
            imgR1Fillc2.id = id+1;
            imgR1Fillc2.title = "empty"      
            aLRFillc2.replaceChildren(imgR1Fillc2);
            container1.appendChild(aLRFillc2);
            

           
            galleryImgs = document.querySelectorAll('.multi-view img');
             aLRFillc2.addEventListener('click', function(event) {
                event.preventDefault();
            })





                update();
                return}

          

           
            var aLR2 = document.createElement('a');
            aLR2.href = "#";
            var imgR2 = document.createElement('img');
            imgR2.src = resIMG[count+galleryLen].art_url;
            imgR2.alt = resIMG[count+galleryLen].cardName;
            imgR2.id = id;
            imgR2.title = resIMG[count+galleryLen].description;         // second card in row 
            aLR2.replaceChildren(imgR2);
            container1.appendChild(aLR2);

           

            galleryImgs = document.querySelectorAll('.multi-view img');

             aLR2.addEventListener('click', function(event) {
                event.preventDefault();
            })

            id++;
            count++;
            j++;

            alert("third card")
            alert(typeof resIMG[i+5+galleryLen] )


             
            

            if(typeof resIMG[i+5+galleryLen] == "undefined") {

                alert("j");

                

                

                    var aLRFillc3 = document.createElement('a');
                    aLRFillc3.href = "#";
                    var imgR1Fillc3 = document.createElement('img');
                    imgR1Fillc3.src = "images/faceDownCard.jpg"          // appending 1 face down card to the row
                    imgR1Fillc3.alt = "emptySpace"
                    imgR1Fillc3.id = id;
                    imgR1Fillc3.title = "empty"      
                    aLRFillc3.replaceChildren(imgR1Fillc3);
                    container1.appendChild(aLRFillc3);
                    
        
                   
                    galleryImgs = document.querySelectorAll('.multi-view img');
                     aLRFillc3.addEventListener('click', function(event) {
                        event.preventDefault();
                    })



                
                update();
                return}



            
               
           
            var aLR3 = document.createElement('a');
            aLR3.href = "#";
            var imgR3 = document.createElement('img');
      
            imgR3.src = resIMG[count+galleryLen].art_url;          // reached the end of the row
            imgR3.alt = resIMG[count+galleryLen].cardName;
            imgR3.id = id;
            imgR3.title = resIMG[count+galleryLen].description;      
            aLR3.replaceChildren(imgR3);
            container1.appendChild(aLR3);

           

            galleryImgs = document.querySelectorAll('.multi-view img');

             aLR3.addEventListener('click', function(event) {
                event.preventDefault();
            });

            id++;
            count++;
            j++;

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