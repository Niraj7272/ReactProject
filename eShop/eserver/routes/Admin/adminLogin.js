require('dotenv').config()
const Admin = require('../../models/Admin')
const bcrypt = require('bcryptjs')
const express = require('express')
const jwt = require('jsonwebtoken')
const Admintoken = require('../../models/Admintoken')

// const SECRET_KEY = "niraj"

const router = express.Router()


//http://localhost:5000/adminLoginapi/createadmin
router.post('/createadmin',async(req,res)=>{
    try {
        const newAdmin = new Admin({
            admin_name:req.body.admin_name,
            admin_email:req.body.admin_email,
            admin_pass:await bcrypt.hash(req.body.admin_pass,12)
        })

        const saveAdmin = await newAdmin.save() //store data
        res.status(200).json(saveAdmin)  //display data
    } catch (error) {
        res.status(500).json({'error':error})
    }
})


//http://localhost:5000/adminLoginapi/login
router.post('/login',async(req,res)=>{
    const admin_email = req.body.admin_email
    const admin_pass = req.body.admin_pass
    try {
        const login = await Admin.findOne({admin_email})
        if (!login) {
            return res.json({"sts":1,"msg":"Email id is not Found"})
        } else {
            if (await bcrypt.compare(admin_pass,login.admin_pass)) {
                // const token = jwt.sign({adminId:login._id},SECRET_KEY,{expiresIn:'6hr'})
                const token = jwt.sign({adminId:login._id},process.env.ADMIN_SECRET_KEY,{expiresIn:'6hr'})
                const expiresAt = new Date(Date.now()+(5*60*60*1000))
                const adminTokenSave = new Admintoken({
                    adminId:login._id,
                    token,
                    expiresAt
                })

                const aid = login._id
                const aemail = login.admin_email
                const aname = login.admin_name

                await adminTokenSave.save()
                return res.json({"sts":0,aid,aemail,aname,token})
            } else {
                return res.json({"sts":2,"msg":"Password is wrong"})
            }
        }
    } catch (error) {
        res.status(500).json({'error':error})
    }
})

module.exports = router


