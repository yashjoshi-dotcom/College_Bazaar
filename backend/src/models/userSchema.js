const mongoose= require('mongoose');
const bcrypt =require('bcryptjs');
const jwt = require ('jsonwebtoken');
require('dotenv').config();

//The following code sets the schema for the vaious fields that are required from the end user while registering and the type of each of this fieldd. 

const userSchema =new mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    email_id:{
        type: String,
        required:true
    },
    college_name:{
        type: String,
        default:"Delhi Technological University"
    },
    password:{
        type:String,
        required:true
    },
    c_password:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    list:[
        {
            item_name:{
                type:String,
                required:false
            },
            item_price:{
                type:Number,
                required:false
            },
            item_name:{
                type:String,
                required:false
            },
            
        }
    ]
})

//Hashing the password (middle ware function {pre : ensures that the function is called before save on auth.js file})
userSchema.pre('save', async function(next)
{
    //This ensures that we are not hashing password repeatedly by ensuring that hash is only called when password field is modified 
    if (this.isModified('password'))
    {

        //This ensures the password is being hashed and number of hashing rounds =10.
        this.password= await bcrypt.hash(this.password,12);
        this.c_password= await bcrypt.hash(this.c_password,12);
    }
    next();
});

//Generating JWT Token
userSchema.methods.generateAuthToken =async function(){
    try
    {
        let token_ =jwt.sign({_id:this._id},`${process.env.JWT_KEY}`);
        //Here token_ is the value derrived from above line whereas token refers to the one present in userSchema
        this.tokens=this.tokens.concat({token:token_});
        await this.save();
        return token_;
    }catch(err)
    {
        console.log(err);
    }
}
const User= mongoose.model("Main_Collection",userSchema);
module.exports=User;
