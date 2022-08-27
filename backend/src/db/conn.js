require('dotenv').config({ path: 'config.env' });
const mongoose = require ('mongoose');
mongoose.connect(process.env.DB).then(()=>{
    console.log('Connection is sucessful')
}).catch((err)=>{
    console.log(err);
});

