const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code"
];

function repeatCounter(list) {
  let result = {};

  for (let i = 0; i < list.length; i++) {
    if (result[list[i]]) {
      result[list[i]]++;
    } else {
      result[list[i]] = 1;
    }
  }

  return result;
}

console.log(repeatCounter(words));
