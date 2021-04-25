const { Router } = require("express");
const {
  basic_stats_post,
  adv_stats_post,
  stats_get,
} = require("../Controllers/userController");

//New Router instance
const router = Router();

//Get all stats of the current user
router.get("/stats", stats_get);
//Create / Update User's Basic stats
router.post("/save-stats", basic_stats_post);
//Create / Update User's Advanced stats
router.post("/save-stats-adv", adv_stats_post);

module.exports = router;
