var text1 = "Move the Black Circle Through the Colored Circles";
var circleX = [];
var circleY = [];
var positionX = 75;
var positionY = 375;



function setup() 
{
  createCanvas(1250,750);
  background(0);
  for (var y = 0; y < height/150; y++)
  {
    for (var x = 0; x < width/150; x++)
    {
      circleX.push(x*150+275);
      circleY.push(y*150+80);
    }
  }
}

function draw() 
{
  hitCircles();
  startScreen();
  if (mouseIsPressed)
  {
  makeCircles();
  }
}

function startScreen()
{
  textSize(32);
  textFont("Georgia");
  textAlign(CENTER);
  fill(255);
  text(text1,300,300,700,500);
}

function makeCircles()
{
  background(0);
  for ( var i = 0; i < circleX.length; i++)
  {
    fill(random(0,256), random(0,256), random(0,256));
    ellipse(circleX[i], circleY[i], 150, 150);
  }
}

function hitCircles()
{
  fill(255);
  ellipse(positionX,positionY,70,70)
  if (keyIsDown(UP_ARROW)) 
  {
    positionY -= 4;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    positionY += 4;
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    positionX -= 4;
  }

  if (keyIsDown(RIGHT_ARROW)) 
  {
    positionX += 4;
  }
  var leftSide   = positionX - 35;
  var rightSide  = positionX + 35;
  var topSide    = positionY - 35;
  var bottomSide = positionY + 35;

  for (var i = 0; i < circleX.length; i++) 
  {
    if (leftSide < circleX[i] + 70 && leftSide > circleX[i] ||
       rightSide < circleX[i] + 70 && rightSide > circleX[i]) 
      {
        if  (topSide > circleY[i] + 70 && topSide < circleY[i] ||
          bottomSide > circleY[i] && bottomSide < circleY[i] + 70)
        {
         circleX;
         fill(0);
        }
      }
}
}








  




