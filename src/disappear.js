

var DisappearDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="square"></span>');
  this.setPosition(this.top, this.left);

};

DisappearDancer.prototype = Object.create(Dancer.prototype);

DisappearDancer.prototype.constructor = DisappearDancer;

DisappearDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
  this.$node.slideToggle();
};