const jwt = require('jsonwebtoken')
const User = require('../models/User')
const bcrypt = require('bcrypt')

class AuthMiddleware {
    async register (req , res , next){
        try {
            const { username, password, id , sn , laptopModel , department} = req.body;
    if (!username || !password || !id || !sn || !laptopModel || !department) {
      return res.json({
        status: "bad",
        msg: "please enter the field space ma darling",
      });
    }

    var Username = username.trim().toLowerCase();
    var Password = password.trim().toLowerCase();

    if (Username.length < 4) {
      return res.json({
        status: "bad",
        msg: "sorry username length can't be is less than 4 ",
      });
    }

    if (Username.length > 20) {
      return res.json({
        status: "bad",
        msg: "sorry ahhhh.....username  length cannot be greater than 20 characters",
      });
    }

    if (username === "Ahunem Nigussie") {
      return res.json({ status: "bad", msg: "you are not an elidgible user" });
    }
    if (Password.length < 8) {
      return res.json({
        status: "bad",
        msg: "Ahhh...sorry password length cannot be lessthan 5",
      });
    }

    const existUser = await User.findOne({ username });
    if (existUser) {
      return res.json({
        status: "bad",
        msg: "Ahhhh....username Already exists",
      });
    }

    next()
        } catch (error) {
            console.log(error.message);
        }
    }



    async login(req , res , next) {
        try {
            var { username, password } = req.body;

    if (!username || !password) {
      return res.json({
        status: "bad",
        msg: "please enter the field space ma darling haha",
      });
    }
    const existUser = await User.findOne({ username });
    if (!existUser) {
      return res.json({
        status: "bad",
        msg: "username doesn't exist nigga haha instead click the signUp button and register there",
      });
    }
    const comparedPass = await bcrypt.compare(password, existUser.password);
    if (!comparedPass) {
      return res.json({
        status: "bad",
        msg: "incorrect password nigga haha....try to remember or click the forgot password button to retrieve your account!!!",
      });
    }
    next()
        } catch (error) {
            console.log(error.message);
        }
    }


    
  async admin(req , res , next){
      try {
        const { username, password } = req.body;
        if (!username || !password) {
          return res.json({
            status: "bad",
            msg: "incorrect username and password",
          });
        }
        if (username !== process.env.ADMIN_LOGIN) {
          return res.json({
            status: "bad",
            msg: "incorrect username ",
          });
        }
        if (password !== process.env.ADMIN_PASS) {
          return res.json({
            status: "bad",
            msg: "incorrect password",
          });
        }
        // if (!username || !password) {
        //   return res.json({
        //     status: "bad",
        //     msg: "where is username or password?",
        //   });
        // }
  
      next()
      } catch (error) {
        console.log(error.message);
      }
    }
}


module.exports = AuthMiddleware