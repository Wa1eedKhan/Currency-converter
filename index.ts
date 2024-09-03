import inquirer from "inquirer"
import chalk from "chalk";
console.log(chalk.bold.yellow("=".repeat(70)));
console.log(chalk.blue("\n \t      Welcome to  our Currency  Converter\n"));
console.log(chalk.bold.yellow("=".repeat(70)));

// define the currency and there exchange rate
let exchange_rate : any = {

    "USD":1,  // base currency
    "PKR":277.95, // Pakistani currency [RIYAL]
    "GBP":0.80, // British currency [POUND]
    "EUR":0.93, // European currency [EURO]
    "CAD":1.37, // Canadian currency [DOLLAR]
    "AUD":1.54, // Australian currency [DOLLAR]
}

// promt the user to enter the amount and currency
let user_currency = await inquirer.prompt([
{
    name:"from_currency",
    type:"list",
    message:chalk.green("Select the currency you want to convert from"),
    choices:["USD","PKR","GBP","EUR","CAD","AUD"],
},
{
    name:"to_currency",
    type:"list",
    message:chalk.green("Select the currency you want to convert into"),
    choices:["USD","PKR","GBP","EUR","CAD","AUD"],
},
{
    name : "amount",
    type : "input",
    message : chalk.green("Enter the amount you want to convert")
}

]);

// perform currency conversion by using formula
let from_amount : any = exchange_rate[user_currency.from_currency];
let to_amount : any = exchange_rate[user_currency.to_currency];
let amount : any = user_currency.amount;

// formula conversion

let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

// Display the result

console.log(chalk.green(`Converted amount = ${converted_amount.toFixed(3)}`))


