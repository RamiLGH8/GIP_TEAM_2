const express = require("express");
const collection = require("./config");
const mailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/register",async(req,res)=>{ 

    const data = {
      name:req.body.name,
      email:req.body.email,
      num:req.body.num
    }
    console.log(data);
    const userdata= await collection.insertMany(data);
    console.log(userdata);
   
})

app.get("/send",async(req,res)=>{ 
   const result=await collection.find();
   mails=[];
   mails.push("pp");
   


   const transporter = mailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "gdggiptest@gmail.com",
      pass: "bpsz bhka kdue xibm",
    },
  });
  const info = await transporter.sendMail({
    from: {
      name:'GDG',
      address:'gdggiptest@gmail.com'
    }, // sender address
    to: ["meliouhmedmahdi@gmail.com"], // list of receivers
    subject: "Dash Spetial Event", // Subject line
    html: "<b>Hello worlllld?</b>", // html body
  });
   res.json(info.messageId);

 
})

const port = "3000"
app.listen(port, ()=>{
  console.log("running on ... ");
});