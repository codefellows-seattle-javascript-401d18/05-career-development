'use strict';

const List = require('../lib/list');

describe('testing the list and all methods', () => {
  describe('#List', () => {
    test('list should have a length of zero', () => {
      let list = new List();
      expect(list.length).toEqual(0);
    });
    test('should create a new list given arguments', () => {
      let list = new List('test', 'list');
      expect(list[0]).toEqual('test');
      expect(list.length).toEqual(2);
    });
    test('should create a new list containing argumenst with diffrent value types', () => {
      let list = new List('potato', 7, 'pasta', false);
      expect(list.length).toEqual(4);
      expect(list[2]).toEqual('pasta');
      expect(list[3]).toEqual(false);
    });
    //push
    describe('#push', () => {
      test('appends a string to the list', () => {
        let list = new List;
        list.push('this is a string');
        expect(list[0]).toEqual('this is a string');
      });
      test('appends a boolean value to the list', () => {
        let list = new List;
        list.push(true);
        expect(list[0]).toEqual(true);
      });
      test('appends an integer to the list', () => {
        let list = new List;
        list.push(7);
        expect(list[0]).toEqual(7);
      });
    });
    //pop
    describe('#pop', () => {
      test('should remove last value', () => {
        let list = new List;
        list.push('one');
        list.push('two');
        list.push('three');
        let result = list.pop();
        expect(result).toEqual('three');
        expect(list.length).toEqual(2);
      });
      test('should remove the last integer', () => {
        let list = new List;
        list.push(1);
        list.push(2);
        list.push(3);
        let result = list.pop();
        expect(result).toEqual(3);
        expect(list.length).toEqual(2);
      });
      test('if there is no value to remove should receive undefined', () => {
        let list = new List();
        let result = list.pop();
        expect(result).toEqual(undefined);
      });
    });
    //slice
    describe('#slice', () => {
      test('should take integers from a list and add them to an array', () => {
        let list = new List(1, 2, 3, 4, 5, 6, 7);
        expect(list.slice(3, 6)).toEqual([4, 5, 6]);
      });
      test('will take diffrent values from a list and return them to an array', () => {
        let list = new List(3, 4, false, 'bob', true);
        expect(list.slice(2, 4)).toEqual([false, 'bob']);
      });
      test('should take strings from a list and return them to an array', () => {
        let list = new List('potato', 'onion', 'celery', 'pintobean', 'radish', () => {
          expect(list.slice(2, 4)).toEqual('celery', 'pintobean');
        });
      });
      //map
      describe('#map', () => {
        test('will return the list divided by 2', () => {
          let list = new List(10, 20, 30);
          expect(list.map((x) => x / 2 )).toEqual({'0': 5, '1': 10, '2': 15, 'length': 0});
        });
        test('should return the list in reverse', () => {
          let list = new List('eerht','owt','eno');
          expect(list.map((x)=>x.split('').reverse().join(''))).toEqual({'0': 'three', '1': 'two', '2': 'one', 'length': 0});
        });
        test('should return the list +2', () => {
          let list = new List(7, 3, 13);
          expect(list.map((x) => x + 2)).toEqual({'0': 9, '1': 5, '2': 15, 'length': 0});
        });
      });
      //reduce
      describe('#reduce', () => {
        test('should return a concatenated list', () => {
          let list = new List(1, 'forthemoney', 2, 'fortheshow');
          let result = list.reduce((a, d) => a + d);
          expect(result).toEqual('1forthemoney2fortheshow');
        });
        test('should return the sum of numbers in a list', () => {
          let list = new List(3, 4, 5);
          let result = list.reduce((a, c) => a + c);
          expect(result).toEqual(12);
        });
        test('should concatenate a list of strings together', () => {
          let list = new List('Dear', 'Lord', 'So', 'Many', 'Test');
          let result = list.reduce((a, d) => a + d);
          expect(result).toEqual('DearLordSoManyTest');
        });
      });
    });
  });
});
