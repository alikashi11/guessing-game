#! /usr/bin/env node
import inquiurer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
//console.log(randomnumber);
const answers = await inquiurer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
if (answers.userGuessedNumber === randomnumber) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
