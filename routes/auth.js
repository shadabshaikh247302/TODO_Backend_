<<<<<<< HEAD
const express = require('express');
const { signIn, logIn, getUserAll } = require('../controller/auth');
const authRouter =  express.Router()

authRouter.post("/signIn",signIn)
authRouter.post("/logIn",logIn)
authRouter.get("/getUserAll",getUserAll)

module.exports = authRouter;
=======
const express = require('express');
const { signIn, logIn, getUserAll } = require('../controller/auth');
const authRouter =  express.Router()

authRouter.post("/signIn",signIn)
authRouter.post("/logIn",logIn)
authRouter.get("/getUserAll",getUserAll)

module.exports = authRouter;
>>>>>>> 35700e10c5bcf2b3cadd5613a041d48be0bf2b5f
