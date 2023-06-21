const jwt = require("jsonwebtoken");

class TokenMiddleware {
  async checkUser(req, res, next) {
    try {
      // console.log('where is token');
      const token = req.headers.authorization?.split(" ")[1];
      // console.log(token);
      //  console.log('where is token');
      if (!token) {
        return res.json({ status: "bad", msg: "no token provided" });
      }
      const decodedToken = await jwt.decode(
        token,
        process.env.TOKEN_KEYWORD,
        (err) => {
          if (err) {
            return res.json({ status: "bad", msg: "Unauthorized user" });
          }
        }
      );
      if (!decodedToken) {
        return res.json({ status: "bad", msg: "Unauthorized" });
      }
      next();
    } catch (error) {
      console.log(error.message);
    }
  }

  async checkAdmin(req, res, next) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.json({ status: "bad", msg: "no token provided" });
      }
      const decodedToken = await jwt.decode(
        token,
        process.env.ADMIN_KEYWORD,
        (err) => {
          if (err) {
            return res.json({ status: "bad", msg: "Unauthorized user" });
          }
        }
      );
      if (!decodedToken) {
        return res.json({ status: "bad", msg: "Unauthorized" });
      }
      if (decodedToken.User.username !== "Ahunem nigussie") {
        return res.json({
          status: "bad",
          msg: "you are bot eligible to use this account",
        });
      }
      next();
    } catch (error) {
      console.log(error.message);
    }
  }

  async checkAll(req, res, next) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.json({ status: "bad", msg: "no token provided" });
      }
      const decodedAsAdminToken = await jwt.decode(
        token,
        process.env.ADMIN_KEYWORD
      );
      const decodedAsUserToken = await jwt.decode(
        token,
        process.env.TOKEN_KEYWORD
      );
      if (!decodedAsAdminToken || !decodedAsUserToken) {
        return res.json({ status: "bad", msg: "Unauthorized" });
      }
      decodedAsAdminToken
      ? (req.admin = decodedAsAdminToken)
      :(req.user = decodedAsAdminToken.user)


      next()
    } catch (error) {
      console.log(error.message);
    }
  }

  async checkPrivacy(req , res , next){
    try {
      // const { username } = req.body.account;
      const { username } = req.body.account;
      const token = req.headers.authorization?.split(" ")[1];
      const decodedUser = jwt.decode(token, process.env.TOKEN_KEYWORD);
      const currentUser = await User.findById(req.params.id);
  
      if (
        currentUser._id.toString() !== decodedUser.user._id &&
        decodedUser.user.username !== process.env.ADMIN_LOGIN
      ) {
        return res.json({ status: "bad", msg: "unauthorized user" });
      }
    } catch (error) {
      console.log(error.message);
    }

    next()
  }
}

module.exports = TokenMiddleware;
