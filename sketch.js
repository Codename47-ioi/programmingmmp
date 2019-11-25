var r = 255;
var g = 150;
var b = 127;
//The setup function only happens once
function setup() {
	createCanvas(1000, 1000); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(400,100,100); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(r,g,b,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,500,500); // center of canvas, 20px dia
    
    textSize (20);
    textFont ("Georgia");
    textStyle (BOLD);
    translate(mouseX, mouseY);
    rotate(degrees(frameCount) );
    text("o==[]::::::::::::::::>", 0, 0);
}
function mousePressed() {
    r = random(0,255);
     g = random(0,255);
     b = random(0,255);
}
