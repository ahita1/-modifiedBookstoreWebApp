const Router = require("express").Router();
const User = require("../models/User");
const { checkAdmin ,checkUser } = require("../middlewares/checkToken")
const jwt = require("jsonwebtoken")
const router = Router;
const bcrypt = require("bcryptjs")



//update user by id
router.put("/:id", checkUser , async (req, res) => {
  try {
     username = req.body.account
    const token = req.headers.authorization?.split(" ")[1]
    const decodedUser = jwt.decode(token , 'tokensecret')
    const currentUser = await User.findById(req.params.id)
    console.log(decodedUser);
    if(currentUser._id.toString() !== decodedUser.user._id ||
    decodedUser.user.username !== "Ahunem Nigussie"){
      return res.json({status : 'bad' , msg : 'unauthorized user'})
    }

    const existUserwithUsername = await User.findOne({ username })
    if
    (
      existUserwithUsername && existUserwithUsername._id.toString() !== decodedUser.user._id
      ){
        return res.json({status : 'bad' , 'msg' : 'there is no user with such username nigga haha'})
      }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body.account,
      },
      { new: true }
    );
    res.json({
      status: "ok",
      msg: "user updated successfully!",
      account: updateUser,
    });
  } catch (error) {
    console.log(error.message);
  }
});



//get user by id or search user by id
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id,);
     if(!user){
        res.json({
            status: "bad",
            msg: "account not exist",
          });
     }
     res.json({
        status: "ok", 
        account : user,
        msg: "user exists",
      });
    } catch (error) {
      console.log(error.message);
    }
  });

  //delete user by id
  router.delete("/:id", async (req, res) => {
    try {
      const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.json({
            status: "ok",
            msg: "user deleted successfully!",
            account : deleteUser,
          });

    } catch (error) {
      console.log(error.message);
    }
  });

  router.get('/get/all', checkAdmin ,  async(req , res) =>{
    try {
      const users = await User.find()
      res.json(users)
    } catch (error) {
      console.log(error.message);
    }
  })
module.exports = router