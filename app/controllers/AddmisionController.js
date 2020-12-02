const express=require('express')
const router=express.Router()

const Addmision=require('../model/Addmission-Register')
const {authenticateUser}=require('../middleware/authentication')




router.get('/',authenticateUser,function(req,res){

    // const {user}=req
    // console.log(req.user)
    // Addmision.find({
    //     user:user._id
    // })
    // .sort({
    //     createdAt:-1
    // })

    console.log(req.user,'i am here')
    
    Addmision.find()
        .then(function(users){
            res.send(users) 
        })
        .catch(function(err){
            res.send(err) 
        })
    
    .then(admissions => res.json(admissions))
    .catch(err => res.json(err))
    // res.send('welcome')
})

router.post('/',authenticateUser,function(req,res){
    const {user}=req
    const body=req.body
    const admission= new Addmision(body)
    admission.id=user._id
    admission.save()

    .then(admission => res.json(admission))
    .catch(err => res.json(err))
    console.log(body)
    // res.send('registration ')
})

router.put('/:id',authenticateUser,(req,res)=>{
    const id=req.params.id
    const body = req.body
    Addmision.findOneAndUpdate(
        {
        _id:id,
        user:req.user._id},
        // {$set:body},
        // {new:true,
        // runValidators:true}
        )
        .then((admission)=>{
            if(!contact)
            {
                res.json({ })
            }
            res.json(contact)
        })
        .catch((err)=>{
            res.json(err)
        })   

})

router.delete('/:id',authenticateUser,(req,res)=>{
    const id=req.params.id
    Addmision.findOneAndDelete({
        _id:id,
        user:req.user_id
    })
    .then((admission)=>{
        if(!admission)
        {
            res.json({})
        }
        res.json(admission)
    })

    .catch((err)=>{
        res.json(err)
    }
)




})

module.exports= router
