let names  = ["Evan", "Liz", "Asa", "Emma"];
console.log(names.length); // -> 4

names[5] = "Ada";
console.log(names.length); // -> 6

console.log(names); // -> ["Evan", "Liz", "Asa", "Emma", undefined, "Ada"]
console.log(names[3]); // -> Emma
console.log(names[4]); // -> undefined
console.log(names[5]); // -> Ada