const Account = require("./Account");

class BankStatement {

    displayList;

    static modifyAccount(accountList) {
        let containerString = " ";
        const lineOne = "date          || credit        || debit         || balance       ||";
        for (let i = 0; i < accountList.length; i++) {
            let space = 14 - (accountList[i].toString().length);
            //console.log(space);
            if ((i + 1) % 4 == 0) {
                containerString += (accountList[i] + (" ".repeat(space)) + "||" + " \n ");
            }
            else {
                containerString += (accountList[i] + (" ".repeat(space)) + "||" + " ");
            }
        }
        console.log(" " + lineOne);
        console.log(containerString);
    }
}

module.exports = BankStatement;