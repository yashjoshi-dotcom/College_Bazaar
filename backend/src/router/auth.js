// Importing essential libraries 
const express =require('express');
const User= require('../models/userSchema');
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');
const Jwt_authenticate=require('../middlewares/Jwt_authenticate');

//Using Express Router Class
const router=express.Router();

// Register the data of a new member into the DB
 router.post('/register',async (req,res)=>{

    const{name,email_id,college_name,password}=req.body;
    // Checking if all data has been recieved on the backend.
    if(!name|| !email_id || !password)
    {
        return res.status(409).json({error :"Plz enter all data.."});
    }
    //Checking if the Email-ID has @dtu.ac.in domain name
    var domain = email_id.substring(email_id.lastIndexOf("@") +1);
    if(domain!='dtu.ac.in')
    {
        return res.status(400).json({error :"Only DTU institutional email ID's allowed."});
    }

    try
    {
        //Checking if Email Id already exists in the dB and if it exists returning message back 
        const userLogin = await User.findOne({email_id});
        if(userLogin) return res.json({message:"Email already exists"});

                
        const user =new User({name,email_id,college_name,password});
        //Hashing the password and c_password with help of middle ware and bcrypt in db/conn.js
        //Callling save method to add the data to the database 
        await user.save();
        console.log(user);
        res.status(201).json({message :"registered sucessfully"});
    }
    //Consoling Error for proper Debugging 
    catch(err){
        console.log(err);
    }
 });

 //Get the data of an indiviual
router.get('/register/:id',async (req,res)=>{

    try
    {
        const _id= req.params.id;
        const single_user =await User.findById(_id);
        console.log(single_user);
        res.status(201).send(single_user);
    }
    catch(err){
        console.log(err);
    }
 });

 //Get the whole data from the database 
 router.get('/db',async (req,res)=>
 {
    try
    {
        const user =await User.find({});
        console.log(user);
        res.status(201).send(user);
    }
    //Consoling Error for proper Debugging 
    catch(err){
        console.log(err);
    }
 });



  //The below function will be used to delete data of an indiviual.
  router.delete('/register/:id',async (req,res)=>{

    try
    {
        const _id= req.params.id;
        const single_user =await User.findByIdAndDelete(_id);
        console.log(single_user);
        res.status(201).send(single_user);
    }
    catch(err){
        res.status(500).send(e);
        console.log(err);
    }
 });
//All above mentioned code is for registering a new user.

// The below mentioned code is for loging in.
router.post('/signin',async (req,res)=>{

    try{
        const {email_id,password }= req.body;
        ///Checking if both email id and password is entered 
        if(!email_id || !password)
        {
            return res.status(400).json({error :"incomplete Data"});
        }
        //Checking if Email Id exists and if not request registering as a new account 
        const userLogin = await User.findOne({email_id});
        if(!userLogin) res.json({message:"Invalid Email ID. Pls register before signing in"});
        //Comparing the entered password with the one present in dB
        const isMatched= await bcrypt.compare(password,userLogin.password);
        //Generatig JWT authentication token
        const token = await userLogin.generateAuthToken();
        res.cookie('jwtoken',token,{
            expires: new Date(Date.now()+ 25892000000),//The cookie will expire in 30 days from the date the user had logged in .
            //The value above need to be provided in millisconds    
            httpOnly:true, //Else it will work only in secure
        });
        console.log(userLogin);
        if(isMatched) res.json({message:"Login Successful"});
        else res.json({message:"Invalid Credentials"});

    } catch(err)
    {
        console.log(err);
    }
})
//form page 
router.get('/profilec',Jwt_authenticate,(req,res)=>{
    res.send(req.rootUser);
})

module.exports=router;


/*

The Commented Code has just been written for reference for now and will be utilised in a later update to the Project.:bulb:


 
 //Will handle patch request for an indiviual
 router.patch('/register/:id',async (req,res)=>{

    try
    {
        const _id= req.params.id;
        const single_user =await User.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        console.log(single_user);
        res.status(201).send(single_user);
    }
    catch(err){
        res.status(500).send(e);
        console.log(err);
    }
 });

 //will patch listed data for an indiviual->>>
 router.patch('/add_data/:id',async (req,res)=>{
    try
    {
        // console.log("<<<>>>>");
        // console.log(req.body);
        // console.log("<<<>>>>");

        const newItem = 
        {
            item_name:req.body.item_name,
            item_price: req.body.item_price,
            item_age:req.body.item_age,
            item_condition:req.body.item_condition,
            item_immage:req.body.item_image,
            item_tag:req.body.item_tag,
            item_description:req.body.item_description,
            
        };
        
        await User.findOneAndUpdate(
          {
            email_id: req.params.id,
          },
          {
            $addToSet: {
              list: newItem,
            },
          }
        )
        console.log("final work complete");
        res.status(201).json({message:"good work ultimate"});
        
    }
    catch(err){
        res.status(550).send(err);
        console.log(err);
    }
 });

 */

