'use strict';

const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }

  this.length = arguments.length;
};
// push
List.prototype.push = function(value) {
  this[this.length++] = value;
  return this;
};
// pop
List.prototype.pop = function () {
  let result = this[this.length - 1];
  delete this[--this.length];
  return result;
};
// slice
List.prototype.slice = function(arg, arg2) {
  let result = [];
  for (var i = arg; i < arg2; i++) {
    result.push(this[i]);
  }
  return result;
};
// map
List.prototype.map = function(cb){
  let result = new List();
  for (var i = 0; i < this.length; ++i){
    result[i] = cb(this[i], i, this);
  }
  return result;
};
// reduce
List.prototype.reduce = function(cb, initial) {
  let i =0;
  let result = initial ? initial : this[i++];

  for(i; i < this.length; i++) {
    result = cb(result, this[i], i, this);
  }
  return result;
};
// filter
List.prototype.filter = function (cb) {
  let result = new List();
  for (let i = 0; i < this.length; ++i) {
    if(cb(this[i], i, this)) {
      result[result.length++] = this[i];
    }
  }
  return result;
};
