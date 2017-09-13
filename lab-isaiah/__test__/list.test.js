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
      let newList = new List('testing', 'blah');
      expect(newList[0]).toEqual('testing');
      expect(newList[1]).toEqual('blah');
      expect(newList.length).toEqual(2);
    });
    test('Should create new list:', () => {
      let list = new List('hello', 'testing', 92, 'blah', 'tired', false, 'super');
      expect(list[3]).toEqual('blah');
      expect(list[4]).toEqual('tired');
      expect(list.length).toEqual(7);
    });
  });

  describe('#mypush', () => {
    test('Should return (a, b, c, d) given (a, b, c) and d', () => {
      let newList = new List('a', 'b', 'c');
      newList.mypush('d');
      expect(newList[0]).toEqual('a');
      expect(newList[1]).toEqual('b');
      expect(newList[2]).toEqual('c');
      expect(newList[3]).toEqual('d');
    });
    test('Should return (1, 2, 3) given (1, 2):', () => {
      let newList = new List(1, 2);
      newList.mypush(3);
      expect(newList[0]).toEqual(1);
      expect(newList[1]).toEqual(2);
      expect(newList[2]).toEqual(3);
      expect(newList.length).toBe(3);
    });
  });

  describe('#mypop', () => {
    test('Should return (a, b, c) given (a, b, c, d):', () => {
      let newList = new List('a', 'b', 'c', 'd');
      newList.mypop('d');
      expect(newList[0]).toEqual('a');
      expect(newList[1]).toEqual('b');
      expect(newList[2]).toEqual('c');
      expect(newList.length).toEqual(3);
    });
  });

  describe('#myfilter', () => {
    test('Should return 10, 20, 30, 40, 50 given (2, 4, 6, 7, 8, 9, 10, 20, 30, 40, 50):', () => {
      let newList = new List(2, 4, 6, 7, 8, 9, 10, 20, 30, 40, 50);
      if(newList.this >= 10)
        newList = newList.this;
      expect(newList).toContain(10, 20, 30, 40, 50);
    });
  });

  describe('#myreduce', () => {
    test('Should return 10 given (1, 2, 3, 4):', () => {
      let newList = new List(1, 2, 3, 4);
      let results = newList.myreduce((a, c) => a + c);
      expect(results).toEqual(10);
    });
  });

  describe('#myslice', () => {
    test('Should return [3, 4] given (1, 2, 3, 4, 5, 6):', () => {
      let newList = new List(1, 2, 3, 4, 5, 6);
      newList.myslice();
    });
    test('should return a copy of a portion of numbers into a new array object', () => {
      let list = new List(1, 2, 3, 4, 5, 6);
      expect(list.myslice(2, 5)).toEqual([3, 4, 5]);
    });
    test('should return a copy of a portion of strings into a new array object', () => {
      let list = new List('billy', 'dragon', 'bob', 'wizard');
      expect(list.myslice(1, 3)).toEqual(['dragon', 'bob']);
    });
  });
});
