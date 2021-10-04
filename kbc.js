function win_kbc(){

    let n=require('readline-sync');

    function question(){
        const question_list = ["1.How many continents are there?",
        "2.What is the capital of India?",
        "3.NG mei kaun se course padhaya jaata hai?"]
        return question_list
    }  
    let que=question();

    function option(){
        const options_list = [["1.Four", "2.Nine", "3.Seven", "4.Eight"],
        ["1.Chandigarh", "2.Bhopal", "3.Chennai", "4.Delhi"],
        ["1.Software Engineering", "2.Counseling", "3.Tourism", "4.Agriculture"]]
        return options_list
    }    
    let opt=option();

    function solution(){
        const solution_list = [3, 4, 1]
        return solution_list
    }      
    let sol=solution();

    function answer(){
        const answer_list=[["(1)Four","(3)Seven"],
        ["(2)Bhopal","(4)Delhi"],
        ["(1)software engineering","(3)Tourism"]]
        return answer_list
    }       
    let ans=answer();

    console.log("-:WELCOME TO KBC GAME:-");
    console.log()
    let i=0;
    let sum=0;
    let count=0;
    while (i<que.length){
        console.log(que[i]);
        let j=0;
        let a=i;
        while (j<opt[i].length){
            console.log(opt[a][j]);
            j++}   
        if (count<1){
            let num=n.question("do you want 5050 lifeline?");
            if (num=="yes"){
               let k=0;
                while (k<ans[i].length){
                    console.log(ans[a][k]);
                    k+=1}   
                let num1=n.question("enter your option number");
                if (num1==sol[i]){
                    sum+=10000
                    console.log("Congratualation, your answer is correct");
                    console.log("you won Rs/",sum);
                }                 
                else{
                    console.log("your answer is wrong");
                    console.log("Sorry, you can't play now");
                    console.log("you won Rs/",sum);
                    break
                }
                count+=1}              
            else{
                num2=n.question("enter your option number");
                if (num2==sol[i]){
                    sum+=10000
                    console.log("Congratualation, your answer is correct ");
                    console.log("you won Rs/",sum)}                    
                else{
                    console.log("your answer is wrong");
                    console.log("Sorry, you can't play now");
                    console.log("you won Rs/",sum)
                    break}                                  
                    }
                }         
        else{
            num3=n.question("enter your answer number");
            if (num3==sol[i]){
                sum+=10000
                console.log("Congratualation, your answer is correct ");
                console.log("you won Rs/",sum)}
                
            else{
                console.log("your answer is wrong");
                console.log("Sorry, you can't play now");
                console.log("you won Rs/",sum);
                break}
                }
        i++}        
    console.log("Thank you for playing game with me.");
}
win_kbc()
