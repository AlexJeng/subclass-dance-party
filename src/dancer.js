// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  //this.$node;// = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.lineUp = function() {
  var randX = Math.floor(Math.random() * 1000);
  var styleSettings = {
    top:  400,
    left:  randX
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function(){
    var recurse = this.step.bind(this);
    setTimeout(recurse, 1000);
};

Dancer.prototype.setPosition = function(){
   var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
};


