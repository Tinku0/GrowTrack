const express = require('express');
const router = express().router;
const { createUser } = require('../controllers/user')

router.post('/create', createUser)

module.exports = router;