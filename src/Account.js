class Account {
    #balance;
    #transactions = [];
    #transaction;
    #date;
    #debit;
    #credit;

    constructor(transaction, balance = 0) {
        this.#transaction = transaction;
        this.#balance = balance;
    }



    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient funds!");
        } else {
            this.#balance -= amount;
            this.#transactions.push(this.#transaction.getDate(), " ",
                amount, this.#balance);
        }
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid transaction");
        } else {
            this.#balance += amount;
            this.#transactions.push(this.#transaction.getDate(), amount,
                " ", this.#balance);
        }
    }

    setDate() {
        this.#date = this.#transaction.getDate();
        return this.#date;
    }


    setCredit() {
        this.#credit = this.#transaction.getCredit();
        return this.#credit;
    }

    setDebit() {
        this.#debit = this.#transaction.getDebit();
        return this.#debit;
    }


    getBalance() {
        return this.#balance;
    }

    getTransactions() {
        return this.#transactions;
    }

}
//export default Account;
module.exports = Account; 