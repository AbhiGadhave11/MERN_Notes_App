const express = require("express")
const notes = require("./data/notes")
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes')
const noteRoutes = require('./routes/noteRoutes')
const { notFound, errorHandler } = require("./middlewares/errorMiddleware")
const path = require('path') 

const app = express();
dotenv.config()
connectDB();
app.use(express.json());

app.get("/",First)
function First(req,res){
    res.send("API is running")
}

// app.get('/api/notes',(req,res)=>{
//     res.json(notes)
// })
// function Notes(req,res){
//     res.json(notes)
    
// }

app.use('/api/users',userRoutes)
app.use('/api/notes',noteRoutes)

// --------- deployment ----------

__dirname = path.resolve()
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../build')))
}
else{
    app.get("/",First)
    function First(req,res){
        res.send("API is running")
    }

}

// --------- deployment -----------

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