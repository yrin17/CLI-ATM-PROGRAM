import inquirer from "inquirer";


let mybalance = 10000;
let mypin = 12345;

const answer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin code",
    type: "number",
  },
]);

if (answer.pin === mypin) {
  console.log("your pin is correct!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select the operation",
      type: "list",
      choices: ["withdraw", "Fast cash", "check balance"],
    },
  ]);

   if (operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number"
        }
    ]);

    if (amountAns.amount <= mybalance){
        let balance = mybalance - amountAns.amount;
        console.log(`your Remaining balance is ${balance}`);
 
    }
   else {
    console.log("you have insufficient balance");
    
     }
    }
 
 else if (operationAns.operation === "Fast cash"){
    let fastcashAns = await inquirer.prompt(
        [
            {
                name: "amount",
                type: "list",
                choices: ["1000","2000","3000","5000"]
            }
        ]
    );

    if (fastcashAns.amount <= mybalance){
        let balance2 = mybalance - fastcashAns.amount;
        console.log(`Your remainig account balance is ${balance2}`);
        
    }
    else{
        console.log("you have insufficient balance");
        
    }
 }

 else if (operationAns.operation === "check balance"){
    console.log(`Your account balance is ${mybalance}`);
    
 }
 


}

else{
    console.log("Please enter the correct pin");
    
}