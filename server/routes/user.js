const express = require('express');
const router = express().router;
const { signUpUser, signInUser } = require('../controllers/user')

router.post('/signup', signUpUser)
router.post('/signin', signInUser)

module.exports = router;