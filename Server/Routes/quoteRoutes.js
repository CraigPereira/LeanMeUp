const { Router } = require("express");
const { quote_get, quote_post } = require("../Controllers/quoteController");

//New Router instance
const router = Router();

router.get("/", quote_get);
router.post("/create", quote_post);

module.exports = router;
