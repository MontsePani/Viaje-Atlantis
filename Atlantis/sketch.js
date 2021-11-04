var submarino;

var agua;

var burbujas;
var burbujasSonido;

var delfin;
var delfinSonido;

var ballena;
var ballenaSonido;

var kraken;
var krakenSonido;
var alarmaSonido;

var sirena;
var aguaSonido;

var atlantis;
var atlantisSonido;

var boton = 0;

var analisis;

function preload() {
  burbujasSonido = loadSound("burbujas.mp3");
  delfinSonido = loadSound("delfin.mp3");
  ballenaSonido = loadSound("ballena.mp3");
  krakenSonido = loadSound("kraken.mp3");
  aguaSonido = loadSound("agua.mp3");
  atlantisSonido = loadSound("atlantis.mp3");
  alarmaSonido = loadSound("Alarma.mp3");

}

function setup() {
  createCanvas(1200, 600);
  background(220);

  submarino = loadImage("submarino.jpg");
  agua = loadImage("agua.jpg");
  burbujas = loadImage("burbujas.gif");
  delfin = loadImage("delfin.gif");
  ballena = loadImage("ballena.gif");
  kraken = loadImage("Kraken.png");
  sirena = loadImage("sirena.gif");
  atlantis = loadImage("atlantis.jpg");
  
    
  analisis = new p5.Amplitude();
  analisis.setInput (burbujasSonido);
  analisis.setInput (delfinSonido);
  analisis.setInput (ballenaSonido);
   analisis.setInput (krakenSonido);
  analisis.setInput (aguaSonido);
  analisis.setInput (atlantisSonido);
  
}

function draw() {
  background(222);
  
  imageMode(CENTER);
  
  image(submarino, width/2, height/2, width, height);
  
  var valor1 = analisis.getLevel();
  var valor2 = analisis.getLevel();
  var valor3 = analisis.getLevel();
  var valor4 = analisis.getLevel();
  var valor5 = analisis.getLevel();
  var valor6 = analisis.getLevel();
  
  noStroke();
  fill(65,175,99);


  if (boton == 0) {
    image(agua, width / 2, 200, 800, 500);
    burbujasSonido.stop();
    delfinSonido.stop();
    ballenaSonido.stop();
    krakenSonido.stop();
    alarmaSonido.stop();
    aguaSonido.stop();
    atlantisSonido.stop();
  } else {
  }

  if (boton == 1) {
    image(burbujas, width / 2, 200, 800, 500);
    ellipse(792,545,valor1*300,valor1*300);
    if (burbujasSonido.isPlaying()) {
      delfinSonido.stop();
      ballenaSonido.stop();
      krakenSonido.stop();
      alarmaSonido.stop();
      aguaSonido.stop();
      atlantisSonido.stop();
    } else {
      burbujasSonido.play();
    }
  }

  if (boton == 2) {
    image(delfin, width / 2, 200, 800, 500);
    ellipse(792,545,valor2*300,valor2*300);
    if (delfinSonido.isPlaying()) {
      burbujasSonido.stop();
      ballenaSonido.stop();
      krakenSonido.stop();
      alarmaSonido.stop();
      aguaSonido.stop();
      atlantisSonido.stop();
    } else {
      delfinSonido.play();
    }
  }

  if (boton == 3) {
    image(ballena, width / 2, 200, 800, 500);
    ellipse(792,545,valor3*300,valor3*300);
    if (ballenaSonido.isPlaying()) {
      burbujasSonido.stop();
      delfinSonido.stop();
      krakenSonido.stop();
      alarmaSonido.stop();
      aguaSonido.stop();
      atlantisSonido.stop();
    } else {
      ballenaSonido.play();
    }
  }

  if (boton == 4) {
    image(kraken, width / 2, 200, 800, 500);
     ellipse(792,545,valor4*300,valor4*300);
    fill(220, 0, 0, 100);
    noStroke();
    rect(0, 0, width, height);
    if (krakenSonido.isPlaying()) {
      burbujasSonido.stop();
      delfinSonido.stop();
      ballenaSonido.stop();
      aguaSonido.stop();
      atlantisSonido.stop();
    } else {
      krakenSonido.play();
      alarmaSonido.play();
    }
  }
  
  if (boton == 5) {
    image(sirena, width / 2, 200, 800, 500);
    ellipse(792,545,valor5*300,valor5*300);
    if (aguaSonido.isPlaying()) {
      burbujasSonido.stop();
      delfinSonido.stop();
      ballenaSonido.stop();
      krakenSonido.stop();
      alarmaSonido.stop();
      atlantisSonido.stop();
    } else {
      aguaSonido.play();
    }
  }
  if (boton == 6) {
    image(atlantis, width / 2, 200, 800, 500);
    ellipse(792,545,valor6*300,valor6*300);
    if (atlantisSonido.isPlaying()) {
      burbujasSonido.stop();
      delfinSonido.stop();
      ballenaSonido.stop();
      krakenSonido.stop();
      alarmaSonido.stop();
      aguaSonido.stop();
    } else {
      atlantisSonido.play();
    }
  }
  
  
}

function keyTyped() {
  if (key == "0") {
    boton = 0;
  }
  if (key == "1") {
    boton = 1;
  }
  if (key == "2") {
    boton = 2;
  }
  if (key == "3") {
    boton = 3;
  }
  if (key == "4") {
    boton = 4;
  }
  if (key == "5") {
    boton = 5;
  }
  if (key == "6") {
    boton = 6;
  }
}
