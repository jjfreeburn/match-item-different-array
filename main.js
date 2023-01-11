let array1 = ["a", "b", "c", "a", "a", "b", "d"];
let array2 = ["a", "b", "b", "a", "e", "c", "c", "g"];

let count1 = {};

array1.forEach(function (item) {
  if (count1.hasOwnProperty(item)) {
    count1[item] += 1;
  } else {
    count1[item] = 1;
  }
});
// console.log(count1);

let count2 = {};

array2.forEach(function (item) {
  if (count2.hasOwnProperty(item)) {
    count2[item] += 1;
  } else {
    count2[item] = 1;
  }
});

let result = [];

for (prop1 in count1) {
  for (prop2 in count2) {
    if (prop1 === prop2) {
      let frequency = Math.min(count1[prop1], count2[prop2]);

      for (let i = 0; i < frequency; i++) {
        result.push(prop1);
      }
    }
  }
}

console.log(result);
