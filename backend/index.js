const express = require("express")
const notes = require("./data/notes")
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler } = require("./middlewares/errorMiddleware")

const app = express();
dotenv.config()
connectDB();
app.use(express.json());

app.get("/",First)
function First(req,res){
    res.send("API is running")
}

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})
// function Notes(req,res){
//     res.json(notes)
    
// }

app.use('/api/users',userRoutes)

app.use(notFound)
app.use(errorHandler)

// app.get('/api/notes/:id/:id2',SpecificNote)
// function SpecificNote(req,res){
//     const note = notes.find((n)=>n._id === req.params.id)
//     console.log(req.params);
//     res.send(note)
// }

const PORT = process.env.PORT || 4200

app.listen(PORT,start)
function start(){
    console.log(`Server is running on PORT ${PORT}`);
}