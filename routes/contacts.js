const express = require('express');
const router = express.Router();

// @router Get api/contacts
// @desc Get all users contact
// @access Private
router.get('/',(req,res)=>{
    res.send('Get all users contact')
})

// @router GET api/contacts
// @desc add new contact
// @access Private
router.post('/',(req,res)=>{
    res.send('add new contact')
})

// @router PUT api/contacts/:id
// @desc Update Contact info
// @access Private
router.put('/:id',(req,res)=>{
    res.send('Update Contact info')
})

// @router DELETE api/contacts/:id
// @desc Delete contact
// @access Private
router.delete('/:id',(req,res)=>{
    res.send('Delete users contact')
})

module.exports = router;