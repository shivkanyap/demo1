const express = require ('express')
const _  = require ('lodash')
const router = express.Router()

const {User} =require ("../../model/Users")

const {authenticateUser} =require("../../middleware/authentication")
// const {adminAccess, superAdminAccess }=require("../../middleware/acess")


//localhost:3005/admin/users
router.get("/students", authenticateUser,  function(req,res){
    User.find()
        .then(function(users){
            res.send(users)
        })
        .catch(function(err){
            res.send(err)
        })
})

//localhost:3005/admin/users/:id
router.get("/students/:id", authenticateUser,  function(req,res){
    const {user}=req
    const id = req.params.id
    console.log(user,"List of all users ")
     console.log(id,'id is in get id')
    User.findOne({_id:id,
        user:req.user._id
    })

        .then(function(user){
            res.send({user})
        })
        .catch(function(err){
            res.send(err)
        })
})


//localhost:3005/admin/users
router.post("/", authenticateUser,  function(req,res){
    const body = _.pick(req.body,["fullname", "username", "email", "password", "roles", "allowAccess"])
    body.passUpdate = true
    const user = new User(body)
    user.save()
        .then(function(user){
            res.send({user})
        })
        .catch(function(errors){
            res.send(errors)
        })
})

//localhost:3005/admin/users/:id
// router.put("/:id", authenticateUser, adminAccess, function(req,res){
//     const id = req.params.id
//     const body = _.pick(req.body,["fullname", "username", "email", "password", "roles", "allowAccess"])
//     body.password === '' ? delete body.password : body.passUpdate = true
//     User.findByIdAndUpdate(id, body, {new: true, runValidators: true, context: 'query'})
//         .then(function(user){
//             return body.password ? user.updatePassword() : user
//         })
//         .then(function(user){
//             console.log('final',user)
//             res.send(user)
//         })
//         .catch(function(errors){
//             res.send(errors)
//         })
// })

// //localhost:3005/admin/users/:id
// router.delete("/:id", authenticateUser, superAdminAccess, function(req,res){
//     const id = req.params.id
//     User.findByIdAndDelete(id)
//         .then(function(user){
//             res.send({user})
//         })
//         .catch(function(err){
//             res.send(err)
//         })
// })

module.exports = {
    adminUserRouter: router
}