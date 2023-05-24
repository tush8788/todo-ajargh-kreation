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