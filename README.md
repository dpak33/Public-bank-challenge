''This was an extremely challenging task for me and, even having completed it, I know that there are improvements to be made. For instance, my final print statement, though neatly formatted in the console, is the result of only two console.log statements, making the spy I've used somewhat difficult to test properly. If a print statement had been run on each loop through the list of values passed into the static BankStatement method, then the test would have had greater validity. I also feel that I have not adhered to the DRY principle throughout and may have replicated code through improper use of interfaces. Nevertheless, I feel I have broadly met the challenge criteria, using setters and getters as well as loose coupling to create a decent simulation of a bank account that meets the stipulated requirements. I also used Jasmine testing frameworks and other Node.js packages to test my code. There were some ambiguities in my mind regarding the status of transactions with respect to the account, which may explain some unnecessary repetition of methods and properties from transaction to account. Please see package.json for relevant dev dependencies. 

Domain models:

| Objects     | Properties                  | Messages       | Output  |
| ----------- | --------------------------- | -------------- | ------- |
| bankAccount | balance@int                 | getBalance()   | @number |
|             | transactions@Array          | depositMoney() | @array  |

I want to check that the default balance is correct
I want to check that I cannot make deposits if I am not depositing any money
I want to ensure that I cannot make withdrawals if I do not have sufficient funds
I want to check that error messages warn me of infractions with regards to either of the above
I also want to check that any withdrawals and deposits are correctly deducted from my account

| Objects      | Properties                  | Messages          | Output      |
| ------------ | --------------------------- | ----------------- | ----------- |
| transactions |                             | getDebit()        | @string     |
|              |                             | getDate()         | @date (str) |
|              |                             | getCredit()       | @number     |
|              |                             | getDebit()        | @number     |

I want to ensure that dates are correctly formatted and can be connected to deposits and withdrawals

| Objects        | Properties                  | Messages          | Output      |
| ------------   | --------------------------- | ----------------- | ----------- |
| BankStatement  |                             | modifyAccount()   | @string     |

I want to make sure that the stored transactions in my account class can be printed out in a neat readable format


