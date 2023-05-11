let x=100;
let y=100;
let suaresize = 1000/5-10;




function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  background(255, 00,120);
}

function draw() {


console.log (frameCount);
fill(random(0, 255),random(0, 255));
noStroke()
rect(x, y, suaresize, suaresize, 100,) ;
x = x+200;

stroke("white");
fill(255, 00,0, 20);
rect(300, 500, 55, 55,5);





if(x>width){
  x = 100;
  y = y+200;
}

if(y>height){
x=100
y=100
suaresize =suaresize - 20;
}

if (frameCount == 250){
noLoop();

}

}

function keyPressed(){
if (key === "s") {
  saveCanvas ("quadrate", "png");
}
}




