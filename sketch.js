var hr,mn,sc;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  hr=hour();
  mn=minute();
  sc=second();
}

function draw() {
  background(0);
  angleMode(DEGREES);
  
  sc=second();
   noFill();
    stroke("cyan"); 
  scAngle = map(sc,0,60,0,360); 
  strokeWeight(4);
   arc(370,170,275,255,0,scAngle);
  
   mn=minute();
   noFill();
    stroke("red"); 
  scAngle = map(mn,0,60,0,360); 
  strokeWeight(7);
   arc(372,152,175,155,0,scAngle);

   hr=hour();
   noFill();
    stroke("yellow"); 
  scAngle = map(hr,0,60,0,360); 
  strokeWeight(7);
   arc(367,160,225,200,0,scAngle);
 
  drawSprites();
  textSize(30);
  fill("white");
  text(mouseX + "," + mouseY,30,30);
}