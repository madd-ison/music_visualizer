var output = [];
function RidgePlots(){
    this.name = 'ridgeplots';
    
    this.draw = function(){
      var startX = width/5;
      var endY = height/5;
      var startY = height - endY;
      var spectrumWidth = (width/5)*3;
      var speed = 0.7;
      var r = random(0, 255);
      var g = random(0, 255);
      var b = random(0, 255);
      background(0);
      stroke(r, g, b);
      if(frameCount % 30 == 0 && sound.isPlaying()){
          output.push([{x: startX, y: startY}, {x: startX + spectrumWidth, y: startY}]);
      }
      for(var i = 0; i < output.length; i++){
          var o = output[i];
          beginShape();
          for(var j = 0; j < o.length; j++){
              o[j].y -= speed;
              vertex(o[j].x, o[j].y);
          }
          endShape();
          if(o[0].y < endY){
              output.splice(i, 1);
          }
      }
    }
}