const express = require('express');
const router = express.Router();

// @router Get api/auth
// @desc Get logged in user
// @access Private
router.get('/',(req,res)=>{
    res.send('get logged in user')
})

// @router Post api/auth
// @desc Auth user & get token
// @access Public
router.post('/',(req,res)=>{
    res.send('Auth user & get toke')
})

module.exports = router;