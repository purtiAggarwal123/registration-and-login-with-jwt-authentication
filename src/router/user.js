const express = require('express')
const AuthController = require('../controller/userController')


const router = new express.Router()

//register handler
router.post('/registration', AuthController.register)

router.post('/signin', AuthController.login)

module.exports = router