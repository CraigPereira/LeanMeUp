const { Router } = require("express");
const { email_post } = require("../Controllers/userController");

//New Router instance
const router = Router();

router.post("/email", email_post);

module.exports = router;
