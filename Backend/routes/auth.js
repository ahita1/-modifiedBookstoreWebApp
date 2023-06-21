const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const AuthMiddleware = require("../middlewares/auth.middleware")
const AuthServices = require("../services/auth.service")


const authMiddleware = new AuthMiddleware()
const authService = new AuthServices()
//Register route
router.post("/register", authMiddleware.register ,  async (req, res) => {
  // console.log(req.params);
  try {
    const result  = await authService.register(req.body)

    res.json(result)
  } catch (error) {
    console.log(error.message);
  }
});

// login routes haha
router.post("/login",authMiddleware.login ,  async (req, res) => {
  try {
    const result = await authService.login(req.body)
    res.json(result)
  } catch (error) {
    console.log(error.message);
  }
});

// Admin login
router.post('/admin' , authMiddleware.admin ,  async (req , res) => {
 try {

  const result = await authService.admin(req.body)
  res.json(result)

 } catch (error) {
  console.log(error.message);
 }
})
module.exports = router;