const express = require('express');
const router = express.Router();

// user
router.use('/user',require('./user'));

router.use('/task',require('./task'));

module.exports = router;