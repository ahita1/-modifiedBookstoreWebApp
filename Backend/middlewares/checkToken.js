const jwt = require('jsonwebtoken')
const checkUser = async (req , res , next) => {
    try {
        const token  = req.headers.authorization?.User
        if(!token) {
            return res.json({status : 'bad' , msg : 'no token provided'})
        }
    //   if(token){
    //         return res.json({status : 'ok' , msg : 'valid token haha'})
    //   }
        const decodedToken = await jwt.decode(token , "tokensecret" , (err) => {
            if(err){
                return res.json({status : 'bad' , msg : 'Unauthorized user'})
            } 
        })
        if(!decodedToken){
            return res.json({status : 'bad' , msg : 'Unauthorized'})
        }
        next()
    } catch (error) {
        console.log(error.message);
    }
}

const checkAdmin = async (req , res , next) => {
    try {
        const token  = req.headers.authorization?.split(" ")[1]
        if(!token) {
            return res.json({status : 'bad' , msg : 'no token provided'})
        }
        const decodedToken = await jwt.decode(token , "tokensecret" , (err) => {
            if(err){
                return res.json({status : 'bad' , msg : 'Unauthorized user'})
            } 
        })
        if(!decodedToken){
            return res.json({status : 'bad' , msg : 'Unauthorized'})
        }
        if(decodedToken.User.username !== "Ahunem nigussie"){
            return res.json({status : 'bad' , msg : 'you are bot eligible to use this account'})
        }
        next()
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { checkUser , checkAdmin}