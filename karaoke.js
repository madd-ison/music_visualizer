var volHistory = [];
function Karaoke(){
	//vis name
	this.name = "karaoke";
    
	this.draw = function() {
      amp.setInput(mic)
      let vol = mic.getLevel();
      volHistory.push(vol);
      beginShape();
        for (let x = 0; x < volHistory.length; x++) {
          noFill();
          stroke(255, 150, 0);
          let y = map(volHistory[x], 0, 1, height, 0);
          vertex(x, y);
        }
      endShape();

      if(volHistory.length > width) {
        volHistory.splice(0,1);
      }
    }
}