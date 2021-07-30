class Bank{
    static accountDetails(){
        let userData={
            1000:{acno:1000,password:"userone",balance:5000},
            1001:{acno:1001,password:"usertwo",balance:5000},
            1002:{acno:1002,password:"userthree",balance:5000}
        }
        return userData
    }
    static authenticate(acno,password){
        var dataset=Bank.accountDetails()
        if (acno in dataset){
            if (password==dataset[acno]["password"]){
                return 1
            }
            else{
                return 0
            }
        }
        else{
            return -1
        }

    }
    static setStorage(acnt,paswd){
        let obj={
            acnt:acnt,
            paswd:paswd
        }
        localStorage.setItem("data",JSON.stringify(obj))
    }
    static login(){
            var acno=document.querySelector("#acno").value;
            var password=document.querySelector("#pwd").value;
            let user=Bank.authenticate(acno,password)
            if(user==0){
                alert("invalid password")
            }
            else if(user==1){
                Bank.setStorage(acno,password);
                window.location.href="home.html"
            }
            else if(user==-1){
                alert("invalid account number")
            }
    }
    static withdraw(){
            var acno=document.querySelector("#acno").value;
            var password=document.querySelector("#pwd").value;
            var amt=document.querySelector("#amt").value;
            let user=Bank.authenticate(acno,password)
            let bal=Bank.accountDetails()
            if (user==-1){
                alert("invalid account num")
            }
            else if(user==0){
                alert("invalid password")
            }
            else if(user==1){
                if (amt<bal[acno]["balance"]){
                    bal[acno]["balance"]-=amt;
                    alert("amount withdrawn")
                }
                else{
                    alert("insufficient balance")
                }
            }
        }       
    static  deposit(){
            var acno=document.querySelector("#acno").value;
            var password=document.querySelector("#pwd").value;
            var amt=document.querySelector("#amt").value;
            let user=Bank.authenticate(acno,password)
            var bal=Bank.accountDetails()
            if (user==-1){
                alert("invalid account num")
            }
            else if(user==0){
                alert("invalid password")
            }
            else{
                bal[acno]["balance"]+=amt;
                alert("deposited")
            }
        }    
    }    