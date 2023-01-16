
countdown = function(count){
    let i= count
    function clock(){
        if (i>0){
            console.log(i)
            i = i -1
        } else{
            
                clearInterval(id)
                setTimeout(console.log("Done"),1000)
            }

        }
        const id = setInterval(clock, 1000)
    }

    

randomGame = function(){
        let i=0
        function dice(){
            i = i+1
            let randomNum = Math.random()
            if(randomNum < 0.75){
                console.log(randomNum)
            }else{
                console.log(randomNum)
                console.log(`It took ${i} tries`)
                clearInterval(id)
            }
     
            }
        
            const id = setInterval(dice, 1000)
        }
        

        
        function countDown2(time){
            let timer = setInterval(function(){
              time--;
              if(time <= 0){
                clearInterval(timer);
                console.log('DONE!');
              }
              else {
                console.log(time);
              }
          
            },1000)
          }

          countDown2(10)


function randomGame2(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  }

  randomGame2()