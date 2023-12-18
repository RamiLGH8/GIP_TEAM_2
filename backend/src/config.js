const moongose = require("mongoose");

const con = moongose.connect("mongodb+srv://m3kido:genshiro@gip.h84pccz.mongodb.net/")
con.then(()=>console.log("connected"));

const regschema = new moongose.Schema({
    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    num:{
      type:String,
      required:true
    }
}); 

const collection = new moongose.model("users",regschema);
module.exports=collection;