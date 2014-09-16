var SuperHeroDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.counter = 10;
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;

SuperHeroDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var random_color = "#" + Math.random().toString(16).slice(2, 8);
  this.$node.css('border-width', 0);
  //this.$node.css('border-color', random_color);
  //this.counter += 2;
  this.$node.css('background', 'url(dancing.jpg)');
  this.$node.css('background-size', "100% 100%");
  this.$node.css('transform', 'rotate(' + Math.random() * 360 + 'deg)');
  this.$node.css('display', 'block');
  var num = Math.floor(Math.random()*300);
  this.$node.css('width', 50 + num);
  this.$node.css('height', 50 + num);
  this.counter += 50;

};
