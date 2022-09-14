let resultScreen = document.querySelector('#Screen')
       
        let calculate = (number) => {
            resultScreen.value += number;     
        }
        
        function Result(){  
            try{
                resultScreen.value = eval(resultScreen.value)
            } 
            catch(err){
                resultScreen.value = ['error!']    
            }   
        }

        function clr () {
            resultScreen.value = ''
        }
        function on() {
            resultScreen.value = '0'
            
        }

        function del () {
            resultScreen.value = resultScreen.value.slice(0, -1)
        }