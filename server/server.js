const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.urlencoded())
app.use(parser.json())
app.use(cors())


mongoose.connect('mongodb+srv://lyes1994:lyes1994@cluster0.o93oo.mongodb.net/url-shortener?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })
                .then(() => {
                    console.log("Successful connection ot the database")
                }).catch((error) => {
                    console.log(error)
                })


app.listen(2222, ()=> {
    console.log("server listening at port 2222")
})


app.get('/', (req, res)=>{
    res.send("server working correctly")
})

app.post('/signUp', (req, res) => {
    res.send(req.body.username)
})