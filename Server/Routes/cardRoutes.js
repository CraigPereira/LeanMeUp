const { Router } = require("express");
const { cards_get } = require("../Controllers/cardController");

//New Router instance
const router = Router();

router.get("/", cards_get);

module.exports = router;
