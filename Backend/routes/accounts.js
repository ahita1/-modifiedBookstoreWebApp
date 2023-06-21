const Router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = Router;

const TokenMiddleware = require("../middlewares/token.middleware");
const AccountMiddleware = require("../middlewares/account.middleware");
const AccountService = require("../services/accounts.services");

const { checkAll, checkPrivacy , checkAdmin } = new TokenMiddleware();
const { update } = new AccountMiddleware();
const accountService = new AccountService();


// get all users haha
router.get('/' , checkAdmin , async(req  ,res) => {
   try {
    const result = await accountService.getUsers()

    res.json(result)
   } catch (error) {
    console.log(error.message);
   }
})




//update account
router.put("/:id", checkAll, checkPrivacy, update, async (req, res) => {
  try {
    const result = await AccountService.update({
      id: req.params.id,
      account: req.body.account,
    });
    res.json(result)
  } catch (error) {
    console.log(error.message);
  }
});


//get user by id or search user by id
router.get("/:id", checkAll, checkPrivacy, async (req, res) => {
  try {

    const result = await AccountService.getUser(req.params.id)
    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
});


//delete user by id
router.delete("/:id", checkAll, checkPrivacy, async (req, res) => {
  try {
    const result = await AccountService.deleteUser(req.params.id)
    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
});


router.get("/get/all", checkAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
