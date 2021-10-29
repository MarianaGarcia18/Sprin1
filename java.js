const button = document.getElementById('calculateValue') 
const input = document.getElementById('amountInput') 

button.onclick=function(){ 
    const value= input.value
    // navego a la seccion y paso la cantidad de computadores comprados 
    window.location.replace( 'index1.html?computadores='+value) 
 }
