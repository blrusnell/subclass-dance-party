var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="slide"></span>');
  this.setPosition(this.top, this.left);

};

SlideDancer.prototype = Object.create(Dancer.prototype);

SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
  this.$node.fadeToggle();
};