let btn = document.querySelectorAll('#btn')
let input = document.querySelector('input')
let string = ''
btn.forEach(element => {
    
    element.addEventListener('click',function(btn){
        if(btn.target.innerHTML == 'Clear'){
            string=''
            input.value = string
        }
        else if(btn.target.innerHTML == '='){
            string=input.value
            string=eval(string)
            input.value=string
            
        }
        else if(btn.target.innerHTML == 'Del'){
           
            string=string.toString();
            string = string.slice(0,-1);
            input.value = string;
        }
        else{
            string += btn.target.innerHTML
            input.value = string
        }
        
    })

});