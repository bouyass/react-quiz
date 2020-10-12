// requirements
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

//express instance
const app = express()


// midlewares
app.use(express.urlencoded())
app.use(parser.json())
app.use(cors())

// onnection to  the DB
mongoose.connect('mongodb+srv://admin:admin@cluster0.o93oo.mongodb.net/quiz?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à MongoDB réussie !')
    }).catch(() => console.log('Connexion à MongoDB échouée !'));

 
// starting server
app.listen(2222, ()=> {
    console.log("server listening at port 2222")
})

// default way
app.get('/', (req, res)=>{
    res.send("server working correctly")
})


// sign up call
app.post('/signUp', (req, res) => {
    res.send(req.body.username)
})