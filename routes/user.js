<<<<<<< HEAD
const express = require('express');
const { addData, deleteDataById, markAsCompleted, getAllTodos, moveToTomorrow, moveToToday, addTodo } = require('../controller/user');

const { addTaskMonthly, getTaskMonthly, deleteTaskMonthly } = require('../controller/muser');
const { authenticator } = require('../middlewears/authenticator');
const userRouter = express.Router();

userRouter.get('/getData',  getAllTodos); 
userRouter.get("/getTaskMonthly", getTaskMonthly);  // Authentication required
userRouter.post("/addTaskMonthly", addTaskMonthly);  // Authentication required
userRouter.delete("/deleteTaskMonthly/:id", deleteTaskMonthly);  // Authentication required
userRouter.post("/addData", addData);  // Authentication required
userRouter.post("/addTodo", addTodo);  // Authentication required
userRouter.delete("/deleteDataById/:id", deleteDataById);  // Authentication required
userRouter.put('/moveToTomorrow/:id', moveToTomorrow);  // Authentication required
userRouter.put('/moveToToday/:id',  moveToToday);  // Authentication required
userRouter.put('/markAsCompleted/:id', markAsCompleted);  // Authentication required

module.exports = userRouter;
=======
const express = require('express');
const { addData, deleteDataById, markAsCompleted, getAllTodos, moveToTomorrow, moveToToday, addTodo } = require('../controller/user');

const { addTaskMonthly, getTaskMonthly, deleteTaskMonthly } = require('../controller/muser');
const { authenticator } = require('../middlewears/authenticator');
const userRouter = express.Router();

userRouter.get('/getData',  getAllTodos); 
userRouter.get("/getTaskMonthly", getTaskMonthly);  // Authentication required
userRouter.post("/addTaskMonthly", addTaskMonthly);  // Authentication required
userRouter.delete("/deleteTaskMonthly/:id", deleteTaskMonthly);  // Authentication required
userRouter.post("/addData", addData);  // Authentication required
userRouter.post("/addTodo", addTodo);  // Authentication required
userRouter.delete("/deleteDataById/:id", deleteDataById);  // Authentication required
userRouter.put('/moveToTomorrow/:id', moveToTomorrow);  // Authentication required
userRouter.put('/moveToToday/:id',  moveToToday);  // Authentication required
userRouter.put('/markAsCompleted/:id', markAsCompleted);  // Authentication required

module.exports = userRouter;
>>>>>>> 35700e10c5bcf2b3cadd5613a041d48be0bf2b5f
