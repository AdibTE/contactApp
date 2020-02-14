const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/',(req,res)=>{
    res.json({msg:'hello world'})
})

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT =  process.env.PORT || 85;
app.listen(PORT,()=>{
    console.log(`[ Listening on port ${PORT} ]`)
});