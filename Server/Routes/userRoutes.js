const { Router } = require("express");
const { adv_stats_post, stats_get } = require("../Controllers/userController");

//New Router instance
const router = Router();

//Get all stats of the current user
router.get("/stats", stats_get);
//Create / Update User's Basic stats
router.post("/save-stats");
//Create / Update User's Advanced stats
router.post("/save-stats-adv", adv_stats_post);

module.exports = router;
