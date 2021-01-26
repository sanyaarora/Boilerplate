
var xpos=250;
var ypos=250;
var start=false;
var y=false;


function setup() {
  createCanvas(500,500);
  console.log("setup")
}

function draw(){
	background(255,255,255)
	fill(255, 0,0)
	if(start=true){
		ellipse(mouseX, mouseY, 10, 10)
		var side=Math.floor(Math.random() * 2 + 1)
		var pos=Math.floor(Math.random() * 500 + 1)
		var size=Math.floor(Math.random() * 50 + 1)
		if(side==2){
			y=true;
			xpos=500
			ypos=pos
		}
		else if (side==1){
			y=false;
			xpos=pos;
			ypos=500;
		}

		ellipse(xpos,ypos,size size)
		if(y){
			xpos-=1;
			ypos+=1;
		}

	
	}
	

}

function reset(){
	start=false;
}

function circles(){

}

function mousePressed(){
	start=true;
}