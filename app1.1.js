class BankAccount {
    constructor(name,amount) {
        this.name = name;
        this.amount = amount;
        this.info = ['initial' + ' : ' + this.amount];
    }
    getInfo(BankAccount) {
       return console.log(BankAccount);
    }
    addMoney(amount,info) {
       return this.amount = this.amount + amount, this.info.push(info + ' : ' + amount)
    }
    withdrawMoney(amount,info) {
       return this.amount = this.amount - amount, this.info.push(info + ' : ' + amount)
    }
    getAccountHistory() {
       return this.info
    }


}

const dmytro = new BankAccount('Dmytro', 1000);

// dmytro.getInfo();
dmytro.addMoney(700,'gift');
dmytro.withdrawMoney(1000,'new bike');
// dmytro.getAccountHistory()

console.log(dmytro.getAccountHistory());
