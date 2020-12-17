const nodemailer = require('nodemailer');
const bodyParser=require('body-parser');
const express=require('express');
const cors = require('cors');
const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.post('/api/forma',(req,res)=>{
    let data=req.body
    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port:465,
        auth: {
            user: 'username@gmail.com',
            pass: '*******'
        }
    });
let mailOptions = {
    from: `${data.email}`,
    to: `${data.emailowner}`,
    subject: `message from ${data.name}`,
    html:`
    <h3>imformaions</h3>
    <ul>
        <li>Name : ${data.name}</li>
        <li>email : ${data.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>
    `
};

smtpTransporter.sendMail(mailOptions,(error,response)=>{
    if(error){
        res.send(error)
    }else{
        res.send('Success')
    }
})
smtpTransporter.close()
 
})
const PORT =process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log(`server starting at port ${PORT}`)
})
