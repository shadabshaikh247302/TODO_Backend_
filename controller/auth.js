const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Uschema = require('../schema/user')

exports.signIn = async (req,res)=>{
    try {
        const {password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashPassowrd = await bcrypt.hash(password, salt)
        const userToBeAdded =  new Uschema({...req.body,password:hashPassowrd, confirm_password:hashPassowrd}) 
        const dataToBeSaved = await userToBeAdded.save()
        res.send({dataToBeSaved,msg:"data added"})
    } catch (error) {
        console.log(error)
    }
}
    exports.logIn = async (req,res)=>{
        try {
            const {email,password} = req.body
            const mailVerify = await Uschema.findOne({email:email})
            if(mailVerify){
                const passwordVerify = await bcrypt.compare(password,mailVerify.password)
                if(passwordVerify){
                    const token = jwt.sign({ email: user.email }, process.env.SECRET, { expiresIn: '1h' });

                    res.send({token,userID:mailVerify._id})
                }else{
                    res.status(401).send("passowrd  is incorrect")
                }
            }else{
                res.status(404).send("User does not exist")
            }
        } catch (error) {
            console.log(error)
        }
    }

exports.getUserAll = async (req,res)=>{
    try {
        const data = await Uschema.find()
        res.send({data,msg:"get the data"})
    } catch (error) {
        console.log(error)
    }
}