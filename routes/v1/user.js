const express = require('express');
const userController = require('../../controller/user_controller');
const router = express.Router();

// create user
router.post('/create',userController.createUser);

//create session
router.post('/create-session',userController.createSession);

module.exports = router;