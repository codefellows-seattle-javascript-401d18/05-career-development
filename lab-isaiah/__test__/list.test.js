'use strict';

const List = require('../lib/list');

describe('Testing List Module:', function() {
  beforeAll(() => this.list = new List());
  afterAll(() => delete this.list);

  describe('Given a new instance it...', () => {

    test('should have a length property of 0' , done => {
      expect(this.list.length).toBe(0);
      done();
    });
    test('Should create new list:', () => {

    });
    test('Should create new list:', () => {

    });
  });

  describe('#mypush', () => {
    test('Should return (a, b, c, d) given (a, b, c) and d', () => {

    });
  });

  describe('#mypop', () => {
    test('Should return (a, b, c) given (a, b, c, d):', () => {

    });
  });

  describe('#myfilter', () => {
    test('Should return 10, 20, 30, 40, 50 given (2, 4, 6, 7, 8, 9, 10, 20, 30, 40, 50):', () => {

    });
  });

  describe('#myreduce', () => {
    test('Should return 10 given (1, 2, 3, 4):', () => {

    });
  });

  describe('#myslice', () => {
    test('Should return [3, 4] given (1, 2, 3, 4, 5, 6):', () => {

    });
  });
});
