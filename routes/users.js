import express from "express";
import { v4 as uuidv4 } from 'uuid';//for id
const router = express.Router();

let users = []

router.get('/',(req,res)=>{
    console.log(users)

    res.send(users);
})
router.post('/',(req,res)=>{
//     console.log('post route reached')
//     console.log(req.body)
    const user = req.body
//     const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
//     const userWithId = {...user,id:userId}
//     users.push(userWithId)
    users.push({...user,id:uuidv4()})
    res.send(`user with the name ${user.firstname} added to the database`)
       
})
router.get('/:id',(req,res)=>{
    const { id } = req.params
    const foundUser = users.find((user)=> user.id === id)
    res.send(foundUser)
})  
router.delete('/:id',(req,res)=>{
    const { id } = req.params
    // when user id is not = to given id then leave it or delete it 
    users = users.filter((user)=>user.id != id)
    res.send(`users with the id ${id} deleted from the database`)
})
// put method is to update all 
// patch is used to update a part or all 
router.patch('/:id',(req,res)=>{
    const { id } = req.params
    const {firstName,lastName,age} = req.body
    const user = users.find((user)=>user.id === id)
    if(firstName){
        user.firstname = firstName;
    }
    if(firstName){
        user.lastname = lastName;
    }
    if(age){
        user.age = age;
    }
    res.send(`User with id ${id} has been updated`)

})
export default router