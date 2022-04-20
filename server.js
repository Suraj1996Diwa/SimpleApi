import express  from "express";
import bodyParser from "body-parser";
import usersRouter from './routes/users.js'

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.get('/',(req,res)=> {
    // console.log('[Test]/')
    res.send('Hellow from homepage')
})
app.use('/users' , usersRouter)
app.listen(PORT,() =>console.log(`Server is running`))