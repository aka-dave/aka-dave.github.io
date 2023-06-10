(function solution (){

    var parent = document.querySelector('body');
    var child = parent.children;
 
    console.log(child.children)
    var cArr = Array.from(child)
    console.log(cArr[0])

 
    var counter = 0;
    if(child.length == 0){
            return 0;

    }

  function loop (dom, ar){

    console.log(dom.children)   
    if( dom.children,length == 0){

        console.log(900)       




           return ar;

    }
 

 for(let i = 0;  i< dom -1; i++){

       
        if(dom[i].children.length > 0){
            console.log(true)
           

            let child2 = dom[i].children;

            
            for(let j =0; j<child2 - 1; j++){

                if(child2[j].nodeName == 'OL' || child2[j].nodeName == 'UL'){  


                    ar.push(1);
                    console.log(true)


                         }
            ar =  loop(dom[i].children, ar) ;
            console.log(ar);      


            }




            

        }

        
    }

    return ar;


   }


    var count = [];

    const deep =  loop(child, count).length;

       

   


   console.log(deep) ;
    
   



   

    


    


})();