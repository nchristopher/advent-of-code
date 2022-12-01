const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt")).toString();

let elves = input.split("\n\n").map((elf) => elf.split("\n"));

const calories = elves
	.map((elf) => {
		let initialValue = 0;
		return elf.reduce(
			(accumulator, currentValue) =>
				Number(accumulator) + Number(currentValue),
			initialValue
		);
	})
	.sort((a, b) => b - a);

// Part 1
console.log(calories[0]);

// Part 2
console.log(calories[0] + calories[1] + calories[2]);
