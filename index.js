<<<<<<< HEAD
#! user/bin/env/node
=======
>>>>>>> 2d641750bd5ad27086d3ef0f1afb62c2216f649a
import chalk from "chalk";
import inquirer from "inquirer";
const randomNum = Math.floor(10000 + Math.random() * 99999);
let myBalance = 1000;
let answer = await inquirer.prompt([
    {
        name: "stName",
        message: "Enter your name here: \n",
        type: "input",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "*Enter Name*";
        },
    },
    {
        name: "stCourses",
        message: "Select the Course to Enroll: \n",
        type: "list",
        choices: ["Java", "C#", "TypeScript", "HTML & CSS"],
    },
]);
const coursePrc = {
    "HTML & CSS": 100,
    "TypeScript": 200,
    "Java": 300,
    "C#": 400,
};
console.log(`${chalk.yellowBright.italic(`C\nourse Price is: ${coursePrc[answer.stCourses]}/- \n`)}`);
console.log(`${chalk.green.bold(`Your Balance: ${myBalance} \n`)}`);
let paymentType = await inquirer.prompt([
    {
        name: "payType",
        message: "Select the Payment Method: \n",
        type: "list",
        choices: ["EasyPaisa", "JazzCash"],
    },
    {
        name: "payAmount",
        message: "Enter Amount: \n",
        type: "input",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "*Enter the Amount*";
        },
    },
]);
console.log(`${chalk.yellowBright.italic(`\nYou Select the Method ${paymentType.payType}\n`)}`);
const prices = coursePrc[answer.stCourses];
const payment = parseFloat(paymentType.payAmount);
if (prices === payment) {
    console.log(`${chalk.yellowBright.italic(`You have Enroled in ${answer.stCourses} Course.\n`)}`);
    let stAnswer = await inquirer.prompt([
        {
            name: "select",
            message: "What would you Like to do Next ? \n",
            type: "list",
            choices: ["Your Profile", "Exit"],
        },
    ]);
    if (stAnswer.select === "Your Profile") {
        console.log(`${chalk.bold.cyan(`\n~~~~~~~~~~~~ ******* ~~~~~~~~~~~~\n`)}`);
        console.log(`${chalk.cyanBright.italic(`Student Name: ${chalk.whiteBright(answer.stName)}`)}`);
        console.log(`${chalk.cyanBright.italic(`Student ID: ${chalk.whiteBright(randomNum)}`)}`);
        console.log(`${chalk.cyanBright.italic(`Purchased Course: ${chalk.whiteBright(answer.stCourses)}`)}`);
        console.log(`${chalk.cyanBright.italic(`Course Price:${chalk.whiteBright(` ${coursePrc[answer.stCourses]}`)}`)}`);
        console.log(`${chalk.cyanBright.italic(`Your Balance: ${chalk.whiteBright(myBalance -= paymentType.payAmount)}`)}`);
        console.log(`${chalk.bold.cyan(`\n~~~~~~~~~~~~ ******* ~~~~~~~~~~~~\n`)}`);
    }
    else if (stAnswer.select === "Exit") {
        console.log(`Thank you for Purchasing our Course`);
    }
}
else {
    console.log(`Pleasee Enter Right Amount`);
}
