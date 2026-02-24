// Example 01:
// const sA = { id: 1, name: "Alice"};

// const sB = sA;
// console.log(sA);
// console.log(sB);

// sA.id = 10;
// console.log(sA);
// console.log(sB);

// sB.name = "Bob";
// console.log(sA);
// console.log(sB);

// Example 02:
// console.log(Object.keys(sA).length);

// Example 03:
// const students = [{id:1, name: "Alice"}, {id: 2, name: "Bob"}];
// console.log(students);
// const newStudents = students.map(item => item.name.concat(" Nguyen"));
// console.log(students);
// console.log(newStudents);

// Example 04:
// const users = [
//     { name: "A", score: 10 },
//     { name: "B", score: 20 }
// ];

// const total = users.reduce((sum, item) => sum + item.score, 0);
// console.log(total);

// Example 05:
// const sA = { id: 1, name: "Alice", age: 19 };
// const sB = { id: 2, name: "Bob", age: 17 };
// const sC = { id: 3, name: "Charlie", age: 18 };

// const students = [sA, sB, sC];
// console.log(students);

// const newArray = students.filter(item => item.age >= 18);
// console.log(newArray);
// console.log(students);

// const arr = [{x: 1}, {x: 2}];
// const result = arr.filter(item => item.x > 1);
// console.log(result.length);

// function sum(numberA, numberB) {
//     let divAB = numberA / numberB;
//     return divAB;
// }

// console.log(sum(3, 4));
