//Auth Routes
const { Router } = require("express");
const {
  signup_post,
  login_post,
  checkAuth_get,
  logout_get,
} = require("../Controllers/authController");

//New Router instance
const router = Router();

router.post("/signup", signup_post);
router.post("/login", login_post);
router.get("/logout", logout_get);
router.get("/checkAuth", checkAuth_get);

module.exports = router;
