// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};


Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    var recurse = this.step.bind(this);
    setTimeout(recurse, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(){
   var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
};




