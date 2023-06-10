(function solution (){

    var parent = document.querySelector('body');
    var child = parent.children;
    var dom = document.querySelector(child[0].nodeName)
   
   
    const a = 0;


    if(child.length == 0){


        return 0
    }


    if(child.length == 1){

         dom.classList.add(`list${a}`)
         

    
      var arr = document.querySelectorAll(`.list${a} ul, .list${a} ol`)
      

      return (arr.length > 0 ? arr.length + 1: 0)
    
    }
   
    
    if(child.length > 1){

        var total = [];




            for(let i = 0; i<child.length - 1; i++){
                var dom = document.querySelector(child[i].nodeName)

                dom.classList.add(`list${i}`)

                var arr = document.querySelectorAll(`.list${i} ul, .list${i} ol`)
                total.push(arr.length)

            }

            const tally = [0];


                for(let i = 0; i<total.length - 1; i++){


                    if(total[i] > 0){
                        tally[0] = total[i] + 1;


                    }
                }

                return tally[0]

    



    }
 
    


    


})();