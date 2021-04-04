function setup() {
  createCanvas(windowWidth,windowHeight);
  background(173,216,230);
  frameRate(10)
  
}

function keyTyped () {
  let a ; // branch type
  let b ; // branch start
  let c ; // branch size
  if (key === 'r') {
    a = 10; b = random(500) ; c = 30 ;}  
  else if(key === 'l') {
  a = -10 ; b = random(500) ; c = 30 ;}
  else if(key === 'u') {
    a = 0; b = 0 ; c = 70;}
  branch_startX = windowWidth / 2 ;
  branch_startY = windowHeight - b ;
  for(let branch_size = c ; branch_size > 1 ; 
      branch_size = branch_size - 1)
  {circle(branch_startX,branch_startY,branch_size) ;
      branch_startX = branch_startX + a  ;
      branch_startY = branch_startY - 10 ;
      noStroke() ;
      fill(random(160,181), 155,124) ;
}
}

function draw(){
  if (mouseIsPressed) {
    translate(mouseX, mouseY);
    stroke(220,210,80) ;
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 5, 5, 10);
      rotate(PI/5);
      fill(255) ;
    } 
}
}
