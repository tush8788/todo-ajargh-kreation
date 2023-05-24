const TaskDB = require('../models/task');

//all task
module.exports.getAllTasks = async function (req, res) {
    try {
        //find all task
        let allTasks = await TaskDB.find({user:req.user.id});

        return res.status(200).json({
            message: "All Tasks",
            allTasks,
        })
    }
    catch (err) {
        console.log(err);

        return res.status(400).json({
            message: "error"
        })
    }
}

//create new task
module.exports.createTask = async function (req, res) {
    try {
       
        let { title, description, status } = req.body;
        //create new task
        let Task = await TaskDB.create({
            title: title,
            description: description,
            status: status,
            user: req.user.id
        });

        return res.status(201).json({
            message: "New Task Created",
            Task
        })
    }
    catch (err) {
        console.log(err);

        let statusCode = 500, message = "Internal Server Error";
        // field validation or field missing error
        if (err.name == "ValidationError") {
            statusCode = 403;
            message = "field validation or field missing error";
        }

        return res.status(statusCode).json({
            message: message
        })
    }
}

//update task
module.exports.updateTask = async function (req, res) {
    try {
        
        //find task in DB
        let task = await TaskDB.findById(req.params.id);
        
        //if task not found or req user and task user is diffrent then
        if (!task || task.user != req.user.id) {
            return res.status(402).json({
                message: "Unauthorize to delete task or task not found"
            })
        }
        
        //task update
        await task.updateOne(req.body);
        
        //return res
        return res.status(200).json({
            message: "Task update successfully",
        })
    }
    catch (err) {
        console.log(err);

        let statusCode = 500, message = "Internal Server Error";
        //field missing error
        if (err.name == "ReferenceError") {
            statusCode = 403;
            message = "field missing error";
        }
        //Wrong Task id send
        else if (err.name == "CastError") {
            statusCode = 403;
            message = "Wrong Task id send"
        }
        //field missmatch
        else if (err.name == "TypeError") {
            statusCode = 403;
            message = "field missmatch"
        }

        return res.status(statusCode).json({
            message: message
        })
    }
}