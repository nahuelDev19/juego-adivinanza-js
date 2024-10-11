let numRandom= Math.floor(Math.random()*100)+1;

let numeroDeEntrada= document.getElementById('numeroEntrada');
let mensaje= document.getElementById('mensaje');


function checar(){

    let numeroIngresado= parseInt(numeroDeEntrada.value);
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent ='por favor ingresa un numero valido entre el 1 y el 100';
        mensaje.style.color= "red";

        return
    }

    if(numeroIngresado === numRandom){
        mensaje.textContent="en hora buena, haz acertado";
        mensaje.style.color= "green";
    }else if(numeroIngresado < numRandom){
        mensaje.textContent="intenta otra vez, tu numero es menor al correcto";
        mensaje.style.color= "blue";

    }else if(numeroIngresado > numRandom){
        mensaje.textContent="intenta otra vez, tu numero es mayor al correcto";
        mensaje.style.color= "blue";

    }


}