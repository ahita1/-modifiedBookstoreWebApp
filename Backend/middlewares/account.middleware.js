const jwt = require('jsonwebtoken')
const User = require('../models/User')
const bcrypt = require('bcrypt')


class  AccountMiddleware { 
    async update(req , res , next){
        try {
            const existUserwithUsername = await User.findOne({ username });
            if (
              existUserwithUsername &&
              existUserwithUsername._id.toString() !== decodedUser.user._id
            ) {
              return res.json({
                status: "bad",
                msg: "there is no user with such username nigga haha",
              });
            }
        
            if (username !== process.env.ADMIN_LOGIN) {
              return res.json({ status: "bad", msg: "you are not an elidgible user" });
            }
            next()
        } catch (error) {
            console.log(error.message);
        }
    }
}


module.exports = AccountMiddleware
