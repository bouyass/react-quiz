// requirements
const express = require('express')
const parser = require('body-parser')
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const saltRounds = 10
const privateKeyPath = path.join(__dirname,'private.key')

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

// sign up call handler
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


// login call handler
app.post('/login', (req,res) => {
    const email = req.body.email
    const password = req.body.password

    conn.query('SELECT * FROM user WHERE email = ?', email , async (error, result) => {
        const errors = {}
        if(error){
            errors['db_error'] = "Database connection error" 
            throw error
        }
        
        if(result.length === 0){
            errors['wrong_email'] = "The provided email doesn't exist";
        }else{
            const truePassword = await bcrypt.compare(password, result[0].password)
            if(!truePassword){
                errors['wrong_password'] = "The provided password doens't match"
            }
        }

        if(Object.keys(errors).length === 0){
            fs.readFile(privateKeyPath,'utf8',(err,privateKey) => {
                if(err) {errors['jwt_error'] = 'Error in token generation'}
                let username = result[0].username
                const token = jwt.sign({ username }, privateKey, { expiresIn: 60})

                if(token.length > 0){
                    errors['token'] = token
                    console.log(token)
                    errors['username'] = username
                    res.send(errors)
                }else{
                    errors['jwt_error'] = 'Error in token generation'
                    res.send(errors)
                }
            })
        }else{
            res.send(errors)
        }
    })
})

//save score
app.post('/save', (req,res)=> {
    let score = req.body.score
    let username = req.body.username

    conn.query('SELECT iduser FROM user WHERE username = ?', username, (error, result) => {
        if(error) throw error
        console.log(result)
        let idUser = result[0].iduser
        conn.query('INSERT INTO score (idUser, score) VALUES (?, ?)', [idUser, score] , (error , result) => {
            if(error) throw error
            res.sendStatus(200)
        })
        
    })
})

//test api
app.get('/test', (req, res) => {
    console.log(req.headers.authorization)
    let token = req.headers.authorization.split(' ')[1]
    fs.readFile(privateKeyPath, (err, privateKey) => {
        jwt.verify(token, privateKey, (err, decoded) => {
            if(err){
                res.sendStatus(403)
            } else{
                console.log(decoded.username)
                res.send(decoded.username)
            }
        })
    })
})