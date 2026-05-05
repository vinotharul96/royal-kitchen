const express = require('express')
const { addUser, getUser, deleteUser, loginUser} = require('../controllers/userController')

const userRouter = express.Router()

userRouter.post('/addUser',addUser)
userRouter.get('/getUser',getUser)
userRouter.delete('/deleteuser/:id',deleteUser)
userRouter.post('/loginUser',loginUser)

module.exports = userRouter