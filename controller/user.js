const TDschema = require("../schema/todoSchema")
const todoSchema = require("../schema/todoSchema")
const Uschema = require("../schema/user")


function todoFormatter(todo){
    try {    
        let todoList={
            today:[],
            tomorrow:[],
            previous:[]
        }
        let completed=[];
        let date=new Date();

        todo.forEach(ele => {
            if(parseInt(ele.year)>date.getFullYear()){
                todoList.tomorrow.push(ele);
            }else if(parseInt(ele.year)<date.getFullYear()){
                // if(ele.completed==false){
                    todoList.previous.push(ele);
                // }else{
                    // completed.push(ele._id)
                // }
            }else{
                if(parseInt(ele.month)>date.getMonth()){
                todoList.tomorrow.push(ele);
                }else if(parseInt(ele.month)<date.getMonth()){
                    // if(ele.completed==false){
                        todoList.previous.push(ele);
                    // }else{
                        // completed.push(ele._id)
                    // }
                }else{
                    if(parseInt(ele.day)>date.getDate()){
                        todoList.tomorrow.push(ele);
                    }else if(parseInt(ele.day)<date.getDate()){
                        // if(ele.completed==false){
                            todoList.previous.push(ele);
                        // }else{
                            // completed.push(ele._id)
                        // }
                    }else{
                        todoList.today.push(ele);
                    }
                }
            }
        });
        return {todoList,completed} 
    } catch (error) {
        console.log(error); 
    }
}


exports.addData = async (req,res)=>{
    try {
        const data = new TDschema(req.body)
        const dataSaved = await data.save()
        res.send(dataSaved) 
    } catch (error) {
        console.log(error)
    }
}

exports.deleteDataById = async (req,res)=>{
    try {
        const data = await  TDschema.findByIdAndDelete(req.params.id)
        res.send({data,msg:"task has deleted"})
    } catch (error) {
        console.log(error)
    }
}

exports.addTodo =async(req,res)=>{
    try {
        const {userId} = req.body
        const tobeadded = new TDschema({...req.body,creator:userId}) 
        const todo = await tobeadded.save()
        res.send(todo)
    } catch (error) {
        console.log(error)
    }
}

exports.addTomorrowwToday = async (req,res)=>{
    try {
        const {userId} = req
        const tobeadded = new todoSchema({...req.body,creator:userId}) 
        const todo = await tobeadded.save()
    } catch (error) {
        console.log(error)
    }
}


exports.getAllTodos = async (req,res)=>{
    try {
        let allTodos = await todoSchema.find({creator:req.userID}) 
        let todoList = todoFormatter(allTodos)
        // await Todo.deleteMany({
        //     _id:{$in:completed}
        // })
        allTodos = todoList
        res.send({allTodos,msg:"get all todos"})    
    } catch (error) {
        console.log(error)
    }
}

exports.deleteTodos = async (req,res)=>{
    try {
        await todoSchema.findByIdAndDelete(req.params.id)
        res.send("deleted todo")
    } catch (error) {
        console.log(error)
    }

}

exports.moveToTomorrow = async (req,res)=>{
    try {
        let date = new Date() ;
        let newDate = date.setDate(date.getDate() + 1)
        await todoSchema.findByIdAndUpdate(req.params.id,{
            day:date.getDate(),
            month:date.getMonth(),
            year:date.getFullYear()
        })
        res.send("move today")
    } catch (error) {
        console.log(error)
    }}

exports.moveToToday = async (req,res)=>{
    try {
        let date = new Date();
        // let newDate = date.setDate(date.getDate()-1)
        await todoSchema.findByIdAndUpdate(req.params.id,{
            day:date.getDate(),
            month:date.getMonth(),
            year:date.getFullYear()
        })
        res.send("move today")
    } catch (error) {
        console.log(error)
    }
}


exports.markAsCompleted = async (req,res)=>{
    try {
        await todoSchema.findByIdAndUpdate(req.params.id,{
            markAsCompleted:true
        })
        res.send("marked as completed")
    } catch (error) {
        console.log(error)
    }
}

