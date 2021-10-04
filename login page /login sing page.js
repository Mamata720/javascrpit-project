console.log("welcome to sign up/ login page:-");
let n=require('readline-sync');
let fs=require('fs')
let enter=n.question("what do you want to do sign up (1) / login in (2):-")
if (enter=="1"){
    let username=n.question("create user name:-");
    console.log("Password should contain","\n","1)capital letter","\n", "2)small letter", "\n","3)number and speial charecter::")
    let Password=n.question("create password:-");
    let fn=fs.readFileSync("my_file.json","utf8")
    if (fn.includes(username && Password)){
        console.log("your account already exist please login:-")
    }else{
        let email=n.question("create email:-")
        const strong_Email= RegExp(/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/);
        const strong = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
        if (Password.match (strong) || email.match(strong_Email)){
            pass_word=n.question("confirm your password:-");
            if (Password===pass_word){
                console.log("you",username,"sign up successfully:--")
                console.log()
                console.log("we want your information")
                console.log()
                FullName=n.question("enter your full name:-")
                DOB=n.question("enter your DOB:-")
                Gender=n.question("enter your gender:-")
                console.log("Thanks for information",FullName,"+",".")
                object={
                    user:{Username:username,Password:Password,Email:email},profile:{FullName:FullName,DOB:DOB,Gender:Gender},
                }
                let file = JSON.stringify(object,null,4);
                fs.appendFileSync("my_file.json",file)
                console.log(object)
            }else{
                console.log("wrong password")
            } 
            console.log()
        }else{
            console.log("sorry!check your email or password:--")
        }
    }
}
else if(enter=="2"){
    let fn=fs.readFileSync("my_file.json","utf8")
    info=JSON.parse(fn)
    let user_name=n.question("enter your user ID:")                                              
    let pass_word=n.question("enter your password :")
    if (fn.includes(user_name && pass_word)){
        console.log(user_name,"you have logged in succesfully")
        console.log()
        console.log("information:-")
        console.log("user:-",info['user'])
        console.log("profile:-",info['profile'])
    }
    else{
        console.log("sorry! incorrect username and password")
    }
}