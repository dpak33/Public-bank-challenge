//14.45 for describe function meaning
const Account = require("../src/Account.js");
const Transactions = require("../src/Transactions.js");
const BankStatement = require("../src/BankStatement.js");
const Jasmine = require("jasmine");
var expect = require("expect.js");
//const sinon = require("sinon"); 
const assert = require("assert");


describe('Transaction tests', () => {



    //});
    it('test default credit', () => {
        //Arrange
        const trans = new Transactions();
        //Act
        const result = trans.getCredit();
        //Assert
        expect(result).to.be(0);
    })

    it('test default debit', () => {
        //Arrange
        const trans = new Transactions();
        //Act
        const result = trans.getDebit();
        //Assert
        expect(result).to.be(0);
    })


    //Add tests
    it('test date', () => {
        //Arrange
        const trans1 = new Transactions();
        //Act
        const result1 = trans1.getDate();
        //Assert
        expect(result1).to.be("05/02/2023");
    });

    it('test feeding in debit and credit', () => {
        //Arrange
        const trans2 = new Transactions(50, 100);
        //Act
        const result2 = trans2.getDebit();
        //Assert
        expect(result2).to.be(50);
    });

    it('test feeding in debit and credit', () => {
        //Arrange
        const trans3 = new Transactions(25, 300);
        //Act
        const result3 = trans3.getCredit() - trans3.getDebit();
        //Assert
        expect(result3).to.be(275);
    });

});

describe('Account tests', () => {

    it('test default balance', () => {
        //Arrange
        const acct1 = new Account();
        //Act
        const result1 = acct1.getBalance();
        //Assert
        expect(result1).to.be(0);
    })

    it('test withdawal error checking', () => {
        //Arrange
        const acct2 = new Account(new Transactions(), balance = 100);
        acct2.withdraw(150);
        //Act
        const result2 = acct2.getBalance();
        //Assert
        expect(result2).to.be(100);
    })

    it('test deposit error checking', () => {
        //Arrange
        const acct3 = new Account(new Transactions());
        //Act
        const result3 = acct3.getBalance();
        //Assert
        expect(result3).to.be(0);
    })

    it('check valid deposits and obtain new balance using accessor methods', () => {
        //Arrange
        const acct4 = new Account(new Transactions());
        acct4.deposit(100);
        //Act
        const result4 = acct4.getBalance();
        //Assert
        expect(result4).to.be(100);
    })

    it('check valid deposits and obtain new balance using accessor methods', () => {
        //Arrange
        const acct5 = new Account(new Transactions(), balance = 100);
        acct5.withdraw(50);
        //Act
        const result5 = acct5.getBalance();
        //Assert
        expect(result5).to.be(50);
    })

    it('check withdrawals and deposits are being stored properly', () => {
        //Arrange
        const acct6 = new Account(new Transactions(), balance = 200);
        acct6.deposit(100);
        //Act
        const result6 = acct6.getTransactions();
        //Assert
        expect(result6[0]).to.be('05/02/2023')
    })

    it('check withdrawals and deposits are being stored properly', () => {
        //Arrange
        const acct7 = new Account(new Transactions(), balance = 200);
        acct7.deposit(200);
        //Act
        const result7 = acct7.getTransactions();
        //Assert
        expect(result7[3]).to.be(400)
    })

})

describe('Bank Statement tests', () => {

    var sinon = require("sinon");

    const dummyTransactions = ["05/01/12", 100, 200, " ", "01/02/20", 100, " ", 200];
    statement1 = new BankStatement();

    it('test display balance', () => {
        //Arrange
        const spy = sinon.spy(console, 'log');
        //Act
        BankStatement.modifyAccount(dummyTransactions);
        //Assert
        sinon.assert.callCount(spy, 2);
    })
})

