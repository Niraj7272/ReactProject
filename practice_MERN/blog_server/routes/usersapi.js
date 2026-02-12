const bcrypt = require('bcryptjs');
const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();

const user = require("../models/user");

const storage = multer.diskStorage({
  destination:'./uploads/',
  filename:function(req,file,cb){
    cb(null,file.fieldname+"_"+Date.now()+".png");
  }
})

const upload = multer({
  storage:storage,
  limits:{fileSize:1000000}
})

router.post('/uploadimage',upload.single('profile_pic'),(req,res)=>{
res.json({"msg":"File upload successfully"})
})


//http://localhost:5000/api/user/adduser
router.post("/adduser", async (req, res) => {
  try {
    const newUser = new user({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_dob: bcrypt.hashSync(req.body.user_dob,12),
      gender: req.body.gender,
    });

    const saveUser = await newUser.save();
    res.json(saveUser);
  } catch (error) {
    res.status(500).json({ 'error': error });
  }
});

//http://localhost:5000/api/user/viewuser
router.get("/viewuser", async(req, res)=>{
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({'Error': error})
  }
})

//http://localhost:5000/api/user/singleuser/1111
router.get('/singleuser/:userid', async(req,res)=>{
  const uid = req.params.userid
  try {
    const users = await user.findById(uid)
    res.json(users)
  } catch (error) {
    res.status(500).json({'Error': error})
  }
})

//http://localhost:5000/api/user/updateuser/1111
router.put('/updateuser/:userid', async(req,res)=>{
  const uid = req.params.userid
  try {
    const users = await user.findByIdAndUpdate(
      uid,
      {$set:req.body},
      {new:true}
    )
    res.json(users)
  } catch (error) {
    res.status(500).json({'Error': error})
  }
})

//http://localhost:5000/api/user/deleteuser/1111
router.delete('/deleteuser/:userid', async(req,res)=>{
  const uid = req.params.userid
  try {
    const users = await user.findByIdAndDelete(uid)
    res.status(200).json({'msg':'User deleted successfully'})
  } catch (error) {
    res.status(500).json({'Error': error})
  }
})

module.exports = router;