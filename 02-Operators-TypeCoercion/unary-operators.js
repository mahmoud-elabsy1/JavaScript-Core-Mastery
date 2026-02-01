let points = 10;

points++;
points++;
points++;

console.log(points); // 13

points--;
points--;
points--;
points--;
points--;

console.log(points); // 8;

//* Another example
let score = 10;

score += true + true + true; // 10 + 1 + 1 + 1 = 13

console.log(score); // 13

// score -= true + true + true + true + true; // 13 - 1 - 1 - 1 - 1 - 1 = 8
score = score - true - true - true - true - true; // 13 - 1 - 1 - 1 - 1 - 1 = 8

console.log(score); // 8
