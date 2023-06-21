const User = require("../models/User");
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

class AccountService {

    async update(data){
        try {     
    // const { username } = req.body.account;
    const updateUser = await User.findByIdAndUpdate(
       data.id,
        {
          $set: data.account,
        },
        { new: true }
      );
      return{
        status: "ok",
        msg: "user updated successfully! 😄😄😄",
        account: updateUser,
      };
        } catch (error) {
            console.log(error.message);
        }
    }

// get a single user by its id
    async getUser(id){
        try {
            const user = await User.findById(id)
            if (!user) {
                res.json({
                  status: "bad",
                  msg: "account not exist ,  😢😢😢",
                });
              }
              return user
        } catch (error) {
            console.log(error.message);
        }
    }

// get all users 
    async getUsers(){
        try {
            const users = await User.find(id)
            if (!users) {
                res.json({
                  status: "bad",
                  msg: "cannot find or get users with such id sorry 😢😢😢",
                });
              }
              return users
        } catch (error) {
            console.log(error.message);
        }
    }

// delete a single user by it's id

    async deleteUser(id){
        try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    return{
      status: "ok",
      msg: "user deleted successfully!😄😄😄",
      account: deleteUser,
    };
        } catch (error) {
            console.log(error.message);
        }
    }
}


module.exports = AccountService