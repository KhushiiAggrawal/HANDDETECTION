let canvas;
let sketch =function(p){
  p.setup=function(){
    canvas=p.createCanvas(640,480, p.WEBGL);
    
  }
  p.draw =function(){
    p.clear();
    //p.translate(-p.width/2 ,-p.height/2);

    if(detections != undefined){
      if(detections.multiHandLandmarks != undefined){
          p.drawHands();
      }
    }}

    p.drawHands = function(){
      p.stroke(0);
      p.strokeWeight(10);
      for(let i=0; i<detections.multiHandLandmarks.length; i++){
        for(let j=0; j<detections.multiHandLandmarks[i].length; j++){
          let x = detections.multiHandLandmarks[i][j].x * p.width;
          let y = detections.multiHandLandmarks[i][j].y * p.height;
          let z = detections.multiHandLandmarks[i][j].z;

          p.point(x, y, z);
        }
      }
    }

  }


let myp5 = new p5(sketch);

