const express = require('express');
const taskController = require('../../controller/task_controller');
const passport = require('passport');
const router = express.Router();

router.get('/',passport.authenticate('jwt',{session:false}),taskController.getAllTasks);

module.exports = router;