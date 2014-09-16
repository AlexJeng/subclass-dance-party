var ColorChangeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.counter = 0;
  this.distance = 100;
  this.moveX = 1;
  this.moveY = 1;
  this.top = top;
  this.left = left;
};

ColorChangeDancer.prototype = Object.create(Dancer.prototype);
ColorChangeDancer.prototype.constructor = ColorChangeDancer;

ColorChangeDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if(this.counter % 2 == 0) {
   this.$node.css('border-color',"blue");
 }
 else {
  this.$node.css('border-color','red');
 }
 this.counter++;
 ColorChangeDancer.prototype.checkNeighbors.call(this);
};

 //this.$node.position = ( currentposition + x, current position + y)
 //


ColorChangeDancer.prototype.checkNeighbors = function() {

  for (var i=0; i<window.dancers.length; i++) {
    var dancer = window.dancers[i];
    var meTop = parseInt(this.$node.css('top'));
    var meLeft = parseInt(this.$node.css('left'));
    var otherTop = parseInt(dancer.$node.css('top'));
    var otherLeft = parseInt(dancer.$node.css('left'));
    if (dancer instanceof ColorChangeDancer) {
       this.distance = Math.sqrt(Math.abs(Math.pow(meTop - otherTop, 2) + Math.pow(meLeft - otherLeft, 2)));
      if (this.distance < 150 && this.distance !== 0) {
        console.log("distance: " + this.distance);
        this.moveY = otherTop - meTop;
        this.moveX = otherLeft - meLeft;
        //determine slope
        var slope = this.moveY/this.moveX;
        var signofX;
        var signofY;
        //with slope, check which (if any, or both) x/y are negative
        this.moveY > 0 ? signofY = 1 : signofY = -1;
        this.moveX > 0 ? signofX = 1 : signofX = -1;

        if(slope < 1){ //x should move further
          var xco = 1/slope;
          this.moveX += signofX * xco;
          this.moveY += signofY;
          //assign movement to other object

        } else { //y should move further
          var yco = 1/slope;
          this.moveX += signofX;
          this.moveY += signofY * yco;
          console.log("THIS IS TRIGGERING " + this.moveX, this.moveY);
        }

        var styleSettings = {
          left: meLeft + this.moveX,
          top: meTop + this.moveY
        };
          this.$node.css(styleSettings);
        }
      }
    }
};

