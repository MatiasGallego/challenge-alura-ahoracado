var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var radius=25; 


function iniciarTablero(){
    
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    pincel.fillStyle = "black";   
    pincel.beginPath();
    pincel.moveTo(250,550);
    pincel.lineTo(250,150);
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(250,150);
    pincel.lineTo(450,150);
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(450,150);
    pincel.lineTo(450,190);
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(250,550);
    pincel.lineTo(180,590);
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(250,550);
    pincel.lineTo(320,590);
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(180,590);
    pincel.lineTo(320,590);
    pincel.stroke();
  
}

function cabeza(){  
    pincel.fillStyle = "black";    
    pincel.moveTo(450,200);    
    pincel.arc(450,200, radius, 30, 0, 2 * Math.PI);
    pincel.stroke();
}
function cuerpo(){    
    pincel.beginPath();
    pincel.moveTo(450,200);
    pincel.lineTo(450,400);
    pincel.stroke();
}
function brazoDerecho(){    
    pincel.beginPath();
    pincel.moveTo(450,250);
    pincel.lineTo(520,290);
    pincel.stroke();
}
function brazoIzquierdo(){
    pincel.beginPath();
    pincel.moveTo(450,250);
    pincel.lineTo(380,290);
    pincel.stroke();
}
function piernaDerecha(){
    pincel.beginPath();
    pincel.moveTo(450,400);
    pincel.lineTo(520,430);
    pincel.stroke();
}
function piernaIzquierda(){
    pincel.beginPath();
    pincel.moveTo(450,400);
    pincel.lineTo(380,430);
    pincel.stroke();
}


function escribirLetra(letra){

    pincel.clearRect(645, 210, 1500, 55);
    texto="Letras equivocadas:";
    pincel.beginPath()
    pincel.fillStyle="black"; 
    pincel.font="bold 20px arial"; 
    pincel.fillText(texto,700,230); 
    texto=letra;
    pincel.beginPath()
    pincel.fillStyle="red"; 
    pincel.font="bold 20px arial"; 
    pincel.fillText(texto,700,260);    
}

function escribirPalabraSecreta(letra){
    
    pincel.clearRect(375, 560,800, 40);
    pincel.beginPath()
    pincel.fillStyle="black"; 
    pincel.font="bold 30px arial";      
    pincel.fillText(letra,380,590); 
    
}


function mensajeFinal(mensaje,color){
        
    pincel.beginPath()
    pincel.fillStyle=color; 
    pincel.font="bold 40px arial";      
    pincel.fillText(mensaje,700,400); 
    
}

