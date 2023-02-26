const express = require("express")
const notes = require("./data/notes")
const dotenv = require('dotenv')

const app = express();
dotenv.config()

app.get("/",First)
function First(req,res){
    res.send("API is running")
}

app.get('/api/notes',Notes)
function Notes(req,res){
    res.json(notes)
    
}

app.get('/api/notes/:id/:id2',SpecificNote)
function SpecificNote(req,res){
    const note = notes.find((n)=>n._id === req.params.id)
    console.log(req.params);
    res.send(note)
}

const PORT = process.env.PORT || 3000

app.listen(PORT,start)
function start(){
    console.log(`Server is running on PORT ${PORT}`);
}