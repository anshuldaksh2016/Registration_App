const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Pool = require('pg').Pool;
const app = express();
const sendMail = require('./mail');
const cors = require('cors');

const pool = new Pool({
    user:'ffhyjmxatkiapr',
    password: '7d693dc323dd4ff98bea914a6f40740d2b642adfb77c81914dabe605e9cb6fb9',
    host: 'ec2-54-197-254-117.compute-1.amazonaws.com',
    port: 5432,
    database: 'da8udtl1v4q733',

})

const PORT = process.env.PORT || 5000;
// Data Parsing 
app.use(express.urlencoded({
    extended: false

}));
// middleware
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'build')));

app.post('/register', async (req,res) => {
    // send email 
    // const text = "Hi! U can reset your password here {{Link}}";

    const {email} = req.body;
    console.log(req.body);
    // try {
    //     const { email } = req.body;
    //     const insertData =  await pool.query(
    //         "INSERT INTO user_table (email) VALUES($1) [email]",

    //     );
    // } catch (err) {
    //     console.log(err);

    // }
   

    sendMail(email,function(err,data){
    if(err)
    {
        res.status(500).json({message: "internal server Error"})
    }else{
        res.status(200).json({message: 'Check your mail!!! '});
    }

    });
    
});

app.post('/setup-pwd',(req,res) => {
    const newPassword = req.body.password
    const email = req.body.email;
    
})









app.listen(PORT , () => console.log("Server is listening"));