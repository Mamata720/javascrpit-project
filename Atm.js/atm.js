let readlineSync = require("readline-sync");
var card = readlineSync.question("welcome to atm") 
if (card=="debitcard" || card=="credit card"){
    console.log("debitcard");
    var lanuage=readlineSync.question("selcet the launage")
    if (lanuage=="Hindi" || lanuage=="English"){
        console.log("English");
        const pin=readlineSync.question("enter the pin card ")
        if (pin==1234){
            console.log("pin is corcet")
            var account=readlineSync.question("select your account")
            if (account=="saving"|| account=="current"){
                console.log("continue")
                var transaction=readlineSync.question("select the transaction")
                if (transaction=="cash withdrawal"){
                    console.log("processing")
                    var amount=readlineSync.question("enter the amount")
                    if (amount>=500&&amount<=100000){
                        console.log("collect your amount")
                        var receipt=readlineSync.question("do you want receipt")
                        if (receipt=="yes"||receipt=="no"){
                            console.log("transaction has been done successfully")
                        
                        }else{
                            console.log("ok")
                        }


                    }else{
                        console.log("amt.not defined")
                    }
                }else{
                    console.log("wrong amt you have putted")
                }
            }else{
                console.log("wrong")
            }
            

            
        }else{
            console.log("pin is not matching")
        }

    }else{
        console.log("other")
    }
    
}else{
    console.log("card is not matching")
}