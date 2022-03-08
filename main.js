
/*created by prashant shukla */

var paddle2 =10,paddle1=10;

var paddle1X = 10,paddle1Height = 110;
var paddle2Y = 685,paddle2Height = 70;

var score1 = 0, score2 =0;
var paddle1Y;

var  playerscore =0;
var audio1;
var pcscore =0;
//ball x and y and speedx speed y and radius
var ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}

function setup(){
  var canvas =  createCanvas(600,600);
  canvas.parent('canvas');
  

}


function draw(){

 background(0); 

 fill("black");
 stroke("black");
 rect(680,0,20,700);
 fill("black");
 stroke("black");
 rect(0,0,20,700);
 
}