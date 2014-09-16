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
  this.$node.css('border-width',this.counter);
  this.$node.css('border-color', random_color);
  this.counter += 2;
};
