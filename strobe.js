function Strobe(){
	//vis name
	this.name = "strobe";
    
	//draw the sphere
	this.draw = function() {
      background(0);

      // Get the overall volume
      amp.setInput(sound)
      var vol = amp.getLevel()
      var r = random(0, 255);
      var g = random(0, 255);
      var b = random(0, 255);
      fill(r, g, b);
      // Draw an ellipse - the higher the volume, the larger the shape
      if(sound.isPlaying()){
       ellipse(random(0, windowWidth), random(0, windowHeight), vol * 10000, vol * 10000)   
      }
    }
}