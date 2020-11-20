var moverec,rec;




function setup() {
  createCanvas(1200,800);
  rec= createSprite(600, 200, 50, 50);
  moverec=createSprite(200,200,60,40);
  rec.shapeColor="orange";
  moverec.shapeColor="orange";
}

function draw() {
  background(0);  
  moverec.x=mouseX;
  moverec.y=mouseY;

  if (moverec.x - rec.x < rec.width/2 + moverec.width/2 && rec.x - moverec.x < rec.width/2 + moverec.width/2
    && moverec.y - rec.y < rec.height/2 + moverec.height/2 && rec.y - moverec.y< rec.height/2 + moverec.height/2 ){
    rec.shapeColor="lightblue";
    moverec.shapeColor="lightblue";
 }
 else{
  rec.shapeColor="orange";
  moverec.shapeColor="orange";

 }

  drawSprites();
}