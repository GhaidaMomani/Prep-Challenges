"use strict";

// Important Note:
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 1) ---------------------
//
//  Given an array of objects, count the objects by using reduce method.

//  EX:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//

// ------------------------

const objectCounter = (obj) => {
  let num = 0;
  let reducer = (prev, curr) => (num += 1);
  obj.reduce(reducer, 0);
  return num;
};

// 2) ---------------------
//
// Given a string input as an argument reverse it using reduce method.
//
//  EX:
// 'you shall not pass' ==> 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
  let arr1 = str.split(" ");
  let arr2 = [];
  let reducer = function (previous, current) {
    arr2.unshift(current);
  };
  arr1.reduce(reducer, arr1[0]);
  return arr2.join(" ");
};
// 3) ---------------------
//
// Using the same array of object from the first question, create new object that contain the candidates name as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//
// ------------------------

// let result = {};
// let reducer = function(previous, current) {
//     result[current.votes_To] == undefined ? result[current.votes_To] = 1 : result[current.votes_To] += 1;
// };
// obj.reduce(reducer, obj[0]);
// return result;
const statistics = (obj) => {
  let result = {};
  let reducer = function (previous, current) {
    result[current.votes_To] == undefined
      ? (result[current.votes_To] = 1)
      : (result[current.votes_To] += 1);
  };
  obj.reduce(reducer, obj[0]);
  return result;
};

module.exports = { objectCounter, stringReverse, statistics };
