var ColorChangeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.counter = 0;
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
}
