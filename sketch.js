let puntos = 1000;
let contador = 0;
let inputPuntos;
let botonEjecutar;
let botonLimpiar;
let colorCuadrado;
let colorCirculo;

function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800);
  noLoop(); //Draw solo se ejecuta una vez
  rectMode(CENTER); //los rectangulos se dibujan desde el centro
  inputPuntos = createInput(String(puntos));
  inputPuntos.position(10,20);
  colorCuadrado = createColorPicker('blue');
  colorCirculo = createColorPicker('red');
  botonEjecutar = createButton('Ejecutar');
  botonEjecutar.position(10,80);
  botonEjecutar.mousePressed(ejecutar);
}

function ejecutar(){
  puntos = int(inputPuntos.value());
  contador = 0;
  redraw();
}

function draw() {
  // put drawing code here
 // background(255);
 translate(width/2, height/2);
 let circl = colorCirculo.color();
 let cuad = colorCuadrado.color();
 fill(cuad);
 rect(0,0, width, height);
 fill(circl);
 circle(0,0, width);
 let radio = width/2;
 let lado = width;
 strokeWeight(4);
 stroke(0);
 for(let i=0; i<puntos; i++){
  let x = random(-width/2, width/2);
  let y = random(-height/2, height/2);
  point(x,y);
  let d = distancia(0,0,x,y);
  if(d<=radio){
    contador++;
  }
  let pi = (contador*lado*lado)/(radio*radio*puntos);
  fill(255);
  textSize(28);
  text("Dentro: "+contador,-150, 330);
  text("Total: "+puntos, -150, 360);
  text("Pi: "+pi, -150, 390);
 }

 function distancia(x1, y1, x2, y2){
  return sqrt(pow(x2-x1,2)+pow(y2-y1,2));
 }
}
