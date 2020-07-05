const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const userRouter = require('./router/user')
require('./db/mongoose')


const app = express()
const port = process.env.PORT || 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
//router
app.use(userRouter)




app.listen(port, () => {
    console.log('server up to ' + port)
})