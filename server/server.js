// requirements
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
const bcrypt = require('bcrypt')

const saltRounds = 10

//express instance
const app = express()


// midlewares
app.use(express.urlencoded())
app.use(parser.json())
app.use(cors())

// onnection to  the DB
const conn = mysql.createConnection('mysql://root:root@localhost:3306/quiz?debug=true&charset=BIG5_CHINESE_CI&timezone=-UTC')
// check if the connection succeeded 
conn.connect(function(msg) {
    if(msg){
        console.log("Connection error")
        return
    } 
    console.log("successful connection")
})
 
// starting server
app.listen(2222, ()=> {
    console.log("server listening at port 2222")
})

// default way
app.get('/', (req, res)=>{
    res.send("server working correctly")
})


// sign up call
app.post('/signup', (req, res) => {

    const errors = {}
    const username = req.body.username
    const email = req.body.email
    const confirmEmail = req.body.confirmEmail
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    conn.query('SELECT * FROM user', function(error, result){
        if(error){
            errors['db_error'] = "Error occured when communicating with database"
            throw error
        }
        // check if the user email or username exists 
        let found = false
        result.map(item => {
            if(item.username.trim() === username.trim()){
                found = true
                errors['usernameExist'] = 'This username exist, please choose an other one'
            }
            if(item.email.trim() === email.trim()){
                found = true
                errors['emailExist'] = 'This username exist, please choose an other one'
            }
        })

        // check if username provided 
        if(username.length == 0 ){
            errors['username_empty'] = 'Username must be provided'
        }

        // check if the email is valid
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            errors['email_error'] = "This email is not valid"
        }

        // check if the emails are similars
        if(email !== confirmEmail){
            errors['confirmEmail'] = 'Emails are not similar'
        }

        //check if password provided 
        if(password.length < 4){
            errors['password_length'] = 'Pasword must contain at least 4 characters'
        }

        // check if passwords are similars
        if(password !== confirmPassword ){
            errors['confirmPassword'] = "Passwords are not similars"
        }

        if(Object.keys(errors).length === 0 ){
            const query = 'INSERT INTO user (username, email, password) VALUES ( ? , ?, ?)'
            // hash password 
            bcrypt.hash(password, saltRounds, function(err, hash){
                if(err) throw err
                conn.query(query, [username, email, hash], (error, result) => {
                    errors['db_error'] = 'Error occured when communicating with database'
                })
            })
        }

        res.send(errors)
    })
    
})

app.post('/login', (req,res) => {
    const email = req.body.email
    const password = req.body.password

    conn.query('SELECT * FROM user', (error, result) => {
        const errors = {}
        if(error){
            errors['db_error'] = "Database connection error" 
            throw error
        }

        let found = false

        result.map(item => {
            if(item.email === email){
                bcrypt.compare(email, item.email).then(function(result){
                    found = result
                })
            }
        })

        if(!found){errors['connection_fail'] = 'Connections failed, please check your credentials'}

        res.send(errors)
    })
})