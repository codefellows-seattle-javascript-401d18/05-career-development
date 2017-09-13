'use strict';

const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

List.prototype.mypushPure = function(value) {
  let newList = Object.assign({}, this);
  newList[newList.length++] = value;
  return newList;
};

List.prototype.mypush = function(value) {
  this[this.length++] = value;
  return this;
};

List.prototype.mypop = function() {
  let result = this[this.length - 1];
  delete this[--this.length];
  return result;
};

List.prototype.myreduce = function(acc, curr) {
  let result, start;

  if(!curr) {
    result = this[0];
    start = 1;
  }
  for(var i = start; i < this.length; i++) {
    result = acc(result, this[i]);
  }
  return result;
};

List.prototype.myforEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

List.prototype.myfilter = function(callback) {
  let result = {};
  for(let i in this) {
    if(callback(this[i], i, this)) {
      result[i] = this[i];
    }
  }
  return result;
};

List.prototype.myslice = function (x, y) {
  let result = [];
  for (var i = x; i < y; i++) {
    result.push(this[i]);
  }
  return result;
};
