var imagenes=["game.jpg","john.jpg","dragon.jpg","dark.jpg","cersei.jpeg"];
var contador=1;

function cambiarImagen(){
    imagen.src="img/"+imagenes[contador];
        contador++;
        if(contador>=imagenes.length){
        contador=0;
       }
} 

function iniciar(){
    setInterval(cambiarImagen,2000);  
}

function cambiarImg(){
    for(i=0;i<lineaBotones.botones.length;i++){ 
        if(lineaBotones.botones[i].checked){
            imagen.src="img/"+lineaBotones.botones[i].value;
            break;
         }
    }
}

function lineaBot(){
    for(i=0;i<lineaBotones.botones.length;i++){
        lineaBotones.botones[i].addEventListener("change",cambiarImg);
} 
     }

function movimientoDer(){
    botonDos.addEventListener("click", cambiarImagen);
 }

function ImagenAtras(){
    imagen.src="img/"+imagenes[contador];
        contador--;
        if(contador<=0){
        contador=imagenes.length-1;
       }
}

function movimientoIzq(){
    botonUno.addEventListener("click", ImagenAtras);
 }

window.addEventListener("load",lineaBot);
        
window.addEventListener("load",movimientoDer);

window.addEventListener("load",movimientoIzq);

window.addEventListener("load",iniciar);






