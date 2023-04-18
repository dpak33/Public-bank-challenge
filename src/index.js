const Transactions = require("./Transactions.js");
const Account = require("./Account.js");
const BankStatement = require("./BankStatement.js");




transactions1 = new Transactions();
account1 = new Account(transactions1);

console.log(account1.setDate());


account1.deposit(100);
console.log(account1.getBalance());
console.log(account1.getTransactions());
account1.deposit(0);

account1.withdraw(150);
account1.withdraw(50);
console.log(account1.getBalance());
console.log(account1.getTransactions());

//printstatement1 = new BankStatement();
//printstatement1 = new BankStatement(account1.getTransactions());
BankStatement.modifyAccount(account1.getTransactions());
