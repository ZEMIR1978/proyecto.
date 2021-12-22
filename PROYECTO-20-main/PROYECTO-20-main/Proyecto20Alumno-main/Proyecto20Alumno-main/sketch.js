//Quita de aqui al astronauta y ponlo dentro de setup, agregale la animacion de dormir





//Borra las variables que ya no vas a usar
var bg,bgimg;
var bath,bathimg;
var brush,brushimg;
var drink,drinkimg;
var eat,eatimg;
var gym,gymimg;
var move,moveimg;
var sleep,sleepimg;

//declara la variable para el astronauta y los bordes
var astronaut; 
var edges;
function preload(){
  /*Tienes imagenes que no ocupas como las de drink, esas las puedes omitir
  o las puedes agregar con las de bath, si te das cuenta traen el mismo vaso, talvez puede quedar bien.

  Fijate bien que todo este escrito bien, recuerda que por una letra no va a correr el programa

  Opcional: las animaciones las hace muy rapido, puedes mandar a llamar la misma imagen varias veces
  por ejemplo: eatimg = loadAnimation("eat1.png", "eat1.png", "eat2.png", "eat2.png");
  */
  bgimg = loadImage("iss.png");
  bathimg = loadAnimation("bath1.png","bath2.png");
  brushimg = loadAnimation("brush.png");
  drinkingimg = loadAnimation("drink1.pmg","drink2.png");
  eatimg = loadAnimation("eat1.png","eat2.png");
  gymimg = loadAnimation("gym1.png","gym2.png");
  moveimg = loadAnimation("move.png","move1.png");
  sleepimg = loadAnimation("sleep.png");
  
}






function setup() {
  createCanvas(800,400);


   // crea un sprite para el astronauta, agrega la imagen de dormir y escala la imagen a 0.1
   var astronaut= createSprite(300,230);
   astronaut.ddAnimation(sleepimg);
   astronaut.scale = 0.1;
  //Borra toda esta parte como lo comentamos en clase

}

function draw() {
  //agrega bgimg dentro de los parentesis background o puedes practicar esta forma de agregar la imagen de fondo image(bgimg,0,0,800,400)
  background(bgimg);  
  drawSprites();
  text("instruciones",10,10);
  text("Flecha hacia arriba = Cepillarse",10,20);
  text("Flecha hacia abajo = Ejercitarse",10,30);
  text("Flecha Izq = Comer",10,40);
  text("Flecha derecha = bañarse",10,50);
  text("tecla m = Moverse",10,60);

  //crea los bordes para que el astronauta no se salga del canvas
  edges=createEdges()
  //haz que el astronauta rebore en todos los bordes (bounceOff)
  astronaut.bounceOff(edges)

  //Todos tus If los dejaste fuera de la funcion draw
  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing",brushimg)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350;
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  
  
  
  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gym",gymimg)
    astronaut.changeAnimation("gym")
    astronaut.y = 350;
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  
  
  
  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eat",eatimg)
    astronaut.changeAnimation("eat")
    astronaut.y = 350;
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  
  
  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bath",bathimg)
    astronaut.changeAnimation("bath")
    astronaut.y = 350;
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  
  
  
  
  if (keyDown("M")) {
    astronaut.addAnimation("move",moveimg)
    astronaut.changeAnimation("move")
    astronaut.y = 350;
    astronaut.velocityX=2
    astronaut.velocityY=-2
  }


}





