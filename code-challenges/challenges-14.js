"use strict";

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
  const i = str.lastIndexOf(" ");
  return str.slice(i + 1, str.length);
};

// 2) ---------------------
//
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
  return str.split(" ")[str.split(" ").length - 1];
};

// 3) ---------------------
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
  let newStr = str.split(" ");
  let replaces = {
    We: newStr.indexOf("I"),
    are: newStr.indexOf("am"),
    were: newStr.indexOf("was"),
  };
  for (let [word, index] of Object.entries(replaces)) {
    if (index != -1) {
      newStr.splice(index, 1, word);
    }
  }
  return newStr.join(" ");
};

// 4) ---------------------
//
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street"
//
// ------------------------

const arrToStr = (arr) => {
  return arr
    .map((item) => (arr.indexOf(item) == 4 ? `${item},` : item))
    .join(" ");
};

// 5) ---------------------
//
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
  let arrStr = str.split(" ");
  let result = [];
  arrStr.map((word) => {
    let newWord = word.split("");
    newWord.push("#");
    let outWord = [];
    let counter = 1;
    let reducer = function (previous, current, index, array) {
      if (index != array.length - 1) {
        if (current == array[index + 1]) {
          counter++;
        } else {
          outWord.push(`${current}${counter}`);
          counter = 1;
        }
      }
    };
    newWord.reduce(reducer, "");
    result.push(outWord.join(""));
  });
  return result.join(" ");
};

module.exports = {
  LastWord,
  LastWord_2,
  replaceWords,
  arrToStr,
  letterCounter,
};
