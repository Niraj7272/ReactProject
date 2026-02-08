const bcrypt = require('bcryptjs');
const express = require("express");
const router = express.Router();

const user = require("../models/user");

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

module.exports = router;