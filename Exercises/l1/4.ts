let numbers: number[] = [1,2,4,5,6,7,8];

console.log(numbers);


// numbers.forEach()

let sum: number = 0;

for(let number of numbers)
{
    sum += number;
}

console.log(sum);

let avg:number = sum / numbers.length;

console.log(avg);




let maximum: number = numbers[0];

for (let number of numbers) {
    if (number > maximum) {
        maximum = number;
    }
}

console.log("Maximum:", maximum);



let minimum: number = numbers[0];

for (let number of numbers) {
    if (number < minimum) {
        minimum = number;
    }
}

console.log("Minimum:", minimum);









let su = numbers.reduce((total, num) => total + num, 0);
let average = sum / numbers.length;
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log("Sum:", su);