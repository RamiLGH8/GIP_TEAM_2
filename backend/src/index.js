const express = require("express");
const collection = require("./config");
const mailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
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
    res.send("registered");
   
})

app.get("/send",async(req,res)=>{ 
   const result=await collection.find();
   
   
   


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
   result.map(async e=>{
  const id = await transporter.sendMail({
    from: {
        name: 'GDG',
        address: 'gdggiptest@gmail.com'
    }, // sender address
    to: [e.email], // list of receivers
    subject: "Congratulations! You're In for FlutterFest Hackathon 🚀", // Subject line
    html: `
        <div style="font-family: 'Arial', sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #4CAF50;">Congratulations! You're In for FlutterFest Hackathon 🚀</h1>
                <p>Dear ${e.name},</p>
                <p>We're thrilled to share the exciting news – your application to participate in the FlutterFest Hackathon has been accepted! Congratulations on securing your spot for this dynamic event! 🎉</p>
                
                <div style="margin-top: 20px;">
                    <h2>Event Details:</h2>
                    <p>Date: 12/01/2024</p>
                    <p>Time: 8 am</p>
                    <p>Location: AP2 ESI OuedSmar</p>
                </div>
                
                <p>Your participation promises an enriching experience with hands-on workshops, insightful lightning talks, and the thrilling Flutter Hackathon where you can showcase your skills, win prizes, and gain recognition from the Flutter community.</p>
                
                <p>Make sure to come equipped with your laptop and any other tools you may need for the hackathon. We encourage active participation, networking, and making the most of this fantastic opportunity.</p>
                
                <p>Check your email for any additional details and updates related to the hackathon. We're confident you'll contribute greatly to the vibrant FlutterFest community.</p>
                
                <p>Congratulations once again! 🚀 We're eager to see you in action at the FlutterFest Hackathon!</p>
                
              <div style="margin-top: 20px;">
                    <p>Warm regards,</p>
                    <p>GDG Club</p>
                </div>
            </div>
        </div>
    `,
});})
res.json("success");
}

 )

const port = "5000"
app.listen(port, ()=>{
  console.log("running on ... ");
});