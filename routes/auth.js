const express = require('express');
const { signIn, logIn, getUserAll } = require('../controller/auth');
const authRouter = express.Router();

authRouter.post("/signIn", signIn);
authRouter.post("/logIn", logIn);
authRouter.get("/getUserAll", getUserAll);

module.exports = authRouter;
