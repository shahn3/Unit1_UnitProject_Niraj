var circleX = [];
var circleY = [];
var numCircles = 10;
var text1 = "Click Anywhere to play whack-a-color... Do not hit empty circles.";

function setup() 
{
  createCanvas(1250,750);
  background(0);
  circleX = numCircles; 
  circleY = numCircles; 
}

function draw() 
{
  startScreen();
  makeCircles();
}

function startScreen()
{
  textSize(32);
  textFont("Georgia");
  textAlign(CENTER);
  fill(255);
  text(text1,300,300,700,500);
}

function mousePressed()
{
  background(255);
}

function makeCircles ()
{
  fill(0)
  ellipse(200,100,150,150);
  ellipse(400,100,150,150);
  ellipse(600,100,150,150);
  ellipse(800,100,150,150);
  ellipse(1000,100,150,150);
  ellipse(200,275,150,150);
  ellipse(200,450,150,150);
  ellipse(200,625,150,150);
  ellipse(400,275,150,150);
  ellipse(600,275,150,150);
  ellipse(800,275,150,150);
  ellipse(1000,275,150,150);
  ellipse(400,450,150,150);
  ellipse(600,450,150,150);
  ellipse(800,450,150,150);
  ellipse(1000,450,150,150);
  ellipse(400,625,150,150);
  ellipse(600,625,150,150);
  ellipse(800,625,150,150);
  ellipse(1000,625,150,150);
}

var circleX = [];
var circleY = [];

function setup() 
{
  createCanvas(1250, 750);
  for (var y = 0; y < height/80; y++)
  {
    for (var x = 0; x < width/80; x++)
    {
      circleX.push(x*80+40);
      circleY.push(y*80+40);
    }
  }
}

function draw() 
{
  background(0);
  for ( var i = 0; i < circleX.length; i++)
  {
    if ( dist(mouseX, mouseY, circleX[i], circleY[i]) < 40  && mouseIsPressed)
    {
      circleX[i] = mouseX;
      circleY[i] = mouseY;
      fill(255,0,0); 
    }
    else
    {
      fill(255);
    }
      ellipse(circleX[i], circleY[i], 80, 80);
  }
}

