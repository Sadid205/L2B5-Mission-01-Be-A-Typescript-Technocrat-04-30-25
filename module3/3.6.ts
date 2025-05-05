{
    // getter and setter
    class BankAccount {
        public readonly id:number;
        public name:string;
        protected _balance:number;

        constructor(id:number,name:string,balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        set deposit(amount:number){
            this._balance = this._balance + amount
        }
        // public addDeposite(amount:number){
        //     this._balance = this._balance+amount
        // }

        //getter
        get balance(){
            return this._balance
        }
        // public getBalance(){
        //     return this._balance
        // }

    }


    const goribManusherAccount = new BankAccount(111,"Mr. gorib",50)
    // goribManusherAccount.balance = 0
    // goribManusherAccount.deposite = 0
    // goribManusherAccount.addDeposite(20) // function call korte hocche 
    goribManusherAccount.deposit = 50
    // const myBalance = goribManusherAccount.getBalance() // function call korte hocche 
    const myBalance = goribManusherAccount.balance // property er moto kore 
    console.log(myBalance)
    //
}