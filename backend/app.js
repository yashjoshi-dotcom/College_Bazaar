const express= require('express');
require('dotenv').config({ path: 'config.env' });
const app=express();
const port=process.env.PORT || 5000;
require('./src/db/conn');

const ranks=require('./src/models/userSchema');
app.use(express.json());
app.use(require('./src/router/auth'));


app.listen(port,()=>{
console.log(`Server is running on port ${port}`);
});                             