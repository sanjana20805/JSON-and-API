var drop,rain = []
var backgroundImg, hr

function preload() {
  //backgroundImg = loadImage("winter background.jpg");
  getTime();
  
 
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  for(var i=0; i<400; i=i+1){
    drop = new Drop(random(0,width), random(0,height))
    rain.push(drop);
  }

  
  
  
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }

  

 

  for(var i=0; i<rain.length; i=i+1){
    rain[i].display()
    rain[i].fall();
    
  }
  
}

async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json()
  var time = responseJSON.datetime;
  var hr = time.slice(11,13)
  if(hr >= 5 && hr <=12){
    backgroundImg = loadImage("morning.jpg");
  }else if(hr >12 && hr <=16){
    backgroundImg = loadImage("afternoon.jpg");
  }else if(hr >16 && hr <=19){
    backgroundImg = loadImage("evening.jpg");
  }else if(hr >19){
    backgroundImg = loadImage("night.jpg");
  }


}

