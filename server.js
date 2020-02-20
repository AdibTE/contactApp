const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./config/db');

// Database Connection
connectDB();

// Middlewares
app.use(express.json({extended:false}))

app.get('/',(req,res)=>{
    res.json({msg:'hello world'})
})

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT =  process.env.PORT || 85;
app.listen(PORT,()=>{
    console.log(`[ Listening on port ${PORT} ]`)
});