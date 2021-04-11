const { Router } = require("express");
const { stats_post, stats_get } = require("../Controllers/userController");

//New Router instance
const router = Router();

router.get("/stats", stats_get);
router.post("/save-stats", stats_post);

module.exports = router;
