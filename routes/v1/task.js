const express = require('express');
const taskController = require('../../controller/task_controller');
const router = express.Router();

router.get('/',taskController.getAllTasks);

module.exports = router;