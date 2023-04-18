class Transactions {
    #credit;
    #debit;
    #date;

    constructor(debit = 0, credit = 0) {
        this.#debit = debit;
        this.#credit = credit;
    }

    getCredit() {
        return this.#credit;
    }

    getDebit() {
        return this.#debit;
    }



    getDate() {
        this.#date = new Date();
        var dd = String(this.#date.getDate()).padStart(2, '0');
        var mm = String(this.#date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = this.#date.getFullYear();
        this.#date = dd + '/' + mm + '/' + yyyy;
        return this.#date;
    }

}
//export default Transactions;
module.exports = Transactions;