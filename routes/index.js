const express = require('express');
const router = express.Router();

// v1
router.use('/v1',require('./v1/index'));

module.exports = router;