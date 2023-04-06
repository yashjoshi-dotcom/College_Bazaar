// Importing required libraries
const express = require('express');

// Using Express Router Class
const router = express.Router();

// Importing Environment Variables
require('dotenv').config();

//Importing stripe library
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 


// The given function adds a new listed item into the database and update list array.
router.post("/", async (req, res) => { 
    try
    {
        const { product }  = req.body; 
        const session = await stripe.checkout.sessions.create({ 
          payment_method_types: ["card"], 
          line_items: [ 
            { 
              price_data: { 
                currency: "inr", 
                product_data: { 
                  name: product.name, 
                }, 
                unit_amount: product.price * 100, 
              }, 
              quantity: product.quantity, 
            }, 
          ], 
          mode: "payment", 
          //Needs changes here 
          success_url: "http://localhost:3000/success", 
          cancel_url: "http://localhost:3000/cancel", 
        }); 
        res.json({ id: session.id }); 
        console.log("Sucess");
    }
    catch (err) {
        console.log(err);
        res
          .status(500)
          .json({ error: 'We are experiencing some server problems!!' });
      }
  }); 
 module.exports = router;
