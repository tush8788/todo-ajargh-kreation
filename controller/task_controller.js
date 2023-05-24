const TaskDB = require('../models/task');

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