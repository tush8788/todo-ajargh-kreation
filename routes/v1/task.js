const express = require('express');
const taskController = require('../../controller/task_controller');
const passport = require('passport');
const router = express.Router();

//all task
router.get('/',passport.authenticate('jwt',{session:false}),taskController.getAllTasks);

//create task
router.post('/create',passport.authenticate('jwt',{session:false}),taskController.createTask);

module.exports = router;