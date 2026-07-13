const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc"
];

function nameFinder(nameList, name) {
  let position = nameList.indexOf(name);

  if (position !== -1) {
    return [true, position];
  } else {
    return false;
  }
}

console.log(nameFinder(names, "Tony"));
console.log(nameFinder(names, "María"));