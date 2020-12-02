const express=require('express')
const cors=require('cors')
const connectDB=require('./config/database')
connectDB();
const app = express()
const port = 3005;

// const router=require('./config/router')

const router= require('./app/controllers/AddmisionController')
const {userRouter}=require('./app/controllers/UsersController')
const { adminUserRouter}=require('./app/controllers/admin/UserController')
app.use(express.json())
app.use(cors())
app.use('/students',router)
app.use('/users',userRouter)
app.use('/admin', adminUserRouter)


app.listen(port,()=>{
    console.log('listening to port', port)
}) 