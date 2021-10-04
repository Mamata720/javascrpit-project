const axios = require("axios")
const redline = require("readline-sync")
const fs = require("fs")
const api = "https://api.merakilearn.org/courses"
New_Data = axios.get(api)
       .then(Response =>{
        let data = (Response.data)
        let json_Data = JSON.stringify(data,null,4)
        fs.writeFileSync("saralData.json",json_Data)
        
        let saral_data = data
        let arr = []
        let searialNo = 1
        for (i of saral_data){
            console.log(searialNo++ + " : "  +i.name, i.id)
            arr.push(i.name,i.id)
        }
        courses_no = redline.question("enter the courses you want:  ")-1
        console.log(saral_data[courses_no].name)
        let ID = saral_data[courses_no].id
        const saral_Api = ("https://api.merakilearn.org/courses/"+ID+"/exercises")
        data1 = axios.get(saral_Api)
        .then(Response =>{
            let parantData = Response.data
            let myJsonData = JSON.stringify(parantData,null,4)
            fs.writeFileSync("parant.json",myJsonData)
            course_name = parantData.course.exercises
            let searialNo1 = 1
            
            for (let j = 0; j < course_name.length; j++){
                console.log(searialNo1++,course_name[j].name)
            }
            contant1 = redline.questionInt("which question contant you want: ")-1
            console.log(course_name[contant1].name)
            let a = course_name[contant1].content[0].value
            console.log(a)
        })    
        
})