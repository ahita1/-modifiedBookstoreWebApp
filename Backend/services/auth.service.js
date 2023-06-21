const User = require("../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AuthServices {
  async register(data) {
    try {
      const { username, password, id, sn, laptopModel, department } = data;
      const hashedPass = await bcrypt.hash(password, 10);
      const newUser = await new User({
        username,
        password: hashedPass,
        id,
        sn,
        laptopModel,
        department,
      });
      const savedUser = await newUser.save();
      const token = await jwt.sign(
        { user: savedUser },
        process.env.TOKEN_KEYWORD
      );
      // console.log(user);
      return {
        status: "ok haha",
        msg: "user saved successfully haha....don't worry the next time u login owgay haha",
        user: savedUser,
        token,
      };
    } catch (error) {
      console.log(error.message);
    }
  }

  async login(data) {
    try {
      var { username, password } = data;
      const user = await User.findOne({ username });
      // const comparedPass = await bcrypt.compare(password, existUser.password);
      // if (!comparedPass) {
      //   return {
      //     status: "bad",
      //     msg: "incorrect password nigga haha....try to remember or click the forgot password button to retrieve your account!!!",
      //   };
      // }
      const token = await jwt.sign({ user }, process.env.TOKEN_KEYWORD);
      // const decodedToken = await jwt.decode(
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0NGI4NmExOGFiZGUyY2YwNTcwY2EwYyIsInVzZXJuYW1lIjoiZ2FtbWUiLCJwYXNzd29yZCI6IiQyYiQxMCRrQlVDMUkvV2pkMjQ1eFIvUUhzZXVPSTZQcUpkczVCaE4wYXVvNWdKSGU0aWtBYzZjbkhUSyIsImNyZWF0ZWRBdCI6IjIwMjMtMDQtMjhUMDg6NDE6MDUuMzQ5WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDQtMjhUMDg6NDE6MDUuMzQ5WiIsIl9fdiI6MH0sImlhdCI6MTY4MjY4MTI3Mn0.cO5fW5XaP7oYGCGdbAuW4qeaWseVPNryVecFjpKlQHA"
      // );
      // console.log(decodedToken);
      return {
        status: "ok haha",
        msg: "you loggen in successfully haha....enjoy it haha",
        user,
        token,
      };
    } catch (error) {
      console.log(error.message);
    }
  }

  async admin(data) {
    try {
        const { username, password } = data;
        const token = jwt.sign(
            { user: { username, password } },
            process.env.TOKEN_KEYWORD
          );
      return { status: "ok", msg: "token checked haha", token };
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = AuthServices;
