#! /usr/bin/env node

import inquirer from "inquirer"
const answer:{
    sentence: string
} = await inquirer.prompt([{
    type: "input",
    name:"sentence",
    message:"Enter your sentence to words counter"
}]);
const words = answer.sentence.trim().split(" ");
console.log(words)
console.log(`your sentence words counter is ${words.length}`);