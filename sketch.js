var text1 = "Move the White Circle Through the Colored Circles";
var circleX = [];
var circleY = [];
var positionX = 75;
var positionY = 375;
var circleColor = [];



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
      circleColor.push(color(random(0,256), random(0,256), random(0,256)));
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
    fill(circleColor[i]);
    ellipse(circleX[i], circleY[i], 150, 150);
  }
}

function hitCircles()
{
  background(0);
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
  for ( var i = 0; i < circleX.length; i++)
  {
  if (dist(positionX,positionY,circleX[i],circleY[i]) < 110)
  {
    circleColor[i] = color(255);
  }
  }
}

//1. Make the array of circles 
//2. Assign the colors. 
//3. Color the circles using the fill() function 
//5. Change the colors to 255 when collides. 






  




