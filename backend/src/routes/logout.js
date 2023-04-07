// Importing required libraries
const express = require('express');
const User = require('../models/userSchema');
const jwt_Authenticate = require('../middlewares/jwt_authenticate');

// Using Express Router Class
const router = express.Router();

// The below function will be used to delete data of an indiviual fron the database .
router.get('/', jwt_Authenticate,async (req, res) => {
    try {
        // remove the current token from the db
      //  res.rootUser.tokens = res.rootUser.tokens.filter((currentElement)=>{
        //     return  currentElement.token!= req.token
     //   })

     //removing all instances of login
     res.rootUser.tokens=[];
        res.clearCookie("jwtoken");
        await req.rootUser.save();
        // res.render('Home');
        console.log("logout succesful");        
    }
    catch(err)
    {
    console.log(err);    
    res
    .status(500)
    .json({ error: 'We are experiencing some server problems!!' });
    }
});

module.exports = router;